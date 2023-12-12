import { useData } from 'vitepress'
import { unref } from 'vue'

export function useHomeBanner() {
    const { theme, description } = useData()
    const { siteTitle, subSiteTitle, inspiring } = unref(theme)
    return {
        title: siteTitle,
        subTitle: subSiteTitle,
        inspiring,
        description,
    }
}