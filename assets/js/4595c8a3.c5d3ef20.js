"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8642],{89712:(t,e,p)=>{p.r(e),p.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=p(87462),r=(p(67294),p(3905));p(16758);const a={title:"httpx[http2]"},o=void 0,l={unversionedId:"others/http2\u7684\u722c\u866b",id:"others/http2\u7684\u722c\u866b",title:"httpx[http2]",description:"httpx\u9700\u8981Python3.6+\uff08\u4f7f\u7528\u5f02\u6b65\u8bf7\u6c42\u9700\u8981Python3.8+\uff09",source:"@site/docs/others/http2\u7684\u722c\u866b.md",sourceDirName:"others",slug:"/others/http2\u7684\u722c\u866b",permalink:"/docs/others/http2\u7684\u722c\u866b",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/http2\u7684\u722c\u866b.md",tags:[],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"httpx[http2]"},sidebar:"anyThing",previous:{title:"\u884c\u4e3a\u578b\u6a21\u5f0f",permalink:"/docs/others/design-pattern/\u884c\u4e3a\u578b\u6a21\u5f0f"},next:{title:"\u5185\u7f51\u7a7f\u900f",permalink:"/docs/category/\u5185\u7f51\u7a7f\u900f"}},s={},h=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u7c7b\u4f3c\u7684\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528POST, PUT, DELETE, HEAD\u548cOPTIONS\u7b49\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5982\u4e0b",id:"\u7c7b\u4f3c\u7684\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528post-put-delete-head\u548coptions\u7b49\u8bf7\u6c42\u65b9\u6cd5\u5982\u4e0b",level:3},{value:"\u5e26\u6709\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u53c2\u6570\u7684\u8bf7\u6c42",id:"\u5e26\u6709\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u53c2\u6570\u7684\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u5e26\u6709cookies",id:"\u8bf7\u6c42\u5e26\u6709cookies",level:2},{value:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u8bc1\u4e66/\u4ee3\u7406\u914d\u7f6e",id:"\u8bc1\u4e66\u4ee3\u7406\u914d\u7f6e",level:2}],i={toc:h};function d(t){let{components:e,...p}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"httpx\u9700\u8981Python3.6+\uff08\u4f7f\u7528\u5f02\u6b65\u8bf7\u6c42\u9700\u8981Python3.8+\uff09"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install httpx\n")),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528HTTP/2\uff0c\u5219\u9700\u8981\u5b89\u88c5http2\u7684\u76f8\u5173\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install httpx[http2]\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"httpx\u4e0erequests\u5e93\u7684\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\u51e0\u4e4e\u662f\u4e00\u6a21\u4e00\u6837\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import httpx\nr = httpx.get('https://httpbin.org/get')\nprint(r)\n")),(0,r.kt)("h3",{id:"\u7c7b\u4f3c\u7684\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528post-put-delete-head\u548coptions\u7b49\u8bf7\u6c42\u65b9\u6cd5\u5982\u4e0b"},"\u7c7b\u4f3c\u7684\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528POST, PUT, DELETE, HEAD\u548cOPTIONS\u7b49\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"r = httpx.post('https://httpbin.org/post', data={'key': 'value'})\nr = httpx.put('https://httpbin.org/put', data={'key': 'value'})\nr = httpx.delete('https://httpbin.org/delete')\nr = httpx.head('https://httpbin.org/get')\nr = httpx.options('https://httpbin.org/get')\n")),(0,r.kt)("h2",{id:"\u5e26\u6709\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u53c2\u6570\u7684\u8bf7\u6c42"},"\u5e26\u6709\u8bf7\u6c42\u5934\u548c\u8bf7\u6c42\u53c2\u6570\u7684\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import httpx\nheaders = {'user-agent': 'my-app/1.0.0'}\nparams = {'key1': 'value1', 'key2': 'value2'}\nurl = 'https://httpbin.org/get'\nr = httpx.get(url, headers=headers, params=params)\nprint(r)\nprint(r.status_code) # \u72b6\u6001\u7801\nprint(r.encoding) # \u6587\u672c\u7f16\u7801\nprint(r.text)\nprint(r.json())\n")),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u5e26\u6709cookies"},"\u8bf7\u6c42\u5e26\u6709cookies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import httpx\nurl = 'http://httpbin.org/cookies'\ncookies = {'color': 'green'}\nr = httpx.get(url, cookies=cookies)\nprint(r.json()) # {'cookies': {'color': 'green'}}\n")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"},"\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import httpx\nr = httpx.get('http://httpbin.org', timeout=0.001)\nprint(r)\n")),(0,r.kt)("p",null,"\u8d85\u8fc7\u8bbe\u7f6e\u65f6\u95f4\u5219\u62a5",(0,r.kt)("inlineCode",{parentName:"p"},"httpx.ConnectTimeout: timed out")),(0,r.kt)("h2",{id:"\u8bc1\u4e66\u4ee3\u7406\u914d\u7f6e"},"\u8bc1\u4e66/\u4ee3\u7406\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'proxies = {"http://":"http://localhost:8899"}\nclient = httpx.Client(http2=True, verify=False, proxies=proxies)\n\nclient.post()\nclient.get()\n')))}d.isMDXComponent=!0}}]);