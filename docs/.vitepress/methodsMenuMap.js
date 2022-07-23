// methods 代表类别
// methods：sidebarName 表示该类别在侧边栏显示的名称
// methods：label 表示该类别的子类在侧边栏显示的名称
// methods：name 表示md文档的名称
const methods = {
    'Object': {
        sidebarName: '对象',
        label: ['从对象中获取指定属性', '深克隆'],
        name: ['getDataFromObject', 'deepClone'],
    },
    'Common': {
        sidebarName: '实用方法',
        label: ['扁平数据树结构化', '保存为Json', '时间计数'],
        name: ['dataToTree', 'saveAsJson', 'timeCount'],
    },
    'Tree': {
        sidebarName: '树操作相关',
        label: ['树数据过滤', '树数据遍历'],
        name: ['treeFilter', 'treeTraverse'],
    }
}
export default methods
