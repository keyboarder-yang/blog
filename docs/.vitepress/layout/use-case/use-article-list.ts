import { ref, computed, watch } from 'vue';
import { useData } from 'vitepress';
import hasIntersection from '../../utils/has-intersection';
// @ts-ignore
const modules = import.meta.glob('../../../../**/*.md');

export function useArticleList() {
    const articles = ref([])
    const allArticles = ref([])
    const { page} = useData()

    const promiseList: Promise<any>[] = [];
    for (const path in modules) {
        const modulePromise: Promise<any> = modules[path]();
        promiseList.push(modulePromise);
    }
    Promise.all(promiseList).then((pageData: []) => {
        allArticles.value = articlesMdSuffixToHtml(pageData)
        articles.value = filterPages(allArticles.value, (page.value?.frontmatter.tags || []))
    }).catch(() => {
        console.warn('获取文章失败！')
    })
    watch(() => page.value, (value) => {
        articles.value = filterPages(allArticles.value, (value?.frontmatter.tags || []))
    })
    /**
     * @description 处理文章路径，返回新的文章数组
     * @param pages
     * @constructor
     */
    function articlesMdSuffixToHtml(pages: any[]): any[] {
        return pages.map((module: any) => {
            module.__pageData.filePath = module.__pageData.filePath.replace(/^\.\.\//, '').replace(/\.md$/, '.html')
            return module.__pageData
        })
    }
    function filterPages(pages: any[], tags: any[]): any[] {
        return pages.filter((article: any) => {
            const articleTags = article?.frontmatter.tags || []
            return hasIntersection(tags, articleTags) && article?.title !== page.value?.title
        })
    }

    return {
        articles,
    }
}