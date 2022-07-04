---
title: js学习 --- this指向问题
date: 2022-05-18 22:31:16
tags: this指向
summary: 对于This指向的一些简单理解
categories: JavaScript
---

#### 介绍

+ this -> JavaScript 关键字
+ 当前环境执行期上下文对象的一个属性
+ this在不同的环境、不同作用下，表现不同

#### this指向

> this 指向（函数在定义的时候this是不确定的，只有在调用的时候才可以确定this的指向）
>
> 1. 普通函数中和定时器，内部的this指向全局window（严格模式下，普通函数this指向undefined）
> 2. 函数作为一个对象的方法，该对象被调用，this指向该对象
> 3. 构造函数this指向返回的这个对象
> 4. 箭头函数，内外this一致，绑定最近的一层对象上

#### 改变this指向

> 1. 箭头函数
> 2. let 变量 = this
> 3. 通过call，apply，bind可以改变this的指向，call，apply会立即调用，bind返回一个函数
> 4. new实例化一个对象
