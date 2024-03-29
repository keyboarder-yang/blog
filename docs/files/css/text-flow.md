---
status: 'done'
author: 'keyboarder-yang'
createTime: '2022-12-18'
title: 'css中文本溢出显示问题'
tags: ['text-flow', '文本溢出']
---
# 文本溢出显示

## 1. 背景

因为浏览器默认是以**单词**为单位进行换行的，单词不可拆分，本行排不下的话会换行；

> + 一个汉字为一个单词
>
> + 连续的字母为一个单词
> + 连续的数字为一个单词
> + 字母和数字的连续也为一个单词
> + 空格会隔断单词
> + `?****`中`?`被视为一个单词，`****?`中`?`和前面的单词视为同一个单词

[![vCnSyQ.png](https://s1.ax1x.com/2022/07/28/vCnSyQ.png)](https://imgtu.com/i/vCnSyQ)

## 2. word-break 和 word-wrap

### 2.1 word-break

> 取值：
>
> + normal：默认值，默认的换行规则。
> + break-all：强制换行，允许任意非文本间的单词断行。（超出盒子宽度就进行换行，不管有没有换行符）
> + keep-all：不允许单词换行，只能在半角空格或连词符处换行。

### 2.2 word-wrap

> 取值：
>
> + break-word：表示一行单词中实在没有其他换行表示的时候才进行换行。
> + normal：默认值，正常的换行规则

### 2.3 区别使用

word-break中最常用的就是break-all属性值，word-wrap中常用的是break-word取值。其区别如下：

> break-all可以理解为更'强硬'的换行方式，就是不管当前行中是否有换行标识（如，空格），只在盒子边界进行换行
>
> break-word可以理解为相对较'弱'的换行方式，就是当前行中若有换行标识，会优先从换行标识进行换行，若没有换行标识则在盒子边界进行换行处理

### 2.4 实际效果

[![viZaTI.png](https://s1.ax1x.com/2022/07/30/viZaTI.png)](https://imgtu.com/i/viZaTI)
