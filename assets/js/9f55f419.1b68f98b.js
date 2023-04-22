"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6522],{62267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>r,toc:()=>k});var a=t(87462),l=(t(67294),t(3905));t(16758);const p={title:"Dockerfile\u914d\u7f6e"},i=void 0,r={unversionedId:"others/Docker/Dockerfile\u914d\u7f6e",id:"others/Docker/Dockerfile\u914d\u7f6e",title:"Dockerfile\u914d\u7f6e",description:"Docker\u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6Dockerfile\u4e2d\u7684\u6307\u4ee4\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u3002Dockerfile\u662f\u4e00\u4e2a\u6587\u672c\u6587\u6863\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u7528\u6237\u521b\u5efa\u955c\u50cf\u7684\u6240\u6709\u547d\u4ee4\u548c\u8bf4\u660e\u3002",source:"@site/docs/others/Docker/Dockerfile\u914d\u7f6e.md",sourceDirName:"others/Docker",slug:"/others/Docker/Dockerfile\u914d\u7f6e",permalink:"/docs/others/Docker/Dockerfile\u914d\u7f6e",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Docker/Dockerfile\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedAt:1682154429,formattedLastUpdatedAt:"2023\u5e744\u670822\u65e5",frontMatter:{title:"Dockerfile\u914d\u7f6e"},sidebar:"anyThing",previous:{title:"Curl\u547d\u4ee4\u4f7f\u7528",permalink:"/docs/others/Curl"},next:{title:"Docker\u5bb9\u5668\u7684\u4f7f\u7528",permalink:"/docs/others/Docker/Docker\u5bb9\u5668\u7684\u4f7f\u7528"}},o={},k=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"FROM",id:"from",level:2},{value:"RUN",id:"run",level:2},{value:"CMD",id:"cmd",level:2},{value:"ENTRYPOINT",id:"entrypoint",level:2},{value:"EXPOSE",id:"expose",level:2},{value:"VOLUME",id:"volume",level:2},{value:"WORKDIR",id:"workdir",level:2},{value:"ADD",id:"add",level:2},{value:"COPY",id:"copy",level:2},{value:"USER",id:"user",level:2}],d={toc:k};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Docker\u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6Dockerfile\u4e2d\u7684\u6307\u4ee4\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u3002Dockerfile\u662f\u4e00\u4e2a\u6587\u672c\u6587\u6863\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u7528\u6237\u521b\u5efa\u955c\u50cf\u7684\u6240\u6709\u547d\u4ee4\u548c\u8bf4\u660e\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("p",null,"\u53d8\u91cf\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"$variable_name")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"${variable_name}")," \u8868\u793a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"${variable:-word}"),"\u8868\u793a\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"variable"),"\u8bbe\u7f6e\uff0c\u5219\u7ed3\u679c\u5c06\u662f\u8be5\u503c\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"variable"),"\u672a\u8bbe\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"word"),"\u5219\u5c06\u662f\u7ed3\u679c\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"${variable:+word}"),"\u8868\u793a\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"variable"),"\u8bbe\u7f6e\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"word"),"\u7ed3\u679c\uff0c\u5426\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002\n\u53d8\u91cf\u524d\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u53ef\u4ee5\u8f6c\u4e49\u6210\u666e\u901a\u5b57\u7b26\u4e32\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"\\$foo")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"\\${foo}"),"\uff0c\u8868\u793a\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"$foo"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"${foo}"),"\u6587\u5b57\u3002"),(0,l.kt)("h2",{id:"from"},"FROM"),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u6784\u5efa\u9636\u6bb5\uff0c\u5e76\u8bbe\u7f6e\u57fa\u7840\u6620\u50cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FROM [--platform=<platform>] <image> [AS <name>]\nFROM [--platform=<platform>] <image>[:<tag>] [AS <name>]\nFROM [--platform=<platform>] <image>[@<digest>] [AS <name>]\n")),(0,l.kt)("p",null,"\u5355\u4e2adockfile\u53ef\u4ee5\u591a\u6b21\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \uff0c\u4ee5\u4f7f\u7528\u4e4b\u524d\u7684\u6784\u5efa\u9636\u6bb5\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u6784\u5efa\u9636\u6bb5\u7684\u4f9d\u8d56\u9879\n",(0,l.kt)("inlineCode",{parentName:"p"},"AS name"),"\u8868\u793a\u4e3a\u6784\u5efa\u9636\u6bb5\u547d\u540d\uff0c\u5728\u540e\u7eed",(0,l.kt)("inlineCode",{parentName:"p"},"FROM"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"COPY --from=<name>"),"\u8bf4\u660e\u4e2d\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u540d\u8bcd\uff0c\u5f15\u7528\u6b64\u9636\u6bb5\u6784\u5efa\u7684\u6620\u50cf\n",(0,l.kt)("inlineCode",{parentName:"p"},"digest"),"\u5176\u5b9e\u5c31\u662f\u5c31\u662f\u6839\u636e\u955c\u50cf\u5185\u5bb9\u4ea7\u751f\u7684\u4e00\u4e2aID\uff0c\u53ea\u8981\u955c\u50cf\u7684\u5185\u5bb9\u4e0d\u53d8",(0,l.kt)("inlineCode",{parentName:"p"},"digest"),"\u4e5f\u4e0d\u4f1a\u53d8\n",(0,l.kt)("inlineCode",{parentName:"p"},"tag"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"digest"),"\u503c\u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u60a8\u7701\u7565\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u6784\u5efa\u5668\u9ed8\u8ba4\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"latest"),"\u6807\u7b7e\u3002\u5982\u679c\u627e\u4e0d\u5230\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"tag"),"\u503c\uff0c\u6784\u5efa\u5668\u5c06\u8fd4\u56de\u9519\u8bef\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"--platform"),"\u6807\u5fd7\u53ef\u7528\u4e8e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"FROM"),"\u5f15\u7528\u591a\u5e73\u53f0\u955c\u50cf\u7684\u60c5\u51b5\u4e0b\u6307\u5b9a\u5e73\u53f0\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"linux/amd64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"linux/arm64"),"\u3001 \u6216",(0,l.kt)("inlineCode",{parentName:"p"},"windows/amd64")),(0,l.kt)("h2",{id:"run"},"RUN"),(0,l.kt)("p",null,"\u5c06\u5728\u5f53\u524d\u955c\u50cf\u4e4b\u4e0a\u7684\u65b0\u5c42\u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"docker buil"),"d\u65f6\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"RUN /bin/bash -c 'source $HOME/.bashrc; \\\necho $HOME'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u6709\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RUN <command>shell")," \u5f62\u5f0f\uff0c\u547d\u4ee4\u5728 shell \u4e2d\u8fd0\u884c\uff0c\u9ed8\u8ba4/bin/sh -c\u5728 Linux \u6216cmd /S /CWindows \u4e0a\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'RUN ["executable", "param1", "param2"]'),"\uff08\u6267\u884c\u5f62\u5f0f\uff09")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),"\uff08\u53cd\u659c\u6760\uff09\u5c06\u5355\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u6307\u4ee4\u5ef6\u7eed\u5230\u4e0b\u4e00\u884c\n",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u5728\u4e0b\u4e00\u6b21\u6784\u5efa\u671f\u95f4\uff0c\u6307\u4ee4\u7f13\u5b58\u4e0d\u4f1a\u81ea\u52a8\u5931\u6548\u3002\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--no-cache"),"\u6807\u5fd7\u4f7f\u6307\u4ee4\u7f13\u5b58\u65e0\u6548\nDockerfile\u7684\u6307\u4ee4\u6bcf\u6267\u884c\u4e00\u6b21\u90fd\u4f1a\u5728docker\u4e0a\u65b0\u5efa\u4e00\u5c42\u3002\u6240\u4ee5\u8fc7\u591a\u65e0\u610f\u4e49\u7684\u5c42\uff0c\u4f1a\u9020\u6210\u955c\u50cf\u81a8\u80c0\u8fc7\u5927\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),"\u7b26\u53f7\u8fde\u63a5\u547d\u4ee4\uff0c\u8fd9\u6837\u6267\u884c\u540e\uff0c\u53ea\u4f1a\u521b\u5efa 1 \u5c42\u955c\u50cf"),(0,l.kt)("h2",{id:"cmd"},"CMD"),(0,l.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"docker run"),"\u65f6\u8fd0\u884c\uff0c\u4f46\u662f\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u547d\u4ee4\u4e0d\u540c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"docker build"),"\u65f6\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'FROM ubuntu\nCMD ["/usr/bin/wc","--help"]\n')),(0,l.kt)("p",null,"\u652f\u6301\u4e09\u79cd\u683c\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'CMD ["executable","param1","param2"]')," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"exec")," \u6267\u884c\uff0c\u63a8\u8350\u65b9\u5f0f\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CMD command param1 param2")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"/bin/sh")," \u4e2d\u6267\u884c\uff0c\u63d0\u4f9b\u7ed9\u9700\u8981\u4ea4\u4e92\u7684\u5e94\u7528\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'CMD ["param1","param2"]')," \u63d0\u4f9b\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," \u7684\u9ed8\u8ba4\u53c2\u6570\uff1b")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6307\u5b9a\u542f\u52a8\u5bb9\u5668\u65f6\u6267\u884c\u7684\u547d\u4ee4\uff0c\u6bcf\u4e2aDockerfile\u53ea\u80fd\u6709\u4e00\u6761",(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),"\u547d\u4ee4\u3002\u5982\u679c\u6307\u5b9a\u4e86\u591a\u6761\u547d\u4ee4\uff0c\u53ea\u6709\u6700\u540e\u4e00\u6761\u4f1a\u88ab\u6267\u884c\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7528\u6237\u542f\u52a8\u5bb9\u5668\u65f6\u5019\u6307\u5b9a\u4e86\u8fd0\u884c\u7684\u547d\u4ee4\uff0c\u5219\u4f1a\u8986\u76d6\u6389",(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),"\u6307\u5b9a\u7684\u547d\u4ee4\u3002")),(0,l.kt)("h2",{id:"entrypoint"},"ENTRYPOINT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),"\u4e00\u6837\uff0c\u90fd\u662f\u5728\u6307\u5b9a\u5bb9\u5668\u542f\u52a8\u7a0b\u5e8f\u53ca\u53c2\u6570\uff0c\u4e0d\u8fc7\u5b83\u4e0d\u4f1a\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"docker run"),"\u7684\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\u7684\u6307\u4ee4\u6240\u8986\u76d6\u3002\u5982\u679c\u8981\u8986\u76d6\u7684\u8bdd\uff0c\u9700\u8981\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"docker run --entrypoint"),"\u6765\u6307\u5b9a\u3002"),(0,l.kt)("p",null,"\u5b83\u67092\u79cd\u683c\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'ENTRYPOINT ["executable", "param1", "param2"]')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT command param1 param2"))),(0,l.kt)("p",null,"\u5f53\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),"\u7684\u5185\u5bb9\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u6307\u4ee4\uff0c\u5b9e\u9645\u6267\u884c\u65f6\uff0c\u5c06\u53d8\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<ENTRYPOINT> <CMD>\n")),(0,l.kt)("h2",{id:"expose"},"EXPOSE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EXPOSE <port> [<port>/<protocol>...]\n")),(0,l.kt)("p",null,"Docker\u5bb9\u5668\u5728\u8fd0\u884c\u65f6\u4fa6\u542c\u6307\u5b9a\u7684\u7f51\u7edc\u7aef\u53e3\u3002\u53ef\u4ee5\u6307\u5b9a\u7aef\u53e3\u662f\u76d1\u542cTCP\u8fd8\u662fUDP\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u534f\u8bae\uff0c\u9ed8\u8ba4\u4e3aTCP\u3002"),(0,l.kt)("p",null,"\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\u6307\u4ee4\u5b9e\u9645\u4e0a\u5e76\u672a\u53d1\u5e03\u7aef\u53e3\u3002\u8981\u5728\u8fd0\u884c\u5bb9\u5668\u65f6\u5b9e\u9645\u53d1\u5e03\u7aef\u53e3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"docker run -P"),"\u6765\u53d1\u5e03\u548c\u6620\u5c04\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\u5047\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"TCP"),"\u3002\u60a8\u8fd8\u53ef\u4ee5\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"UDP"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EXPOSE 80/udp\n")),(0,l.kt)("h2",{id:"volume"},"VOLUME"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u6302\u8f7d\u6570\u636e\u5377"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'VOLUME ["/var/log/"]\nVOLUME /var/log\n')),(0,l.kt)("p",null,"\u5b83\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u91cd\u8981\u7684\u6570\u636e\uff0c\u56e0\u5bb9\u5668\u91cd\u542f\u800c\u4e22\u5931"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u5bb9\u5668\u4e0d\u65ad\u53d8\u5927")),(0,l.kt)("h2",{id:"workdir"},"WORKDIR"),(0,l.kt)("p",null,"\u5de5\u4f5c\u76ee\u5f55\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u4e0d\u5b58\u5728\uff0c\u5373\u4f7f\u5b83\u6ca1\u6709\u5728\u540e\u7eedDockerfile\u6307\u4ee4\u4e2d\u4f7f\u7528\uff0c\u5b83\u4e5f\u4f1a\u88ab\u521b\u5efa\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker build"),"\u6784\u5efa\u955c\u50cf\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\u547d\u4ee4\u90fd\u4f1a\u65b0\u5efa\u4e00\u5c42\u3002\u53ea\u6709\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u521b\u5efa\u7684\u76ee\u5f55\u624d\u4f1a\u4e00\u76f4\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\uff0c\u5982\u679c\u63d0\u4f9b\u4e86\u76f8\u5bf9\u8def\u5f84\uff0c\u5b83\u5c06\u76f8\u5bf9\u4e8e\u524d\u4e00\u6761",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u6307\u4ee4\u7684\u8def\u5f84\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd \n")),(0,l.kt)("p",null,"\u6700\u7ec8",(0,l.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u7684\u8f93\u51fa\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/a/b/c"),"."),(0,l.kt)("p",null,"\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u6307\u4ee4\u53ef\u4ee5\u89e3\u6790\u5148\u524d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ENV"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ENV DIRPATH=/path\nWORKDIR $DIRPATH/$DIRNAME\nRUN pwd\n")),(0,l.kt)("p",null,"\u6700\u7ec8",(0,l.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u7684\u8f93\u51fa\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/path/$DIRNAME")),(0,l.kt)("h2",{id:"add"},"ADD"),(0,l.kt)("p",null,"\u590d\u5236\u65b0\u6587\u4ef6\u3001\u76ee\u5f55\u6216\u8fdc\u7a0b\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"URL <src>"),"\uff0c\u5e76\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"<dest>"),"\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<src>"),"\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u8d44\u6e90\uff0c\u4f46\u5982\u679c\u5b83\u4eec\u662f\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u5219\u5b83\u4eec\u7684\u8def\u5f84\u88ab\u89e3\u91ca\u4e3a\u76f8\u5bf9\u4e8e\u6784\u5efa\u4e0a\u4e0b\u6587\u7684\u6e90\uff0c\u4e5f\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u90fd",(0,l.kt)("inlineCode",{parentName:"p"},"<src>"),"\u53ef\u80fd\u5305\u542b\u901a\u914d\u7b26\uff0c\u5339\u914d\u5c06\u4f7f\u7528Go\u7684filepath.Match\u89c4\u5219\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,"\u6dfb\u52a0\u6240\u6709\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"hom"),"\u5f00\u5934\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ADD hom* /mydir/\n")),(0,l.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"\u88ab\u66ff\u6362\u4e3a\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"home.txt"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ADD hom?.txt /mydir/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<dest>"),"\u662f\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\uff0c\u6216\u76f8\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"copy"},"COPY"),(0,l.kt)("p",null,"\u8bed\u6cd5\u540c",(0,l.kt)("inlineCode",{parentName:"p"},"ADD"),"\u4e00\u81f4\uff0c\u590d\u5236\u62f7\u8d1d\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"COPY"),"\u6307\u4ee4\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ADD"),"\u6307\u4ee4\u7684\u552f\u4e00\u533a\u522b\u5728\u4e8e\uff1a\u662f\u5426\u652f\u6301\u4ece\u8fdc\u7a0bURL\u83b7\u53d6\u8d44\u6e90\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"COPY"),"\u6307\u4ee4\u53ea\u80fd\u4ece\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"docker build"),"\u6240\u5728\u7684\u4e3b\u673a\u4e0a\u8bfb\u53d6\u8d44\u6e90\u5e76\u590d\u5236\u5230\u955c\u50cf\u4e2d\u3002\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"ADD"),"\u6307\u4ee4\u8fd8\u652f\u6301\u901a\u8fc7URL\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u8bfb\u53d6\u8d44\u6e90\u5e76\u590d\u5236\u5230\u955c\u50cf\u4e2d\u3002"),(0,l.kt)("p",null,"\u76f8\u540c\u9700\u6c42\u65f6\uff0c\u63a8\u8350\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"COPY"),"\u6307\u4ee4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"ADD"),"\u6307\u4ee4\u66f4\u64c5\u957f\u8bfb\u53d6\u672c\u5730tar\u6587\u4ef6\u5e76\u89e3\u538b\u7f29\u3002"),(0,l.kt)("h2",{id:"user"},"USER"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u540d\uff08\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"UID"),"\uff09\u548c\u53ef\u9009\u7684\u7528\u6237\u7ec4\uff08\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"GID"),"\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"USER <user>[:<group>]\nUSER <UID>[:<GID>]\n")))}m.isMDXComponent=!0}}]);