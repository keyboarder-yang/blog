// methods 代表类别
// methods：sidebarName 表示该类别在侧边栏显示的名称
// methods：label 表示该类别的子类在侧边栏显示的名称
// methods：name 表示md文档的名称
const methods = {
    'Object': {
        sidebarName: '对象',
        label: ['getDataFromObject', 'deepClone'],
        name: ['getDataFromObject', 'deepClone'],
    },
    'Common': {
        sidebarName: '实用方法',
        label: ['dataToTree', 'saveAsJson', 'timeCount'],
        name: ['dataToTree', 'saveAsJson', 'timeCount'],
    },
}
export default methods
