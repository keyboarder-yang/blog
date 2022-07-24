---
title: js学习 --- 数组遍历
date: 2021-06-16 22:01:18
tags: array
summary: 对于数组遍历方法的总结
categories: JavaScript
---
# 数组相关方法

## 数组遍历

### forEach

::: tip forEach介绍

用途：数组遍历

接收两个参数：

+ **callback**（接收三个参数：当前元素值，索引和数组本身）
+  [this指向](./This.md)。

:::

#### 基本用法

```js
let arr = [1,2,3,4,5];
arr.forEach((item,index,Array)=>{
    // 执行操作
})
```
#### 特殊

```js
var arr1 = [1,2,3,4]; // 数组项为原始类型
var arr2 = [{a:1},{a:2},{a:3}]; // 数组项为引用类型
arr1.forEach(item =>{
    item = item * item;
});
arr2.forEach(item =>{
    item.a = item.a * item.a;
});
console.log(arr1); // [1,2,3,4]
console.log(arr2); // [{a:1},{a:4},{a:9}],原数组发生改变
```

### map

::: tip map介绍

用途： 数组遍历

接收两个参数：

+ **callback**（接收三个参数：当前元素值，索引和数组本身）
+  [this指向](./This.md)。

说明：callback中的返回值，即为新数组中的项

:::

#### 基本用法

```js
let arr = [1,2,3,4,5];
let res = arr.map((item,index,Array)=>{
    return item*(index+1)
})
console.log(arr);// [1,2,3,4,5]
console.log(res);// [1,4,6,16,25]
```

```js
var arr2 = [{a:1},{a:2},{a:3}]; // 数组项为引用类型
var tem  = arr2.map((item)=>{
    item.a = item.a + 1;
    return item.a
}) // tem: [2,3,4]
console.log(arr2) // [{a:2},{a:3},{a:4}]
console.log(tem.join()); // 2,3,4
```

::: warning 注意

forEach 和 map 异同

1. 相同
   + 遍历数组，执行相关操作
2. 不同
   + map会返回一个新的数组，而forEach不会

提示：forEach和map方法都可以改变原数组，前提是数组中的项为引用类型，基本类型的数据不会被改变。

:::

### filter

::: tip filter介绍

用途：数组过滤

接收两个参数：

+ **callback**（接收三个参数：当前元素值，索引和数组本身）
+  [this指向](./This.md)。

说明：callback中的返回值为true则返回这一项。

:::

#### 基本用法

```js
let arr = [1,2,3,4,5];
let res = arr.filter((item,index)=>{
    return item*index>=3;
})
console.log(arr); // [1,2,3,4,5]
console.log(res); // [3,4,5]
```

### find

::: tip find介绍

用途：数组查找

接收两个参数：

+ **callback**（接收三个参数：当前元素值，索引和数组本身）
+  [this指向](./This.md)。

说明：callback中的返回值为true则不会向下继续查找，直接返回已查找到的这一项，若遍历完数组仍未查找到，则返回undefined。

:::

#### 基本用法

```js
let arr = [1,2,3,4,5];
let res1 = arr.find((item)=>{
    return item === 3;
})
let res2 = arr.find((item)=>{
    return item === 0;
})
console.log(res1); // 3
console.log(res2); // undefined
```

### findIndex

::: tip findIndex介绍

用途：查找符合条件的项的索引值

接收两个参数：

+ **callback**（接收三个参数：当前元素值，索引和数组本身）
+  [this指向](./This.md)。

说明：callback中的返回值为true则不会向下继续查找，直接返回已查找到的元素的索引，若遍历完数组仍未查找到，则返回-1。

:::

#### 基本用法

```js
let arr = [1,2,3,4,5];
let res1 = arr.findIndex((item)=>{
    return item === 3;
})
let res2 = arr.findIndex((item)=>{
    return item === 0;
})
console.log(res1); // 2
console.log(res2); // -1
```



