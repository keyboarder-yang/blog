// methods 代表类别
// methods：sidebarName 表示该类别在侧边栏显示的名称
// methods：label 表示该类别的子类在侧边栏显示的名称
// methods：name 表示md文档的名称
const methods = {
    'Array': {
        sidebarName: '数组',
        list: [
            {text: '数组去重', name: 'deDuplication'},
            {text: '交集判断', name: 'hasIntersection'},
            {text: '交集获取', name: 'getIntersection'},
            {text: '真值获取', name: 'getTruth'},
        ]
    },
    'Object': {
        sidebarName: '对象',
        list: [
            {text: '从对象中获取指定属性', name: 'getDataFromObject'},
            {text: '深克隆', name: 'deepClone'},
            {text: '非空检测', name: 'isEmpty'},
            {text: '含值检测', name: 'hasValuesIn'}
        ]
    },
    'Tree': {
        sidebarName: '树操作相关',
        list: [
            {text: '树数据过滤', name: 'treeFilter'},
            {text: '树数据遍历', name: 'treeTraverse'},
        ]
    },
    'Common': {
        sidebarName: '实用方法',
        list: [
            {text: '保存为Json', name: 'saveAsJson'},
            {text: '并发请求控制', name: 'concurrencyRequest'},
            {text: '二进制流下载', name: 'blobDownload'},
            {text: '浮点数运算精度优化', name: 'operate'},
            {text: '获取uuid码', name: 'uuid'},
            {text: '瀑布流（定位方式）', name: 'waterFall'},
            {text: '数字签名', name: 'canvasSignature'},
            {text: '时间计数', name: 'timeCount'},
        ]
    },
}
export default methods
