import{_ as a,c as s,o as n,a as l}from"./app.4855a937.js";const m=JSON.parse('{"title":"\u81EA\u5B9A\u4E49\u8BA1\u65F6\u5668","description":"","frontmatter":{"title":"\u81EA\u5B9A\u4E49\u8BA1\u65F6\u5668","date":"2022-05-13T10:15:17.000Z","tags":"js \u8BA1\u6570\u5668","summary":"\u81EA\u5B9A\u4E49\u5B9A\u65F6\u5668\uFF0C\u8FD4\u56DE\u8BA1\u65F6\u7ED3\u679C","categories":"JavaScript"},"headers":[{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":3,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"}],"relativePath":"files/JavaScript/TimeCount.md"}'),e={name:"files/JavaScript/TimeCount.md"},p=l(`<h3 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h3><blockquote><p>\u7528\u4E8E\u5B9E\u73B0\u8BA1\u65F6\u529F\u80FD(\u53EF\u5728callback\u4E2D\u63A5\u6536\u5F53\u524D\u503C\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u64CD\u4F5C\u6216\u8005\u7ED3\u675F\u8BA1\u65F6)\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570 params(Object)\u548Ccallback;</p></blockquote><ol><li>params: \u4E3A\u4E00\u4E2A\u5BF9\u8C61 <ul><li>startVal: \u521D\u59CB\u503C-\u9ED8\u8BA4<code>60</code></li><li>endVal: \u7ED3\u675F\u503C-\u9ED8\u8BA4<code>0</code></li><li>valSetp: \u6B65\u957F,\u6B63\u6570\u5219\u6B63\u8BA1\u65F6,\u8D1F\u6570\u5012\u8BA1\u65F6-\u9ED8\u8BA4<code>-1</code></li><li>timerStep: \u5468\u671F\u5B9A\u65F6\u5668\u7684\u65F6\u95F4\u6B65\u957F-\u9ED8\u8BA4<code>1000</code></li></ul></li><li>callback: \u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570,\u63A5\u6536\u4E00\u4E2A\u5F53\u524D\u503C\u7684\u53C2\u6570\u3002\u8FD4\u56DE\u82E5\u4E3A<code>true</code>\u5219\u7EC8\u6B62\u8BA1\u65F6\u3002</li></ol><blockquote><p>\u6CE8\u610F\uFF1Acallback\u82E5\u6709\u8FD4\u56DE\u503C\uFF08\u65E0\u8BBA\u4EC0\u4E48\u503C\uFF09,\u5219endVal\u4F1A\u5931\u6548</p></blockquote><h3 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u63CF\u8FF0: \u8BA1\u65F6\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Object} params \u914D\u7F6E\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {Function} calback \u8BA1\u65F6\u5668\u6267\u884C\u65F6\u7684\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">const TimeCount = (params, callback) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BBE\u7F6E\u7F3A\u7701\u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    const defaultVal = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        startVal: 60,</span></span>
<span class="line"><span style="color:#A6ACCD;">        endVal: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        valStep:-1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        timerStep: 1000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5224\u65AD\u5F53\u524D\u4F20\u5165\u7684params\u662F\u5426\u662F\u4E00\u4E2A\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    let isObject = Object.prototype.toString.call(params) === &#39;[object Object]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!isObject){</span></span>
<span class="line"><span style="color:#A6ACCD;">        params = Object.assign({},defaultVal)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;params type is not Object&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(defaultVal).forEach((item) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(!params.hasOwnProperty(item)){</span></span>
<span class="line"><span style="color:#A6ACCD;">                params[item] = defaultVal[item]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4ECE\u4F20\u5165\u7684\u5BF9\u8C61\u89E3\u6784\u51FA\u9700\u8981\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { startVal,endVal,valStep, timerStep} = params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let currentVal = startVal;</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        currentVal = currentVal + valStep;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let callbackReturn = callback(currentVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5224\u65ADcallback\u6709\u65E0\u8FD4\u56DE\u503C\u548C\u5F53\u524D\u7684\u7ED3\u675F\u503C\u6765\u5224\u65AD\u662F\u5426\u7ED3\u675F\u8BA1\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(callbackReturn!==undefined){</span></span>
<span class="line"><span style="color:#A6ACCD;">            callbackReturn &amp;&amp; clearInterval(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            currentVal===endVal &amp;&amp; clearInterval(timer);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, timerStep)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),c=[p];function t(o,r,i,C,A,d){return n(),s("div",null,c)}var D=a(e,[["render",t]]);export{m as __pageData,D as default};
