"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2259],{7299:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=s(87462),a=(s(67294),s(3905));s(16758);const n={},r=void 0,i={unversionedId:"others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570",id:"others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570",title:"\u7edf\u8ba1\u4ee3\u7801\u884c\u6570",description:"",source:"@site/docs/others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570.md",sourceDirName:"others/Github",slug:"/others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570",permalink:"/en/docs/others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Github/\u7edf\u8ba1\u4ee3\u7801\u884c\u6570.md",tags:[],version:"current",lastUpdatedAt:1674055704,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{},sidebar:"anyThing",previous:{title:"\u5207\u6362Git\u8d26\u53f7",permalink:"/en/docs/others/Github/\u5207\u6362Git\u8d26\u53f7"},next:{title:"MongoDB",permalink:"/en/docs/others/MongoDB"}},d={},l=[],u={toc:l};function c(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git log --pretty=\'%aN\' | sort -u | while read name; do echo -en "$name\\t"; git log --author="$name" --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s \\n", add, subs, loc }\' -; done\n')))}c.isMDXComponent=!0}}]);