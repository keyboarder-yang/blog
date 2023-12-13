import { ref, unref, computed, inject, watch } from 'vue'
import { Link } from '@vicons/fa'
import { useData } from 'vitepress';
export function useLinkArticle() {
    const defaultValue = ref('')
    const pageData: any[] = unref(inject('$pageData'))
    const articles = pageData.map((pageItem: any) => {
        pageItem.__pageData.filePath = pageItem.__pageData.filePath.replace(/^\.\.\//, '').replace(/\.md$/, '.html')
        return pageItem?.__pageData
    })
    console.log(articles)
    const articleList = ref([])
    const { page, site } = useData()
    const tags = computed(() => {
        const temTags = page?.value?.frontmatter?.tags || []
        defaultValue.value = temTags.length ? temTags[0] : ''
        return temTags
    })

    function getArticleLinkByTag(name: string) {
        articleList.value = articles.filter(article => article?.frontmatter?.tags?.includes(name))
    }
    function update(name: any) {
        defaultValue.value = name
    }

    watch(() => defaultValue.value, (value: any) => {
        getArticleLinkByTag(value)
    })
    return {
        Link,
        tags,
        getArticleLinkByTag,
        defaultValue,
        update,
        articleList,
        site,
    }
}