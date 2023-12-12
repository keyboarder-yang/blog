import { getArticles } from '../utils/getArticlesData'
export async function customEnhanceApp(app: any) {
    const pageData: any[] = await getArticles()
    app.provide('$pageData', pageData)
}