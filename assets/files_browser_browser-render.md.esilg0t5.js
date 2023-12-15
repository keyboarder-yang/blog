import{_ as e,o,c,R as d}from"./chunks/framework.7XXdvhXI.js";const m=JSON.parse('{"title":"浏览器渲染原理","description":"","frontmatter":{"title":"浏览器渲染原理","author":"keyboarder-yang","createTime":"2023/12/14 10:18:06","tags":["渲染"],"status":"done"},"headers":[],"relativePath":"files/browser/browser-render.md","filePath":"files/browser/browser-render.md"}'),a={name:"files/browser/browser-render.md"},r=d('<h1 id="浏览器渲染原理" tabindex="-1">浏览器渲染原理 <a class="header-anchor" href="#浏览器渲染原理" aria-label="Permalink to &quot;浏览器渲染原理&quot;">​</a></h1><p>当浏览器的网络线程收到<code>HTML</code>文档后，会产生一个渲染任务，并将其传递给渲染主线程的<code>消息队列</code>。在<code>事件循环</code>机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。</p><p>整个渲染流程分为多个阶段：<code>HTML解析</code>、<code>样式计算</code>、<code>布局</code>、<code>分层</code>、<code>绘制</code>、<code>分块</code>、<code>光栅化</code>、<code>画</code>。 每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。 这样，整个渲染流程就形成了一套组织严密的生产流水线。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>其中 HTML解析、样式计算、布局、分层、绘制 在渲染主线程上进行，分块，光栅化，画 在合成线程上运行。</p></div><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><h3 id="解析html-parse-html" tabindex="-1">解析HTML-Parse HTML <a class="header-anchor" href="#解析html-parse-html" aria-label="Permalink to &quot;解析HTML-Parse HTML&quot;">​</a></h3><blockquote><ul><li>DOM - Document Object Module</li><li>CSSOM - CSS Object Module</li></ul></blockquote><ol><li><p>解析过程中遇到<code>CSS</code>解析<code>CSS</code>，遇到<code>JS</code>执行<code>JS</code>。</p></li><li><p>为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载HTML中的外部<code>CSS</code>文件和外部的<code>JS</code>文件。</p></li><li><p>如果主线程解析到<code>link</code>位置，此时外部的<code>CSS</code>文件还没有下载解析好，主线程不会等待，继续解析后续的<code>HTML</code>。这是因为下载和解析<code>CSS</code>的工作是在预解析线程中进行的。这就是CSS不会阻塞HTML解析的根本原因。</p></li><li><p>如果主线程解析到script位置，会停止解析HTML，转而等待<code>JS</code>文件下载好，并将全局代码解析执行完成后，才能继续解析<code>HTML</code>。这是因为JS代码的执行过程可能会修改当前的<code>DOM</code>树，所以<code>DOM</code>树的生成必须暂停。这就是<code>JS</code>会阻塞<code>HTML</code>解析的根本原因。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">第一步结束:</p><p>得到<code>DOM</code>树和<code>CSSOM</code>树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在<code>CSSOM</code>树中。</p></div><h3 id="样式计算" tabindex="-1">样式计算 <a class="header-anchor" href="#样式计算" aria-label="Permalink to &quot;样式计算&quot;">​</a></h3><p>主线程会遍历得到的DoM树，依次为树中的每个节点计算出它最终的样式，称之为<code>ComputedStyle</code>。在这一过程中，很多预设值会变成绝对值，比如red会变成<code>rgb（255,0,θ）</code>;相对单位会变成绝对单位，比如<code>em</code>会变成<code>px</code>。这一步完成后，会得到一棵带有样式的<code>DOM</code>树。</p><h3 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h3><p>布局阶段会依次遍历<code>DOM</code>树的每一个节点，计算每个节点的几何信息。例如节点的宽高、相对包含块的位置。大部分时候，<code>DOM</code>树和布局树并非一一对应。比如<code>dispLay：none</code>的节点没有几何信息，因此不会生成到布局树；又比如使用了伪元素选择器，虽然<code>DOM</code>树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中。还有匿名行盒、匿名块盒等等都会导致DOM树和布局树无法一一对应。</p><h3 id="分层" tabindex="-1">分层 <a class="header-anchor" href="#分层" aria-label="Permalink to &quot;分层&quot;">​</a></h3><p>主线程会使用一套复杂的策略对整个布局树中进行分层。分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。<code>滚动条</code>、<code>堆叠上下文</code>、<code>transform</code>、<code>opacity</code>等样式都会或多或少的影响分层结果，也可以通过<code>wilL-change</code>属性更大程度的影响分层结果。</p><h3 id="绘制" tabindex="-1">绘制 <a class="header-anchor" href="#绘制" aria-label="Permalink to &quot;绘制&quot;">​</a></h3><p>主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。</p><h3 id="分块" tabindex="-1">分块 <a class="header-anchor" href="#分块" aria-label="Permalink to &quot;分块&quot;">​</a></h3><p>完成绘制后，主线程将每个图层的绘制信息提交给合成线程，剩余工作将由合成线程完成。合成线程首先对每个图层进行分块，将其划分为更多的小区域。它会从线程池中拿取多个线程来完成分块工作。</p><h3 id="光栅化" tabindex="-1">光栅化 <a class="header-anchor" href="#光栅化" aria-label="Permalink to &quot;光栅化&quot;">​</a></h3><p>分块完成后，进入光栅化阶段合成线程会将块信息交给<code>GPU</code>进程，以极高的速度完成光栅化。<code>GPU</code>进程会开启多个线程来完成光栅化，并且优先处理靠近视口区域的块。光栅化的结果，就是一块一块的位图。</p><h3 id="画" tabindex="-1">画 <a class="header-anchor" href="#画" aria-label="Permalink to &quot;画&quot;">​</a></h3><p>最后一个阶段就是画，合成线程拿到每个层、每个块的位图后，生成一个个「指引（quad）」信息。指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形。变形发生在合成线程，与渲染主线程无关，这就是<code>transform</code>效率高的本质原因。合成线程会把<code>quad</code>提交给<code>GPU</code>进程，由<code>GPU</code>进程产生系统调用，提交给<code>GPU</code>硬件，完成最终的屏幕成像。</p><h2 id="相关知识点" tabindex="-1">相关知识点 <a class="header-anchor" href="#相关知识点" aria-label="Permalink to &quot;相关知识点&quot;">​</a></h2><p><a href="./repaint-reflow.html">回流和重绘</a></p><div class="info custom-block"><p class="custom-block-title">什么是<code>reflow</code>？</p><p><code>reflow</code>的本质就是重新计算<code>layout</code>树。当进行了会影响布局树的操作后，需要重新计算布局树，会引发<code>layout</code>。为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当JS代码全部完成后再进行统一计算。所以，改动属性造成的<code>reflow</code>是异步完成的。也同样因为如此，当<code>JS</code>获取布局属性时，就可能造成无法获取到最新的布局信息。浏览器在反复权衡下，最终决定获取属性立即<code>reflow</code>。</p></div><div class="info custom-block"><p class="custom-block-title">什么是<code>repaint</code>？</p><p><code>repaint</code>的本质就是重新根据分层信息计算了绘制指令。当改动了可见样式后，就需要重新计算，会引发<code>repaint</code>。由于元素的布局信息也属于可见样式，所以<code>reflow</code>一定会引起<code>repaint</code>。</p></div><div class="info custom-block"><p class="custom-block-title">为什么<code>transform</code>的效率高？</p><p>因为<code>transform</code>既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个 <code>draw</code> 阶段由于<code>draw</code>阶段在合成线程中，所以<code>transform</code>的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响<code>transform</code>的变化。</p></div>',28),t=[r];function l(i,s,n,p,h,u){return o(),c("div",null,t)}const f=e(a,[["render",l]]);export{m as __pageData,f as default};
