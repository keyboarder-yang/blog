// files的属性名 代表类别
// files的属性值中：sidebarName 表示该类别在侧边栏显示的名称
// files的属性值中：label 表示该类别的子类在侧边栏显示的名称
// files的属性值中：name 表示md文档的名称
const files = {
  JavaScript: {
    sidebarName: '',
    list: [
      { text: '数据类型', name: 'DataType' },
      { text: '原型', name: 'Prototype' },
      { text: '上下文', name: 'Context' },
      { text: 'this指向问题', name: 'This' },
      { text: 'new关键字', name: 'New' },
      { text: 'Apply、Bind、Call', name: 'ApplyBindCall' },
      { text: '闭包', name: 'Closure' },
      { text: '防抖和节流', name: 'DebounceThrottling' },
      { text: '异步编程', name: 'AsyncProgram' },
      { text: '事件循环', name: 'EventLoop' },
      { text: '递归', name: 'Recursion' },
      { text: '数据拷贝', name: 'Clone' },
      { text: '正则', name: 'RegExp' },
      { text: '树遍历', name: 'TreeTraversal' }
    ]
  },
  TypeScript: {
    list: [
      { text: '介绍', name: 'Introduce' },
      { text: '基本类型', name: 'BasicType' },
      { text: '接口', name: 'Interface' }
    ]
  },
  CSS: {
    list: [
      { text: 'BEM规范', name: 'BEM' },
      { text: '文本溢出显示问题', name: 'TextFlow' },
      { text: 'Grid布局', name: 'Grid' }
    ]
  },
  Vue: {
    list: [
      { text: 'render函数', name: 'Render' },
      { text: '插槽', name: 'Slot' },
      { text: '数据持久化存储', name: 'StatePersistence' },
      { text: '重绘和回流', name: 'RepaintReflow' },
      { text: 'scoped原理', name: 'Scoped' }
    ]
  },
  VueSource: {
    sidebarName: 'Vue源码学习',
    list: []
  },
  DesignPattern: {
    sidebarName: '设计模式',
    list: [
      { text: '设计模式', name: 'index' },
      { text: '单例模式', name: 'SingletonPattern' },
      { text: '工厂模式', name: 'FactoryPattern' },
      { text: '观察者模式', name: 'ObservePattern' },
      { text: '策略模式', name: 'StrategyPattern' }
    ]
  },
  MicroFront: {
    sidebarName: '微前端',
    list: [{ text: '介绍', name: 'introduce' }]
  },
  DayJs: {
    list: [{ text: 'dayjs常用命令', name: 'CommonCommand' }]
  },
  Element: {
    list: [{ text: '时间选择器', name: 'DatePicker' }]
  },
  WebGis: {
    list: [{ text: '入门', name: 'index' }]
  },
  Hexo: {
    list: [{ text: 'hexo命令', name: 'hexoCommand' }]
  },
  Git: {
    list: [
      { text: 'git介绍', name: 'introduction' },
      { text: 'git常用命令', name: 'instruction' }
    ]
  },
}
export default files
