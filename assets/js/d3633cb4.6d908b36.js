"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5821],{34130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(87462),l=(n(67294),n(3905));n(16758);const a={title:"\u547d\u4ee4\u884c\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c15\u7ae0 \u547d\u4ee4\u884c\u6a21\u5f0f",r={unversionedId:"others/Vim/ch15_command-line_mode",id:"others/Vim/ch15_command-line_mode",title:"\u547d\u4ee4\u884c\u6a21\u5f0f",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch15_command-line_mode.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch15_command-line_mode",permalink:"/docs/others/Vim/ch15_command-line_mode",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch15_command-line_mode.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{title:"\u547d\u4ee4\u884c\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u5916\u90e8\u547d\u4ee4",permalink:"/docs/others/Vim/ch14_external_commands"},next:{title:"\u6807\u7b7e",permalink:"/docs/others/Vim/ch16_tags"}},o={},d=[{value:"\u8fdb\u5165\u548c\u9000\u51fa\u547d\u4ee4\u884c\u6a21\u5f0f",id:"\u8fdb\u5165\u548c\u9000\u51fa\u547d\u4ee4\u884c\u6a21\u5f0f",level:2},{value:"\u91cd\u590d\u4e0a\u4e00\u4e2a\u547d\u4ee4",id:"\u91cd\u590d\u4e0a\u4e00\u4e2a\u547d\u4ee4",level:2},{value:"\u547d\u4ee4\u884c\u6a21\u5f0f\u5feb\u6377\u952e",id:"\u547d\u4ee4\u884c\u6a21\u5f0f\u5feb\u6377\u952e",level:2},{value:"\u5bc4\u5b58\u5668\u548c\u81ea\u52a8\u8865\u5168",id:"\u5bc4\u5b58\u5668\u548c\u81ea\u52a8\u8865\u5168",level:2},{value:"\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3",id:"\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3",level:2},{value:"\u66f4\u591a\u547d\u4ee4\u884c\u6307\u4ee4",id:"\u66f4\u591a\u547d\u4ee4\u884c\u6307\u4ee4",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u547d\u4ee4\u884c\u6a21\u5f0f",id:"\u806a\u660e\u5730\u5b66\u4e60\u547d\u4ee4\u884c\u6a21\u5f0f",level:2}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c15\u7ae0-\u547d\u4ee4\u884c\u6a21\u5f0f"},"\u7b2c15\u7ae0 \u547d\u4ee4\u884c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5728\u524d\u4e09\u7ae0\u4e2d\uff0c\u60a8\u5df2\u7ecf\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u641c\u7d22\u547d\u4ee4(",(0,l.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),")\u3001\u66ff\u6362\u547d\u4ee4(",(0,l.kt)("inlineCode",{parentName:"p"},":s"),")\u3001\u5168\u5c40\u547d\u4ee4(",(0,l.kt)("inlineCode",{parentName:"p"},":g"),")\uff0c\u4ee5\u53ca\u5916\u90e8\u547d\u4ee4(",(0,l.kt)("inlineCode",{parentName:"p"},"!"),")\u3002\u8fd9\u4e9b\u90fd\u662f\u547d\u4ee4\u884c\u6a21\u5f0f\u547d\u4ee4\u7684\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u547d\u4ee4\u884c\u6a21\u5f0f\u7684\u66f4\u591a\u6280\u5de7\u3002"),(0,l.kt)("h2",{id:"\u8fdb\u5165\u548c\u9000\u51fa\u547d\u4ee4\u884c\u6a21\u5f0f"},"\u8fdb\u5165\u548c\u9000\u51fa\u547d\u4ee4\u884c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u6a21\u5f0f\u672c\u8eab\u4e5f\u662f\u4e00\u79cd\u6a21\u5f0f\uff0c\u5c31\u50cf\u666e\u901a\u6a21\u5f0f\u3001\u8f93\u5165\u6a21\u5f0f\u3001\u53ef\u89c6\u6a21\u5f0f\u4e00\u6837\u3002\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e2d\uff0c\u5149\u6807\u5c06\u8f6c\u5230\u5c4f\u5e55\u5e95\u90e8\uff0c\u6b64\u65f6\u60a8\u53ef\u4ee5\u8f93\u5165\u4e0d\u540c\u7684\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u6709 4 \u79cd\u8fdb\u5165\u547d\u4ee4\u884c\u6a21\u5f0f\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u641c\u7d22\u547d\u4ee4 (",(0,l.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u884c\u6307\u4ee4 (",(0,l.kt)("inlineCode",{parentName:"li"},":"),")"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u547d\u4ee4 (",(0,l.kt)("inlineCode",{parentName:"li"},"!"),")")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u6b63\u5e38\u6a21\u5f0f\u6216\u53ef\u89c6\u6a21\u5f0f\u8fdb\u5165\u547d\u4ee4\u884c\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u82e5\u8981\u79bb\u5f00\u547d\u4ee4\u884c\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-c"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-["),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'\u6709\u65f6\u5176\u4ed6\u8d44\u6599\u53ef\u80fd\u4f1a\u5c06"\u547d\u4ee4\u884c\u6307\u4ee4"\u79f0\u4e3a"Ex \u547d\u4ee4"\uff0c\u5c06"\u5916\u90e8\u547d\u4ee4"\u79f0\u4e3a"\u8fc7\u6ee4\u547d\u4ee4"\u6216\u8005"\u53f9\u53f7\u8fd0\u7b97\u7b26"\u3002')),(0,l.kt)("h2",{id:"\u91cd\u590d\u4e0a\u4e00\u4e2a\u547d\u4ee4"},"\u91cd\u590d\u4e0a\u4e00\u4e2a\u547d\u4ee4"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@:")," \u6765\u91cd\u590d\u4e0a\u4e00\u4e2a\u547d\u4ee4\u884c\u6307\u4ee4\u6216\u5916\u90e8\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u521a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":s/foo/bar/g"),"\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@:")," \u5c06\u91cd\u590d\u8be5\u66ff\u6362\u3002\u5982\u679c\u60a8\u521a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":.!tr '[a-z]' '[A-Z]'"),"\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@:")," \u5c06\u91cd\u590d\u4e0a\u4e00\u6b21\u5916\u90e8\u547d\u4ee4\u8f6c\u6362\u8fc7\u6ee4\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c\u6a21\u5f0f\u5feb\u6377\u952e"},"\u547d\u4ee4\u884c\u6a21\u5f0f\u5feb\u6377\u952e"),(0,l.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Left")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Right")," \u65b9\u5411\u952e\uff0c\u6765\u5de6\u53f3\u79fb\u52a8\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u79fb\u52a8\u4e00\u4e2a\u5355\u8bcd\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift-Left")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift-Right")," (\u5728\u67d0\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift"),")\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-b"),"\u79fb\u52a8\u5230\u8be5\u884c\u7684\u5f00\u59cb\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-e"),"\u79fb\u52a8\u5230\u8be5\u884c\u7684\u7ed3\u675f\u3002"),(0,l.kt)("p",null,"\u548c\u8f93\u5165\u6a21\u5f0f\u7c7b\u4f3c\uff0c\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\uff0c\u6709\u4e09\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u5b57\u7b26\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Ctrl-h    \u5220\u9664\u4e00\u4e2a\u5b57\u7b26\nCtrl-w    \u5220\u9664\u4e00\u4e2a\u5355\u8bcd\nCtrl-u    \u5220\u9664\u4e00\u6574\u884c\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u5982\u679c\u60a8\u60f3\u50cf\u7f16\u8f91\u6587\u672c\u6587\u4ef6\u4e00\u6837\u6765\u7f16\u8f91\u547d\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-f"),"\u3002"),(0,l.kt)("p",null,'\u8fd9\u6837\u8fd8\u53ef\u4ee5\u67e5\u770b\u8fc7\u5f80\u7684\u547d\u4ee4\uff0c\u5e76\u5728\u8fd9\u79cd"\u547d\u4ee4\u884c\u7f16\u8f91\u7684\u666e\u901a\u6a21\u5f0f"\u4e2d\u7f16\u8f91\u5b83\u4eec\uff0c\u540c\u65f6\u8fd8\u80fd\u6309\u4e0b ',(0,l.kt)("inlineCode",{parentName:"p"},"Enter")," \u6765\u8fd0\u884c\u5b83\u4eec\u3002"),(0,l.kt)("h2",{id:"\u5bc4\u5b58\u5668\u548c\u81ea\u52a8\u8865\u5168"},"\u5bc4\u5b58\u5668\u548c\u81ea\u52a8\u8865\u5168"),(0,l.kt)("p",null,"\u5f53\u5904\u4e8e\u547d\u4ee4\u884c\u6a21\u5f0f\u65f6\uff0c\u60a8\u53ef\u4ee5\u50cf\u5728\u63d2\u5165\u6a21\u5f0f\u4e2d\u4e00\u6837\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r"),' \u4eceVim\u5bc4\u5b58\u5668\u4e2d\u63d2\u5165\u6587\u672c\u3002\u5982\u679c\u60a8\u5728\u5bc4\u5b58\u5668 a \u4e2d\u5b58\u50a8\u4e86\u5b57\u7b26\u4e32 "foo" \uff0c\u60a8\u53ef\u4ee5\u6267\u884c ',(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r a")," \u4ece\u5bc4\u5b58\u5668a\u4e2d\u63d2\u5165\u8be5\u6587\u672c\u3002\u4efb\u4f55\u5728\u63d2\u5165\u6a21\u5f0f\u4e2d\u60a8\u53ef\u4ee5\u4ece\u5bc4\u5b58\u5668\u4e2d\u83b7\u53d6\u7684\u5185\u5bb9\uff0c\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u60a8\u4e5f\u53ef\u4ee5\u83b7\u53d6\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r Ctrl-w")," \u83b7\u53d6\u5f53\u524d\u5149\u6807\u4e0b\u7684\u5355\u8bcd\uff08\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r Ctrl-A")," \u83b7\u53d6\u5f53\u524d\u5149\u6807\u4e0b\u7684\u8bcd\u7ec4\uff09\u3002\u8fd8\u53ef\u4ee5\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r Ctlr-l")," \u83b7\u53d6\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u3002\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r Ctrl-f")," \u83b7\u53d6\u5149\u6807\u4e0b\u7684\u6587\u4ef6\u540d\u3002"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5bf9\u5df2\u5b58\u5728\u7684\u547d\u4ee4\u4f7f\u7528\u81ea\u52a8\u8865\u5168\u3002\u8981\u81ea\u52a8\u8865\u5168 ",(0,l.kt)("inlineCode",{parentName:"p"},"echo"),' \u547d\u4ee4\uff0c\u5f53\u5904\u4e8e\u547d\u4ee4\u884c\u6a21\u5f0f\u65f6\uff0c\u9996\u5148\u8f93\u5165 "ec"\uff0c\u63a5\u7740\u6309\u4e0b ',(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>"),'\uff0c\u6b64\u65f6\u60a8\u5e94\u8be5\u80fd\u5728\u5de6\u4e0b\u89d2\u770b\u5230\u4e00\u4e9b "ec" \u5f00\u5934\u7684 Vim \u547d\u4ee4\uff08\u4f8b\u5982\uff1a',(0,l.kt)("inlineCode",{parentName:"p"},"echo echoerr echohl echomsg econ"),"\uff09\u3002\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-n")," \u53ef\u4ee5\u8df3\u5230\u4e0b\u4e00\u4e2a\u9009\u9879\u3002\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"<Shift-Tab>")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-p")," \u53ef\u4ee5\u56de\u5230\u4e0a\u4e00\u4e2a\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u547d\u4ee4\u884c\u6307\u4ee4\u63a5\u53d7\u6587\u4ef6\u540d\u4f5c\u4e3a\u53c2\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"edit")," \u5c31\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u65f6\u5019\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u52a8\u8865\u5168\u3002\u5f53\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},":e ")," \u540e\uff08\u4e0d\u8981\u5fd8\u8bb0\u7a7a\u683c\u4e86\uff09\uff0c\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>"),"\uff0cVim \u5c06\u5217\u51fa\u6240\u6709\u76f8\u5173\u7684\u6587\u4ef6\u540d\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u8fdb\u884c\u9009\u62e9\u800c\u4e0d\u5fc5\u5b8c\u6574\u7684\u8f93\u5165\u5b83\u4eec\u3002"),(0,l.kt)("h2",{id:"\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3"},"\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u67e5\u770b\u547d\u4ee4\u884c\u6307\u4ee4\u548c\u641c\u7d22\u9879\u7684\u5386\u53f2\u8bb0\u5f55\uff08\u8981\u786e\u4fdd\u5728\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"vim --version")," \u65f6\uff0cVim \u7684\u7f16\u8bd1\u9009\u9879\u4e2d\u542b\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"+cmdline_hist"),"\uff09\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":his :")," \u6765\u67e5\u770b\u547d\u4ee4\u884c\u6307\u4ee4\u7684\u5386\u53f2\u8bb0\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"##  cmd History\n2  e file1.txt\n3  g/foo/d\n4  s/foo/bar/g\n")),(0,l.kt)("p",null,"Vim \u5217\u51fa\u4e86\u60a8\u8fd0\u884c\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},":")," \u547d\u4ee4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVim \u5b58\u50a8\u6700\u540e 50 \u4e2a\u547d\u4ee4\u3002\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set history=100")," \u53ef\u4ee5\u5c06 Vim \u8bb0\u4f4f\u7684\u6761\u76ee\u603b\u6570\u66f4\u6539\u4e3a 100\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u66f4\u6709\u7528\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u547d\u4ee4\u884c\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3\uff0c\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"q:"),"\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u53ef\u641c\u7d22\u3001\u53ef\u7f16\u8f91\u7684\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3\u3002\u5047\u8bbe\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"q:"),"\u540e\u60a8\u6709\u5982\u4e0b\u7684\u8868\u8fbe\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"51  s/verylongsubstitutionpattern/pancake/g\n52  his :\n53  wq\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5f53\u524d\u4efb\u52a1\u662f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"s/verylongsubstitutionpattern/donut/g"),'\uff08"pancake"\u6362\u6210\u4e86"donut"\uff09\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u590d\u7528 ',(0,l.kt)("inlineCode",{parentName:"p"},"s/verylongsubstitutionpattern/pancake/g"),' \u5462\uff1f\u6bd5\u7adf\uff0c\u4e24\u6761\u547d\u4ee4\u552f\u4e00\u4e0d\u540c\u7684\u662f\u66ff\u6362\u7684\u5355\u8bcd\uff0c"donut" vs "pancake" \uff0c\u6240\u6709\u5176\u4ed6\u7684\u5185\u5bb9\u90fd\u662f\u76f8\u540c\u7684\u3002'),(0,l.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"q:"),"\u540e\uff0c\u5728\u5386\u53f2\u8bb0\u5f55\u4e2d\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"s/verylongsubstitutionpattern/pancake/g"),'\uff08\u5728\u8fd9\u4e2a\u73af\u5883\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Vim\u5bfc\u822a\uff09\uff0c\u7136\u540e\u76f4\u63a5\u7f16\u8f91\u5b83\uff01 \u5728\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3\u4e2d\u5c06 "pancake" \u6539\u4e3a "donut" \uff0c\u7136\u540e\u6309 ',(0,l.kt)("inlineCode",{parentName:"p"},"<Enter"),"\u3002Vim\u7acb\u523b\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"s/verylongsubstitutionpattern/donut/g")," \u547d\u4ee4\uff0c\u8d85\u7ea7\u65b9\u4fbf\uff01"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u5730\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":his /")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},":his ?")," \u53ef\u4ee5\u67e5\u770b\u641c\u7d22\u8bb0\u5f55\u3002\u8981\u60f3\u6253\u5f00\u60a8\u53ef\u4ee5\u76f4\u63a5\u641c\u7d22\u548c\u7f16\u8f91\u7684\u641c\u7d22\u5386\u53f2\u8bb0\u5f55\u7a97\u53e3\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"q/")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"q?"),"\u3002"),(0,l.kt)("p",null,"\u8981\u9000\u51fa\u8fd9\u4e2a\u7a97\u53e3\uff0c\u6309 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-c"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-w c"),", \u6216\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},":quit"),"\u3002"),(0,l.kt)("h2",{id:"\u66f4\u591a\u547d\u4ee4\u884c\u6307\u4ee4"},"\u66f4\u591a\u547d\u4ee4\u884c\u6307\u4ee4"),(0,l.kt)("p",null,"Vim\u6709\u51e0\u767e\u4e2a\u5185\u7f6e\u6307\u4ee4\uff0c\u8981\u67e5\u770bVim\u7684\u6240\u6709\u6307\u4ee4\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":h ex-cmd-index")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},":h :index"),"\u3002"),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u547d\u4ee4\u884c\u6a21\u5f0f"},"\u806a\u660e\u5730\u5b66\u4e60\u547d\u4ee4\u884c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5bf9\u6bd4\u5176\u4ed6\u4e09\u79cd\u6a21\u5f0f\uff0c\u547d\u4ee4\u884c\u6a21\u5f0f\u5c31\u50cf\u662f\u6587\u672c\u7f16\u8f91\u4e2d\u7684\u745e\u58eb\u519b\u5200\u3002\u5be5\u4e3e\u51e0\u4f8b\uff0c\u60a8\u53ef\u4ee5\u7f16\u8f91\u6587\u672c\u3001\u4fee\u6539\u6587\u4ef6\u548c\u6267\u884c\u547d\u4ee4\u3002\u672c\u7ae0\u662f\u547d\u4ee4\u884c\u6a21\u5f0f\u7684\u96f6\u788e\u77e5\u8bc6\u7684\u96c6\u5408\u3002\u540c\u65f6\uff0cVim \u6a21\u5f0f\u7684\u4ecb\u7ecd\u4e5f\u8d70\u5411\u5c3e\u58f0\u3002\u73b0\u5728\uff0c\u60a8\u5df2\u7ecf\u77e5\u9053\u5982\u4f55\u4f7f\u7528\u666e\u901a\u3001\u8f93\u5165\u3001\u53ef\u89c6\u4ee5\u53ca\u547d\u4ee4\u884c\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u6bd4\u4ee5\u5f80\u66f4\u5feb\u5730\u4f7f\u7528 Vim \u6765\u7f16\u8f91\u6587\u672c\u4e86\u3002"),(0,l.kt)("p",null,"\u662f\u65f6\u5019\u79bb\u5f00 Vim \u6a21\u5f0f\uff0c\u6765\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Vim \u6807\u8bb0\u8fdb\u884c\u66f4\u5feb\u7684\u5bfc\u822a\u4e86\u3002"))}k.isMDXComponent=!0}}]);