---
title: '盒子模型'
author: 'keyboarder-yang'
createTime: '2023-12-18 11:16:21'
tags: [ '盒子模型', 'box' ]
status: 'done'
---

# 盒子模型

css中每一个标签元素都可以看作是一个‘盒子’，每一个‘盒子’都由`content`、`padding`、`border`、`margin`构成。

## 属性

+ 属性名：`box-sizing`
+ 属性值：

| 属性名             | 设置目标         | 盒子实际大小                       |
|-----------------|--------------|------------------------------|
| content-box（默认） | content大小    | 等于content + padding + border |
| border-box      | border及其内层大小 | 等于设定的大小                      |