"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[532],{38970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>k});var l=t(87462),o=(t(67294),t(3905));t(16758);const a={title:"\u5168\u5c40\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u5168\u5c40\u547d\u4ee4",r={unversionedId:"others/Vim/ch13_the_global_command",id:"others/Vim/ch13_the_global_command",title:"\u5168\u5c40\u547d\u4ee4",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch13_the_global_command.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch13_the_global_command",permalink:"/en/docs/others/Vim/ch13_the_global_command",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch13_the_global_command.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"\u5168\u5c40\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u641c\u7d22\u548c\u66ff\u6362",permalink:"/en/docs/others/Vim/ch12_search_and_substitute"},next:{title:"\u5916\u90e8\u547d\u4ee4",permalink:"/en/docs/others/Vim/ch14_external_commands"}},i={},k=[{value:"\u5168\u5c40\u547d\u4ee4\u6982\u8ff0",id:"\u5168\u5c40\u547d\u4ee4\u6982\u8ff0",level:2},{value:"\u9006\u5411\u5339\u914d",id:"\u9006\u5411\u5339\u914d",level:2},{value:"\u6a21\u5f0f\u4e32",id:"\u6a21\u5f0f\u4e32",level:2},{value:"\u4f20\u9012\u8303\u56f4\u53c2\u6570",id:"\u4f20\u9012\u8303\u56f4\u53c2\u6570",level:2},{value:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4",id:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4",level:2},{value:"\u6267\u884c\u5b8f",id:"\u6267\u884c\u5b8f",level:2},{value:"\u9012\u5f52\u5168\u5c40\u547d\u4ee4",id:"\u9012\u5f52\u5168\u5c40\u547d\u4ee4",level:2},{value:"\u66f4\u6539\u5b9a\u754c\u7b26",id:"\u66f4\u6539\u5b9a\u754c\u7b26",level:2},{value:"\u9ed8\u8ba4\u547d\u4ee4",id:"\u9ed8\u8ba4\u547d\u4ee4",level:2},{value:"\u53cd\u8f6c\u6574\u4e2a\u7f13\u51b2\u533a",id:"\u53cd\u8f6c\u6574\u4e2a\u7f13\u51b2\u533a",level:2},{value:"\u6c47\u603b\u6240\u6709\u5f85\u529e\u4e8b\u9879",id:"\u6c47\u603b\u6240\u6709\u5f85\u529e\u4e8b\u9879",level:2},{value:"\u9ed1\u6d1e\u5220\u9664",id:"\u9ed1\u6d1e\u5220\u9664",level:2},{value:"\u5c06\u591a\u6761\u7a7a\u884c\u51cf\u5c11\u4e3a\u4e00\u6761\u7a7a\u884c",id:"\u5c06\u591a\u6761\u7a7a\u884c\u51cf\u5c11\u4e3a\u4e00\u6761\u7a7a\u884c",level:2},{value:"\u9ad8\u7ea7\u6392\u5e8f",id:"\u9ad8\u7ea7\u6392\u5e8f",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u5168\u5c40\u547d\u4ee4",id:"\u806a\u660e\u5730\u5b66\u4e60\u5168\u5c40\u547d\u4ee4",level:2}],d={toc:k};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5168\u5c40\u547d\u4ee4"},"\u5168\u5c40\u547d\u4ee4"),(0,o.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u60a8\u5df2\u7ecf\u4e86\u89e3\u4e86\u5982\u4f55\u4f7f\u7528\u70b9\u547d\u4ee4(",(0,o.kt)("inlineCode",{parentName:"p"},"."),")\u91cd\u590d\u4e0a\u4e00\u6b21\u66f4\u6539\uff0c\u5982\u4f55\u4f7f\u7528\u5b8f(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),")\u91cd\u590d\u52a8\u4f5c\u4ee5\u53ca\u5c06\u6587\u672c\u5b58\u50a8\u5728\u5bc4\u5b58\u5668\u4e2d(",(0,o.kt)("inlineCode",{parentName:"p"},'"'),")\u3002"),(0,o.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5728\u5168\u5c40\u547d\u4ee4\u4e2d\u91cd\u590d\u547d\u4ee4\u884c\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u5168\u5c40\u547d\u4ee4\u6982\u8ff0"},"\u5168\u5c40\u547d\u4ee4\u6982\u8ff0"),(0,o.kt)("p",null,"Vim\u7684\u5168\u5c40\u547d\u4ee4\u7528\u4e8e\u540c\u65f6\u5728\u591a\u884c\u4e0a\u8fd0\u884c\u547d\u4ee4\u884c\u547d\u4ee4\u3002"),(0,o.kt)("p",null,'\u987a\u4fbf\u8bf4\u4e00\u53e5\uff0c\u60a8\u4e4b\u524d\u53ef\u80fd\u5df2\u7ecf\u542c\u8bf4\u8fc7 "Ex\u547d\u4ee4" \u4e00\u8bcd\u3002\u5728\u672c\u4e66\u4e2d\uff0c\u6211\u5c06\u5b83\u4eec\u79f0\u4e3a\u547d\u4ee4\u884c\u547d\u4ee4\uff0c\u4f46Ex\u547d\u4ee4\u548c\u547d\u4ee4\u884c\u547d\u4ee4\u662f\u76f8\u540c\u7684\u3002\u5b83\u4eec\u662f\u4ee5\u5192\u53f7\uff08',(0,o.kt)("inlineCode",{parentName:"p"},":"),"\uff09\u5f00\u5934\u7684\u547d\u4ee4\u3002\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u60a8\u4e86\u89e3\u4e86\u66ff\u4ee3\u547d\u4ee4\u3002\u8fd9\u662f\u4e00\u4e2aEx\u547d\u4ee4\u7684\u793a\u4f8b\u3002\u5b83\u4eec\u4e4b\u6240\u4ee5\u79f0\u4e3aEx\uff0c\u662f\u56e0\u4e3a\u5b83\u4eec\u6700\u521d\u6765\u81eaEx\u6587\u672c\u7f16\u8f91\u5668\u3002\u5728\u672c\u4e66\u4e2d\uff0c\u6211\u5c06\u7ee7\u7eed\u5c06\u5b83\u4eec\u79f0\u4e3a\u547d\u4ee4\u884c\u547d\u4ee4\u3002\u6709\u5173Ex\u547d\u4ee4\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},":h ex-cmd-index"),"\u3002"),(0,o.kt)("p",null,"\u5168\u5c40\u547d\u4ee4\u5177\u6709\u4ee5\u4e0b\u8bed\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/pattern/command\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),"\u5339\u914d\u5305\u542b\u8be5\u6a21\u5f0f\u4e32\u7684\u6240\u6709\u884c\uff0c\u7c7b\u4f3c\u4e8e\u66ff\u4ee3\u547d\u4ee4\u4e2d\u7684\u6a21\u5f0f\u4e32\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"command"),"\u53ef\u4ee5\u662f\u4efb\u4f55\u547d\u4ee4\u884c\u547d\u4ee4\u3002\u5168\u5c40\u547d\u4ee4\u901a\u8fc7\u5bf9\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"pattern"),"\u5339\u914d\u7684\u6bcf\u4e00\u884c\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"command"),"\u6765\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,'\u8981\u5220\u9664\u6240\u6709\u5305\u542b"console"\u7684\u884c\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/console/d\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const one = 1;\n\nconst two = 2;\n\nconst three = 3;\n")),(0,o.kt)("p",null,'\u5168\u5c40\u547d\u4ee4\u5728\u4e0e"console"\u6a21\u5f0f\u4e32\u5339\u914d\u7684\u6240\u6709\u884c\u4e0a\u6267\u884c\u5220\u9664\u547d\u4ee4(',(0,o.kt)("inlineCode",{parentName:"p"},"d"),")\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"g"),"\u547d\u4ee4\u65f6\uff0cVim\u5bf9\u6587\u4ef6\u8fdb\u884c\u4e24\u6b21\u626b\u63cf\u3002\u5728\u7b2c\u4e00\u6b21\u8fd0\u884c\u65f6\uff0c\u5b83\u5c06\u626b\u63cf\u6bcf\u884c\u5e76\u6807\u8bb0\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"/console/"),"\u6a21\u5f0f\u4f20\u6559\u5339\u914d\u7684\u884c\u3002\u4e00\u65e6\u6240\u6709\u5339\u914d\u7684\u884c\u90fd\u88ab\u6807\u8bb0\uff0c\u5b83\u5c06\u8fdb\u884c\u7b2c\u4e8c\u6b21\u8fd0\u884c\uff0c\u5e76\u5728\u6807\u8bb0\u7684\u884c\u4e0a\u6267\u884cd\u547d\u4ee4\u3002"),(0,o.kt)("p",null,'\u5982\u679c\u8981\u5220\u9664\u6240\u6709\u5305\u542b"const"\u7684\u884c\uff0c\u8bf7\u8fd0\u884c\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/const/d\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'console.log("one: ", one);\n\nconsole.log("two: ", two);\n\nconsole.log("three: ", three);\n')),(0,o.kt)("h2",{id:"\u9006\u5411\u5339\u914d"},"\u9006\u5411\u5339\u914d"),(0,o.kt)("p",null,"\u8981\u5728\u4e0d\u5339\u914d\u7684\u884c\u4e0a\u8fd0\u884c\u5168\u5c40\u547d\u4ee4\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g!/{pattern}/{command}\n")),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":v/{pattern}/{command}\n")),(0,o.kt)("p",null,"\u5982\u679c\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},":v/console/d"),"\uff0c\u5b83\u5c06\u5220\u9664 ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d"),' \u5305\u542b"console"\u7684\u6240\u6709\u884c\u3002'),(0,o.kt)("h2",{id:"\u6a21\u5f0f\u4e32"},"\u6a21\u5f0f\u4e32"),(0,o.kt)("p",null,"\u5168\u5c40\u547d\u4ee4\u4f7f\u7528\u4e0e\u66ff\u4ee3\u547d\u4ee4\u76f8\u540c\u7684\u6a21\u5f0f\u4e32\u7cfb\u7edf\uff0c\u56e0\u6b64\u672c\u8282\u5c06\u4f5c\u4e3a\u66f4\u65b0\u3002\u968f\u610f\u8df3\u5230\u4e0b\u4e00\u90e8\u5206\u6216\u7ee7\u7eed\u9605\u8bfb\uff01"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,'\u8981\u5220\u9664\u5305\u542b"one"\u6216"two"\u7684\u884c\uff0c\u8bf7\u8fd0\u884c\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/one\\|two/d\n")),(0,o.kt)("p",null,"\u8981\u5220\u9664\u5305\u542b\u4efb\u4f55\u4e00\u4f4d\u6570\u5b57\u7684\u884c\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u4efb\u4e00\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/[0-9]/d\n")),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/\\d/d\n")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const oneMillion = 1000000;\nconst oneThousand = 1000;\nconst one = 1;\n")),(0,o.kt)("p",null,"\u8981\u5339\u914d\u5305\u542b\u4e09\u5230\u516d\u4e2a\u96f6\u7684\u884c\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/0\\{3,6\\}/d\n")),(0,o.kt)("h2",{id:"\u4f20\u9012\u8303\u56f4\u53c2\u6570"},"\u4f20\u9012\u8303\u56f4\u53c2\u6570"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"g"),"\u547d\u4ee4\u4e4b\u524d\u4f20\u9012\u4e00\u4e2a\u8303\u56f4\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u6765\u505a\u5230\u8fd9\u4e00\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":1,5/g/console/d"),'  \u5220\u9664\u7b2c1\u884c\u548c\u7b2c5\u884c\u4e4b\u95f4\u5339\u914d\u5b57\u7b26\u4e32"console"\u7684\u884c\u3002'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":,5/g/console/d"),' \u5982\u679c\u9017\u53f7\u524d\u6ca1\u6709\u5730\u5740\uff0c\u5219\u4ece\u5f53\u524d\u884c\u5f00\u59cb\u3002\u5b83\u5728\u5f53\u524d\u884c\u548c\u7b2c5\u884c\u4e4b\u95f4\u5bfb\u627e\u5b57\u7b26\u4e32"console"\u5e76\u5c06\u8be5\u884c\u5220\u9664\u3002'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":3,/g/console/d"),' \u5982\u679c\u9017\u53f7\u540e\u6ca1\u6709\u5730\u5740\uff0c\u5219\u5728\u5f53\u524d\u884c\u7ed3\u675f\u3002\u5b83\u5728\u7b2c3\u884c\u548c\u5f53\u524d\u884c\u4e4b\u95f4\u5bfb\u627e\u5b57\u7b26\u4e32"console"\u5e76\u5c06\u8be5\u884c\u5220\u9664\u3002'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":3g/console/d"),' \u5982\u679c\u53ea\u4f20\u9012\u4e00\u4e2a\u5730\u5740\u800c\u4e0d\u5e26\u9017\u53f7\uff0c\u5219\u4ec5\u5728\u7b2c3\u884c\u6267\u884c\u547d\u4ee4\u3002\u5728\u7b2c3\u884c\u67e5\u627e\uff0c\u5982\u679c\u5305\u542b\u5b57\u7b26\u4e32"console"\uff0c\u5219\u5c06\u5176\u5220\u9664\u3002')),(0,o.kt)("p",null,"\u9664\u4e86\u6570\u5b57\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u7b26\u53f7\u7528\u4f5c\u8303\u56f4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".")," \u8868\u793a\u5f53\u524d\u884c\u3002\u8303\u56f4",(0,o.kt)("inlineCode",{parentName:"li"},".,3"),"\u8868\u793a\u5f53\u524d\u884c\u548c\u7b2c3\u884c\u4e4b\u95f4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$")," \u8868\u793a\u6587\u4ef6\u7684\u6700\u540e\u4e00\u884c\u3002 ",(0,o.kt)("inlineCode",{parentName:"li"},"3,$"),"\u8303\u56f4\u8868\u793a\u5728\u7b2c3\u884c\u548c\u6700\u540e\u4e00\u884c\u4e4b\u95f4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+n")," \u8868\u793a\u5f53\u524d\u884c\u4e4b\u540e\u7684n\u884c\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u4e0e",(0,o.kt)("inlineCode",{parentName:"li"},"."),"\u7ed3\u5408\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u7ed3\u5408\u4f7f\u7528\u3002  ",(0,o.kt)("inlineCode",{parentName:"li"},"3,+1"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"3,.+1"),"\u8868\u793a\u5728\u7b2c3\u884c\u548c\u5f53\u524d\u884c\u4e4b\u540e\u7684\u884c\u4e4b\u95f4\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u7ed9\u5b83\u4efb\u4f55\u8303\u56f4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u5c06\u5f71\u54cd\u6574\u4e2a\u6587\u4ef6\u3002\u8fd9\u5b9e\u9645\u4e0a\u4e0d\u662f\u5e38\u6001\u3002\u5982\u679c\u60a8\u4e0d\u4f20\u9012\u4efb\u4f55\u8303\u56f4\uff0cVim\u7684\u5927\u591a\u6570\u547d\u4ee4\u884c\u547d\u4ee4\u4ec5\u5728\u5f53\u524d\u884c\u4e0a\u8fd0\u884c(\u4e24\u4e2a\u503c\u5f97\u6ce8\u610f\u7684\u4f8b\u5916\u662f\uff1a\u8fd9\u91cc\u4ecb\u7ecd\u7684\u5168\u5c40\u547d\u4ee4(",(0,o.kt)("inlineCode",{parentName:"p"},":g"),")\u548csave(",(0,o.kt)("inlineCode",{parentName:"p"},":w"),")\u547d\u4ee4)\u3002"),(0,o.kt)("h2",{id:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4"},"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u5168\u5c40\u547d\u4ee4\u548c",(0,o.kt)("inlineCode",{parentName:"p"},":normal"),"\u547d\u4ee4\u884c\u547d\u4ee4\u4e00\u8d77\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u6587\u5b57\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1\nconsole.log("one: ", one)\n\nconst two = 2\nconsole.log("two: ", two)\n\nconst three = 3\nconsole.log("three: ", three)\n\n')),(0,o.kt)("p",null,'\u8981\u6dfb\u52a0";"\u8fd0\u884c\u5230\u6bcf\u4e00\u884c\u7684\u672b\u5c3e\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/./normal A;\n")),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u5206\u89e3\u4e00\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":g")," \u662f\u5168\u5c40\u547d\u4ee4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/./")," \u662f\u201c\u975e\u7a7a\u884c\u201d\u7684\u6a21\u5f0f\u3002\u5b83\u5339\u914d\u81f3\u5c11\u5305\u542b1\u4e2a\u5b57\u7b26\u7684\u884c\u3002\u56e0\u6b64\u5c06\u4e0e\u5305\u542b\u201cconst\u201d\u548c\u201cconsole\u201d\u7684\u884c\u5339\u914d\u3002\u5b83\u4e0d\u5339\u914d\u7a7a\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal A;")," \u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},":normal"),"\u547d\u4ee4\u884c\u547d\u4ee4\u3002 ",(0,o.kt)("inlineCode",{parentName:"li"},"A;"),' \u662f\u666e\u901a\u6a21\u5f0f\u547d\u4ee4\uff0c\u7528\u4e8e\u5728\u8be5\u884c\u7684\u672b\u5c3e\u63d2\u5165";"\u3002')),(0,o.kt)("h2",{id:"\u6267\u884c\u5b8f"},"\u6267\u884c\u5b8f"),(0,o.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5168\u5c40\u547d\u4ee4\u6267\u884c\u5b8f\u3002\u5b8f\u53ea\u662f\u666e\u901a\u6a21\u5f0f\u4e0b\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},":normal"),"\u6765\u6267\u884c\u5b8f\u3002\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1\nconsole.log("one: ", one);\n\nconst two = 2\nconsole.log("two: ", two);\n\nconst three = 3\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,'\u8bf7\u6ce8\u610f\uff0c\u5e26\u6709"const"\u7684\u884c\u6ca1\u6709\u5206\u53f7\u3002\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5b8f\uff0c\u4ee5\u5728\u5bc4\u5b58\u5668"a"\u7684\u8fd9\u4e9b\u884c\u7684\u672b\u5c3e\u6dfb\u52a0\u9017\u53f7\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"qa0A;<esc>q\n")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u590d\u4e60\uff0c\u8bf7\u67e5\u770b\u6709\u5173\u5b8f\u7684\u7ae0\u8282\u3002\u73b0\u5728\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/const/normal @a\n")),(0,o.kt)("p",null,'\u73b0\u5728\uff0c\u6240\u6709\u5e26\u6709"const"\u7684\u884c\u7684\u672b\u5c3e\u5c06\u5e26\u6709";"\u3002'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4e00\u6b65\u4e00\u6b65\u6309\u7167\u793a\u4f8b\u505a\uff0c\u60a8\u5c06\u4f1a\u5728\u7b2c\u4e00\u884c\u672b\u5c3e\u770b\u5230\u4e24\u4e2a\u5206\u53f7\u3002\u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f7f\u7528\u5168\u5c40\u547d\u4ee4\u65f6\uff0c\u7ed9\u4e00\u4e2a\u8303\u56f4\u53c2\u6570\uff0c\u4ece\u7b2c2\u884c\u5230\u6700\u540e\u4e00\u884c, ",(0,o.kt)("inlineCode",{parentName:"p"},":2,$g/const/normal @a"),"\u3002"),(0,o.kt)("h2",{id:"\u9012\u5f52\u5168\u5c40\u547d\u4ee4"},"\u9012\u5f52\u5168\u5c40\u547d\u4ee4"),(0,o.kt)("p",null,"\u5168\u5c40\u547d\u4ee4\u672c\u8eab\u662f\u547d\u4ee4\u884c\u547d\u4ee4\u7684\u4e00\u79cd\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4ece\u6280\u672f\u4e0a\u5728\u5168\u5c40\u547d\u4ee4\u4e2d\u8fd0\u884c\u5168\u5c40\u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/console/g/two/d\n")),(0,o.kt)("p",null,"\u9996\u5148\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"g"),'\u5c06\u67e5\u627e\u5305\u542b\u6a21\u5f0f"console"\u7684\u884c\uff0c\u5e76\u627e\u52303\u4e2a\u5339\u914d\u9879\u3002\u7136\u540e\uff0c\u7b2c\u4e8c\u4e2a"g"\u5c06\u4ece\u90a3\u4e09\u4e2a\u5339\u914d\u9879\u4e2d\u67e5\u627e\u5305\u542b\u6a21\u5f0f"two"\u7684\u884c\u3002\u6700\u540e\uff0c\u5b83\u5c06\u5220\u9664\u8be5\u5339\u914d\u9879\u3002'),(0,o.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"g"),"\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"v"),"\u7ed3\u5408\u4f7f\u7528\u4ee5\u627e\u5230\u6b63\u8d1f\u6a21\u5f0f\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/console/v/two/d\n")),(0,o.kt)("p",null,"\u4e0e\u524d\u9762\u7684\u547d\u4ee4\u4e0d\u540c\uff0c\u5b83\u5c06\u67e5\u627e ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d"),' \u5305\u542b"two"\u7684\u884c\u3002'),(0,o.kt)("h2",{id:"\u66f4\u6539\u5b9a\u754c\u7b26"},"\u66f4\u6539\u5b9a\u754c\u7b26"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u50cf\u66ff\u4ee3\u547d\u4ee4\u4e00\u6837\u66f4\u6539\u5168\u5c40\u547d\u4ee4\u7684\u5b9a\u754c\u7b26\u3002\u89c4\u5219\u662f\u76f8\u540c\u7684\uff1a\u60a8\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5355\u5b57\u8282\u5b57\u7b26\uff0c\u4f46\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"|"),", \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"\\"),"\u9664\u5916\u3002"),(0,o.kt)("p",null,'\u8981\u5220\u9664\u5305\u542b"console"\u7684\u884c\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g@console@d\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u5168\u5c40\u547d\u4ee4\u4e2d\u4f7f\u7528\u66ff\u4ee3\u547d\u4ee4\uff0c\u5219\u53ef\u4ee5\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u5b9a\u754c\u7b26\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"g@one@s+const+let+g\n")),(0,o.kt)("p",null,'\u6b64\u5904\uff0c\u5168\u5c40\u547d\u4ee4\u5c06\u67e5\u627e\u5305\u542b"one"\u7684\u6240\u6709\u884c\u3002 \u66ff\u6362\u547d\u4ee4\u5c06\u4ece\u8fd9\u4e9b\u5339\u914d\u9879\u4e2d\u5c06\u5b57\u7b26\u4e32"const"\u66ff\u6362\u4e3a"let"\u3002'),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u547d\u4ee4"},"\u9ed8\u8ba4\u547d\u4ee4"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u5168\u5c40\u547d\u4ee4\u4e2d\u672a\u6307\u5b9a\u4efb\u4f55\u547d\u4ee4\u884c\u547d\u4ee4\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u5168\u5c40\u547d\u4ee4\u5c06\u4f7f\u7528\u6253\u5370(",(0,o.kt)("inlineCode",{parentName:"p"},":p"),")\u547d\u4ee4\u6765\u6253\u5370\u5f53\u524d\u884c\u7684\u6587\u672c\u3002\u5982\u679c\u60a8\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/console\n")),(0,o.kt)("p",null,'\u5b83\u5c06\u5728\u5c4f\u5e55\u5e95\u90e8\u6253\u5370\u6240\u6709\u5305\u542b"console"\u7684\u884c\u3002'),(0,o.kt)("p",null,"\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u8fd9\u662f\u4e00\u4e2a\u6709\u8da3\u7684\u4e8b\u5b9e\u3002\u56e0\u4e3a\u5168\u5c40\u547d\u4ee4\u4f7f\u7528\u7684\u9ed8\u8ba4\u547d\u4ee4\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"p"),"\uff0c\u6240\u4ee5\u8fd9\u4f7f",(0,o.kt)("inlineCode",{parentName:"p"},"g"),"\u8bed\u6cd5\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/re/p\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"g")," = \u5168\u5c40\u547d\u4ee4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"re")," = \u6b63\u5219\u8868\u8fbe\u5f0f\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p")," = \u6253\u5370\u547d\u4ee4")),(0,o.kt)("p",null,"\u8fd9\u4e09\u4e2a\u5143\u7d20\u8fde\u8d77\u6765\u62fc\u5199\u4e3a ",(0,o.kt)("strong",{parentName:"p"},'"grep"'),"\uff0c\u4e0e\u547d\u4ee4\u884c\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," \u76f8\u540c\u3002\u4f46\u8fd9 ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d")," \u662f\u5de7\u5408\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"g/re/p"),"\u547d\u4ee4\u6700\u521d\u6765\u81eaEd\u7f16\u8f91\u5668\uff08\u4e00\u4e2a\u884c\u6587\u672c\u7f16\u8f91\u5668\uff09\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),"\u547d\u4ee4\u7684\u540d\u79f0\u6765\u81eaEd\u3002"),(0,o.kt)("p",null,"\u60a8\u7684\u8ba1\u7b97\u673a\u53ef\u80fd\u4ecd\u5177\u6709Ed\u7f16\u8f91\u5668\u3002\u4ece\u7ec8\u7aef\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"ed"),"\uff08\u63d0\u793a\uff1a\u8981\u9000\u51fa\uff0c\u8bf7\u952e\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"q"),"\uff09\u3002"),(0,o.kt)("h2",{id:"\u53cd\u8f6c\u6574\u4e2a\u7f13\u51b2\u533a"},"\u53cd\u8f6c\u6574\u4e2a\u7f13\u51b2\u533a"),(0,o.kt)("p",null,"\u8981\u7ffb\u8f6c\u6574\u4e2a\u6587\u4ef6\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/^/m 0 \n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"^"),"\u8868\u793a\u884c\u7684\u5f00\u59cb\u3002\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"^"),"\u5339\u914d\u6240\u6709\u884c\uff0c\u5305\u62ec\u7a7a\u884c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u9700\u8981\u53cd\u8f6c\u51e0\u884c\uff0c\u8bf7\u5c06\u5176\u4f20\u9012\u4e00\u4e2a\u8303\u56f4\u3002\u8981\u5c06\u7b2c5\u884c\u5230\u7b2c10\u884c\u4e4b\u95f4\u7684\u884c\u53cd\u8f6c\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":5,10g/^/m 0\n")),(0,o.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173move\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},":h :move"),"\u3002"),(0,o.kt)("h2",{id:"\u6c47\u603b\u6240\u6709\u5f85\u529e\u4e8b\u9879"},"\u6c47\u603b\u6240\u6709\u5f85\u529e\u4e8b\u9879"),(0,o.kt)("p",null,"\u5f53\u6211\u7f16\u7801\u65f6\uff0c\u6709\u65f6\u6211\u4f1a\u60f3\u5230\u4e00\u4e2a\u968f\u673a\u7684\u7edd\u5999\u4e3b\u610f\u3002\u4e0d\u60f3\u5931\u53bb\u4e13\u6ce8\uff0c\u6211\u901a\u5e38\u5c06\u5b83\u4eec\u5199\u5728\u6211\u6b63\u5728\u7f16\u8f91\u7684\u6587\u4ef6\u4e2d\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n// TODO: \u5582\u5c0f\u72d7\n\nconst two = 2;\n// TODO\uff1a\u81ea\u52a8\u5582\u5c0f\u72d7\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n// TODO\uff1a\u521b\u5efa\u4e00\u5bb6\u9500\u552e\u81ea\u52a8\u5c0f\u72d7\u5582\u98df\u5668\u7684\u521d\u521b\u516c\u53f8\n')),(0,o.kt)("p",null,"\u8ddf\u8e2a\u6240\u6709\u5df2\u521b\u5efa\u7684TODO\u53ef\u80fd\u5f88\u56f0\u96be\u3002 Vim\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},":t"),"\uff08copy\uff09\u65b9\u6cd5\u6765\u5c06\u6240\u6709\u5339\u914d\u9879\u590d\u5236\u5230\u4e00\u4e2a\u5730\u5740\u3002\u8981\u4e86\u89e3\u6709\u5173\u590d\u5236\u65b9\u6cd5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},":h :copy"),"\u3002"),(0,o.kt)("p",null,"\u8981\u5c06\u6240\u6709TODO\u590d\u5236\u5230\u6587\u4ef6\u672b\u5c3e\u4ee5\u4fbf\u4e8e\u81ea\u7701\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/TODO/t $\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n// TODO\uff1a\u5582\u5c0f\u72d7\n\nconst two = 2;\n// TODO\uff1a\u81ea\u52a8\u5582\u5c0f\u72d7\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n// TODO\uff1a\u521b\u5efa\u4e00\u5bb6\u9500\u552e\u81ea\u52a8\u5c0f\u72d7\u5582\u98df\u5668\u7684\u521d\u521b\u516c\u53f8\n\n// TODO\uff1a\u5582\u5c0f\u72d7\n// TODO\uff1a\u81ea\u52a8\u5582\u5c0f\u72d7\n// TODO\uff1a\u521b\u5efa\u4e00\u5bb6\u9500\u552e\u81ea\u52a8\u5c0f\u72d7\u5582\u98df\u5668\u7684\u521d\u521b\u516c\u53f8\n')),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u53ef\u4ee5\u67e5\u770b\u6211\u521b\u5efa\u7684\u6240\u6709TODO\uff0c\u53e6\u5916\u627e\u4e2a\u65f6\u95f4\u6765\u5b8c\u6210\u5b83\u4eec\uff0c\u6216\u5c06\u5b83\u4eec\u59d4\u6258\u7ed9\u5176\u4ed6\u4eba\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u590d\u5236\uff0c\u800c\u662f\u5c06\u6240\u6709\u7684 TODO \u79fb\u52a8\u5230\u672b\u5c3e\uff0c\u53ef\u4ee5\u4f7f\u7528\u79fb\u52a8\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"m"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/TODO/m $\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n\n// TODO\uff1a\u5582\u5c0f\u72d7\n// TODO\uff1a\u81ea\u52a8\u5582\u5c0f\u72d7\n// TODO\uff1a\u521b\u5efa\u4e00\u5bb6\u9500\u552e\u81ea\u52a8\u5c0f\u72d7\u5582\u98df\u5668\u7684\u521d\u521b\u516c\u53f8\n')),(0,o.kt)("h2",{id:"\u9ed1\u6d1e\u5220\u9664"},"\u9ed1\u6d1e\u5220\u9664"),(0,o.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\u5bc4\u5b58\u5668\u90a3\u4e00\u7ae0\uff0c\u5df2\u5220\u9664\u7684\u6587\u672c\u5b58\u50a8\u5728\u7f16\u53f7\u5bc4\u5b58\u5668\u4e2d\uff08\u5141\u8bb8\u5b83\u4eec\u8db3\u591f\u5927\uff09\u3002\u6bcf\u5f53\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},":g/console/d"),"\u65f6\uff0cVim\u90fd\u4f1a\u5c06\u5220\u9664\u7684\u884c\u5b58\u50a8\u5728\u7f16\u53f7\u5bc4\u5b58\u5668\u4e2d\u3002\u5982\u679c\u5220\u9664\u591a\u884c\uff0c\u6240\u6709\u7f16\u53f7\u7684\u5bc4\u5b58\u5668\u5c06\u5f88\u5feb\u88ab\u586b\u6ee1\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u9ed1\u6d1e\u5bc4\u5b58\u5668\uff08",(0,o.kt)("inlineCode",{parentName:"p"},'"_'),"\uff09 ",(0,o.kt)("strong",{parentName:"p"},"\u4e0d")," \u5c06\u5220\u9664\u7684\u884c\u5b58\u50a8\u5230\u5bc4\u5b58\u5668\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/console/d _\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"d"),"\u4e4b\u540e\u4f20\u9012",(0,o.kt)("inlineCode",{parentName:"p"},"_"),"\uff0cVim\u4e0d\u4f1a\u5c06\u5220\u9664\u7684\u884c\u4fdd\u5b58\u5230\u4efb\u4f55\u5bc4\u5b58\u5668\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u5c06\u591a\u6761\u7a7a\u884c\u51cf\u5c11\u4e3a\u4e00\u6761\u7a7a\u884c"},"\u5c06\u591a\u6761\u7a7a\u884c\u51cf\u5c11\u4e3a\u4e00\u6761\u7a7a\u884c"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u7684\u6587\u4ef6\u5e26\u6709\u591a\u4e2a\u7a7a\u884c\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\n\nconst two = 2;\nconsole.log("two: ", two);\n\n\n\n\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5feb\u901f\u5c06\u591a\u4e2a\u7a7a\u884c\u51cf\u5c11\u4e3a\u4e00\u6761\u7a7a\u884c\u3002\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/^$/,/./-1j\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\n\nconst two = 2;\nconsole.log("two: ", two);\n\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5168\u5c40\u547d\u4ee4\u9075\u5faa\u4e0b\u5217\u683c\u5f0f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},":g/pattern/command"),"\u3002\u4f46\u662f\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u683c\u5f0f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},":g/pattern1/,/pattern2/command"),"\u3002\u7528\u8fd9\u79cd\u683c\u5f0f\uff0cVim\u5c06\u4f1a\u4f7f",(0,o.kt)("inlineCode",{parentName:"p"},"command"),"\u4f5c\u7528\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"pattern1"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"pattern2"),"\u4e0a\u3002"),(0,o.kt)("p",null,"\u8bb0\u4f4f\u4e0a\u9762\u8bf4\u7684\u683c\u5f0f\uff0c\u8ba9\u6211\u4eec\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},":g/pattern1/,/pattern2/command"),"\u8fd9\u4e2a\u683c\u5f0f\u5206\u89e3\u4e00\u4e0b\u547d\u4ee4",(0,o.kt)("inlineCode",{parentName:"p"},":g/^$/,/./-1j"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/pattern1/")," \u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"/^$/")," \u3002\u5b83\u8868\u793a\u4e00\u4e2a\u7a7a\u884c\uff08\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u5b57\u7b26\u7684\u884c\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/pattern2/")," \u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"/./"),"\uff08\u7528-1\u4f5c\u4e3a\u884c\u4fee\u6b63\uff09\u3002",(0,o.kt)("inlineCode",{parentName:"li"},"/./"),"\u8868\u793a\u4e00\u4e2a\u975e\u7a7a\u884c\uff08\u4e00\u4e2a\u542b\u6709\u81f3\u5c111\u4e2a\u5b57\u7b26\u7684\u884c\uff09\u3002\u8fd9\u91cc\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," \u610f\u601d\u662f\u5411\u4e0a\u504f\u79fb1\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"command")," \u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"j"),"\uff0c\u4e00\u4e2a\u8054\u63a5\u547d\u4ee4(",(0,o.kt)("inlineCode",{parentName:"li"},":j"),")\u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u8be5\u5168\u5c40\u547d\u4ee4\u8054\u63a5\u6240\u6709\u7ed9\u5b9a\u7684\u884c\u3002")),(0,o.kt)("p",null,"\u987a\u4fbf\u8bf4\u4e00\u53e5\uff0c\u5982\u679c\u60a8\u60f3\u8981\u5c06\u591a\u4e2a\u7a7a\u884c\u5168\u90e8\u5220\u53bb\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/^$/,/./j\n")),(0,o.kt)("p",null,"\u6216\u8005\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/^$/-j\n")),(0,o.kt)("p",null,"\u60a8\u7684\u6587\u672c\u5c06\u4f1a\u51cf\u5c11\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const one = 1;\nconsole.log("one: ", one);\nconst two = 2;\nconsole.log("two: ", two);\nconst three = 3;\nconsole.log("three: ", three);\n')),(0,o.kt)("p",null,"\uff08\u8bd1\u8005\u8865\u5145\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"\u8fde\u63a5\u547d\u4ee4\u7684\u683c\u5f0f\u662f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},":[range]j"),"\u3002\u6bd4\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},":1,5j"),"\u5c06\u8fde\u63a5\u7b2c1\u81f35\u884c\u3002\u5728\u524d\u9762\u7684\u547d\u4ee4\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},":g/pattern1/,/pattern2/-1j"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"/pattern1/"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"/pattern2"),"\u90fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"\u547d\u4ee4\u7684\u8303\u56f4\u53c2\u6570\uff0c\u8868\u793a\u8fde\u63a5\u7a7a\u884c\u81f3\u975e\u7a7a\u884c\u4e0a\u65b9\u4e00\u884c\uff0c\u8fd9\u6837\u5c31\u4f1a\u4fdd\u75591\u4e2a\u7a7a\u884c\u3002\u5728\u65e9\u524d\u7684\u82f1\u6587\u7248\u672c\u4e2d\u6709\u5173\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"\u547d\u4ee4\u7684\u4ecb\u7ecd\uff0c\u4e0d\u77e5\u4e3a\u4f55\u5728\u540e\u9762\u7684\u66f4\u65b0\u4e2d\uff0c\u539f\u4f5c\u8005\u5220\u9664\u4e86\u5173\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"j"),"\u547d\u4ee4\u7684\u4ecb\u7ecd\uff09"),(0,o.kt)("h2",{id:"\u9ad8\u7ea7\u6392\u5e8f"},"\u9ad8\u7ea7\u6392\u5e8f"),(0,o.kt)("p",null,"Vim\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},":sort"),"\u547d\u4ee4\u6765\u5bf9\u4e00\u4e2a\u8303\u56f4\u5185\u7684\u884c\u8fdb\u884c\u6392\u5e8f\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"d\nb\na\ne\nc\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},":sort"),"\u5bf9\u5b83\u4eec\u8fdb\u884c\u6392\u5e8f\u3002\u5982\u679c\u7ed9\u5b83\u4e00\u4e2a\u8303\u56f4\uff0c\u5b83\u5c06\u53ea\u5bf9\u8be5\u8303\u56f4\u5185\u7684\u884c\u8fdb\u884c\u6392\u5e8f\u3002\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},":3,5sort"),"\u4ec5\u5728\u7b2c\u4e09\u548c\u7b2c\u4e94\u884c\u4e4b\u95f4\u6392\u5e8f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const arrayB = [\n  "i",\n  "g",\n  "h",\n  "b",\n  "f",\n  "d",\n  "e",\n  "c",\n  "a",\n]\n\nconst arrayA = [\n  "h",\n  "b",\n  "f",\n  "d",\n  "e",\n  "a",\n  "c",\n]\n')),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u6570\u7ec4\u672c\u8eab\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":g/\\[/+1,/\\]/-1sort\n")),(0,o.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const arrayB = [\n  "a",\n  "b",\n  "c",\n  "d",\n  "e",\n  "f",\n  "g",\n  "h",\n  "i",\n]\n\nconst arrayA = [\n  "a"\n  "b",\n  "c",\n  "d",\n  "e",\n  "f",\n  "h",\n]\n')),(0,o.kt)("p",null,"\u8fd9\u5f88\u68d2\uff01\u4f46\u662f\u547d\u4ee4\u770b\u8d77\u6765\u5f88\u590d\u6742\u3002\u8ba9\u6211\u4eec\u5206\u89e3\u4e00\u4e0b\u3002\u8be5\u547d\u4ee4\u4f9d\u7136\u9075\u5faa ",(0,o.kt)("inlineCode",{parentName:"p"},":g/pattern1/,/pattern2/command"),"\u8fd9\u4e2a\u683c\u5f0f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":g")," \u662f\u5168\u5c40\u547d\u4ee4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/\\[/+1"),' \u662f\u7b2c\u4e00\u4e2a\u6a21\u5f0f\u4e32\uff0c\u5b83\u5339\u914d\u5de6\u65b9\u62ec\u53f7"["\u3002',(0,o.kt)("inlineCode",{parentName:"li"},"+1"),"\u8868\u793a\u5339\u914d\u884c\u7684\u4e0b\u97621\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/\\[/-1"),' \u662f\u7b2c\u4e8c\u4e2a\u6a21\u5f0f\u4e32\uff0c\u5b83\u5339\u914d\u53f3\u65b9\u62ec\u53f7"]"\u3002',(0,o.kt)("inlineCode",{parentName:"li"},"-1"),"\u8868\u793a\u5339\u914d\u884c\u7684\u4e0a\u97621\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/\\[/+1,/\\]/-1"),' \u8868\u793a\u5728"','["\u548c"]','"\u4e4b\u95f4\u7684\u884c\u3002'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sort")," \u662f\u547d\u4ee4\u884c\u547d\u4ee4\uff1a\u6392\u5e8f\u3002")),(0,o.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u5168\u5c40\u547d\u4ee4"},"\u806a\u660e\u5730\u5b66\u4e60\u5168\u5c40\u547d\u4ee4"),(0,o.kt)("p",null,"\u5168\u5c40\u547d\u4ee4\u9488\u5bf9\u6240\u6709\u5339\u914d\u7684\u884c\u6267\u884c\u547d\u4ee4\u884c\u547d\u4ee4\u3002\u6709\u4e86\u5b83\uff0c\u60a8\u53ea\u9700\u8981\u8fd0\u884c\u4e00\u6b21\u547d\u4ee4\uff0cVim\u5c31\u4f1a\u4e3a\u60a8\u5b8c\u6210\u5176\u4f59\u7684\u5de5\u4f5c\u3002\u8981\u7cbe\u901a\u5168\u5c40\u547d\u4ee4\uff0c\u9700\u8981\u505a\u4e24\u4ef6\u4e8b\uff1a\u826f\u597d\u7684\u547d\u4ee4\u884c\u547d\u4ee4\u8bcd\u6c47\u8868\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u77e5\u8bc6\u3002\u968f\u7740\u60a8\u82b1\u8d39\u66f4\u591a\u7684\u65f6\u95f4\u4f7f\u7528Vim\uff0c\u60a8\u81ea\u7136\u4f1a\u5b66\u5230\u66f4\u591a\u7684\u547d\u4ee4\u884c\u547d\u4ee4\u3002\u6b63\u5219\u8868\u8fbe\u5f0f\u77e5\u8bc6\u9700\u8981\u66f4\u591a\u7684\u5b9e\u9645\u64cd\u4f5c\u3002\u4f46\u662f\u4e00\u65e6\u60a8\u9002\u5e94\u4e86\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u60a8\u5c06\u9886\u5148\u4e8e\u5f88\u591a\u5176\u4ed6\u4eba\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684\u4e00\u4e9b\u4f8b\u5b50\u5f88\u590d\u6742\u3002\u4e0d\u8981\u88ab\u5413\u5230\u3002\u771f\u6b63\u82b1\u65f6\u95f4\u4e86\u89e3\u5b83\u4eec\u3002\u8ba4\u771f\u9605\u8bfb\u6bcf\u4e2a\u6a21\u5f0f\u4e32\uff0c\u4e0d\u8981\u653e\u5f03\u3002"),(0,o.kt)("p",null,"\u6bcf\u5f53\u9700\u8981\u5728\u591a\u4e2a\u4f4d\u7f6e\u5e94\u7528\u547d\u4ee4\u65f6\uff0c\u8bf7\u6682\u505c\u5e76\u67e5\u770b\u662f\u5426\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"g"),"\u547d\u4ee4\u3002\u5bfb\u627e\u6700\u9002\u5408\u5de5\u4f5c\u7684\u547d\u4ee4\uff0c\u5e76\u7f16\u5199\u4e00\u4e2a\u6a21\u5f0f\u4e32\u4ee5\u540c\u65f6\u5b9a\u4f4d\u591a\u4e2a\u76ee\u6807\u3002"),(0,o.kt)("p",null,"\u65e2\u7136\u60a8\u5df2\u7ecf\u77e5\u9053\u5168\u5c40\u547d\u4ee4\u7684\u529f\u80fd\u5f3a\u5927\uff0c\u90a3\u4e48\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u5916\u90e8\u547d\u4ee4\u6765\u589e\u52a0\u5de5\u5177\u5e93\u3002"))}m.isMDXComponent=!0}}]);