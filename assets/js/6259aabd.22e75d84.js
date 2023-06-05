"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7884],{42025:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var a=s(87462),r=(s(67294),s(3905));s(16758);const n={title:"\u8bf7\u6c42(Request)",sidebar_position:7},l=void 0,u={unversionedId:"backend/Node/Koa/\u8bf7\u6c42",id:"backend/Node/Koa/\u8bf7\u6c42",title:"\u8bf7\u6c42(Request)",description:"Koa Request \u5bf9\u8c61\u662f\u5728 node \u7684 \u539f\u751f\u8bf7\u6c42\u5bf9\u8c61\u4e4b\u4e0a\u7684\u62bd\u8c61\uff0c\u63d0\u4f9b\u4e86\u8bf8\u591a\u5bf9 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u6709\u7528\u7684\u529f\u80fd\u3002",source:"@site/docs/backend/Node/Koa/\u8bf7\u6c42.md",sourceDirName:"backend/Node/Koa",slug:"/backend/Node/Koa/\u8bf7\u6c42",permalink:"/docs/backend/Node/Koa/\u8bf7\u6c42",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Node/Koa/\u8bf7\u6c42.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"2023\u5e746\u67085\u65e5",sidebarPosition:7,frontMatter:{title:"\u8bf7\u6c42(Request)",sidebar_position:7},sidebar:"backEndSidebar",previous:{title:"\u4e0a\u4e0b\u6587(Context)",permalink:"/docs/backend/Node/Koa/\u4e0a\u4e0b\u6587"},next:{title:"\u54cd\u5e94(Response)",permalink:"/docs/backend/Node/Koa/\u54cd\u5e94"}},p={},c=[{value:"API",id:"api",level:2},{value:"request.header",id:"requestheader",level:3},{value:"request.header=",id:"requestheader-1",level:3},{value:"request.headers",id:"requestheaders",level:3},{value:"request.headers=",id:"requestheaders-1",level:3},{value:"request.method",id:"requestmethod",level:3},{value:"request.method=",id:"requestmethod-1",level:3},{value:"request.length",id:"requestlength",level:3},{value:"request.url",id:"requesturl",level:3},{value:"request.url=",id:"requesturl-1",level:3},{value:"request.originalUrl",id:"requestoriginalurl",level:3},{value:"request.origin",id:"requestorigin",level:3},{value:"request.href",id:"requesthref",level:3},{value:"request.path",id:"requestpath",level:3},{value:"request.querystring",id:"requestquerystring",level:3},{value:"request.querystring=",id:"requestquerystring-1",level:3},{value:"request.search",id:"requestsearch",level:3},{value:"request.search=",id:"requestsearch-1",level:3},{value:"request.host",id:"requesthost",level:3},{value:"request.hostname",id:"requesthostname",level:3},{value:"request.URL",id:"requesturl-2",level:3},{value:"request.type",id:"requesttype",level:3},{value:"request.charset",id:"requestcharset",level:3},{value:"request.query",id:"requestquery",level:3},{value:"request.query=",id:"requestquery-1",level:3},{value:"request.fresh",id:"requestfresh",level:3},{value:"request.stale",id:"requeststale",level:3},{value:"request.protocol",id:"requestprotocol",level:3},{value:"request.secure",id:"requestsecure",level:3},{value:"request.ip",id:"requestip",level:3},{value:"request.ips",id:"requestips",level:3},{value:"request.subdomains",id:"requestsubdomains",level:3},{value:"request.is(types...)",id:"requestistypes",level:3},{value:"\u5185\u5bb9\u534f\u5546",id:"\u5185\u5bb9\u534f\u5546",level:3},{value:"request.accepts(types)",id:"requestacceptstypes",level:3},{value:"request.acceptsEncodings(encodings)",id:"requestacceptsencodingsencodings",level:3},{value:"request.acceptsCharsets(charsets)",id:"requestacceptscharsetscharsets",level:3},{value:"request.acceptsLanguages(langs)",id:"requestacceptslanguageslangs",level:3},{value:"request.idempotent",id:"requestidempotent",level:3},{value:"request.socket",id:"requestsocket",level:3},{value:"request.get(field)",id:"requestgetfield",level:3}],i={toc:c};function o(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Koa Request \u5bf9\u8c61\u662f\u5728 node \u7684 \u539f\u751f\u8bf7\u6c42\u5bf9\u8c61\u4e4b\u4e0a\u7684\u62bd\u8c61\uff0c\u63d0\u4f9b\u4e86\u8bf8\u591a\u5bf9 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u6709\u7528\u7684\u529f\u80fd\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ctx.request"),"\u5bf9\u8c61\u89e3\u6790\u540e\u7684\u6240\u6709\u5185\u5bb9\u672c\u8eab\u662f\u5305\u542b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ctx"),"\u5bf9\u8c61\u4e2d\u7684")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"requestheader"},"request.header"),(0,r.kt)("p",null,"\u8bf7\u6c42\u5934\u5bf9\u8c61\u3002\u8fd9\u4e0e node ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage"},"http.IncomingMessage")," \u4e0a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_message_headers"},"headers")," \u5b57\u6bb5\u76f8\u540c"),(0,r.kt)("h3",{id:"requestheader-1"},"request.header="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"requestheaders"},"request.headers"),(0,r.kt)("p",null,"\u8bf7\u6c42\u5934\u5bf9\u8c61\u3002\u522b\u540d\u4e3a request.header\u3002"),(0,r.kt)("h3",{id:"requestheaders-1"},"request.headers="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u5934\u5bf9\u8c61\u3002\u522b\u540d\u4e3a request.header=\u3002"),(0,r.kt)("h3",{id:"requestmethod"},"request.method"),(0,r.kt)("p",null,"\u8bf7\u6c42\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"requestmethod-1"},"request.method="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5bf9\u4e8e\u5b9e\u73b0\u8bf8\u5982 methodOverride() \u7684\u4e2d\u95f4\u4ef6\u662f\u6709\u7528\u7684\u3002"),(0,r.kt)("h3",{id:"requestlength"},"request.length"),(0,r.kt)("p",null,"\u8fd4\u56de\u4ee5\u6570\u5b57\u8fd4\u56de\u8bf7\u6c42\u7684 Content-Length\uff0c\u6216 undefined\u3002"),(0,r.kt)("h3",{id:"requesturl"},"request.url"),(0,r.kt)("p",null,"\u83b7\u53d6\u8bf7\u6c42 URL\u3002"),(0,r.kt)("h3",{id:"requesturl-1"},"request.url="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42 URL, \u5bf9 url \u91cd\u5199\u6709\u7528\u3002"),(0,r.kt)("h3",{id:"requestoriginalurl"},"request.originalUrl"),(0,r.kt)("p",null,"\u83b7\u53d6\u8bf7\u6c42\u539f\u59cbURL\u3002"),(0,r.kt)("h3",{id:"requestorigin"},"request.origin"),(0,r.kt)("p",null,"\u83b7\u53d6URL\u7684\u6765\u6e90\uff0c\u5305\u62ec protocol \u548c host\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.request.origin\n// => http://example.com\n")),(0,r.kt)("h3",{id:"requesthref"},"request.href"),(0,r.kt)("p",null,"\u83b7\u53d6\u5b8c\u6574\u7684\u8bf7\u6c42URL\uff0c\u5305\u62ec protocol\uff0chost \u548c url\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.request.href\n// => http://example.com/foo/bar?q=1\n")),(0,r.kt)("h3",{id:"requestpath"},"request.path"),(0,r.kt)("p",null,"\u83b7\u53d6\u8bf7\u6c42\u8def\u5f84\u540d\u3002"),(0,r.kt)("p",null,"request.path="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u8bf7\u6c42\u8def\u5f84\u540d\uff0c\u5e76\u5728\u5b58\u5728\u65f6\u4fdd\u7559\u67e5\u8be2\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"requestquerystring"},"request.querystring"),(0,r.kt)("p",null,"\u6839\u636e ? \u83b7\u53d6\u539f\u59cb\u67e5\u8be2\u5b57\u7b26\u4e32."),(0,r.kt)("h3",{id:"requestquerystring-1"},"request.querystring="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u539f\u59cb\u67e5\u8be2\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"requestsearch"},"request.search"),(0,r.kt)("p",null,"\u4f7f\u7528 ? \u83b7\u53d6\u539f\u59cb\u67e5\u8be2\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"requestsearch-1"},"request.search="),(0,r.kt)("p",null,"\u8bbe\u7f6e\u539f\u59cb\u67e5\u8be2\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"requesthost"},"request.host"),(0,r.kt)("p",null,"\u5b58\u5728\u65f6\u83b7\u53d6\u4e3b\u673a\uff08hostname:port\uff09\u3002\u5f53 app.proxy \u662f true \u65f6\u652f\u6301 X-Forwarded-Host\uff0c\u5426\u5219\u4f7f\u7528 Host\u3002"),(0,r.kt)("h3",{id:"requesthostname"},"request.hostname"),(0,r.kt)("p",null,"\u5b58\u5728\u65f6\u83b7\u53d6\u4e3b\u673a\u540d\u3002\u5f53 app.proxy \u662f true \u65f6\u652f\u6301 X-Forwarded-Host\uff0c\u5426\u5219\u4f7f\u7528 Host\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e3b\u673a\u662f IPv6, Koa \u89e3\u6790\u5230 WHATWG URL API, \u6ce8\u610f \u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd\u3002"),(0,r.kt)("h3",{id:"requesturl-2"},"request.URL"),(0,r.kt)("p",null,"\u83b7\u53d6 WHATWG \u89e3\u6790\u7684 URL \u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"requesttype"},"request.type"),(0,r.kt)("p",null,'\u83b7\u53d6\u8bf7\u6c42 Content-Type, \u4e0d\u542b "charset" \u7b49\u53c2\u6570\u3002'),(0,r.kt)("p",null,"\u8bd1\u8005\u6ce8: \u8fd9\u91cc\u5176\u5b9e\u662f\u53ea\u83b7\u53d6 mime-type, \u8be6\u89c1\u6e90\u7801\u53ca\u5176\u6ce8\u91ca"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const ct = ctx.request.type;\n// => "image/png"\n')),(0,r.kt)("h3",{id:"requestcharset"},"request.charset"),(0,r.kt)("p",null,"\u5b58\u5728\u65f6\u83b7\u53d6\u8bf7\u6c42\u5b57\u7b26\u96c6\uff0c\u6216\u8005 undefined\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ctx.request.charset;\n// => "utf-8"\n')),(0,r.kt)("h3",{id:"requestquery"},"request.query"),(0,r.kt)("p",null,"\u83b7\u53d6\u89e3\u6790\u7684\u67e5\u8be2\u5b57\u7b26\u4e32, \u5f53\u6ca1\u6709\u67e5\u8be2\u5b57\u7b26\u4e32\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64 getter ",(0,r.kt)("em",{parentName:"p"},"\u4e0d")," \u652f\u6301\u5d4c\u5957\u89e3\u6790\u3002"),(0,r.kt)("p",null,'\u4f8b\u5982 "',(0,r.kt)("inlineCode",{parentName:"p"},"color=blue&size=small"),'":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  color: 'blue',\n  size: 'small'\n}\n")),(0,r.kt)("h3",{id:"requestquery-1"},"request.query="),(0,r.kt)("p",null,"\u5c06\u67e5\u8be2\u5b57\u7b26\u4e32\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u5bf9\u8c61\u3002 \u8bf7\u6ce8\u610f\uff0c\u6b64 setter ",(0,r.kt)("em",{parentName:"p"},"\u4e0d")," \u652f\u6301\u5d4c\u5957\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ctx.query = { next: '/login' };\n")),(0,r.kt)("h3",{id:"requestfresh"},"request.fresh"),(0,r.kt)("p",null,"\u68c0\u67e5\u8bf7\u6c42\u7f13\u5b58\u662f\u5426\u201c\u65b0\u9c9c\u201d\uff0c\u4e5f\u5c31\u662f\u5185\u5bb9\u6ca1\u6709\u6539\u53d8\u3002\u6b64\u65b9\u6cd5\u7528\u4e8e If-None-Match / ETag, \u548c If-Modified-Since \u548c Last-Modified \u4e4b\u95f4\u7684\u7f13\u5b58\u534f\u5546\u3002 \u5728\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u8fd9\u4e9b\u54cd\u5e94\u5934\u540e\u5e94\u8be5\u5f15\u7528\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u65b0\u9c9c\u5ea6\u68c0\u67e5\u9700\u8981\u72b6\u600120x\u6216304\nctx.status = 200;\nctx.set('ETag', '123');\n\n// \u7f13\u5b58\u662f\u597d\u7684\nif (ctx.fresh) {\n  ctx.status = 304;\n  return;\n}\n\n// \u7f13\u5b58\u662f\u9648\u65e7\u7684\n// \u83b7\u53d6\u65b0\u6570\u636e\nctx.body = await db.find('something');\n")),(0,r.kt)("h3",{id:"requeststale"},"request.stale"),(0,r.kt)("p",null,"\u4e0e request.fresh \u76f8\u53cd."),(0,r.kt)("h3",{id:"requestprotocol"},"request.protocol"),(0,r.kt)("p",null,"\u8fd4\u56de\u8bf7\u6c42\u534f\u8bae\uff0c\u201chttps\u201d \u6216 \u201chttp\u201d\u3002\u5f53 app.proxy \u662f true \u65f6\u652f\u6301 X-Forwarded-Proto\u3002"),(0,r.kt)("h3",{id:"requestsecure"},"request.secure"),(0,r.kt)("p",null,'\u901a\u8fc7 ctx.protocol == "https" \u6765\u68c0\u67e5\u8bf7\u6c42\u662f\u5426\u901a\u8fc7 TLS \u53d1\u51fa\u3002'),(0,r.kt)("h3",{id:"requestip"},"request.ip"),(0,r.kt)("p",null,"\u8bf7\u6c42\u8fdc\u7a0b\u5730\u5740\u3002 \u5f53 app.proxy \u662f true \u65f6\u652f\u6301 X-Forwarded-Proto\u3002"),(0,r.kt)("h3",{id:"requestips"},"request.ips"),(0,r.kt)("p",null,"\u5f53 X-Forwarded-For \u5b58\u5728\u5e76\u4e14 app.proxy \u88ab\u542f\u7528\u65f6\uff0c\u8fd9\u4e9b ips \u7684\u6570\u7ec4\u88ab\u8fd4\u56de\uff0c\u4ece\u4e0a\u6e38 - >\u4e0b\u6e38\u6392\u5e8f\u3002 \u7981\u7528\u65f6\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),(0,r.kt)("p",null,'\u4f8b\u5982\uff0c\u5982\u679c\u503c\u662f "client, proxy1, proxy2"\uff0c\u5c06\u4f1a\u5f97\u5230\u6570\u7ec4 ','["client", "proxy1", "proxy2"]',"\u3002"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u53cd\u5411\u4ee3\u7406\uff08nginx\uff09\u90fd\u901a\u8fc7 proxy_add_x_forwarded_for \u8bbe\u7f6e\u4e86 x-forwarded-for\uff0c\u8fd9\u5e26\u6765\u4e86\u4e00\u5b9a\u7684\u5b89\u5168\u98ce\u9669\u3002\u6076\u610f\u653b\u51fb\u8005\u53ef\u4ee5\u901a\u8fc7\u4f2a\u9020 X-Forwarded-For \u8bf7\u6c42\u5934\u6765\u4f2a\u9020\u5ba2\u6237\u7aef\u7684ip\u5730\u5740\u3002 \u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u5177\u6709 'forged' \u7684 X-Forwarded-For \u8bf7\u6c42\u5934\u3002 \u5728\u7531\u53cd\u5411\u4ee3\u7406\u8f6c\u53d1\u4e4b\u540e\uff0crequest.ips \u5c06\u662f ","['forged', 'client', 'proxy1', 'proxy2']","\u3002"),(0,r.kt)("p",null,"Koa \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u907f\u514d\u88ab\u7ed5\u8fc7\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u53ef\u4ee5\u63a7\u5236\u53cd\u5411\u4ee3\u7406\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u914d\u7f6e\u6765\u907f\u514d\u7ed5\u8fc7\uff0c\u6216\u8005\u4f7f\u7528 koa \u63d0\u4f9b\u7684 app.proxyIpHeader \u6765\u907f\u514d\u8bfb\u53d6 x-forwarded-for \u83b7\u53d6 ips\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const app = new Koa({\n  proxy: true,\n  proxyIpHeader: 'X-Real-IP',\n});\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u786e\u5207\u77e5\u9053\u670d\u52a1\u5668\u524d\u9762\u6709\u591a\u5c11\u4e2a\u53cd\u5411\u4ee3\u7406\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e app.maxIpsCount \u6765\u907f\u514d\u8bfb\u53d6\u7528\u6237\u7684\u4f2a\u9020\u7684\u8bf7\u6c42\u5934\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const app = new Koa({\n  proxy: true,\n  maxIpsCount: 1, // \u670d\u52a1\u5668\u524d\u53ea\u6709\u4e00\u4e2a\u4ee3\u7406\n});\n\n// request.header['X-Forwarded-For'] === [ '127.0.0.1', '127.0.0.2' ];\n// ctx.ips === [ '127.0.0.2' ];\n")),(0,r.kt)("h3",{id:"requestsubdomains"},"request.subdomains"),(0,r.kt)("p",null,"\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u5b50\u57df\u3002"),(0,r.kt)("p",null,"\u5b50\u57df\u662f\u5e94\u7528\u7a0b\u5e8f\u4e3b\u57df\u4e4b\u524d\u4e3b\u673a\u7684\u70b9\u5206\u9694\u90e8\u5206\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e94\u7528\u7a0b\u5e8f\u7684\u57df\u540d\u5047\u5b9a\u4e3a\u4e3b\u673a\u7684\u6700\u540e\u4e24\u4e2a\u90e8\u5206\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e app.subdomainOffset \u6765\u66f4\u6539\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u57df\u540d\u4e3a\u201ctobi.ferrets.example.com\u201d\uff1a"),(0,r.kt)("p",null,"\u5982\u679c app.subdomainOffset \u672a\u8bbe\u7f6e, ctx.subdomains \u662f ",'["ferrets", "tobi"]',". \u5982\u679c app.subdomainOffset \u662f 3, ctx.subdomains \u662f ",'["tobi"]',"."),(0,r.kt)("h3",{id:"requestistypes"},"request.is(types...)"),(0,r.kt)("p",null,"\u68c0\u67e5\u4f20\u5165\u8bf7\u6c42\u662f\u5426\u5305\u542b Content-Type \u6d88\u606f\u5934\u5b57\u6bb5\uff0c \u5e76\u4e14\u5305\u542b\u4efb\u610f\u7684 mime type\u3002 \u5982\u679c\u6ca1\u6709\u8bf7\u6c42\u4e3b\u4f53\uff0c\u8fd4\u56de null\u3002 \u5982\u679c\u6ca1\u6709\u5185\u5bb9\u7c7b\u578b\uff0c\u6216\u8005\u5339\u914d\u5931\u8d25\uff0c\u5219\u8fd4\u56de false\u3002 \u53cd\u4e4b\u5219\u8fd4\u56de\u5339\u914d\u7684 content-type\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4f7f\u7528 Content-Type: text/html; charset=utf-8\nctx.is('html'); // => 'html'\nctx.is('text/html'); // => 'text/html'\nctx.is('text/*', 'text/html'); // => 'text/html'\n\n// \u5f53 Content-Type \u662f application/json \u65f6\nctx.is('json', 'urlencoded'); // => 'json'\nctx.is('application/json'); // => 'application/json'\nctx.is('html', 'application/*'); // => 'application/json'\n\nctx.is('html'); // => false\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8981\u786e\u4fdd\u4ec5\u5c06\u56fe\u50cf\u53d1\u9001\u5230\u7ed9\u5b9a\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (ctx.is('image/*')) {\n  // \u5904\u7406\n} else {\n  ctx.throw(415, 'images only!');\n}\n")),(0,r.kt)("h3",{id:"\u5185\u5bb9\u534f\u5546"},"\u5185\u5bb9\u534f\u5546"),(0,r.kt)("p",null,"Koa \u7684 request \u5bf9\u8c61\u5305\u62ec\u7531 accepts \u548c negotiator \u63d0\u4f9b\u7684\u5185\u5bb9\u534f\u5546\u5b9e\u7528\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u5b9e\u7528\u51fd\u6570\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.accepts(types)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.acceptsEncodings(types)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.acceptsCharsets(charsets)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request.acceptsLanguages(langs)"))),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u7c7b\u578b\uff0c\u5219\u8fd4\u56de",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709"),"\u53ef\u63a5\u53d7\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,'\u5982\u679c\u63d0\u4f9b\u591a\u79cd\u7c7b\u578b\uff0c\u5c06\u8fd4\u56de\u6700\u4f73\u5339\u914d\u3002 \u5982\u679c\u6ca1\u6709\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de\u4e00\u4e2afalse\uff0c\u4f60\u5e94\u8be5\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a406 "Not Acceptable" \u54cd\u5e94\u3002'),(0,r.kt)("p",null,"\u5982\u679c\u63a5\u6536\u5230\u4efb\u4f55\u7c7b\u578b\u7684\u63a5\u6536\u5934\uff0c\u5219\u4f1a\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7c7b\u578b\u3002 \u56e0\u6b64\uff0c\u4f60\u63d0\u4f9b\u7684\u7c7b\u578b\u7684\u987a\u5e8f\u5f88\u91cd\u8981\u3002"),(0,r.kt)("h3",{id:"requestacceptstypes"},"request.accepts(types)"),(0,r.kt)("p",null,"\u68c0\u67e5\u7ed9\u5b9a\u7684 type(s) \u662f\u5426\u53ef\u4ee5\u63a5\u53d7\uff0c\u5982\u679c true\uff0c\u8fd4\u56de\u6700\u4f73\u5339\u914d\uff0c\u5426\u5219\u4e3a false\u3002 type \u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u6216\u591a\u4e2a mime \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\uff0c\u5982 application/json\uff0c\u6269\u5c55\u540d\u79f0\u5982 json\uff0c\u6216\u6570\u7ec4 ",'["json", "html", "text/plain"]',"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Accept: text/html\nctx.accepts('html');\n// => \"html\"\n\n// Accept: text/*, application/json\nctx.accepts('html');\n// => \"html\"\nctx.accepts('text/html');\n// => \"text/html\"\nctx.accepts('json', 'text');\n// => \"json\"\nctx.accepts('application/json');\n// => \"application/json\"\n\n// Accept: text/*, application/json\nctx.accepts('image/png');\nctx.accepts('png');\n// => false\n\n// Accept: text/*;q=.5, application/json\nctx.accepts(['html', 'json']);\nctx.accepts('html', 'json');\n// => \"json\"\n\n// No Accept header\nctx.accepts('html', 'json');\n// => \"html\"\nctx.accepts('json', 'html');\n// => \"json\"\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u591a\u6b21\u8c03\u7528 ctx.accepts()\uff0c\u6216\u4f7f\u7528 switch\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"switch (ctx.accepts('json', 'html', 'text')) {\n  case 'json': break;\n  case 'html': break;\n  case 'text': break;\n  default: ctx.throw(406, 'json, html, or text only');\n}\n")),(0,r.kt)("h3",{id:"requestacceptsencodingsencodings"},"request.acceptsEncodings(encodings)"),(0,r.kt)("p",null,"\u68c0\u67e5 encodings \u662f\u5426\u53ef\u4ee5\u63a5\u53d7\uff0c\u8fd4\u56de\u6700\u4f73\u5339\u914d\u4e3a true\uff0c\u5426\u5219\u4e3a false\u3002 \u8bf7\u6ce8\u610f\uff0c\u60a8\u5e94\u8be5\u5c06identity \u4f5c\u4e3a\u7f16\u7801\u4e4b\u4e00\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Accept-Encoding: gzip\nctx.acceptsEncodings('gzip', 'deflate', 'identity');\n// => \"gzip\"\n\nctx.acceptsEncodings(['gzip', 'deflate', 'identity']);\n// => \"gzip\"\n")),(0,r.kt)("p",null,"\u5f53\u6ca1\u6709\u7ed9\u51fa\u53c2\u6570\u65f6\uff0c\u6240\u6709\u63a5\u53d7\u7684\u7f16\u7801\u5c06\u4f5c\u4e3a\u6570\u7ec4\u8fd4\u56de\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Accept-Encoding: gzip, deflate\nctx.acceptsEncodings();\n// => ["gzip", "deflate", "identity"]\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u663e\u5f0f\u5730\u53d1\u9001 identity;q=0\uff0c\u90a3\u4e48 identity \u7f16\u7801\uff08\u8fd9\u610f\u5473\u7740\u6ca1\u6709\u7f16\u7801\uff09\u53ef\u80fd\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\u3002 \u867d\u7136\u8fd9\u662f\u4e00\u4e2a\u8fb9\u7f18\u7684\u60c5\u51b5\uff0c\u4f60\u4ecd\u7136\u5e94\u8be5\u5904\u7406\u8fd9\u79cd\u65b9\u6cd5\u8fd4\u56de false \u7684\u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"requestacceptscharsetscharsets"},"request.acceptsCharsets(charsets)"),(0,r.kt)("p",null,"\u68c0\u67e5 charsets \u662f\u5426\u53ef\u4ee5\u63a5\u53d7\uff0c\u5728 true \u65f6\u8fd4\u56de\u6700\u4f73\u5339\u914d\uff0c\u5426\u5219\u4e3a false\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5\nctx.acceptsCharsets('utf-8', 'utf-7');\n// => \"utf-8\"\n\nctx.acceptsCharsets(['utf-7', 'utf-8']);\n// => \"utf-8\"\n")),(0,r.kt)("p",null,"\u5f53\u6ca1\u6709\u53c2\u6570\u88ab\u8d4b\u4e88\u6240\u6709\u88ab\u63a5\u53d7\u7684\u5b57\u7b26\u96c6\u5c06\u4f5c\u4e3a\u6570\u7ec4\u8fd4\u56de\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5\nctx.acceptsCharsets();\n// => ["utf-8", "utf-7", "iso-8859-1"]\n')),(0,r.kt)("h3",{id:"requestacceptslanguageslangs"},"request.acceptsLanguages(langs)"),(0,r.kt)("p",null,"\u68c0\u67e5 langs \u662f\u5426\u53ef\u4ee5\u63a5\u53d7\uff0c\u5982\u679c\u4e3a true\uff0c\u8fd4\u56de\u6700\u4f73\u5339\u914d\uff0c\u5426\u5219\u4e3a false\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Accept-Language: en;q=0.8, es, pt\nctx.acceptsLanguages('es', 'en');\n// => \"es\"\n\nctx.acceptsLanguages(['en', 'es']);\n// => \"es\"\n")),(0,r.kt)("p",null,"\u5f53\u6ca1\u6709\u53c2\u6570\u88ab\u8d4b\u4e88\u6240\u6709\u63a5\u53d7\u7684\u8bed\u8a00\u5c06\u4f5c\u4e3a\u6570\u7ec4\u8fd4\u56de\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Accept-Language: en;q=0.8, es, pt\nctx.acceptsLanguages();\n// => ["es", "pt", "en"]\n')),(0,r.kt)("h3",{id:"requestidempotent"},"request.idempotent"),(0,r.kt)("p",null,"\u68c0\u67e5\u8bf7\u6c42\u662f\u5426\u662f\u5e42\u7b49\u7684\u3002"),(0,r.kt)("h3",{id:"requestsocket"},"request.socket"),(0,r.kt)("p",null,"\u8fd4\u56de\u8bf7\u6c42\u5957\u63a5\u5b57\u3002"),(0,r.kt)("h3",{id:"requestgetfield"},"request.get(field)"),(0,r.kt)("p",null,"\u8fd4\u56de\u8bf7\u6c42\u5934(header), field \u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"))}o.isMDXComponent=!0}}]);