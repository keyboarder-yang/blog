# treeTraverse

## 介绍

::: tip treeTraverse 树结构数据的一些遍历方法。
:::

## 源码(4种实现方式)

::: details 源码查看(dfs-递归-先序)

```javascript
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length;
        callback(item);
        flag && readNodes(item.children, callback);
    })
}
```
:::

::: details 源码查看(dfs-递归-后序)

```javascript
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(nodes = [], callback) {
    nodes.forEach((item) => {
        let flag = item.children && item.children.length;
        flag && readNodes(item.children, callback);
        callback(item);
    })
}
```
:::


::: details 源码查看(dfs-循环)
> 实现思想
> + 从首部弹出一个节点
> + 遍历这个节点（执行回调函数）
> + 把这个节点的子节点放入数组中去，根据放入数组中的头部
```javascript
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.unshift(...node.children)
    }
}
```
:::


::: details 源码查看(bfs-循环)
> 实现思想
> + 从首部弹出一个节点
> + 遍历这个节点（执行回调函数）
> + 把这个节点的子节点放入数组中去，根据放入数组中的尾部
```javascript
/**
 * 描述: 对树结构数据的遍历
 * @param {Array} nodes - 源数组
 * @param {Function} callback - 回调函数，接收当前节点数据
 */
function readNodes(tree, callback) {
    let node, curTree = [...tree]
    while ((node = curTree.shift())) {
        callback(node)
        node.children && curTree.push(...node.children)
    }
}
```
:::

