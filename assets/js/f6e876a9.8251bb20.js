"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9112],{86485:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>m,metadata:()=>r,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));t(16758);const m={},p="\u756a\u5916\u7bc7\uff1a\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6",r={unversionedId:"artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness",id:"artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness",title:"\u756a\u5916\u7bc7\uff1a\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6",description:"\u5b66\u4e60\u5982\u4f55\u8c03\u6574\u56fe\u7247\u7684\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness",permalink:"/docs/artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/basic/extra-07-contrast-and-brightness.md",tags:[],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{},sidebar:"ai",previous:{title:"\u6311\u6218\u4efb\u52a1\uff1a\u8f66\u9053\u68c0\u6d4b",permalink:"/docs/artificial-intelligence/opencv/basic/challenge-03-lane-road-detection"},next:{title:"\u756a\u5916\u7bc7\uff1a\u5377\u79ef\u57fa\u7840 - \u56fe\u7247\u8fb9\u6846",permalink:"/docs/artificial-intelligence/opencv/basic/extra-08-padding-and-convolution"}},i={},l=[{value:"\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6",id:"\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:l};function o(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u756a\u5916\u7bc7\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6"},"\u756a\u5916\u7bc7\uff1a\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_contrast_brightness.jpg",alt:null})),(0,s.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u8c03\u6574\u56fe\u7247\u7684\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,s.kt)("h2",{id:"\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6"},"\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6"),(0,s.kt)("p",null,"\u4eae\u5ea6\u8c03\u6574\u662f\u5c06\u56fe\u50cf\u50cf\u7d20\u7684\u5f3a\u5ea6\u6574\u4f53\u53d8\u5927/\u53d8\u5c0f\uff0c\u5bf9\u6bd4\u5ea6\u8c03\u6574\u6307\u7684\u662f\u56fe\u50cf\u6697\u5904\u7684\u50cf\u7d20\u5f3a\u5ea6\u53d8\u4f4e\uff0c\u4eae\u51fa\u7684\u53d8\u9ad8\uff0c\u4ece\u800c\u62d3\u5bbd\u67d0\u4e2a\u533a\u57df\u5185\u7684\u663e\u793a\u7cbe\u5ea6\u3002"),(0,s.kt)("p",null,"OpenCV \u4e2d\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u5e94\u7528\u8fd9\u4e2a\u516c\u5f0f\u6765\u8ba1\u7b97\uff1a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"g(x)=\u03b1f(x)+\u03b2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2"))))),"\uff0c\u5176\u4e2d\uff1a",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\u03b1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))))),"\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\u03b2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2"))))),"\u5e38\u79f0\u4e3a\u589e\u76ca\u4e0e\u504f\u7f6e\u503c\uff0c\u5206\u522b\u63a7\u5236\u56fe\u7247\u7684\u5bf9\u6bd4\u5ea6\u548c\u4eae\u5ea6\u3002"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u5bf9 \u03b1/\u03b2 \u63a7\u5236\u5bf9\u6bd4\u5ea6\u548c\u4eae\u5ea6\u6709\u4e89\u8bae\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a",(0,s.kt)("a",{parentName:"p",href:"http://blog.csdn.net/abc20002929/article/details/40474807"},"OpenCV \u5173\u4e8e\u5bf9\u6bd4\u5ea6\u548c\u4eae\u5ea6\u7684\u8bef\u89e3"),"\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\nimg = cv2.imread('lena.jpg')\n# \u6b64\u5904\u9700\u6ce8\u610f\uff0c\u8bf7\u53c2\u8003\u540e\u9762\u7684\u89e3\u91ca\nres = np.uint8(np.clip((1.5 * img + 10), 0, 255))\ntmp = np.hstack((img, res))  # \u4e24\u5f20\u56fe\u7247\u6a2a\u5411\u5408\u5e76\uff08\u4fbf\u4e8e\u5bf9\u6bd4\u663e\u793a\uff09\n\ncv2.imshow('image', tmp)\ncv2.waitKey(0)\n")),(0,s.kt)("p",null,"\u8fd8\u8bb0\u5f97\u56fe\u50cf\u6df7\u5408\u90a3\u4e00\u8282\u4e2d numpy \u5bf9\u6570\u636e\u6ea2\u51fa\u7684\u53d6\u6a21\u5904\u7406\u5417\uff1f",(0,s.kt)("inlineCode",{parentName:"p"},"250+10 = 260 => 260%256=4"),"\uff0c\u5b83\u5e76\u4e0d\u9002\u7528\u4e8e\u6211\u4eec\u7684\u56fe\u50cf\u5904\u7406\uff0c\u6240\u4ee5\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.scipy.org/doc/numpy/reference/generated/numpy.clip.html#numpy.clip"},"np.clip","(",")")," \u51fd\u6570\u5c06\u6570\u636e\u9650\u5b9a\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"a<0 => a=0, a>255 => a=255"),"\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_contrast_brightness.jpg",alt:"\u4eae\u5ea6\u4e0e\u5bf9\u6bd4\u5ea6\u8c03\u6574"})),(0,s.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e24\u4e2a\u6ed1\u52a8\u6761\u5206\u522b\u8c03\u6574\u5bf9\u6bd4\u5ea6\u548c\u4eae\u5ea6\uff08\u5bf9\u6bd4\u5ea6\u8303\u56f4\uff1a0~0.3\uff0c\u4eae\u5ea6\uff1a0~100\uff09\u3002\u63d0\u793a\uff1a\u56e0\u4e3a\u6ed1\u52a8\u6761\u6ca1\u6709\u5c0f\u6570\uff0c\u6240\u4ee5\u53ef\u4ee5\u8bbe\u7f6e\u4e3a 0~300\uff0c\u7136\u540e\u4e58\u4ee5 0.01\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4eae\u5ea6/\u5bf9\u6bd4\u5ea6\u7528 C++\u5b9e\u73b0\u4e5f\u5f88\u6709\u8da3\uff0c\u63a8\u8350\u9605\u8bfb\uff1a",(0,s.kt)("a",{parentName:"li",href:"http://blog.csdn.net/u013139259/article/details/52145377"},"OpenCV \u6539\u53d8\u56fe\u50cf\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u4ee5\u53ca\u4f18\u5316"),"\u3002")),(0,s.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-07-Contrast-and-Brightness"},"\u672c\u8282\u6e90\u7801")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.scipy.org/doc/numpy/reference/generated/numpy.clip.html#numpy.clip"},"numpy.clip()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://blog.csdn.net/abc20002929/article/details/40474807"},"OpenCV \u5173\u4e8e\u5bf9\u6bd4\u5ea6\u548c\u4eae\u5ea6\u7684\u8bef\u89e3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://blog.csdn.net/u013139259/article/details/52145377"},"OpenCV \u6539\u53d8\u56fe\u50cf\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u4ee5\u53ca\u4f18\u5316")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.opencv.org/3.1.0/d3/d63/classcv_1_1Mat.html#a3f356665bb0ca452e7d7723ccac9a810"},"Mat::convertTo"))))}o.isMDXComponent=!0}}]);