# getDataFromObject

## 介绍

::: tip getDataFromObject 用于从对象中获取指定的属性值，并返回到一个新的对象中去。
:::

## 源码

::: details 源码查看

```javascript
/**
 * 描述：从目标对象中获取指定的数据，返回一个新的对象
 * @param {Object} targetObject - 目标对象
 * @param {Array} keys - 新对象的keys eg ['a', 'b', 'c as newC', 'd as newD']
 * @param {Boolean} isConsoleError - 是否打印未找到的属性名
 */
const getDataFromObject = (targetObject, keys, isConsoleError = true) => {
        return keys.reduce((result, key) => {
            const allKey = key.split(' as ');
            const [oKey, nKey] = allKey;
            if (targetObject.hasOwnProperty(oKey)) {
                let rKey = nKey || oKey
                result[rKey] = targetObject[oKey];
            } else {
                if (isConsoleError) {
                    console.log(`目标对象中未读取到${oKey}属性`)
                }
            }
            return result;
        }, {});
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
const newInfo = getDataFromObject(info, ['name', 'age']) 
console.log(newInfo) // {name:'Keyboarder',age: 18}
```

### 示例2-可对属性进行重新命名

```javascript
const info = {
    name: 'Keyboarder',
    age: 18,
    address: 'AnHui,HeFei',
}
const newInfo = getDataFromObject(info, ['name as userName', 'age'])
console.log(newInfo) // {userName:'Keyboarder',age: 18}
```
