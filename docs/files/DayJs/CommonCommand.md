---
title: DayJs 中一些常用操作
date: 2022-06-26 16:42:35
tags: dayjs
summary: 对dayjs中常用命令的总结
categories: DayJs
---

#### 常用方法

1. ##### 初始化日期/时间

   > 格式：`dayjs().formate(type)`，其中type可选列表如下

   | 符号 |      含义       | 示例 |
   | :--: | :-------------: | :--: |
   |  YY  |   年份后两位    |  22  |
   | YYYY |      年份       | 2022 |
   |  M   | 月份1位（0-11） |  6   |
   |  MM  |  月份（0-11）   |  06  |
   |  D   |   日（0-31）    |  2   |
   |  DD  |   日（0-31）    |  02  |
   |  H   |     时0-23      |  5   |
   |  HH  |     时0-23      |  05  |
   |  h   |     时0-12      |  5   |
   |  hh  |     时0-12      |  05  |
   |  m   |     分0-59      |  5   |
   |  mm  |     分0-59      |  05  |
   |  s   |     秒0-59      |  5   |
   |  ss  |     秒0-59      |  05  |

   

2. ##### 格式化日期时间

   > 格式： `dayjs(value).formdate(type)`,value为待转换的值
