---
title: '包管理工具'
author: 'keyboarder-yang'
createTime: '2023-12-23 16:20:10'
tags: ['工程化', '包管理工具']
status: 'develop'
---

# 包管理
## 包管理工具

### npm
npm的全称是`Node Package Manager`，是随同`NodeJS`一起安装的包管理和分发工具，它很方便让`JavaScript`开发者下载、安装、上传以及管理已经安装的包。其常用指令如下：

| npm命令                            | 备注解释                                                    |
|:---------------------------------|:--------------------------------------------------------|
| npm i \<pkg\>                    | 安装package包,等价于npm install \<pkg\><br/>默认安装package包的最新版本 |
| npm i \<pkg\> -g                 | 全局安装                                                    |
| npm i \<pkg\> -dev               | 安装到开发环境                                                 |
| npm i \<pkg\> @version           | 安装指定版本的包                                                |
| npm i \<pkg\> @version "\>a \<b" | 安装a~b之间的版本                                              |
| npm uninstall \<pkg\>            | 卸载指定包                                                   |
| npm update \<pkg\>               | 更新指定包                                                   |
| npm run 命令                       | 运行package.json中指定的script脚本                              |
| npm config set registry url      | 设置指定的下载源                                                |
### pnpm
### yarn

## 配置文件
### package.json
用来描述项目以及项目所依赖的模块信息
#### 生成
``` shell
# 创建时填写信息
npm init  

# 所有信息使用默认的
npm init -y
```
#### 常见配置说明
> 依赖集中的版本号，都是依据[SemVer](https://semver.org/lang/zh-CN/)版本规范的
``` json
{
    "name": "", // 项目名称
    "version": "", // 项目版本
    "private": "", // 是否私有
    "description": "", // 项目描述
    "author": "", // 作者
    "license": "", // 开源协议
    "main": "", // 设置程序入口
    "script": {}, // 脚本命令

    "dependencies": {
        "vue": "*x.y.z", // *表示匹配 *.*.* 版本 其中*表示最新
        "vue": "^x.y.z", // ^表示匹配 x.*.* 版本
        "vue": "~x.y.z", // ~表示匹配 x.y.* 版本
        "vue": "x.y.z", // 固定版本号为 x.y.z
    }, // 依赖集
    "devDependencies": {
        "webpack": "版本号",
        "babel": "版本号",
        "loader": "版本号",
        "...": "...",
    }, // 开发依赖集
    "peerDependencies": {
        "vue3": "版本号", // 比如element-plus的对等依赖集-vue
        "...": "...",
    }, // 对等依赖集，依赖的这个包，它必须是以另外一个宿主为前提
}
```
### package.lock.json

## 发布自己的开发包

## 相关知识点
:::info `npm install` 的原理？
:::