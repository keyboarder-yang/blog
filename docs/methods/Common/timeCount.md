# timeCount

## 介绍

::: tip timeCount 用于计时，返回计时中的数据。
:::

## 源码

::: details 源码查看

```javascript
/**
 * 描述: 计时器
 * @param {Object} params - 默认{startVal:60,endVal:0,stepVal:-1,timerStep:1000} --- 初始值，结束值（callback若返回为true，则以回调为准，endVal失效），val的步长，计时器的步长
 * @param {Function} calback - 计时器执行时的回调函数（接受一个当前值的参数），返回为true则结束计时
 */
const timeCount = (params, callback) => {
        const defaultVal = {
            startVal: 60,
            endVal: 0,
            stepVal: -1,
            timerStep: 1000,
        }
        let isObject = Object.prototype.toString.call(params) === '[object Object]'
        if (!isObject) {
            params = Object.assign({}, defaultVal)
            console.log('params type is not Object')
        } else {
            Object.keys(defaultVal).forEach((item) => {
                if (!params.hasOwnProperty(item)) {
                    params[item] = defaultVal[item]
                }
            })
        }
        let {startVal, endVal, stepVal, timerStep} = params;
        let currentVal = startVal;
        let timer = setInterval(() => {
            currentVal = currentVal + stepVal;
            let callbackReturn = callback(currentVal);
            if (callbackReturn !== undefined) {
                callbackReturn && clearInterval(timer);
            } else {
                currentVal === endVal && clearInterval(timer);
            }
        }, timerStep)
    }
```

:::

## 使用示例

### 示例1-常规用法

```javascript
timeCount({startVal:5,endVal:0,stepVal: -1,timerStep: 1000},(current) => {
    console.log(current) // 4,3,2,1 间隔1000ms
})
```
