"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[869],{753:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>g,toc:()=>r});var t=i(87462),a=(i(67294),i(3905));i(16758);const s={},d=void 0,g={unversionedId:"backend/Nginx/\u5e38\u7528\u547d\u4ee4",id:"backend/Nginx/\u5e38\u7528\u547d\u4ee4",title:"\u5e38\u7528\u547d\u4ee4",description:"Nginx\u5e38\u7528\u547d\u4ee4",source:"@site/docs/backend/Nginx/\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"backend/Nginx",slug:"/backend/Nginx/\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/backend/Nginx/\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Nginx/\u5e38\u7528\u547d\u4ee4.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/en/docs/backend/Nginx/\u57fa\u7840\u914d\u7f6e"},next:{title:"\u7b80\u4ecb",permalink:"/en/docs/backend/Nginx/\u7b80\u4ecb"}},c={},r=[{value:"Nginx\u5e38\u7528\u547d\u4ee4",id:"nginx\u5e38\u7528\u547d\u4ee4",level:2}],x={toc:r};function o(n){let{components:e,...i}=n;return(0,a.kt)("wrapper",(0,t.Z)({},x,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nginx\u5e38\u7528\u547d\u4ee4"},"Nginx\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5feb\u901f\u5173\u95edNginx\uff0c\u53ef\u80fd\u4e0d\u4fdd\u5b58\u76f8\u5173\u4fe1\u606f\uff0c\u5e76\u8fc5\u901f\u7ec8\u6b62web\u670d\u52a1\nnginx -s stop\n# \u5e73\u7a33\u5173\u95edNginx\uff0c\u4fdd\u5b58\u76f8\u5173\u4fe1\u606f\uff0c\u6709\u5b89\u6392\u7684\u7ed3\u675fweb\u670d\u52a1\nnginx -s quit\n# \u56e0\u6539\u53d8\u4e86Nginx\u76f8\u5173\u914d\u7f6e\uff0c\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u800c\u91cd\u8f7d\nnginx -s reload\n# \u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6\nnginx -s reopen\n# \u4e3a Nginx \u6307\u5b9a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u6765\u4ee3\u66ff\u7f3a\u7701\u7684\nnginx -c filename\n# \u4e0d\u8fd0\u884c\uff0c\u800c\u4ec5\u4ec5\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u3002nginx \u5c06\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u7684\u8bed\u6cd5\u7684\u6b63\u786e\u6027\uff0c\u5e76\u5c1d\u8bd5\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\u4e2d\u6240\u5f15\u7528\u5230\u7684\u6587\u4ef6\nnginx -t\n#  \u663e\u793a nginx \u7684\u7248\u672c\nnginx -v\n# \u663e\u793a nginx \u7684\u7248\u672c\uff0c\u7f16\u8bd1\u5668\u7248\u672c\u548c\u914d\u7f6e\u53c2\u6570\nnginx -V\n# \u683c\u5f0f\u6362\u663e\u793a nginx \u914d\u7f6e\u53c2\u65702>&1 \nnginx -V | xargs -n12>&1 \nnginx -V | xargs -n1 | grep lua\n")))}o.isMDXComponent=!0}}]);