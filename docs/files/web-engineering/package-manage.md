---
title: '包管理工具'
author: 'keyboarder-yang'
createTime: '2023-12-23 16:20:10'
tags: ['工程化', '包管理工具']
status: 'develop'
---

# 包管理
## 包管理工具

### npm（Node Package Manager）
安装node会自动安装npm工具
#### 常用命令

### pnpm
### yarn

## 配置文件
### package.json
记录项目中项目名称、版本、依赖包等信息的配置文件
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
        "vue": "版本号",
        "...": "...",
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