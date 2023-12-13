---
status: 'done'
author: 'keyboarder-yang'
createTime: '2022-06-26'
title: '获取数组中的真值'
tags: ['array', '真值']
---

# getTruth

## 介绍
getTruth 获取数组的真值（`false` ,`''`, `undefined` ,`null` , `NaN`, `0`均视为假值)。

## 实现

::: code-group
```JavaScript
/**
 * 获取数组的真值
 * @param {Array} array
 * @return {Array}
 * @example
 * getTruth([1, '', '2', false, true, 0])
 */
function getTruth(array) {
    return array.filter((value) => Boolean(value));
}


```

```TypeScript
/**
 * 获取数组的真值
 * @param {Array} array
 * @return {Array}
 * @example
 * getTruth([1, '', '2', false, true, 0])
 */
function getTruth(array: any): any[] {
    return array.filter((value: any) => Boolean(value));
}

```
:::


