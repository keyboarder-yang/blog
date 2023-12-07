import getMenus from "./menu";
import files from './articleMenuMap'
import methods from "./methodsMenuMap";
import literatures from "./literatureMenuMap";
export default {
    // 根据github仓库映射的地址后缀
    // https://github.com/keyboarder-yang.github.io/vitepress-blog
    base: '/blog',
    // 浏览器上的标签
    title: 'keyboarder-yang', // 所有文档的浏览器标签title
    description: 'keyboarder-yang`s blog', // 会渲染成<meta>标签，SEO用
    themeConfig: {
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        outlineTitle: '文章目录',
        siteTitle: 'keyboarder-yang',
        logo: '/logo.png',
        nav: [
            {
                text: '文章笔记',
                link: '/files/index'
            },
            {
                text: '常用方法',
                link: '/methods/index'
            },
            {
                text: '关于',
                link: '/about/team'
            },
        ],
        sidebar: {
            '/files/': getMenus(files,'/files'),
            '/methods/': getMenus(methods,'/methods'),
            '/literatures/': getMenus(literatures,'/literatures'),
			'/about/': [
				{ text: '加入我们', link: '/about/team'},
                { text: '更新日志', link: 'https://github.com/keyboarder-yang/blog/blob/master/CHANGELOG.md'}
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/keyboarder-yang' },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-07-02 keyboarder-yang'
        },
				search: {
					provider: 'local'
				},
    }
}
