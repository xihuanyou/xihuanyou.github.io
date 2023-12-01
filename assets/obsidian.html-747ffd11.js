import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,a as n,b as a,d as s,e as t}from"./app-1938f7ab.js";const d={},u=n("h2",{id:"双链笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双链笔记","aria-hidden":"true"},"#"),a(" 双链笔记")],-1),c=n("p",null,[a("@KurokoZ 个人认为双链笔记的核心不是一个单纯跳转的链接，而是在于“引用”和思路的延续性。举几个场景："),n("br"),a(" 一、待办清单和随笔记"),n("br"),a(" 待办清单是一个时序化的任务 list，一个任务可能来自一次会议记录、老板临时的发言、一个产品调研 等等，每一个任务背后的原始文档可以很复杂，但任务本身可以记录的很简洁，特别是多线程的任务处理，这样的溯源非常有用，最近同时跟 4 个项目，深有体会；Obsidian 的 MD 语法支持很美观的待办清单，很舒服。"),n("br"),a(" 二、书籍之间的联系"),n("br"),a(" 很多书中，作者会推荐其他的书，那么就可以在记录读书笔记的时候，直接创建对这些推荐书的引用（得益于 obsidian 的基于引用自动创建文件，而不是只能引用现有文档），又或者一个作者有很多著作、有博客、有公众号，那么就可以给这个作者建一个单独的文档作为主页，其他著作的笔记、博客的摘录都是单独的文档，形成完整体系。"),n("br"),a(" 三、跨软件，非 URL 的场景"),n("br"),a(" 我的大量 PDF 文档管理在 DEVONThink，obsidian 的链接语法支持直接引用到 DEVONThink 中的文档，需要是可直接通过 OB 激活 DT 快速打开目标文档")],-1),p={href:"https://sspai.com/post/67619",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sspai.com/post/72385",target:"_blank",rel:"noopener noreferrer"},b=t('<p>暂时放弃 Obisidian，虽然能按条件罗列页面，但没有 Logseq 方便。<strong>如果后续要继续用，则尝试将日记分为 3 份，然后用 Dataview 整合在一起，在上面进行修改</strong>。</p><p>Obsidian 更习惯记录，日常 Task 由滴答管理，中期且不急的任务则由 Trello 管理。自带的看板功能需要建立笔记，不如 Trello 方便。</p><p>Day Planer 有 sm18 的 Plan 功能。</p><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>部分插件不能自动更新，需要手动下载插件文件，然后粘贴到 <code>.obsidian/plugins</code> 对应文件夹内。</p><h3 id="dataview" tabindex="-1"><a class="header-anchor" href="#dataview" aria-hidden="true">#</a> Dataview</h3>',6),v={href:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># journals 文本下所有</span>
dv.list<span class="token punctuation">(</span>dv.pages<span class="token punctuation">(</span><span class="token string">&#39;&quot;journals&quot;&#39;</span><span class="token punctuation">)</span>.file.lists.text<span class="token punctuation">)</span>


<span class="token comment"># 指定区域不为空</span>
.where<span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token operator">!=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 包含指定文字</span>
.where<span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t.includes<span class="token punctuation">(</span><span class="token string">&quot;Logseq&quot;</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="obsidian-query-language" tabindex="-1"><a class="header-anchor" href="#obsidian-query-language" aria-hidden="true">#</a> Obsidian Query Language</h3>`,2),g={href:"https://github.com/jplattel/obsidian-query-language",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>但整合出的是链接，并非如 Logseq 一样显示文件内容。想想有没办法，显示文件内容。</p><p>下列代码会抓取，journals 文件夹中包含「今日工作」或「xxxxxxx」的文件。</p><div class="language-oql line-numbers-mode" data-ext="oql"><pre class="language-oql"><code>name: &#39;OR combination list of results&#39;
query: { $and: [{ &quot;path&quot;: &quot;&#39;journals/&quot;}, { $or: [{ &quot;content&quot;: &quot;&#39;今日工作&quot; }, { &quot;content&quot;: &quot;&#39;xxxxxxx&quot; }] }]}
template: &quot;list&quot;
badge: true
debug: true
sort: &quot;title&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="easy-typing" tabindex="-1"><a class="header-anchor" href="#easy-typing" aria-hidden="true">#</a> Easy Typing</h3><p>Easy Typing 是一个 Obsidian 的书写体验增强插件，自动格式化书写，比如自动在中英文之间添加空格，英文首字母大写，标点与文本间智能空格。</p><p>不过双拼容易出错，需要开启「行模式」。</p>`,6);function q(k,x){const e=o("ExternalLinkIcon");return r(),l("div",null,[u,c,n("ul",null,[n("li",null,[n("p",null,[n("a",p,[a("Obsidian 新手系列之你不可不知的插件"),s(e)])])]),n("li",null,[n("p",null,[n("a",h,[a("每日笔记、日程管理、工作复盘——这是我钻研出的 Obsidian 八般武艺"),s(e)])])])]),b,n("p",null,[n("a",v,[a("Dataview"),s(e)]),a(" 功能更强大，不过用法也复杂许多。")]),m,n("p",null,[n("a",g,[a("Obsidian Query Language"),s(e)]),a(" 能使用 Query 语言，将符合条件的文件整合到一页。")]),_])}const O=i(d,[["render",q],["__file","obsidian.html.vue"]]);export{O as default};
