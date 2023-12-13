import{_ as a,o as e,c as r,R as o}from"./chunks/framework.O2uh_jQW.js";const u=JSON.parse('{"title":"css中文本溢出显示问题","description":"","frontmatter":{"status":"done","author":"keyboarder-yang","createTime":"2022-12-18","title":"css中文本溢出显示问题","tags":["css","text-flow"]},"headers":[],"relativePath":"files/css/text-flow.md","filePath":"files/css/text-flow.md"}'),t={name:"files/css/text-flow.md"},l=o('<h1 id="文本溢出显示" tabindex="-1">文本溢出显示 <a class="header-anchor" href="#文本溢出显示" aria-label="Permalink to &quot;文本溢出显示&quot;">​</a></h1><h2 id="_1-背景" tabindex="-1">1. 背景 <a class="header-anchor" href="#_1-背景" aria-label="Permalink to &quot;1. 背景&quot;">​</a></h2><p>因为浏览器默认是以<strong>单词</strong>为单位进行换行的，单词不可拆分，本行排不下的话会换行；</p><blockquote><ul><li><p>一个汉字为一个单词</p></li><li><p>连续的字母为一个单词</p></li><li><p>连续的数字为一个单词</p></li><li><p>字母和数字的连续也为一个单词</p></li><li><p>空格会隔断单词</p></li><li><p><code>?****</code>中<code>?</code>被视为一个单词，<code>****?</code>中<code>?</code>和前面的单词视为同一个单词</p></li></ul></blockquote><p><a href="https://imgtu.com/i/vCnSyQ" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2022/07/28/vCnSyQ.png" alt="vCnSyQ.png"></a></p><h2 id="_2-word-break-和-word-wrap" tabindex="-1">2. word-break 和 word-wrap <a class="header-anchor" href="#_2-word-break-和-word-wrap" aria-label="Permalink to &quot;2. word-break 和 word-wrap&quot;">​</a></h2><h3 id="_2-1-word-break" tabindex="-1">2.1 word-break <a class="header-anchor" href="#_2-1-word-break" aria-label="Permalink to &quot;2.1 word-break&quot;">​</a></h3><blockquote><p>取值：</p><ul><li>normal：默认值，默认的换行规则。</li><li>break-all：强制换行，允许任意非文本间的单词断行。（超出盒子宽度就进行换行，不管有没有换行符）</li><li>keep-all：不允许单词换行，只能在半角空格或连词符处换行。</li></ul></blockquote><h3 id="_2-2-word-wrap" tabindex="-1">2.2 word-wrap <a class="header-anchor" href="#_2-2-word-wrap" aria-label="Permalink to &quot;2.2 word-wrap&quot;">​</a></h3><blockquote><p>取值：</p><ul><li>break-word：表示一行单词中实在没有其他换行表示的时候才进行换行。</li><li>normal：默认值，正常的换行规则</li></ul></blockquote><h3 id="_2-3-区别使用" tabindex="-1">2.3 区别使用 <a class="header-anchor" href="#_2-3-区别使用" aria-label="Permalink to &quot;2.3 区别使用&quot;">​</a></h3><p>word-break中最常用的就是break-all属性值，word-wrap中常用的是break-word取值。其区别如下：</p><blockquote><p>break-all可以理解为更&#39;强硬&#39;的换行方式，就是不管当前行中是否有换行标识（如，空格），只在盒子边界进行换行</p><p>break-word可以理解为相对较&#39;弱&#39;的换行方式，就是当前行中若有换行标识，会优先从换行标识进行换行，若没有换行标识则在盒子边界进行换行处理</p></blockquote><h3 id="_2-4-实际效果" tabindex="-1">2.4 实际效果 <a class="header-anchor" href="#_2-4-实际效果" aria-label="Permalink to &quot;2.4 实际效果&quot;">​</a></h3><p><a href="https://imgtu.com/i/viZaTI" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2022/07/30/viZaTI.png" alt="viZaTI.png"></a></p>',15),i=[l];function d(s,c,p,n,h,_){return e(),r("div",null,i)}const k=a(t,[["render",d]]);export{u as __pageData,k as default};
