const e=JSON.parse('{"key":"v-009a3fd6","path":"/posts/2017-07-28-office_2016_installer_error.html","title":"office 2016 安装程序报错解决办法","lang":"zh-CN","frontmatter":{"title":"office 2016 安装程序报错解决办法","date":"2017-07-28T11:02:00.000Z","category":["系统"],"tag":["office"],"order":-3,"description":"重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。这是由于注册表和组件而导致的报错，「找不到有效的安装源」并不是真实原因，解决方法查看下方。 解决方法 打开 regedit.exe，在注册表中找到路径 计算机\\\\HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Office\\\\Delivery\\\\SourceEngine\\\\Downloads\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C\\\\Sources\\\\PROPLUS16(RG)-6186D162。 修改 Path 数据，改为安装包位置，比如 F:\\\\5.软件资源\\\\系统重装\\\\SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426\\\\groove.zh-cn。 在 C 盘建立安装组件： 把安装包路径 \\\\groove.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C 目录下 (如果没有这个目录就自己建立)。 把安装包路径 \\\\proplus.ww\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-0011-0000-1000-0000000FF1CE}-C。 将需要的程序文件放入 MSOCache 路径 MSOCache 其它的目录下内容同样根据注册表的内容把它指示的光盘中的安装文件复制到相应的目录下。如果没有那个目录就要自己建立，类似的目录一共有 12 个。 如果不想全装可以只选择需要的软件，下面以 Onenote 和 Access 为例。 Onenote 把安装包路径 \\\\onenote.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-00A1-0804-1000-0000000FF1CE}-CC。 Access 把安装包路径 \\\\access.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-0015-0804-1000-0000000FF1CE}-C。 最后进入安装包运行 setup.exe 安装正常。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-07-28-office_2016_installer_error.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"office 2016 安装程序报错解决办法"}],["meta",{"property":"og:description","content":"重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。这是由于注册表和组件而导致的报错，「找不到有效的安装源」并不是真实原因，解决方法查看下方。 解决方法 打开 regedit.exe，在注册表中找到路径 计算机\\\\HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Office\\\\Delivery\\\\SourceEngine\\\\Downloads\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C\\\\Sources\\\\PROPLUS16(RG)-6186D162。 修改 Path 数据，改为安装包位置，比如 F:\\\\5.软件资源\\\\系统重装\\\\SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426\\\\groove.zh-cn。 在 C 盘建立安装组件： 把安装包路径 \\\\groove.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C 目录下 (如果没有这个目录就自己建立)。 把安装包路径 \\\\proplus.ww\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-0011-0000-1000-0000000FF1CE}-C。 将需要的程序文件放入 MSOCache 路径 MSOCache 其它的目录下内容同样根据注册表的内容把它指示的光盘中的安装文件复制到相应的目录下。如果没有那个目录就要自己建立，类似的目录一共有 12 个。 如果不想全装可以只选择需要的软件，下面以 Onenote 和 Access 为例。 Onenote 把安装包路径 \\\\onenote.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-00A1-0804-1000-0000000FF1CE}-CC。 Access 把安装包路径 \\\\access.zh-cn\\\\ 下的文件复制到 C:\\\\MSOCache\\\\All Users\\\\{90160000-0015-0804-1000-0000000FF1CE}-C。 最后进入安装包运行 setup.exe 安装正常。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-01T10:48:16.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"office"}],["meta",{"property":"article:published_time","content":"2017-07-28T11:02:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-01T10:48:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"office 2016 安装程序报错解决办法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-07-28T11:02:00.000Z\\",\\"dateModified\\":\\"2023-12-01T10:48:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]}],"git":{"createdTime":1701427696000,"updatedTime":1701427696000,"contributors":[{"name":"xihuanyou","email":"76759746+xihuanyou@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.59,"words":477},"filePathRelative":"_posts/2017-07-28-office_2016_installer_error.md","localizedDate":"2017年7月28日","excerpt":"<p>重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。这是由于注册表和组件而导致的报错，<strong>「找不到有效的安装源」并不是真实原因</strong>，解决方法查看下方。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-85bd2a49a47ee6d0c8eade7b3c249516_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2> 解决方法</h2>\\n<ol>\\n<li>\\n<p>打开 regedit.exe，在注册表中找到路径 <code>计算机\\\\HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Office\\\\Delivery\\\\SourceEngine\\\\Downloads\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C\\\\Sources\\\\PROPLUS16(RG)-6186D162</code>。</p>\\n</li>\\n<li>\\n<p>修改 Path 数据，改为安装包位置，比如 <code>F:\\\\5.软件资源\\\\系统重装\\\\SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426\\\\groove.zh-cn</code>。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-650ede86dd191a8f0a1cd6e9b815377a_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>在 C 盘建立安装组件：</p>\\n<ul>\\n<li>把安装包路径 <code>\\\\groove.zh-cn\\\\</code> 下的文件复制到 <code>C:\\\\MSOCache\\\\All Users\\\\{90160000-00BA-0804-1000-0000000FF1CE}-C</code> 目录下 (如果没有这个目录就自己建立)。</li>\\n<li>把安装包路径 <code>\\\\proplus.ww\\\\</code> 下的文件复制到 <code>C:\\\\MSOCache\\\\All Users\\\\{90160000-0011-0000-1000-0000000FF1CE}-C</code>。</li>\\n</ul>\\n</li>\\n<li>\\n<p>将需要的程序文件放入 MSOCache 路径<br>\\nMSOCache 其它的目录下内容同样根据注册表的内容把它指示的光盘中的安装文件复制到相应的目录下。如果没有那个目录就要自己建立，类似的目录一共有 12 个。<br>\\n如果不想全装可以只选择需要的软件，下面以 Onenote 和 Access 为例。</p>\\n<ul>\\n<li><strong>Onenote</strong> 把安装包路径 <code>\\\\onenote.zh-cn\\\\</code> 下的文件复制到 <code>C:\\\\MSOCache\\\\All Users\\\\{90160000-00A1-0804-1000-0000000FF1CE}-CC</code>。</li>\\n<li><strong>Access</strong> 把安装包路径 <code>\\\\access.zh-cn\\\\</code> 下的文件复制到 <code>C:\\\\MSOCache\\\\All Users\\\\{90160000-0015-0804-1000-0000000FF1CE}-C</code>。</li>\\n</ul>\\n</li>\\n<li>\\n<p>最后进入安装包运行 setup.exe 安装正常。</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
