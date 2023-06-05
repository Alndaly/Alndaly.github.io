"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1882],{93971:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(16758);const i={},r="13: \u8f6e\u5ed3",l={unversionedId:"artificial-intelligence/opencv/basic/contours",id:"artificial-intelligence/opencv/basic/contours",title:"13: \u8f6e\u5ed3",description:"\u5b66\u4e60\u5982\u4f55\u5bfb\u627e\u5e76\u7ed8\u5236\u8f6e\u5ed3\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/13-contours.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/contours",permalink:"/en/docs/artificial-intelligence/opencv/basic/contours",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/13-contours.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:13,frontMatter:{},sidebar:"ai",previous:{title:"12: \u8150\u8680\u4e0e\u81a8\u80c0",permalink:"/en/docs/artificial-intelligence/opencv/basic/erode-and-dilate"},next:{title:"14: \u8f6e\u5ed3\u7279\u5f81",permalink:"/en/docs/artificial-intelligence/opencv/basic/contour-features"}},c={},p=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u5565\u53eb\u8f6e\u5ed3",id:"\u5565\u53eb\u8f6e\u5ed3",level:3},{value:"\u5bfb\u627e\u8f6e\u5ed3",id:"\u5bfb\u627e\u8f6e\u5ed3",level:3},{value:"\u7ed8\u5236\u8f6e\u5ed3",id:"\u7ed8\u5236\u8f6e\u5ed3",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"13-\u8f6e\u5ed3"},"13: \u8f6e\u5ed3"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_contours.jpg",alt:null})),(0,o.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u5bfb\u627e\u5e76\u7ed8\u5236\u8f6e\u5ed3\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,o.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u8f6e\u5ed3\u6982\u5ff5"),(0,o.kt)("li",{parentName:"ul"},"\u5bfb\u627e\u5e76\u7ed8\u5236\u8f6e\u5ed3"),(0,o.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"cv2.findContours()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"cv2.drawContours()"))),(0,o.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,o.kt)("h3",{id:"\u5565\u53eb\u8f6e\u5ed3"},"\u5565\u53eb\u8f6e\u5ed3"),(0,o.kt)("p",null,"\u8f6e\u5ed3\u662f\u4e00\u7cfb\u5217\u76f8\u8fde\u7684\u70b9\u7ec4\u6210\u7684\u66f2\u7ebf\uff0c\u4ee3\u8868\u4e86\u7269\u4f53\u7684\u57fa\u672c\u5916\u5f62\u3002"),(0,o.kt)("p",null,"\u8c08\u8d77\u8f6e\u5ed3\u4e0d\u514d\u60f3\u5230\u8fb9\u7f18\uff0c\u5b83\u4eec\u786e\u5b9e\u5f88\u50cf\u3002\u7b80\u5355\u7684\u8bf4\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u8f6e\u5ed3\u662f\u8fde\u7eed\u7684\uff0c\u8fb9\u7f18\u5e76\u4e0d\u5168\u90fd\u8fde\u7eed"),"\uff08\u4e0b\u56fe\uff09\u3002\u5176\u5b9e\u8fb9\u7f18\u4e3b\u8981\u662f\u4f5c\u4e3a\u56fe\u50cf\u7684\u7279\u5f81\u4f7f\u7528\uff0c\u6bd4\u5982\u53ef\u4ee5\u7528\u8fb9\u7f18\u7279\u5f81\u53ef\u4ee5\u533a\u5206\u8138\u548c\u624b\uff0c\u800c\u8f6e\u5ed3\u4e3b\u8981\u7528\u6765\u5206\u6790\u7269\u4f53\u7684\u5f62\u6001\uff0c\u6bd4\u5982\u7269\u4f53\u7684\u5468\u957f\u548c\u9762\u79ef\u7b49\uff0c\u53ef\u4ee5\u8bf4\u8fb9\u7f18\u5305\u62ec\u8f6e\u5ed3\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_contours.jpg",alt:"\u8fb9\u7f18\u548c\u8f6e\u5ed3\u7684\u533a\u522b"})),(0,o.kt)("p",null,"\u5bfb\u627e\u8f6e\u5ed3\u7684\u64cd\u4f5c\u4e00\u822c\u7528\u4e8e\u4e8c\u503c\u5316\u56fe\uff0c\u6240\u4ee5\u901a\u5e38\u4f1a\u4f7f\u7528\u9608\u503c\u5206\u5272\u6216 Canny \u8fb9\u7f18\u68c0\u6d4b\u5148\u5f97\u5230\u4e8c\u503c\u56fe\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5bfb\u627e\u8f6e\u5ed3\u662f\u9488\u5bf9\u767d\u8272\u7269\u4f53\u7684"),"\uff0c\u4e00\u5b9a\u8981\u4fdd\u8bc1\u7269\u4f53\u662f\u767d\u8272\uff0c\u800c\u80cc\u666f\u662f\u9ed1\u8272\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u7136\u5f88\u591a\u4eba\u5728\u5bfb\u627e\u8f6e\u5ed3\u65f6\u4f1a\u627e\u5230\u56fe\u7247\u6700\u5916\u9762\u7684\u4e00\u4e2a\u6846"),"\u3002")),(0,o.kt)("h3",{id:"\u5bfb\u627e\u8f6e\u5ed3"},"\u5bfb\u627e\u8f6e\u5ed3"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"cv2.findContours()"),"\u5bfb\u627e\u8f6e\u5ed3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nimg = cv2.imread('handwriting.jpg')\nimg_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nret, thresh = cv2.threshold(img_gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)\n\n# \u5bfb\u627e\u4e8c\u503c\u5316\u56fe\u4e2d\u7684\u8f6e\u5ed3\nimage, contours, hierarchy = cv2.findContours(\n    thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\nprint(len(contours))  # \u7ed3\u679c\u5e94\u8be5\u4e3a 2\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u8f6e\u5ed3\u7684\u67e5\u627e\u65b9\u5f0f\uff0c\u4e00\u822c\u4f7f\u7528 cv2.RETR_TREE\uff0c\u8868\u793a\u63d0\u53d6\u6240\u6709\u7684\u8f6e\u5ed3\u5e76\u5efa\u7acb\u8f6e\u5ed3\u95f4\u7684\u5c42\u7ea7\u3002\u66f4\u591a\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga819779b9857cc2f8601e6526a3a5bc71"},"RetrievalModes")),(0,o.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u8f6e\u5ed3\u7684\u8fd1\u4f3c\u65b9\u6cd5\u3002\u6bd4\u5982\u5bf9\u4e8e\u4e00\u6761\u76f4\u7ebf\uff0c\u6211\u4eec\u53ef\u4ee5\u5b58\u50a8\u8be5\u76f4\u7ebf\u7684\u6240\u6709\u50cf\u7d20\u70b9\uff0c\u4e5f\u53ef\u4ee5\u53ea\u5b58\u50a8\u8d77\u70b9\u548c\u7ec8\u70b9\u3002\u4f7f\u7528 cv2.CHAIN_APPROX_SIMPLE \u5c31\u8868\u793a\u7528\u5c3d\u53ef\u80fd\u5c11\u7684\u50cf\u7d20\u70b9\u8868\u793a\u8f6e\u5ed3\u3002\u66f4\u591a\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga4303f45752694956374734a03c54d5ff"},"ContourApproximationModes")),(0,o.kt)("li",{parentName:"ul"},"\u7b80\u4fbf\u8d77\u89c1\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528\u771f\u503c 3 \u548c 2 \u8868\u793a\u3002")),(0,o.kt)("p",null,"\u51fd\u6570\u6709 3 \u4e2a\u8fd4\u56de\u503c\uff0cimage \u8fd8\u662f\u539f\u6765\u7684\u4e8c\u503c\u5316\u56fe\u7247\uff0chierarchy \u662f\u8f6e\u5ed3\u95f4\u7684\u5c42\u7ea7\u5173\u7cfb\uff08",(0,o.kt)("a",{parentName:"p",href:"./extra-10-contours-hierarchy/"},"\u756a\u5916\u7bc7\uff1a\u8f6e\u5ed3\u5c42\u7ea7"),"\uff09\uff0c\u8fd9\u4e24\u4e2a\u6682\u65f6\u4e0d\u7528\u7406\u4f1a\u3002\u6211\u4eec\u4e3b\u8981\u770b contours\uff0c\u5b83\u5c31\u662f\u627e\u5230\u7684\u8f6e\u5ed3\u4e86\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u5b58\u50a8\uff0c\u8bb0\u5f55\u4e86\u6bcf\u6761\u8f6e\u5ed3\u7684\u6240\u6709\u50cf\u7d20\u70b9\u7684\u5750\u6807","(","x,y",")","\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_find_contours_contours.jpg",alt:null})),(0,o.kt)("h3",{id:"\u7ed8\u5236\u8f6e\u5ed3"},"\u7ed8\u5236\u8f6e\u5ed3"),(0,o.kt)("p",null,"\u8f6e\u5ed3\u627e\u51fa\u6765\u540e\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u770b\uff0c\u53ef\u4ee5\u50cf\u524d\u9762\u56fe\u4e2d\u90a3\u6837\u7528\u7ea2\u8272\u753b\u51fa\u6765\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"cv2.drawContours()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"cv2.drawContours(img, contours, -1, (0, 0, 255), 2)\n")),(0,o.kt)("p",null,"\u5176\u4e2d\u53c2\u6570 2 \u5c31\u662f\u5f97\u5230\u7684 contours\uff0c\u53c2\u6570 3 \u8868\u793a\u8981\u7ed8\u5236\u54ea\u4e00\u6761\u8f6e\u5ed3\uff0c-1 \u8868\u793a\u7ed8\u5236\u6240\u6709\u8f6e\u5ed3\uff0c\u53c2\u6570 4 \u662f\u989c\u8272\uff08B/G/R \u901a\u9053\uff0c\u6240\u4ee5","(","0,0,255",")"," \u8868\u793a\u7ea2\u8272\uff09\uff0c\u53c2\u6570 5 \u662f\u7ebf\u5bbd\uff0c\u4e4b\u524d\u5728\u7ed8\u5236\u56fe\u5f62\u4e2d\u4ecb\u7ecd\u8fc7\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5f88\u591a\u4eba\u753b\u56fe\u65f6\u660e\u660e\u7528\u4e86\u5f69\u8272\uff0c\u4f46\u6ca1\u6709\u6548\u679c\uff0c\u8bf7\u68c0\u67e5\u4f60\u662f\u5728\u54ea\u4e2a\u56fe\u4e0a\u753b\uff0c\u753b\u5728\u7070\u5ea6\u56fe\u548c\u4e8c\u503c\u56fe\u4e0a\u663e\u7136\u662f\u6ca1\u6709\u5f69\u8272\u7684","(","\u2299o\u2299",")","\u3002")),(0,o.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u9996\u5148\u83b7\u5f97\u8981\u64cd\u4f5c\u7684\u8f6e\u5ed3\uff0c\u518d\u8fdb\u884c\u8f6e\u5ed3\u7ed8\u5236\u53ca\u5206\u6790\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"cnt = contours[1]\ncv2.drawContours(img, [cnt], 0, (0, 0, 255), 2)\n")),(0,o.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f6e\u5ed3\u7279\u5f81\u975e\u5e38\u6709\u7528\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"cv2.findContours()"),"\u5bfb\u627e\u8f6e\u5ed3\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"cv2.drawContours()"),"\u7ed8\u5236\u8f6e\u5ed3\u3002")),(0,o.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#gadf1ad6a0b82947fa1fe3c3d497f260e0"},"cv2.findContours()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga819779b9857cc2f8601e6526a3a5bc71"},"cv2.RetrievalModes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga4303f45752694956374734a03c54d5ff"},"cv2.ContourApproximationModes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga746c0625f1781f1ffc9056259103edbc"},"cv2.drawContours()"))),(0,o.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/13-Contours"},"\u672c\u8282\u6e90\u7801")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_begin/py_contours_begin.html"},"Contours : Getting Started"))))}u.isMDXComponent=!0}}]);