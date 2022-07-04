---
title: js学习 --- 数组遍历
date: 2021-06-16 22:01:18
tags: array
summary: 对于数组遍历方法的总结
categories: JavaScript
---
# 数组遍历

> 引用地址：https://blog.csdn.net/weixin_42733155/article/details/81145334

## forEach

> `forEach`是最简单、最常用的数组遍历方法，它提供一个回调函数，可用于处理数组的每一个元素，默认没有返回值。回调函数的参数，第一个是处于当前循环的元素，第二个是该元素下标，第三个是数组本身。三个参数均可选。`当数组项为原始类型时，forEach不会改变原数组，当数组项为引用类型时，原数组会发生改变.`

```js
// 基本写法
let arr = [1,2,3,4,5];
arr.forEach((item,index,Array)=>{
    // 执行操作
})
```

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



## map

> `map` 提供一个回调函数，不改变当前数组，默认返回一个数组。回调参数为当前循环的元素、该元素下标、数组本身。
>
> > `join()`把数组项以特定的字符链接=>`字符串`

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
    return item.a
}) // tem: [1,4,9]
console.log(tem.join()); // 1,4,9
```

## filter

> `filter`，过滤，即对数组元素的一个条件筛选。它提供一个回调函数，参数依次为处于当前循环的元素、该元素下标、数组本身，三者均可选。默认返回一个数组，原数组的元素执行了回调函数之后返回值若为true，则会将这个元素放入返回的数组中。
>
> > `filter`方法不改变原数组，和`forEach`类似，数组项为引用类型，数组会被改变，原始类型，数组不会被改变

```js
let arr = [1,2,3,4,5];
let res = arr.filter((item,index)=>{
    return item*index>=3;
})
console.log(arr); // [1,2,3,4,5]
console.log(res); // [3,4,5]
```

