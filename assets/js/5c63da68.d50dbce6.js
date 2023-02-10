"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1194],{24139:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));t(16758);const i={title:"Curl\u547d\u4ee4\u4f7f\u7528",tags:["curl"],description:"Curl\u76f8\u5173\u6587\u6863"},p=void 0,r={unversionedId:"others/Curl",id:"others/Curl",title:"Curl\u547d\u4ee4\u4f7f\u7528",description:"Curl\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Curl.md",sourceDirName:"others",slug:"/others/Curl",permalink:"/docs/others/Curl",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Curl.md",tags:[{label:"curl",permalink:"/docs/tags/curl"}],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{title:"Curl\u547d\u4ee4\u4f7f\u7528",tags:["curl"],description:"Curl\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Clash\u6559\u7a0b",permalink:"/docs/others/Clash"},next:{title:"Docker\u5bb9\u5668\u7684\u4f7f\u7528",permalink:"/docs/others/Docker/Docker\u5bb9\u5668\u7684\u4f7f\u7528"}},o={},u=[{value:"curl\u547d\u4ee4\u8bed\u6cd5\uff1a",id:"curl\u547d\u4ee4\u8bed\u6cd5",level:2},{value:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3\uff1a",id:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3",level:2},{value:"url",id:"url",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b",level:4},{value:"POST\u8bf7\u6c42",id:"post\u8bf7\u6c42",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-1",level:4},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-2",level:4},{value:"\u8bf7\u6c42\u5934",id:"\u8bf7\u6c42\u5934",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-3",level:4},{value:"\u54cd\u5e94\u5934",id:"\u54cd\u5e94\u5934",level:3},{value:"cookie",id:"cookie",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-4",level:4},{value:"\u4ee3\u7406",id:"\u4ee3\u7406",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-5",level:4},{value:"\u8ddf\u968f\u91cd\u5b9a\u5411",id:"\u8ddf\u968f\u91cd\u5b9a\u5411",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-6",level:4},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-7",level:4},{value:"\u6587\u4ef6\u4fdd\u5b58",id:"\u6587\u4ef6\u4fdd\u5b58",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-8",level:4},{value:"\u6a21\u62df\u7f51\u901f",id:"\u6a21\u62df\u7f51\u901f",level:3},{value:"Basic Auth",id:"basic-auth",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-9",level:4}],k={toc:u};function m(e){let{components:l,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"curl\u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u3001\u7528\u6765\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u6570\u636e\u7684\u5de5\u5177\uff1b\u652f\u6301\u7684\u534f\u8bae\u5305\u62ec (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMTP, SMTPS, TELNET and TFTP)\uff0ccurl\u8bbe\u8ba1\u4e3a\u65e0\u7528\u6237\u4ea4\u4e92\u4e0b\u5b8c\u6210\u5de5\u4f5c\uff1b")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"curl\u63d0\u4f9b\u4e86\u4e00\u5927\u5806\u975e\u5e38\u6709\u7528\u7684\u529f\u80fd\uff0c\u5305\u62ec\u4ee3\u7406\u8bbf\u95ee\u3001\u7528\u6237\u8ba4\u8bc1\u3001ftp\u4e0a\u4f20\u4e0b\u8f7d\u3001HTTP POST\u3001SSL\u8fde\u63a5\u3001cookie\u652f\u6301\u3001\u65ad\u70b9\u7eed\u4f20...\u3002")),(0,n.kt)("h2",{id:"curl\u547d\u4ee4\u8bed\u6cd5"},"curl\u547d\u4ee4\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl [options] [URL...]\n")),(0,n.kt)("h2",{id:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3"},"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3\uff1a"),(0,n.kt)("p",null,"\u7531\u4e8elinux curl\u529f\u80fd\u5341\u5206\u5f3a\u5927\uff0c\u6240\u4ee5\u547d\u4ee4\u53c2\u6570\u5341\u5206\u591a\uff0c\u4e0b\u8868\u53ea\u662f\u7b5b\u9009\u51fa\u6765\u7684\u90e8\u5206\u53c2\u6570\uff0c\u66f4\u591a\u53c2\u6570\u8bf7\u8fd0\u884c\u201cman curl\u201d\u547d\u4ee4\u67e5\u770b\u3002"),(0,n.kt)("h3",{id:"url"},"url"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," ")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u9700\u8981\u6293\u53d6\u591a\u4e2aURL\u65f6\u7528\u4e0b\u9762\u901a\u914d\u7b26\u7684\u65b9\u5f0f")),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"http://{www,ftp,mail}.aiezu.com\uff1b"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"http://aiezu.com/images/%5B001-999%5D.jpg%EF%BC%9B"},"http://aiezu.com/images/[001-999].jpg\uff1b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"http://aiezu.com/images/%5B1-999%5D.html%EF%BC%9B"},"http://aiezu.com/images/[1-999].html\uff1b")),(0,n.kt)("li",{parentName:"ol"},"ftp://aiezu.com/file","[a-z]",".txt"))),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u6cd5"},"\u8bf7\u6c42\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-X "POST/GET"'))),(0,n.kt)("h4",{id:"\u8303\u4f8b"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST https://www.example.com\n")),(0,n.kt)("h3",{id:"post\u8bf7\u6c42"},"POST\u8bf7\u6c42"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"-d"),"\u53c2\u6570\u4ee5\u540e\uff0cHTTP \u8bf7\u6c42\u4f1a\u81ea\u52a8\u52a0\u4e0a\u6807\u5934",(0,n.kt)("inlineCode",{parentName:"p"},"Content-Type : application/x-www-form-urlencoded"),"\u3002\u5e76\u4e14\u4f1a\u81ea\u52a8\u5c06\u8bf7\u6c42\u8f6c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," \u65b9\u6cd5\uff0c\u56e0\u6b64\u53ef\u4ee5\u7701\u7565",(0,n.kt)("inlineCode",{parentName:"p"},"-X POST"),"\u3002")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"--data-urlencode"),"\u53c2\u6570\u7b49\u540c\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"-d"),"\uff0c\u53d1\u9001 POST \u8bf7\u6c42\u7684\u6570\u636e\u4f53\uff0c\u533a\u522b\u5728\u4e8e\u4f1a\u81ea\u52a8\u5c06\u53d1\u9001\u7684\u6570\u636e\u8fdb\u884c URL \u7f16\u7801\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-d "string"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--data-urlencode "string"'))),(0,n.kt)("h4",{id:"\u8303\u4f8b-1"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -d 'login=emma\uff06password=123' -X POST https://google.com/login\n# \u6216\u8005\ncurl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"curl\u53ef\u4ee5\u8bfb\u53d6\u672c\u5730\u6587\u672c\u6587\u4ef6\u7684\u6570\u636e\u53d1\u8d77post\u8bf7\u6c42\uff0c\u5177\u4f53\u8303\u4f8b\u5982\u4e0b")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -d '@data.txt' https://google.com/login\n")),(0,n.kt)("p",null,"\u53d1\u9001\u7684\u6570\u636ehello world\u4e4b\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c\uff0c\u9700\u8981\u8fdb\u884c URL \u7f16\u7801\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --data-urlencode 'comment=hello world' https://google.com/login\n")),(0,n.kt)("h3",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-F 'file=@filePath;filename=fileName;type=type;'"))),(0,n.kt)("h4",{id:"\u8303\u4f8b-2"},"\u8303\u4f8b"),(0,n.kt)("p",null,"\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"image/png"),"\uff0c\u5426\u5219 ",(0,n.kt)("inlineCode",{parentName:"p"},"curl")," \u4f1a\u628a MIME \u7c7b\u578b\u8bbe\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"application/octet-stream"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -F 'file=@photo.png;filename=me.png;type=image/png' https://google.com/profile\n")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5934"},"\u8bf7\u6c42\u5934"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-H "name: value"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--header "name: value"'))),(0,n.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2ahttp header(http\u8bf7\u6c42\u5934)\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-H "name:"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--header "name:"\t'))),(0,n.kt)("p",null,"\u79fb\u9664\u4e00\u4e2ahttp header(http\u8bf7\u6c42\u5934)\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'-A "string"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'--user-agent "string"'))),(0,n.kt)("p",null,"\u8bbe\u7f6eHttp\u8bf7\u6c42\u5934\u201cUser-Agent\u201d\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u201cUser-Agent\u201d\u53ef\u4ee5\u5224\u65ad\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u540d\u79f0\u548c\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b\uff0c\u4f2a\u9020\u6b64\u53c2\u6570\u80fd\u5bfc\u81f4\u670d\u52a1\u5668\u505a\u51fa\u9519\u8bef\u5224\u65ad\u3002\n\u4e5f\u53ef\u4ee5\u4f7f\u7528\u201c-H\u201d, \u201c--header option\u201d\u8bbe\u7f6e\u6b64\u9009\u9879\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-e <URL>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--referer <URL>"))),(0,n.kt)("p",null,"\u8bbe\u7f6e\u8bbf\u95ee\u65f6\u7684\u6765\u6e90\u9875\u9762\uff0c\u544a\u8bc9http\u670d\u52a1\u4ece\u54ea\u4e2a\u9875\u9762\u8fdb\u5165\u5230\u6b64\u9875\u9762\uff1b"),(0,n.kt)("h4",{id:"\u8303\u4f8b-3"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com\n")),(0,n.kt)("h3",{id:"\u54cd\u5e94\u5934"},"\u54cd\u5e94\u5934"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-I")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--head"))),(0,n.kt)("p",null,"\u53ea\u8f93\u51faHTTP-header\uff0c\u4e0d\u83b7\u53d6\u5185\u5bb9(HTTP/FTP/FILE)\u3002"),(0,n.kt)("p",null,"\u7528\u4e8eHTTP\u670d\u52a1\u65f6\uff0c\u83b7\u53d6\u9875\u9762\u7684http\u5934\uff08\u5982\uff1acurl -I ",(0,n.kt)("a",{parentName:"p",href:"http://aiezu.com%EF%BC%89"},"http://aiezu.com\uff09")),(0,n.kt)("p",null,"\u7528\u4e8eFTP/FILE\u65f6\uff0c\u5c06\u4f1a\u83b7\u53d6\u6587\u4ef6\u5927\u5c0f\u3001\u6700\u540e\u4fee\u6539\u65f6\u95f4\uff08\u5982\uff1acurl -I file://test.txt\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-i")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--include"),"\t")),(0,n.kt)("p",null,"\u8f93\u51faHTTP\u5934\u548c\u8fd4\u56de\u5185\u5bb9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-D <file>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--dump-header <file>\t"))),(0,n.kt)("p",null,"\u8f6c\u50a8http\u54cd\u5e94\u5934\u5230\u6307\u5b9a\u6587\u4ef6"),(0,n.kt)("h3",{id:"cookie"},"cookie"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-b name=data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--cookie name=data"))),(0,n.kt)("p",null,'\u53d1\u9001cookie\u6570\u636e\u5230HTTP\u670d\u52a1\u5668\uff0c\u6570\u636e\u683c\u5f0f\u4e3a\uff1a"NAME1=VALUE1; NAME2=VALUE2"\uff1b'),(0,n.kt)("p",null,"\u5982\u679c\u884c\u4e2d\u6ca1\u6709\u201c=\u201d\uff0c\u5c06\u628a\u53c2\u6570\u503c\u5f53\u4f5ccookie\u6587\u4ef6\u540d\uff1b"),(0,n.kt)("p",null,"\u8fd9\u4e2acookie\u6570\u636e\u53ef\u4ee5\u662f\u7531\u670d\u52a1\u5668\u7684http\u54cd\u5e94\u5934\u201cSet-Cookie:\u201d\u884c\u53d1\u9001\u8fc7\u6765\u7684\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-c filename")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--cookie-jar file name"))),(0,n.kt)("p",null,"\u5b8c\u6210\u64cd\u4f5c\u540e\u5c06\u670d\u52a1\u5668\u8fd4\u56de\u7684cookies\u4fdd\u5b58\u5230\u6307\u5b9a\u7684\u6587\u4ef6\uff1b"),(0,n.kt)("p",null,"\u6307\u5b9a\u53c2\u6570\u503c\u4e3a\u201c-\u201d\u5c06\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\u201c\u5982\u63a7\u5236\u53f0\u201d\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-j")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--junk-session-cookies"))),(0,n.kt)("p",null,'\u544a\u8bc9curl\u653e\u5f03\u6240\u6709\u7684"session cookies"\uff1b'),(0,n.kt)("p",null,"\u76f8\u5f53\u4e8e\u91cd\u542f\u6d4f\u89c8\u5668\uff1b"),(0,n.kt)("h4",{id:"\u8303\u4f8b-4"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -b 'foo=bar' https://google.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -b 'foo1=bar;foo2=bar2' https://google.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -b cookies.txt https://www.google.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -c cookies.txt https://www.google.com\n")),(0,n.kt)("h3",{id:"\u4ee3\u7406"},"\u4ee3\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-x host:port")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-x [protocol://[user:pwd@][host][:port]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--proxy [protocol]://[user:pwd@][host][:port]"))),(0,n.kt)("p",null,"\u4f7f\u7528HTTP\u4ee3\u7406\u8bbf\u95ee\uff1b\u5982\u679c\u672a\u6307\u5b9a\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4f7f\u75288080\u7aef\u53e3;"),(0,n.kt)("p",null,"protocol\u9ed8\u8ba4\u4e3ahttp_proxy\uff0c\u5176\u4ed6\u53ef\u80fd\u7684\u503c\u5305\u62ec\uff1a"),(0,n.kt)("p",null,"http_proxy\u3001HTTPS_PROXY\u3001socks4\u3001socks4a\u3001socks5\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-p")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--proxytunnel"))),(0,n.kt)("p",null,"\u5c06\u201c-x\u201d\u53c2\u6570\u7684\u4ee3\u7406\uff0c\u4f5c\u4e3a\u901a\u9053\u7684\u65b9\u5f0f\u53bb\u4ee3\u7406\u975eHTTP\u534f\u8bae\uff0c\u5982ftp\uff1b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--socks4 <host[:port]>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--socks4a <host[:port]>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--socks5 <host[:port]>"))),(0,n.kt)("p",null,"\u4f7f\u7528SOCKS4\u4ee3\u7406\uff1b"),(0,n.kt)("p",null,"\u4f7f\u7528SOCKS4A\u4ee3\u7406\uff1b"),(0,n.kt)("p",null,"\u4f7f\u7528SOCKS5\u4ee3\u7406\uff1b"),(0,n.kt)("p",null,"\u6b64\u53c2\u6570\u4f1a\u8986\u76d6\u201c-x\u201d\u53c2\u6570\uff1b"),(0,n.kt)("h4",{id:"\u8303\u4f8b-5"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -x james:cats@myproxy.com:8080 https://www.example.com\n")),(0,n.kt)("h3",{id:"\u8ddf\u968f\u91cd\u5b9a\u5411"},"\u8ddf\u968f\u91cd\u5b9a\u5411"),(0,n.kt)("h4",{id:"\u8303\u4f8b-6"},"\u8303\u4f8b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-L"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -d 'tweet=hi' https://api.twitter.com/tweet\n")),(0,n.kt)("h3",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-v")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--trace"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"--trace"),"\u53c2\u6570\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8c03\u8bd5\uff0c\u8fd8\u4f1a\u8f93\u51fa\u539f\u59cb\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u3002")),(0,n.kt)("h4",{id:"\u8303\u4f8b-7"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -v https://www.example.com\n")),(0,n.kt)("h3",{id:"\u6587\u4ef6\u4fdd\u5b58"},"\u6587\u4ef6\u4fdd\u5b58"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-o filaName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-O"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"-O"),"\u53c2\u6570\u5c06\u670d\u52a1\u5668\u56de\u5e94\u4fdd\u5b58\u6210\u6587\u4ef6\uff0c\u5e76\u5c06 URL \u7684\u6700\u540e\u90e8\u5206\u5f53\u4f5c\u6587\u4ef6\u540d\u3002")),(0,n.kt)("h4",{id:"\u8303\u4f8b-8"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o example.html https://www.example.com\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://www.example.com/foo/bar.html\n")),(0,n.kt)("h3",{id:"\u6a21\u62df\u7f51\u901f"},"\u6a21\u62df\u7f51\u901f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--limit-rate"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --limit-rate 200k https://google.com\n")),(0,n.kt)("h3",{id:"basic-auth"},"Basic Auth"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--username")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-u"))),(0,n.kt)("h4",{id:"\u8303\u4f8b-9"},"\u8303\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --user username:password https://example.com\ncurl -u username:password https://example.com\n")))}m.isMDXComponent=!0}}]);