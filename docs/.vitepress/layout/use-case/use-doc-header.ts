import { ref, onMounted } from 'vue'
import { User, CalendarTimes, Edit, Clock } from '@vicons/fa'
import { useData } from 'vitepress';
import { countWord } from "../../utils/countWord";
export function useDocHeader() {
    const descRef = ref(null)
    const words = ref(0)
    const readTime = ref(0)
    const { page } = useData()
    function getDocHeaderInfo() {
        const docDomContainer = window.document.querySelector('#VPContent')
        const wordsContent = docDomContainer?.querySelector('.container')?.textContent || ''
        const images = docDomContainer?.querySelectorAll<HTMLImageElement>('.container img')
        const imageCount = images?.length ? images.length : 0
        let readImageTime = 0
        words.value = countWord(wordsContent)
        if (imageCount <= 10) {
            readImageTime =  (13 + 12 - imageCount) * imageCount / 2
        }else {
            readImageTime = 89 + (imageCount - 10) * 3
        }
        readTime.value = Math.ceil((words.value / 275)) + readImageTime / 60
    }
    return {
        descRef,
        User,
        CalendarTimes,
        Edit,
        Clock,
        words,
        readTime,
        page,
        getDocHeaderInfo,
    }
}