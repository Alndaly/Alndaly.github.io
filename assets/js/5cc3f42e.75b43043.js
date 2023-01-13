"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5301],{12005:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=l(87462),n=(l(67294),l(3905));l(16758);const i={},r="12: \u8150\u8680\u4e0e\u81a8\u80c0",o={unversionedId:"artificial-intelligence/opencv/basic/erode-and-dilate",id:"artificial-intelligence/opencv/basic/erode-and-dilate",title:"12: \u8150\u8680\u4e0e\u81a8\u80c0",description:"\u5b66\u4e60\u5e38\u7528\u5f62\u6001\u5b66\u64cd\u4f5c\uff1a\u8150\u8680\u81a8\u80c0\uff0c\u5f00\u8fd0\u7b97\u548c\u95ed\u8fd0\u7b97\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/12-erode-and-dilate.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/erode-and-dilate",permalink:"/docs/artificial-intelligence/opencv/basic/erode-and-dilate",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/basic/12-erode-and-dilate.md",tags:[],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",sidebarPosition:12,frontMatter:{},sidebar:"ai",previous:{title:"11: \u8fb9\u7f18\u68c0\u6d4b",permalink:"/docs/artificial-intelligence/opencv/basic/edge-detection"},next:{title:"13: \u8f6e\u5ed3",permalink:"/docs/artificial-intelligence/opencv/basic/contours"}},p={},c=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u5565\u53eb\u5f62\u6001\u5b66\u64cd\u4f5c",id:"\u5565\u53eb\u5f62\u6001\u5b66\u64cd\u4f5c",level:3},{value:"\u8150\u8680",id:"\u8150\u8680",level:3},{value:"\u81a8\u80c0",id:"\u81a8\u80c0",level:3},{value:"\u5f00/\u95ed\u8fd0\u7b97",id:"\u5f00\u95ed\u8fd0\u7b97",level:3},{value:"\u5176\u4ed6\u5f62\u6001\u5b66\u64cd\u4f5c",id:"\u5176\u4ed6\u5f62\u6001\u5b66\u64cd\u4f5c",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],d={toc:c};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"12-\u8150\u8680\u4e0e\u81a8\u80c0"},"12: \u8150\u8680\u4e0e\u81a8\u80c0"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_morphological.jpg",alt:null})),(0,n.kt)("p",null,"\u5b66\u4e60\u5e38\u7528\u5f62\u6001\u5b66\u64cd\u4f5c\uff1a\u8150\u8680\u81a8\u80c0\uff0c\u5f00\u8fd0\u7b97\u548c\u95ed\u8fd0\u7b97\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u5f62\u6001\u5b66\u64cd\u4f5c\u7684\u6982\u5ff5"),(0,n.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u81a8\u80c0\u3001\u8150\u8680\u3001\u5f00\u8fd0\u7b97\u548c\u95ed\u8fd0\u7b97\u7b49\u5f62\u6001\u5b66\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.erode()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.dilate()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.morphologyEx()"))),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("h3",{id:"\u5565\u53eb\u5f62\u6001\u5b66\u64cd\u4f5c"},"\u5565\u53eb\u5f62\u6001\u5b66\u64cd\u4f5c"),(0,n.kt)("p",null,"\u5f62\u6001\u5b66\u64cd\u4f5c\u5176\u5b9e\u5c31\u662f",(0,n.kt)("strong",{parentName:"p"},"\u6539\u53d8\u7269\u4f53\u7684\u5f62\u72b6"),'\uff0c\u6bd4\u5982\u8150\u8680\u5c31\u662f"\u53d8\u7626"\uff0c\u81a8\u80c0\u5c31\u662f"\u53d8\u80d6"\uff0c\u770b\u4e0b\u56fe\u5c31\u660e\u767d\u4e86\uff1a'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_morphological.jpg",alt:null})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5f62\u6001\u5b66\u64cd\u4f5c\u4e00\u822c\u4f5c\u7528\u4e8e\u4e8c\u503c\u5316\u56fe\uff0c\u6765\u8fde\u63a5\u76f8\u90bb\u7684\u5143\u7d20\u6216\u5206\u79bb\u6210\u72ec\u7acb\u7684\u5143\u7d20\u3002",(0,n.kt)("strong",{parentName:"p"},"\u8150\u8680\u548c\u81a8\u80c0\u662f\u9488\u5bf9\u56fe\u7247\u4e2d\u7684\u767d\u8272\u90e8\u5206\uff01"))),(0,n.kt)("h3",{id:"\u8150\u8680"},"\u8150\u8680"),(0,n.kt)("p",null,'\u8150\u8680\u7684\u6548\u679c\u662f\u628a\u56fe\u7247"\u53d8\u7626"\uff0c\u5176\u539f\u7406\u662f\u5728\u539f\u56fe\u7684\u5c0f\u533a\u57df\u5185\u53d6\u5c40\u90e8\u6700\u5c0f\u503c\u3002\u56e0\u4e3a\u662f\u4e8c\u503c\u5316\u56fe\uff0c\u53ea\u6709 0 \u548c 255\uff0c\u6240\u4ee5\u5c0f\u533a\u57df\u5185\u6709\u4e00\u4e2a\u662f 0 \u8be5\u50cf\u7d20\u70b9\u5c31\u4e3a 0\uff1a'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_erosion.jpg",alt:null})),(0,n.kt)("p",null,"\u8fd9\u6837\u539f\u56fe\u4e2d\u8fb9\u7f18\u5730\u65b9\u5c31\u4f1a\u53d8\u6210 0\uff0c\u8fbe\u5230\u4e86\u7626\u8eab\u76ee\u7684\uff08\u5c0f\u80d6\u798f\u5229","(","\u25cf\u02c7\u2200\u02c7\u25cf",")","\uff09"),(0,n.kt)("p",null,"OpenCV \u4e2d\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.erode()"),"\u51fd\u6570\u8fdb\u884c\u8150\u8680\uff0c\u53ea\u9700\u8981\u6307\u5b9a\u6838\u7684\u5927\u5c0f\u5c31\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\nimg = cv2.imread('j.bmp', 0)\nkernel = np.ones((5, 5), np.uint8)\nerosion = cv2.erode(img, kernel)  # \u8150\u8680\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u6838\u4e5f\u53eb\u7ed3\u6784\u5143\u7d20\uff0c\u56e0\u4e3a\u5f62\u6001\u5b66\u64cd\u4f5c\u5176\u5b9e\u4e5f\u662f\u5e94\u7528\u5377\u79ef\u6765\u5b9e\u73b0\u7684\u3002\u7ed3\u6784\u5143\u7d20\u53ef\u4ee5\u662f\u77e9\u5f62/\u692d\u5706/\u5341\u5b57\u5f62\uff0c\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.getStructuringElement()"),"\u6765\u751f\u6210\u4e0d\u540c\u5f62\u72b6\u7684\u7ed3\u6784\u5143\u7d20\uff0c\u6bd4\u5982\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))  # \u77e9\u5f62\u7ed3\u6784\nkernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))  # \u692d\u5706\u7ed3\u6784\nkernel = cv2.getStructuringElement(cv2.MORPH_CROSS, (5, 5))  # \u5341\u5b57\u5f62\u7ed3\u6784\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_morphological_struct_element.jpg",alt:null})),(0,n.kt)("h3",{id:"\u81a8\u80c0"},"\u81a8\u80c0"),(0,n.kt)("p",null,'\u81a8\u80c0\u4e0e\u8150\u8680\u76f8\u53cd\uff0c\u53d6\u7684\u662f\u5c40\u90e8\u6700\u5927\u503c\uff0c\u6548\u679c\u662f\u628a\u56fe\u7247"\u53d8\u80d6"\uff1a'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"dilation = cv2.dilate(img, kernel)  # \u81a8\u80c0\n")),(0,n.kt)("h3",{id:"\u5f00\u95ed\u8fd0\u7b97"},"\u5f00/\u95ed\u8fd0\u7b97"),(0,n.kt)("p",null,"\u5148\u8150\u8680\u540e\u81a8\u80c0\u53eb\u5f00\u8fd0\u7b97\uff08\u56e0\u4e3a\u5148\u8150\u8680\u4f1a\u5206\u5f00\u7269\u4f53\uff0c\u8fd9\u6837\u5bb9\u6613\u8bb0\u4f4f\uff09\uff0c\u5176\u4f5c\u7528\u662f\uff1a\u5206\u79bb\u7269\u4f53\uff0c\u6d88\u9664\u5c0f\u533a\u57df\u3002\u8fd9\u7c7b\u5f62\u6001\u5b66\u64cd\u4f5c\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.morphologyEx()"),"\u51fd\u6570\u5b9e\u73b0\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))  # \u5b9a\u4e49\u7ed3\u6784\u5143\u7d20\n\nimg = cv2.imread('j_noise_out.bmp', 0)\nopening = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)  # \u5f00\u8fd0\u7b97\n")),(0,n.kt)("p",null,'\u95ed\u8fd0\u7b97\u5219\u76f8\u53cd\uff1a\u5148\u81a8\u80c0\u540e\u8150\u8680\uff08\u5148\u81a8\u80c0\u4f1a\u4f7f\u767d\u8272\u7684\u90e8\u5206\u6269\u5f20\uff0c\u4ee5\u81f3\u4e8e\u6d88\u9664/"\u95ed\u5408"\u7269\u4f53\u91cc\u9762\u7684\u5c0f\u9ed1\u6d1e\uff0c\u6240\u4ee5\u53eb\u95ed\u8fd0\u7b97\uff09'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('j_noise_in.bmp', 0)\nclosing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)  # \u95ed\u8fd0\u7b97\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_morphological_opening_closing.jpg",alt:null})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5f88\u591a\u4eba\u5bf9\u5f00\u95ed\u8fd0\u7b97\u7684\u4f5c\u7528\u4e0d\u662f\u5f88\u6e05\u695a\uff08\u597d\u5427\uff0c\u5176\u5b9e\u662f\u6bd4\u8f83\u5bb9\u6613\u6df7 \u25d1\ufe4f\u25d0\uff09\uff0c\u4f46\u770b\u4e0a\u56fe \u2191\uff0c\u4e0d\u7528\u6015\uff1a\u5982\u679c\u6211\u4eec\u7684\u76ee\u6807\u7269\u4f53\u5916\u9762\u6709\u5f88\u591a\u65e0\u5173\u7684\u5c0f\u533a\u57df\uff0c\u5c31\u7528\u5f00\u8fd0\u7b97\u53bb\u9664\u6389\uff1b\u5982\u679c\u7269\u4f53\u5185\u90e8\u6709\u5f88\u591a\u5c0f\u9ed1\u6d1e\uff0c\u5c31\u7528\u95ed\u8fd0\u7b97\u586b\u5145\u6389\u3002")),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u7684 3 \u79cd\u5f62\u6001\u5b66\u64cd\u4f5c\u5e76\u4e0d\u5e38\u7528\uff0c\u5927\u5bb6\u6709\u5174\u8da3\u53ef\u4ee5\u770b\u770b\uff08\u56e0\u4e3a\u8f83\u77ed\uff0c\u6ca1\u6709\u505a\u6210\u756a\u5916\u7bc7\uff09\uff1a"),(0,n.kt)("h3",{id:"\u5176\u4ed6\u5f62\u6001\u5b66\u64cd\u4f5c"},"\u5176\u4ed6\u5f62\u6001\u5b66\u64cd\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f62\u6001\u5b66\u68af\u5ea6\uff1a\u81a8\u80c0\u56fe\u51cf\u53bb\u8150\u8680\u56fe\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"dilation - erosion"),"\uff0c\u8fd9\u6837\u4f1a\u5f97\u5230\u7269\u4f53\u7684\u8f6e\u5ed3\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('school.bmp', 0)\ngradient = cv2.morphologyEx(img, cv2.MORPH_GRADIENT, kernel)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_morphological_gradient.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9876\u5e3d\uff1a\u539f\u56fe\u51cf\u53bb\u5f00\u8fd0\u7b97\u540e\u7684\u56fe\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"src - opening"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"tophat = cv2.morphologyEx(img, cv2.MORPH_TOPHAT, kernel)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9ed1\u5e3d\uff1a\u95ed\u8fd0\u7b97\u540e\u7684\u56fe\u51cf\u53bb\u539f\u56fe\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"closing - src"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"blackhat = cv2.morphologyEx(img, cv2.MORPH_BLACKHAT, kernel)\n")),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'\u5f62\u6001\u5b66\u64cd\u4f5c\u5c31\u662f\u6539\u53d8\u7269\u4f53\u7684\u5f62\u72b6\uff0c\u5982\u8150\u8680\u4f7f\u7269\u4f53"\u53d8\u7626"\uff0c\u81a8\u80c0\u4f7f\u7269\u4f53"\u53d8\u80d6"\u3002'),(0,n.kt)("li",{parentName:"ul"},"\u5148\u8150\u8680\u540e\u81a8\u80c0\u4f1a\u5206\u79bb\u7269\u4f53\uff0c\u6240\u4ee5\u53eb\u5f00\u8fd0\u7b97\uff0c\u5e38\u7528\u6765\u53bb\u9664\u5c0f\u533a\u57df\u7269\u4f53\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u81a8\u80c0\u540e\u8150\u8680\u4f1a\u6d88\u9664\u7269\u4f53\u5185\u7684\u5c0f\u6d1e\uff0c\u6240\u4ee5\u53eb\u95ed\u8fd0\u7b97\u3002\u5f00/\u95ed\u7406\u89e3\u4e86\u4e4b\u540e\u5f88\u5bb9\u6613\u8bb0\u5fc6\u5662","(","\u2299o\u2299",")","\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#gaeb1e0c1033e3f6b891a25d0511362aeb"},"cv2.erode()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#gac342a1bb6eabf6f55c803b09268e36dc"},"cv2.getStructuringElement()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#ga4ff0f3318642c4f469d0e11f242f3b6c"},"cv2.dilate()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#gac2db39b56866583a95a5680313c314ad"},"cv2.MorphShapes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#ga67493776e3ad1a3df63883829375201f"},"cv2.morphologyEx()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/d86/group__imgproc__filter.html#ga7be549266bad7b2e6a04db49827f9f32"},"cv2.MorphTypes"))),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/12-Erode-and-Dilate"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://homepages.inf.ed.ac.uk/rbf/HIPR2/morops.htm"},"Morphological Operations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://szeliski.org/Book/"},"Computer Vision: Algorithms and Applications"))))}m.isMDXComponent=!0}}]);