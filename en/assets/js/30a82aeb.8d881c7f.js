"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5173],{99685:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>o});var l=a(87462),i=(a(67294),a(3905));a(16758);const n={},p="15: \u76f4\u65b9\u56fe",r={unversionedId:"artificial-intelligence/opencv/basic/histograms",id:"artificial-intelligence/opencv/basic/histograms",title:"15: \u76f4\u65b9\u56fe",description:"\u5b66\u4e60\u8ba1\u7b97\u5e76\u7ed8\u5236\u76f4\u65b9\u56fe\uff0c\u76f4\u65b9\u56fe\u5747\u8861\u5316\u7b49\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/15-histograms.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/histograms",permalink:"/en/docs/artificial-intelligence/opencv/basic/histograms",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/15-histograms.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:15,frontMatter:{},sidebar:"ai",previous:{title:"14: \u8f6e\u5ed3\u7279\u5f81",permalink:"/en/docs/artificial-intelligence/opencv/basic/contour-features"},next:{title:"16: \u6a21\u677f\u5339\u914d",permalink:"/en/docs/artificial-intelligence/opencv/basic/template-matching"}},s={},o=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u5565\u53eb\u76f4\u65b9\u56fe",id:"\u5565\u53eb\u76f4\u65b9\u56fe",level:3},{value:"\u8ba1\u7b97\u76f4\u65b9\u56fe",id:"\u8ba1\u7b97\u76f4\u65b9\u56fe",level:3},{value:"OpenCV \u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97",id:"opencv-\u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97",level:4},{value:"Numpy \u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97",id:"numpy-\u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97",level:4},{value:"\u7ed8\u5236\u76f4\u65b9\u56fe",id:"\u7ed8\u5236\u76f4\u65b9\u56fe",level:3},{value:"\u76f4\u65b9\u56fe\u5747\u8861\u5316",id:"\u76f4\u65b9\u56fe\u5747\u8861\u5316",level:3},{value:"\u81ea\u9002\u5e94\u5747\u8861\u5316",id:"\u81ea\u9002\u5e94\u5747\u8861\u5316",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:o};function m(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"15-\u76f4\u65b9\u56fe"},"15: \u76f4\u65b9\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_histogram.jpg",alt:null})),(0,i.kt)("p",null,"\u5b66\u4e60\u8ba1\u7b97\u5e76\u7ed8\u5236\u76f4\u65b9\u56fe\uff0c\u76f4\u65b9\u56fe\u5747\u8861\u5316\u7b49\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,i.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5e76\u7ed8\u5236\u76f4\u65b9\u56fe"),(0,i.kt)("li",{parentName:"ul"},"\uff08\u81ea\u9002\u5e94\uff09\u76f4\u65b9\u56fe\u5747\u8861\u5316"),(0,i.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.calcHist()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.equalizeHist()"))),(0,i.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,i.kt)("h3",{id:"\u5565\u53eb\u76f4\u65b9\u56fe"},"\u5565\u53eb\u76f4\u65b9\u56fe"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u76f4\u65b9\u56fe\u5c31\u662f\u56fe\u50cf\u4e2d\u6bcf\u4e2a\u50cf\u7d20\u503c\u7684\u4e2a\u6570\u7edf\u8ba1\uff0c\u6bd4\u5982\u8bf4\u4e00\u526f\u7070\u5ea6\u56fe\u4e2d\u50cf\u7d20\u503c\u4e3a 0 \u7684\u6709\u591a\u5c11\u4e2a\uff0c1 \u7684\u6709\u591a\u5c11\u4e2a\u2026\u2026"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_histogram.jpg",alt:null})),(0,i.kt)("p",null,"\u5728\u8ba1\u7b97\u76f4\u65b9\u56fe\u4e4b\u524d\uff0c\u6709\u51e0\u4e2a\u672f\u8bed\u5148\u6765\u4e86\u89e3\u4e00\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dims: \u8981\u8ba1\u7b97\u7684\u901a\u9053\u6570\uff0c\u5bf9\u4e8e\u7070\u5ea6\u56fe dims=1\uff0c\u666e\u901a\u5f69\u8272\u56fe dims=3"),(0,i.kt)("li",{parentName:"ul"},"range: \u8981\u8ba1\u7b97\u7684\u50cf\u7d20\u503c\u8303\u56f4\uff0c\u4e00\u822c\u4e3a","[","0,256",")"),(0,i.kt)("li",{parentName:"ul"},"bins: \u5b50\u533a\u6bb5\u6570\u76ee\uff0c\u5982\u679c\u6211\u4eec\u7edf\u8ba1 0",(0,i.kt)("inlineCode",{parentName:"li"},"~"),"255 \u6bcf\u4e2a\u50cf\u7d20\u503c\uff0cbins=256\uff1b\u5982\u679c\u5212\u5206\u533a\u95f4\uff0c\u6bd4\u5982 0",(0,i.kt)("inlineCode",{parentName:"li"},"~"),"15, 16",(0,i.kt)("inlineCode",{parentName:"li"},"~"),"31\u2026240",(0,i.kt)("inlineCode",{parentName:"li"},"~"),"255 \u8fd9\u6837 16 \u4e2a\u533a\u95f4\uff0cbins=16")),(0,i.kt)("h3",{id:"\u8ba1\u7b97\u76f4\u65b9\u56fe"},"\u8ba1\u7b97\u76f4\u65b9\u56fe"),(0,i.kt)("p",null,"OpenCV \u548c Numpy \u4e2d\u90fd\u63d0\u4f9b\u4e86\u8ba1\u7b97\u76f4\u65b9\u56fe\u7684\u51fd\u6570\uff0c\u6211\u4eec\u5bf9\u6bd4\u4e0b\u5b83\u4eec\u7684\u6027\u80fd\u3002"),(0,i.kt)("h4",{id:"opencv-\u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97"},"OpenCV \u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.calcHist(images, channels, mask, histSize, ranges)"),"\u8ba1\u7b97\uff0c\u5176\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 1\uff1a\u8981\u8ba1\u7b97\u7684\u539f\u56fe\uff0c\u4ee5\u65b9\u62ec\u53f7\u7684\u4f20\u5165\uff0c\u5982\uff1a","[","img","]"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u7c7b\u4f3c\u524d\u9762\u63d0\u5230\u7684 dims\uff0c\u7070\u5ea6\u56fe\u5199","[","0","]"," \u5c31\u884c\uff0c\u5f69\u8272\u56fe B/G/R \u5206\u522b\u4f20\u5165","[","0","]","/","[","1","]","/","[","2","]"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u8981\u8ba1\u7b97\u7684\u533a\u57df\uff0c\u8ba1\u7b97\u6574\u5e45\u56fe\u7684\u8bdd\uff0c\u5199 None"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1a\u524d\u9762\u63d0\u5230\u7684 bins"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570 5\uff1a\u524d\u9762\u63d0\u5230\u7684 range")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('hist.jpg', 0)\nhist = cv2.calcHist([img], [0], None, [256], [0, 256])  # \u6027\u80fd\uff1a0.025288 s\n")),(0,i.kt)("h4",{id:"numpy-\u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97"},"Numpy \u4e2d\u76f4\u65b9\u56fe\u8ba1\u7b97"),(0,i.kt)("p",null,"\u4e5f\u53ef\u7528 Numpy \u7684\u51fd\u6570\u8ba1\u7b97\uff0c\u5176\u4e2d",(0,i.kt)("a",{parentName:"p",href:"https://docs.scipy.org/doc/numpy/reference/generated/numpy.ravel.html"},"ravel","(",")"),"\u51fd\u6570\u5c06\u4e8c\u7ef4\u77e9\u9635\u5c55\u5e73\u53d8\u6210\u4e00\u7ef4\u6570\u7ec4\uff0c\u4e4b\u524d\u6709\u63d0\u5230\u8fc7\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"hist, bins = np.histogram(img.ravel(), 256, [0, 256])  # \u6027\u80fd\uff1a0.020628 s\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Numpy \u4e2d\u8fd8\u6709\u4e00\u79cd\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\uff1a\uff08\u8fd8\u8bb0\u5f97\u600e\u4e48\u8bc4\u4f30\u6027\u80fd\u5417\uff1a",(0,i.kt)("a",{parentName:"p",href:"../start/extra-01-code-optimization/"},"\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316"),"\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"hist = np.bincount(img.ravel(), minlength=256)  # \u6027\u80fd\uff1a0.003163 s\n")),(0,i.kt)("p",null,"\u8ba1\u7b97\u51fa\u76f4\u65b9\u56fe\u4e4b\u540e\uff0c\u600e\u4e48\u628a\u5b83\u753b\u51fa\u6765\u5462\uff1f"),(0,i.kt)("h3",{id:"\u7ed8\u5236\u76f4\u65b9\u56fe"},"\u7ed8\u5236\u76f4\u65b9\u56fe"),(0,i.kt)("p",null,"\u5176\u5b9e Matplotlib \u81ea\u5e26\u4e86\u4e00\u4e2a\u8ba1\u7b97\u5e76\u7ed8\u5236\u76f4\u65b9\u56fe\u7684\u529f\u80fd\uff0c\u4e0d\u9700\u8981\u7528\u5230\u4e0a\u9762\u7684\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.hist(img.ravel(), 256, [0, 256])\nplt.show()\n")),(0,i.kt)("p",null,"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u7528\u524d\u9762\u8ba1\u7b97\u51fa\u6765\u7684\u7ed3\u679c\u7ed8\u5236\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(hist)\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_calc_draw_histogram.jpg",alt:null})),(0,i.kt)("p",null,"\u4ece\u76f4\u65b9\u56fe\u4e0a\u53ef\u4ee5\u770b\u5230\u56fe\u7247\u7684\u5927\u90e8\u5206\u533a\u57df\u96c6\u4e2d\u5728 150 \u504f\u767d\u7684\u9644\u8fd1\uff0c\u8fd9\u5176\u5b9e\u5e76\u4e0d\u662f\u5f88\u597d\u7684\u6548\u679c\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u6539\u5584\u5b83\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 OpenCV \u7684\u753b\u7ebf\u529f\u80fd\u4e5f\u53ef\u4ee5\u753b\u76f4\u65b9\u56fe\uff0c\u4e0d\u8fc7\u592a\u9ebb\u70e6\u4e86\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u770b\u4e0b\u5b98\u65b9\u793a\u4f8b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencv/opencv/blob/master/samples/python/hist.py"},"hist.py"),"\u3002")),(0,i.kt)("h3",{id:"\u76f4\u65b9\u56fe\u5747\u8861\u5316"},"\u76f4\u65b9\u56fe\u5747\u8861\u5316"),(0,i.kt)("p",null,"\u4e00\u526f\u6548\u679c\u597d\u7684\u56fe\u50cf\u901a\u5e38\u5728\u76f4\u65b9\u56fe\u4e0a\u7684\u5206\u5e03\u6bd4\u8f83\u5747\u5300\uff0c\u76f4\u65b9\u56fe\u5747\u8861\u5316\u5c31\u662f\u7528\u6765\u6539\u5584\u56fe\u50cf\u7684\u5168\u5c40\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u3002\u5176\u5b9e\u4ece\u89c2\u611f\u4e0a\u5c31\u53ef\u4ee5\u53d1\u73b0\uff0c\u524d\u9762\u90a3\u5e45\u56fe\u5bf9\u6bd4\u5ea6\u4e0d\u9ad8\uff0c\u504f\u7070\u767d\u3002\u5bf9\u5747\u8861\u5316\u7b97\u6cd5\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E7%9B%B4%E6%96%B9%E5%9B%BE%E5%9D%87%E8%A1%A1%E5%8C%96"},"\u7ef4\u57fa\u767e\u79d1\uff1a\u76f4\u65b9\u56fe\u5747\u8861\u5316")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_histogram_equalization.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"equ = cv2.equalizeHist(img)\n")),(0,i.kt)("p",null,"OpenCV \u4e2d\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.equalizeHist()"),"\u5b9e\u73b0\u5747\u8861\u5316\u3002\u6211\u4eec\u628a\u4e24\u5f20\u56fe\u7247\u5e76\u6392\u663e\u793a\uff0c\u5bf9\u6bd4\u4e00\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"cv2.imshow('equalization', np.hstack((img, equ)))  # \u5e76\u6392\u663e\u793a\ncv2.waitKey(0)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_before_after_equalization.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_before_after_equalization_histogram.jpg",alt:"\u5747\u8861\u5316\u524d\u540e\u7684\u76f4\u65b9\u56fe\u5bf9\u6bd4"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5747\u8861\u5316\u540e\u56fe\u7247\u7684\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u6548\u679c\u660e\u663e\u597d\u4e8e\u539f\u56fe\u3002"),(0,i.kt)("h3",{id:"\u81ea\u9002\u5e94\u5747\u8861\u5316"},"\u81ea\u9002\u5e94\u5747\u8861\u5316"),(0,i.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\u6765\uff0c\u76f4\u65b9\u56fe\u5747\u8861\u5316\u662f\u5e94\u7528\u4e8e\u6574\u5e45\u56fe\u7247\u7684\uff0c\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\u5462\uff1f\u770b\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_adaptive_histogram.jpg",alt:null})),(0,i.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u56e0\u4e3a\u5168\u5c40\u8c03\u6574\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u7684\u539f\u56e0\uff0c\u8138\u90e8\u592a\u4eae\uff0c\u5927\u90e8\u5206\u7ec6\u8282\u90fd\u4e22\u5931\u4e86\u3002"),(0,i.kt)("p",null,"\u81ea\u9002\u5e94\u5747\u8861\u5316\u5c31\u662f\u7528\u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u7684\uff1a\u5b83\u5728\u6bcf\u4e00\u4e2a\u5c0f\u533a\u57df\u5185\uff08\u9ed8\u8ba4 8\xd78\uff09\u8fdb\u884c\u76f4\u65b9\u56fe\u5747\u8861\u5316\u3002\u5f53\u7136\uff0c\u5982\u679c\u6709\u566a\u70b9\u7684\u8bdd\uff0c\u566a\u70b9\u4f1a\u88ab\u653e\u5927\uff0c\u9700\u8981\u5bf9\u5c0f\u533a\u57df\u5185\u7684\u5bf9\u6bd4\u5ea6\u8fdb\u884c\u4e86\u9650\u5236\uff0c\u6240\u4ee5\u8fd9\u4e2a\u7b97\u6cd5\u5168\u79f0\u53eb\uff1a",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u6bd4\u5ea6\u53d7\u9650\u7684\u81ea\u9002\u5e94\u76f4\u65b9\u56fe\u5747\u8861\u5316"),"CLAHE","(",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adaptive_histogram_equalization"},"Contrast Limited Adaptive Histogram Equalization"),")","\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u81ea\u9002\u5e94\u5747\u8861\u5316\uff0c\u53c2\u6570\u53ef\u9009\nclahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))\ncl1 = clahe.apply(img)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_adaptive_histogram.jpg",alt:null})),(0,i.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cv2.calcHist()"),"\u51fd\u6570\u4e2d\u7684\u53c2\u6570 3 \u662f\u6307\u8981\u8ba1\u7b97\u7684\u533a\u57df","(","mask\uff1a\u76ee\u6807\u533a\u57df\u767d\u8272\uff0c\u5176\u4f59\u9ed1\u8272",")","\uff0c\u7f16\u5199\u4e00\u4e2a\u53ea\u8ba1\u7b97\u56fe\u7247\u5de6\u4e0a\u89d2 200\xd7200 \u533a\u57df\u76f4\u65b9\u56fe\u7684\u7a0b\u5e8f\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_histogram_mask.jpg",alt:null})),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f4\u65b9\u56fe\u662f\u4e00\u79cd\u5206\u6790\u56fe\u50cf\u7684\u624b\u6bb5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cv2.calcHist()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"numpy.bincount()"),"\u5747\u53ef\u7528\u6765\u8ba1\u7b97\u76f4\u65b9\u56fe\uff0c\u4f7f\u7528 Matplotlib \u7ed8\u5236\u76f4\u65b9\u56fe\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5747\u8861\u5316\u7528\u6765\u4f7f\u56fe\u50cf\u7684\u76f4\u65b9\u56fe\u5206\u5e03\u66f4\u52a0\u5747\u5300\uff0c\u63d0\u5347\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u3002")),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/15-Histograms"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_histograms/py_histogram_begins/py_histogram_begins.html#histograms-getting-started"},"Histograms - 1 : Find, Plot, Analyze !!!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_histograms/py_histogram_equalization/py_histogram_equalization.html#histogram-equalization"},"Histograms - 2: Histogram Equalization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E7%9B%B4%E6%96%B9%E5%9B%BE%E5%9D%87%E8%A1%A1%E5%8C%96"},"\u7ef4\u57fa\u767e\u79d1\uff1a\u76f4\u65b9\u56fe\u5747\u8861\u5316")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Adaptive_histogram_equalization"},"\u7ef4\u57fa\u767e\u79d1\uff1a\u81ea\u9002\u5e94\u76f4\u65b9\u56fe\u5747\u8861\u5316")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cambridgeincolour.com/tutorials/histograms1.htm"},"Cambridge in Color website"))))}m.isMDXComponent=!0}}]);