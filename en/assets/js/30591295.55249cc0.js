"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7750],{85790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(87462),l=(n(67294),n(3905));n(16758);const a={title:"\u7f13\u51b2\u533a(Buffers)\uff0c\u7a97\u53e3(Windows)\u548c\u9009\u9879\u5361(Tabs)",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},r="\u7b2c2\u7ae0 \u7f13\u51b2\u533a(Buffers)\uff0c\u7a97\u53e3(Windows)\u548c\u9009\u9879\u5361(Tabs)",p={unversionedId:"others/Vim/ch02_buffers_windows_tabs",id:"others/Vim/ch02_buffers_windows_tabs",title:"\u7f13\u51b2\u533a(Buffers)\uff0c\u7a97\u53e3(Windows)\u548c\u9009\u9879\u5361(Tabs)",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch02_buffers_windows_tabs.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch02_buffers_windows_tabs",permalink:"/en/docs/others/Vim/ch02_buffers_windows_tabs",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Vim/ch02_buffers_windows_tabs.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"\u7f13\u51b2\u533a(Buffers)\uff0c\u7a97\u53e3(Windows)\u548c\u9009\u9879\u5361(Tabs)",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"VIM\u8d77\u6b65",permalink:"/en/docs/others/Vim/ch01_starting_vim"},next:{title:"\u6253\u5f00\u548c\u641c\u7d22\u6587\u4ef6",permalink:"/en/docs/others/Vim/ch03_searching_files"}},f={},s=[{value:"Buffers",id:"buffers",level:2},{value:"\u9000\u51faVim",id:"\u9000\u51favim",level:2},{value:"Windows",id:"windows",level:2},{value:"Tabs",id:"tabs",level:2},{value:"\u4e09\u7ef4\u79fb\u52a8",id:"\u4e09\u7ef4\u79fb\u52a8",level:2},{value:"\u7528\u806a\u660e\u7684\u65b9\u6cd5\u4f7f\u7528Buffers\u3001Windows\u3001\u4ee5\u53caTabs",id:"\u7528\u806a\u660e\u7684\u65b9\u6cd5\u4f7f\u7528bufferswindows\u4ee5\u53catabs",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c2\u7ae0-\u7f13\u51b2\u533abuffers\u7a97\u53e3windows\u548c\u9009\u9879\u5361tabs"},"\u7b2c2\u7ae0 \u7f13\u51b2\u533a(Buffers)\uff0c\u7a97\u53e3(Windows)\u548c\u9009\u9879\u5361(Tabs)"),(0,l.kt)("p",null,"(\u8bd1\u8005\u6ce8\uff1a\u5728Vim\u4e2d\uff0cBuffers\u7f13\u51b2\u533a\uff0cWindows\u7a97\u53e3\uff0cTabs\u9009\u9879\u5361\u662f\u4e13\u6709\u540d\u8bcd\u3002\u4e3a\u9002\u5e94\u4e0d\u540c\u8bfb\u8005\u7684\u7ffb\u8bd1\u4e60\u60ef\uff0c\u786e\u4fdd\u6ca1\u6709\u6b67\u4e49\uff0c\u672c\u6587\u5c06\u4e0d\u5bf9Buffers\u3001Windows\u3001Tabs\u8fd9\u4e09\u4e2a\u8bcd\u8fdb\u884c\u7ffb\u8bd1)\u3002  "),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8fc7\u73b0\u4ee3\u6587\u672c\u7f16\u8f91\u5668\uff0c\u60a8\u5f88\u53ef\u80fd\u5bf9Windows\u548ctabs\u8fd9\u4e24\u4e2a\u6982\u5ff5\u662f\u975e\u5e38\u719f\u6089\u7684\u3002\u4f46Vim\u4f7f\u7528\u4e86\u4e09\u4e2a\u5173\u4e8e\u663e\u793a\u65b9\u9762\u7684\u62bd\u8c61\u6982\u5ff5\uff1abuffers, windows, \u8fd8\u6709tabs\u3002\u5728\u672c\u7ae0\uff0c\u6211\u5c06\u5411\u60a8\u89e3\u91ca\u4ec0\u4e48\u662fbuffers, windows\u548ctabs\uff0c\u4ee5\u53ca\u5b83\u4eec\u5728Vim\u4e2d\u5982\u4f55\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u786e\u4fdd\u60a8\u7684vimrc\u6587\u4ef6\u4e2d\u5f00\u542f\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"set hidden"),"\u9009\u9879\u3002\u82e5\u6ca1\u6709\u914d\u7f6e\u8be5\u9009\u9879\uff0c\u5f53\u60a8\u60f3\u5207\u6362buffer\u4e14\u5f53\u524dbuffer\u6ca1\u6709\u4fdd\u5b58\u65f6\uff0cVim\u5c06\u63d0\u793a\u60a8\u4fdd\u5b58\u6587\u4ef6\uff08\u5982\u679c\u60a8\u60f3\u5feb\u901f\u5207\u6362\uff0c\u60a8\u4e0d\u4f1a\u60f3\u8981\u8fd9\u4e2a\u63d0\u793a\uff09\u3002\u6211\u76ee\u524d\u8fd8\u6ca1\u6709\u8bb2vimrc\uff0c\u5982\u679c\u60a8\u6ca1\u6709vimrc\u914d\u7f6e\u6587\u4ef6\uff0c\u90a3\u5c31\u521b\u5efa\u4e00\u4e2a\u3002\u5b83\u901a\u5e38\u4f4d\u4e8e\u6839\u76ee\u5f55\u4e0b\uff0c\u540d\u5b57\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},".vimrc"),"\u3002\u6211\u7684vimrc\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vimrc"),"\u3002\u8981\u67e5\u770b\u60a8\u81ea\u5df1\u7684vimrc\u6587\u4ef6\u5e94\u8be5\u653e\u7f6e\u5728\u54ea\uff0c\u53ef\u4ee5\u5728Vim\u547d\u4ee4\u6a21\u5f0f\u4e2d\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},":h vimrc"),"\u3002\u5728vimrc\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set hidden\n")),(0,l.kt)("p",null,"\u4fdd\u5b58\u597dvimrc\u6587\u4ef6\uff0c\u7136\u540e\u6fc0\u6d3b\u5b83(\u5728vimrc\u6587\u4ef6\u4e2d\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":source %"),")\u3002"),(0,l.kt)("h2",{id:"buffers"},"Buffers"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"buffer"),"\u5230\u5e95\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"buffer\u5c31\u662f\u5185\u5b58\u4e2d\u7684\u4e00\u5757\u7a7a\u95f4\uff0c\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u5199\u5165\u6216\u7f16\u8f91\u6587\u672c\u3002\u5f53\u60a8\u5728Vim\u4e2d\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u6587\u4ef6\u7684\u6570\u636e\u5c31\u4e0e\u4e00\u4e2abuffer\u7ed1\u5b9a\u3002\u5f53\u60a8\u5728Vim\u4e2d\u6253\u5f003\u4e2a\u6587\u4ef6\uff0c\u60a8\u5c31\u67093\u4e2abuffers\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u4e24\u4e2a\u53ef\u4f7f\u7528\u7684\u7a7a\u6587\u4ef6\uff0c\u5206\u522b\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\uff08\u5982\u679c\u53ef\u80fd\uff0c\u5c3d\u91cf\u4f7f\u7528Vim\u6765\u521b\u5efa\uff09\u3002\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim file1.js\n")),(0,l.kt)("p",null,"\u8fd9\u65f6\u60a8\u770b\u5230\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u7684 ",(0,l.kt)("em",{parentName:"p"},"buffer")," \u3002\u6bcf\u5f53\u60a8\u6253\u5f00\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0cVim\u603b\u662f\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684buffer\u3002"),(0,l.kt)("p",null,"\u9000\u51faVim\u3002\u8fd9\u4e00\u6b21\uff0c\u6253\u5f00\u4e24\u4e2a\u65b0\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim file1.js file2.js\n")),(0,l.kt)("p",null,"Vim\u5f53\u524d\u663e\u793a\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u7684buffer\uff0c\u4f46\u5b83\u5b9e\u9645\u4e0a\u521b\u5efa\u4e86\u4e24\u4e2abuffers\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"buffer\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"buffer\u3002\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":buffers"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7684buffers\uff08\u53e6\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":ls"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},":files"),"\u547d\u4ee4\uff09\u3002\u60a8\u5e94\u8be5\u4f1a ",(0,l.kt)("em",{parentName:"p"},"\u540c\u65f6")," \u770b\u5230\u5217\u51fa\u6765\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\u3002\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"vim file1 file2 file3 ... filen"),"\u521b\u5efan\u4e2abuffers\u3002\u6bcf\u4e00\u6b21\u60a8\u6253\u5f00\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0cVim\u5c31\u4e3a\u8fd9\u4e2a\u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684buffer\u3002"),(0,l.kt)("p",null,"\u8981\u904d\u5386\u6240\u6709buffers\uff0c\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":bnext")," \u5207\u6362\u81f3\u4e0b\u4e00\u4e2abuffer\uff08",(0,l.kt)("inlineCode",{parentName:"li"},":bprevious"),"\u5207\u6362\u81f3\u524d\u4e00\u4e2abuffer\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":buffer")," + \u6587\u4ef6\u540d\u3002\uff08\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"li"},"<Tab>"),"\u952eVim\u4f1a\u81ea\u52a8\u8865\u5168\u6587\u4ef6\u540d\uff09\u3002 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":buffer")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"n"),", n\u662fbuffer\u7684\u7f16\u53f7\u3002\u6bd4\u5982\uff0c\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"li"},":buffer 2"),"\u5c06\u4f7f\u60a8\u5207\u6362\u5230buffer #2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-O"),"\u5c06\u8df3\u8f6c\u81f3\u8df3\u8f6c\u5217\u8868\u4e2d\u65e7\u7684\u4f4d\u7f6e\uff0c\u5bf9\u5e94\u7684\uff0c\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-I"),"\u5c06\u8df3\u8f6c\u81f3\u8df3\u8f6c\u5217\u8868\u4e2d\u65b0\u7684\u4f4d\u7f6e\u3002\u8fd9\u5e76\u4e0d\u662f\u5c5e\u4e8ebuffer\u7684\u7279\u6709\u65b9\u6cd5\uff0c\u4f46\u5b83\u53ef\u4ee5\u7528\u6765\u5728\u4e0d\u540c\u7684buffers\u4e2d\u8df3\u8f6c\u3002\u6211\u5c06\u5728\u7b2c5\u7ae0\u8be6\u7ec6\u8bb2\u8ff0\u5173\u4e8e\u8df3\u8f6c\u7684\u77e5\u8bc6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-^"),"\u8df3\u8f6c\u81f3\u5148\u524d\u7f16\u8f91\u8fc7\u7684buffer\u3002")),(0,l.kt)("p",null,"\u4e00\u65e6Vim\u521b\u5efa\u4e86\u4e00\u4e2abuffer\uff0c\u5b83\u5c06\u4fdd\u7559\u5728\u60a8\u7684buffers\u5217\u8868\u4e2d\u3002\u82e5\u60f3\u5220\u9664\u5b83\uff0c\u60a8\u53ef\u4ee5\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},":bdelete"),"\u3002\u8fd9\u6761\u547d\u4ee4\u4e5f\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2abuffer\u7f16\u53f7\uff08",(0,l.kt)("inlineCode",{parentName:"p"},":bdlete 3"),"\u5c06\u5220\u9664buffer #3\uff09\u6216\u4e00\u4e2a\u6587\u4ef6\u540d\uff08",(0,l.kt)("inlineCode",{parentName:"p"},":bdelete"),"\u7136\u540e\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>"),"\u81ea\u52a8\u8865\u5168\u6587\u4ef6\u540d\uff09\u3002"),(0,l.kt)("p",null,"\u6211\u5b66\u4e60buffer\u65f6\u6700\u56f0\u96be\u7684\u4e8b\u60c5\u5c31\u662f\u7406\u89e3buffer\u5982\u4f55\u5de5\u4f5c\uff0c\u56e0\u4e3a\u6211\u5f53\u65f6\u7684\u601d\u7ef4\u5df2\u7ecf\u4e60\u60ef\u4e86\u4f7f\u7528\u4e3b\u6d41\u6587\u672c\u7f16\u8f91\u5668\u65f6\u5173\u4e8e\u7a97\u53e3\u7684\u6982\u5ff5\u3002\u8981\u7406\u89e3buffer\uff0c\u53ef\u4ee5\u6253\u4e2a\u5f88\u597d\u7684\u6bd4\u65b9\uff0c\u5c31\u662f\u6253\u724c\u7684\u684c\u9762\u3002\u5982\u679c\u60a8\u67092\u4e2abuffers\uff0c\u5c31\u50cf\u60a8\u6709\u4e00\u53e0\u724c\uff082\u5f20\uff09\u3002\u60a8\u53ea\u80fd\u770b\u89c1\u9876\u90e8\u7684\u724c\uff0c\u867d\u7136\u60a8\u77e5\u9053\u5728\u5b83\u4e0b\u9762\u8fd8\u6709\u5176\u4ed6\u7684\u724c\u3002\u5982\u679c\u60a8\u770b\u89c1",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"buffer\uff0c\u90a3\u4e48",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u5c31\u662f\u9876\u90e8\u7684\u724c\u3002\u867d\u7136\u60a8\u770b\u4e0d\u5230\u5176\u4ed6\u7684\u724c",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\uff0c\u4f46\u5b83\u5b9e\u9645\u4e0a\u5c31\u5728\u90a3\u3002\u5982\u679c\u60a8\u5207\u6362buffers\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\uff0c\u90a3\u4e48",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\u8fd9\u5f20\u724c\u5c31\u6362\u5230\u4e86\u9876\u90e8\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u5c31\u6362\u5230\u4e86\u5e95\u90e8\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4ee5\u524d\u6ca1\u6709\u7528\u8fc7Vim\uff0c\u8fd9\u662f\u4e00\u4e2a\u65b0\u7684\u6982\u5ff5\u3002\u82b1\u4e0a\u51e0\u5206\u949f\u7406\u89e3\u4e00\u4e0b\u3002"),(0,l.kt)("h2",{id:"\u9000\u51favim"},"\u9000\u51faVim"),(0,l.kt)("p",null,"\u987a\u5e26\u8bf4\u4e00\u53e5\uff0c\u5982\u679c\u60a8\u5df2\u7ecf\u6253\u5f00\u4e86\u591a\u4e2abuffers\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528quit -all\u6765\u5173\u95ed\u6240\u6709\u7684buffers\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":qall\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5173\u95ed\u6240\u6709buffers\u4f46\u4e0d\u4fdd\u5b58\uff0c\u4ec5\u9700\u8981\u5728\u540e\u9762\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\uff08\u53f9\u53f7\uff09\u5c31\u884c\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":qall!\n")),(0,l.kt)("p",null,"\u82e5\u8981\u4fdd\u5b58\u6240\u6709buffers\u7136\u540e\u9000\u51fa\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":wqall\n")),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("p",null,"\u4e00\u4e2awindow\u5c31\u662f\u5728buffer\u4e0a\u7684\u4e00\u4e2a\u89c6\u53e3\u3002\u5982\u679c\u60a8\u4f7f\u7528\u8fc7\u4e3b\u6d41\u7684\u7f16\u8f91\u5668\uff0cWindows\u8fd9\u4e2a\u6982\u5ff5\u5e94\u8be5\u5f88\u719f\u6089\u3002\u5927\u90e8\u5206\u6587\u672c\u7f16\u8f91\u5668\u5177\u6709\u663e\u793a\u591a\u4e2a\u7a97\u53e3\u7684\u80fd\u529b\u3002\u5728Vim\u4e2d\uff0c\u60a8\u540c\u6837\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a\u7a97\u53e3\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u7ec8\u7aef\u518d\u6b21\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim file1.js\n")),(0,l.kt)("p",null,"\u5148\u524d\u6211\u8bf4\u8fc7\uff0c\u60a8\u770b\u5230\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u7684buffer\u3002\u4f46\u8fd9\u4e2a\u8bf4\u6cd5\u5e76\u4e0d\u5b8c\u6574\uff0c\u73b0\u5728\u8fd9\u53e5\u8bdd\u5f97\u66f4\u6b63\u4e00\u4e0b\uff0c\u60a8\u770b\u5230\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js "),"\u7684buffer\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u7a97\u53e3")," \u663e\u793a\u51fa\u6765\u3002\u7a97\u53e3\u5c31\u662f\u60a8\u67e5\u770b\u7684buffer\u6240\u4f7f\u7528\u7684\u89c6\u53e3\u3002"),(0,l.kt)("p",null,"\u5148\u4e0d\u5fd9\u6025\u7740\u9000\u51faVim\uff0c\u5728Vim\u4e2d\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":split file2.js\n")),(0,l.kt)("p",null,"\u73b0\u5728\u60a8\u770b\u5230\u7684\u662f\u4e24\u4e2abuffers\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u7a97\u53e3")," \u663e\u793a\u51fa\u6765\u3002\u4e0a\u9762\u7684\u7a97\u53e3\u663e\u793a\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\u7684buffer\u3002\u800c\u4e0b\u9762\u7684\u7a97\u53e3\u663e\u793a\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u7684buffer\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u7a97\u53e3\u4e4b\u95f4\u5bfc\u822a\uff0c\u4f7f\u7528\u8fd9\u4e9b\u5feb\u6377\u952e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Ctrl-W H    \u79fb\u52a8\u5149\u6807\u5230\u5de6\u8fb9\u7684\u7a97\u53e3\nCtrl-W J    \u79fb\u52a8\u5149\u6807\u5230\u4e0b\u9762\u7684\u7a97\u53e3\nCtrl-W K    \u79fb\u52a8\u5149\u6807\u5230\u4e0a\u9762\u7684\u7a97\u53e3\nCtrl-W L    \u79fb\u52a8\u5149\u6807\u5230\u53f3\u8fb9\u7684\u7a97\u53e3\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5728Vim\u4e2d\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":vsplit file3.js\n")),(0,l.kt)("p",null,"\u60a8\u73b0\u5728\u770b\u5230\u7684\u662f\u4e09\u4e2a\u7a97\u53e3\u663e\u793a\u4e09\u4e2abuffers\u3002\u4e00\u4e2a\u7a97\u53e3\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"file3.js"),"\u7684buffer\uff0c\u4e00\u4e2a\u7a97\u53e3\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\u7684buffer\uff0c\u8fd8\u6709\u4e00\u4e2a\u7a97\u53e3\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\u7684buffer\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u591a\u4e2a\u7a97\u53e3\u663e\u793a\u540c\u4e00\u4e2abuffer\u3002\u5f53\u5149\u6807\u4f4d\u4e8e\u5de6\u4e0a\u65b9\u7a97\u53e3\u65f6\uff0c\u8f93\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":buffer file2.js\n")),(0,l.kt)("p",null,"\u73b0\u5728\u4e24\u4e2a\u7a97\u53e3\u663e\u793a\u7684\u90fd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\u7684buffer\u3002\u5982\u679c\u60a8\u73b0\u5728\u5728\u8fd9\u4e24\u4e2a\u7a97\u53e3\u4e2d\u7684\u67d0\u4e00\u4e2a\u8f93\u5165\u5185\u5bb9\uff0c\u60a8\u4f1a\u770b\u5230\u6240\u6709\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"buffer\u7684\u7a97\u53e3\u90fd\u5728\u5b9e\u65f6\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u8981\u5173\u95ed\u5f53\u524d\u7684\u7a97\u53e3\uff0c\u60a8\u53ef\u4ee5\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-W C"),"\u6216\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},":quit"),"\u3002\u5f53\u60a8\u5173\u95ed\u4e00\u4e2a\u7a97\u53e3\u540e\uff0cbuffers\u4ecd\u7136\u4f1a\u5728\u5217\u8868\u4e2d\u3002\uff08\u53ef\u4ee5\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":buffers"),"\u6765\u786e\u8ba4\u8fd9\u4e00\u70b9\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u666e\u901a\u6a21\u5f0f\u4e0b\u5173\u4e8e\u7a97\u53e3\u7684\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Ctrl-W V    \u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u5782\u76f4\u5206\u5272\u7684\u7a97\u53e3\nCtrl-W S    \u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u6c34\u5e73\u5206\u5272\u7684\u7a97\u53e3\nCtrl-W C    \u5173\u95ed\u4e00\u4e2a\u7a97\u53e3\nCtrl-W O    \u9664\u4e86\u5f53\u524d\u7a97\u53e3\uff0c\u5173\u95ed\u6240\u6709\u5176\u4ed6\u7684\u7a97\u53e3\n")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u4e0b\u9762\u7684\u5217\u8868\u5217\u51fa\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u5173\u4e8ewindows\u7684\u547d\u4ee4\u884c\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":vsplit filename    \u5782\u76f4\u5206\u5272\u5f53\u524d\u7a97\u53e3\uff0c\u5e76\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00\u540d\u4e3afilename\u7684\u6587\u4ef6\u3002\n:split filename     \u6c34\u5e73\u5206\u5272\u5f53\u524d\u7a97\u53e3\uff0c\u5e76\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00\u540d\u4e3afilename\u7684\u6587\u4ef6\u3002\n:new filename       \u521b\u5efa\u4e00\u4e2a\u65b0\u7a97\u53e3\u5e76\u6253\u5f00\u540d\u4e3afilename\u7684\u6587\u4ef6\u3002\n")),(0,l.kt)("p",null,"\u82b1\u4e00\u70b9\u65f6\u95f4\u7406\u89e3\u4e0a\u9762\u7684\u77e5\u8bc6\u3002\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u67e5\u770b\u5e2e\u52a9",(0,l.kt)("inlineCode",{parentName:"p"},":h window"),"\u3002"),(0,l.kt)("h2",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"Tabs\u5c31\u662fwindows\u7684\u96c6\u5408\u3002\u5b83\u5c31\u50cf\u7a97\u53e3\u7684\u5e03\u5c40\u3002\u5728\u5927\u90e8\u5206\u7684\u73b0\u4ee3\u6587\u672c\u7f16\u8f91\u5668\uff08\u8fd8\u6709\u73b0\u4ee3\u4e92\u8054\u7f51\u6d4f\u89c8\u5668\uff09\u4e2d\uff0c\u4e00\u4e2atab\u610f\u5473\u7740\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6/\u9875\u9762\uff0c\u5f53\u60a8\u5173\u95ed\u6807\u7b7e\uff0c\u76f8\u5e94\u7684\u6587\u4ef6/\u9875\u9762\u5c31\u6d88\u5931\u4e86\u3002\u4f46\u5728Vim\u4e2d\uff0ctab\u5e76\u4e0d\u8868\u793a\u6253\u5f00\u4e86\u4e00\u4e2a\u6587\u4ef6\u3002\u5f53\u60a8\u5728Vim\u4e2d\u5173\u95ed\u4e00\u4e2atab\uff0c\u60a8\u5e76\u4e0d\u662f\u5173\u95ed\u4e00\u4e2a\u6587\u4ef6\u3002\u60a8\u4ec5\u4ec5\u5173\u95ed\u4e86\u7a97\u53e3\u5e03\u5c40\u3002\u6587\u4ef6\u7684\u6570\u636e\u4f9d\u7136\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u7684buffers\u4e2d\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u8fd0\u884c\u51e0\u4e2a\u547d\u4ee4\u770b\u770bVim\u4e2dtabs\u7684\u529f\u80fd\u3002\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"file1.js"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim file1.js\n")),(0,l.kt)("p",null,"\u82e5\u8981\u5728\u65b0tab\u4e2d\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"file2.js"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":tabnew file2.js\n")),(0,l.kt)("p",null,"\u5f53\u7136\u60a8\u53ef\u4ee5\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>"),"\u8ba9Vim\u81ea\u52a8\u8865\u5168 ",(0,l.kt)("em",{parentName:"p"},"\u65b0tab")," \u4e2d\u5c06\u8981\u6253\u5f00\u7684\u6587\u4ef6\u540d\uff08\u5570\u55e6\u51e0\u53e5\uff0c\u8bf7\u7406\u89e3\u4f5c\u8005\u7684\u5e7d\u9ed8 \uff09\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u5217\u8868\u5217\u51fa\u4e86\u4e00\u4e9b\u6709\u7528\u7684\u5173\u4e8etab\u5bfc\u822a\u7684\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":tabnew file.txt    \u5728tab\u4e2d\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\n:tabclose           \u5173\u95ed\u5f53\u524dtab\n:tabnext            \u5207\u6362\u81f3\u4e0b\u4e00\u4e2atab\n:tabprevious        \u5207\u6362\u81f3\u524d\u4e00\u4e2atab\n:tablast            \u5207\u6362\u81f3\u6700\u540e\u4e00\u4e2atab\n:tabfirst           \u5207\u6362\u81f3\u7b2c\u4e00\u4e2atab\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"gt"),"\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u6807\u7b7e\u9875\uff08\u5bf9\u5e94\u7684\uff0c\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"gT"),"\u5207\u6362\u5230\u524d\u4e00\u4e2a\u6807\u7b7e\u9875\uff09\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u6570\u5b57\u4f5c\u4e3a\u53c2\u6570\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"gt"),"\uff0c\u8fd9\u4e2a\u6570\u5b57\u662ftab\u7684\u7f16\u53f7\u3002\u82e5\u60f3\u5207\u6362\u5230\u7b2c3\u4e2atab\uff0c\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"3gt"),"\u3002"),(0,l.kt)("p",null,"\u62e5\u6709\u591a\u4e2atabs\u7684\u597d\u5904\u662f\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0d\u540c\u7684tab\u4e2d\u4f7f\u7528\u4e0d\u540c\u7684\u7a97\u53e3\u5e03\u5c40\u3002\u4e5f\u8bb8\uff0c\u60a8\u60f3\u8ba9\u60a8\u7684\u7b2c1\u4e2atab\u5305\u542b3\u4e2a\u5782\u76f4\u5206\u5272\u7684\u7a97\u53e3\uff0c\u7136\u540e\u8ba9\u7b2c2\u4e2atab\u4e3a\u6c34\u5e73\u5206\u5272\u548c\u5782\u76f4\u5206\u5272\u6df7\u5408\u7684\u7a97\u53e3\u5e03\u5c40\u3002tab\u662f\u5b8c\u6210\u8fd9\u4ef6\u5de5\u4f5c\u7684\u5b8c\u7f8e\u5de5\u5177!"),(0,l.kt)("p",null,"\u82e5\u60f3\u8ba9Vim\u542f\u52a8\u65f6\u5c31\u5305\u542b\u591a\u4e2atabs\uff0c\u60a8\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim -p file1.js file2.js file3.js\n")),(0,l.kt)("h2",{id:"\u4e09\u7ef4\u79fb\u52a8"},"\u4e09\u7ef4\u79fb\u52a8"),(0,l.kt)("p",null,"\u5728windows\u4e4b\u95f4\u79fb\u52a8\u5c31\u50cf\u5728\u7b1b\u5361\u5c14\u5750\u6807\u7cfb\u7684\u4e8c\u7ef4\u5e73\u9762\u4e0a\u6cbf\u7740X-Y\u8f74\u79fb\u52a8\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-W H/J/K/L"),"\u79fb\u52a8\u5230\u4e0a\u9762\u3001\u53f3\u4fa7\u3001\u4e0b\u9762\u3001\u4ee5\u53ca\u5de6\u4fa7\u7684\u7a97\u53e3\u3002"),(0,l.kt)("p",null,"\u5728buffer\u4e4b\u95f4\u79fb\u52a8\u5c31\u50cf\u5728\u7b1b\u5361\u5c14\u5750\u6807\u7cfb\u7684Z\u8f74\u4e0a\u7a7f\u68ad\u3002\u60f3\u8c61\u60a8\u7684buffer\u6587\u4ef6\u5728Z\u8f74\u4e0a\u5448\u7ebf\u6027\u6392\u5217\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":bnext"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"bprevious"),"\u5728Z\u8f74\u4e0a\u4e00\u6b21\u4e00\u4e2abuffer\u5730\u904d\u5386\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":buffer \u6587\u4ef6\u540d/buffer\u7f16\u53f7"),"\u5728Z\u8f74\u4e0a\u8df3\u8f6c\u5230\u4efb\u610f\u5750\u6807\u3002"),(0,l.kt)("p",null,"\u7ed3\u5408window\u548cbuffer\u7684\u79fb\u52a8\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,l.kt)("em",{parentName:"p"},"\u4e09\u7ef4\u7a7a\u95f4")," \u4e2d\u79fb\u52a8\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528window\u5bfc\u822a\u547d\u4ee4\u79fb\u52a8\u5230\u4e0a\u9762\u3001\u53f3\u4fa7\u3001\u4e0b\u9762\u3001\u6216\u5de6\u4fa7\u7684\u7a97\u53e3\uff08X-Y\u5e73\u9762\u5bfc\u822a\uff09\u3002\u56e0\u4e3a\u6bcf\u4e2awindow\u90fd\u53ef\u80fd\u5305\u542b\u4e86\u591a\u4e2abuffers\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528buffer\u79fb\u52a8\u547d\u4ee4\u5411\u524d\u3001\u5411\u540e\u79fb\u52a8\uff08Z\u8f74\u5bfc\u822a\uff09\u3002"),(0,l.kt)("h2",{id:"\u7528\u806a\u660e\u7684\u65b9\u6cd5\u4f7f\u7528bufferswindows\u4ee5\u53catabs"},"\u7528\u806a\u660e\u7684\u65b9\u6cd5\u4f7f\u7528Buffers\u3001Windows\u3001\u4ee5\u53caTabs"),(0,l.kt)("p",null,"\u60a8\u5df2\u7ecf\u5b66\u4e60\u4e86\u4ec0\u4e48\u662fbuffers\u3001windows\u3001\u4ee5\u53catabs\uff0c\u4e5f\u5b66\u4e60\u4e86\u5b83\u4eec\u5982\u4f55\u5728Vim\u4e2d\u5de5\u4f5c\u3002\u73b0\u5728\u60a8\u5bf9\u5b83\u4eec\u6709\u4e86\u66f4\u597d\u5730\u7406\u89e3\uff0c\u60a8\u53ef\u4ee5\u628a\u5b83\u4eec\u7528\u5728\u60a8\u81ea\u5df1\u7684\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4eba\u90fd\u6709\u4e0d\u540c\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4ee5\u4e0b\u793a\u4f8b\u662f\u6211\u7684\u5de5\u4f5c\u6d41\u7a0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u5bf9\u4e8e\u67d0\u4e2a\u7279\u5b9a\u4efb\u52a1\uff0c\u6211\u5148\u4f7f\u7528buffers\u5b58\u50a8\u6240\u6709\u9700\u8981\u7684\u6587\u4ef6\u3002Vim\u5c31\u7b97\u6253\u5f00\u5f88\u591abuffer\uff0c\u901f\u5ea6\u4e00\u822c\u4e5f\u4e0d\u4f1a\u51cf\u6162\u3002\u53e6\u5916\u6253\u5f00\u591a\u4e2abuffers\u5e76\u4e0d\u4f1a\u4f7f\u6211\u7684\u5c4f\u5e55\u53d8\u5f97\u62e5\u6324\u3002\u6211\u59cb\u7ec8\u53ea\u4f1a\u770b\u52301\u4e2abuffer\uff08\u5047\u8bbe\u6211\u53ea\u67091\u4e2awindow\uff09\uff0c\u8fd9\u53ef\u4ee5\u8ba9\u6211\u6ce8\u610f\u529b\u96c6\u4e2d\u57281\u4e2a\u5c4f\u5e55\u4e0a\u3002\u5f53\u6211\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u6587\u4ef6\u65f6\uff0c\u53ef\u4ee5\u5feb\u901f\u5207\u6362\u81f3\u5bf9\u5e94\u6587\u4ef6\u7684buffer\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6bd4\u5bf9\u6587\u4ef6\u3001\u8bfb\u6587\u6863\u3001\u6216\u8ffd\u8e2a\u4ee3\u7801\u6d41\u65f6\uff0c\u6211\u4f7f\u7528\u591a\u7a97\u53e3\u6765\u4e00\u6b21\u67e5\u770b\u591a\u4e2abuffers\u3002\u6211\u5c3d\u91cf\u4fdd\u6301\u5c4f\u5e55\u4e0a\u7684\u7a97\u53e3\u6570\u4e0d\u8d85\u8fc73\u4e2a\uff0c\u56e0\u4e3a\u8d85\u8fc73\u4e2a\u5c4f\u5e55\u5c06\u53d8\u5f97\u62e5\u6324\uff08\u6211\u4f7f\u7528\u7684\u662f\u5c0f\u578b\u7b14\u8bb0\u672c\uff09\u3002\u5f53\u76f8\u5e94\u5de5\u4f5c\u5b8c\u6210\u540e\uff0c\u6211\u5c31\u5173\u6389\u591a\u4f59\u7684\u7a97\u53e3\u3002\u7a97\u53e3\u8d8a\u5c11\u53ef\u4ee5\u4f7f\u6ce8\u610f\u529b\u66f4\u96c6\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4f7f\u7528",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux/wiki"},"tmux"),"windows\u6765\u4ee3\u66fftabs\u3002\u901a\u5e38\u4e00\u6b21\u4f7f\u7528\u591a\u4e2atmux\u7a97\u53e3\u3002\u6bd4\u5982\uff0c\u4e00\u4e2atmux\u7a97\u53e3\u7528\u6765\u5199\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u4e00\u4e2a\u7528\u6765\u5199\u540e\u53f0\u4ee3\u7801\u3002 ")),(0,l.kt)("p",null,"\u7531\u4e8e\u7f16\u8f91\u98ce\u683c\u4e0d\u540c\uff0c\u6211\u7684\u5de5\u4f5c\u6d41\u7a0b\u53ef\u80fd\u548c\u60a8\u7684\u5de5\u4f5c\u6d41\u7a0b\u4e0d\u540c\uff0c\u8fd9\u6ca1\u5173\u7cfb\u3002\u60a8\u53ef\u4ee5\u5728\u5b9e\u8df5\u4e2d\u53bb\u63a2\u7d22\u9002\u5408\u60a8\u81ea\u5df1\u5de5\u4f5c\u6d41\u7a0b\u7684\u7f16\u7801\u98ce\u683c\u3002"))}m.isMDXComponent=!0}}]);