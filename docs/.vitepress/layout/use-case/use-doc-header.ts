import { ref } from 'vue'
import { useData } from 'vitepress';
import { countWord } from "../../utils/countWord";
export function useDocHeader() {
    const descRef = ref(null)
    const isShowDocHeader = ref(true)
    const words = ref(0)
    const readTime = ref(0)
    const { page } = useData()
    function getDocHeaderInfo() {
        const descElement = document.getElementById('desc')
        const h1Element = document.querySelector('h1')
        if(h1Element){
            h1Element.style.display = 'inline-block';
            isShowDocHeader.value = true
            if(!descElement){
                h1Element.after(descRef.value)
            }
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
            readTime.value = Math.ceil((words.value / 275)) + Math.ceil(readImageTime / 60)
        }else{
            isShowDocHeader.value = false
        }
    }
    return {
        descRef,
        words,
        readTime,
        page,
        getDocHeaderInfo,
        isShowDocHeader,
    }
}