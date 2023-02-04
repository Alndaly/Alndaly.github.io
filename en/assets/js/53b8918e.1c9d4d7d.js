"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7086],{87297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var o=t(87462),a=(t(67294),t(3905));t(16758);const s={title:"\u7ea7\u8054",sidebar_position:3},c=void 0,i={unversionedId:"backend/Node/Koa/\u7ea7\u8054",id:"backend/Node/Koa/\u7ea7\u8054",title:"\u7ea7\u8054",description:"Koa \u4e2d\u95f4\u4ef6\u4ee5\u66f4\u4f20\u7edf\u7684\u65b9\u5f0f\u7ea7\u8054\uff0c\u60a8\u53ef\u80fd\u4e60\u60ef\u4f7f\u7528\u7c7b\u4f3c\u7684\u5de5\u5177 - \u4e4b\u524d\u96be\u4ee5\u8ba9\u7528\u6237\u53cb\u597d\u5730\u4f7f\u7528 node \u7684\u56de\u8c03\u3002\u7136\u800c\uff0c\u4f7f\u7528 async \u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0 \u201c\u771f\u5b9e\u201d \u7684\u4e2d\u95f4\u4ef6\u3002\u5bf9\u6bd4 Connect \u7684\u5b9e\u73b0\uff0c\u901a\u8fc7\u4e00\u7cfb\u5217\u529f\u80fd\u76f4\u63a5\u4f20\u9012\u63a7\u5236\uff0c\u76f4\u5230\u4e00\u4e2a\u8fd4\u56de\uff0cKoa \u8c03\u7528\u201c\u4e0b\u6e38\u201d\uff0c\u7136\u540e\u63a7\u5236\u6d41\u56de\u201c\u4e0a\u6e38\u201d\u3002",source:"@site/docs/backend/Node/Koa/\u7ea7\u8054.md",sourceDirName:"backend/Node/Koa",slug:"/backend/Node/Koa/\u7ea7\u8054",permalink:"/en/docs/backend/Node/Koa/\u7ea7\u8054",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Node/Koa/\u7ea7\u8054.md",tags:[],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:3,frontMatter:{title:"\u7ea7\u8054",sidebar_position:3},sidebar:"backEndSidebar",previous:{title:"\u5b89\u88c5",permalink:"/en/docs/backend/Node/Koa/\u5b89\u88c5"},next:{title:"\u7aef\u53e3\u7ed1\u5b9a",permalink:"/en/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a"}},d={},r=[],l={toc:r};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Koa \u4e2d\u95f4\u4ef6\u4ee5\u66f4\u4f20\u7edf\u7684\u65b9\u5f0f\u7ea7\u8054\uff0c\u60a8\u53ef\u80fd\u4e60\u60ef\u4f7f\u7528\u7c7b\u4f3c\u7684\u5de5\u5177 - \u4e4b\u524d\u96be\u4ee5\u8ba9\u7528\u6237\u53cb\u597d\u5730\u4f7f\u7528 node \u7684\u56de\u8c03\u3002\u7136\u800c\uff0c\u4f7f\u7528 async \u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0 \u201c\u771f\u5b9e\u201d \u7684\u4e2d\u95f4\u4ef6\u3002\u5bf9\u6bd4 Connect \u7684\u5b9e\u73b0\uff0c\u901a\u8fc7\u4e00\u7cfb\u5217\u529f\u80fd\u76f4\u63a5\u4f20\u9012\u63a7\u5236\uff0c\u76f4\u5230\u4e00\u4e2a\u8fd4\u56de\uff0cKoa \u8c03\u7528\u201c\u4e0b\u6e38\u201d\uff0c\u7136\u540e\u63a7\u5236\u6d41\u56de\u201c\u4e0a\u6e38\u201d\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u4ee5 \u201cHello World\u201d \u7684\u54cd\u5e94\u4f5c\u4e3a\u793a\u4f8b\uff0c\u5f53\u8bf7\u6c42\u5f00\u59cb\u65f6\u9996\u5148\u8bf7\u6c42\u6d41\u901a\u8fc7 x-response-time \u548c logging \u4e2d\u95f4\u4ef6\uff0c\u7136\u540e\u7ee7\u7eed\u79fb\u4ea4\u63a7\u5236\u7ed9 response \u4e2d\u95f4\u4ef6\u3002\u5f53\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u8c03\u7528 next() \u5219\u8be5\u51fd\u6570\u6682\u505c\u5e76\u5c06\u63a7\u5236\u4f20\u9012\u7ed9\u5b9a\u4e49\u7684\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002\u5f53\u5728\u4e0b\u6e38\u6ca1\u6709\u66f4\u591a\u7684\u4e2d\u95f4\u4ef6\u6267\u884c\u540e\uff0c\u5806\u6808\u5c06\u5c55\u5f00\u5e76\u4e14\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u6062\u590d\u6267\u884c\u5176\u4e0a\u6e38\u884c\u4e3a\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2anext\u51fd\u6570\u662f\u771f\u7684\u4ece\u4e0a\u5230\u4e0b\uff0c\u5373\u6587\u4ef6\u4e2d\u7684app.use\u7684\u5148\u540e\u987a\u5e8f\u6267\u884c\uff0c\u5230\u5e95\u90e8\u5c55\u5f00\u540e\uff0c\u518d\u53cd\u5411\u5411\u4e0a\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst app = new Koa();\n\nconst sleep = (ms) =>\n    new Promise((resolve) => {\n        setTimeout(() => {\n            resolve();\n        }, ms);\n    });\n\n// logger\n\napp.use(async (ctx, next) => {\n    console.log(1)\n    await next();\n    const rt = ctx.response.get('X-Response-Time');\n    console.log(`${ctx.method} ${ctx.url} - ${rt}`);\n});\n\n// x-response-time\n\napp.use(async (ctx, next) => {\n    console.log(2)\n    const start = Date.now();\n    await sleep(2000);\n    await next();\n    const ms = Date.now() - start;\n    console.log(ms)\n    ctx.set('X-Response-Time', `${ms}ms`);\n});\n\n// response\n\napp.use(async (ctx) => {\n    console.log(3)\n    ctx.body = 'Hello World';\n});\n\napp.listen(3000);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0a\u8ff0\u4ee3\u7801\u7684\u6253\u5370\u987a\u5e8f\u5e94\u662f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"1\n2\n3\n2004\nGET / - 2004ms\n")))}p.isMDXComponent=!0}}]);