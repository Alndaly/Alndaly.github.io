"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1527],{41600:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var i=t(87462),p=(t(67294),t(3905));t(16758);const r={sidebar_position:1},o=void 0,a={unversionedId:"backend/Spring/SpringBoot/\u4ecb\u7ecd",id:"backend/Spring/SpringBoot/\u4ecb\u7ecd",title:"\u4ecb\u7ecd",description:"Spring Boot\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u53ef\u4ee5\u8fd0\u884c\u7684\u72ec\u7acb\u7684\uff0c\u57fa\u4e8e\u751f\u4ea7\u7ea7Spring\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u5bf9Spring\u5e73\u53f0\u548c\u7b2c\u4e09\u65b9\u5e93\u8fdb\u884c\u4e86\u81ea\u4ee5\u4e3a\u662f\u7684\u89c2\u70b9\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5c3d\u91cf\u5c11\u5f00\u59cb\u3002\u5927\u591a\u6570Spring Boot\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u975e\u5e38\u5c11\u7684Spring\u914d\u7f6e\u3002",source:"@site/docs/backend/Spring/SpringBoot/\u4ecb\u7ecd.md",sourceDirName:"backend/Spring/SpringBoot",slug:"/backend/Spring/SpringBoot/\u4ecb\u7ecd",permalink:"/docs/backend/Spring/SpringBoot/\u4ecb\u7ecd",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/SpringBoot/\u4ecb\u7ecd.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"backEndSidebar",previous:{title:"OpenFeign",permalink:"/docs/backend/Spring/OpenFeign"},next:{title:"\u7cfb\u7edf\u8981\u6c42",permalink:"/docs/backend/Spring/SpringBoot/\u7cfb\u7edf\u8981\u6c42"}},d={},s=[],l={toc:s};function g(n){let{components:e,...t}=n;return(0,p.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u53ef\u4ee5\u8fd0\u884c\u7684\u72ec\u7acb\u7684\uff0c\u57fa\u4e8e\u751f\u4ea7\u7ea7",(0,p.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u5bf9",(0,p.kt)("inlineCode",{parentName:"p"},"Spring"),"\u5e73\u53f0\u548c\u7b2c\u4e09\u65b9\u5e93\u8fdb\u884c\u4e86\u81ea\u4ee5\u4e3a\u662f\u7684\u89c2\u70b9\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5c3d\u91cf\u5c11\u5f00\u59cb\u3002\u5927\u591a\u6570",(0,p.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u975e\u5e38\u5c11\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Spring"),"\u914d\u7f6e\u3002"),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u521b\u5efa\u53ef\u4ee5\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"java -jar"),"\u6216\u66f4\u591a\u4f20\u7edf\u6218\u4e89\u90e8\u7f72\u542f\u52a8\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Java"),"\u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8fd0\u884c\u201c",(0,p.kt)("inlineCode",{parentName:"p"},"spring"),"\u811a\u672c\u201d\u7684\u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u7684\u4e3b\u8981\u76ee\u6807\u662f\uff1a"),(0,p.kt)("p",null,"\u4e3a\u6240\u6709",(0,p.kt)("inlineCode",{parentName:"p"},"Spring"),"\u5f00\u53d1\u63d0\u4f9b\u4ece\u6839\u672c\u4e0a\u66f4\u5feb\u4e14\u53ef\u5e7f\u6cdb\u8bbf\u95ee\u7684\u5165\u95e8\u4f53\u9a8c\u3002\n\u5f00\u7bb1\u5373\u7528\uff0c\u4f46\u968f\u7740\u9700\u6c42\u5f00\u59cb\u504f\u79bb\u9ed8\u8ba4\u503c\u800c\u8fc5\u901f\u6446\u8131\u56f0\u5883\u3002\n\u63d0\u4f9b\u5927\u578b\u9879\u76ee\uff08\u4f8b\u5982\u5d4c\u5165\u5f0f\u670d\u52a1\u5668\uff0c\u5b89\u5168\u6027\uff0c\u5ea6\u91cf\u6807\u51c6\uff0c\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u548c\u5916\u90e8\u5316\u914d\u7f6e\uff09\u901a\u7528\u7684\u4e00\u7cfb\u5217\u975e\u529f\u80fd\u6027\u529f\u80fd\u3002\n\u7edd\u5bf9\u6ca1\u6709\u4ee3\u7801\u751f\u6210\uff0c\u4e5f\u4e0d\u9700\u8981XML\u914d\u7f6e\u3002"))}g.isMDXComponent=!0}}]);