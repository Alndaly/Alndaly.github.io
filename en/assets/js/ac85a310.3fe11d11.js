"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[524],{33892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var p=t(87462),l=(t(67294),t(3905));t(16758);const a={title:"\u64a4\u9500",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},r="\u7b2c10\u7ae0 \u64a4\u9500",i={unversionedId:"others/Vim/ch10_undo",id:"others/Vim/ch10_undo",title:"\u64a4\u9500",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch10_undo.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch10_undo",permalink:"/en/docs/others/Vim/ch10_undo",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch10_undo.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{title:"\u64a4\u9500",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u5b8f\u547d\u4ee4",permalink:"/en/docs/others/Vim/ch09_macros"},next:{title:"\u53ef\u89c6\u6a21\u5f0f",permalink:"/en/docs/others/Vim/ch11_visual_mode"}},o={},k=[{value:"\u64a4\u9500(undo)\uff0c\u91cd\u505a\u548c\u884c\u64a4\u9500(UNDO)",id:"\u64a4\u9500undo\u91cd\u505a\u548c\u884c\u64a4\u9500undo",level:2},{value:"\u65ad\u70b9\u63d2\u5165\u64cd\u4f5c",id:"\u65ad\u70b9\u63d2\u5165\u64cd\u4f5c",level:2},{value:"\u64a4\u9500\u6811",id:"\u64a4\u9500\u6811",level:2},{value:"\u4fdd\u5b58\u64a4\u9500\u8bb0\u5f55",id:"\u4fdd\u5b58\u64a4\u9500\u8bb0\u5f55",level:2},{value:"\u65f6\u95f4\u65c5\u884c",id:"\u65f6\u95f4\u65c5\u884c",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u64a4\u9500\u64cd\u4f5c",id:"\u806a\u660e\u5730\u5b66\u4e60\u64a4\u9500\u64cd\u4f5c",level:2}],d={toc:k};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,p.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c10\u7ae0-\u64a4\u9500"},"\u7b2c10\u7ae0 \u64a4\u9500"),(0,l.kt)("p",null,"\u6240\u6709\u4eba\u90fd\u4f1a\u72af\u5404\u79cd\u5404\u6837\u7684\u8f93\u5165\u9519\u8bef\u3002\u56e0\u6b64\u5bf9\u4e8e\u4efb\u4f55\u4e00\u4e2a\u73b0\u4ee3\u7684\u8f6f\u4ef6\u6765\u8bf4\uff0c\u64a4\u9500\u90fd\u662f\u4e00\u4e2a\u5f88\u57fa\u672c\u7684\u529f\u80fd\u3002 Vim \u7684\u64a4\u9500\u7cfb\u7edf\u4e0d\u4ec5\u652f\u6301\u64a4\u9500\u548c\u53d6\u6d88\u64a4\u9500\u4efb\u4f55\u4fee\u6539\uff0c\u800c\u4e14\u652f\u6301\u5b58\u53d6\u4e0d\u540c\u7684\u6587\u672c\u5f62\u6001\uff0c\u8ba9\u4f60\u80fd\u63a7\u5236\u4f60\u8f93\u5165\u7684\u6240\u6709\u6587\u672c\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u4f60\u5c06\u4f1a\u5b66\u4f1a\u5982\u4f55\u6267\u884c\u64a4\u9500\u548c \u53d6\u6d88\u64a4\u9500\u6587\u672c\uff0c\u6d4f\u89c8\u64a4\u9500\u5206\u652f\uff0c\u53cd\u590d\u64a4\u9500, \u4ee5\u53ca\u6d4f\u89c8\u6539\u52a8\u65f6\u95f4\u7ebf\u3002 "),(0,l.kt)("h2",{id:"\u64a4\u9500undo\u91cd\u505a\u548c\u884c\u64a4\u9500undo"},"\u64a4\u9500(undo)\uff0c\u91cd\u505a\u548c\u884c\u64a4\u9500(UNDO)"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u57fa\u672c\u7684 undo \u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},":undo"),"\u3002"),(0,l.kt)("p",null,'\u5047\u8bbe\u4f60\u6709\u5982\u4e0b\u6587\u672c(\u6ce8\u610f"one"\u4e0b\u9762\u6709\u4e00\u4e2a\u7a7a\u884c)\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u53e6\u4e00\u4e2a\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0cVim \u4f1a\u5220\u9664 \u201ctwo\u201d\u3002"),(0,l.kt)("p",null,"Vim \u662f\u5982\u4f55\u77e5\u9053\u5e94\u8be5\u6062\u590d\u591a\u5c11\u4fee\u6539\u5462\uff1f \u7b54\u6848\u662f\uff0cVim\u6bcf\u6b21\u4ec5\u6062\u590d\u4e00\u6b21\u4fee\u6539\uff0c\u8fd9\u6709\u70b9\u7c7b\u4f3c\u4e8e\u70b9\u547d\u4ee4\u7684\u64cd\u4f5c\uff08\u548c \u70b9\u547d\u4ee4\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u547d\u4ee4\u884c\u547d\u4ee4\u4e5f\u4f1a\u88ab\u7b97\u4f5c\u4e00\u6b21\u4fee\u6539\uff09\u3002"),(0,l.kt)("p",null,"\u8981\u53d6\u6d88\u4e0a\u4e00\u6b21\u7684\u64a4\u9500\uff0c\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},":redo"),"\u3002\u4f8b\u5982\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5f53\u4f60\u6267\u884c\u64a4\u9500\u6765\u5220\u9664 \u201ctwo\u201d \u4ee5\u540e\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r")," \u6765\u6062\u590d\u88ab\u5220\u9664\u6389\u7684\u6587\u672c\u3002"),(0,l.kt)("p",null,"Vim \u4e5f\u6709\u53e6\u4e00\u4e2a\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u53ef\u4ee5\u5b9e\u73b0 \u884c\u64a4\u9500 (UNDO) \u7684\u529f\u80fd\uff0c\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u64a4\u9500\u6240\u6709\u6700\u65b0\u7684\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u7684\u533a\u522b\u662f\u4ec0\u4e48\u5462\uff1f\u9996\u5148\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u4f1a\u5220\u9664 ",(0,l.kt)("em",{parentName:"p"},"\u6700\u8fd1\u4fee\u6539\u7684\u884c\u4e2d\u6240\u6709\u7684")," \u7684\u4fee\u6539\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u4e00\u6b21\u4ec5\u5220\u9664\u4e00\u6b21\u4fee\u6539\u3002 \u5176\u6b21\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u4e0d\u4f1a\u88ab\u7b97\u4f5c\u4e00\u6b21\u4fee\u6539\u64cd\u4f5c\uff0c\u800c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u5219\u4f1a\u88ab\u7b97\u4f5c\u4e00\u6b21\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4f1a\u7684\u4e4b\u524d\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"\u4fee\u6539\u7b2c\u4e8c\u884c\u7684\u5185\u5bb9\u4e3a \u201cthree\u201d (",(0,l.kt)("inlineCode",{parentName:"p"},"ciwthree<esc>"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nthree\n")),(0,l.kt)("p",null,"\u518d\u6b21\u4fee\u6539\u7b2c\u4e8c\u884c\u7684\u4f8b\u5b50\u4e3a \u201cfour\u201d (",(0,l.kt)("inlineCode",{parentName:"p"},"ciwfour<esc>"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nfour\n")),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u5982\u679c\u4f60\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u4f60\u4f1a\u770b\u5230 \u201cthree\u201d\u3002\u5982\u679c\u4f60\u518d\u6b21\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u4f60\u4f1a\u770b\u5230 \u201ctwo\u201d\u3002\u7136\u800c\uff0c\u5728\u7b2c\u4e8c\u884c\u4ecd\u4e3a \u201cfour\u201d \u7684\u65f6\u5019\uff0c\u5982\u679c\u4f60\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),"\uff0c\u4f60\u4f1a\u770b\u5230 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u4f1a\u8df3\u8fc7\u4e2d\u95f4\u6240\u6709\u4fee\u6539\uff0c\u76f4\u63a5\u6062\u590d\u5230\u6587\u4ef6\u6700\u521d\u7684\u72b6\u6001\uff08\u7b2c\u4e8c\u884c\u4e3a\u7a7a\uff09\u3002\u53e6\u5916\uff0c\u7531\u4e8e UNO \u5b9e\u9645\u4e0a\u662f\u6267\u884c\u4e86\u4e00\u4e2a\u65b0\u7684\u4fee\u6539\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5 UNDO \u6267\u884c\u8fc7\u7684 UNDO\u3002 \u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u540e \u518d\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"U")," \u4f1a\u64a4\u9500 \u81ea\u5df1\u3002\u5047\u5982\u4f60\u8fde\u7eed\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),"\uff0c\u90a3\u4e48\u4f60\u5c06\u770b\u5230\u7b2c\u4e8c\u884c\u7684\u6587\u672c\u4e0d\u505c\u5730\u51fa\u73b0\u548c\u6d88\u5931\u3002"),(0,l.kt)("p",null,"\u5c31\u6211\u4e2a\u4eba\u800c\u8a00\uff0c\u6211\u51e0\u4e4e\u4e0d\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"U"),"\uff0c\u56e0\u4e3a\u5f88\u96be\u8bb0\u4f4f\u6587\u672c\u6700\u521d\u7684\u6837\u5b50\u3002\uff08\u6211\u51e0\u4e4e\u4e0d\u4f7f\u7528\u5b83\uff09"),(0,l.kt)("p",null,"Vim \u53ef\u4ee5\u901a\u8fc7\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"undolevels")," \u6765\u9009\u62e9\u6700\u591a\u53ef\u6267\u884c undo \u7684\u6b21\u6570\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},":echo &undolevels")," \u6765\u67e5\u770b\u5f53\u524d\u7684\u914d\u7f6e\u3002\u6211\u4e00\u822c\u8bbe\u7f6e\u4e3a 1000\u3002\u5982\u679c\u4f60\u4e5f\u60f3\u8bbe\u7f6e\u4e3a 1000 \u7684\u8bdd\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set undolevels=1000"),"\u3002\u4e0d\u7528\u62c5\u5fc3\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u4e3a\u4efb\u4f55\u4e00\u4e2a\u4f60\u60f3\u8bbe\u7f6e\u7684\u503c\u3002"),(0,l.kt)("h2",{id:"\u65ad\u70b9\u63d2\u5165\u64cd\u4f5c"},"\u65ad\u70b9\u63d2\u5165\u64cd\u4f5c"),(0,l.kt)("p",null,"\u5728\u4e0a\u6587\u4e2d\u6211\u63d0\u5230\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u6bcf\u6b21\u6062\u590d\u4e00\u4e2a\u4fee\u6539\uff0c\u7c7b\u4f3c\u4e8e\u70b9\u547d\u4ee4\u3002\u5728\u6bcf\u6b21\u8fdb\u5165 \u63d2\u5165\u6a21\u5f0f\u548c\u9000\u51fa\u63d2\u5165\u6a21\u5f0f\u4e4b\u95f4\u7684\u4efb\u4f55\u4fee\u6539\u90fd\u88ab\u5b9a\u4e49\u4e3a\u4e00\u6b21\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ione two three<esc>")," \u4e4b\u540e\uff0c\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0cVim \u4f1a\u540c\u65f6\u5220\u9664 \u201cone two three\u201d\uff0c\u56e0\u4e3a\u8fd9\u662f\u4e00\u7b14\u4fee\u6539\u3002\u5982\u679c\u4f60\u6bcf\u6b21\u53ea\u8f93\u5165\u8f83\u77ed\u7684\u6587\u672c\uff0c\u90a3\u8fd9\u662f\u53ef\u63a5\u53d7\u7684\uff1b\u53ef\u5047\u8bbe\u4f60\u5728\u4e00\u6b21\u63d2\u5165\u6a21\u5f0f\u4e2d\u8f93\u5165\u4e86\u5927\u91cf\u7684\u6587\u672c\uff0c\u800c\u540e\u9000\u51fa\u4e86\u63d2\u5165\u6a21\u5f0f\uff0c\u53ef\u5f88\u5feb\u4f60\u610f\u8bc6\u5230\u8fd9\u4e2d\u95f4\u6709\u90e8\u5206\u9519\u8bef\u3002\u6b64\u65f6\uff0c\u5982\u679c\u4f60\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u4f60\u4f1a\u4e22\u5931\u4e0a\u4e00\u6b21\u8f93\u5165\u7684\u6240\u6709\u5185\u5bb9\u3002 \u56e0\u6b64\uff0c\u5047\u8bbe\u4f60\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u53ea\u5220\u9664\u4f60\u4e0a\u4e00\u6b21\u8f93\u5165\u7684\u4e00\u90e8\u5206\u6587\u672c\u5c82\u4e0d\u662f\u4f1a\u66f4\u597d\u3002"),(0,l.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u4f60\u53ef\u4ee5\u62c6\u5206\u5b83\u3002\u5f53\u4f60\u5728\u63d2\u5165\u6a21\u5f0f\u65f6\uff0c\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-G u")," \u4f1a\u751f\u6210\u4e00\u4e2a\u65ad\u70b9\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ione <Ctrl-G u>two <Ctrl-G u>three<esc>"),"\uff0c\u4e4b\u540e\u4f60\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u4f60\u4ec5\u4f1a\u5931\u53bb\u6587\u672c \u201cthree\u201d\uff0c\u518d\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u4f1a\u5220\u9664 \u201ctwo\u201d\u3002\u5f53\u4f60\u60f3\u8981\u8f93\u5165\u4e00\u957f\u6bb5\u5185\u5bb9\u65f6\uff0c\u5e94\u8be5\u6709\u9009\u62e9\u6027\u5730\u6267\u884c\u65ad\u70b9\u63d2\u5165\u64cd\u4f5c\u3002\u5728\u6bcf\u4e00\u53e5\u8bdd\u7684\u672b\u5c3e\uff0c\u4e24\u4e2a\u6bb5\u843d\u7684\u4e2d\u95f4\uff0c\u6216\u8005\u6bcf\u4e00\u884c\u4ee3\u7801\u7ed3\u675f\u65f6\u63d2\u5165\u65ad\u70b9\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u4ece\u9519\u8bef\u4e2d\u6062\u590d\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u5728\u63d2\u5165\u6a21\u5f0f\u4e2d\uff0c\u6267\u884c\u5220\u9664\u64cd\u4f5c\u65f6\u63d2\u5165\u65ad\u70b9\u4e5f\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-W")," \u5220\u9664\u5149\u6807\u524d\u7684\u5355\u8bcd\u65f6\uff0c\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-U"),"\u5220\u9664\u5149\u6807\u524d\u7684\u6240\u6709\u6587\u672c\u65f6\u3002\u4e00\u4e2a\u670b\u53cb\u5efa\u8bae\u6211\u4f7f\u7528\u5982\u4e0b\u7684\u6620\u5c04\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"inoremap <c-u> <c-g>u<c-u>\ninoremap <c-w> <c-g>u<c-w>\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u6062\u590d\u88ab\u5220\u9664\u7684\u6587\u672c\u3002"),(0,l.kt)("h2",{id:"\u64a4\u9500\u6811"},"\u64a4\u9500\u6811"),(0,l.kt)("p",null,"Vim \u5c06\u6bcf\u4e00\u6b21\u4fee\u6539\u5b58\u50a8\u5728\u4e00\u4e2a\u64a4\u9500\u6811\u4e2d\u3002\u4f60\u6253\u5f00\u4e00\u4e2a\u7a7a\u767d\u6587\u4ef6\uff0c\u7136\u540e\u6dfb\u52a0\u4e00\u6bb5\u65b0\u6587\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u518d\u63d2\u5165\u4e00\u6bb5\u65b0\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"undo\u4e00\u6b21:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u63d2\u5165\u4e00\u6bb5\u4e0d\u540c\u7684\u8bdd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nthree\n")),(0,l.kt)("p",null,"\u518d\u6b21 undo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u518d\u6b21\u63d2\u5165\u53e6\u4e00\u6bb5\u8bdd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nfour\n")),(0,l.kt)("p",null,'\u73b0\u5728\u5982\u679c\u4f60\u6267\u884c undo,\u60a8\u5c06\u4e22\u5931\u521a\u521a\u6dfb\u52a0\u7684\u6587\u672c "four" :'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u518d\u6b21\u6267\u884c undo \u64cd\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")),(0,l.kt)("p",null,"\u6587\u672c \u201cone\u201d \u4e5f\u4f1a\u4e22\u5931\u3002\u5bf9\u4e8e\u5927\u90e8\u5206\u7f16\u8f91\u5668\u6765\u8bf4\uff0c\u627e\u56de\u6587\u672c \u201ctwo\u201d \u548c \u201cthree\u201d \u90fd\u662f\u4e0d\u53ef\u80fd\u7684\u4e8b\u60c5\uff0c\u4f46\u662f\u5bf9\u4e8e Vim \u6765\u8bf4\u5374\u4e0d\u662f\u8fd9\u6837\u3002\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+"),"\uff0c\u4f60\u4f1a\u5f97\u5230\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u518d\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+")," \uff0c\u4f60\u5c06\u4f1a\u770b\u5230\u4e00\u4f4d\u8001\u670b\u53cb:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u7ee7\u7eed\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nthree\n")),(0,l.kt)("p",null,"\u518d\u4e00\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\nfour\n")),(0,l.kt)("p",null,"\u5728 Vim \u4e2d\uff0c\u4f60\u6bcf\u4e00\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),' \u53bb\u505a\u4e00\u6b21\u4fee\u6539\u65f6\uff0cVim\u90fd\u4f1a\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a"\u64a4\u9500\u5206\u652f"\u6765\u4fdd\u5b58\u4e4b\u524d\u7684\u6587\u672c\u5185\u5bb9\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u4f60\u8f93\u5165"two"\u540e, \u6267\u884c ',(0,l.kt)("inlineCode",{parentName:"p"},"u"),'\uff0c\u7136\u540e\u8f93\u5165"three"\uff0c\u4f60\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u53f6\u5b50\u5206\u652f,\u4fdd\u5b58\u4e86\u542b\u6709"two"\u7684\u6587\u672c\u72b6\u6001\u3002\u6b64\u65f6\uff0c\u64a4\u9500\u6811\u5df2\u7ecf\u5305\u542b\u4e86\u81f3\u5c11\u4e24\u4e2a\u53f6\u5b50\u8282\u70b9\uff0c\u4e3b\u8282\u70b9\u5305\u542b\u6587\u672c"three"\uff08\u6700\u65b0\uff09\uff0c\u800c\u53e6\u4e00undo\u5206\u652f\u8282\u70b9\u5305\u542b\u6587\u672c\u201ctwo\u201d\u3002\u5047\u5982\u4f60\u6267\u884c\u4e86\u53e6\u4e00\u6b21\u64a4\u9500\u64cd\u4f5c\u5e76\u4e14\u8f93\u5165\u4e86"four"\uff0c\u90a3\u4e48\u6b64\u65f6\u4f1a\u751f\u6210\u4e09\u4e2a\u8282\u70b9\uff0c\u4e00\u4e2a\u4e3b\u8282\u70b9\u5305\u542b\u6587\u672c"four", \u4ee5\u53ca\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u5206\u522b\u5b58\u50a8\u4e86"three"\u548c"two"\u3002'),(0,l.kt)("p",null,"\u4e3a\u4e86\u5728\u51e0\u4e2a\u4e0d\u540c\u7684\u8282\u70b9\u72b6\u6001\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+")," \u53bb\u83b7\u53d6\u4e00\u4e2a\u8f83\u65b0\u7684\u72b6\u6001\uff0c\u4ee5\u53ca\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g-")," \u53bb\u83b7\u53d6\u4e00\u4e2a\u6559\u65e7\u7684\u72b6\u6001\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-R"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"g+"),"\uff0c \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"g-")," \u4e4b\u95f4\u7684\u533a\u522b\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"u")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-R")," \u53ea\u53ef\u4ee5\u5728 ",(0,l.kt)("em",{parentName:"p"},"main")," \u8282\u70b9\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"g+")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"g-")," \u53ef\u4ee5\u5728 ",(0,l.kt)("em",{parentName:"p"},"\u6240\u6709")," \u8282\u70b9\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002"),(0,l.kt)("p",null,"Undo \u6811\u5e76\u4e0d\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u53ef\u89c6\u5316\u3002\u6211\u53d1\u73b0\u4e00\u4e2a\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simnalamburt/vim-mundo"},"vim-mundo")," \u5bf9\u4e8e\u7406\u89e3 undo \u6811\u5f88\u6709\u5e2e\u52a9\u3002\u82b1\u70b9\u65f6\u95f4\u53bb\u4e0e\u5b83\u73a9\u800d\u5427\u3002 "),(0,l.kt)("h2",{id:"\u4fdd\u5b58\u64a4\u9500\u8bb0\u5f55"},"\u4fdd\u5b58\u64a4\u9500\u8bb0\u5f55"),(0,l.kt)("p",null,"\u5f53\u4f60\u901a\u8fc7 Vim \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5e76\u4e14\u7acb\u5373\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0cVim \u5f88\u53ef\u80fd\u4f1a\u663e\u793a \u201c",(0,l.kt)("em",{parentName:"p"},"Already at oldest change"),"\u201d \u7684\u8b66\u544a\u3002 "),(0,l.kt)("p",null,"\u8981\u60f3\u4ece\u6700\u8fd1\u7684\u4e00\u6b21\u7f16\u8f91\u5de5\u4f5c\u4e2d\uff08\u5728vim\u5173\u95ed\u6587\u4ef6\u518d\u6253\u5f00\uff0c\u7b97\u505a\u4e00\u6b21\u65b0\u7684\u7f16\u8f91\u5de5\u4f5c\uff09\uff0c\u5728\u64a4\u9500\u5386\u53f2\u4e2d\u56de\u6eda\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},":wundo"),"\u547d\u4ee4\u4f7fVim \u4fdd\u5b58\u4e00\u4efd\u4f60\u7684 undo \u5386\u53f2\u8bb0\u5f55\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"mynumbers.txt"),". \u8f93\u5165:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n")),(0,l.kt)("p",null,"\u63d2\u5165\u53e6\u4e00\u884c\u6587\u4ef6 (\u786e\u4fdd\u4f60\u8981\u4e48\u9000\u51fa\u5e76\u91cd\u65b0\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff0c\u8981\u4e48\u521b\u5efa\u4e86\u65ad\u70b9):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"\u63d2\u5165\u65b0\u7684\u4e00\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\nthree\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u521b\u5efa\u4f60\u7684\u64a4\u9500\u8bb0\u5f55\u6587\u4ef6\u3002 \u8bed\u6cd5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},":wundo myundofile"),"\u3002 \u5982\u679c\u4f60\u9700\u8981\u8986\u76d6\u4e00\u4e2a\u5df2\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"wundo")," \u4e4b\u540e\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":wundo! mynumbers.undo\n")),(0,l.kt)("p",null,"\u9000\u51fa Vim\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u5728\u76ee\u5f55\u4e0b\uff0c\u5e94\u8be5\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"mynumbers.txt")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"mynumbers.undo")," \u4e24\u4e2a\u6587\u4ef6\u3002\u518d\u6b21\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"mynumbers.txt")," \u6587\u4ef6\u5e76\u4e14\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0c\u8fd9\u662f\u6ca1\u6709\u54cd\u5e94\u7684\u3002\u56e0\u4e3a\u81ea\u6253\u5f00\u6587\u4ef6\u540e\uff0c\u4f60\u6ca1\u6709\u6267\u884c\u4efb\u4f55\u7684\u4fee\u6539\u3002\u73b0\u5728\uff0c\u901a\u8fc7\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":rundo")," \u6765\u52a0\u8f7d undo \u5386\u53f2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":rundo mynumbers.undo\n")),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u5982\u679c\u4f60\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\uff0cVim \u4f1a\u5220\u9664 \u201cthree\u201d\u3002\u518d\u6b21\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"\u53ef\u4ee5\u5220\u9664 \u201ctwo\u201d\u3002\u8fd9\u5c31\u597d\u50cf\u4f60\u4ece\u6765\u6ca1\u6709\u5173\u95ed\u8fc7 Vim \u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u81ea\u52a8\u52a0\u8f7d undo \u5386\u53f2\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".vimrc")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set undodir=~/.vim/undo_dir\nset undofile\n")),(0,l.kt)("p",null,"\u6211\u8ba4\u4e3a\u5c06\u6240\u6709\u7684 undo \u6587\u4ef6\u96c6\u4e2d\u4fdd\u5b58\u5728\u4e00\u4e2a\u6587\u4ef6\u5939\u4e2d\u6700\u597d\uff0c\u4f8b\u5982\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim")," \u76ee\u5f55\u4e0b\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"undo_dir")," \u662f\u968f\u610f\u7684\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"set undofile")," \u544a\u8bc9 Vim \u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"undofile")," \u8fd9\u4e2a\u7279\u6027\uff0c\u56e0\u4e3a\u8be5\u7279\u6027\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002\u73b0\u5728\uff0c\u65e0\u8bba\u4f60\u4f55\u65f6\u4fdd\u5b58\uff0cVim \u90fd\u4f1a\u81ea\u52a8\u521b\u5efa\u548c\u4fdd\u5b58\u64a4\u9500\u7684\u5386\u53f2\u8bb0\u5f55\uff08\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"undo_dir"),"\u76ee\u5f55\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u521b\u5efa\u4e86\u5b83\uff09\u3002"),(0,l.kt)("h2",{id:"\u65f6\u95f4\u65c5\u884c"},"\u65f6\u95f4\u65c5\u884c"),(0,l.kt)("p",null,"\u662f\u8c01\u8bf4\u65f6\u95f4\u65c5\u884c\u4e0d\u5b58\u5728\u3002 Vim \u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},":earlier")," \u547d\u4ee4\u5c06\u6587\u672c\u6062\u590d\u4e3a\u4e4b\u524d\u7684\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u5047\u5982\u6709\u5982\u4e0b\u6587\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\n\n")),(0,l.kt)("p",null,"\u4e4b\u540e\u4f60\u8f93\u5165\u4e86\u53e6\u4e00\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"one\ntwo\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8f93\u5165 \u201ctwo\u201d \u7684\u65f6\u95f4\u5c11\u4e8e10\u79d2\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6062\u590d\u5230 \u201ctwo\u201d \u8fd8\u6ca1\u88ab\u8f93\u5165\u524d\u7684\u72b6\u6001:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":earlier 10s\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},":undolist")," \u53bb\u67e5\u770b\u4e4b\u524d\u6240\u505a\u7684\u4fee\u6539\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},":earlier")," \u53ef\u4ee5\u52a0\u4e0a\u5206\u949f (",(0,l.kt)("inlineCode",{parentName:"p"},"m"),"), \u5c0f\u65f6 (",(0,l.kt)("inlineCode",{parentName:"p"},"h"),"), and \u5929 (",(0,l.kt)("inlineCode",{parentName:"p"},"d"),") \u4f5c\u4e3a\u53c2\u6570\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":earlier 10s    \u6062\u590d\u523010\u79d2\u524d\u7684\u72b6\u6001\n:earlier 10m    \u6062\u590d\u523010\u5206\u949f\u524d\u7684\u72b6\u6001\n:earlier 10h    \u6062\u590d\u523010\u5c0f\u65f6\u524d\u7684\u72b6\u6001\n:earlier 10d    \u6062\u590d\u523010\u5929\u524d\u7684\u72b6\u6001\n\n")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5b83\u540c\u6837\u63a5\u53d7\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"\u8ba1\u6570"),"\u4f5c\u4e3a\u53c2\u6570\uff0c\u544a\u8bc9vim\u6062\u590d\u5230\u8001\u72b6\u6001\u7684\u6b21\u6570\u3002\u6bd4\u5982\uff0c\u5982\u679c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":earlier 2"),",Vim\u5c06\u6062\u590d\u52302\u6b21\u4fee\u6539\u524d\u7684\u72b6\u6001\u3002\u529f\u80fd\u7c7b\u4f3c\u4e8e\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"g-"),"\u4e24\u6b21\u3002\u540c\u6837\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":earlier 10f"),"\u547d\u4ee4\u544a\u8bc9vim\u6062\u590d\u523010\u6b21\u4fdd\u5b58\u524d\u7684\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u540c\u6837\u4f5c\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},":earlier"),"\u547d\u4ee4\u7684\u5bf9\u5e94\u7248\u672c:",(0,l.kt)("inlineCode",{parentName:"p"},":later"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":later 10s    \u6062\u590d\u523010\u79d2\u540e\u7684\u72b6\u6001\n:later 10m    \u6062\u590d\u523010\u5206\u949f\u540e\u7684\u72b6\n:later 10h    \u6062\u590d\u523010\u5c0f\u65f6\u540e\u7684\u72b6\n:later 10d    \u6062\u590d\u523010\u5929\u540e\u7684\u72b6\u6001\n:later 10     \u6062\u590d\u5230\u65b0\u72b6\u600110\u6b21\n:later 10f    \u6062\u590d\u523010\u6b21\u4fdd\u5b58\u540e\u7684\u72b6\u6001\n")),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u64a4\u9500\u64cd\u4f5c"},"\u806a\u660e\u5730\u5b66\u4e60\u64a4\u9500\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"u")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-R")," \u662f\u4e24\u4e2a\u4e0d\u53ef\u7f3a\u5c11\u7684 Vim \u53c2\u6570\u3002\u8bf7\u5148\u5b66\u4f1a\u5b83\u4eec\u3002\u5728\u6211\u7684\u5de5\u4f5c\u6d41\u4e2d\uff0c\u6211\u5e76\u4e0d\u4f7f\u7528 UNDO\uff0c\u7136\u800c\u6211\u8ba4\u4e3a\u627f\u8ba4\u5b83\u5b58\u5728\u662f\u5f88\u597d\u7684\u3002\u4e0b\u4e00\u6b65\uff0c\u5b66\u4f1a\u5982\u4f55\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},":earlier")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":later"),"\uff0c\u4ee5\u53ca\u65f6\u95f4\u53c2\u6570\u3002\u5728\u8fd9\u4e4b\u540e\uff0c\u8bf7\u82b1\u4e9b\u65f6\u95f4\u7406\u89e3 undo \u6811\u3002 \u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simnalamburt/vim-mundo"},"vim-mundo")," \u5bf9\u6211\u7684\u5e2e\u52a9\u5f88\u5927\u3002\u5355\u72ec\u8f93\u5165\u672c\u7ae0\u4e2d\u5c55\u793a\u7684\u6587\u672c\uff0c\u5e76\u4e14\u67e5\u770b\u64a4\u9500\u6811\u7684\u6bcf\u4e00\u6b21\u6539\u53d8\u3002\u4e00\u65e6\u4f60\u638c\u63e1\u5b83\uff0c\u4f60\u770b\u5f85\u64a4\u9500\u7cfb\u7edf\u7684\u773c\u5149\u4e00\u5b9a\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u4e4b\u524d\uff0c\u4f60\u5b66\u4e60\u4e86\u5982\u4f55\u5728\u9879\u76ee\u5185\u67e5\u627e\u4efb\u4f55\u6587\u672c\uff0c\u914d\u5408\u64a4\u9500\uff0c\u4f60\u53ef\u4ee5\u5728\u65f6\u95f4\u7ef4\u5ea6\u4e0a\u67e5\u627e\u4efb\u4f55\u4e00\u4e2a\u6587\u672c\u3002\u4f60\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u4f4d\u7f6e\u548c\u5199\u5165\u65f6\u95f4\u627e\u5230\u4efb\u4f55\u4e00\u4e2a\u4f60\u60f3\u627e\u7684\u6587\u672c\u3002\u4f60\u5df2\u7ecf\u5bf9 Vim \u65e0\u6240\u4e0d\u80fd\u4e86\u3002"))}m.isMDXComponent=!0}}]);