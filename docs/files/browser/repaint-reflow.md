---
status: 'done'
author: 'keyboarder-yang'
createTime: '2022-07-23'
title: '回流和重绘'
tags: ['回流', '重绘']
---
# 回流和重绘

## 简介

回流和重绘是指当HTML或CSS节点发生变化时，浏览器会根据变化的节点重新绘制或者重新布局。回流和重绘会导致浏览器性能降低，应尽量减少。

> + 回流：重新布局。一般页面元素大小、位置、结构、内容和字体大小改变都会引发回流。回流的下一步就是重绘，故：回流一定会重绘，重绘却不一定会回流。
> + 重绘：重新绘制。一般页面元素的颜色，背景色改变时，需要进行重新绘制。

## 页面渲染

### 过程

1. 解析HTML，形成HTML DOM树，解析CSS，生成CSS规则树。
2. 将HTML DOM树与CSS规则树结合，生成Render树。
3. 布局Render树。
4. 绘制Render树。
5. 浏览器将各层信息发送给GPU，GPU将各层合成，显示在屏幕上。

### 流程图

[![jXKngI.png](https://s1.ax1x.com/2022/07/23/jXKngI.png)](https://imgtu.com/i/jXKngI)





