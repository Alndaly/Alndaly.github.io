"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2131],{90839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(16758);const i={},o=void 0,p={unversionedId:"backend/Ubuntu",id:"backend/Ubuntu",title:"Ubuntu",description:"Ubuntu\u5bc6\u7801\u91cd\u7f6e",source:"@site/docs/backend/Ubuntu.md",sourceDirName:"backend",slug:"/backend/Ubuntu",permalink:"/docs/backend/Ubuntu",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Ubuntu.md",tags:[],version:"current",lastUpdatedAt:1679239074,formattedLastUpdatedAt:"2023\u5e743\u670819\u65e5",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u4e00\u4e9b\u62a5\u9519",permalink:"/docs/backend/Spring/some-error"}},r={},s=[{value:"Ubuntu\u5bc6\u7801\u91cd\u7f6e",id:"ubuntu\u5bc6\u7801\u91cd\u7f6e",level:2},{value:"\u5728\u6587\u4ef6\u53d8\u52a8\u4e4b\u540e\u6267\u884c\u7279\u5b9a\u4efb\u52a1",id:"\u5728\u6587\u4ef6\u53d8\u52a8\u4e4b\u540e\u6267\u884c\u7279\u5b9a\u4efb\u52a1",level:2},{value:"\u5b89\u88c5<code>inotify-tools</code>\u548c<code>gzip</code>",id:"\u5b89\u88c5inotify-tools\u548cgzip",level:3},{value:"\u7b80\u5355\u5c1d\u8bd5",id:"\u7b80\u5355\u5c1d\u8bd5",level:3},{value:"\u6307\u5b9a\u7c7b\u578b\u76d1\u6d4b",id:"\u6307\u5b9a\u7c7b\u578b\u76d1\u6d4b",level:3},{value:"\u6267\u884c\u4efb\u52a1",id:"\u6267\u884c\u4efb\u52a1",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ubuntu\u5bc6\u7801\u91cd\u7f6e"},"Ubuntu\u5bc6\u7801\u91cd\u7f6e"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u770b\u8d77\u6765\u66f4\u50cf\u662f\u4e00\u4e2aubuntu\u7684\u6f0f\u6d1e\uff0c\u9700\u8981\u6ce8\u610f\uff01")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u542f\u52a8\uff0c\u4e00\u76f4\u6309SHIFT\u952e\u6765\u663e\u793aGRUB\u83dc\u5355"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u7b2c\u4e8c\u884cUbuntu\u7684\u9ad8\u7ea7\u9009\u9879\u83dc\u5355\uff0c\u56de\u8f66\u8fdb\u5165"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u7b2c\u4e8c\u884c\u7a81\u51fa\u663e\u793a\u65f6\uff0c\u6309e\u7f16\u8f91Grub\u7684\u542f\u52a8\u63d0\u793a\u7b26"),(0,l.kt)("li",{parentName:"ol"},"\u6309e\u7f16\u8f91Grub\u7684\u542f\u52a8\u63d0\u793a\u7b26\u628aro\u540e\u9762\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"quit splash rw init=/bin/bash")),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5b8c\u540e\uff0c\u6309ctrl+x\u6216\u8005F10\u542f\u52a8\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8\u7cfb\u7edf\u4e4b\u540e\uff0c\u76f4\u63a5\u5c31\u662froot\u7528\u6237\u8eab\u4efd\u5728\u6267\u884c\u547d\u4ee4\u4e86")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"passwd xx\npasswd\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u91cd\u542f\u7cfb\u7edf\u5373\u53ef")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"exec /sbin/init\n")),(0,l.kt)("h2",{id:"\u5728\u6587\u4ef6\u53d8\u52a8\u4e4b\u540e\u6267\u884c\u7279\u5b9a\u4efb\u52a1"},"\u5728\u6587\u4ef6\u53d8\u52a8\u4e4b\u540e\u6267\u884c\u7279\u5b9a\u4efb\u52a1"),(0,l.kt)("h3",{id:"\u5b89\u88c5inotify-tools\u548cgzip"},"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"h3"},"inotify-tools"),"\u548c",(0,l.kt)("inlineCode",{parentName:"h3"},"gzip")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install inotify-tools gzip\n")),(0,l.kt)("h3",{id:"\u7b80\u5355\u5c1d\u8bd5"},"\u7b80\u5355\u5c1d\u8bd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efaincoming\u6587\u4ef6\u5939")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir incoming\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5f00\u59cb\u76d1\u6d4b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"inotifywatch -v incoming \n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://upload.sunrise-luckyda.top/image/202303182021568.webp",alt:null})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd incoming/\ntouch newfile\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u56de\u5230\u539f\u6765\u7684\u7ec8\u7aef\u7a97\u53e3")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://upload.sunrise-luckyda.top/image/202303182021104.webp",alt:null})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6709\u5f88\u591a\u4e8b\u4ef6\u88ab\u8bb0\u5f55\u4e86"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201ccreate\u201d \u2013 \u5f53\u76ee\u6807\u6587\u4ef6\u5939\u4e2d\u6709\u6587\u4ef6\u88ab\u521b\u5efa\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u201cmoved_to\u201d \u2013 \u5f53\u4e00\u4e2a\u6587\u4ef6\u88ab\u79fb\u5230\u5f53\u524d\u6587\u4ef6\u5939"),(0,l.kt)("li",{parentName:"ul"},"...")),(0,l.kt)("h3",{id:"\u6307\u5b9a\u7c7b\u578b\u76d1\u6d4b"},"\u6307\u5b9a\u7c7b\u578b\u76d1\u6d4b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ea\u76d1\u6d4b\u6587\u4ef6\u521b\u5efa\u548c\u79fb\u52a8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"inotifywatch -v -e create -e moved_to incoming\n")),(0,l.kt)("h3",{id:"\u6267\u884c\u4efb\u52a1"},"\u6267\u884c\u4efb\u52a1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6587\u4ef6\u5939")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir processed\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u811a\u672c",(0,l.kt)("inlineCode",{parentName:"li"},"watch-incoming.sh"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n# directory of app\nappDir=/app/chat\n# the name of file\n#fileName=find $appDir -name *.jar\n#log\nlog=/app/chat/watch.log\n#file type\nfileType=\"jar\"\n\n/usr/bin/inotifywait -mr --timefmt '%d/%m/%y %H:%M' --format '%T %w %f' -e close_write $appDir/ | while read DATE TIME DIR FILE; do\n \nFILECHANGE=${DIR}${FILE}\n \nif [[ $FILECHANGE =~ $fileType ]]\nthen\n        echo \"At ${TIME} on ${DATE}, file $FILECHANGE was changed.\" >> $log\n        $appDir/application.sh restart\nfi\ndone\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m"),"\u9009\u9879\u8868\u793a\u65e0\u9650\u671f\u7684\u76d1\u63a7\u548c\u66f4\u6539\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\u9009\u9879\u8868\u793a\u9012\u5f52\u76d1\u6d4b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log",metastring:"title=watch.log",title:"watch.log"},"At 14:47 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.\nAt 15:17 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.\nAt 15:43 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.\n...\n")),(0,l.kt)("p",null,"\u6bcf\u6b21\u76d1\u6d4b\u5230\u65b0\u5efa\u6216\u8005\u79fb\u52a8\u4e8b\u4ef6\u540e\uff0c\u90fd\u4f1a\u5c06\u6587\u4ef6\u540d\u79f0\u4f20\u5165while\u5faa\u73af\u4e2d\u7684FILENAME\uff0c\u63a5\u7740\u6267\u884cdo\u4e2d\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")))}c.isMDXComponent=!0}}]);