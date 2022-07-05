# dataToTree

## 介绍

::: tip dataToTree 用于把有层级关系的扁平数据，树结构化。
:::

## 源码

::: details 源码查看

```javascript
/**
 * 描述: 扁平数据树结构化
 * @param {Array} source - 待处理的数组
 * @param {String} c_p_param - 孩子节点上和父亲节点关系的参数名
 * @param {String} p_param - 父亲节点上和孩子节点关系的参数名
 * @param {String|Number} root_param - 根节点的标识---p_param和root_param相等的项作为根节点
 */
const dataToTree = (source = [], c_p_param = 'pid', p_param = 'id', root_param = 0) => {
        let cloneData = JSON.parse(JSON.stringify(source))      // 对源数据深度克隆
        return cloneData.filter(father => {                      // 循环所有项，并添加children属性
            let branchArr = cloneData.filter(child => father[p_param] == child[c_p_param]);   // 返回每一项的子级数组
            branchArr.length > 0 ? father.children = branchArr : ''   //给父级添加一个children属性，并赋值
            return father[p_param] == root_param;      //返回第一层
        });
    }

```

:::

## 使用示例

### 示例1-常规用法

```javascript
const list = [
    {name: 1, id: 1, parentId: 0},
    {name: 2, id: 2, parentId: 1},
    {name: 3, id: 3, parentId: 1},
    {name: 4, id: 4, parentId: 2},
    {name: 5, id: 5, parentId: 2},
    {name: 6, id: 6, parentId: 3},
    {name: 7, id: 7, parentId: 4},
    {name: 8, id: 8, parentId: 5},
]
const treeData = dataToTree(list, 'parentId', 'id', 0)
```

