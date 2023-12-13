import { ref, unref, computed, watch } from 'vue'
// @ts-ignore
const modules = import.meta.glob('../../../../**/*.md');
import { useData } from 'vitepress';
export function useLinkArticle() {
    const loading = ref(false)
    const defaultValue = ref('')
    const articleList = ref([])
    const articles = ref([])
    const { page, site } = useData()
    const promiseList: Promise<any>[] = [];
    for (const path in modules) {
        const modulePromise: Promise<any> = modules[path]();
        promiseList.push(modulePromise);
    }

    Promise.all(promiseList).then((pageData) => {
        loading.value = true
        articles.value = pageData.map((pageItem: any) => {
            pageItem.__pageData.filePath = pageItem.__pageData.filePath.replace(/^\.\.\//, '').replace(/\.md$/, '.html')
            return pageItem?.__pageData
        })
    }).catch(() => {
        console.warn('获取文章失败！')
    }).finally(() => {
        loading.value = false
    })

    const tags = computed(() => {
        const temTags = page?.value?.frontmatter?.tags || []
        defaultValue.value = temTags.length ? temTags[0] : ''
        return temTags
    })

    function getArticleLinkByTag(name: string) {
        articleList.value = articles.value.filter(article => article?.frontmatter?.tags?.includes(name))
    }
    function update(name: any) {
        defaultValue.value = name
    }

    watch(() => defaultValue.value, (value: any) => {
        !loading.value && getArticleLinkByTag(value)
    })
    watch(() => loading.value, (value) => {
        !value && getArticleLinkByTag(defaultValue.value)
    })
    return {
        tags,
        getArticleLinkByTag,
        defaultValue,
        update,
        articleList,
        site,
        loading,
    }
}