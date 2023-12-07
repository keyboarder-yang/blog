---
title: css学习
date: 2022-12-17 13:09:55
tags: BEM 规范
summary: BEM命名规范
categories: CSS
---

# BEM命名规范

## 什么是BEM

> B(block) E(element)M(modifier),分别代表块，元素，修饰符。是一种CSS命名规范，有利于CSS代码更加利于维护。

### block

> 可重用的功能独立的页面组件。在HTML中，块由class属性表示。

::: tip 特性

1. 块的名称描述其用途（菜单或者按钮）而不是状态（红色或者黄色）
2. 块不应该影响其周围环境，意味着不应该设置该块的外部边距或者定位
3. 使用BEM时，也不应该使用CSS标记或者ID选择器
4. 块之间可以嵌套
5. 可以有任意层数的嵌套层级

:::

### element

> 块的合成部分，不可以单独使用

::: tip 特性

1. 描述其用途，而不是状态
2. 通过"__"和块进行分割
3. 元素始终是块的一部分，而不是另一个元素。这意味着元素名称不能定义层次结构

:::

### modifier

> 定义块或元素的外观、状态或行为的实体

:::tip 特性

1. 修饰符通过"--"或者"_"连接
2. 描述一个外观（大小，颜色），状态（disabled，focused），行为等

:::

## BEM规范的优缺点

### 优点：

1. 不同表达代表不同含义，使得css代码结构更加清晰（即代表模块，还是一个模块中的元素亦或状态）
2. 命名规范，不同团队风格统一更易于维护

### 缺点：

1. 命名较长，现在项目中一般都会引入css预处理器，如scss，less等，这样使得命名较长这个缺点并不是那么的严重


