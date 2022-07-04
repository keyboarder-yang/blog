---
title: hexo学习
date: 2022-05-12 21:23:56
tags: hexo命令
summary: 对于hexo使用方法总结
categories: Hexo
---

### 常用命令
```
hexo new TitleName #新建文章TitleName
hexo new page PageName #新建页面PageName---会创建在source目录下
hexo new page --path a/b #在source/_post下新建目录a,a中新建文章b
hexo generate/hexo g #生成静态页面至public目录
hexo server/hexo s #开启预览访问端口
hexo deploy/hexo d #部署到GitHub
hexo d -g #生成并部署到GitHub
hexo s -g #生产并开启本地服务
```

### 上传到github报错
> fatal: unable to access ‘https://github.com/.......‘: OpenSSL SSL_read: Connection was reset
> 原因：服务器的SSL证书没有经过第三方机构的签署，所以才报错
> 解决方法：```git config --global http.sslVerify "false"``` 解除验证
