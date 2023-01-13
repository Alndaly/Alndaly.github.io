"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8518],{92090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>r,frontMatter:()=>p,metadata:()=>a,toc:()=>d});var i=n(87462),l=(n(67294),n(3905));n(16758);const p={title:"Vim Rumtime",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},o="\u7b2c24\u7ae0 Vim Rumtime",a={unversionedId:"others/Vim/ch24_vim_runtime",id:"others/Vim/ch24_vim_runtime",title:"Vim Rumtime",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch24_vim_runtime.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch24_vim_runtime",permalink:"/docs/others/Vim/ch24_vim_runtime",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Vim/ch24_vim_runtime.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"Vim Rumtime",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Vim\u8f6f\u4ef6\u5305",permalink:"/docs/others/Vim/ch23_vim_packages"},next:{title:"Mac\u4e0bbrew\u6e90\u5207\u6362",permalink:"/docs/others/brew"}},m={},d=[{value:"Runtime\u8def\u5f84",id:"runtime\u8def\u5f84",level:2},{value:"Plugin\u811a\u672c",id:"plugin\u811a\u672c",level:2},{value:"\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b",id:"\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b",level:2},{value:"\u6587\u4ef6\u540d\u68c0\u6d4b",id:"\u6587\u4ef6\u540d\u68c0\u6d4b",level:3},{value:"<code>ftdetect/</code>",id:"ftdetect",level:4},{value:"\u6587\u4ef6\u7c7b\u578b\u6587\u4ef6",id:"\u6587\u4ef6\u7c7b\u578b\u6587\u4ef6",level:4},{value:"\u6587\u4ef6\u7c7b\u578b\u811a\u672c",id:"\u6587\u4ef6\u7c7b\u578b\u811a\u672c",level:3},{value:"\u6587\u4ef6\u7c7b\u578b\u63d2\u4ef6",id:"\u6587\u4ef6\u7c7b\u578b\u63d2\u4ef6",level:2},{value:"\u7f29\u8fdb\u6587\u4ef6",id:"\u7f29\u8fdb\u6587\u4ef6",level:2},{value:"\u989c\u8272",id:"\u989c\u8272",level:2},{value:"\u8bed\u6cd5\u9ad8\u4eae",id:"\u8bed\u6cd5\u9ad8\u4eae",level:2},{value:"\u6587\u6863",id:"\u6587\u6863",level:2},{value:"\u5ef6\u65f6\u52a0\u8f7d\u811a\u672c",id:"\u5ef6\u65f6\u52a0\u8f7d\u811a\u672c",level:2},{value:"After\u811a\u672c",id:"after\u811a\u672c",level:2},{value:"$VIMRUNTIME",id:"vimruntime",level:2},{value:"Runtimepath\u9009\u9879",id:"runtimepath\u9009\u9879",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60Runtime",id:"\u806a\u660e\u5730\u5b66\u4e60runtime",level:2}],u={toc:d};function r(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c24\u7ae0-vim-rumtime"},"\u7b2c24\u7ae0 Vim Rumtime"),(0,l.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u63d0\u5230Vim\u4f1a\u81ea\u52a8\u67e5\u627e\u4e00\u4e9b\u7279\u6b8a\u7684\u8def\u5f84\uff0c\u6bd4\u5982\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"pack/"),"(\u7b2c23\u7ae0) ",(0,l.kt)("inlineCode",{parentName:"p"},"compiler/"),"\uff08\u7b2c19\u7ae0\uff09\u3002\u8fd9\u4e9b\u90fd\u662fVim runtime\u8def\u5f84\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u63d0\u5230\u7684\u4e24\u4e2a\uff0cVim\u8fd8\u6709\u66f4\u591aruntime\u8def\u5f84\u3002\u5728\u672c\u7ae0\uff0c\u60a8\u5c06\u5b66\u4e60\u5173\u4e8eVim runtime\u8def\u5f84\u7684\u9ad8\u5c42\u6b21\u6982\u8ff0\u3002\u672c\u7ae0\u7684\u76ee\u6807\u662f\u5411\u60a8\u5c55\u793a\u5b83\u4eec\u4ec0\u4e48\u65f6\u5019\u88ab\u8c03\u7528\u3002\u77e5\u9053\u8fd9\u4e9b\u77e5\u8bc6\u80fd\u591f\u5e2e\u60a8\u66f4\u8fdb\u4e00\u6b65\u7406\u89e3\u548c\u5b9a\u5236Vim\u3002"),(0,l.kt)("h2",{id:"runtime\u8def\u5f84"},"Runtime\u8def\u5f84"),(0,l.kt)("p",null,"\u5728\u4e00\u53f0Unix\u673a\u5668\u4e2d\uff0c\u5176\u4e2d\u4e00\u4e2avim runtime\u8def\u5f84\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/")," \uff08\u5982\u679c\u60a8\u7528\u7684\u662f\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\uff0c\u6bd4\u5982Windows\uff0c\u60a8\u7684\u8def\u5f84\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff09\u3002\u8981\u67e5\u770b\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u6709\u4ec0\u4e48\u6837\u7684runtime\u8def\u5f84\uff0c\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h runtimepath"),"\u3002\u5728\u672c\u7ae0\uff0c\u6211\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/")," \u4f5c\u4e3a\u9ed8\u8ba4\u7684runtime\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"plugin\u811a\u672c"},"Plugin\u811a\u672c"),(0,l.kt)("p",null,'Vim\u6709\u4e00\u4e2aruntime\u8def\u5f84 plugin\uff0c\u6bcf\u6b21Vim\u542f\u52a8\u65f6\u90fd\u4f1a\u6267\u884c\u8fd9\u4e2a\u8def\u5f84\u4e2d\u7684\u6240\u6709\u811a\u672c\u3002\u4e0d\u8981\u628a\u8fd9\u4e2a\u540d\u5b57 "plugin" \u548cVim\u7684\u5916\u90e8\u63d2\u4ef6\uff08external plugins\uff0c\u6bd4\u5982NERDTree, fzf.vim, \u7b49)\u641e\u6df7\u4e86\u3002'),(0,l.kt)("p",null,"\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/")," \u76ee\u5f55\uff0c\u7136\u540e\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin/")," \u5b50\u76ee\u5f55\u3002 \u521b\u5efa\u4e24\u4e2a\u6587\u4ef6\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"donut.vim")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"chocolate.vim"),"\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/plugin/donut.vim"),"\u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "donut!"\n')),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/plugin/chocolate.vim"),"\u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "chocolate!"\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5173\u95edVim\u3002\u4e0b\u6b21\u60a8\u542f\u52a8Vim\uff0c\u60a8\u5c06\u4f1a\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},'"donut!"')," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":chocolate!")," \u7684\u663e\u793a\u3002\u6b64 plugin runtime\u8def\u5f84\u53ef\u4ee5\u7528\u6765\u6267\u884c\u4e00\u4e9b\u521d\u59cb\u5316\u811a\u672c\u3002"),(0,l.kt)("h2",{id:"\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b"},"\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u4e3a\u4fdd\u8bc1\u68c0\u6d4b\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u786e\u4fdd\u5728\u60a8\u7684vimrc\u4e2d\u81f3\u5c11\u5305\u542b\u4e86\u4e0b\u5217\u7684\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filetype plugin indent on\n")),(0,l.kt)("p",null,"\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h filetype-overview")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\u672c\u8d28\u4e0a\uff0c\u8fd9\u6761\u4ee3\u7801\u5f00\u542fVim\u7684\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b\u3002"),(0,l.kt)("p",null,"\u5f53\u60a8\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\uff0cVim\u901a\u5e38\u77e5\u9053\u8fd9\u4e2a\u6587\u4ef6\u662f\u4ec0\u4e48\u7c7b\u578b\u3002\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.rb"),"\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?")," \u4f1a\u8fd4\u56de\u6b63\u786e\u7684\u76f8\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype=ruby"),"\u3002"),(0,l.kt)("p",null,'Vim\u77e5\u9053\u5982\u4f55\u68c0\u6d4b "\u5e38\u89c1" \u7684\u6587\u4ef6\u7c7b\u578b\uff08Ruby, Python, Javascript, \u7b49\uff09\u3002\u4f46\u5982\u679c\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6587\u4ef6\u4f1a\u600e\u6837\u5462\uff1f\u60a8\u9700\u8981\u544a\u8bc9Vim\u53bb\u68c0\u6d4b\u5b83\uff0c\u5e76\u7ed9\u5b83\u6307\u6d3e\u4e00\u4e2a\u6b63\u786e\u7684\u6587\u4ef6\u7c7b\u578b\u3002'),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u68c0\u6d4b\u65b9\u6cd5\uff1a\u4f7f\u7528\u6587\u4ef6\u540d\u548c\u4f7f\u7528\u6587\u4ef6\u5185\u5bb9"),(0,l.kt)("h3",{id:"\u6587\u4ef6\u540d\u68c0\u6d4b"},"\u6587\u4ef6\u540d\u68c0\u6d4b"),(0,l.kt)("p",null,"\u6587\u4ef6\u540d\u68c0\u6d4b\u4f7f\u7528\u4e00\u4e2a\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u6765\u68c0\u6d4b\u6587\u4ef6\u7c7b\u578b\u3002\u5f53\u60a8\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.rb"),"\u6587\u4ef6\u65f6\uff0cVim\u4f9d\u9760\u6269\u5c55\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},".rb")," \u77e5\u9053\u5b83\u662f\u4e00\u4e2aRuby\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u5b9e\u73b0\u6587\u4ef6\u540d\u68c0\u6d4b\uff1a\u4e00\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ftdetect")," runtime\u76ee\u5f55\uff0c\u4e8c\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype.vim")," runtime\u6587\u4ef6\u3002\u6211\u4eec\u4e24\u4e2a\u90fd\u770b\u4e00\u770b\u3002"),(0,l.kt)("h4",{id:"ftdetect"},(0,l.kt)("inlineCode",{parentName:"h4"},"ftdetect/")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u53e4\u602a\uff08\u4f46\u4f18\u96c5\uff09\u7684\u540d\u5b57\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"hello.chocodonut"),"\u3002\u5f53\u60a8\u6253\u5f00\u5b83\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?")," \uff0c\u56e0\u4e3a\u5b83\u7684\u540e\u7f00\u540d\u4e0d\u662f\u5e38\u89c1\u7684\u6587\u4ef6\u540d\uff0cVim\u4e0d\u77e5\u9053\u5b83\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype="),"\u3002"),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u6307\u793aVim\u5c06\u6240\u6709\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},".chocodonut"),'\u7ed3\u5c3e\u7684\u6587\u4ef6\u8bbe\u7f6e\u4e3a "chocodonut"\u7c7b\u578b\u7684\u6587\u4ef6\u3002\u5728runtime\u8def\u5f84\u6839\u76ee\u5f55(',(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/"),")\u521b\u5efa\u4e00\u4e2a\u5b50\u76ee\u5f55\uff0c\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ftdetect/")," \u3002\u5728\u5b50\u76ee\u5f55\u91cc\u9762\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u540d\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"chocodonut.vim")," \u7684\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftdetect/chocodonut.vim"),"\uff09\uff0c\u5728\u6587\u4ef6\u91cc\u9762\uff0c\u6dfb\u52a0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"autocmd BufNewFile,BufRead *.chocodonut set filetype=chocodonut\n")),(0,l.kt)("p",null,"\u5f53\u60a8\u521b\u5efa\u65b0buffer\u6216\u6253\u5f00\u65b0buffer\u65f6\uff0c\u4e8b\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"BufNewFile")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"BufRead")," \u5c31\u4f1a\u88ab\u89e6\u53d1\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"*.chocodonut")," \u610f\u601d\u662f\u53ea\u6709\u5f53\u65b0\u6253\u5f00\u7684buffer\u6587\u4ef6\u540d\u540e\u7f00\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},".chocodonut")," \u65f6\u4e8b\u4ef6\u624d\u4f1a\u88ab\u89e6\u53d1\u3002\u6700\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"set filetype=chocodonut")," \u547d\u4ee4\u5c06\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u4e3achocodonut\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u91cd\u542fVim\u3002\u65b0\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.chocodonut")," \u6587\u4ef6\u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?"),"\u3002\u5b83\u5c06\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype=chocodonut"),"."),(0,l.kt)("p",null,"\u597d\u6781\u4e86\uff01\u53ea\u8981\u60a8\u60f3\uff0c\u60a8\u53ef\u4ee5\u5c06\u4efb\u610f\u591a\u7684\u6587\u4ef6\u653e\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ftdetect/")," \u4e2d\u3002\u4ee5\u540e\uff0c\u5982\u679c\u60a8\u60f3\u6269\u5c55\u60a8\u7684 donut \u6587\u4ef6\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"ftdetect/strawberrydonut.vim"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ftdetect/plaindonut.vim")," \u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u5728Vim\u4e2d\uff0c\u5b9e\u9645\u4e0a\u6709\u4e24\u79cd\u65b9\u6cd5\u8bbe\u7f6e\u6587\u4ef6\u7c7b\u578b\u3002\u5176\u4e2d\u7ed9\u4e00\u4e2a\u662f\u60a8\u521a\u521a\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"set filetype=chocodonut"),"\u3002\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"setfiletype chocodonut"),"\u3002\u524d\u4e00\u4e2a\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"set filetype=chocodonut")," \u5c06 ",(0,l.kt)("em",{parentName:"p"},"\u603b\u662f")," \u8bbe\u7f6e\u6587\u4ef6\u7c7b\u578b\u4e3achocodonut\u3002 \u800c\u540e\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"setfiletype chocodonut"),"\u53ea\u6709\u5f53\u6587\u4ef6\u7c7b\u578b\u5c1a\u672a\u8bbe\u7f6e\u65f6\uff0c\u624d\u4f1a\u5c06\u6587\u4ef6\u7c7b\u578b\u8bbe\u7f6e\u4e3achocodonut\u3002"),(0,l.kt)("h4",{id:"\u6587\u4ef6\u7c7b\u578b\u6587\u4ef6"},"\u6587\u4ef6\u7c7b\u578b\u6587\u4ef6"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u6587\u4ef6\u7c7b\u578b\u68c0\u6d4b\u9700\u8981\u4f60\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype.vim"),"\u7684\u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u653e\u7f6e\u5728\u6839\u76ee\u5f55(",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/filetype.vim"),")\u3002\u5728\u6587\u4ef6\u5185\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"autocmd BufNewFile,BufRead *.plaindonut set filetype=plaindonut\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.plaindonut")," \u7684\u6587\u4ef6\u3002\u5f53\u4f60\u6253\u5f00\u5b83\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?")," Vim\u4f1a\u663e\u793a\u6b63\u786e\u7684\u81ea\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype=plaindonut"),"\u3002"),(0,l.kt)("p",null,"\u592a\u597d\u4e86\uff0c\u4fee\u6539\u751f\u6548\u4e86\u3002\u53e6\u5916\uff0c\u5982\u679c\u60a8\u4ed4\u7ec6\u770b\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype.vim")," \uff0c\u60a8\u4f1a\u53d1\u73b0\u5f53\u60a8\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"hello.plaindonut"),"\u65f6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u6587\u4ef6\u8fd0\u884c\u4e86\u591a\u6b21\u3002\u4e3a\u9632\u6b62\u8fd9\u4e00\u70b9\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5b88\u536b\uff0c\u8ba9\u4e3b\u811a\u672c\u53ea\u8fd0\u884c\u4e00\u6b21\u3002\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype.vim"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'if exists("did_load_filetypes")\n  finish\nendif\n\naugroup donutfiletypedetection\n  autocmd! BufRead,BufNewFile *.plaindonut setfiletype plaindonut\naugroup END\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"finish")," \u662f\u4e00\u4e2aVim\u547d\u4ee4\uff0c\u7528\u6765\u505c\u6b62\u6267\u884c\u5269\u4f59\u7684\u811a\u672c\u3002\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},'"did_load_filetypes"')," \u5e76 ",(0,l.kt)("em",{parentName:"p"},"\u4e0d\u662f")," \u4e00\u4e2aVim\u5185\u7f6e\u51fd\u6570\u3002\u5b83\u5b9e\u9645\u4e0a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME/filetype.vim")," \u4e2d\u7684\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002\u5982\u679c\u60a8\u597d\u5947\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":e $VIMRUNTIME/filetype.vim"),"\u3002\u60a8\u5c06\u4f1a\u53d1\u73b0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'if exists("did_load_filetypes")\n  finish\nendif\n\nlet did_load_filetypes = 1\n')),(0,l.kt)("p",null,"\u5f53Vim\u8c03\u7528\u8fd9\u4e2a\u6587\u4ef6\u65f6\uff0c\u5b83\u4f1a\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"did_load_filetypes")," \u53d8\u91cf\uff0c\u5e76\u5c06\u5b83\u8bbe\u7f6e\u4e3a 1 \u3002\u5728Vim\u4e2d\uff0c1 \u8868\u793a\u771f\u3002\u4f60\u53ef\u4ee5\u8bd5\u7740\u8bfb\u5b8c ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype.vim")," \u5269\u4f59\u7684\u5185\u5bb9\uff0c\u770b\u770b\u60a8\u662f\u5426\u80fd\u591f\u7406\u89e3\u5f53Vim\u8c03\u7528\u5b83\u65f6\u5e72\u4e86\u4ec0\u4e48\u3002"),(0,l.kt)("h3",{id:"\u6587\u4ef6\u7c7b\u578b\u811a\u672c"},"\u6587\u4ef6\u7c7b\u578b\u811a\u672c"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u57fa\u4e8e\u6587\u4ef6\u5185\u5bb9\u68c0\u6d4b\u6587\u4ef6\u7c7b\u578b\u3002"),(0,l.kt)("p",null,'\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u65e0\u6269\u5c55\u540d\u7684\u6587\u4ef6\u7684\u96c6\u5408\u3002\u8fd9\u4e9b\u6587\u4ef6\u552f\u4e00\u76f8\u540c\u7684\u5730\u65b9\u662f\uff0c\u7b2c\u4e00\u884c\u90fd\u662f\u4ee5 "donutify" \u5f00\u5934\u3002\u60a8\u73b0\u5728\u60f3\u7ed9\u8fd9\u4e9b\u6587\u4ef6\u6307\u6d3e\u4e00\u4e2a ',(0,l.kt)("inlineCode",{parentName:"p"},"donut")," \u7684\u6587\u4ef6\u7c7b\u578b\u3002\u521b\u5efa\u65b0\u6587\u4ef6\uff0c\u8d77\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"sugardonut"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"glazeddonut"),", \u8fd8\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"frieddonut"),"\uff08\u6ca1\u6709\u6269\u5c55\u540d\uff09\u3002\u5728\u6bcf\u4e2a\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e0b\u5217\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"donutify\n")),(0,l.kt)("p",null,"\u5f53\u60a8\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"sugardonut"),"\u4e2d\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?"),"\uff0cVim\u65e0\u6cd5\u77e5\u9053\u5e94\u8be5\u7ed9\u8fd9\u4e2a\u6587\u4ef6\u6307\u6d3e\u4ec0\u4e48\u6587\u4ef6\u7c7b\u578b\uff0c\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype="),"\u3002"),(0,l.kt)("p",null,"\u5728runtime\u6839\u76ee\u5f55\uff0c\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts.vim")," \u6587\u4ef6(",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/scripts.vim"),")\uff0c\u5728\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if did_filetype()\n  finish\nendif\n\nif getline(1) =~ '^\\\\<donutify\\\\>'\n  setfiletype donut\nendif\n")),(0,l.kt)("p",null,"\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"getline(1)"),' \u8fd4\u56de\u6587\u4ef6\u7b2c\u4e00\u884c\u7684\u5185\u5bb9\u3002\u5b83\u68c0\u67e5\u7b2c\u4e00\u884c\u662f\u5426\u4ee5 "donutify" \u5f00\u5934\u3002\u51fd\u6570 ',(0,l.kt)("inlineCode",{parentName:"p"},"did_filetype()")," \u662fVim\u7684\u5185\u7f6e\u51fd\u6570\uff0c\u5f53\u4e00\u4e2a\u4e0e\u6587\u4ef6\u7c7b\u578b\u76f8\u5173\u7684\u4e8b\u4ef6\u53d1\u751f\u81f3\u5c11\u4e00\u6b21\u65f6\uff0c\u5b83\u8fd4\u56de\u771f\u3002\u5b83\u7528\u6765\u505a\u5b88\u536b\uff0c\u9632\u6b62\u6587\u4ef6\u7c7b\u578b\u4e8b\u4ef6\u53cd\u590d\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u6253\u5f00\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"sugardonut")," \u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?"),"\uff0cVim\u73b0\u5728\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"filetype=donut"),"\u3002\u5982\u679c\u60a8\u6253\u5f00\u53e6\u5916\u4e00\u4e2adonut\u6587\u4ef6 (",(0,l.kt)("inlineCode",{parentName:"p"},"glazeddonut")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"frieddonut"),")\uff0cVim\u540c\u6837\u4f1a\u5c06\u5b83\u4eec\u7684\u6587\u4ef6\u7c7b\u578b\u5b9a\u4e49\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"donut")," \u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"scripts.vim")," \u4ec5\u5f53Vim\u6253\u5f00\u4e00\u4e2a\u672a\u77e5\u6587\u4ef6\u7c7b\u578b\u7684\u6587\u4ef6\u65f6\u624d\u4f1a\u8fd0\u884c\u3002\u5982\u679cVim\u6253\u5f00\u4e00\u4e2a\u5df2\u77e5\u6587\u4ef6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"scripts.vim")," \u5c06\u4e0d\u4f1a\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u6587\u4ef6\u7c7b\u578b\u63d2\u4ef6"},"\u6587\u4ef6\u7c7b\u578b\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8ba9Vim\u4ec5\u5f53\u60a8\u6253\u5f00\u4e00\u4e2a chocodonut \u6587\u4ef6\u65f6\u624d\u8fd0\u884c chocodonut \u76f8\u5173\u7684\u7279\u6b8a\u811a\u672c\uff0c\u800c\u5f53\u60a8\u6253\u5f00\u7684\u662f plaindonut \u6587\u4ef6\u65f6\uff0cVim\u5c31\u4e0d\u8fd0\u884c\u8fd9\u4e9b\u811a\u672c\u3002\u80fd\u5426\u505a\u5230\u5462\uff1f"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\u7c7b\u578b\u63d2\u4ef6runtime\u8def\u5f84(",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftplugin/"),")\u6765\u5b8c\u6210\u8fd9\u4e2a\u529f\u80fd\u3002Vim\u4f1a\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u67e5\u627e\u4e00\u4e2a\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e0e\u60a8\u6253\u5f00\u7684\u6587\u4ef6\u7c7b\u578b\u4e00\u6837\u3002\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u8d77\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"chocodonut.vim")," (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftplugin/chocodonut.vim"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "Calling from chocodonut ftplugin"\n')),(0,l.kt)("p",null,"\u521b\u5efa\u53e6\u4e00\u4e2a ftplugin \u6587\u4ef6\uff0c\u8d77\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"plaindonut.vim")," (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftplugin/plaindonut.vim"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "Calling from plaindonut ftplugin"\n')),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6bcf\u6b21\u60a8\u6253\u5f00\u4e00\u4e2a chocodonut \u7c7b\u578b\u7684\u6587\u4ef6\u65f6\uff0cVim\u4f1a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftplugin/chocodonut.vim"),"\u4e2d\u7684\u811a\u672c\u3002\u6bcf\u6b21\u60a8\u6253\u5f00 plaindonut \u7c7b\u578b\u7684\u6587\u4ef6\u65f6\uff0cVim\u4f1a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/ftplugin/plaindonut.vim")," \u4e2d\u7684\u811a\u672c\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u8b66\u544a\uff1a\u6bcf\u5f53\u4e00\u4e2abuffer\u7684\u6587\u4ef6\u7c7b\u578b\u88ab\u8bbe\u7f6e\u65f6(\u6bd4\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"set filetype=chocodonut"),")\uff0c\u4e0a\u8ff0\u811a\u672c\u5c31\u4f1a\u8fd0\u884c\u4e00\u6b21\u3002\u5982\u679c\u60a8\u6253\u5f003\u4e2a\u4e0d\u540c\u7684 chocodonut \u6587\u4ef6\uff0c\u8be5\u811a\u672c\u5c06\u8fd0\u884c ",(0,l.kt)("em",{parentName:"p"},"\u603b\u5171")," 3\u6b21\u3002"),(0,l.kt)("h2",{id:"\u7f29\u8fdb\u6587\u4ef6"},"\u7f29\u8fdb\u6587\u4ef6"),(0,l.kt)("p",null,"Vim\u6709\u4e00\u4e2a \u7f29\u8fdbruntime\u8def\u5f84\uff0c\u5176\u5de5\u4f5c\u65b9\u5f0f\u4e0eftplugin\u7c7b\u4f3c\uff0cVim\u4e5f\u4f1a\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u67e5\u627e\u4e00\u4e2a\u4e0e\u6253\u5f00\u7684\u6587\u4ef6\u7c7b\u578b\u540d\u5b57\u4e00\u6837\u7684\u6587\u4ef6\u3002\u7f29\u8fdbruntime\u8def\u5f84\u7684\u76ee\u7684\u662f\u5b58\u50a8\u7f29\u8fdb\u76f8\u5173\u7684\u4ee3\u7801\u3002\u5982\u679c\u60a8\u6709\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/indent/chocodonut.vim"),"\uff0c\u5b83\u4ec5\u5f53\u60a8\u6253\u5f00\u4e00\u4e2a chocodonut \u7c7b\u578b\u7684\u6587\u4ef6\u65f6\u6267\u884c\u3002\u60a8\u53ef\u4ee5\u5c06 chocodonut \u6587\u4ef6\u4e2d\u7f29\u8fdb\u76f8\u5173\u7684\u4ee3\u7801\u5b58\u50a8\u5728\u8fd9\u91cc\u3002"),(0,l.kt)("h2",{id:"\u989c\u8272"},"\u989c\u8272"),(0,l.kt)("p",null,"Vim \u6709\u4e00\u4e2a\u989c\u8272runtime\u8def\u5f84 (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/colors/"),") \uff0c\u7528\u6765\u5b58\u50a8\u989c\u8272\u4e3b\u9898\u3002\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u7684\u4efb\u4f55\u6587\u4ef6\u90fd\u4f1a\u5728\u547d\u4ee4\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},":color")," \u4e2d\u663e\u793a\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/colors/beautifulprettycolors.vim"),"\uff0c\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":color")," \u7136\u540e\u6309 Tab\uff0c\u60a8\u5c06\u4f1a\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"beautifulprettycolors")," \u51fa\u73b0\u5728\u989c\u8272\u9009\u9879\u4e2d\u3002  \u5982\u679c\u60a8\u60f3\u6dfb\u52a0\u81ea\u5df1\u7684\u989c\u8272\u4e3b\u9898\uff0c\u5c31\u653e\u5728\u8fd9\u4e2a\u5730\u65b9\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u770b\u5176\u4ed6\u4eba\u505a\u7684\u989c\u8272\u4e3b\u9898\uff0c\u6709\u4e00\u4e2a\u597d\u5730\u65b9\u503c\u5f97\u63a8\u8350\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://vimcolors.com/"},"vimcolors"),"\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u9ad8\u4eae"},"\u8bed\u6cd5\u9ad8\u4eae"),(0,l.kt)("p",null,"Vim\u6709\u4e00\u4e2a\u8bed\u6cd5runtime\u8def\u5f84 (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/syntax/"),")\uff0c\u7528\u6765\u5b9a\u4e49\u8bed\u6cd5\u9ad8\u4eae\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.chocodonut"),"\uff0c\u5728\u6587\u4ef6\u91cc\u9762\u6709\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'(donut "tasty")\n(donut "savory")\n')),(0,l.kt)("p",null,'\u867d\u7136Vim\u73b0\u5728\u77e5\u9053\u4e86\u6b63\u786e\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u4f46\u6240\u6709\u7684\u6587\u672c\u90fd\u662f\u76f8\u540c\u7684\u989c\u8272\u3002\u8ba9\u6211\u4eec\u6dfb\u52a0\u8bed\u6cd5\u9ad8\u4eae\u89c4\u5219\uff0c\u4f7f "donut" \u5173\u952e\u8bcd\u9ad8\u4eae\u663e\u793a\u3002\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 chocodonut \u8bed\u6cd5\u6587\u4ef6 ',(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/syntax/chocodonut.vim"),"\uff0c\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"syntax keyword donutKeyword donut\n\nhighlight link donutKeyword Keyword\n")),(0,l.kt)("p",null,"\u73b0\u5728\u91cd\u65b0\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.chocodonut")," \u6587\u4ef6\uff0c\u5173\u952e\u8bcd ",(0,l.kt)("inlineCode",{parentName:"p"},"donut")," \u5df2\u7ecf\u9ad8\u4eae\u663e\u793a\u4e86\u3002"),(0,l.kt)("p",null,"\u672c\u7ae0\u4e0d\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u8bed\u6cd5\u9ad8\u4eae\u3002\u5b83\u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u4e3b\u9898\u3002\u5982\u679c\u60a8\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h syntax.txt"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sheerun/vim-polyglot"},"vim-polyglot")," \u63d2\u4ef6\u975e\u5e38\u7684\u68d2\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f88\u591a\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u8bed\u6cd5\u9ad8\u4eae\u3002"),(0,l.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5199\u4e86\u4e00\u4e2a\u63d2\u4ef6\uff0c\u60a8\u8fd8\u5f97\u521b\u5efa\u4e00\u4e2a\u60a8\u81ea\u5df1\u7684\u6587\u6863\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u6587\u6863runtime\u8def\u5f84\u5b8c\u6210\u8fd9\u4e2a\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4e3a chocodonut \u548c plaindonut \u5173\u952e\u5b57\u521b\u5efa\u4e00\u4e2a\u57fa\u672c\u6587\u6863\u3002\u521b\u5efa\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"donut.txt")," (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/doc/donut.txt"),")\u3002\u5728\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*chocodonut* Delicious chocolate donut\n\n*plaindonut* No choco goodness but still delicious nonetheless\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8bd5\u7740\u641c\u7d22 ",(0,l.kt)("inlineCode",{parentName:"p"},"chocodonut")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"plaindonut")," (",(0,l.kt)("inlineCode",{parentName:"p"},":h chocodonut")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},":h plaindonut"),")\uff0c\u60a8\u627e\u4e0d\u5230\u4efb\u4f55\u4e1c\u897f\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":helptags"),"\u6765\u521b\u5efa\u65b0\u7684\u5e2e\u52a9\u5165\u53e3\u3002\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":helptags ~/.vim/doc/")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":h chocodonut")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},":h plaindonut"),'\uff0c\u60a8\u5c06\u627e\u5230\u4e0a\u9762\u90a3\u4e9b\u65b0\u7684\u5e2e\u52a9\u5165\u53e3\u3002\u6ce8\u610f\uff0c\u73b0\u5728\u6587\u4ef6\u662f\u53ea\u8bfb\u7684\uff0c\u800c\u4e14\u7c7b\u578b\u662f "help"\u3002'),(0,l.kt)("h2",{id:"\u5ef6\u65f6\u52a0\u8f7d\u811a\u672c"},"\u5ef6\u65f6\u52a0\u8f7d\u811a\u672c"),(0,l.kt)("p",null,"\u5230\u73b0\u5728\uff0c\u672c\u7ae0\u60a8\u5b66\u5230\u7684\u6240\u6709runtime\u8def\u5f84\u90fd\u662f\u81ea\u52a8\u8fd0\u884c\u7684\u3002\u5982\u679c\u60a8\u60f3\u624b\u52a8\u52a0\u8f7d\u4e00\u4e2a\u811a\u672c\uff0c\u53ef\u4f7f\u7528 autoload runtime\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u540d\u4e3a autoload(",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/autoload/"),")\u3002\u5728\u76ee\u5f55\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\uff0c\u8d77\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tasty.vim")," (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/autoload/tasty.vim"),")\u3002\u5728\u6587\u4ef6\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "tasty.vim global"\n\nfunction tasty#donut()\n  echo "tasty#donut"\nendfunction\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u51fd\u6570\u540d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"tasty#donut")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"donut()"),"\u3002\u8981\u60f3\u4f7f\u7528autoload\u529f\u80fd\uff0c\u4e95\u53f7(",(0,l.kt)("inlineCode",{parentName:"p"},"#"),")\u662f\u5fc5\u987b\u7684\u3002\u5728\u4f7f\u7528autoload\u529f\u80fd\u65f6\uff0c\u51fd\u6570\u7684\u547d\u540d\u60ef\u4f8b\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function fileName#functionName()\n  ...\nendfunction\n")),(0,l.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6587\u4ef6\u540d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"tasty.vim"),"\uff0c\u800c\u51fd\u6570\u540d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"donut"),"\u3002"),(0,l.kt)("p",null,"\u8981\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u547d\u4ee4\u3002\u8ba9\u6211\u4eeccall\u8fd9\u4e2a\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},":call tasty#donut()"),"\u3002"),(0,l.kt)("p",null,"\u60a8\u7b2c\u4e00\u6b21\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u65f6\uff0c\u60a8\u5e94\u5f53\u4f1a ",(0,l.kt)("em",{parentName:"p"},"\u540c\u65f6"),' \u770b\u5230\u4e24\u6761\u4fe1\u606f ("tasty.vim global" \u548c "tasty#donut") \u3002\u540e\u9762\u518d\u8c03\u7528 ',(0,l.kt)("inlineCode",{parentName:"p"},"tasty#donut"),' \u51fd\u6570\uff0c\u5c06\u53ea\u4f1a\u663e\u793a "testy#donut"\u3002'),(0,l.kt)("p",null,"\u5f53\u60a8\u5728Vim\u4e2d\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u4e0d\u50cf\u524d\u9762\u8bf4\u7684runtime\u8def\u5f84\uff0cautoload\u811a\u672c\u4e0d\u4f1a\u88ab\u81ea\u52a8\u52a0\u8f7d\u3002\u4ec5\u5f53\u60a8\u663e\u5f0f\u5730\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"tasty#donut()"),"\uff0cVim\u624d\u4f1a\u67e5\u627e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"tasty.vim"),"\uff0c\u7136\u540e\u52a0\u8f7d\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u5305\u62ec\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"tasty#donut()"),"\u3002\u6709\u4e9b\u51fd\u6570\u4f1a\u5360\u7528\u5927\u91cf\u8d44\u6e90\uff0c\u4f46\u6211\u4eec\u53c8\u4e0d\u5e38\u7528\uff0c\u8fd9\u65f6\u5019 Autoload runtime\u8def\u5f84\u5c31\u662f\u6700\u4f73\u7684\u89e3\u51b3\u65b9\u6848\u3002 "),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728autoload\u76ee\u5f55\u4efb\u610f\u6dfb\u52a0\u5d4c\u5957\u7684\u76ee\u5f55\u3002\u5982\u679c\u60a8\u6709\u4e00\u4e2aruntime\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/autoload/one/two/three/tasty.vim"),"\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":call one#two#three#tasty#donut()"),"\u6765\u8c03\u7528\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"after\u811a\u672c"},"After\u811a\u672c"),(0,l.kt)("p",null,"Vim\u6709\u4e00\u4e2a after runtime\u8def\u5f84 (",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/after/"),") \uff0c\u5b83\u7684\u7ed3\u6784\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/"),"\u7684\u955c\u50cf\u3002\u5728\u6b64\u76ee\u5f55\u4e2d\u7684\u4efb\u4f55\u811a\u672c\u90fd\u4f1a\u6700\u540e\u6267\u884c\uff0c\u6240\u4ee5\u5f00\u53d1\u8005\u901a\u5e38\u4f7f\u7528\u8fd9\u4e2a\u8def\u5f84\u6765\u91cd\u8f7d\u811a\u672c\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u60f3\u91cd\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin/chocolate.vim")," \u4e2d\u7684\u811a\u672c\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/after/plugin/chocolate.vim"),"\u6765\u653e\u7f6e\u91cd\u8f7d\u811a\u672c\u3002Vim\u5c06\u4f1a\u5148\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/plugin/chocolate.vim"),"\uff0c ",(0,l.kt)("em",{parentName:"p"},"\u7136\u540e\u8fd0\u884c")," ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/after/plugin/chocolate.vim")),(0,l.kt)("h2",{id:"vimruntime"},"$VIMRUNTIME"),(0,l.kt)("p",null,"Vim\u6709\u4e00\u4e2a\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME")," \u7528\u6765\u52a0\u8f7d\u9ed8\u8ba4\u811a\u672c\u548c\u652f\u6301\u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":e $VIMRUNTIME"),"\u67e5\u770b\u3002"),(0,l.kt)("p",null,"\u5b83\u7684\u7ed3\u6784\u5e94\u8be5\u770b\u8d77\u6765\u5f88\u719f\u6089\u3002\u5b83\u5305\u542b\u7684\u5f88\u591aruntime\u8def\u5f84\u90fd\u662f\u6211\u4eec\u672c\u7ae0\u524d\u9762\u5b66\u8fc7\u7684\u3002"),(0,l.kt)("p",null,"\u56de\u60f3\u7b2c22\u7ae0\uff0c\u5f53\u60a8\u6253\u5f00Vim\u65f6\uff0c\u5b83\u4f1a\u57286\u4e2a\u4e0d\u540c\u7684\u4f4d\u7f6e\u67e5\u627evimrc\u6587\u4ef6\u3002\u5f53\u65f6\u6211\u8bf4\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME/default.vim"),"\uff0c\u5982\u679cVim\u5728\u524d5\u4e2a\u4f4d\u7f6e\u67e5\u627e\u7528\u6237vimrc\u6587\u4ef6\u5931\u8d25\uff0c\u5c31\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"default.vim")," \u4f5c\u4e3avimrc\u3002"),(0,l.kt)("p",null,"\u4e0d\u77e5\u60a8\u662f\u5426\u5c1d\u8bd5\u8fc7\uff0c\u8fd0\u884cVim\u662f\u4e0d\u52a0\u8f7d\u6bd4\u5982vim-polyglot\u4e4b\u7c7b\u7684\u8bed\u6cd5\u63d2\u4ef6\uff0c\u4f46\u60a8\u7684\u6587\u4ef6\u4f9d\u7136\u6709\u8bed\u6cd5\u9ad8\u4eae?\u8fd9\u662f\u56e0\u4e3a\u5f53Vim\u5728runtime\u8def\u5f84\u67e5\u627e\u8bed\u6cd5\u6587\u4ef6\u5931\u8d25\u65f6\uff0c\u4f1a\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME")," \u7684\u8bed\u6cd5\u76ee\u5f55\u4e2d\u67e5\u627e\u8bed\u6cd5\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h $VIMRUNTIME"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"runtimepath\u9009\u9879"},"Runtimepath\u9009\u9879"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set runtimepath?"),"\uff0c\u53ef\u4ee5\u67e5\u770b\u60a8\u7684runtime\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 Vim-Plug \u6216\u5176\u4ed6\u6d41\u884c\u7684\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u5b83\u5e94\u8be5\u4f1a\u663e\u793a\u4e00\u4e2a\u76ee\u5f55\u5217\u8868\u3002\u6bd4\u5982\uff0c\u6211\u7684\u663e\u793a\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"runtimepath=~/.vim,~/.vim/plugged/vim-signify,~/.vim/plugged/base16-vim,~/.vim/plugged/fzf.vim,~/.vim/plugged/fzf,~/.vim/plugged/vim-gutentags,~/.vim/plugged/tcomment_vim,~/.vim/plugged/emmet-vim,~/.vim/plugged/vim-fugitive,~/.vim/plugged/vim-sensible,~/.vim/plugged/lightline.vim, ...\n")),(0,l.kt)("p",null,"\u63d2\u4ef6\u7ba1\u7406\u5668\u505a\u4e86\u4e00\u4ef6\u4e8b\uff0c\u5c31\u662f\u5c06\u6bcf\u4e2a\u63d2\u4ef6\u6dfb\u52a0\u5230runtime\u8def\u5f84\u4e2d\u3002\u6bcf\u4e2aruntime\u8def\u5f84\u90fd\u6709\u4e00\u4e2a\u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/"),"\u7684\u76ee\u5f55\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/box/of/donuts/"),"\uff0c\u7136\u540e\u60a8\u60f3\u5c06\u8fd9\u4e2a\u76ee\u5f55\u6dfb\u52a0\u5230\u60a8\u7684runtime\u8def\u5f84\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728vimrc\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set rtp+=$HOME/box/of/donuts/\n")),(0,l.kt)("p",null,"\u5982\u679c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/box/of/donuts/")," \u91cc\u9762\uff0c\u60a8\u6709\u4e00\u4e2aplugin\u76ee\u5f55 (",(0,l.kt)("inlineCode",{parentName:"p"},"~/box/of/donuts/plugin/hello.vim"),") \u4ee5\u53caftplugin\u76ee\u5f55 (",(0,l.kt)("inlineCode",{parentName:"p"},"~/box/of/donuts/ftplugin/chocodonut.vim"),")\uff0c\u5f53\u60a8\u6253\u5f00Vim\u65f6\uff0cVim\u5c06\u4f1a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin/hello.vim")," \u4e2d\u6240\u6709\u811a\u672c\u3002\u540c\u6837\uff0c\u5f53\u60a8\u6253\u5f00\u4e00\u4e2a chocodonut \u6587\u4ef6\u65f6\uff0cVim \u5c06\u4f1a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ftplugin/chocodonut.vim"),"\u3002"),(0,l.kt)("p",null,"\u81ea\u5df1\u8bd5\u7740\u505a\u4e00\u4e0b\uff1a\u521b\u5efa\u4e00\u4e2a\u4efb\u610f\u76ee\u5f55\uff0c\u7136\u540e\u5c06\u5b83\u6dfb\u52a0\u5230\u60a8\u7684 runtimepath\u4e2d\u3002\u6dfb\u52a0\u4e00\u4e9b\u6211\u4eec\u672c\u7ae0\u5b66\u5230\u7684runtime\u8def\u5f84\u3002\u786e\u4fdd\u5b83\u4eec\u6309\u9884\u671f\u5de5\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60runtime"},"\u806a\u660e\u5730\u5b66\u4e60Runtime"),(0,l.kt)("p",null,"\u82b1\u70b9\u65f6\u95f4\u9605\u8bfb\u672c\u7ae0\uff0c\u8fd8\u6709\u8ba4\u771f\u7814\u7a76\u4e00\u4e0b\u8fd9\u4e9bruntime\u8def\u5f84\u3002\u770b\u4e00\u4e0b\u771f\u5b9e\u73af\u5883\u4e0bruntime\u8def\u5f84\u662f\u5982\u4f55\u4f7f\u7528\u7684\u3002\u6d4f\u89c8\u4e00\u4e0b\u60a8\u6700\u559c\u6b22\u7684Vim\u63d2\u4ef6\u4ed3\u5e93\uff0c\u4ed4\u7ec6\u7814\u7a76\u4e00\u4e0b\u5b83\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u7406\u89e3\u5b83\u4eec\u4e2d\u7684\u7edd\u5927\u90e8\u5206\u3002\u8bd5\u7740\u9886\u4f1a\u91cd\u70b9\u5e76\u8ddf\u7740\u505a\u3002\u73b0\u5728\u60a8\u5df2\u7ecf\u7406\u89e3\u4e86Vim\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u60a8\u53ef\u4ee5\u51c6\u5907\u5b66\u4e60Vimscript\u4e86\u3002"))}r.isMDXComponent=!0}}]);