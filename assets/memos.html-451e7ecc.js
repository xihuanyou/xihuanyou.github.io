import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c,a as s,b as n,d as a,e as o}from"./app-1938f7ab.js";const r={},p={href:"https://github.com/usememos/memos",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">memos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> neosmemo/memos<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> memos
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/memos<span class="token punctuation">:</span>/var/opt/memos
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5230<span class="token punctuation">:</span><span class="token number">5230</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),u={href:"https://github.com/Quorafind/Obsidian-Memos",target:"_blank",rel:"noopener noreferrer"},d=o('<p>flomo 支持将所有笔记导出，并允许通过微信输入内容。flomo Pro 每日会随机选取 12 条符合条件的内容，让你过往的记录发挥更大的价值。</p><p>然而，对于我个人而言，flomo 和 Memos 更适合碎片化记录，无需频繁回顾。除了记录心情类日记之外，有价值的信息可以以知识点的形式保存在思源笔记中，然后通过思源笔记的间隔重复闪卡功能来加强记忆。</p><h2 id="领域标签" tabindex="-1"><a class="header-anchor" href="#领域标签" aria-hidden="true">#</a> 领域标签</h2><ul><li>Inbox（收件箱）：我会将所有临时性的，还未消化的内容放置于此，定期来进行归档、整理或者删除。可以当做大脑的缓存，避免记录的时候纠结放在哪里。</li><li>Area（领域）：<strong>日常你需要精进的「领域」</strong>，比如健康就是一个领域，而跑步则是项目；写作是一个领域，而写一篇公众号文章则是一个项目。</li><li>Project（项目）：是指一个将要发生的独立事件，并且这个事件不是一次性就能完成的，至少需要多个动作才能完成。比如要写一本书，需要整理资料，罗列提纲，撰写内容，联系出版社。类似生活中还有组织一次旅游，录制一期播客等。在执行项目的相关资料</li><li>Resource（资源）：永久笔记，一般来说是兴趣、主题、资产等内容。注意是自己消化过的内容，而非机械的收藏。</li><li>Marketplace 是最重要研究的领域</li><li>Sheep、Books 是最重要的资源（Sheep 是指人物，即羔羊）</li><li>三醒吾身：日记</li></ul>',4);function k(v,_){const e=l("ExternalLinkIcon");return i(),c("div",null,[s("p",null,[s("a",p,[n("Memos"),a(e)]),n(" 可视为开源版的 flomo，其界面及功能非常相似，适用于碎片化记录和灵感捕捉，同时支持小范围的分享，适用于个人微博记录。Memos 能以时间线形式回顾你选择的日期的记录，并允许通过 Telegram 机器人输入内容。此外，你还可以选择将数据保存在第三方云存储中。")]),m,s("p",null,[n("如果你使用 Obsidian，还可以考虑使用其插件 "),s("a",u,[n("Obsidian-Memos"),a(e)]),n("，它与 Memos 功能类似，但笔记将保存在 Obsidian 中。你还可以使用 Memos Sync 插件将 memos 记录同步至 Obsidian。")]),d])}const f=t(r,[["render",k],["__file","memos.html.vue"]]);export{f as default};
