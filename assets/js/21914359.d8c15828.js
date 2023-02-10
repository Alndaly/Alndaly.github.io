"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3859],{4397:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>N});var s=t(87462),n=(t(67294),t(3905));t(16758);const m={},p="\u756a\u5916\u7bc7\uff1a\u5377\u79ef\u57fa\u7840 - \u56fe\u7247\u8fb9\u6846",r={unversionedId:"artificial-intelligence/opencv/basic/extra-08-padding-and-convolution",id:"artificial-intelligence/opencv/basic/extra-08-padding-and-convolution",title:"\u756a\u5916\u7bc7\uff1a\u5377\u79ef\u57fa\u7840 - \u56fe\u7247\u8fb9\u6846",description:"\u4e86\u89e3\u5377\u79ef/\u6ee4\u6ce2\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u7ed9\u56fe\u7247\u6dfb\u52a0\u8fb9\u6846\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/extra-08-padding-and-convolution.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/extra-08-padding-and-convolution",permalink:"/docs/artificial-intelligence/opencv/basic/extra-08-padding-and-convolution",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/extra-08-padding-and-convolution.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6",permalink:"/docs/artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness"},next:{title:"\u756a\u5916\u7bc7\uff1a\u56fe\u50cf\u68af\u5ea6",permalink:"/docs/artificial-intelligence/opencv/basic/extra-09-image-gradients"}},l={},N=[{value:"\u5377\u79ef",id:"\u5377\u79ef",level:2},{value:"padding",id:"padding",level:2},{value:"\u6dfb\u52a0\u8fb9\u6846",id:"\u6dfb\u52a0\u8fb9\u6846",level:2},{value:"\u56fa\u5b9a\u503c\u586b\u5145",id:"\u56fa\u5b9a\u503c\u586b\u5145",level:3},{value:"\u9ed8\u8ba4\u8fb9\u6846\u7c7b\u578b",id:"\u9ed8\u8ba4\u8fb9\u6846\u7c7b\u578b",level:3},{value:"OpenCV \u8fdb\u884c\u5377\u79ef",id:"opencv-\u8fdb\u884c\u5377\u79ef",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],i={toc:N};function c(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u756a\u5916\u7bc7\u5377\u79ef\u57fa\u7840---\u56fe\u7247\u8fb9\u6846"},"\u756a\u5916\u7bc7\uff1a\u5377\u79ef\u57fa\u7840 - \u56fe\u7247\u8fb9\u6846"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_padding.jpg",alt:null})),(0,n.kt)("p",null,"\u4e86\u89e3\u5377\u79ef/\u6ee4\u6ce2\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u7ed9\u56fe\u7247\u6dfb\u52a0\u8fb9\u6846\u3002"),(0,n.kt)("p",null,"\u5377\u79ef\u7684\u6982\u5ff5\u5176\u5b9e\u5f88\u597d\u7406\u89e3\uff0c\u4e0b\u9762\u6211\u5c31\u7ed9\u5927\u5bb6\u505a\u4e2a\u6700\u7b80\u5355\u7684\u89e3\u91ca\uff0c\u7edd\u5bf9\u8f7b\u677e\u52a0\u6109\u5feb\u7684\u8fa3 o","(",(0,n.kt)("em",{parentName:"p"},"\uffe3 \u25bd \uffe3"),")","o"),(0,n.kt)("h2",{id:"\u5377\u79ef"},"\u5377\u79ef"),(0,n.kt)("p",null,"\u4ec0\u4e48\u662f\u4e8c\u7ef4\u5377\u79ef\u5462\uff1f\u770b\u4e0b\u9762\u4e00\u5f20\u56fe\u5c31\u4e00\u76ee\u4e86\u7136\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_convolution.jpg",alt:null})),(0,n.kt)("p",null,"\u5377\u79ef\u5c31\u662f\u5faa\u73af\u5bf9",(0,n.kt)("strong",{parentName:"p"},"\u56fe\u50cf\u8ddf\u4e00\u4e2a\u6838\u9010\u4e2a\u5143\u7d20\u76f8\u4e58\u518d\u6c42\u548c\u5f97\u5230\u53e6\u5916\u4e00\u526f\u56fe\u50cf\u7684\u64cd\u4f5c"),"\uff0c\u6bd4\u5982\u7ed3\u679c\u56fe\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20 5 \u662f\u600e\u4e48\u7b97\u7684\u5462\uff1f\u539f\u56fe\u4e2d 3\xd73 \u7684\u533a\u57df\u4e0e 3\xd73 \u7684\u6838\u9010\u4e2a\u5143\u7d20\u76f8\u4e58\u518d\u76f8\u52a0\uff1a"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"5"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"3"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mo",{parentName:"mrow"},"\xd7"),(0,n.kt)("mn",{parentName:"mrow"},"2")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5=1\\times1+2\\times0+1\\times0+0\\times0+1\\times0+1\\times0+3\\times0+0\\times0+2\\times2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"5"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"3"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2")))))),(0,n.kt)("p",null,"\u7b97\u5b8c\u4e4b\u540e\uff0c\u6574\u4e2a\u6846\u518d\u5f80\u53f3\u79fb\u4e00\u6b65\u7ee7\u7eed\u8ba1\u7b97\uff0c\u6a2a\u5411\u8ba1\u7b97\u5b8c\u540e\uff0c\u518d\u5f80\u4e0b\u79fb\u4e00\u6b65\u7ee7\u7eed\u8ba1\u7b97\u2026\u2026\u7f51\u4e0a\u6709\u4e00\u526f\u5f88\u7ecf\u5178\u7684\u52a8\u6001\u56fe\uff0c\u65b9\u4fbf\u6211\u4eec\u7406\u89e3\u5377\u79ef\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_cnn.gif",alt:null})),(0,n.kt)("h2",{id:"padding"},"padding"),(0,n.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0\uff0c\u524d\u9762\u6211\u4eec\u7528 3\xd73 \u7684\u6838\u5bf9\u4e00\u526f 6\xd76 \u7684\u56fe\u50cf\u8fdb\u884c\u5377\u79ef\uff0c\u5f97\u5230\u7684\u662f 4\xd74 \u7684\u56fe\uff0c\u56fe\u7247\u7f29\u5c0f\u4e86\uff01\u90a3\u600e\u4e48\u529e\u5462\uff1f\u6211\u4eec\u53ef\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u628a\u539f\u56fe\u6269\u5145\u4e00\u5708\uff0c\u518d\u5377\u79ef\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u53eb\u586b\u5145 padding"),"\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e8b\u5b9e\u4e0a\uff0c\u539f\u56fe\u4e3a n\xd7n\uff0c\u5377\u79ef\u6838\u4e3a f\xd7f\uff0c\u6700\u7ec8\u7ed3\u679c\u56fe\u5927\u5c0f\u4e3a","(","n-f+1",")"," \xd7 ","(","n-f+1",")","\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_padding.jpg",alt:null})),(0,n.kt)("p",null,"\u90a3\u4e48\u6269\u5c55\u7684\u8fd9\u4e00\u5c42\u5e94\u8be5\u586b\u5145\u4ec0\u4e48\u503c\u5462\uff1fOpenCV \u4e2d\u6709\u597d\u51e0\u79cd\u586b\u5145\u65b9\u5f0f\uff0c\u90fd\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.copyMakeBorder()"),"\u51fd\u6570\u5b9e\u73b0\uff0c\u4e00\u8d77\u6765\u770b\u770b\u3002"),(0,n.kt)("h2",{id:"\u6dfb\u52a0\u8fb9\u6846"},"\u6dfb\u52a0\u8fb9\u6846"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"cv2.copyMakeBorder()"),"\u7528\u6765\u7ed9\u56fe\u7247\u6dfb\u52a0\u8fb9\u6846\uff0c\u5b83\u6709\u4e0b\u9762\u51e0\u4e2a\u53c2\u6570\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"src\uff1a\u8981\u5904\u7406\u7684\u539f\u56fe"),(0,n.kt)("li",{parentName:"ul"},"top, bottom, left, right\uff1a\u4e0a\u4e0b\u5de6\u53f3\u8981\u6269\u5c55\u7684\u50cf\u7d20\u6570"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"borderType"),"\uff1a\u8fb9\u6846\u7c7b\u578b\uff0c\u8fd9\u4e2a\u5c31\u662f\u9700\u8981\u5173\u6ce8\u7684\u586b\u5145\u65b9\u5f0f\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/3.3.1/d2/de8/group__core__array.html#ga209f2f4869e304c82d07739337eae7c5"},"BorderTypes"))),(0,n.kt)("p",null,"\u5176\u4e2d\u9ed8\u8ba4\u65b9\u5f0f\u548c\u56fa\u5b9a\u503c\u65b9\u5f0f\u6700\u5e38\u7528\uff0c\u6211\u4eec\u8be6\u7ec6\u8bf4\u660e\u4e00\u4e0b\uff1a"),(0,n.kt)("h3",{id:"\u56fa\u5b9a\u503c\u586b\u5145"},"\u56fa\u5b9a\u503c\u586b\u5145"),(0,n.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.BORDER_CONSTANT"),"\u8fd9\u79cd\u65b9\u5f0f\u5c31\u662f\u8fb9\u6846\u90fd\u586b\u5145\u6210\u4e00\u4e2a\u56fa\u5b9a\u7684\u503c\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u7a0b\u5e8f\u90fd\u586b\u5145 0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('6_by_6.bmp', 0)\nprint(img)\n\n# \u56fa\u5b9a\u503c\u8fb9\u6846\uff0c\u7edf\u4e00\u90fd\u586b\u5145 0 \u4e5f\u79f0\u4e3a zero padding\ncons = cv2.copyMakeBorder(img, 1, 1, 1, 1, cv2.BORDER_CONSTANT, value=0)\nprint(cons)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_zero_padding_output.jpg",alt:null})),(0,n.kt)("h3",{id:"\u9ed8\u8ba4\u8fb9\u6846\u7c7b\u578b"},"\u9ed8\u8ba4\u8fb9\u6846\u7c7b\u578b"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u8fb9\u6846",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.BORDER_DEFAULT"),"\u5176\u5b9e\u662f\u53d6\u955c\u50cf\u5bf9\u79f0\u7684\u50cf\u7d20\u586b\u5145\uff0c\u6bd4\u8f83\u62d7\u53e3\uff0c\u4e00\u6b65\u6b65\u89e3\u91ca\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"default = cv2.copyMakeBorder(img, 1, 1, 1, 1, cv2.BORDER_DEFAULT)\nprint(default)\n")),(0,n.kt)("p",null,"\u9996\u5148\u8fdb\u884c\u4e0a\u4e0b\u586b\u5145\uff0c\u586b\u5145\u6210\u4e0e\u539f\u56fe\u50cf\u8fb9\u754c\u5bf9\u79f0\u7684\u503c\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_up_down_padding_first.jpg",alt:null})),(0,n.kt)("p",null,"\u540c\u7406\u518d\u8fdb\u884c\u5de6\u53f3\u4e24\u8fb9\u7684\u586b\u5145\uff0c\u6700\u540e\u628a\u56db\u4e2a\u9876\u70b9\u8865\u5145\u4e0a\u5c31\u597d\u4e86\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_right_left_padding_second2.jpg",alt:null})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u65b9\u5f0f\u66f4\u52a0\u5408\u7406\uff0c\u56e0\u4e3a\u8fb9\u754c\u7684\u50cf\u7d20\u503c\u66f4\u52a0\u63a5\u8fd1\u3002\u5177\u4f53\u5e94\u89c6\u573a\u5408\u800c\u5b9a\u3002")),(0,n.kt)("h2",{id:"opencv-\u8fdb\u884c\u5377\u79ef"},"OpenCV \u8fdb\u884c\u5377\u79ef"),(0,n.kt)("p",null,"OpenCV \u4e2d\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.filter2D()"),"\u5b9e\u73b0\u5377\u79ef\u64cd\u4f5c\uff0c\u6bd4\u5982\u6211\u4eec\u7684\u6838\u662f\u4e0b\u9762\u8fd9\u6837\uff083\xd73 \u533a\u57df\u50cf\u7d20\u7684\u548c\u9664\u4ee5 10\uff09\uff1a"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mtable",{parentName:"semantics",width:"100%"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr",width:"50%"}),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mrow",{parentName:"mtd"},(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mn",{parentName:"mfrac"},"10")),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center center center",columnspacing:"1em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1")))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))))),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"]")))),(0,n.kt)("mtd",{parentName:"mtr",width:"50%"}),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mtext",{parentName:"mtd"},"(3)")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M = \\frac{1}{10}\\left[ \\begin{matrix} 1 & 1 & 1 \\newline 1 & 1 & 1 \\newline 1 & 1 & 1 \\end{matrix} \\right] \\tag{3}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"10"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a3"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M319 0 H403 V16 H319z M319 0 H403 V16 H319z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-4.21em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.01em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.81em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M263 0 H347 V16 H263z M263 0 H347 V16 H263z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a4")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",className:"tag"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"3")),(0,n.kt)("span",{parentName:"span",className:"mord"},")"))))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('lena.jpg')\n# \u5b9a\u4e49\u5377\u79ef\u6838\nkernel = np.ones((3, 3), np.float32) / 10\n# \u5377\u79ef\u64cd\u4f5c\uff0c-1 \u8868\u793a\u901a\u9053\u6570\u4e0e\u539f\u56fe\u76f8\u540c\ndst = cv2.filter2D(img, -1, kernel)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_convolution_kernel_3_3.jpg",alt:null})),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u6838\u5bf9\u56fe\u50cf\u8fdb\u884c\u4e86\u6a21\u7cca\u5904\u7406\uff0c\u8fd9\u662f\u5377\u79ef\u7684\u4f17\u591a\u529f\u80fd\u4e4b\u4e00\u3002\u5f53\u7136\u5377\u79ef\u8fd8\u6709\u5f88\u591a\u77e5\u8bc6\u6ca1\u6709\u5b66\u5230\uff0c\u540e\u9762\u6211\u4eec\u518d\u7ee7\u7eed\u6df1\u5165\u3002"),(0,n.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'\u5c1d\u8bd5\u7ed9"lena.jpg"\u6dfb\u52a0\u51e0\u79cd\u4e0d\u540c\u7684\u8fb9\u6846\u7c7b\u578b\uff0c\u5bf9\u6bd4\u4e0b\u6548\u679c\u3002')),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-08-Padding-and-Convolution"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_core/py_basic_ops/py_basic_ops.html"},"Basic Operations on Images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://blog.csdn.net/zouxy09/article/details/49080029"},"\u56fe\u50cf\u5377\u79ef\u4e0e\u6ee4\u6ce2\u7684\u4e00\u4e9b\u77e5\u8bc6\u70b9"))))}c.isMDXComponent=!0}}]);