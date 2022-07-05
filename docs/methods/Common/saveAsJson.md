# saveAsJson

## 介绍

::: tip saveAsJson 用于下载并保存数据为json格式。
:::

## 源码

::: details 源码查看

```javascript
/**
 * 描述: 前端数据下载为json格式
 * @param {Array} data - 待转换的数据
 * @param {String} filename - json文件的名称
 */
const saveAsJson = (data = [{}], filename = 'file.json') => {
        if (typeof data === "object") data = JSON.stringify(data)
        let blob = new Blob([data], {type: 'text/json'})
        let e = document.createEvent('MouseEvents')
        let a = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
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
saveAsJson(info,'fileName.json')
```
