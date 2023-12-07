import{_ as e,o as a,c as s,R as n}from"./chunks/framework.Vrn_wj7i.js";const m=JSON.parse('{"title":"hexo学习","description":"","frontmatter":{"title":"hexo学习","date":"2022-05-12T21:23:56.000Z","tags":"hexo命令","summary":"对于hexo使用方法总结","categories":"Hexo"},"headers":[],"relativePath":"files/Hexo/hexoCommand.md","filePath":"files/Hexo/hexoCommand.md"}'),t={name:"files/Hexo/hexoCommand.md"},o=n(`<h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hexo new TitleName #新建文章TitleName</span></span>
<span class="line"><span>hexo new page PageName #新建页面PageName---会创建在source目录下</span></span>
<span class="line"><span>hexo new page --path a/b #在source/_post下新建目录a,a中新建文章b</span></span>
<span class="line"><span>hexo generate/hexo g #生成静态页面至public目录</span></span>
<span class="line"><span>hexo server/hexo s #开启预览访问端口</span></span>
<span class="line"><span>hexo deploy/hexo d #部署到GitHub</span></span>
<span class="line"><span>hexo d -g #生成并部署到GitHub</span></span>
<span class="line"><span>hexo s -g #生产并开启本地服务</span></span></code></pre></div><h3 id="上传到github报错" tabindex="-1">上传到github报错 <a class="header-anchor" href="#上传到github报错" aria-label="Permalink to &quot;上传到github报错&quot;">​</a></h3><blockquote><p>fatal: unable to access ‘<a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/</a>.......‘: OpenSSL SSL_read: Connection was reset 原因：服务器的SSL证书没有经过第三方机构的签署，所以才报错 解决方法：<code>git config --global http.sslVerify &quot;false&quot;</code> 解除验证</p></blockquote>`,4),p=[o];function i(l,c,h,r,d,u){return a(),s("div",null,p)}const x=e(t,[["render",i]]);export{m as __pageData,x as default};
