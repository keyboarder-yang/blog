---
title: '模块化'
author: 'keyboarder-yang'
createTime: '2023-12-22 15:30:44'
tags: ['工程化', '模块化']
status: 'done'
---

# 模块化

## 什么是模块化
模块化就是将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并进行组合。其内部数据与实现是私有的，只是向外部暴露一些接口（方法）与外部模块进行通信。

## 模块化的发展历程
+ 文件划分
+ 命名空间（基于简单对象的封装）
+ `IIFE`-自执行函数（闭包）

### 文件划分
把应用的数据和逻辑放到不同的`js`文件中，`HTML`中通过不同的`script`标签引入
:::warning 缺点
+ 模块变量相当于在全局声明和定义，会有变量名冲突的问题。
+ 变量都在全局定义，导致难以调试，我们很难知道某个变量到底属于哪些模块。
+ 无法清晰地管理模块之间的依赖关系和加载顺序。
:::

### 命名空间
每个变量和逻辑都有自己的命名空间，可以清楚的知道某个变量属于哪个模块，同时也避免了全局变量命名的问题
```javascript
let modulesA = {
    data: 'module-a',
    getData(){
        return this.data
    }
}
```
:::warning 缺点
数据不安全，外部可以直接修改模块内的数据
:::

### IIFE
每个立即执行函数都会创建自己的作用域（闭包）,外界变量无法访问私有作用域中的变量，只有模块内部可以访问，安全性更高
```javascript
;(function (moduleB) {
  // 通过传参的形式引入依赖
  var data = "module-a";
  function getData() {
     return this.data
  }
  // 全局暴露模块A
  window.moduleA = {
      getData,
  }
})(moduleB);
```
:::warning 缺点
引入的`js`文件之间的加载顺序问题依旧存在
:::

## 模块化的规范
+ `CommonJs`规范（服务端）
+ `AMD`(async module definition)
+ `CMD`(common module definition)
+ `ESM`(ES module)--`ECMAScript`官方

### CommonJS
+ 每个文件都可以当作一个模块
+ 模块在服务端加载是`运行时同步`加载的
+ 模块在浏览器运行时需要提前编译打包处理（browserify）
#### 模块的暴露
本质都是暴露`exports`对象，`exports`对象默认是`{}`
```javascript
module.exports = value // 覆盖exports的值
exports.xxx = value // 给exports增加新属性
```
#### 模块的引入
```javascript
require(模块路径)
```

### AMD（require.js）
专门针对于`浏览器端`，模块的加载是`异步`的。
#### 模块的暴露
```javascript
// 没有依赖模块的写法
define(function() {
    return module
})
// 有其他依赖模块的写法
define(['module1', 'module2'], function(m1, m2) {
    return module
})
```
#### 模块的引入
```javascript
require(['module1', 'module2'], function (m1, m2) {
    // 使用m1，m2
})
```

### CMD（seajs）
+ 专门针对于`浏览器端`，模块的加载是`异步`的。
+ 模块使用时才会加载

#### 模块的暴露
```javascript
// 没有依赖模块的写法
define(function(require, exports, module) {
    // 给exports对象复制的方式
    exports.xxx = vlaue
    // 覆盖exports对象的方式
    modules.exports = vlaue
})
// 有其他依赖模块的写法
define(function (require, exports, module){
    // 引入依赖模块（同步）
    var module2 = require('依赖路径')
    // 引入依赖模块（异步）
    require.async('依赖路径', function (m) {
        // 使用模块m
    })
    // 暴露模块
    exports.xxx = value
})
```
#### 模块的引入
```javascript
define(function (require) {
    var m1 = require('模块路径')
    // 使用m1
})
```

### ESM
依赖模块需要编译打包处理
+ 使用工具（babel）将es6转为es5
+ 使用工具（browserify）编译打包js
#### 模块的暴露
```javascript
// 1. 分别暴露
export function fn1() {}
export function fn2() {}

// 2. 统一暴露
function fn1() {}
function fn2() {}
export { fn1, fn2 }

// 3. 默认暴露（可以暴露任何类型数据，暴露什么数据，接受到的就是什么数据）
export default xxx
```
#### 模块的引入
```javascript
// 1. 分别暴露和统一暴露的情况下需要使用解构赋值的形式进行引入
import { fn1, fn2 } from '模块路径'
// 2. 默认暴露
import xxx from '模块路径'
```




## 模块化的好处
+ 避免命名冲突（减少命名空间污染）
+ 更好的分离，按需加载
+ 更高复用性，高可维护性

