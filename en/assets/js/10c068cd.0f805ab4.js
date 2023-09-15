"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3500],{14006:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));a(16758);const i={},l="\u756a\u5916\u7bc7\uff1a\u6ed1\u52a8\u6761",c={unversionedId:"artificial-intelligence/opencv/start/extra-03-trackbar",id:"artificial-intelligence/opencv/start/extra-03-trackbar",title:"\u756a\u5916\u7bc7\uff1a\u6ed1\u52a8\u6761",description:"\u5b66\u4e60\u4f7f\u7528\u6ed1\u52a8\u6761\u52a8\u6001\u8c03\u6574\u53c2\u6570\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/extra-03-trackbar.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/extra-03-trackbar",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-03-trackbar",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/extra-03-trackbar.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib"},next:{title:"\u756a\u5916\u7bc7\uff1aOtsu \u9608\u503c\u6cd5",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-04-otsu-thresholding"}},p={},o=[{value:"\u6ed1\u52a8\u6761\u7684\u4f7f\u7528",id:"\u6ed1\u52a8\u6761\u7684\u4f7f\u7528",level:2},{value:"RGB \u8c03\u8272\u677f",id:"rgb-\u8c03\u8272\u677f",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:o};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u756a\u5916\u7bc7\u6ed1\u52a8\u6761"},"\u756a\u5916\u7bc7\uff1a\u6ed1\u52a8\u6761"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_track_bar_rgb.jpg",alt:null})),(0,n.kt)("p",null,"\u5b66\u4e60\u4f7f\u7528\u6ed1\u52a8\u6761\u52a8\u6001\u8c03\u6574\u53c2\u6570\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u6ed1\u52a8\u6761\u7684\u4f7f\u7528"},"\u6ed1\u52a8\u6761\u7684\u4f7f\u7528"),(0,n.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6ed1\u52a8\u6761\uff0c\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.createTrackbar('R','image',0,255,call_back)"),"\uff0c\u5176\u4e2d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 1\uff1a\u6ed1\u52a8\u6761\u7684\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u6240\u5728\u7a97\u53e3\u7684\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u5f53\u524d\u7684\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1a\u6700\u5927\u503c"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 5\uff1a\u56de\u8c03\u51fd\u6570\u540d\u79f0\uff0c\u56de\u8c03\u51fd\u6570\u9ed8\u8ba4\u6709\u4e00\u4e2a\u8868\u793a\u5f53\u524d\u503c\u7684\u53c2\u6570")),(0,n.kt)("p",null,"\u521b\u5efa\u597d\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u83b7\u53d6\u6ed1\u52a8\u6761\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u7528\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.getTrackbarPos()"),"\u5f97\u5230\uff0c\u5176\u4e2d\uff0c\u53c2\u6570 1 \u662f\u6ed1\u52a8\u6761\u7684\u540d\u79f0\uff0c\u53c2\u6570 2 \u662f\u7a97\u53e3\u7684\u540d\u79f0\u3002"),(0,n.kt)("h2",{id:"rgb-\u8c03\u8272\u677f"},"RGB \u8c03\u8272\u677f"),(0,n.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a RGB \u7684\u8c03\u8272\u677f\uff0c\u7406\u89e3\u4e0b\u6ed1\u52a8\u6761\u7684\u7528\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\n# \u56de\u8c03\u51fd\u6570\uff0cx \u8868\u793a\u6ed1\u5757\u7684\u4f4d\u7f6e\uff0c\u672c\u4f8b\u6682\u4e0d\u4f7f\u7528\ndef nothing(x):\n    pass\n\nimg = np.zeros((300, 512, 3), np.uint8)\ncv2.namedWindow('image')\n\n# \u521b\u5efa RGB \u4e09\u4e2a\u6ed1\u52a8\u6761\ncv2.createTrackbar('R', 'image', 0, 255, nothing)\ncv2.createTrackbar('G', 'image', 0, 255, nothing)\ncv2.createTrackbar('B', 'image', 0, 255, nothing)\n\nwhile(True):\n    cv2.imshow('image', img)\n    if cv2.waitKey(1) == 27:\n        break\n\n    # \u83b7\u53d6\u6ed1\u5757\u7684\u503c\n    r = cv2.getTrackbarPos('R', 'image')\n    g = cv2.getTrackbarPos('G', 'image')\n    b = cv2.getTrackbarPos('B', 'image')\n    # \u8bbe\u5b9a img \u7684\u989c\u8272\n    img[:] = [b, g, r]\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_track_bar_rgb.jpg",alt:null})),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cv2.createTrackbar()"),"\u7528\u6765\u521b\u5efa\u6ed1\u52a8\u6761\uff0c\u53ef\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u6216\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.getTrackbarPos()"),"\u5f97\u5230\u6ed1\u5757\u7684\u4f4d\u7f6e")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#gaf78d2155d30b728fc413803745b67a9b"},"cv2.createTrackbar","(",")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#ga122632e9e91b9ec06943472c55d9cda8"},"cv2.getTrackbarPos","(",")"))),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-03-Trackbar"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_trackbar/py_trackbar.html"},"Trackbar as the Color Palette"))))}k.isMDXComponent=!0}}]);