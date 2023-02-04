"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8107],{98757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>k});var l=n(87462),r=(n(67294),n(3905));n(16758);const a={title:"\u8f93\u5165\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},i="\u7b2c06\u7ae0 \u8f93\u5165\u6a21\u5f0f",p={unversionedId:"others/Vim/ch06_insert_mode",id:"others/Vim/ch06_insert_mode",title:"\u8f93\u5165\u6a21\u5f0f",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch06_insert_mode.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch06_insert_mode",permalink:"/docs/others/Vim/ch06_insert_mode",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Vim/ch06_insert_mode.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"2023\u5e742\u67084\u65e5",frontMatter:{title:"\u8f93\u5165\u6a21\u5f0f",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u5728\u6587\u4ef6\u4e2d\u79fb\u52a8",permalink:"/docs/others/Vim/ch05_moving_in_file"},next:{title:"\u70b9\u547d\u4ee4",permalink:"/docs/others/Vim/ch07_the_dot_command"}},o={},k=[{value:"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5",id:"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5",level:2},{value:"\u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5",id:"\u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5",level:2},{value:"\u91cd\u590d\u8f93\u5165\u6a21\u5f0f",id:"\u91cd\u590d\u8f93\u5165\u6a21\u5f0f",level:2},{value:"\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u5220\u9664\u5927\u5757\u6587\u672c",id:"\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u5220\u9664\u5927\u5757\u6587\u672c",level:2},{value:"\u7528\u5bc4\u5b58\u5668\u8fdb\u884c\u8f93\u5165",id:"\u7528\u5bc4\u5b58\u5668\u8fdb\u884c\u8f93\u5165",level:2},{value:"\u9875\u9762\u6eda\u52a8",id:"\u9875\u9762\u6eda\u52a8",level:2},{value:"\u81ea\u52a8\u8865\u5168",id:"\u81ea\u52a8\u8865\u5168",level:2},{value:"\u6267\u884c\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u547d\u4ee4",id:"\u6267\u884c\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u547d\u4ee4",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u8f93\u5165\u6a21\u5f0f",id:"\u806a\u660e\u5730\u5b66\u4e60\u8f93\u5165\u6a21\u5f0f",level:2}],d={toc:k};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7b2c06\u7ae0-\u8f93\u5165\u6a21\u5f0f"},"\u7b2c06\u7ae0 \u8f93\u5165\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8f93\u5165\u6a21\u5f0f\u662f\u5927\u90e8\u5206\u6587\u672c\u7f16\u8f91\u5668\u7684\u9ed8\u8ba4\u6a21\u5f0f\uff0c\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\uff0c\u6240\u6572\u5373\u6240\u5f97\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u8fd9\u5e76\u4e0d\u4ee3\u8868\u8f93\u5165\u6a21\u5f0f\u6ca1\u4ec0\u4e48\u597d\u5b66\u7684\u3002Vim\u7684\u8f93\u5165\u6a21\u5f0f\u5305\u542b\u8bb8\u591a\u6709\u7528\u529f\u80fd\u3002\u5728\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u4f60\u5c06\u80fd\u591f\u5b66\u5230\u5982\u4f55\u5229\u7528Vim\u8f93\u5165\u6a21\u5f0f\u4e2d\u7684\u7279\u6027\u6765\u63d0\u5347\u4f60\u7684\u8f93\u5165\u6548\u7387\u3002"),(0,r.kt)("h2",{id:"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5"},"\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,"\u6211\u4eec\u6709\u5f88\u591a\u65b9\u5f0f\u4ece\u666e\u901a\u6a21\u5f0f\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\uff0c\u4e0b\u9762\u5217\u4e3e\u51fa\u4e86\u5176\u4e2d\u7684\u4e00\u4e9b\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"i    \u4ece\u5149\u6807\u4e4b\u524d\u7684\u4f4d\u7f6e\u5f00\u59cb\u8f93\u5165\u6587\u672c\nI    \u4ece\u5f53\u524d\u884c\u7b2c\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26\u4e4b\u524d\u7684\u4f4d\u7f6e\u4e4b\u524d\u5f00\u59cb\u8f93\u5165\u6587\u672c\na    \u5728\u5149\u6807\u4e4b\u540e\u7684\u4f4d\u7f6e\u8ffd\u52a0\u6587\u672c\nA    \u5728\u5f53\u524d\u884c\u7684\u672b\u5c3e\u8ffd\u52a0\u6587\u672c\no    \u5728\u5149\u6807\u4f4d\u7f6e\u4e0b\u65b9\u65b0\u8d77\u4e00\u884c\u5e76\u5f00\u59cb\u8f93\u5165\u6587\u672c\nO    \u5728\u5149\u6807\u4f4d\u7f6e\u7684\u4e0a\u65b9\u65b0\u8d77\u4e00\u884c\u5e76\u5f00\u59cb\u8f93\u5165\u6587\u672c\ns    \u5220\u9664\u5f53\u524d\u5149\u6807\u4f4d\u7f6e\u7684\u5b57\u7b26\u5e76\u5f00\u59cb\u8f93\u5165\u6587\u672c\nS    \u5220\u9664\u5f53\u524d\u884c\u5e76\u5f00\u59cb\u8f93\u5165\u6587\u672c\ngi   \u4ece\u5f53\u524d\u7f13\u51b2\u533a\u4e0a\u6b21\u7ed3\u675f\u8f93\u5165\u6a21\u5f0f\u7684\u5730\u65b9\u5f00\u59cb\u8f93\u5165\u6587\u672c\ngI   \u5728\u5f53\u524d\u884c\u7684\u7b2c\u4e00\u5217\u7684\u4f4d\u7f6e\u5f00\u59cb\u8f93\u5165\u6587\u672c\n")),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\u8fd9\u4e9b\u547d\u4ee4\u7684\u5c0f\u5199/\u5927\u5199\u6a21\u5f0f\uff0c\u6bcf\u4e00\u4e2a\u5c0f\u5199\u547d\u4ee4\u90fd\u6709\u4e00\u4e2a\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5927\u5199\u547d\u4ee4\u3002\u5982\u679c\u4f60\u662f\u521d\u5b66\u8005\uff0c\u4e0d\u7528\u62c5\u5fc3\u8bb0\u4e0d\u4f4f\u4ee5\u4e0a\u6574\u4e2a\u547d\u4ee4\u5217\u8868\uff0c\u53ef\u4ee5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u4e24\u6761\u547d\u4ee4\u5f00\u59cb\uff0c\u8fd9\u4e24\u6761\u547d\u4ee4\u8db3\u591f\u5728\u5165\u95e8\u9636\u6bb5\u4f7f\u7528\u4e86\uff0c\u4e4b\u540e\u518d\u9010\u6e10\u5730\u638c\u63e1\u66f4\u591a\u5176\u4ed6\u7684\u547d\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5"},"\u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b\u4ece\u8f93\u5165\u6a21\u5f0f\u9000\u51fa\u5230\u666e\u901a\u6a21\u5f0f\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<esc>     \u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u8fdb\u5165\u666e\u901a\u6a21\u5f0f\nCtrl-[    \u9000\u51fa\u8f93\u5165\u6a21\u5f0f\u8fdb\u5165\u666e\u901a\u6a21\u5f0f\nCtrl-c    \u4e0e Ctrl-[ \u548c <esc>\u529f\u80fd\u76f8\u540c, \u4f46\u662f\u4e0d\u68c0\u67e5\u7f29\u5199\n")),(0,r.kt)("p",null,"\u6211\u53d1\u73b0",(0,r.kt)("inlineCode",{parentName:"p"}," esc"),"\u952e\u5728\u952e\u76d8\u4e0a\u592a\u8fdc\u4e86\uff0c\u5f88\u96be\u591f\u5230\uff0c\u6240\u4ee5\u6211\u5728\u6211\u7684\u673a\u5668\u4e0a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"}," caps lock")," \u6620\u5c04\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"esc"),"\u952e\u3002 \u5982\u679c\u4f60\u641c\u7d22Bill Joy\uff08Vi\u7684\u4f5c\u8005\uff09\u7684ADM-3A \u952e\u76d8\uff0c \u4f60\u4f1a\u53d1\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"esc"),"\u952e\u5e76\u4e0d\u662f\u50cf\u73b0\u5728\u6d41\u884c\u7684\u952e\u76d8\u5e03\u5c40\u4e00\u6837\u5728\u952e\u76d8\u7684\u6700\u5de6\u4e0a\u65b9\uff0c\u800c\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"q"),"\u952e\u7684\u5de6\u8fb9\uff0c\u6240\u4ee5\u6211\u8ba4\u4e3a\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"caps lock")," \u6620\u5c04\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"esc"),"\u952e\u662f\u5408\u7406\u7684\u3002"),(0,r.kt)("p",null,"\u53e6\u4e00\u4e2aVim\u7528\u6237\u4e2d\u5e38\u89c1\u7684\u4e60\u60ef\u662f\u7528\u4ee5\u4e0b\u7684\u914d\u7f6e\u65b9\u6cd5\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"esc"),"\u6620\u5c04\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"jj"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"jk"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"inoremap jj <esc>\ninoremap jk <esc>\n")),(0,r.kt)("h2",{id:"\u91cd\u590d\u8f93\u5165\u6a21\u5f0f"},"\u91cd\u590d\u8f93\u5165\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u4e4b\u524d\u4f20\u9012\u4e00\u4e2a\u8ba1\u6570\u53c2\u6570. \u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"10i\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8f93\u5165\u201chello world!\u201d\u7136\u540e\u9000\u51fa\u8f93\u5165\u6a21\u5f0f\uff0c Vim\u5c06\u91cd\u590d\u8fd9\u6bb5\u6587\u672c10\u6b21\u3002\u8fd9\u4e2a\u65b9\u6cd5\u5bf9\u4efb\u610f\u4e00\u79cd\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\u7684\u65b9\u5f0f\u90fd\u6709\u6548\uff08\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"10I"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"11a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"12o"),"\uff09"),(0,r.kt)("h2",{id:"\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u5220\u9664\u5927\u5757\u6587\u672c"},"\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u5220\u9664\u5927\u5757\u6587\u672c"),(0,r.kt)("p",null,"\u5f53\u4f60\u8f93\u5165\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e00\u4e9b\u8f93\u5165\u9519\u8bef\u65f6\uff0c\u4e00\u76f4\u91cd\u590d\u5730\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"backspace"),"\u6765\u5220\u9664\u7684\u8bdd\u4f1a\u975e\u5e38\u5730\u7e41\u7410\u3002\u66f4\u4e3a\u5408\u7406\u7684\u505a\u6cd5\u662f\u5207\u6362\u5230\u666e\u901a\u6a21\u5f0f\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"d"),"\u6765\u5220\u9664\u9519\u8bef\u3002\u6216\u8005\uff0c\u4f60\u80fd\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\u5c31\u5220\u9664\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5b57\u7b26\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-h    \u5220\u9664\u4e00\u4e2a\u5b57\u7b26\nCtrl-w    \u5220\u9664\u4e00\u4e2a\u5355\u8bcd\nCtrl-u    \u5220\u9664\u4e00\u6574\u884c\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8fd9\u4e9b\u5feb\u6377\u952e\u4e5f\u652f\u6301\u5728 \u547d\u4ee4\u884c\u6a21\u5f0f \u548c Ex\u6a21\u5f0f \u4e2d\u4f7f\u7528\uff08\u547d\u4ee4\u884c\u6a21\u5f0f\u548cEx\u6a21\u5f0f\u5c06\u4f1a\u5728\u4e4b\u540e\u7684\u7ae0\u8282\u4e2d\u4ecb\u7ecd\uff09"),(0,r.kt)("h2",{id:"\u7528\u5bc4\u5b58\u5668\u8fdb\u884c\u8f93\u5165"},"\u7528\u5bc4\u5b58\u5668\u8fdb\u884c\u8f93\u5165"),(0,r.kt)("p",null,"\u5bc4\u5b58\u5668\u5c31\u50cf\u662f\u5185\u5b58\u91cc\u7684\u6682\u5b58\u5668\u4e00\u6837\uff0c\u53ef\u4f9b\u5b58\u50a8\u548c\u53d6\u51fa\u6587\u672c\u3002\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528\u5feb\u6377\u952e",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-r"),"\u52a0\u4e0a\u5bc4\u5b58\u5668\u7684\u6807\u8bc6\u6765\u4ece\u4efb\u4f55\u6709\u6807\u8bc6\u7684\u5bc4\u5b58\u5668\u8f93\u5165\u6587\u672c\u3002\u6709\u5f88\u591a\u6807\u8bc6\u53ef\u4f9b\u4f7f\u7528\uff0c\u4f46\u662f\u5728\u8fd9\u4e00\u7ae0\u8282\u4e2d\u4f60\u53ea\u9700\u8981\u77e5\u9053\u4ee5\uff08a-z)\u547d\u540d\u7684\u5bc4\u5b58\u5668\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\u5c31\u8db3\u591f\u4e86\u3002"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u4e2d\u5c55\u793a\u5bc4\u5b58\u5668\u7684\u7528\u6cd5\uff0c\u9996\u5148\u4f60\u9700\u8981\u590d\u5236\u4e00\u4e2a\u5355\u8bcd\u5230\u5bc4\u5b58\u5668a\u4e2d\uff0c\u8fd9\u4e00\u6b65\u53ef\u4ee5\u7528\u4ee5\u4e0b\u8fd9\u6761\u547d\u4ee4\u6765\u5b8c\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"ayiw\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"a')," \u544a\u8bc9Vim\u4f60\u4e0b\u4e00\u4e2a\u52a8\u4f5c\u7684\u76ee\u6807\u5730\u5740\u662f\u5bc4\u5b58\u5668a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yiw")," \u590d\u5236\u4e00\u4e2a\u5185\u8bcd\uff08inner word\uff09\uff0c\u53ef\u4ee5\u56de\u987eVim\u8bed\u6cd5\u7ae0\u8282\u67e5\u770b\u5177\u4f53\u8bed\u6cd5\u3002")),(0,r.kt)("p",null,"\u73b0\u5728\u5bc4\u5b58\u5668a\u5b58\u653e\u7740\u4f60\u521a\u590d\u5236\u7684\u5355\u8bcd\u3002\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u7684\u5feb\u6377\u952e\u6765\u7c98\u8d34\u5b58\u653e\u5728\u5bc4\u5b58\u5668a\u4e2d\u6587\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-r a\n")),(0,r.kt)("p",null,"Vim\u4e2d\u5b58\u5728\u5f88\u591a\u79cd\u7c7b\u578b\u7684\u5bc4\u5b58\u5668\uff0c\u6211\u4f1a\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u4ecb\u7ecd\u66f4\u591a\u4ed6\u4eec\u7684\u7ec6\u8282\u3002"),(0,r.kt)("h2",{id:"\u9875\u9762\u6eda\u52a8"},"\u9875\u9762\u6eda\u52a8"),(0,r.kt)("p",null,"\u4f60\u77e5\u9053\u5728\u8f93\u5165\u6a21\u5f0f\u4e2d\u4e5f\u662f\u53ef\u4ee5\u8fdb\u884c\u9875\u9762\u6eda\u52a8\u7684\u5417\uff1f\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u5feb\u6377\u952e",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-x"),"\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-x"),"\u5b50\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u64cd\u4f5c\uff0c\u9875\u9762\u6eda\u52a8\u6b63\u662f\u5176\u4e2d\u4e4b\u4e00\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-x Ctrl-y    \u5411\u4e0a\u6eda\u52a8\u9875\u9762\nCtrl-x Ctrl-e    \u5411\u4e0b\u6eda\u52a8\u9875\u9762\n")),(0,r.kt)("h2",{id:"\u81ea\u52a8\u8865\u5168"},"\u81ea\u52a8\u8865\u5168"),(0,r.kt)("p",null,"Vim\u5728\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-x"),"\u5b50\u6a21\u5f0f\u540e\uff08\u548c\u9875\u9762\u6eda\u52a8\u4e00\u6837\uff09\uff0c\u6709\u4e00\u4e2a\u81ea\u5e26\u7684\u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002\u5c3d\u7ba1\u5b83\u4e0d\u5982intellisense\u6216\u8005\u5176\u4ed6\u7684\u8bed\u8a00\u670d\u52a1\u5668\u534f\u8bae\uff08LSP\uff09\u4e00\u6837\u597d\u7528\uff0c\u4f46\u662f\u4e5f\u7b97\u662f\u4e00\u4e2a\u9526\u4e0a\u6dfb\u82b1\u7684\u5185\u7f6e\u529f\u80fd\u4e86\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b\u9002\u5408\u5165\u95e8\u65f6\u5b66\u4e60\u7684\u81ea\u52a8\u8865\u5168\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-x Ctrl-l      \u8865\u5168\u4e00\u6574\u884c\nCtrl-x Ctrl-n      \u4ece\u5f53\u524d\u6587\u4ef6\u4e2d\u8865\u5168\u6587\u672c\nCtrl-x Ctrl-i      \u4ece\u5f15\u7528\uff08include\uff09\u7684\u6587\u4ef6\u4e2d\u8865\u5168\u6587\u672c\nCtrl-x Ctrl-f      \u8865\u5168\u4e00\u4e2a\u6587\u4ef6\u540d\n")),(0,r.kt)("p",null,"\u5f53\u4f60\u51fa\u53d1\u81ea\u52a8\u8865\u5168\u65f6\uff0cVim\u4f1a\u663e\u793a\u4e00\u4e2a\u9009\u9879\u5f39\u7a97\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-n"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-p"),"\u6765\u5206\u522b\u5411\u4e0a\u548c\u5411\u4e0b\u6d4f\u89c8\u9009\u9879\u3002"),(0,r.kt)("p",null,"Vim\u4e5f\u63d0\u4f9b\u4e86\u4e24\u6761\u4e0d\u9700\u8981\u8fdb\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-x"),"\u6a21\u5f0f\u5c31\u80fd\u4f7f\u7528\u7684\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-n             \u4f7f\u7528\u4e0b\u4e00\u4e2a\u5339\u914d\u7684\u5355\u8bcd\u8fdb\u884c\u8865\u5168\nCtrl-p             \u4f7f\u7528\u4e0a\u4e00\u4e2a\u5339\u914d\u7684\u5355\u8bcd\u8fdb\u884c\u8865\u5168\n")),(0,r.kt)("p",null,'\u901a\u5e38Vim\u4f1a\u5173\u6ce8\u6240\u6709\u7f13\u51b2\u533a\uff08buffer\uff09\u4e2d\u7684\u6587\u672c\u4f5c\u4e3a\u81ea\u52a8\u8865\u5168\u7684\u6587\u672c\u6765\u6e90\u3002\u5982\u679c\u4f60\u6253\u5f00\u4e86\u4e00\u4e2a\u7f13\u51b2\u533a\uff0c\u5176\u4e2d\u4e00\u884c\u662f"Chocolate donuts are the best"\uff1a'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u5f53\u4f60\u8f93\u5165"Choco"\u7136\u540e\u4f7f\u7528\u5feb\u6377\u952e',(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl-x Ctrl-l"),"\uff0c Vim\u4f1a\u8fdb\u884c\u5339\u914d\u5e76\u8f93\u51fa\u8fd9\u4e00\u6574\u884c\u7684\u6587\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},'\u5f53\u4f60\u8f93\u5165"Choco"\u7136\u540e\u4f7f\u7528\u5feb\u6377\u952e',(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl-p"),'\uff0cVim\u4f1a\u8fdb\u884c\u5339\u914d\u5e76\u8f93\u51fa"Chocolate"\u8fd9\u4e2a\u5355\u8bcd\u3002')),(0,r.kt)("p",null,"Vim\u7684\u81ea\u52a8\u8865\u5168\u662f\u4e00\u4e2a\u76f8\u5f53\u5927\u7684\u8bdd\u9898\uff0c\u4ee5\u4e0a\u53ea\u662f\u51b0\u5c71\u4e00\u89d2\uff0c\u60f3\u8981\u8fdb\u4e00\u6b65\u5b66\u4e60\u7684\u8bdd\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},":h ins-completion"),"\u547d\u4ee4\u8fdb\u884c\u67e5\u770b\u3002"),(0,r.kt)("h2",{id:"\u6267\u884c\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u547d\u4ee4"},"\u6267\u884c\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u547d\u4ee4"),(0,r.kt)("p",null,"\u4f60\u77e5\u9053Vim\u53ef\u4ee5\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\u6267\u884c\u666e\u901a\u6a21\u5f0f\u7684\u547d\u4ee4\u5417\uff1f"),(0,r.kt)("p",null,"\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\uff0c \u5982\u679c\u4f60\u6309\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-o"),"\uff0c\u4f60\u5c31\u4f1a\u8fdb\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"insert-normal"),"\uff08\u8f93\u5165-\u666e\u901a\uff09\u5b50\u6a21\u5f0f\u3002\u5982\u679c\u4f60\u5173\u6ce8\u4e00\u4e0b\u5de6\u4e0b\u89d2\u7684\u6a21\u5f0f\u6307\u793a\u5668\uff0c\u901a\u5e38\u4f60\u5c06\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"-- INSERT --")," \uff0c\u4f46\u662f\u6309\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-o"),"\u540e\u5c31\u4f1a\u53d8\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"-- (insert) --"),"\u3002 \u5728\u8fd9\u4e00\u6a21\u5f0f\u4e0b\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4e00\u6761\u666e\u901a\u6a21\u5f0f\u7684\u547d\u4ee4\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u505a\u4ee5\u4e0b\u8fd9\u4e9b\u4e8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u5c45\u4e2d\u4ee5\u53ca\u8df3\u8f6c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-o zz       \u5c45\u4e2d\u7a97\u53e3\nCtrl-o H/M/L    \u8df3\u8f6c\u5230\u7a97\u53e3\u7684\u9876\u90e8/\u4e2d\u90e8/\u5e95\u90e8\nCtrl-o 'a       \u8df3\u8f6c\u5230\u6807\u5fd7'a\u5904\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u590d\u6587\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Ctrl-o 100ihello    \u8f93\u5165 "hello" 100 \u6b21\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u7ec8\u7aef\u547d\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ctrl-o !! curl https://google.com    \u8fd0\u884ccurl\u547d\u4ee4\nCtrl-o !! pwd                        \u8fd0\u884cpwd\u547d\u4ee4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5feb\u901f\u5220\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Ctrl-o dtz    \u4ece\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\u5220\u9664\u6587\u672c\uff0c\u76f4\u5230\u9047\u5230\u5b57\u6bcd"z"\nCtrl-o D      \u4ece\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\u5220\u9664\u6587\u672c\uff0c\u76f4\u5230\u884c\u672b\n')),(0,r.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u8f93\u5165\u6a21\u5f0f"},"\u806a\u660e\u5730\u5b66\u4e60\u8f93\u5165\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u548c\u6211\u4e00\u6837\u662f\u4ece\u5176\u4ed6\u6587\u672c\u7f16\u8f91\u5668\u8f6c\u5230Vim\u7684\uff0c\u4f60\u6216\u8bb8\u4e5f\u4f1a\u89c9\u5f97\u4e00\u76f4\u5f85\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\u5f88\u6709\u8bf1\u60d1\u529b\uff0c\u4f46\u662f\u6211\u5f3a\u70c8\u53cd\u5bf9\u4f60\u5728\u6ca1\u6709\u8f93\u5165\u6587\u672c\u65f6\uff0c\u5374\u4ecd\u7136\u5f85\u5728\u8f93\u5165\u6a21\u5f0f\u4e0b\u3002\u5e94\u8be5\u517b\u6210\u5f53\u4f60\u7684\u53cc\u624b\u6ca1\u6709\u5728\u8f93\u5165\u65f6\uff0c\u5c31\u9000\u51fa\u5230\u666e\u901a\u6a21\u5f0f\u7684\u597d\u4e60\u60ef\u3002"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u8fdb\u884c\u8f93\u5165\u65f6\uff0c\u5148\u95ee\u95ee\u81ea\u5df1\u5c06\u8981\u8f93\u5165\u7684\u6587\u672c\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u3002\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff0c\u8bd5\u7740\u590d\u5236\u6216\u8005\u79fb\u52a8\u8fd9\u6bb5\u6587\u672c\u800c\u4e0d\u662f\u624b\u52a8\u8f93\u5165\u5b83\u3002\u518d\u95ee\u95ee\u81ea\u5df1\u662f\u4e0d\u662f\u975e\u5f97\u8fdb\u5165\u8f93\u5165\u6a21\u5f0f\uff0c\u8bd5\u8bd5\u80fd\u4e0d\u80fd\u5c3d\u53ef\u80fd\u5730\u4f7f\u7528\u81ea\u52a8\u8865\u5168\u6765\u8fdb\u884c\u8f93\u5165\u3002\u5c3d\u91cf\u907f\u514d\u91cd\u590d\u8f93\u5165\u540c\u4e00\u4e2a\u5355\u8bcd\u3002"))}m.isMDXComponent=!0}}]);