"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6365],{61999:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>p,toc:()=>r});var n=t(87462),m=(t(67294),t(3905));t(16758);const s={},i="09: \u56fe\u50cf\u6df7\u5408",p={unversionedId:"artificial-intelligence/opencv/basic/image-blending",id:"artificial-intelligence/opencv/basic/image-blending",title:"09: \u56fe\u50cf\u6df7\u5408",description:"\u5b66\u4e60\u56fe\u7247\u95f4\u7684\u6570\u5b66\u8fd0\u7b97\uff0c\u56fe\u50cf\u6df7\u5408\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/09-image-blending.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/image-blending",permalink:"/docs/artificial-intelligence/opencv/basic/image-blending",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/basic/09-image-blending.md",tags:[],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",sidebarPosition:9,frontMatter:{},sidebar:"ai",previous:{title:"\u57fa\u7840\u7bc7",permalink:"/docs/category/\u57fa\u7840\u7bc7"},next:{title:"10: \u5e73\u6ed1\u56fe\u50cf",permalink:"/docs/artificial-intelligence/opencv/basic/smoothing-images"}},l={},r=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u56fe\u7247\u76f8\u52a0",id:"\u56fe\u7247\u76f8\u52a0",level:3},{value:"\u56fe\u50cf\u6df7\u5408",id:"\u56fe\u50cf\u6df7\u5408",level:3},{value:"\u6309\u4f4d\u64cd\u4f5c",id:"\u6309\u4f4d\u64cd\u4f5c",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:r};function o(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"09-\u56fe\u50cf\u6df7\u5408"},"09: \u56fe\u50cf\u6df7\u5408"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_image_blending_6_4.jpg",alt:null})),(0,m.kt)("p",null,"\u5b66\u4e60\u56fe\u7247\u95f4\u7684\u6570\u5b66\u8fd0\u7b97\uff0c\u56fe\u50cf\u6df7\u5408\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,m.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"\u56fe\u7247\u95f4\u7684\u6570\u5b66\u8fd0\u7b97\uff0c\u5982\u76f8\u52a0\u3001\u6309\u4f4d\u8fd0\u7b97\u7b49"),(0,m.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.add()"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.addWeighted()"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.bitwise_and()"))),(0,m.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u606d\u559c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u5165\u95e8\u7bc7\u7684\u5b66\u4e60\u5662\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5b66\u4e60\u4e00\u4e9b OpenCV \u7684\u57fa\u7840\u5185\u5bb9\uff0c\u52a0\u6cb9","(","\u0e07 \u2022","_","\u2022",")","\u0e07")),(0,m.kt)("h3",{id:"\u56fe\u7247\u76f8\u52a0"},"\u56fe\u7247\u76f8\u52a0"),(0,m.kt)("p",null,"\u8981\u53e0\u52a0\u4e24\u5f20\u56fe\u7247\uff0c\u53ef\u4ee5\u7528",(0,m.kt)("inlineCode",{parentName:"p"},"cv2.add()"),"\u51fd\u6570\uff0c\u76f8\u52a0\u4e24\u5e45\u56fe\u7247\u7684\u5f62\u72b6\uff08\u9ad8\u5ea6/\u5bbd\u5ea6/\u901a\u9053\u6570\uff09\u5fc5\u987b\u76f8\u540c\u3002numpy \u4e2d\u53ef\u4ee5\u76f4\u63a5\u7528 res = img + img1 \u76f8\u52a0\uff0c\u4f46\u8fd9\u4e24\u8005\u7684\u7ed3\u679c\u5e76\u4e0d\u76f8\u540c\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"x = np.uint8([250])\ny = np.uint8([10])\nprint(cv2.add(x, y))  # 250+10 = 260 => 255\nprint(x + y)  # 250+10 = 260 % 256 = 4\n")),(0,m.kt)("p",null,"\u5982\u679c\u662f\u4e8c\u503c\u5316\u56fe\u7247\uff08\u53ea\u6709 0 \u548c 255 \u4e24\u79cd\u503c\uff09\uff0c\u4e24\u8005\u7ed3\u679c\u662f\u4e00\u6837\u7684\uff08\u7528 numpy \u7684\u65b9\u5f0f\u66f4\u7b80\u4fbf\u4e00\u4e9b\uff09\u3002"),(0,m.kt)("h3",{id:"\u56fe\u50cf\u6df7\u5408"},"\u56fe\u50cf\u6df7\u5408"),(0,m.kt)("p",null,"\u56fe\u50cf\u6df7\u5408",(0,m.kt)("inlineCode",{parentName:"p"},"cv2.addWeighted()"),"\u4e5f\u662f\u4e00\u79cd\u56fe\u7247\u76f8\u52a0\u7684\u64cd\u4f5c\uff0c\u53ea\u4e0d\u8fc7\u4e24\u5e45\u56fe\u7247\u7684\u6743\u91cd\u4e0d\u4e00\u6837\uff0c\u03b3 \u76f8\u5f53\u4e8e\u4e00\u4e2a\u4fee\u6b63\u503c\uff1a"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"\u03b1"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b2"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b3")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dst = \\alpha\\times img1+\\beta\\times img2 + \\gamma")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05556em"}},"\u03b3")))))),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"img1 = cv2.imread('lena_small.jpg')\nimg2 = cv2.imread('opencv-logo-white.png')\nres = cv2.addWeighted(img1, 0.6, img2, 0.4, 0)\n")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_image_blending_6_4.jpg",alt:"\u56fe\u50cf\u6df7\u5408"})),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"\u03b1 \u548c \u03b2 \u90fd\u7b49\u4e8e 1 \u65f6\uff0c\u5c31\u76f8\u5f53\u4e8e\u56fe\u7247\u76f8\u52a0\u3002")),(0,m.kt)("h3",{id:"\u6309\u4f4d\u64cd\u4f5c"},"\u6309\u4f4d\u64cd\u4f5c"),(0,m.kt)("p",null,"\u6309\u4f4d\u64cd\u4f5c\u5305\u62ec\u6309\u4f4d\u4e0e/\u6216/\u975e/\u5f02\u6216\u64cd\u4f5c\uff0c\u6709\u4ec0\u4e48\u7528\u9014\u5462\uff1f\u6bd4\u5982\u8bf4\u6211\u4eec\u8981\u5b9e\u73b0\u4e0b\u56fe\u7684\u6548\u679c\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_bitwise_operations_demo.jpg",alt:null})),(0,m.kt)("p",null,"\u5982\u679c\u5c06\u4e24\u5e45\u56fe\u7247\u76f4\u63a5\u76f8\u52a0\u4f1a\u6539\u53d8\u56fe\u7247\u7684\u989c\u8272\uff0c\u5982\u679c\u7528\u56fe\u50cf\u6df7\u5408\uff0c\u5219\u4f1a\u6539\u53d8\u56fe\u7247\u7684\u900f\u660e\u5ea6\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u7528\u6309\u4f4d\u64cd\u4f5c\u3002\u9996\u5148\u6765\u4e86\u89e3\u4e00\u4e0b",(0,m.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/%E6%8E%A9%E8%86%9C/8544392?fr=aladdin"},"\u63a9\u819c"),"\uff08mask\uff09\u7684\u6982\u5ff5\uff1a\u63a9\u819c\u662f\u7528\u4e00\u526f\u4e8c\u503c\u5316\u56fe\u7247\u5bf9\u53e6\u5916\u4e00\u5e45\u56fe\u7247\u8fdb\u884c\u5c40\u90e8\u7684\u906e\u6321\uff0c\u770b\u4e0b\u56fe\u5c31\u4e00\u76ee\u4e86\u7136\u4e86\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_mask.jpg",alt:"\u63a9\u819c\u6982\u5ff5"})),(0,m.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u7684\u601d\u8def\u5c31\u662f\u628a\u539f\u56fe\u4e2d\u8981\u653e logo \u7684\u533a\u57df\u62a0\u51fa\u6765\uff0c\u518d\u628a logo \u653e\u8fdb\u53bb\u5c31\u884c\u4e86\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"img1 = cv2.imread('lena.jpg')\nimg2 = cv2.imread('opencv-logo-white.png')\n\n# \u628a logo \u653e\u5728\u5de6\u4e0a\u89d2\uff0c\u6240\u4ee5\u6211\u4eec\u53ea\u5173\u5fc3\u8fd9\u4e00\u5757\u533a\u57df\nrows, cols = img2.shape[:2]\nroi = img1[:rows, :cols]\n\n# \u521b\u5efa\u63a9\u819c\nimg2gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)\nret, mask = cv2.threshold(img2gray, 10, 255, cv2.THRESH_BINARY)\nmask_inv = cv2.bitwise_not(mask)\n\n# \u4fdd\u7559\u9664 logo \u5916\u7684\u80cc\u666f\nimg1_bg = cv2.bitwise_and(roi, roi, mask=mask_inv)\ndst = cv2.add(img1_bg, img2)  # \u8fdb\u884c\u878d\u5408\nimg1[:rows, :cols] = dst  # \u878d\u5408\u540e\u653e\u5728\u539f\u56fe\u4e0a\n")),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"\u63a9\u819c\u7684\u6982\u5ff5\u5728\u56fe\u50cf\u6df7\u5408/\u53e0\u52a0\u7684\u573a\u666f\u4e0b\u4f7f\u7528\u8f83\u591a\uff0c\u53ef\u4ee5\u591a\u591a\u7ec3\u4e60\u5662\uff01")),(0,m.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"cv2.add()"),"\u7528\u6765\u53e0\u52a0\u4e24\u5e45\u56fe\u7247\uff0c",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.addWeighted()"),"\u4e5f\u662f\u53e0\u52a0\u4e24\u5e45\u56fe\u7247\uff0c\u4f46\u4e24\u5e45\u56fe\u7247\u7684\u6743\u91cd\u4e0d\u4e00\u6837\u3002"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"cv2.bitwise_and()"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.bitwise_not()"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.bitwise_or()"),", ",(0,m.kt)("inlineCode",{parentName:"li"},"cv2.bitwise_xor()"),"\u5206\u522b\u6267\u884c\u6309\u4f4d\u4e0e/\u6216/\u975e/\u5f02\u6216\u8fd0\u7b97\u3002\u63a9\u819c\u5c31\u662f\u7528\u6765\u5bf9\u56fe\u7247\u8fdb\u884c\u5168\u5c40\u6216\u5c40\u90e8\u7684\u906e\u6321\u3002")),(0,m.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga10ac1bfb180e2cfda1701d06c24fdbd6"},"cv2.add","(",")")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#gafafb2513349db3bcff51f54ee5592a19"},"cv2.addWeighted","(",")")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga60b4d04b251ba5eb1392c34425497e14"},"cv2.bitwise_and","(",")")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga0002cf8b418479f4cb49a75442baee2f"},"cv2.bitwise_not","(",")"))),(0,m.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/09-Image-Blending"},"\u672c\u8282\u6e90\u7801")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/%E6%8E%A9%E8%86%9C/8544392?fr=aladdin"},"\u63a9\u819c")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_core/py_image_arithmetics/py_image_arithmetics.html"},"Arithmetic Operations on Images"))))}o.isMDXComponent=!0}}]);