"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6706],{43308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(87462),s=(a(67294),a(3905));a(16758);const l={title:"\u54cd\u5e94(Response)",sidebar_position:8},r=void 0,p={unversionedId:"backend/Node/Koa/\u54cd\u5e94",id:"backend/Node/Koa/\u54cd\u5e94",title:"\u54cd\u5e94(Response)",description:"Koa Response \u5bf9\u8c61\u662f\u5728 node \u7684\u539f\u751f\u54cd\u5e94\u5bf9\u8c61\u4e4b\u4e0a\u7684\u62bd\u8c61\uff0c\u63d0\u4f9b\u4e86\u8bf8\u591a\u5bf9 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u6709\u7528\u7684\u529f\u80fd\u3002",source:"@site/docs/backend/Node/Koa/\u54cd\u5e94.md",sourceDirName:"backend/Node/Koa",slug:"/backend/Node/Koa/\u54cd\u5e94",permalink:"/docs/backend/Node/Koa/\u54cd\u5e94",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Node/Koa/\u54cd\u5e94.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",sidebarPosition:8,frontMatter:{title:"\u54cd\u5e94(Response)",sidebar_position:8},sidebar:"backEndSidebar",previous:{title:"\u8bf7\u6c42(Request)",permalink:"/docs/backend/Node/Koa/\u8bf7\u6c42"},next:{title:"SpringSecurity",permalink:"/docs/backend/Spring/SpringSecurity"}},o={},i=[{value:"API",id:"api",level:2},{value:"response.header",id:"responseheader",level:3},{value:"response.headers",id:"responseheaders",level:3},{value:"response.socket",id:"responsesocket",level:3},{value:"response.status",id:"responsestatus",level:3},{value:"response.status=",id:"responsestatus-1",level:3},{value:"response.message",id:"responsemessage",level:3},{value:"response.message=",id:"responsemessage-1",level:3},{value:"response.length=",id:"responselength",level:3},{value:"response.length",id:"responselength-1",level:3},{value:"response.body",id:"responsebody",level:3},{value:"response.body=",id:"responsebody-1",level:3},{value:"String",id:"string",level:4},{value:"Buffer",id:"buffer",level:4},{value:"Stream",id:"stream",level:4},{value:"Object",id:"object",level:4},{value:"response.get(field)",id:"responsegetfield",level:3},{value:"response.has(field)",id:"responsehasfield",level:3},{value:"response.append(field, value)",id:"responseappendfield-value",level:3},{value:"response.set(fields)",id:"responsesetfields",level:3},{value:"response.remove(field)",id:"responseremovefield",level:3},{value:"response.type",id:"responsetype",level:3},{value:"response.type=",id:"responsetype-1",level:3},{value:"response.is(types...)",id:"responseistypes",level:3},{value:"response.redirect(url, alt)",id:"responseredirecturl-alt",level:3},{value:"response.attachment(filename, options)",id:"responseattachmentfilename-options",level:3},{value:"response.headerSent",id:"responseheadersent",level:3},{value:"response.lastModified",id:"responselastmodified",level:3},{value:"response.lastModified=",id:"responselastmodified-1",level:3},{value:"response.etag=",id:"responseetag",level:3},{value:"response.vary(field)",id:"responsevaryfield",level:3},{value:"response.flushHeaders()",id:"responseflushheaders",level:3}],d={toc:i};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Koa Response \u5bf9\u8c61\u662f\u5728 node \u7684\u539f\u751f\u54cd\u5e94\u5bf9\u8c61\u4e4b\u4e0a\u7684\u62bd\u8c61\uff0c\u63d0\u4f9b\u4e86\u8bf8\u591a\u5bf9 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u6709\u7528\u7684\u529f\u80fd\u3002"),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"responseheader"},"response.header"),(0,s.kt)("p",null,"\u54cd\u5e94\u5934\u5bf9\u8c61\u3002"),(0,s.kt)("h3",{id:"responseheaders"},"response.headers"),(0,s.kt)("p",null,"\u54cd\u5e94\u5934\u5bf9\u8c61\u3002\u522b\u540d\u662f response.header\u3002"),(0,s.kt)("h3",{id:"responsesocket"},"response.socket"),(0,s.kt)("p",null,"\u54cd\u5e94\u5957\u63a5\u5b57\u3002 \u4f5c\u4e3a request.socket \u6307\u5411 net.Socket \u5b9e\u4f8b\u3002"),(0,s.kt)("h3",{id:"responsestatus"},"response.status"),(0,s.kt)("p",null,"\u83b7\u53d6\u54cd\u5e94\u72b6\u6001\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cresponse.status \u8bbe\u7f6e\u4e3a 404 \u800c\u4e0d\u662f\u50cf node \u7684 res.statusCode \u90a3\u6837\u9ed8\u8ba4\u4e3a 200\u3002"),(0,s.kt)("h3",{id:"responsestatus-1"},"response.status="),(0,s.kt)("p",null,"\u901a\u8fc7\u6570\u5b57\u4ee3\u7801\u8bbe\u7f6e\u54cd\u5e94\u72b6\u6001\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'100 "continue"'),(0,s.kt)("li",{parentName:"ul"},'101 "switching protocols"'),(0,s.kt)("li",{parentName:"ul"},'102 "processing"'),(0,s.kt)("li",{parentName:"ul"},'200 "ok"'),(0,s.kt)("li",{parentName:"ul"},'201 "created"'),(0,s.kt)("li",{parentName:"ul"},'202 "accepted"'),(0,s.kt)("li",{parentName:"ul"},'203 "non-authoritative information"'),(0,s.kt)("li",{parentName:"ul"},'204 "no content"'),(0,s.kt)("li",{parentName:"ul"},'205 "reset content"'),(0,s.kt)("li",{parentName:"ul"},'206 "partial content"'),(0,s.kt)("li",{parentName:"ul"},'207 "multi-status"'),(0,s.kt)("li",{parentName:"ul"},'208 "already reported"'),(0,s.kt)("li",{parentName:"ul"},'226 "im used"'),(0,s.kt)("li",{parentName:"ul"},'300 "multiple choices"'),(0,s.kt)("li",{parentName:"ul"},'301 "moved permanently"'),(0,s.kt)("li",{parentName:"ul"},'302 "found"'),(0,s.kt)("li",{parentName:"ul"},'303 "see other"'),(0,s.kt)("li",{parentName:"ul"},'304 "not modified"'),(0,s.kt)("li",{parentName:"ul"},'305 "use proxy"'),(0,s.kt)("li",{parentName:"ul"},'307 "temporary redirect"'),(0,s.kt)("li",{parentName:"ul"},'308 "permanent redirect"'),(0,s.kt)("li",{parentName:"ul"},'400 "bad request"'),(0,s.kt)("li",{parentName:"ul"},'401 "unauthorized"'),(0,s.kt)("li",{parentName:"ul"},'402 "payment required"'),(0,s.kt)("li",{parentName:"ul"},'403 "forbidden"'),(0,s.kt)("li",{parentName:"ul"},'404 "not found"'),(0,s.kt)("li",{parentName:"ul"},'405 "method not allowed"'),(0,s.kt)("li",{parentName:"ul"},'406 "not acceptable"'),(0,s.kt)("li",{parentName:"ul"},'407 "proxy authentication required"'),(0,s.kt)("li",{parentName:"ul"},'408 "request timeout"'),(0,s.kt)("li",{parentName:"ul"},'409 "conflict"'),(0,s.kt)("li",{parentName:"ul"},'410 "gone"'),(0,s.kt)("li",{parentName:"ul"},'411 "length required"'),(0,s.kt)("li",{parentName:"ul"},'412 "precondition failed"'),(0,s.kt)("li",{parentName:"ul"},'413 "payload too large"'),(0,s.kt)("li",{parentName:"ul"},'414 "uri too long"'),(0,s.kt)("li",{parentName:"ul"},'415 "unsupported media type"'),(0,s.kt)("li",{parentName:"ul"},'416 "range not satisfiable"'),(0,s.kt)("li",{parentName:"ul"},'417 "expectation failed"'),(0,s.kt)("li",{parentName:"ul"},'418 "I\'m a teapot"'),(0,s.kt)("li",{parentName:"ul"},'422 "unprocessable entity"'),(0,s.kt)("li",{parentName:"ul"},'423 "locked"'),(0,s.kt)("li",{parentName:"ul"},'424 "failed dependency"'),(0,s.kt)("li",{parentName:"ul"},'426 "upgrade required"'),(0,s.kt)("li",{parentName:"ul"},'428 "precondition required"'),(0,s.kt)("li",{parentName:"ul"},'429 "too many requests"'),(0,s.kt)("li",{parentName:"ul"},'431 "request header fields too large"'),(0,s.kt)("li",{parentName:"ul"},'500 "internal server error"'),(0,s.kt)("li",{parentName:"ul"},'501 "not implemented"'),(0,s.kt)("li",{parentName:"ul"},'502 "bad gateway"'),(0,s.kt)("li",{parentName:"ul"},'503 "service unavailable"'),(0,s.kt)("li",{parentName:"ul"},'504 "gateway timeout"'),(0,s.kt)("li",{parentName:"ul"},'505 "http version not supported"'),(0,s.kt)("li",{parentName:"ul"},'506 "variant also negotiates"'),(0,s.kt)("li",{parentName:"ul"},'507 "insufficient storage"'),(0,s.kt)("li",{parentName:"ul"},'508 "loop detected"'),(0,s.kt)("li",{parentName:"ul"},'510 "not extended"'),(0,s.kt)("li",{parentName:"ul"},'511 "network authentication required"')),(0,s.kt)("p",null,"\u6ce8\u610f: \u4e0d\u7528\u592a\u5728\u610f\u8bb0\u4f4f\u8fd9\u4e9b\u5b57\u7b26\u4e32, \u5982\u679c\u4f60\u5199\u9519\u4e86,\u53ef\u4ee5\u67e5\u9605\u8fd9\u4e2a\u5217\u8868\u968f\u65f6\u66f4\u6b63."),(0,s.kt)("p",null,"\u7531\u4e8e response.status \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a 404\uff0c\u56e0\u6b64\u53d1\u9001\u6ca1\u6709 body \u4e14\u72b6\u6001\u4e0d\u540c\u7684\u54cd\u5e94\u7684\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.response.status = 200;\n\n// \u6216\u5176\u4ed6\u4efb\u4f55\u72b6\u6001\nctx.response.status = 204;\n")),(0,s.kt)("h3",{id:"responsemessage"},"response.message"),(0,s.kt)("p",null,"\u83b7\u53d6\u54cd\u5e94\u7684\u72b6\u6001\u6d88\u606f. \u9ed8\u8ba4\u60c5\u51b5\u4e0b, response.message \u4e0e response.status \u5173\u8054."),(0,s.kt)("h3",{id:"responsemessage-1"},"response.message="),(0,s.kt)("p",null,"\u5c06\u54cd\u5e94\u7684\u72b6\u6001\u6d88\u606f\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u503c\u3002"),(0,s.kt)("h3",{id:"responselength"},"response.length="),(0,s.kt)("p",null,"\u5c06\u54cd\u5e94\u7684 Content-Length \u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u503c\u3002"),(0,s.kt)("h3",{id:"responselength-1"},"response.length"),(0,s.kt)("p",null,"\u4ee5\u6570\u5b57\u8fd4\u56de\u54cd\u5e94\u7684 Content-Length\uff0c\u6216\u8005\u4ecectx.body\u63a8\u5bfc\u51fa\u6765\uff0c\u6216\u8005undefined\u3002"),(0,s.kt)("h3",{id:"responsebody"},"response.body"),(0,s.kt)("p",null,"\u83b7\u53d6\u54cd\u5e94\u4e3b\u4f53\u3002"),(0,s.kt)("h3",{id:"responsebody-1"},"response.body="),(0,s.kt)("p",null,"\u5c06\u54cd\u5e94\u4f53\u8bbe\u7f6e\u4e3a\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"string \u5199\u5165"),(0,s.kt)("li",{parentName:"ul"},"Buffer \u5199\u5165"),(0,s.kt)("li",{parentName:"ul"},"Stream \u7ba1\u9053"),(0,s.kt)("li",{parentName:"ul"},"Object || Array JSON-\u5b57\u7b26\u4e32\u5316"),(0,s.kt)("li",{parentName:"ul"},"null \u65e0\u5185\u5bb9\u54cd\u5e94")),(0,s.kt)("p",null,"\u5982\u679c response.status \u672a\u88ab\u8bbe\u7f6e, Koa \u5c06\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u72b6\u6001\u4e3a 200 \u6216 204\u3002"),(0,s.kt)("p",null,"Koa \u6ca1\u6709\u9632\u8303\u4f5c\u4e3a\u54cd\u5e94\u4f53\u7684\u6240\u6709\u5185\u5bb9 - \u51fd\u6570\u6ca1\u6709\u6709\u610f\u4e49\u5730\u5e8f\u5217\u5316\uff0c\u8fd4\u56de\u5e03\u5c14\u503c\u53ef\u80fd\u4f1a\u6839\u636e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u800c\u6709\u610f\u4e49\u3002\u5e76\u4e14\u5f53\u9519\u8bef\u751f\u6548\u65f6\uff0c\u5b83\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c \u9519\u8bef\u7684\u5c5e\u6027\u65e0\u6cd5\u679a\u4e3e\u3002 \u6211\u4eec\u5efa\u8bae\u5728\u60a8\u7684\u5e94\u7528\u4e2d\u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u4ee5\u786e\u5b9a\u6bcf\u4e2a\u5e94\u7528\u7684\u6b63\u6587\u7c7b\u578b\u3002 \u793a\u4f8b\u4e2d\u95f4\u4ef6\u53ef\u80fd\u662f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use(async (ctx, next) => {\n  await next()\n\n  ctx.assert.equal('object', typeof ctx, 500, '\u67d0\u4e9b\u5f00\u53d1\u9519\u8bef')\n})\n")),(0,s.kt)("h4",{id:"string"},"String"),(0,s.kt)("p",null,"Content-Type \u9ed8\u8ba4\u4e3a text/html \u6216 text/plain, \u540c\u65f6\u9ed8\u8ba4\u5b57\u7b26\u96c6\u662f utf-8\u3002Content-Length \u5b57\u6bb5\u4e5f\u662f\u5982\u6b64\u3002"),(0,s.kt)("h4",{id:"buffer"},"Buffer"),(0,s.kt)("p",null,"Content-Type \u9ed8\u8ba4\u4e3a application/octet-stream, \u5e76\u4e14 Content-Length \u5b57\u6bb5\u4e5f\u662f\u5982\u6b64\u3002"),(0,s.kt)("h4",{id:"stream"},"Stream"),(0,s.kt)("p",null,"Content-Type \u9ed8\u8ba4\u4e3a application/octet-stream\u3002"),(0,s.kt)("p",null,"\u6bcf\u5f53\u6d41\u88ab\u8bbe\u7f6e\u4e3a\u54cd\u5e94\u4e3b\u4f53\u65f6\uff0c.onerror \u4f5c\u4e3a\u4fa6\u542c\u5668\u81ea\u52a8\u6dfb\u52a0\u5230 error \u4e8b\u4ef6\u4e2d\u4ee5\u6355\u83b7\u4efb\u4f55\u9519\u8bef\u3002\u6b64\u5916\uff0c\u6bcf\u5f53\u8bf7\u6c42\u5173\u95ed\uff08\u751a\u81f3\u8fc7\u65e9\uff09\u65f6\uff0c\u6d41\u90fd\u5c06\u88ab\u9500\u6bc1\u3002\u5982\u679c\u4f60\u4e0d\u60f3\u8981\u8fd9\u4e24\u4e2a\u529f\u80fd\uff0c\u8bf7\u52ff\u76f4\u63a5\u5c06\u6d41\u8bbe\u4e3a\u4e3b\u4f53\u3002\u4f8b\u5982\uff0c\u5f53\u5c06\u4e3b\u4f53\u8bbe\u7f6e\u4e3a\u4ee3\u7406\u4e2d\u7684 HTTP \u6d41\u65f6\uff0c\u4f60\u53ef\u80fd\u4e0d\u60f3\u8981\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a\u5b83\u4f1a\u7834\u574f\u5e95\u5c42\u8fde\u63a5\u3002"),(0,s.kt)("p",null,"\u53c2\u9605: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/koajs/koa/pull/612"},"https://github.com/koajs/koa/pull/612")," \u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u6d41\u9519\u8bef\u5904\u7406\u7684\u793a\u4f8b\uff0c\u800c\u4e0d\u4f1a\u81ea\u52a8\u7834\u574f\u6d41\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const PassThrough = require('stream').PassThrough;\n\napp.use(async ctx => {\n  ctx.body = someHTTPStream.on('error', (err) => ctx.onerror(err)).pipe(PassThrough());\n});\n")),(0,s.kt)("h4",{id:"object"},"Object"),(0,s.kt)("p",null,"Content-Type \u9ed8\u8ba4\u4e3a application/json. \u8fd9\u5305\u62ec\u666e\u901a\u7684\u5bf9\u8c61 { foo: 'bar' } \u548c\u6570\u7ec4 ","['foo', 'bar']","\u3002"),(0,s.kt)("h3",{id:"responsegetfield"},"response.get(field)"),(0,s.kt)("p",null,"\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u83b7\u53d6\u54cd\u5e94\u5934\u5b57\u6bb5\u503c field\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const etag = ctx.response.get('ETag');\n")),(0,s.kt)("h3",{id:"responsehasfield"},"response.has(field)"),(0,s.kt)("p",null,"\u5982\u679c\u5f53\u524d\u5728\u54cd\u5e94\u5934\u4e2d\u8bbe\u7f6e\u4e86\u7531\u540d\u79f0\u6807\u8bc6\u7684\u6d88\u606f\u5934\uff0c\u5219\u8fd4\u56de true. \u6d88\u606f\u5934\u540d\u79f0\u5339\u914d\u4e0d\u533a\u5206\u5927\u5c0f\u5199."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const rateLimited = ctx.response.has('X-RateLimit-Limit');\n\n### response.set(field, value)\n\n\u8bbe\u7f6e\u54cd\u5e94\u5934 field \u5230 value:\n\n```javascript\nctx.set('Cache-Control', 'no-cache');\n")),(0,s.kt)("h3",{id:"responseappendfield-value"},"response.append(field, value)"),(0,s.kt)("p",null,"\u7528\u503c val \u9644\u52a0\u989d\u5916\u7684\u6d88\u606f\u5934 field\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.append('Link', '<http://127.0.0.1/>');\n")),(0,s.kt)("h3",{id:"responsesetfields"},"response.set(fields)"),(0,s.kt)("p",null,"\u7528\u4e00\u4e2a\u5bf9\u8c61\u8bbe\u7f6e\u591a\u4e2a\u54cd\u5e94\u5934fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.set({\n  'Etag': '1234',\n  'Last-Modified': date\n});\n")),(0,s.kt)("p",null,"\u8fd9\u5c06\u59d4\u6258\u7ed9 setHeader \uff0c\u5b83\u901a\u8fc7\u6307\u5b9a\u7684\u952e\u8bbe\u7f6e\u6216\u66f4\u65b0\u6d88\u606f\u5934\uff0c\u5e76\u4e14\u4e0d\u91cd\u7f6e\u6574\u4e2a\u6d88\u606f\u5934\u3002"),(0,s.kt)("h3",{id:"responseremovefield"},"response.remove(field)"),(0,s.kt)("p",null,"\u5220\u9664\u6d88\u606f\u5934 field\u3002"),(0,s.kt)("h3",{id:"responsetype"},"response.type"),(0,s.kt)("p",null,'\u83b7\u53d6\u54cd\u5e94 Content-Type, \u4e0d\u542b "charset" \u7b49\u53c2\u6570\u3002'),(0,s.kt)("p",null,"\u8bd1\u8005\u6ce8: \u8fd9\u91cc\u5176\u5b9e\u662f\u53ea\u83b7\u53d6 mime-type, \u8be6\u89c1\u6e90\u7801\u53ca\u5176\u6ce8\u91ca"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const ct = ctx.type;\n// => "image/png"\n')),(0,s.kt)("h3",{id:"responsetype-1"},"response.type="),(0,s.kt)("p",null,"\u8bbe\u7f6e\u54cd\u5e94 Content-Type \u901a\u8fc7 mime \u5b57\u7b26\u4e32\u6216\u6587\u4ef6\u6269\u5c55\u540d\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.type = 'text/plain; charset=utf-8';\nctx.type = 'image/png';\nctx.type = '.png';\nctx.type = 'png';\n")),(0,s.kt)("p",null,"\u6ce8\u610f: \u5728\u9002\u5f53\u7684\u60c5\u51b5\u4e0b\u4e3a\u4f60\u9009\u62e9 charset, \u6bd4\u5982 response.type = 'html' \u5c06\u9ed8\u8ba4\u662f \"utf-8\". \u5982\u679c\u4f60\u60f3\u8986\u76d6 charset, \u4f7f\u7528 ctx.set('Content-Type', 'text/html') \u5c06\u54cd\u5e94\u5934\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u76f4\u63a5\u503c\u3002"),(0,s.kt)("h3",{id:"responseistypes"},"response.is(types...)"),(0,s.kt)("p",null,"\u975e\u5e38\u7c7b\u4f3c ctx.request.is(). \u68c0\u67e5\u54cd\u5e94\u7c7b\u578b\u662f\u5426\u662f\u6240\u63d0\u4f9b\u7684\u7c7b\u578b\u4e4b\u4e00\u3002\u8fd9\u5bf9\u4e8e\u521b\u5efa\u64cd\u7eb5\u54cd\u5e94\u7684\u4e2d\u95f4\u4ef6\u7279\u522b\u6709\u7528\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982, \u8fd9\u662f\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u524a\u51cf\u9664\u6d41\u4e4b\u5916\u7684\u6240\u6709HTML\u54cd\u5e94\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const minify = require('html-minifier');\n\napp.use(async (ctx, next) => {\n  await next();\n\n  if (!ctx.response.is('html')) return;\n\n  let body = ctx.body;\n  if (!body || body.pipe) return;\n\n  if (Buffer.isBuffer(body)) body = body.toString();\n  ctx.body = minify(body);\n});\n")),(0,s.kt)("h3",{id:"responseredirecturl-alt"},"response.redirect(url, ","[alt]",")"),(0,s.kt)("p",null,"\u6267\u884c ","[302]"," \u91cd\u5b9a\u5411\u5230 url."),(0,s.kt)("p",null,"\u5b57\u7b26\u4e32 \u201cback\u201d \u662f\u7279\u522b\u63d0\u4f9b Referrer \u652f\u6301\u7684\uff0c\u5f53 Referrer \u4e0d\u5b58\u5728\u65f6\uff0c\u4f7f\u7528 alt \u6216 \u201c/\u201d\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.redirect('back');\nctx.redirect('back', '/index.html');\nctx.redirect('/login');\nctx.redirect('http://google.com');\n")),(0,s.kt)("p",null,"\u8981\u66f4\u6539 \u201c302\u201d \u7684\u9ed8\u8ba4\u72b6\u6001\uff0c\u53ea\u9700\u5728\u8be5\u8c03\u7528\u4e4b\u524d\u6216\u4e4b\u540e\u7ed9 status \u8d4b\u503c\u3002\u8981\u53d8\u66f4\u4e3b\u4f53\u8bf7\u5728\u6b64\u8c03\u7528\u4e4b\u540e:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.status = 301;\nctx.redirect('/cart');\nctx.body = 'Redirecting to shopping cart';\n")),(0,s.kt)("h3",{id:"responseattachmentfilename-options"},"response.attachment(","[filename]",", ","[options]",")"),(0,s.kt)("p",null,"\u5c06 Content-Disposition \u8bbe\u7f6e\u4e3a \u201c\u9644\u4ef6\u201d \u4ee5\u6307\u793a\u5ba2\u6237\u7aef\u63d0\u793a\u4e0b\u8f7d\u3002(\u53ef\u9009)\u6307\u5b9a\u4e0b\u8f7d\u7684 filename \u548c\u90e8\u5206 \u53c2\u6570\u3002"),(0,s.kt)("h3",{id:"responseheadersent"},"response.headerSent"),(0,s.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u53d1\u9001\u4e86\u4e00\u4e2a\u54cd\u5e94\u5934\u3002 \u7528\u4e8e\u67e5\u770b\u5ba2\u6237\u7aef\u662f\u5426\u53ef\u80fd\u4f1a\u6536\u5230\u9519\u8bef\u901a\u77e5\u3002"),(0,s.kt)("h3",{id:"responselastmodified"},"response.lastModified"),(0,s.kt)("p",null,"\u5c06 Last-Modified \u6d88\u606f\u5934\u8fd4\u56de\u4e3a Date, \u5982\u679c\u5b58\u5728\u3002"),(0,s.kt)("h3",{id:"responselastmodified-1"},"response.lastModified="),(0,s.kt)("p",null,"\u5c06 Last-Modified \u6d88\u606f\u5934\u8bbe\u7f6e\u4e3a\u9002\u5f53\u7684 UTC \u5b57\u7b26\u4e32\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a Date \u6216\u65e5\u671f\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.response.lastModified = new Date();\n")),(0,s.kt)("h3",{id:"responseetag"},"response.etag="),(0,s.kt)("p",null,'\u8bbe\u7f6e\u5305\u542b " \u5305\u88f9\u7684 ETag \u54cd\u5e94\uff0c \u8bf7\u6ce8\u610f\uff0c\u6ca1\u6709\u76f8\u5e94\u7684 response.etag getter\u3002'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"ctx.response.etag = crypto.createHash('md5').update(ctx.body).digest('hex');\n")),(0,s.kt)("h3",{id:"responsevaryfield"},"response.vary(field)"),(0,s.kt)("p",null,"\u8bbe\u7f6e field \u7684 vary\u3002"),(0,s.kt)("h3",{id:"responseflushheaders"},"response.flushHeaders()"),(0,s.kt)("p",null,"\u5237\u65b0\u4efb\u4f55\u8bbe\u7f6e\u7684\u6d88\u606f\u5934\uff0c\u7136\u540e\u662f\u4e3b\u4f53(body)\u3002"))}u.isMDXComponent=!0}}]);