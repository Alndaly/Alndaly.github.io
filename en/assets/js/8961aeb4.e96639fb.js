"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3249],{95036:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var l=a(87462),i=(a(67294),a(3905));a(16758);const n={},r="06: \u9608\u503c\u5206\u5272",p={unversionedId:"artificial-intelligence/opencv/start/image-thresholding",id:"artificial-intelligence/opencv/start/image-thresholding",title:"06: \u9608\u503c\u5206\u5272",description:'\u5b66\u4e60\u4f7f\u7528\u4e0d\u540c\u7684\u9608\u503c\u65b9\u6cd5"\u4e8c\u503c\u5316"\u56fe\u50cf\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002',source:"@site/docs/artificial-intelligence/opencv/start/06-image-thresholding.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/image-thresholding",permalink:"/en/docs/artificial-intelligence/opencv/start/image-thresholding",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/06-image-thresholding.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:6,frontMatter:{},sidebar:"ai",previous:{title:"05: \u989c\u8272\u7a7a\u95f4\u8f6c\u6362",permalink:"/en/docs/artificial-intelligence/opencv/start/changing-colorspaces"},next:{title:"07: \u56fe\u50cf\u51e0\u4f55\u53d8\u6362",permalink:"/en/docs/artificial-intelligence/opencv/start/image-geometric-transformation"}},o={},s=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u56fa\u5b9a\u9608\u503c\u5206\u5272",id:"\u56fa\u5b9a\u9608\u503c\u5206\u5272",level:3},{value:"\u81ea\u9002\u5e94\u9608\u503c",id:"\u81ea\u9002\u5e94\u9608\u503c",level:3},{value:"Otsu \u9608\u503c",id:"otsu-\u9608\u503c",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:s};function h(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"06-\u9608\u503c\u5206\u5272"},"06: \u9608\u503c\u5206\u5272"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_threshold_binary_demo.jpg",alt:null})),(0,i.kt)("p",null,'\u5b66\u4e60\u4f7f\u7528\u4e0d\u540c\u7684\u9608\u503c\u65b9\u6cd5"\u4e8c\u503c\u5316"\u56fe\u50cf\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002'),(0,i.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\u4f7f\u7528\u56fa\u5b9a\u9608\u503c\u3001\u81ea\u9002\u5e94\u9608\u503c\u548c Otsu \u9608\u503c\u6cd5"\u4e8c\u503c\u5316"\u56fe\u50cf'),(0,i.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.threshold()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.adaptiveThreshold()"))),(0,i.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,i.kt)("h3",{id:"\u56fa\u5b9a\u9608\u503c\u5206\u5272"},"\u56fa\u5b9a\u9608\u503c\u5206\u5272"),(0,i.kt)("p",null,"\u56fa\u5b9a\u9608\u503c\u5206\u5272\u5f88\u76f4\u63a5\uff0c\u4e00\u53e5\u8bdd\u8bf4\u5c31\u662f\u50cf\u7d20\u70b9\u503c\u5927\u4e8e\u9608\u503c\u53d8\u6210\u4e00\u7c7b\u503c\uff0c\u5c0f\u4e8e\u9608\u503c\u53d8\u6210\u53e6\u4e00\u7c7b\u503c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_threshold_binary_demo.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\n# \u7070\u5ea6\u56fe\u8bfb\u5165\nimg = cv2.imread('gradient.jpg', 0)\n\n# \u9608\u503c\u5206\u5272\nret, th = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)\ncv2.imshow('thresh', th)\ncv2.waitKey(0)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cv2.threshold()"),"\u7528\u6765\u5b9e\u73b0\u9608\u503c\u5206\u5272\uff0cret \u4ee3\u8868\u5f53\u524d\u7684\u9608\u503c\uff0c\u6682\u65f6\u4e0d\u7528\u7406\u4f1a\u3002\u51fd\u6570\u6709 4 \u4e2a\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 1\uff1a\u8981\u5904\u7406\u7684\u539f\u56fe\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u4e00\u822c\u662f\u7070\u5ea6\u56fe")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u8bbe\u5b9a\u7684\u9608\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"THRESH_BINARY"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"THRESH_BINARY_INV"),"\u9608\u503c\u65b9\u6cd5\u6240\u9009\u7528\u7684\u6700\u5927\u9608\u503c\uff0c\u4e00\u822c\u4e3a 255"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1a\u9608\u503c\u7684\u65b9\u5f0f\uff0c\u4e3b\u8981\u6709 5 \u79cd\uff0c\u8be6\u60c5\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/d1b/group__imgproc__misc.html#gaa9e58d2860d4afa658ef70a9b1115576"},"ThresholdTypes"))),(0,i.kt)("p",null,"\u4e0b\u9762\u7ed3\u5408\u4ee3\u7801\u7406\u89e3\u4e0b\u8fd9 5 \u79cd\u9608\u503c\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n\n# \u5e94\u7528 5 \u79cd\u4e0d\u540c\u7684\u9608\u503c\u65b9\u6cd5\nret, th1 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)\nret, th2 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)\nret, th3 = cv2.threshold(img, 127, 255, cv2.THRESH_TRUNC)\nret, th4 = cv2.threshold(img, 127, 255, cv2.THRESH_TOZERO)\nret, th5 = cv2.threshold(img, 127, 255, cv2.THRESH_TOZERO_INV)\n\ntitles = ['Original', 'BINARY', 'BINARY_INV', 'TRUNC', 'TOZERO', 'TOZERO_INV']\nimages = [img, th1, th2, th3, th4, th5]\n\n# \u4f7f\u7528 Matplotlib \u663e\u793a\nfor i in range(6):\n    plt.subplot(2, 3, i + 1)\n    plt.imshow(images[i], 'gray')\n    plt.title(titles[i], fontsize=8)\n    plt.xticks([]), plt.yticks([])  # \u9690\u85cf\u5750\u6807\u8f74\n\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_different_threshold_demo.jpg",alt:"5 \u79cd\u4e0d\u540c\u7684\u9608\u503c\u65b9\u5f0f\u7ed3\u679c"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5f88\u591a\u4eba\u8bef\u4ee5\u4e3a\u9608\u503c\u5206\u5272\u5c31\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/%E4%BA%8C%E5%80%BC%E5%8C%96"},"\u4e8c\u503c\u5316"),"\u3002\u4ece\u4e0a\u56fe\u4e2d\u53ef\u4ee5\u53d1\u73b0\uff0c\u4e24\u8005\u5e76\u4e0d\u7b49\u540c\uff0c\u9608\u503c\u5206\u5272\u7ed3\u679c\u662f\u4e24\u7c7b\u503c\uff0c\u800c\u4e0d\u662f\u4e24\u4e2a\u503c\uff0c\u6240\u4ee5\u6559\u7a0b\u5f00\u5934\u6211\u628a\u4e8c\u503c\u5316\u52a0\u4e86\u5f15\u53f7\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_different_thresholds_theory.jpg",alt:null})),(0,i.kt)("h3",{id:"\u81ea\u9002\u5e94\u9608\u503c"},"\u81ea\u9002\u5e94\u9608\u503c"),(0,i.kt)("p",null,"\u770b\u5f97\u51fa\u6765\u56fa\u5b9a\u9608\u503c\u662f\u5728\u6574\u5e45\u56fe\u7247\u4e0a\u5e94\u7528\u4e00\u4e2a\u9608\u503c\u8fdb\u884c\u5206\u5272\uff0c",(0,i.kt)("em",{parentName:"p"},"\u5b83\u5e76\u4e0d\u9002\u7528\u4e8e\u660e\u6697\u5206\u5e03\u4e0d\u5747\u7684\u56fe\u7247"),"\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.adaptiveThreshold()"),"\u81ea\u9002\u5e94\u9608\u503c\u4f1a\u6bcf\u6b21\u53d6\u56fe\u7247\u7684\u4e00\u5c0f\u90e8\u5206\u8ba1\u7b97\u9608\u503c\uff0c\u8fd9\u6837\u56fe\u7247\u4e0d\u540c\u533a\u57df\u7684\u9608\u503c\u5c31\u4e0d\u5c3d\u76f8\u540c\u3002\u5b83\u6709 5 \u4e2a\u53c2\u6570\uff0c\u5176\u5b9e\u5f88\u597d\u7406\u89e3\uff0c\u5148\u770b\u4e0b\u6548\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u81ea\u9002\u5e94\u9608\u503c\u5bf9\u6bd4\u56fa\u5b9a\u9608\u503c\nimg = cv2.imread('sudoku.jpg', 0)\n\n# \u56fa\u5b9a\u9608\u503c\nret, th1 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)\n# \u81ea\u9002\u5e94\u9608\u503c\nth2 = cv2.adaptiveThreshold(\n    img, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 11, 4)\nth3 = cv2.adaptiveThreshold(\n    img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 17, 6)\n\ntitles = ['Original', 'Global(v = 127)', 'Adaptive Mean', 'Adaptive Gaussian']\nimages = [img, th1, th2, th3]\n\nfor i in range(4):\n    plt.subplot(2, 2, i + 1), plt.imshow(images[i], 'gray')\n    plt.title(titles[i], fontsize=8)\n    plt.xticks([]), plt.yticks([])\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_adaptive_vs_global_thresholding.jpg",alt:"\u81ea\u9002\u5e94\u9608\u503c\u5bf9\u6bd4\u56fa\u5b9a\u9608\u503c"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 1\uff1a\u8981\u5904\u7406\u7684\u539f\u56fe"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u6700\u5927\u9608\u503c\uff0c\u4e00\u822c\u4e3a 255"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u5c0f\u533a\u57df\u9608\u503c\u7684\u8ba1\u7b97\u65b9\u5f0f",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADAPTIVE_THRESH_MEAN_C"),"\uff1a\u5c0f\u533a\u57df\u5185\u53d6\u5747\u503c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADAPTIVE_THRESH_GAUSSIAN_C"),"\uff1a\u5c0f\u533a\u57df\u5185\u52a0\u6743\u6c42\u548c\uff0c\u6743\u91cd\u662f\u4e2a\u9ad8\u65af\u6838"))),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1a\u9608\u503c\u65b9\u6cd5\uff0c\u53ea\u80fd\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"THRESH_BINARY"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"THRESH_BINARY_INV"),"\uff0c\u5177\u4f53\u89c1\u524d\u9762\u6240\u8bb2\u7684\u9608\u503c\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 5\uff1a\u5c0f\u533a\u57df\u7684\u9762\u79ef\uff0c\u5982 11 \u5c31\u662f 11","*","11 \u7684\u5c0f\u5757"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 6\uff1a\u6700\u7ec8\u9608\u503c\u7b49\u4e8e\u5c0f\u533a\u57df\u8ba1\u7b97\u51fa\u7684\u9608\u503c\u518d\u51cf\u53bb\u6b64\u503c")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u770b\u61c2\u4e0a\u9762\u7684\u53c2\u6570\u4e5f\u4e0d\u8981\u7d27\uff0c\u6682\u65f6\u4f1a\u7528\u5c31\u884c\uff0c\u5f53\u7136\u6211\u5efa\u8bae\u4f60\u8c03\u6574\u4e0b\u53c2\u6570\u770b\u770b\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),(0,i.kt)("h3",{id:"otsu-\u9608\u503c"},"Otsu \u9608\u503c"),(0,i.kt)("p",null,"\u5728\u524d\u9762\u56fa\u5b9a\u9608\u503c\u4e2d\uff0c\u6211\u4eec\u662f\u968f\u4fbf\u9009\u4e86\u4e00\u4e2a\u9608\u503c\u5982 127\uff0c\u90a3\u5982\u4f55\u77e5\u9053\u6211\u4eec\u9009\u7684\u8fd9\u4e2a\u9608\u503c\u6548\u679c\u597d\u4e0d\u597d\u5462\uff1f\u7b54\u6848\u662f\uff1a\u4e0d\u65ad\u5c1d\u8bd5\uff0c\u6240\u4ee5\u8fd9\u79cd\u65b9\u6cd5\u5728\u5f88\u591a\u6587\u732e\u4e2d\u90fd\u88ab\u79f0\u4e3a\u7ecf\u9a8c\u9608\u503c\u3002",(0,i.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/otsu/16252828"},"Otsu \u9608\u503c\u6cd5"),"\u5c31\u63d0\u4f9b\u4e86\u4e00\u79cd\u81ea\u52a8\u9ad8\u6548\u7684\u4e8c\u503c\u5316\u65b9\u6cd5\uff0c\u4e0d\u8fc7\u6211\u4eec\u76f4\u65b9\u56fe\u8fd8\u6ca1\u5b66\uff0c\u8fd9\u91cc\u6682\u65f6\u7565\u8fc7\u3002"),(0,i.kt)("p",null,"\u597d\u5427\uff0c\u6211\u77e5\u9053\u6211\u6fc0\u8d77\u4e86\u4f60\u7684\u5174\u8da3\uff0c~ o","(",(0,i.kt)("em",{parentName:"p"},"\uffe3 \u25bd \uffe3"),")","o\uff0c\u6709\u80fd\u529b\u7684\u7ae5\u978b\u53ef\u4ee5\u770b\u4e0b",(0,i.kt)("a",{parentName:"p",href:"#%E7%BB%83%E4%B9%A0"},"\u7ec3\u4e60\u9898"),"\u3002"),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cv2.threshold()"),"\u7528\u6765\u8fdb\u884c\u56fa\u5b9a\u9608\u503c\u5206\u5272\u3002\u56fa\u5b9a\u9608\u503c\u4e0d\u9002\u7528\u4e8e\u5149\u7ebf\u4e0d\u5747\u5300\u7684\u56fe\u7247\uff0c\u6240\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.adaptiveThreshold()"),"\u8fdb\u884c\u81ea\u9002\u5e94\u9608\u503c\u5206\u5272\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e8c\u503c\u5316\u8ddf\u9608\u503c\u5206\u5272\u5e76\u4e0d\u7b49\u540c\u3002\u9488\u5bf9\u4e0d\u540c\u7684\u56fe\u7247\uff0c\u53ef\u4ee5\u91c7\u7528\u4e0d\u540c\u7684\u9608\u503c\u65b9\u6cd5\u3002")),(0,i.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Otsu \u9608\u503c\u662f\u4e00\u79cd\u9ad8\u6548\u7684\u4e8c\u503c\u5316\u7b97\u6cd5\uff0c\u8bf7\u9605\u8bfb",(0,i.kt)("a",{parentName:"li",href:"./extra-04-otsu-thresholding/"},"\u756a\u5916\u7bc7\uff1aOtsu \u9608\u503c\u6cd5"),"\u3002")),(0,i.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/d1b/group__imgproc__misc.html#gae8a4a146d1ca78c626a53577199e9c57"},"cv2.threshold","(",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/d1b/group__imgproc__misc.html#ga72b913f352e4a1b1b397736707afcde3"},"cv2.adaptiveThreshold","(",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/d1b/group__imgproc__misc.html#gaa9e58d2860d4afa658ef70a9b1115576"},"cv2.ThresholdTypes","(",")"))),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/06-Image-Thresholding"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_thresholding/py_thresholding.html"},"Image Thresholding"))))}h.isMDXComponent=!0}}]);