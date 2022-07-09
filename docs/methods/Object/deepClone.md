# deepClone

## 介绍

::: tip deepClone 深克隆并返回克隆后的对象。
:::

## 源码

::: details 源码查看

```javascript
/**
 * 描述: 对象的深度克隆,返回克隆后的对象
 * @param {Object} origin - 源对象
 * @param {Object} target - 目标对象
 */
const deepClone = (origin, target = {}) => {
        // 遍历源对象
        for (let key in origin) {
            if (origin.hasOwnProperty(key)) {
                // 判断是否是数据
                let isArray = Object.prototype.toString.call(origin[key]) === '[object Array]';
                // typeof([]、{}、null) 结果为 'object'
                if (typeof (origin[key]) === 'object' && origin[key] !== null) {
                    target[key] = isArray ? [] : {};
                    DeepClone(origin[key], target[key])
                } else {
                    target[key] = origin[key]
                }
            }
        }
        return target
    }
```

:::

## 使用示例

### 示例1-常规用法

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const newInfo = deepClone(info)
info.name = 19
console.log(newInfo.age) // 18
console.log(newInfo === info) // false
```

### 示例2-目标对象不为空的合并规则

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const otherInfo = {
    company: 'fw',
    age: 20
}
const newInfo = getDataFromObject(info, otherInfo)
console.log(newInfo) // {name:'Keyboarder',age: 18,address: 'AnHui,HeFei',company:'fw'}
```