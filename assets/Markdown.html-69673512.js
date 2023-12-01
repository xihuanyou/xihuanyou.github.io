import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a,b as n,d as e,e as t}from"./app-1938f7ab.js";const c={},d=a("p",null,"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。",-1),p={href:"https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text",target:"_blank",rel:"noopener noreferrer"},u={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸" aria-hidden="true">#</a> 图片尺寸</h2><p>md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功率。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 按页面宽度的 60% 来缩小 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- md 图片设置，有时不能被识别 --&gt;</span>

![同时设置宽度和高度](https://files.mdnice.com/logo.png =150x150)
![只设置宽度，推荐使用百分比](https://files.mdnice.com/logo.png =40%x)

<span class="token comment">&lt;!-- 指针移动到图片时，显示图片说明 --&gt;</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">name</span>](<span class="token url">https://docsify.js.org/_media/icon.svg</span> <span class="token string">&quot;图片说明&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://developer.qiniu.com/dora/kb/1627/flow-optimization-compression-of-images",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.qiniu.com/dora/8255/the-zoom",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 按图片尺寸的 60% 等比缩小 --&gt;</span>
?imageMogr2/thumbnail/!60p

<span class="token comment">&lt;!-- 指定图片宽度 --&gt;</span>
?imageMogr2/thumbnail/500x

<span class="token comment">&lt;!-- 指定宽度，调整质量，改变格式 --&gt;</span>
?imageMogr2/thumbnail/500x/strip/quality/50/format/webp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料引用" tabindex="-1"><a class="header-anchor" href="#资料引用" aria-hidden="true">#</a> 资料引用</h2><p>文章中加 <code>^[引用内容]</code> 会在底部自动添加引用资料。如果想添加链接标题，则为 <code>^[[标题](链接)]</code>。</p><p>如果同一引用要在多个地方使用，则需要手动编号。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是一条引用 [^1]
这是一条引用 [^2]
这是一条引用 [^1]
这是一条引用 [^3]
[^1]:链接
[^2]:<span class="token url">[<span class="token content">标题</span>](<span class="token url">链接</span>)</span>
[^3]:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">图片链接</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块自动换行" tabindex="-1"><a class="header-anchor" href="#代码块自动换行" aria-hidden="true">#</a> 代码块自动换行</h2><p>自动换行需要 css 支持，暂不能自动启用。</p><h2 id="整段删除线" tabindex="-1"><a class="header-anchor" href="#整段删除线" aria-hidden="true">#</a> 整段删除线</h2><p><code>~~</code> 只支持对本行内容添加删除线。</p><p>如果要对大段内容添加删除线，可以用 HTML 标签 <code>&lt;s&gt;</code> 和 <code>&lt;/s&gt;</code>，被该标签包围的内容会全部添加删除线。VuePress 暂不支持该代码，会将标签识别为不完整而报错。</p>`,10);function g(b,_){const s=i("ExternalLinkIcon");return l(),r("div",null,[d,a("p",null,[n("Markdown 入门："),a("a",p,[n("Markdown 基本撰写和格式语法"),e(s)]),n("，"),a("a",u,[n("Markdown 转 HTML 语法介绍"),e(s)])]),m,a("p",null,[n("七牛云图床提供"),a("a",v,[n("图片流量优化压缩策略"),e(s)]),n("，可用于调整图片的分辨率、大小和格式，具体参数请参考"),a("a",h,[n("七牛云图片高级处理"),e(s)]),n("。此外，我还会定期使用 PP 鸭对图床中的图片进行重新压缩。")]),k])}const x=o(c,[["render",g],["__file","Markdown.html.vue"]]);export{x as default};
