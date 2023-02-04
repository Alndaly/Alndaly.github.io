"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5038],{14689:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>N});var s=t(87462),n=(t(67294),t(3905));t(16758);const p={},m="11: \u8fb9\u7f18\u68c0\u6d4b",l={unversionedId:"artificial-intelligence/opencv/basic/edge-detection",id:"artificial-intelligence/opencv/basic/edge-detection",title:"11: \u8fb9\u7f18\u68c0\u6d4b",description:"\u5b66\u4e60\u4f7f\u7528 Canny \u83b7\u53d6\u56fe\u50cf\u7684\u8fb9\u7f18\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/11-edge-detection.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/edge-detection",permalink:"/en/docs/artificial-intelligence/opencv/basic/edge-detection",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/basic/11-edge-detection.md",tags:[],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"Feb 4, 2023",sidebarPosition:11,frontMatter:{},sidebar:"ai",previous:{title:"10: \u5e73\u6ed1\u56fe\u50cf",permalink:"/en/docs/artificial-intelligence/opencv/basic/smoothing-images"},next:{title:"12: \u8150\u8680\u4e0e\u81a8\u80c0",permalink:"/en/docs/artificial-intelligence/opencv/basic/erode-and-dilate"}},r={},N=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"Canny \u8fb9\u7f18\u68c0\u6d4b",id:"canny-\u8fb9\u7f18\u68c0\u6d4b",level:3},{value:"\u5148\u9608\u503c\u5206\u5272\u540e\u68c0\u6d4b",id:"\u5148\u9608\u503c\u5206\u5272\u540e\u68c0\u6d4b",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],i={toc:N};function k(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"11-\u8fb9\u7f18\u68c0\u6d4b"},"11: \u8fb9\u7f18\u68c0\u6d4b"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_canny_edge_detection_threshold.jpg",alt:null})),(0,n.kt)("p",null,"\u5b66\u4e60\u4f7f\u7528 Canny \u83b7\u53d6\u56fe\u50cf\u7684\u8fb9\u7f18\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.computer.org/cms/Computer.org/Transactions%20Home%20Pages/TPAMI/PDFs/top_ten_6.pdf"},"Canny J . A Computational Approach To Edge Detection","[","J","]",". IEEE Transactions on Pattern Analysis and Machine Intelligence, 1986, PAMI-8","(","6",")",":679-698."))),(0,n.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Canny \u8fb9\u7f18\u68c0\u6d4b\u7684\u7b80\u5355\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.Canny()"))),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("p",null,"Canny \u8fb9\u7f18\u68c0\u6d4b\u65b9\u6cd5\u5e38\u88ab\u8a89\u4e3a\u8fb9\u7f18\u68c0\u6d4b\u7684\u6700\u4f18\u65b9\u6cd5\uff0c\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u5148\u770b\u4e2a\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\nimg = cv2.imread('handwriting.jpg', 0)\nedges = cv2.Canny(img, 30, 70)  # canny \u8fb9\u7f18\u68c0\u6d4b\n\ncv2.imshow('canny', np.hstack((img, edges)))\ncv2.waitKey(0)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_canny_edge_detection.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cv2.Canny()"),"\u8fdb\u884c\u8fb9\u7f18\u68c0\u6d4b\uff0c\u53c2\u6570 2\u30013 \u8868\u793a\u6700\u4f4e\u3001\u9ad8\u9608\u503c\uff0c\u4e0b\u9762\u6765\u89e3\u91ca\u4e0b\u5177\u4f53\u539f\u7406\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e4b\u524d\u6211\u4eec\u7528\u4f4e\u901a\u6ee4\u6ce2\u7684\u65b9\u5f0f\u6a21\u7cca\u4e86\u56fe\u7247\uff0c\u90a3\u53cd\u8fc7\u6765\uff0c\u60f3\u5f97\u5230\u7269\u4f53\u7684\u8fb9\u7f18\uff0c\u5c31\u9700\u8981\u7528\u5230\u9ad8\u901a\u6ee4\u6ce2\u3002\u63a8\u8350\u5148\u9605\u8bfb\uff1a",(0,n.kt)("a",{parentName:"p",href:"./extra-09-image-gradients/"},"\u756a\u5916\u7bc7\uff1a\u56fe\u50cf\u68af\u5ea6"),"\u3002")),(0,n.kt)("h3",{id:"canny-\u8fb9\u7f18\u68c0\u6d4b"},"Canny \u8fb9\u7f18\u68c0\u6d4b"),(0,n.kt)("p",null,"Canny \u8fb9\u7f18\u63d0\u53d6\u7684\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,"1\uff0c\u4f7f\u7528 5\xd75 \u9ad8\u65af\u6ee4\u6ce2\u6d88\u9664\u566a\u58f0\uff1a"),(0,n.kt)("p",null,"\u8fb9\u7f18\u68c0\u6d4b\u672c\u8eab\u5c5e\u4e8e\u9510\u5316\u64cd\u4f5c\uff0c\u5bf9\u566a\u70b9\u6bd4\u8f83\u654f\u611f\uff0c\u6240\u4ee5\u9700\u8981\u8fdb\u884c\u5e73\u6ed1\u5904\u7406\u3002\u9ad8\u65af\u6ee4\u6ce2\u7684\u5177\u4f53\u5185\u5bb9\u53c2\u8003\u524d\u4e00\u7bc7\uff1a",(0,n.kt)("a",{parentName:"p",href:"./smoothing-images"},"\u5e73\u6ed1\u56fe\u50cf")),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"K"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"256")),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center center center center center",columnspacing:"1em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"6"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"16"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"24"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"16"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"6"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"24"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"36"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"24"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"6")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"16"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"24"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"16"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"6"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"4"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))))),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"]"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"K=\\frac{1}{256}\\left[ \\begin{matrix} 1 & 4 & 6 & 4 & 1 \\newline 4 & 16 & 24 & 16 & 4 \\newline 6 & 24 & 36 & 24 & 6 \\newline 4 & 16 & 24 & 16 & 4 \\newline 1 & 4 & 6 & 4 & 1 \\end{matrix} \\right]")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"6.0001em",verticalAlign:"-2.75em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"256"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.311em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a3"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.458em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"2.416em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"2.416em",style:{width:"0.6667em"},viewBox:"0 0 666.67 2416",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M319 0 H403 V2416 H319z M319 0 H403 V2416 H319z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-6.5111em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-5.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-5.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"16"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"24"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"16"))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-5.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"24"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"36"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"24"))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"6")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-5.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"16"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"24"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"16"))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-5.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"4"))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.25em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.311em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.458em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"2.416em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"2.416em",style:{width:"0.6667em"},viewBox:"0 0 666.67 2416",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M263 0 H347 V2416 H263z M263 0 H347 V2416 H263z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-6.5111em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"4.416em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a4")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.75em"}},(0,n.kt)("span",{parentName:"span"})))))))))))),(0,n.kt)("p",null,"2\uff0c\u8ba1\u7b97\u56fe\u50cf\u68af\u5ea6\u7684\u65b9\u5411\uff1a"),(0,n.kt)("p",null,"\u9996\u5148\u4f7f\u7528 Sobel \u7b97\u5b50\u8ba1\u7b97\u4e24\u4e2a\u65b9\u5411\u4e0a\u7684\u68af\u5ea6",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"G"),(0,n.kt)("mi",{parentName:"msub"},"x"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G_x")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\u548c",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"G"),(0,n.kt)("mi",{parentName:"msub"},"y"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G_y")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))))))),"\uff0c\u7136\u540e\u7b97\u51fa\u68af\u5ea6\u7684\u65b9\u5411\uff1a"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"\u03b8"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"arctan"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("msub",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msub"},"G"),(0,n.kt)("mi",{parentName:"msub"},"y")),(0,n.kt)("msub",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msub"},"G"),(0,n.kt)("mi",{parentName:"msub"},"x"))),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\theta=\\arctan(\\frac{G_y}{G_x})")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.1963em",verticalAlign:"-0.836em"}}),(0,n.kt)("span",{parentName:"span",className:"mop"},"arctan"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3603em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.836em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,n.kt)("p",null,"\u4fdd\u7559\u8fd9\u56db\u4e2a\u65b9\u5411\u7684\u68af\u5ea6\uff1a0\xb0/45\xb0/90\xb0/135\xb0\uff0c\u6709\u4ec0\u4e48\u7528\u5462\uff1f\u6211\u4eec\u63a5\u7740\u770b\u3002"),(0,n.kt)("p",null,"3\uff0c\u53d6\u5c40\u90e8\u6781\u5927\u503c\uff1a"),(0,n.kt)("p",null,"\u68af\u5ea6\u5176\u5b9e\u5df2\u7ecf\u8868\u793a\u4e86\u8f6e\u5ed3\uff0c\u4f46\u4e3a\u4e86\u8fdb\u4e00\u6b65\u7b5b\u9009\uff0c\u53ef\u4ee5\u5728\u4e0a\u9762\u7684\u56db\u4e2a\u89d2\u5ea6\u65b9\u5411\u4e0a\u518d\u53d6\u5c40\u90e8\u6781\u5927\u503c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_canny_direction.jpg",alt:null})),(0,n.kt)("p",null,"\u6bd4\u5982\uff0cA \u70b9\u5728 45\xb0 \u65b9\u5411\u4e0a\u5927\u4e8e B/C \u70b9\uff0c\u90a3\u5c31\u4fdd\u7559\u5b83\uff0c\u628a B/C \u8bbe\u7f6e\u4e3a 0\u3002"),(0,n.kt)("p",null,"4\uff0c\u6ede\u540e\u9608\u503c\uff1a"),(0,n.kt)("p",null,"\u7ecf\u8fc7\u524d\u9762\u4e09\u6b65\uff0c\u5c31\u53ea\u5269\u4e0b 0 \u548c\u53ef\u80fd\u7684\u8fb9\u7f18\u68af\u5ea6\u503c\u4e86\uff0c\u4e3a\u4e86\u6700\u7ec8\u786e\u5b9a\u4e0b\u6765\uff0c\u9700\u8981\u8bbe\u5b9a\u9ad8\u4f4e\u9608\u503c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_canny_max_min_val.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u50cf\u7d20\u70b9\u7684\u503c\u5927\u4e8e\u6700\u9ad8\u9608\u503c\uff0c\u90a3\u80af\u5b9a\u662f\u8fb9\u7f18\uff08\u4e0a\u56fe A\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u540c\u7406\u50cf\u7d20\u503c\u5c0f\u4e8e\u6700\u4f4e\u9608\u503c\uff0c\u90a3\u80af\u5b9a\u4e0d\u662f\u8fb9\u7f18"),(0,n.kt)("li",{parentName:"ul"},"\u50cf\u7d20\u503c\u4ecb\u4e8e\u4e24\u8005\u4e4b\u95f4\uff0c\u5982\u679c\u4e0e\u9ad8\u4e8e\u6700\u9ad8\u9608\u503c\u7684\u70b9\u8fde\u63a5\uff0c\u4e5f\u7b97\u8fb9\u7f18\uff0c\u6240\u4ee5\u4e0a\u56fe\u4e2d C \u7b97\uff0cB \u4e0d\u7b97")),(0,n.kt)("p",null,"Canny \u63a8\u8350\u7684\u9ad8\u4f4e\u9608\u503c\u6bd4\u5728 2:1 \u5230 3:1 \u4e4b\u95f4\u3002"),(0,n.kt)("h3",{id:"\u5148\u9608\u503c\u5206\u5272\u540e\u68c0\u6d4b"},"\u5148\u9608\u503c\u5206\u5272\u540e\u68c0\u6d4b"),(0,n.kt)("p",null,"\u5176\u5b9e\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u9608\u503c\u5206\u5272\u540e\u518d\u68c0\u6d4b\u8fb9\u7f18\uff0c\u6548\u679c\u4f1a\u66f4\u597d\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"_, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nedges = cv2.Canny(thresh, 30, 70)\n\ncv2.imshow('canny', np.hstack((img, thresh, edges)))\ncv2.waitKey(0)\n")),(0,n.kt)("p",null,"\u4ee3\u7801\u4e2d\u6211\u7528\u4e86",(0,n.kt)("a",{parentName:"p",href:"../start/extra-04-otsu-thresholding/"},"\u756a\u5916\u7bc7\uff1aOtsu \u9608\u503c\u6cd5"),"\u4e2d\u7684\u81ea\u52a8\u9608\u503c\u5206\u5272\uff0c\u5982\u679c\u4f60\u4e0d\u592a\u4e86\u89e3\uff0c\u5927\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u7684\u65b9\u6cd5\uff0c\u4e0d\u8fc7\u5982\u679c\u662f\u4e0b\u9762\u8fd9\u79cd\u56fe\u7247\uff0c\u63a8\u8350\u7528 Otsu \u9608\u503c\u6cd5\u3002\u53e6\u5916 Python \u4e2d\u67d0\u4e2a\u503c\u4e0d\u7528\u7684\u8bdd\uff0c\u5c31\u5199\u4e2a\u4e0b\u5212\u7ebf'","_","'\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_canny_edge_detection_threshold.jpg",alt:null})),(0,n.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uff08\u9009\u505a\uff09\u5982\u679c\u4f60\u4e0d\u592a\u7406\u89e3\u9ad8\u4f4e\u9608\u503c\u7684\u6548\u679c\uff0c\u521b\u5efa\u4e24\u4e2a\u6ed1\u52a8\u6761\u6765\u8c03\u8282\u5b83\u4eec\u7684\u503c\u770b\u770b\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_trackbar_maxval_minval_canny.gif",alt:null})),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Canny \u662f\u7528\u7684\u6700\u591a\u7684\u8fb9\u7f18\u68c0\u6d4b\u7b97\u6cd5\uff0c\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.Canny()"),"\u5b9e\u73b0\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/dd/d1a/group__imgproc__feature.html#ga04723e007ed888ddf11d9ba04e2232de"},"cv2.Canny()"))),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/11-Edge-Detection"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_canny/py_canny.html"},"Canny Edge Detection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.opencv.org.cn/opencvdoc/2.3.2/html/doc/tutorials/imgproc/imgtrans/canny_detector/canny_detector.html"},"Canny \u8fb9\u7f18\u68c0\u6d4b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.computer.org/cms/Computer.org/Transactions%20Home%20Pages/TPAMI/PDFs/top_ten_6.pdf"},"Canny J . A Computational Approach To Edge Detection","[","J","]",". IEEE Transactions on Pattern Analysis and Machine Intelligence, 1986, PAMI-8","(","6",")",":679-698."))))}k.isMDXComponent=!0}}]);