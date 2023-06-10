"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9921],{82362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var p=t(87462),l=(t(67294),t(3905));t(16758);const a={title:"\u53ef\u89c6\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},i="\u7b2c11\u7ae0 \u53ef\u89c6\u6a21\u5f0f",r={unversionedId:"others/Vim/ch11_visual_mode",id:"others/Vim/ch11_visual_mode",title:"\u53ef\u89c6\u6a21\u5f0f",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch11_visual_mode.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch11_visual_mode",permalink:"/docs/others/Vim/ch11_visual_mode",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch11_visual_mode.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{title:"\u53ef\u89c6\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u64a4\u9500",permalink:"/docs/others/Vim/ch10_undo"},next:{title:"\u641c\u7d22\u548c\u66ff\u6362",permalink:"/docs/others/Vim/ch12_search_and_substitute"}},k={},d=[{value:"\u4e09\u79cd\u53ef\u89c6\u6a21\u5f0f",id:"\u4e09\u79cd\u53ef\u89c6\u6a21\u5f0f",level:2},{value:"\u53ef\u89c6\u6a21\u5f0f\u5bfc\u822a",id:"\u53ef\u89c6\u6a21\u5f0f\u5bfc\u822a",level:2},{value:"\u53ef\u89c6\u6a21\u5f0f\u8bed\u6cd5",id:"\u53ef\u89c6\u6a21\u5f0f\u8bed\u6cd5",level:2},{value:"\u53ef\u89c6\u6a21\u5f0f\u548cEx\u547d\u4ee4",id:"\u53ef\u89c6\u6a21\u5f0f\u548cex\u547d\u4ee4",level:2},{value:"\u8de8\u591a\u884c\u7f16\u8f91",id:"\u8de8\u591a\u884c\u7f16\u8f91",level:2},{value:"\u9012\u589e\u6570\u5b57",id:"\u9012\u589e\u6570\u5b57",level:2},{value:"\u9009\u62e9\u6700\u540e\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u533a\u57df",id:"\u9009\u62e9\u6700\u540e\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u533a\u57df",level:2},{value:"\u4ece\u63d2\u5165\u6a21\u5f0f\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f",id:"\u4ece\u63d2\u5165\u6a21\u5f0f\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f",level:2},{value:"\u9009\u62e9\u6a21\u5f0f",id:"\u9009\u62e9\u6a21\u5f0f",level:2},{value:"\u4ee5\u806a\u660e\u7684\u65b9\u5f0f\u5b66\u4e60\u53ef\u89c6\u6a21\u5f0f",id:"\u4ee5\u806a\u660e\u7684\u65b9\u5f0f\u5b66\u4e60\u53ef\u89c6\u6a21\u5f0f",level:2}],o={toc:d};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,p.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c11\u7ae0-\u53ef\u89c6\u6a21\u5f0f"},"\u7b2c11\u7ae0 \u53ef\u89c6\u6a21\u5f0f"),(0,l.kt)("p",null,"\u9ad8\u4eae\u663e\u793a\u6587\u672c\u5757\u5e76\u5bf9\u5176\u8fdb\u884c\u66f4\u6539\uff0c\u662f\u5f88\u591a\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u7684\u5e38\u89c1\u529f\u80fd\u3002 Vim\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53ef\u89c6\u6a21\u5f0f\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u53ef\u89c6\u6a21\u5f0f\u6765\u6709\u6548\u5730\u5904\u7406\u6587\u672c\u5757\u3002"),(0,l.kt)("h2",{id:"\u4e09\u79cd\u53ef\u89c6\u6a21\u5f0f"},"\u4e09\u79cd\u53ef\u89c6\u6a21\u5f0f"),(0,l.kt)("p",null,"Vim\u6709\u4e09\u79cd\u53ef\u89c6\u6a21\u5f0f\uff0c\u5206\u522b\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"v         \u9010\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\nV         \u9010\u884c\u53ef\u89c6\u6a21\u5f0f\nCtrl-v    \u9010\u5757\u53ef\u89c6\u6a21\u5f0f\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4e0b\u5217\u6587\u5b57\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\nthree\n")),(0,l.kt)("p",null,"\u9010\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\u7528\u4e8e\u9009\u62e9\u5355\u4e2a\u5b57\u7b26\u3002\u5728\u7b2c\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e0a\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\u3002\u7136\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"j"),'\u8df3\u8f6c\u81f3\u4e0b\u4e00\u884c\u3002\u5b83\u9ad8\u4eae\u663e\u793a\u4ece"one"\u5230\u5149\u6807\u4f4d\u7f6e\u7684\u6240\u6709\u6587\u672c\u3002\u73b0\u5728\uff0c\u5982\u679c\u60a8\u6309',(0,l.kt)("inlineCode",{parentName:"p"},"gU"),"\uff0cVim\u5c06\u9ad8\u4eae\u663e\u793a\u7684\u5b57\u7b26\u8f6c\u4e3a\u5927\u5199\u3002"),(0,l.kt)("p",null,"\u9010\u884c\u53ef\u89c6\u6a21\u5f0f\u9002\u7528\u4e8e\u6574\u884c\u3002\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"V"),"\u5e76\u89c2\u770bVim\u9009\u62e9\u5149\u6807\u7684\u6240\u5728\u884c\u3002\u5c31\u50cf\u9010\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\u4e00\u6837\uff0c\u5982\u679c\u60a8\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"gU"),"\uff0cVim\u5c06\u9ad8\u4eae\u663e\u793a\u7684\u5b57\u7b26\u8f6c\u4e3a\u5927\u5199\u3002"),(0,l.kt)("p",null,"\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\u9002\u7528\u4e8e\u884c\u548c\u5217\u3002\u4e0e\u5176\u4ed6\u4e24\u79cd\u6a21\u5f0f\u76f8\u6bd4\uff0c\u5b83\u4e3a\u60a8\u63d0\u4f9b\u4e86\u66f4\u5927\u7684\u79fb\u52a8\u81ea\u7531\u5ea6\u3002\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V"),"\uff0cVim\u50cf\u9010\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\u4e00\u6837\u9ad8\u4eae\u663e\u793a\u5149\u6807\u4e0b\u7684\u5b57\u7b26\uff0c\u4f46\u5411\u4e0b\u79fb\u52a8\u65f6\uff0c\u9664\u975e\u5149\u6807\u5df2\u7ecf\u5728\u884c\u5c3e\uff0c\u5426\u5219\u4e0d\u4f1a\u9ad8\u4eae\u663e\u793a\u5149\u6807\u4e0a\u65b9\u7684\u6574\u884c\uff0c\u5b83\u8df3\u8f6c\u81f3\u4e0b\u4e00\u884c\u65f6\u9ad8\u4eae\u663e\u793a\u5c3d\u53ef\u80fd\u5c11\u7684\u5b57\u7b26\u3002\u5c1d\u8bd5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"h/j/k/l"),"\u79fb\u52a8\uff0c\u5e76\u89c2\u5bdf\u5149\u6807\u7684\u79fb\u52a8\u3002"),(0,l.kt)("p",null,"\u5728Vim\u7a97\u53e3\u7684\u5de6\u4e0b\u65b9\uff0c\u60a8\u4f1a\u770b\u5230\u663e\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"-- VISUAL --"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-- VISUAL LINE --"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"-- VISUAL BLOCK --"),"\u4ee5\u63d0\u793a\u60a8\u6240\u5904\u7684\u53ef\u89c6\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u5f53\u60a8\u5904\u4e8e\u53ef\u89c6\u6a21\u5f0f\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"V"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V"),"\u952e\u5207\u6362\u5230\u53e6\u4e00\u79cd\u53ef\u89c6\u6a21\u5f0f\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u5904\u4e8e\u9010\u884c\u53ef\u89c6\u6a21\u5f0f\uff0c\u5e76\u4e14\u60f3\u8981\u5207\u6362\u4e3a\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\uff0c\u8bf7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V"),"\u3002\u8bd5\u8bd5\u5427\uff01"),(0,l.kt)("p",null,"\u6709\u4e09\u79cd\u9000\u51fa\u53ef\u89c6\u6a21\u5f0f\u7684\u65b9\u6cd5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"esc"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-C"),"\u548c\u4e0e\u5f53\u524d\u53ef\u89c6\u6a21\u5f0f\u76f8\u540c\u7684\u952e\u3002\u540e\u8005\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u60a8\u5f53\u524d\u5904\u4e8e\u9010\u884c\u53ef\u89c6\u6a21\u5f0f(",(0,l.kt)("inlineCode",{parentName:"p"},"V"),")\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u518d\u6b21\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"V"),"\u9000\u51fa\u5b83\u3002\u5982\u679c\u60a8\u5904\u4e8e\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\u9000\u51fa\u5b83\u3002\u5982\u679c\u60a8\u5904\u4e8e\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\uff0c\u8bf7\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V"),"\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u8fd8\u6709\u53e6\u4e00\u79cd\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gv    \u8f6c\u5230\u4e0a\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\n")),(0,l.kt)("p",null,"\u5b83\u5c06\u5728\u4e0e\u4e0a\u6b21\u76f8\u540c\u7684\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u5757\u4e0a\u542f\u52a8\u76f8\u540c\u7684\u53ef\u89c6\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u53ef\u89c6\u6a21\u5f0f\u5bfc\u822a"},"\u53ef\u89c6\u6a21\u5f0f\u5bfc\u822a"),(0,l.kt)("p",null,"\u5728\u53ef\u89c6\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Vim\u52a8\u4f5c(motion)\u6269\u5c55\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u5757\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4f7f\u7528\u4e4b\u524d\u4f7f\u7528\u7684\u76f8\u540c\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\nthree\n")),(0,l.kt)("p",null,'\u8fd9\u6b21\u8ba9\u6211\u4eec\u4ece"two"\u884c\u5f00\u59cb\u3002\u6309',(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\u8fdb\u5165\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f(\u8fd9\u91cc\u7684\u65b9\u62ec\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"\u8868\u793a\u9ad8\u4eae\u663e\u793a\u7684\u5b57\u7b26)\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n[t]wo\nthree\n")),(0,l.kt)("p",null,"\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"j"),'\uff0cVim\u5c06\u9ad8\u4eae\u663e\u793a\u4ece"two"\u884c\u5230"three"\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u6240\u6709\u6587\u672c\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n[two\nt]hree\n")),(0,l.kt)("p",null,'\u5047\u8bbe\u60a8\u521a\u521a\u610f\u8bc6\u5230\u8fd8\u9700\u8981\u9ad8\u4eae\u663e\u793a"one"\u884c\uff0c\u56e0\u6b64\u6309',(0,l.kt)("inlineCode",{parentName:"p"},"k"),'\u3002\u4ee4\u60a8\u6cae\u4e27\u7684\u662f\uff0c\u5b83\u73b0\u5728\u6392\u9664\u4e86"three"\u9ad8\u4eae\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n[t]wo\nthree\n")),(0,l.kt)("p",null,"\u6709\u6ca1\u6709\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u81ea\u7531\u5730\u6269\u5c55\u89c6\u89c9\u9009\u62e9\u8303\u56f4\uff0c\u4ee5\u5411\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u65b9\u5411\u53d1\u5c55\uff1f"),(0,l.kt)("p",null,'\u7b54\u6848\u662f\u80af\u5b9a\u7684\u3002\u8ba9\u6211\u4eec\u5148\u6062\u590d\u5149\u6807\u5230\u9ad8\u4eae\u663e\u793a"two"\u548c"three"\u884c\u7684\u4f4d\u7f6e\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n[two\nt]hree    <-- \u5149\u6807\n")),(0,l.kt)("p",null,'\u9ad8\u4eae\u533a\u57df\u8ddf\u968f\u5149\u6807\u79fb\u52a8\u3002\u5982\u679c\u8981\u5c06\u5176\u5411\u4e0a\u6269\u5c55\u5230\u884c"one"\uff0c\u5219\u9700\u8981\u5c06\u5149\u6807\u79fb\u52a8\u5230"two"\uff0c\u73b0\u5728\u60a8\u7684\u5149\u6807\u5728"three"\u884c\u4e0a\u3002\u8fd9\u65f6\u53ef\u4ee5\u7528',(0,l.kt)("inlineCode",{parentName:"p"},"o"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"O"),"\u5207\u6362\u5149\u6807\u4f4d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n[two     <-- \u5149\u6807\nt]hree\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5f53\u60a8\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"\u65f6\uff0c\u5b83\u4e0d\u518d\u7f29\u5c0f\u9009\u62e9\uff0c\u800c\u662f\u5411\u4e0a\u6269\u5c55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[one\ntwo\nt]hree\n")),(0,l.kt)("p",null,"\u5728\u53ef\u89c6\u6a21\u5f0f\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"o"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"O"),"\uff0c\u5149\u6807\u4f1a\u5728\u9ad8\u4eae\u9009\u62e9\u533a\u57df\u7684\u5f00\u5934\u548c\u7ed3\u5c3e\u8df3\u8f6c\uff0c\u4ee5\u4fbf\u4e0e\u60a8\u6269\u5c55\u9ad8\u4eae\u533a\u57df\u3002"),(0,l.kt)("h2",{id:"\u53ef\u89c6\u6a21\u5f0f\u8bed\u6cd5"},"\u53ef\u89c6\u6a21\u5f0f\u8bed\u6cd5"),(0,l.kt)("p",null,"\u53ef\u89c6\u6a21\u5f0f\u4e0e\u666e\u901a\u6a21\u5f0f\u4f7f\u7528\u76f8\u540c\u7684\u64cd\u4f5c\u7b26(operations)\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u6587\u5b57\uff0c\u7136\u540e\u60a8\u60f3\u5728\u53ef\u89c6\u6a21\u5f0f\u4e2d\u5220\u9664\u524d\u4e24\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\nthree\n")),(0,l.kt)("p",null,"\u7528\u9010\u884c\u53ef\u89c6\u6a21\u5f0f(",(0,l.kt)("inlineCode",{parentName:"p"},"V"),')\u9ad8\u4eae\u663e\u793a"one"\u548c"two"\u884c\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[one\ntwo]\nthree\n")),(0,l.kt)("p",null,"\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"d"),"\u952e\u5c06\u5220\u9664\u9009\u62e9\uff0c\u7c7b\u4f3c\u4e8e\u666e\u901a\u6a21\u5f0f\u3002\u8bf7\u6ce8\u610f\uff0c\u4e0e\u666e\u901a\u6a21\u5f0f\u7684\u8bed\u6cd5\u89c4\u5219\u6709\u6240\u4e0d\u540c\uff0c\u52a8\u8bcd+\u540d\u8bcd\u4e0d\u9002\u7528\u53ef\u89c6\u6a21\u5f0f\u3002\u867d\u7136\u5b58\u5728\u76f8\u540c\u7684\u52a8\u8bcd(",(0,l.kt)("inlineCode",{parentName:"p"},"d"),")\uff0c\u4f46\u5728\u53ef\u89c6\u6a21\u5f0f\u4e0b\u6ca1\u6709\u540d\u8bcd\u3002\u53ef\u89c6\u6a21\u5f0f\u4e0b\u7684\u8bed\u6cd5\u89c4\u5219\u662f\u540d\u8bcd+\u52a8\u8bcd(\u53cd\u8fc7\u6765\u4e86)\uff0c\u5176\u4e2d\u540d\u8bcd\u662f\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u3002\u9996\u5148\u9009\u62e9\u6587\u672c\u5757\uff0c\u7136\u540e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u5728\u666e\u901a\u6a21\u5f0f\u4e0b\uff0c\u6709\u4e00\u4e9b\u547d\u4ee4\u4e0d\u9700\u8981\u540d\u8bcd(motion)\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u5220\u9664\u5149\u6807\u4e0b\u65b9\u7684\u5355\u4e2a\u5b57\u7b26\uff0c\u8fd8\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"\u66ff\u6362\u5149\u6807\u4e0b\u65b9\u7684\u5b57\u7b26(",(0,l.kt)("inlineCode",{parentName:"p"},"rx"),"\u5c06\u5f53\u524d\u5149\u6807\u4e0b\u7684\u5b57\u7b26\u66ff\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"x"),")\u3002\u5728\u53ef\u89c6\u6a21\u5f0f\u4e0b\uff0c\u8fd9\u4e9b\u547d\u4ee4\u73b0\u5728\u5c06\u5e94\u7528\u4e8e\u6574\u4e2a\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u5b57\u7b26\u3002\u56de\u5230\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[one\ntwo]\nthree\n")),(0,l.kt)("p",null,"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u4f1a\u5220\u9664\u6240\u6709\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u3002"),(0,l.kt)("p",null,'\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u884c\u4e3a\u5728markdown\u6587\u672c\u4e2d\u5feb\u901f\u521b\u5efa\u6807\u9898\u3002\u5047\u8bbe\u60a8\u9700\u8981\u5feb\u901f\u4e0b\u9762\u7684\u6587\u672c\u8f6c\u6362\u4e3a\u4e00\u7ea7markdown\u6807\u9898("==="):'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chapter One\n")),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"yy"),"\u590d\u5236\u6587\u672c\uff0c\u7136\u540e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"\u7c98\u8d34\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chapter One\nChapter One\n")),(0,l.kt)("p",null,"\u73b0\u5728\u8f6c\u5230\u7b2c\u4e8c\u884c\uff0c\u4ee5\u9010\u884c\u53ef\u89c6\u6a21\u5f0f\u9009\u62e9\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chapter One\n[Chapter One]\n")),(0,l.kt)("p",null,"\u5728markdown\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u6587\u672c\u4e0b\u65b9\u6dfb\u52a0\u4e00\u7cfb\u5217",(0,l.kt)("inlineCode",{parentName:"p"},"="),"\u6765\u521b\u5efa\u6807\u9898\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"r="),"\u6765\u66ff\u6362\u6574\u4e2a\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chapter One\n===========\n")),(0,l.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173\u53ef\u89c6\u6a21\u5f0f\u4e0b\u7684\u8fd0\u7b97\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"p"},":h visual-operators"),"\u3002"),(0,l.kt)("h2",{id:"\u53ef\u89c6\u6a21\u5f0f\u548cex\u547d\u4ee4"},"\u53ef\u89c6\u6a21\u5f0f\u548cEx\u547d\u4ee4"),(0,l.kt)("p",null,'\u60a8\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u5728\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u5757\u4e0a\u5e94\u7528Ex\u547d\u4ee4\u3002\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f,\u5e76\u60f3\u5c06\u524d\u4e24\u884c\u7684"const"\u66ff\u6362\u4e3a"let"\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const one = "one";\nconst two = "two";\nconst three = "three";\n')),(0,l.kt)("p",null,"\u7528 ",(0,l.kt)("em",{parentName:"p"},"\u4efb\u610f")," \u53ef\u89c6\u6a21\u5f0f\u9ad8\u4eae\u663e\u793a\u524d\u4e24\u884c\uff0c\u7136\u540e\u8fd0\u884c\u66ff\u6362\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},":s/const/let/g"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let one = "one";\nlet two = "two";\nconst three = "three";\n')),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u8bf4\u8fc7\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("em",{parentName:"p"},"\u4efb\u4f55")," \u53ef\u89c6\u6a21\u5f0f\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u60a8\u4e0d\u5fc5\u9ad8\u4eae\u663e\u793a\u6574\u4e2a\u884c\u5373\u53ef\u5728\u8be5\u884c\u4e0a\u8fd0\u884cEx\u547d\u4ee4\u3002\u53ea\u8981\u60a8\u5728\u6bcf\u884c\u4e0a\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u5b57\u7b26\uff0c\u5c31\u4f1a\u5e94\u7528Ex\u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u8de8\u591a\u884c\u7f16\u8f91"},"\u8de8\u591a\u884c\u7f16\u8f91"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\u5728Vim\u4e2d\u8de8\u591a\u884c\u7f16\u8f91\u6587\u672c\u3002\u5982\u679c\u9700\u8981\u5728\u6bcf\u884c\u672b\u5c3e\u6dfb\u52a0\u5206\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const one = "one"\nconst two = "two"\nconst three = "three"\n')),(0,l.kt)("p",null,"\u5c06\u5149\u6807\u653e\u5728\u7b2c\u4e00\u884c\u4e0a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\uff0c\u5e76\u5411\u4e0b\u4e24\u884c(",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-V jj"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u4eae\u663e\u793a\u5230\u884c\u5c3e(",(0,l.kt)("inlineCode",{parentName:"li"},"$"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6309(",(0,l.kt)("inlineCode",{parentName:"li"},"A"),') \uff0c\u7136\u540e\u952e\u5165";"\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u9000\u51fa\u53ef\u89c6\u6a21\u5f0f(",(0,l.kt)("inlineCode",{parentName:"li"},"esc"),")\u3002")),(0,l.kt)("p",null,'\u60a8\u5e94\u8be5\u770b\u5230\u5728\u6bcf\u4e00\u884c\u540e\u9762\u9644\u52a0\u7684 ";"\u3002666! \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u4ece\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\uff1a\u53ef\u4ee5\u4f7f\u7528',(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\u5728\u5149\u6807\u540e\u8f93\u5165\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"I"),"\u5728\u5149\u6807\u524d\u8f93\u5165\u6587\u672c\u3002\u8bf7\u52ff\u5c06\u5b83\u4eec\u4e0e\u666e\u901a\u6a21\u5f0f\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"I"),"\u6df7\u6dc6\u3002(\u666e\u901a\u6a21\u5f0f\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"\u8868\u793a\u5728\u884c\u5c3e\u6dfb\u52a0\u5185\u5bb9\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"I"),"\u8868\u793a\u5728\u884c\u5c3e\u975e\u7a7a\u5b57\u7b26\u524d\u63d2\u5165\u5185\u5bb9)\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":normal"),"\u547d\u4ee4\u5728\u591a\u884c\u6dfb\u52a0\u5185\u5bb9\uff1a\n-\u9ad8\u4eae\u663e\u793a\u6240\u67093\u884c(",(0,l.kt)("inlineCode",{parentName:"p"},"vjj"),")\u3002\n-\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},":normal! A;"),"\u3002"),(0,l.kt)("p",null,"\u8bb0\u4f4f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},":normal"),"\u547d\u4ee4\u6267\u884c\u666e\u901a\u6a21\u5f0f\u547d\u4ee4\u3002\u60a8\u53ef\u4ee5\u6307\u793a\u5b83\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"A;"),'\u5728\u8be5\u884c\u7684\u672b\u5c3e\u6dfb\u52a0\u6587\u672c";"\u3002'),(0,l.kt)("h2",{id:"\u9012\u589e\u6570\u5b57"},"\u9012\u589e\u6570\u5b57"),(0,l.kt)("p",null,"Vim\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-X"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-A"),"\u547d\u4ee4\u6765\u51cf\u5c11\u548c\u589e\u52a0\u6570\u5b57\u3002\u4e0e\u53ef\u89c6\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u8de8\u591a\u884c\u9012\u589e\u6570\u5b57\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0bHTML\u5143\u7d20\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div id="app-1"></div>\n<div id="app-1"></div>\n<div id="app-1"></div>\n<div id="app-1"></div>\n<div id="app-1"></div>\n')),(0,l.kt)("p",null,"\u6709\u591a\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684id\u662f\u4e00\u4e2a\u4e0d\u597d\u7684\u505a\u6cd5\uff0c\u56e0\u6b64\u8ba9\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u9012\u589e\u4ee5\u4f7f\u5176\u552f\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5149\u6807\u79fb\u52a8\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u884c"),'\u7684 "1"\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u9010\u5757\u53ef\u89c6\u6a21\u5f0f\uff0c\u5e76\u5411\u4e0b\u79fb\u52a83\u884c(",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl-V 3j"),')\u3002\u8fd9\u9ad8\u4eae\u663e\u793a\u5269\u4f59\u7684"1"\uff0c\u73b0\u5728\u9664\u4e86\u7b2c\u4e00\u884c\uff0c\u6240\u6709\u7684"1"\u5e94\u8be5\u5df2\u7ecf\u9ad8\u4eae\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"g Ctrl-A"),"\u3002")),(0,l.kt)("p",null,"\u60a8\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div id="app-1"></div>\n<div id="app-2"></div>\n<div id="app-3"></div>\n<div id="app-4"></div>\n<div id="app-5"></div>\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"g Ctrl-A"),"\u5728\u591a\u884c\u4e0a\u9012\u589e\u6570\u5b57\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-X/Ctrl-A"),"\u4e5f\u53ef\u4ee5\u589e\u52a0\u5b57\u6bcd\u3002\u5982\u679c\u60a8\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":set nrformats+=alpha\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nrformats"),"\u9009\u9879\u6307\u793aVim\u5c06\u54ea\u4e2a\u57fa\u6570\u89c6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-A"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-X"),"\u9012\u589e\u548c\u9012\u51cf\u7684\u201c\u6570\u5b57\u201d\u3002\u901a\u8fc7\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"alpha"),"\uff0c\u73b0\u5728\u5c06\u5b57\u6bcd\u5b57\u7b26\u89c6\u4e3a\u6570\u5b57\u3002\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0bHTML\u5143\u7d20\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div id="app-a"></div>\n<div id="app-a"></div>\n<div id="app-a"></div>\n<div id="app-a"></div>\n<div id="app-a"></div>\n')),(0,l.kt)("p",null,'\u5c06\u5149\u6807\u653e\u5728\u7b2c\u4e8c\u4e2a"app-a"\u4e0a\u3002\u4f7f\u7528\u4e0e\u4e0a\u8ff0\u76f8\u540c\u7684\u6280\u672f(',(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V 3j")," \u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"g Ctrl-A"),")\u589e\u52a0ID\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<div id="app-a"></div>\n<div id="app-b"></div>\n<div id="app-c"></div>\n<div id="app-d"></div>\n<div id="app-e"></div>\n')),(0,l.kt)("h2",{id:"\u9009\u62e9\u6700\u540e\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u533a\u57df"},"\u9009\u62e9\u6700\u540e\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u533a\u57df"),(0,l.kt)("p",null,"\u524d\u9762\u7ae0\u8282\u4e2d\u6211\u63d0\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"gv"),"\u53ef\u4ee5\u5feb\u901f\u9ad8\u4eae\u663e\u793a\u4e0a\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u9009\u62e9\u7684\u5185\u5bb9\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u7279\u6b8a\u6807\u8bb0\u8f6c\u5230\u6700\u540e\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u4f4d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'<    \u8f6c\u5230\u4e0a\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u9ad8\u4eae\u663e\u793a\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff08\u884c\uff09(\u8bd1\u8005\u6ce8\uff0c\u82f1\u6587\u539f\u7248\u4e2d'<'\u524d\u9762\u7684\u7b26\u53f7\u662f`\uff0c\u4f46\u8fd9\u5e94\u8be5\u662f\u4e00\u4e2a\u9519\u8bef\uff0c\u5e94\u8be5\u662f\u5355\u5f15\u53f7')\n'>    \u8f6c\u5230\u4e0a\u4e00\u4e2a\u53ef\u89c6\u6a21\u5f0f\u9ad8\u4eae\u663e\u793a\u7684\u6700\u540e\u4f4d\u7f6e\uff08\u884c\uff09\n")),(0,l.kt)("p",null,"\u4e4b\u524d\uff0c\u6211\u63d0\u5230\u8fc7\u60a8\u53ef\u4ee5\u5728\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u4e0a\u6709\u9009\u62e9\u5730\u6267\u884cEx\u547d\u4ee4\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},":s/const/let/g"),"\u3002\u5f53\u60a8\u8fd9\u6837\u505a\u65f6\uff0c\u60a8\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":'<,'>s/const/let/g\n")),(0,l.kt)("p",null,"\u60a8\u5b9e\u9645\u4e0a\u662f\u5728\u4f7f\u7528(",(0,l.kt)("inlineCode",{parentName:"p"},"'<, '>"),") \u6807\u8bb0\u4f5c\u4e3a\u8303\u56f4\u6765\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"s/const/let/g"),"\u547d\u4ee4\u3002\u8fd9\u592a\u6709\u8da3\u4e86\uff01"),(0,l.kt)("p",null,"\u60a8\u968f\u65f6\u53ef\u4ee5\u968f\u65f6\u7f16\u8f91\u8fd9\u4e9b\u6807\u8bb0\u3002\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u9700\u8981\u4ece\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u7684\u5f00\u5934\u5230\u6587\u4ef6\u7684\u672b\u5c3e\u8fdb\u884c\u66ff\u6362\uff0c\u5219\u53ea\u9700\u5c06\u547d\u4ee4\u884c\u66f4\u6539\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":'<,$s/const/let/g\n")),(0,l.kt)("h2",{id:"\u4ece\u63d2\u5165\u6a21\u5f0f\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f"},"\u4ece\u63d2\u5165\u6a21\u5f0f\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4ece\u63d2\u5165\u6a21\u5f0f\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f\u3002\u5728\u63d2\u5165\u6a21\u5f0f\u4e0b\u8fdb\u5165\u5b57\u7b26\u53ef\u89c6\u6a21\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Ctrl-O v\n")),(0,l.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\uff0c\u5728\u63d2\u5165\u6a21\u5f0f\u4e0b\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-O"),"\u53ef\u4ee5\u4f7f\u60a8\u6267\u884c\u666e\u901a\u6a21\u5f0f\u547d\u4ee4\u3002\u5728\u666e\u901a\u6a21\u5f0f\u547d\u4ee4\u6302\u8d77\u6a21\u5f0f\u4e0b\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\u8fdb\u5165\u9010\u5b57\u53ef\u89c6\u6a21\u5f0f\u3002\u8bf7\u6ce8\u610f\uff0c\u5728\u5c4f\u5e55\u7684\u5de6\u4e0b\u65b9\uff0c\u5b83\u663e\u793a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"--(insert) VISUAL--"),"\u3002\u8be5\u6280\u5de7\u9002\u7528\u4e8e\u4efb\u4f55\u53ef\u89c6\u6a21\u5f0f\u8fd0\u7b97\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"V"),"\uff0c\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-V"),"\u3002"),(0,l.kt)("h2",{id:"\u9009\u62e9\u6a21\u5f0f"},"\u9009\u62e9\u6a21\u5f0f"),(0,l.kt)("p",null,"Vim\u5177\u6709\u7c7b\u4f3c\u4e8e\u53ef\u89c6\u6a21\u5f0f\u7684\u6a21\u5f0f\uff0c\u79f0\u4e3a",(0,l.kt)("em",{parentName:"p"},"\u9009\u62e9\u6a21\u5f0f"),"\u3002\u4e0e\u53ef\u89c6\u6a21\u5f0f\u4e00\u6837\uff0c\u5b83\u4e5f\u5177\u6709\u4e09\u79cd\u4e0d\u540c\u7684\u6a21\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gh         \u9010\u5b57\u7b26\u9009\u62e9\u6a21\u5f0f\ngH         \u9010\u884c\u9009\u62e9\u6a21\u5f0f\ngCtrl-h    \u9010\u5757\u9009\u62e9\u6a21\u5f0f\n")),(0,l.kt)("p",null,"\u9009\u62e9\u6a21\u5f0f\u6bd4Vim\u7684\u53ef\u89c6\u6a21\u5f0f\u66f4\u63a5\u8fd1\u5e38\u89c4\u7f16\u8f91\u5668\u7684\u6587\u672c\u9ad8\u4eae\u663e\u793a\u884c\u4e3a\u3002"),(0,l.kt)("p",null,'\u5728\u5e38\u89c4\u7f16\u8f91\u5668\u4e2d\uff0c\u9ad8\u4eae\u663e\u793a\u6587\u672c\u5757\u5e76\u952e\u5165\u5b57\u6bcd\uff08\u4f8b\u5982\u5b57\u6bcd"y"\uff09\u540e\uff0c\u5b83\u5c06\u5220\u9664\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u5e76\u63d2\u5165\u5b57\u6bcd"y"\u3002\u5982\u679c\u60a8\u4f7f\u7528\u9010\u884c\u9009\u62e9\u6a21\u5f0f(',(0,l.kt)("inlineCode",{parentName:"p"},"gH"),')\u9ad8\u4eae\u663e\u793a\u4e00\u884c\u6587\u672c\u5e76\u952e\u5165"y"\uff0c\u5b83\u5c06\u5220\u9664\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u5e76\u63d2\u5165\u5b57\u6bcd"y"\uff0c\u8fd9\u4e0e\u5e38\u89c4\u6587\u672c\u7f16\u8f91\u5668\u975e\u5e38\u76f8\u4f3c\u3002'),(0,l.kt)("p",null,"\u5c06\u6b64\u884c\u4e3a\u4e0e\u53ef\u89c6\u6a21\u5f0f\u8fdb\u884c\u5bf9\u6bd4\uff1a\u5982\u679c\u60a8\u4f7f\u7528\u9010\u884c\u53ef\u89c6\u6a21\u5f0f(",(0,l.kt)("inlineCode",{parentName:"p"},"V"),')\u9ad8\u4eae\u663e\u793a\u4e00\u884c\u6587\u672c\u5e76\u952e\u5165"y"\uff0c\u5219\u9ad8\u4eae\u663e\u793a\u7684\u6587\u672c\u4e0d\u4f1a\u88ab\u5220\u9664\u4e14\u88ab\u5b57\u6bcd"y"\u4ee3\u66ff\uff0c\u800c\u662f\u4ec5\u5c06\u5176\u590d\u5236(yank)\u3002\u5728\u9009\u62e9\u6a21\u5f0f\u4e2d\uff0c\u4f60\u4e0d\u80fd\u6267\u884c\u5bf9\u9ad8\u4eae\u6587\u672c\u6267\u884c\u666e\u901a\u6a21\u5f0f\u7684\u547d\u4ee4\u3002'),(0,l.kt)("p",null,"\u6211\u4e2a\u4eba\u4ece\u672a\u4f7f\u7528\u8fc7\u9009\u62e9\u6a21\u5f0f\uff0c\u4f46\u662f\u5f88\u9ad8\u5174\u77e5\u9053\u5b83\u7684\u5b58\u5728\u3002"),(0,l.kt)("h2",{id:"\u4ee5\u806a\u660e\u7684\u65b9\u5f0f\u5b66\u4e60\u53ef\u89c6\u6a21\u5f0f"},"\u4ee5\u806a\u660e\u7684\u65b9\u5f0f\u5b66\u4e60\u53ef\u89c6\u6a21\u5f0f"),(0,l.kt)("p",null,"\u53ef\u89c6\u6a21\u5f0f\u662fVim\u9ad8\u4eae\u663e\u793a\u6587\u672c\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u4f7f\u7528\u53ef\u89c6\u6a21\u5f0f\u64cd\u4f5c\u7684\u9891\u7387\u6bd4\u6b63\u5e38\u6a21\u5f0f\u64cd\u4f5c\u7684\u9891\u7387\u9ad8\u5f97\u591a\uff0c\u8bf7\u5f53\u5fc3\u3002\u6211\u8ba4\u4e3a\u8fd9\u662f\u4e00\u79cd\u53cd\u6a21\u5f0f\u3002\u8fd0\u884c\u53ef\u89c6\u6a21\u5f0f\u64cd\u4f5c\u6240\u9700\u7684\u51fb\u952e\u6b21\u6570\u8981\u591a\u4e8e\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u51fb\u952e\u6b21\u6570\u3002\u5047\u8bbe\u60a8\u9700\u8981\u5220\u9664\u4e00\u4e2a\u5185\u90e8\u5355\u8bcd(inner word\uff0c\u8bf7\u56de\u987e\u524d\u9762\u7684\u6587\u672c\u5bf9\u8c61)\uff0c\u5982\u679c\u53ef\u4ee5\u53ea\u7528\u4e09\u4e2a\u6309\u952e(",(0,l.kt)("inlineCode",{parentName:"p"},"diw"),")\uff0c\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u56db\u4e2a\u6309\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"viwd"),"\uff08\u5148",(0,l.kt)("inlineCode",{parentName:"p"},"v"),"\u8fdb\u5165\u53ef\u89c6\u6a21\u5f0f\uff0c\u7136\u540e",(0,l.kt)("inlineCode",{parentName:"p"},"iw"),"\u9ad8\u4eae\u4e00\u4e2a\u5185\u90e8\u5355\u8bcd\uff0c\u6700\u540e",(0,l.kt)("inlineCode",{parentName:"p"},"d"),"\u5220\u9664\uff09\u5462\uff1f\u524d\u8005\u66f4\u4e3a\u76f4\u63a5\u548c\u7b80\u6d01\u3002\u5f53\u7136\uff0c\u6709\u65f6\u4f7f\u7528\u53ef\u89c6\u6a21\u5f0f\u662f\u5408\u9002\u7684\uff0c\u4f46\u603b\u7684\u6765\u8bf4\uff0c\u66f4\u503e\u5411\u4e8e\u76f4\u63a5\u7684\u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);