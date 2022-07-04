---
title: js学习 --- 原型和原型链
date: 2022-06-03 14:21:21
tags: 原型链
summary: 对于原型和原型链的总结
categories: JavaScript
---

#### 相关名称

> + `prototype`: 原型
> + `__proto__`:  原型链（链接点）,__原型链是由`__proto__`连接起来的‘链条’__

#### 从属关系

> `prototype`  ---> 函数的一个属性：就是一个普通对象{}
>
> `__proto__`---> 对象`Object`的一个属性： 对象{}
>
> 对象的`__proto__`保存着该对象的构造函数的`prototype`

#### tips

> + 实例的`__proto__` 和 构造函数的`prototype`是全等的
> + 构造函数的`prototype`的`__proto__`和`Object.prototype`是全等的。
> + `Object.prototype.__proto__`  的返回值是null
