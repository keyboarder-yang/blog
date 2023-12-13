import { getArticles } from '../utils/getArticlesData'
import naive from 'naive-ui'

export async function customEnhanceApp(app: any) {
    const pageData: any[] = await getArticles()
    app.provide('$pageData', pageData)
    app.use(naive)
}