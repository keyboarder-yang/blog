import{_ as e,o as a,c as t,R as r}from"./chunks/framework.O2uh_jQW.js";const f=JSON.parse('{"title":"回流和重绘","description":"","frontmatter":{"status":"done","author":"keyboarder-yang","createTime":"2022-07-23","title":"回流和重绘","tags":["vue","回流","重绘"]},"headers":[],"relativePath":"files/vue/repaint-reflow.md","filePath":"files/vue/repaint-reflow.md"}'),l={name:"files/vue/repaint-reflow.md"},i=r('<h1 id="对于vue中回流和重绘的理解" tabindex="-1">对于vue中回流和重绘的理解 <a class="header-anchor" href="#对于vue中回流和重绘的理解" aria-label="Permalink to &quot;对于vue中回流和重绘的理解&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>回流和重绘是指当HTML或CSS节点发生变化时，浏览器会根据变化的节点重新绘制或者重新布局。回流和重绘会导致浏览器性能降低，应尽量减少。</p><blockquote><ul><li>回流：重新布局。一般页面元素大小、位置、结构、内容和字体大小改变都会引发回流。回流的下一步就是重绘，故：回流一定会重绘，重绘却不一定会回流。</li><li>重绘：重新绘制。一般页面元素的颜色，背景色改变时，需要进行重新绘制。</li></ul></blockquote><h2 id="页面渲染" tabindex="-1">页面渲染 <a class="header-anchor" href="#页面渲染" aria-label="Permalink to &quot;页面渲染&quot;">​</a></h2><h3 id="过程" tabindex="-1">过程 <a class="header-anchor" href="#过程" aria-label="Permalink to &quot;过程&quot;">​</a></h3><ol><li>解析HTML，形成HTML DOM树，解析CSS，生成CSS规则树。</li><li>将HTML DOM树与CSS规则树结合，生成Render树。</li><li>布局Render树。</li><li>绘制Render树。</li><li>浏览器将各层信息发送给GPU，GPU将各层合成，显示在屏幕上。</li></ol><h3 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h3><p><a href="https://imgtu.com/i/jXKngI" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2022/07/23/jXKngI.png" alt="jXKngI.png"></a></p>',9),o=[i];function n(s,c,h,d,u,_){return a(),t("div",null,o)}const m=e(l,[["render",n]]);export{f as __pageData,m as default};
