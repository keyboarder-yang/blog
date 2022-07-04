import getMenus from "./menu";
import files from './articleMenuMap'
import methods from "./methodsMenuMap";
export default {
    // 根据github仓库映射的地址后缀
    // https://github.com/keyboarder-yang.github.io/vitepress-blog
    base: '/vitepress-blog',
    // 浏览器上的标签
    title: 'keyboarder-yang', // 所有文档的浏览器标签title
    description: 'keyboarder-yang`s blog', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        siteTitle: 'keyboarder-yang',
        logo: '/logo.png',
        nav: [
            {
                text: 'About Me',
                items: [
                    { text: '我的简历（开发中）', link: 'https://keyboarder-yang.github.io/my-resume/' },
                    { text: '个人组件库（开发中）', link: 'https://keyboarder-yang.github.io/my-methods/' },
                    { text: '个人方法集合（开发中）', link: '/methods/index' }
                ]
            }
        ],
        sidebar: {
            '/files/': getMenus(files,'/files'),
            '/methods/': getMenus(methods,'/methods'),
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/keyboarder-yang' },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-07-02 keyboarder-yang'
        },
    }
}
