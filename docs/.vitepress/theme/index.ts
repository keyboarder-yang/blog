// @ts-ignore
// 自定义布局组件
import Layout from '../layout/index.vue'
// vitepress提供的默认主题
import DefaultTheme from 'vitepress/theme'
// 主题类型
import type { Theme } from 'vitepress'
// 自定义样式
import './styles/index.scss'
// 自定义enhance函数
import { customEnhanceApp } from "./enhanceApp";

export const BlogTheme: Theme = {
    ...DefaultTheme,
    Layout,
    enhanceApp: ({ app }) => customEnhanceApp(app)
}
export default BlogTheme