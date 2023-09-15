"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7146],{79706:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));n(16758);const s={title:"List\u7ec4\u4ef6"},l=void 0,o={unversionedId:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List",id:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List",title:"List\u7ec4\u4ef6",description:"\u57fa\u7840\u7528\u6cd5",source:"@site/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List.md",sourceDirName:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61",slug:"/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List",permalink:"/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"2023\u5e749\u670815\u65e5",frontMatter:{title:"List\u7ec4\u4ef6"},sidebar:"frontEndSidebar",previous:{title:"Button\u7ec4\u4ef6",permalink:"/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/Button"},next:{title:"Text",permalink:"/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/Text"}},r={},c=[{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728List\u4e2d\u914d\u5408ForEach\u751f\u6210\u5217\u8868",id:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728list\u4e2d\u914d\u5408foreach\u751f\u6210\u5217\u8868",level:3},{value:"List\u914d\u5408Section\u53ef\u4ee5\u5f62\u6210\u5206\u5757\u7684\u5217\u8868",id:"list\u914d\u5408section\u53ef\u4ee5\u5f62\u6210\u5206\u5757\u7684\u5217\u8868",level:3},{value:"List\u7ed3\u5408\u5bf9\u8c61\u6570\u7ec4",id:"list\u7ed3\u5408\u5bf9\u8c61\u6570\u7ec4",level:3},{value:"\u5916\u5c42\u76f4\u63a5\u4f20\u53c2\u6570",id:"\u5916\u5c42\u76f4\u63a5\u4f20\u53c2\u6570",level:4},{value:"\u5185\u5c42ForEach\u4f7f\u7528",id:"\u5185\u5c42foreach\u4f7f\u7528",level:4},{value:"\u4fee\u6539\u5916\u89c2\u6837\u5f0f\u89e6\u8fb9",id:"\u4fee\u6539\u5916\u89c2\u6837\u5f0f\u89e6\u8fb9",level:4}],d={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'List{\n    Text("\u5217\u8868\u7684\u7b2c\u4e00\u9879")\n    Text("\u5217\u8868\u7684\u7b2c\u4e8c\u9879")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112113167.png",alt:null})),(0,a.kt)("h3",{id:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728list\u4e2d\u914d\u5408foreach\u751f\u6210\u5217\u8868"},"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728List\u4e2d\u914d\u5408ForEach\u751f\u6210\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'List{\n    Text("Static row 1")\n    Text("Static row 2")\n\n    ForEach(0..<5) {\n        Text("Dynamic row \\($0)")\n    }\n\n    Text("Static row 3")\n    Text("Static row 4")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112117372.png",alt:null})),(0,a.kt)("h3",{id:"list\u914d\u5408section\u53ef\u4ee5\u5f62\u6210\u5206\u5757\u7684\u5217\u8868"},"List\u914d\u5408Section\u53ef\u4ee5\u5f62\u6210\u5206\u5757\u7684\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},' List{\n    Section("Section 1") {\n        Text("Static row 1")\n        Text("Static row 2")\n    }\n\n    Section("Section 2") {\n        ForEach(0..<5) {\n            Text("Dynamic row \\($0)")\n        }\n    }\n\n    Section("Section 3") {\n        Text("Static row 3")\n        Text("Static row 4")\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112122292.png",alt:null})),(0,a.kt)("h3",{id:"list\u7ed3\u5408\u5bf9\u8c61\u6570\u7ec4"},"List\u7ed3\u5408\u5bf9\u8c61\u6570\u7ec4"),(0,a.kt)("h4",{id:"\u5916\u5c42\u76f4\u63a5\u4f20\u53c2\u6570"},"\u5916\u5c42\u76f4\u63a5\u4f20\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let names = ["lina", "kinda", "dona", "hack"]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"List(names, id: \\.self){\n    Text($0)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112128448.png",alt:null})),(0,a.kt)("h4",{id:"\u5185\u5c42foreach\u4f7f\u7528"},"\u5185\u5c42ForEach\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let names = ["lina", "kinda", "dona", "hack"]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'List{\n    Text("First one")\n    ForEach(names, id: \\.self){\n        Text($0)\n    }\n    Text("Seconnd one")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112136247.png",alt:null})),(0,a.kt)("h4",{id:"\u4fee\u6539\u5916\u89c2\u6837\u5f0f\u89e6\u8fb9"},"\u4fee\u6539\u5916\u89c2\u6837\u5f0f\u89e6\u8fb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"List(names, id: \\.self){\n    Text($0)\n}\n.listStyle(.grouped)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212112133505.png",alt:null})))}p.isMDXComponent=!0}}]);