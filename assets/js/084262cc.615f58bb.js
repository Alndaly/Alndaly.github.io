"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7684],{68614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(16758);const l={title:"Oauth"},o=void 0,u={unversionedId:"others/Oauth",id:"others/Oauth",title:"Oauth",description:"\u57fa\u4e8e\u7406\u89e3OAuth 2.0\u7684\u4e00\u4e9b\u4fee\u6539",source:"@site/docs/others/Oauth.md",sourceDirName:"others",slug:"/others/Oauth",permalink:"/docs/others/Oauth",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Oauth.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"2023\u5e749\u670815\u65e5",frontMatter:{title:"Oauth"},sidebar:"anyThing",previous:{title:"\u672c\u5730\u6d4b\u8bd5NPM\u5305",permalink:"/docs/others/Npm/\u672c\u5730\u6d4b\u8bd5NPM\u5305"},next:{title:"Pip\u57fa\u672c\u64cd\u4f5c",permalink:"/docs/others/Pip/"}},s={},p=[{value:"OAuth\u4e2d\u5b58\u5728\u51e0\u4e2a\u5bf9\u8c61",id:"oauth\u4e2d\u5b58\u5728\u51e0\u4e2a\u5bf9\u8c61",level:2},{value:"\u8fd0\u884c\u6d41\u7a0b",id:"\u8fd0\u884c\u6d41\u7a0b",level:2},{value:"\u5ba2\u6237\u7aef\u7684\u6388\u6743\u6a21\u5f0f",id:"\u5ba2\u6237\u7aef\u7684\u6388\u6743\u6a21\u5f0f",level:2},{value:"\u6388\u6743\u7801\u6a21\u5f0f",id:"\u6388\u6743\u7801\u6a21\u5f0f",level:3},{value:"\u7b80\u5316\u6a21\u5f0f",id:"\u7b80\u5316\u6a21\u5f0f",level:3},{value:"\u5bc6\u7801\u6a21\u5f0f",id:"\u5bc6\u7801\u6a21\u5f0f",level:3},{value:"\u5ba2\u6237\u7aef\u6a21\u5f0f",id:"\u5ba2\u6237\u7aef\u6a21\u5f0f",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html"},"\u7406\u89e3OAuth 2.0"),"\u7684\u4e00\u4e9b\u4fee\u6539")),(0,i.kt)("h2",{id:"oauth\u4e2d\u5b58\u5728\u51e0\u4e2a\u5bf9\u8c61"},"OAuth\u4e2d\u5b58\u5728\u51e0\u4e2a\u5bf9\u8c61"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Third-party application\uff1a\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\uff0c\u672c\u6587\u4e2d\u53c8\u79f0"\u5ba2\u6237\u7aef"\uff08client\uff09\u3002'),(0,i.kt)("li",{parentName:"ul"},'HTTP service\uff1aHTTP\u670d\u52a1\u63d0\u4f9b\u5546\uff0c\u672c\u6587\u4e2d\u7b80\u79f0"\u670d\u52a1\u63d0\u4f9b\u5546"\u3002'),(0,i.kt)("li",{parentName:"ul"},'Resource Owner\uff1a\u8d44\u6e90\u6240\u6709\u8005\uff0c\u672c\u6587\u4e2d\u53c8\u79f0"\u7528\u6237"\uff08user\uff09\u3002'),(0,i.kt)("li",{parentName:"ul"},"User Agent\uff1a\u7528\u6237\u4ee3\u7406\uff0c\u672c\u6587\u4e2d\u5c31\u662f\u6307\u6d4f\u89c8\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Authorization server\uff1a\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u5373\u670d\u52a1\u63d0\u4f9b\u5546\u4e13\u95e8\u7528\u6765\u5904\u7406\u8ba4\u8bc1\u7684\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"Resource server\uff1a\u8d44\u6e90\u670d\u52a1\u5668\uff0c\u5373\u670d\u52a1\u63d0\u4f9b\u5546\u5b58\u653e\u7528\u6237\u751f\u6210\u7684\u8d44\u6e90\u7684\u670d\u52a1\u5668\u3002\u5b83\u4e0e\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u662f\u540c\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u670d\u52a1\u5668\u3002")),(0,i.kt)("h2",{id:"\u8fd0\u884c\u6d41\u7a0b"},"\u8fd0\u884c\u6d41\u7a0b"),(0,i.kt)(a.G,{config:'{"sync":true}',chart:"sequenceDiagram\n    participant Client\n    participant Resource Owner\n    participant Authrization Server\n    participant Resource Server\n    Client->>Resource Owner: (A) Authorization Request\n    Resource Owner->>Client: (B) Authorization Grant\n    Client->>Authrization Server: (C) Authorization Grant\n    Authrization Server->>Client: (D) Access Token\n    Client->>Resource Server: (E) Access Token\n    Resource Server->>Client: (F) Protected Resource",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A \u7528\u6237\u6253\u5f00\u5ba2\u6237\u7aef\u540e\uff0c\u5ba2\u6237\u7aef\u8981\u6c42\u7ed9\u7528\u6237\u6388\u6743"),(0,i.kt)("li",{parentName:"ul"},"B \u7528\u6237\u540c\u610f\u7ed9\u5ba2\u6237\u7aef\u6388\u6743"),(0,i.kt)("li",{parentName:"ul"},"C \u5ba2\u6237\u7aef\u4f7f\u7528\u4e0a\u4e00\u6b65\u83b7\u53d6\u5230\u7684\u6388\u6743\uff0c\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u7533\u8bf7\u4ee4\u724c"),(0,i.kt)("li",{parentName:"ul"},"D \u8ba4\u8bc1\u670d\u52a1\u5668\u5bf9\u5ba2\u6237\u7aef\u8fdb\u884c\u8ba4\u8bc1\u4e4b\u540e\uff0c\u786e\u8ba4\u65e0\u8bef\uff0c\u7edf\u4e00\u53d1\u653e\u4ee4\u724c"),(0,i.kt)("li",{parentName:"ul"},"E \u5ba2\u6237\u7aef\u4f7f\u7528\u4ee4\u724c\uff0c\u5411\u8d44\u6e90\u670d\u52a1\u5668\u7533\u8bf7\u83b7\u53d6\u8d44\u6e90"),(0,i.kt)("li",{parentName:"ul"},"F \u8d44\u6e90\u670d\u52a1\u5668\u786e\u8ba4\u4ee4\u724c\u65e0\u8bef\uff0c\u540c\u610f\u5411\u5ba2\u6237\u7aef\u5f00\u653e\u8d44\u6e90"))),(0,i.kt)("h2",{id:"\u5ba2\u6237\u7aef\u7684\u6388\u6743\u6a21\u5f0f"},"\u5ba2\u6237\u7aef\u7684\u6388\u6743\u6a21\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6388\u6743\u7801\u6a21\u5f0f\uff08authorization code\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5316\u6a21\u5f0f\uff08implicit\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u6a21\u5f0f\uff08resource owner password credentials\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u6a21\u5f0f\uff08client credentials\uff09")),(0,i.kt)("h3",{id:"\u6388\u6743\u7801\u6a21\u5f0f"},"\u6388\u6743\u7801\u6a21\u5f0f"),(0,i.kt)(a.G,{chart:"sequenceDiagram\n    participant User Agent\n    participant Client\n    participant Resource Owner\n    participant Authrization Server\n    User Agent->>Authrization Server: (A) Client Identifier & Redirection URI\n    Client->>User Agent: (A)\n    User Agent->>Authrization Server: (B) User authenticates\n    User Agent->>Resource Owner: (B)\n    Authrization Server->>User Agent: (C) Authrization code\n    User Agent->>Client: (C)\n    Client->>Authrization Server: (D) Authorization Code & Redirection URI\n    Authrization Server->>Client: (E) Access Token",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A \u7528\u6237\u8bbf\u95ee\u5ba2\u6237\u7aef\uff0c\u540e\u8005\u5c06\u524d\u8005\u5bfc\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"B \u7528\u6237\u9009\u62e9\u662f\u5426\u7ed9\u4e88\u5ba2\u6237\u7aef\u6388\u6743\u3002"),(0,i.kt)("li",{parentName:"ul"},'C \u5047\u8bbe\u7528\u6237\u7ed9\u4e88\u6388\u6743\uff0c\u8ba4\u8bc1\u670d\u52a1\u5668\u5c06\u7528\u6237\u5bfc\u5411\u5ba2\u6237\u7aef\u4e8b\u5148\u6307\u5b9a\u7684"\u91cd\u5b9a\u5411URI"\uff08redirection URI\uff09\uff0c\u540c\u65f6\u9644\u4e0a\u4e00\u4e2a\u6388\u6743\u7801\u3002'),(0,i.kt)("li",{parentName:"ul"},'D \u5ba2\u6237\u7aef\u6536\u5230\u6388\u6743\u7801\uff0c\u9644\u4e0a\u65e9\u5148\u7684"\u91cd\u5b9a\u5411URI"\uff0c\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u7533\u8bf7\u4ee4\u724c\u3002\u8fd9\u4e00\u6b65\u662f\u5728\u5ba2\u6237\u7aef\u7684\u540e\u53f0\u7684\u670d\u52a1\u5668\u4e0a\u5b8c\u6210\u7684\uff0c\u5bf9\u7528\u6237\u4e0d\u53ef\u89c1\u3002'),(0,i.kt)("li",{parentName:"ul"},"E \u8ba4\u8bc1\u670d\u52a1\u5668\u6838\u5bf9\u4e86\u6388\u6743\u7801\u548c\u91cd\u5b9a\u5411URI\uff0c\u786e\u8ba4\u65e0\u8bef\u540e\uff0c\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u8bbf\u95ee\u4ee4\u724c\uff08access token\uff09\u548c\u66f4\u65b0\u4ee4\u724c\uff08refresh token\uff09\u3002"))),(0,i.kt)("h3",{id:"\u7b80\u5316\u6a21\u5f0f"},"\u7b80\u5316\u6a21\u5f0f"),(0,i.kt)(a.G,{chart:"sequenceDiagram\n    participant User Agent\n    participant Authrization Server\n    participant Web Hosted Client Resource\n    participant Client\n    participant Resource Owner\n    User Agent->>Authrization Server: (A) Client Identifier & Redirection URI\n    User Agent->>Authrization Server: (B) User authenticates\n    User Agent->>Resource Owner: (B)\n    Authrization Server->>User Agent: (C) Redirection URI with Access Token in Fragment\n    User Agent->>Web Hosted Client Resource: (D) Redirection URI without Fragment\n    Web Hosted Client Resource->>User Agent: (E) Script\n    User Agent->>User Agent: (F)\n    User Agent->>Client: (G) Access Token",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A \u5ba2\u6237\u7aef\u5c06\u7528\u6237\u5bfc\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"B \u7528\u6237\u51b3\u5b9a\u662f\u5426\u7ed9\u4e8e\u5ba2\u6237\u7aef\u6388\u6743\u3002"),(0,i.kt)("li",{parentName:"ul"},'C \u5047\u8bbe\u7528\u6237\u7ed9\u4e88\u6388\u6743\uff0c\u8ba4\u8bc1\u670d\u52a1\u5668\u5c06\u7528\u6237\u5bfc\u5411\u5ba2\u6237\u7aef\u6307\u5b9a\u7684"\u91cd\u5b9a\u5411URI"\uff0c\u5e76\u5728URI\u7684Hash\u90e8\u5206\u5305\u542b\u4e86\u8bbf\u95ee\u4ee4\u724c\u3002'),(0,i.kt)("li",{parentName:"ul"},"D \u6d4f\u89c8\u5668\u5411\u8d44\u6e90\u670d\u52a1\u5668\u53d1\u51fa\u8bf7\u6c42\uff0c\u5176\u4e2d\u4e0d\u5305\u62ec\u4e0a\u4e00\u6b65\u6536\u5230\u7684Hash\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"E \u8d44\u6e90\u670d\u52a1\u5668\u8fd4\u56de\u4e00\u4e2a\u7f51\u9875\uff0c\u5176\u4e2d\u5305\u542b\u7684\u4ee3\u7801\u53ef\u4ee5\u83b7\u53d6Hash\u503c\u4e2d\u7684\u4ee4\u724c\u3002"),(0,i.kt)("li",{parentName:"ul"},"F \u6d4f\u89c8\u5668\u6267\u884c\u4e0a\u4e00\u6b65\u83b7\u5f97\u7684\u811a\u672c\uff0c\u63d0\u53d6\u51fa\u4ee4\u724c\u3002"),(0,i.kt)("li",{parentName:"ul"},"G \u6d4f\u89c8\u5668\u5c06\u4ee4\u724c\u53d1\u7ed9\u5ba2\u6237\u7aef\u3002"))),(0,i.kt)("h3",{id:"\u5bc6\u7801\u6a21\u5f0f"},"\u5bc6\u7801\u6a21\u5f0f"),(0,i.kt)(a.G,{chart:"sequenceDiagram\n    participant Resource Owner\n    participant Client\n    participant Authrization Server\n    Resource Owner->>Client: Resource Owner <br/> Password Credentials\n    Client->>Authrization Server: Resource Owner <br/> Password Credentials\n    Authrization Server->>Client: Access Token <br/> (Optional Refresh Token)",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A \u7528\u6237\u5411\u5ba2\u6237\u7aef\u63d0\u4f9b\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"B \u5ba2\u6237\u7aef\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u53d1\u7ed9\u8ba4\u8bc1\u670d\u52a1\u5668\uff0c\u5411\u540e\u8005\u8bf7\u6c42\u4ee4\u724c\u3002"),(0,i.kt)("li",{parentName:"ul"},"C \u8ba4\u8bc1\u670d\u52a1\u5668\u786e\u8ba4\u65e0\u8bef\u540e\uff0c\u5411\u5ba2\u6237\u7aef\u63d0\u4f9b\u8bbf\u95ee\u4ee4\u724c\u3002"))),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef\u6a21\u5f0f"},"\u5ba2\u6237\u7aef\u6a21\u5f0f"),(0,i.kt)(a.G,{chart:"sequenceDiagram\n    participant Client\n    participant Authrization Server\n    Client->>Authrization Server: Client Authentication\n    Authrization Server->>Client: Access Token",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"A \u5ba2\u6237\u7aef\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5e76\u8981\u6c42\u4e00\u4e2a\u8bbf\u95ee\u4ee4\u724c\u3002"),(0,i.kt)("li",{parentName:"ul"},"B \u8ba4\u8bc1\u670d\u52a1\u5668\u786e\u8ba4\u65e0\u8bef\u540e\uff0c\u5411\u5ba2\u6237\u7aef\u63d0\u4f9b\u8bbf\u95ee\u4ee4\u724c\u3002"))))}m.isMDXComponent=!0}}]);