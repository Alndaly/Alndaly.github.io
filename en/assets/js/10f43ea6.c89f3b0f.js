"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5474],{48930:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=e(87462),a=(e(67294),e(3905));e(16758);const s={title:"Swift\u6790\u6784"},o=void 0,l={unversionedId:"frontend/Swift/basic/\u6790\u6784",id:"frontend/Swift/basic/\u6790\u6784",title:"Swift\u6790\u6784",description:"\u5728\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u88ab\u91ca\u653e\u4e4b\u524d\uff0c\u6790\u6784\u51fd\u6570\u88ab\u7acb\u5373\u8c03\u7528\u3002\u7528\u5173\u952e\u5b57deinit\u6765\u6807\u793a\u6790\u6784\u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8e\u521d\u59cb\u5316\u51fd\u6570\u7528init\u6765\u6807\u793a\u3002\u6790\u6784\u51fd\u6570\u53ea\u9002\u7528\u4e8e\u7c7b\u7c7b\u578b\u3002",source:"@site/docs/frontend/Swift/basic/\u6790\u6784.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u6790\u6784",permalink:"/en/docs/frontend/Swift/basic/\u6790\u6784",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/basic/\u6790\u6784.md",tags:[],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"Swift\u6790\u6784"},sidebar:"frontEndSidebar",previous:{title:"Swift\u6784\u9020\u8fc7\u7a0b",permalink:"/en/docs/frontend/Swift/basic/\u6784\u9020\u8fc7\u7a0b"},next:{title:"Swift\u679a\u4e3e",permalink:"/en/docs/frontend/Swift/basic/\u679a\u4e3e"}},r={},d=[{value:"\u6790\u6784\u8fc7\u7a0b\u539f\u7406",id:"\u6790\u6784\u8fc7\u7a0b\u539f\u7406",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2}],c={toc:d};function p(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u88ab\u91ca\u653e\u4e4b\u524d\uff0c\u6790\u6784\u51fd\u6570\u88ab\u7acb\u5373\u8c03\u7528\u3002\u7528\u5173\u952e\u5b57",(0,a.kt)("inlineCode",{parentName:"p"},"deinit"),"\u6765\u6807\u793a\u6790\u6784\u51fd\u6570\uff0c\u7c7b\u4f3c\u4e8e\u521d\u59cb\u5316\u51fd\u6570\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\u6765\u6807\u793a\u3002\u6790\u6784\u51fd\u6570\u53ea\u9002\u7528\u4e8e\u7c7b\u7c7b\u578b\u3002")),(0,a.kt)("h2",{id:"\u6790\u6784\u8fc7\u7a0b\u539f\u7406"},"\u6790\u6784\u8fc7\u7a0b\u539f\u7406"),(0,a.kt)("p",null,"Swift \u4f1a\u81ea\u52a8\u91ca\u653e\u4e0d\u518d\u9700\u8981\u7684\u5b9e\u4f8b\u4ee5\u91ca\u653e\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"Swift \u901a\u8fc7\u81ea\u52a8\u5f15\u7528\u8ba1\u6570\uff08ARC\uff09\u5904\u7406\u5b9e\u4f8b\u7684\u5185\u5b58\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u5f53\u4f60\u7684\u5b9e\u4f8b\u88ab\u91ca\u653e\u65f6\u4e0d\u9700\u8981\u624b\u52a8\u5730\u53bb\u6e05\u7406\u3002\u4f46\u662f\uff0c\u5f53\u4f7f\u7528\u81ea\u5df1\u7684\u8d44\u6e90\u65f6\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u6e05\u7406\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u521b\u5efa\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u7c7b\u6765\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5e76\u5199\u5165\u4e00\u4e9b\u6570\u636e\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5728\u7c7b\u5b9e\u4f8b\u88ab\u91ca\u653e\u4e4b\u524d\u5173\u95ed\u8be5\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"deinit {\n    // \u6267\u884c\u6790\u6784\u8fc7\u7a0b\n}\n")),(0,a.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var counter = 0;  // \u5f15\u7528\u8ba1\u6570\u5668\nclass BaseClass {\n    init() {\n        counter += 1;\n    }\n    deinit {\n        counter -= 1;\n    }\n}\n\nvar show: BaseClass? = BaseClass()\nprint(counter)\nshow = nil\nprint(counter)\n")),(0,a.kt)("p",null,"\u5f53 show = nil \u8bed\u53e5\u6267\u884c\u540e\uff0c\u8ba1\u7b97\u5668\u51cf\u53bb 1\uff0cshow \u5360\u7528\u7684\u5185\u5b58\u5c31\u4f1a\u91ca\u653e\u3002"))}p.isMDXComponent=!0}}]);