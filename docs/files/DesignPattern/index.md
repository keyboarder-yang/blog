---
title: 设计模式学习
date: 2022-05-16 22:09:55
tags: 设计模式
summary: 对于设计模式的一些简单理解
categories: DesignPattern
---

#### 1. 什么是设计模式

> 设计模式是优秀代码设计经验的总结，具体到某个设计模式的话，就是在特定环境，特定问题的一种优雅的解决方案。

#### 2.为什么使用设计模式
> 使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

#### 3.设计模式的种类

+ 设计模式分为3大类

    + 创建型模式

      > 处理对象的创建，根据实际情况使用合适的方式创建对象，解决创建类或者实例化对象时产生的问题

    + 结构型模式

      > 通过识别系统中组件间的简单关系来简化系统的设计。解决类或者对象组合在一起时候的问题

    + 行为型模式

      > 用于识别对象之间常见的交互模式并加以实现。解决类或者对象之间耦合、职责关系的问题


#### 4.前端常用设计模式

+ 单例模式

  > 定义：单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例单例模式。单例模式只应在有真正的 “单一实例” 的需求时才可使用。

+ 观察者模式

  > 定义：观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态上发生变化时，会通知所有观察者对象，使他们能够自动更新自己

+ 策略模式

  > 定义：策略模式针对一组算法，将每一个算法封装到具有共同接口的独立的类中，从而使得它们可以相互替换。策略模式使得算法可以在不影响到客户端的情况下发生变化。策略模把行为和环境分开。环境类负责维持和查询行为类，各种算法在具体的策略类中提供。由于算法和环境独立开来，算法的增减，修改都不会影响到环境和客户端。

+ 工厂模式

1. 
