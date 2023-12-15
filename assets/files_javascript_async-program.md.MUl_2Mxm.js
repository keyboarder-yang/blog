import{_ as e,o as a,c as o,R as r}from"./chunks/framework.7XXdvhXI.js";const u=JSON.parse('{"title":"js中的异步编程","description":"","frontmatter":{"status":"done","author":"keyboarder-yang","createTime":"2022-08-13","title":"js中的异步编程","tags":["async","异步编程"]},"headers":[],"relativePath":"files/javascript/async-program.md","filePath":"files/javascript/async-program.md"}'),i={name:"files/javascript/async-program.md"},t=r('<h1 id="异步编程的实现方式" tabindex="-1">异步编程的实现方式 <a class="header-anchor" href="#异步编程的实现方式" aria-label="Permalink to &quot;异步编程的实现方式&quot;">​</a></h1><h2 id="_1-回调" tabindex="-1">1. 回调 <a class="header-anchor" href="#_1-回调" aria-label="Permalink to &quot;1. 回调&quot;">​</a></h2><p>使用回调函数的方式，缺点在于多个回调函数嵌套的时候会形成一个回调地狱，上下两层之间的代码耦合度很高，不利于代码的阅读和维护。</p><h2 id="_2-promise" tabindex="-1">2. Promise <a class="header-anchor" href="#_2-promise" aria-label="Permalink to &quot;2. Promise&quot;">​</a></h2><p>使用 Promise 的方式可以将嵌套的回调函数作为 链式调用。但是使用这种方法，有时会造成多个 then 的链式调用， 可能会造成代码的语义不够明确。</p><h2 id="_3-generator" tabindex="-1">3. generator <a class="header-anchor" href="#_3-generator" aria-label="Permalink to &quot;3. generator&quot;">​</a></h2><ol><li>它可以在函数的执行过程中，将函数的执行权转 移出去，在函数外部还可以将执行权转移回来。</li><li>当遇到异步函数执行 的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权 给转移回来。</li><li>因此在 generator 内部对于异步操作的方式，可以以 同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控 制权转移回来，因此需要有一个自动执行 generator 的机制。</li></ol><h2 id="_4-async-await" tabindex="-1">4. async/await <a class="header-anchor" href="#_4-async-await" aria-label="Permalink to &quot;4. async/await&quot;">​</a></h2><p><code>async</code> 函数是 <code>generator </code>和 <code>promise</code> 实现的 一个自动执行的语法糖。它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 <code>promise </code>对象，那么函数将会等待 <code>promise </code>对象的状态变为 <code>resolve </code>后再继续向下执行。因此 可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。</p><h2 id="_5-对promise的理解" tabindex="-1">5. 对Promise的理解 <a class="header-anchor" href="#_5-对promise的理解" aria-label="Permalink to &quot;5. 对Promise的理解&quot;">​</a></h2><h3 id="_5-1-定义" tabindex="-1">5.1 定义 <a class="header-anchor" href="#_5-1-定义" aria-label="Permalink to &quot;5.1 定义&quot;">​</a></h3><p>Promise 是异步编程的一种解决方案，它是一个对象，可以获取异步 操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调， 它比传统的解决方案回调函数和事件更合理和更强大。 所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束 的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一 个对象，从它可以获取异步操作的消息。Promise 提供统一的 API， 各种异步操作都可以用同样的方法进行处理。</p><h3 id="_5-2-状态" tabindex="-1">5.2 状态 <a class="header-anchor" href="#_5-2-状态" aria-label="Permalink to &quot;5.2 状态&quot;">​</a></h3><p>Promise 的实例有三个状态:</p><ul><li><p>Pending（进行中）</p></li><li><p>Resolved（已完成）</p></li><li><p>Rejected（已拒绝）</p></li></ul><p>当把一件事情交给 promise 时，它的状态就是 Pending，任务完成了 状态就变成了 Resolved、没有完成失败了就变成了 Rejected。</p><h3 id="_5-3-过程" tabindex="-1">5.3 过程 <a class="header-anchor" href="#_5-3-过程" aria-label="Permalink to &quot;5.3 过程&quot;">​</a></h3><p>Promise 的实例有两个过程：</p><ul><li><p>pending -&gt; fulfilled : Resolved（已完成）</p></li><li><p>pending -&gt; rejected：Rejected（已拒绝）</p></li></ul><p>注意：一旦从进行状态变成为其他状态就永远不能更改状态了。</p><h3 id="_5-4-特点" tabindex="-1">5.4 特点 <a class="header-anchor" href="#_5-4-特点" aria-label="Permalink to &quot;5.4 特点&quot;">​</a></h3><p>Promise 的特点： 对象的状态不受外界影响。</p><p>只有异步操作的结果，可以决定当前是哪一种状态，任何其他 操作都无法改变这个状态。 一旦状态改变就不会再变，任何时候都可以得到这个结果。</p><h3 id="_5-5-缺点" tabindex="-1">5.5 缺点 <a class="header-anchor" href="#_5-5-缺点" aria-label="Permalink to &quot;5.5 缺点&quot;">​</a></h3><ul><li>无法取消 Promise，一旦新建它就会立即执行，无法中途取消。</li><li>如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。</li><li>当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始 还是即将完成）。</li></ul><h3 id="_5-6-总结" tabindex="-1">5.6 总结 <a class="header-anchor" href="#_5-6-总结" aria-label="Permalink to &quot;5.6 总结&quot;">​</a></h3><p>Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。 一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变， 就凝固了，无法再被改变了。 状态的改变是通过 resolve() 和 reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个then方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。 注意：在构造 Promise 的时候，构造函数内部的代码是立即执行的。</p><h2 id="_6-对async和await的理解" tabindex="-1">6. 对async和await的理解 <a class="header-anchor" href="#_6-对async和await的理解" aria-label="Permalink to &quot;6. 对async和await的理解&quot;">​</a></h2><h3 id="_6-1-定义" tabindex="-1">6.1 定义 <a class="header-anchor" href="#_6-1-定义" aria-label="Permalink to &quot;6.1 定义&quot;">​</a></h3><p><code>async/await</code> 其实是 <code>Generator </code>和<code>Promise</code>的语法糖，它能实现的效果都能用<code> then</code> 链来实现，它是为优化 then 链而开发出来的。<code>async</code>用 于声明一个<code>function</code>是异步的，而 <code>await </code>用于等待一个异步方法 执行完成。当然语法上强制规定<code>await</code>只能出现在 <code>asnyc </code>函数中。</p>',30),s=[t];function l(n,c,d,h,p,m){return a(),o("div",null,s)}const P=e(i,[["render",l]]);export{u as __pageData,P as default};
