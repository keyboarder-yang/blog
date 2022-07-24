// files的属性名 代表类别
// files的属性值中：sidebarName 表示该类别在侧边栏显示的名称
// files的属性值中：label 表示该类别的子类在侧边栏显示的名称
// files的属性值中：name 表示md文档的名称
const files = {
    'JavaScript': {
        sidebarName: '',
        label: ['数组相关方法 *', '类 *', '闭包', '数据类型', '解构 *', '事件循环', '原型 *', '递归', '正则', 'this指向问题', 'new关键字', '时间计数', '树遍历','防抖和节流'],
        name: ['aboutArray', 'Class', 'Closure', 'DataType', 'deconstruct', 'EventLoop', 'Prototype', 'Recursion', 'RegExp', 'This', 'New', 'TimeCount', 'TreeTraversal','DebounceThrottling'],
    },
    'Vue': {
        label: ['render函数', '插槽', '数据持久化存储','重绘和回流'],
        name: ['Render', 'Slot', 'StatePersistence','RepaintReflow'],
    },
    'TypeScript': {
        label: ['介绍', '基本类型', '接口'],
        name: ['Introduce', 'BasicType', 'Interface'],
    },
    'DesignPattern': {
        sidebarName: '设计模式',
        label: ['设计模式', '工厂模式', '观察者模式', '单例模式', '策略模式'],
        name: ['index', 'FactoryPattern', 'ObservePattern', 'SingletonPattern', 'StrategyPattern'],
    },
    'DayJs': {
        label: ['dayjs常用命令'],
        name: ['CommonCommand'],
    },
    'Element': {
        label: ['时间选择器'],
        name: ['DatePicker'],
    },
    'RoadMap': {
        sidebarName: '学习路线',
        label: ['前端学习路线'],
        name: ['web-road-map'],
    },
    'Hexo': {
        label: ['hexo命令'],
        name: ['hexoCommand'],
    },
}
export default files
