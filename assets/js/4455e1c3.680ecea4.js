"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6676],{84854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));n(16758);const i={},p="08: \u7ed8\u56fe\u529f\u80fd",r={unversionedId:"artificial-intelligence/opencv/start/drawing-function",id:"artificial-intelligence/opencv/start/drawing-function",title:"08: \u7ed8\u56fe\u529f\u80fd",description:"\u5b66\u4e60\u753b\u7ebf\u3001\u5706\u548c\u77e9\u5f62\u7b49\u591a\u79cd\u51e0\u4f55\u5f62\u72b6\uff0c\u7ed9\u56fe\u7247\u6dfb\u52a0\u6587\u5b57\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/08-drawing-function.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/drawing-function",permalink:"/docs/artificial-intelligence/opencv/start/drawing-function",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/08-drawing-function.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"2023\u5e746\u67085\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"ai",previous:{title:"07: \u56fe\u50cf\u51e0\u4f55\u53d8\u6362",permalink:"/docs/artificial-intelligence/opencv/start/image-geometric-transformation"},next:{title:"\u6311\u6218\u4efb\u52a1\uff1a\u753b\u52a8\u6001\u65f6\u949f",permalink:"/docs/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock"}},c={},o=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u753b\u7ebf",id:"\u753b\u7ebf",level:3},{value:"\u753b\u77e9\u5f62",id:"\u753b\u77e9\u5f62",level:3},{value:"\u753b\u5706",id:"\u753b\u5706",level:3},{value:"\u753b\u692d\u5706",id:"\u753b\u692d\u5706",level:3},{value:"\u753b\u591a\u8fb9\u5f62",id:"\u753b\u591a\u8fb9\u5f62",level:3},{value:"\u6dfb\u52a0\u6587\u5b57",id:"\u6dfb\u52a0\u6587\u5b57",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"08-\u7ed8\u56fe\u529f\u80fd"},"08: \u7ed8\u56fe\u529f\u80fd"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_drawing_functions.jpg",alt:null})),(0,a.kt)("p",null,"\u5b66\u4e60\u753b\u7ebf\u3001\u5706\u548c\u77e9\u5f62\u7b49\u591a\u79cd\u51e0\u4f55\u5f62\u72b6\uff0c\u7ed9\u56fe\u7247\u6dfb\u52a0\u6587\u5b57\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ed8\u5236\u5404\u79cd\u51e0\u4f55\u5f62\u72b6\u3001\u6dfb\u52a0\u6587\u5b57"),(0,a.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.line()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.circle()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.rectangle()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.ellipse()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.putText()"))),(0,a.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,a.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u7ed8\u5236\u5f62\u72b6\u7684\u51fd\u6570\u6709\u4e00\u4e9b\u5171\u540c\u7684\u53c2\u6570\uff0c\u63d0\u524d\u5728\u6b64\u8bf4\u660e\u4e00\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"img\uff1a\u8981\u7ed8\u5236\u5f62\u72b6\u7684\u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"color\uff1a\u7ed8\u5236\u7684\u989c\u8272",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f69\u8272\u56fe\u5c31\u4f20\u5165 BGR \u7684\u4e00\u7ec4\u503c\uff0c\u5982\u84dd\u8272\u5c31\u662f (255, 0, 0)"),(0,a.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u56fe\uff0c\u4f20\u5165\u4e00\u4e2a\u7070\u5ea6\u503c\u5c31\u884c"))),(0,a.kt)("li",{parentName:"ul"},"thickness\uff1a\u7ebf\u5bbd\uff0c\u9ed8\u8ba4\u4e3a 1\uff1b",(0,a.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u77e9\u5f62/\u5706\u4e4b\u7c7b\u7684\u5c01\u95ed\u5f62\u72b6\u800c\u8a00\uff0c\u4f20\u5165 -1 \u8868\u793a\u586b\u5145\u5f62\u72b6"))),(0,a.kt)("p",null,"\u9700\u8981\u5bfc\u5165\u7684\u6a21\u5757\u548c\u663e\u793a\u56fe\u7247\u7684\u901a\u7528\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ncv2.imshow('img', img)\ncv2.waitKey(0)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_drawing_functions.jpg",alt:"\u7ed8\u5236\u5404\u79cd\u51e0\u4f55\u5f62\u72b6"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u5c31\u662f\u672c\u6559\u7a0b\u7ed8\u5236\u7684\u6700\u7ec8\u6548\u679c\uff0c\u4e0b\u9762\u4e00\u6b65\u6b65\u6765\u770b\uff1a"),(0,a.kt)("h3",{id:"\u753b\u7ebf"},"\u753b\u7ebf"),(0,a.kt)("p",null,"\u753b\u76f4\u7ebf\u53ea\u9700\u6307\u5b9a\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u5750\u6807\u5c31\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u521b\u5efa\u4e00\u526f\u9ed1\u8272\u7684\u56fe\u7247\nimg = np.zeros((512, 512, 3), np.uint8)\n# \u753b\u4e00\u6761\u7ebf\u5bbd\u4e3a 5 \u7684\u84dd\u8272\u76f4\u7ebf\uff0c\u53c2\u6570 2\uff1a\u8d77\u70b9\uff0c\u53c2\u6570 3\uff1a\u7ec8\u70b9\ncv2.line(img, (0, 0), (512, 512), (255, 0, 0), 5)\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6240\u6709\u7ed8\u56fe\u51fd\u6570\u5747\u4f1a\u76f4\u63a5\u5f71\u54cd\u539f\u56fe\u7247\uff0c\u8fd9\u70b9\u8981\u6ce8\u610f\u3002")),(0,a.kt)("h3",{id:"\u753b\u77e9\u5f62"},"\u753b\u77e9\u5f62"),(0,a.kt)("p",null,"\u753b\u77e9\u5f62\u9700\u8981\u77e5\u9053\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0b\u89d2\u7684\u5750\u6807\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u753b\u4e00\u4e2a\u7eff\u8272\u8fb9\u6846\u7684\u77e9\u5f62\uff0c\u53c2\u6570 2\uff1a\u5de6\u4e0a\u89d2\u5750\u6807\uff0c\u53c2\u6570 3\uff1a\u53f3\u4e0b\u89d2\u5750\u6807\ncv2.rectangle(img, (384, 0), (510, 128), (0, 255, 0), 3)\n")),(0,a.kt)("h3",{id:"\u753b\u5706"},"\u753b\u5706"),(0,a.kt)("p",null,"\u753b\u5706\u9700\u8981\u6307\u5b9a\u5706\u5fc3\u548c\u534a\u5f84\uff0c\u6ce8\u610f\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\u7ebf\u5bbd=-1 \u4ee3\u8868\u586b\u5145\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u753b\u4e00\u4e2a\u586b\u5145\u7ea2\u8272\u7684\u5706\uff0c\u53c2\u6570 2\uff1a\u5706\u5fc3\u5750\u6807\uff0c\u53c2\u6570 3\uff1a\u534a\u5f84\ncv2.circle(img, (447, 63), 63, (0, 0, 255), -1)\n")),(0,a.kt)("h3",{id:"\u753b\u692d\u5706"},"\u753b\u692d\u5706"),(0,a.kt)("p",null,"\u753b\u692d\u5706\u9700\u8981\u7684\u53c2\u6570\u6bd4\u8f83\u591a\uff0c\u8bf7\u5bf9\u7167\u540e\u9762\u7684\u4ee3\u7801\u7406\u89e3\u8fd9\u51e0\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u692d\u5706\u4e2d\u5fc3 (x,y)"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1ax/y \u8f74\u7684\u957f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1aangle - \u692d\u5706\u7684\u65cb\u8f6c\u89d2\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 5\uff1astartAngle - \u692d\u5706\u7684\u8d77\u59cb\u89d2\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 6\uff1aendAngle - \u692d\u5706\u7684\u7ed3\u675f\u89d2\u5ea6")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"OpenCV \u4e2d\u539f\u70b9\u5728\u5de6\u4e0a\u89d2\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684\u89d2\u5ea6\u662f\u4ee5\u987a\u65f6\u9488\u65b9\u5411\u8ba1\u7b97\u7684\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u5728\u56fe\u4e2d\u5fc3\u753b\u4e00\u4e2a\u586b\u5145\u7684\u534a\u5706\ncv2.ellipse(img, (256, 256), (100, 50), 0, 0, 180, (255, 0, 0), -1)\n")),(0,a.kt)("h3",{id:"\u753b\u591a\u8fb9\u5f62"},"\u753b\u591a\u8fb9\u5f62"),(0,a.kt)("p",null,"\u753b\u591a\u8fb9\u5f62\u9700\u8981\u6307\u5b9a\u4e00\u7cfb\u5217\u591a\u8fb9\u5f62\u7684\u9876\u70b9\u5750\u6807\uff0c\u76f8\u5f53\u4e8e\u4ece\u7b2c\u4e00\u4e2a\u70b9\u5230\u7b2c\u4e8c\u4e2a\u70b9\u753b\u76f4\u7ebf\uff0c\u518d\u4ece\u7b2c\u4e8c\u4e2a\u70b9\u5230\u7b2c\u4e09\u4e2a\u70b9\u753b\u76f4\u7ebf...."),(0,a.kt)("p",null,"OpenCV \u4e2d\u9700\u8981\u5148\u5c06\u591a\u8fb9\u5f62\u7684\u9876\u70b9\u5750\u6807\u9700\u8981\u53d8\u6210\u9876\u70b9\u6570 \xd71\xd72 \u7ef4\u7684\u77e9\u9635\uff0c\u518d\u6765\u7ed8\u5236\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u5b9a\u4e49\u56db\u4e2a\u9876\u70b9\u5750\u6807\npts = np.array([[10, 5],  [50, 10], [70, 20], [20, 30]], np.int32)\n# \u9876\u70b9\u4e2a\u6570\uff1a4\uff0c\u77e9\u9635\u53d8\u6210 4*1*2 \u7ef4\npts = pts.reshape((-1, 1, 2))\ncv2.polylines(img, [pts], True, (0, 255, 255))\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cv2.polylines()"),"\u7684\u53c2\u6570 3 \u5982\u679c\u662f False \u7684\u8bdd\uff0c\u591a\u8fb9\u5f62\u5c31\u4e0d\u95ed\u5408\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u7ed8\u5236\u591a\u6761\u76f4\u7ebf\uff0c\u4f7f\u7528 cv2.polylines","(",")"," \u8981\u6bd4 cv2.line","(",")"," \u9ad8\u6548\u5f88\u591a\uff0c\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u4f7f\u7528 cv2.polylines() \u753b\u591a\u6761\u76f4\u7ebf\nline1 = np.array([[100, 20],  [300, 20]], np.int32).reshape((-1, 1, 2))\nline2 = np.array([[100, 60],  [300, 60]], np.int32).reshape((-1, 1, 2))\nline3 = np.array([[100, 100],  [300, 100]], np.int32).reshape((-1, 1, 2))\ncv2.polylines(img, [line1, line2, line3], True, (0, 255, 255))\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u6587\u5b57"},"\u6dfb\u52a0\u6587\u5b57"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"cv2.putText()"),"\u6dfb\u52a0\u6587\u5b57\uff0c\u5b83\u7684\u53c2\u6570\u4e5f\u6bd4\u8f83\u591a\uff0c\u540c\u6837\u8bf7\u5bf9\u7167\u540e\u9762\u7684\u4ee3\u7801\u7406\u89e3\u8fd9\u51e0\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u8981\u6dfb\u52a0\u7684\u6587\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u6587\u5b57\u7684\u8d77\u59cb\u5750\u6807\uff08\u5de6\u4e0b\u89d2\u4e3a\u8d77\u70b9\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 4\uff1a\u5b57\u4f53"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570 5\uff1a\u6587\u5b57\u5927\u5c0f\uff08\u7f29\u653e\u6bd4\u4f8b\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u6dfb\u52a0\u6587\u5b57\nfont = cv2.FONT_HERSHEY_SIMPLEX\ncv2.putText(img, 'ex2tron', (10, 500), font,\n            4, (255, 255, 255), 2, lineType=cv2.LINE_AA)\n")),(0,a.kt)("p",null,"\u5b57\u4f53\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga0f9314ea6e35f99bb23f29567fc16e11"},"HersheyFonts"),"\u3002\u53e6\u5916\uff0c\u8fd9\u91cc\u6709\u4e2a\u7ebf\u578b lineType \u53c2\u6570\uff0cLINE_AA \u8868\u793a\u6297\u952f\u9f7f\u7ebf\u578b\uff0c\u5177\u4f53\u53ef\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://docs.opencv.org/3.3.1/d0/de1/group__core.html#gaf076ef45de481ac96e0ab3dc2c29a777"},"LineTypes")),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cv2.line()"),"\u753b\u76f4\u7ebf\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.circle()"),"\u753b\u5706\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.rectangle()"),"\u753b\u77e9\u5f62\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.ellipse()"),"\u753b\u692d\u5706\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.polylines()"),"\u753b\u591a\u8fb9\u5f62\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.putText()"),"\u6dfb\u52a0\u6587\u5b57\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u753b\u591a\u6761\u76f4\u7ebf\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.polylines()"),"\u8981\u6bd4",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.line()"),"\u9ad8\u6548\u5f88\u591a\u3002")),(0,a.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f60\u80fd\u7528\u5df2\u5b66\u7684\u7ed8\u56fe\u529f\u80fd\u753b\u51fa OpenCV \u7684 logo \u5417\uff1f","(","\u63d0\u793a\uff1a\u692d\u5706\u548c\u5706",")")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_opencv_logo.jpg",alt:"OpenCV logo"})),(0,a.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga7078a9fae8c7e7d13d24dac2520ae4a2"},"cv2.line","(",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#gaf10604b069374903dbd0f0488cb43670"},"cv2.circle","(",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9"},"cv2.rectangle","(",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga28b2267d35786f5f890ca167236cbc69"},"cv2.ellipse","(",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga5126f47f883d730f633d74f07456c576"},"cv2.putText","(",")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d6/d6e/group__imgproc__draw.html#ga1ea127ffbbb7e0bfc4fd6fd2eb64263c"},"cv2.polylines","(",")"))),(0,a.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/08-Drawing-Function"},"\u672c\u8282\u6e90\u7801")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.opencv.org/3.3.1/d0/de1/group__core.html#gaf076ef45de481ac96e0ab3dc2c29a777"},"LineTypes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_drawing_functions/py_drawing_functions.html"},"Drawing Functions in OpenCV"))))}m.isMDXComponent=!0}}]);