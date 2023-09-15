"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7930],{93810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));a(16758);const r={},l="03: \u6253\u5f00\u6444\u50cf\u5934",p={unversionedId:"artificial-intelligence/opencv/start/open-camera",id:"artificial-intelligence/opencv/start/open-camera",title:"03: \u6253\u5f00\u6444\u50cf\u5934",description:"\u5b66\u4e60\u6253\u5f00\u6444\u50cf\u5934\u6355\u83b7\u7167\u7247\u3001\u64ad\u653e\u672c\u5730\u89c6\u9891\u3001\u5f55\u5236\u89c6\u9891\u7b49\u3002\u56fe\u7247/\u89c6\u9891\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/03-open-camera.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/open-camera",permalink:"/en/docs/artificial-intelligence/opencv/start/open-camera",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/03-open-camera.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:3,frontMatter:{},sidebar:"ai",previous:{title:"02: \u57fa\u672c\u5143\u7d20 - \u56fe\u7247",permalink:"/en/docs/artificial-intelligence/opencv/start/basic-element-image"},next:{title:"04: \u56fe\u50cf\u57fa\u672c\u64cd\u4f5c",permalink:"/en/docs/artificial-intelligence/opencv/start/basic-operations"}},o={},c=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u6253\u5f00\u6444\u50cf\u5934",id:"\u6253\u5f00\u6444\u50cf\u5934",level:3},{value:"\u64ad\u653e\u672c\u5730\u89c6\u9891",id:"\u64ad\u653e\u672c\u5730\u89c6\u9891",level:3},{value:"\u5f55\u5236\u89c6\u9891",id:"\u5f55\u5236\u89c6\u9891",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"03-\u6253\u5f00\u6444\u50cf\u5934"},"03: \u6253\u5f00\u6444\u50cf\u5934"),(0,n.kt)("p",null,"\u5b66\u4e60\u6253\u5f00\u6444\u50cf\u5934\u6355\u83b7\u7167\u7247\u3001\u64ad\u653e\u672c\u5730\u89c6\u9891\u3001\u5f55\u5236\u89c6\u9891\u7b49\u3002\u56fe\u7247/\u89c6\u9891\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6444\u50cf\u5934\u5e76\u6355\u83b7\u7167\u7247"),(0,n.kt)("li",{parentName:"ul"},"\u64ad\u653e\u672c\u5730\u89c6\u9891\uff0c\u5f55\u5236\u89c6\u9891"),(0,n.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.VideoCapture()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.VideoWriter()"))),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("h3",{id:"\u6253\u5f00\u6444\u50cf\u5934"},"\u6253\u5f00\u6444\u50cf\u5934"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528\u6444\u50cf\u5934\uff0c\u9700\u8981\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.VideoCapture(0)"),"\u521b\u5efa VideoCapture \u5bf9\u8c61\uff0c\u53c2\u6570 0 \u6307\u7684\u662f\u6444\u50cf\u5934\u7684\u7f16\u53f7\uff0c\u5982\u679c\u4f60\u7535\u8111\u4e0a\u6709\u4e24\u4e2a\u6444\u50cf\u5934\u7684\u8bdd\uff0c\u8bbf\u95ee\u7b2c 2 \u4e2a\u6444\u50cf\u5934\u5c31\u53ef\u4ee5\u4f20\u5165 1\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u6253\u5f00\u6444\u50cf\u5934\u5e76\u7070\u5ea6\u5316\u663e\u793a\nimport cv2\n\ncapture = cv2.VideoCapture(0)\n\nwhile(True):\n    # \u83b7\u53d6\u4e00\u5e27\n    ret, frame = capture.read()\n    # \u5c06\u8fd9\u5e27\u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\n    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n\n    cv2.imshow('frame', gray)\n    if cv2.waitKey(1) == ord('q'):\n        break\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"capture.read()"),"\u51fd\u6570\u8fd4\u56de\u7684\u7b2c 1 \u4e2a\u53c2\u6570 ret(return value) \u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f53\u524d\u8fd9\u4e00\u5e27\u662f\u5426\u83b7\u53d6\u6b63\u786e\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.cvtColor()"),"\u7528\u6765\u8f6c\u6362\u989c\u8272\uff0c\u8fd9\u91cc\u5c06\u5f69\u8272\u56fe\u8f6c\u6210\u7070\u5ea6\u56fe\u3002"),(0,n.kt)("p",null,"\u53e6\u5916\uff0c\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"cap.get(propId)"),"\u53ef\u4ee5\u83b7\u53d6\u6444\u50cf\u5934\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u6bd4\u5982\u6355\u83b7\u7684\u5206\u8fa8\u7387\uff0c\u4eae\u5ea6\u548c\u5bf9\u6bd4\u5ea6\u7b49\u3002propId \u662f\u4ece 0~18 \u7684\u6570\u5b57\uff0c\u4ee3\u8868\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u5b8c\u6574\u7684\u5c5e\u6027\u5217\u8868\u53ef\u4ee5\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.0.0/d4/d15/group__videoio__flags__base.html#gaeb8dd9c89c10a5c63c139bf7c4f5704d"},"VideoCaptureProperties"),"\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cap.set(propId,value)"),"\u6765\u4fee\u6539\u5c5e\u6027\u503c\u3002\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u5728 while \u4e4b\u524d\u6dfb\u52a0\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u83b7\u53d6\u6355\u83b7\u7684\u5206\u8fa8\u7387\n# propId \u53ef\u4ee5\u76f4\u63a5\u5199\u6570\u5b57\uff0c\u4e5f\u53ef\u4ee5\u7528 OpenCV \u7684\u7b26\u53f7\u8868\u793a\nwidth, height = capture.get(3), capture.get(4)\nprint(width, height)\n\n# \u4ee5\u539f\u5206\u8fa8\u7387\u7684\u4e00\u500d\u6765\u6355\u83b7\ncapture.set(cv2.CAP_PROP_FRAME_WIDTH, width * 2)\ncapture.set(cv2.CAP_PROP_FRAME_HEIGHT, height * 2)\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u67d0\u4e9b\u6444\u50cf\u5934\u8bbe\u5b9a\u5206\u8fa8\u7387\u7b49\u53c2\u6570\u65f6\u4f1a\u65e0\u6548\uff0c\u56e0\u4e3a\u5b83\u6709\u56fa\u5b9a\u7684\u5206\u8fa8\u7387\u5927\u5c0f\u652f\u6301\uff0c\u4e00\u822c\u53ef\u5728\u6444\u50cf\u5934\u7684\u8d44\u6599\u9875\u4e2d\u627e\u5230\u3002")),(0,n.kt)("h3",{id:"\u64ad\u653e\u672c\u5730\u89c6\u9891"},"\u64ad\u653e\u672c\u5730\u89c6\u9891"),(0,n.kt)("p",null,"\u8ddf\u6253\u5f00\u6444\u50cf\u5934\u4e00\u6837\uff0c\u5982\u679c\u628a\u6444\u50cf\u5934\u7684\u7f16\u53f7\u6362\u6210\u89c6\u9891\u7684\u8def\u5f84\u5c31\u53ef\u4ee5\u64ad\u653e\u672c\u5730\u89c6\u9891\u4e86\u3002\u56de\u60f3\u4e00\u4e0b",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.waitKey()"),"\uff0c\u5b83\u7684\u53c2\u6570\u8868\u793a\u6682\u505c\u65f6\u95f4\uff0c\u6240\u4ee5\u8fd9\u4e2a\u503c\u8d8a\u5927\uff0c\u89c6\u9891\u64ad\u653e\u901f\u5ea6\u8d8a\u6162\uff0c\u53cd\u4e4b\uff0c\u64ad\u653e\u901f\u5ea6\u8d8a\u5feb\uff0c\u901a\u5e38\u8bbe\u7f6e\u4e3a 25 \u6216 30\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u64ad\u653e\u672c\u5730\u89c6\u9891\ncapture = cv2.VideoCapture('demo_video.mp4')\n\nwhile(capture.isOpened()):\n    ret, frame = capture.read()\n    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n\n    cv2.imshow('frame', gray)\n    if cv2.waitKey(30) == ord('q'):\n        break\n")),(0,n.kt)("h3",{id:"\u5f55\u5236\u89c6\u9891"},"\u5f55\u5236\u89c6\u9891"),(0,n.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u4fdd\u5b58\u56fe\u7247\u7528\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.imwrite()"),"\uff0c\u8981\u4fdd\u5b58\u89c6\u9891\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"VideoWriter"),"\u7684\u5bf9\u8c61\uff0c\u9700\u8981\u7ed9\u5b83\u4f20\u5165\u56db\u4e2a\u53c2\u6570\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u7684\u6587\u4ef6\u540d\uff0c\u5982'output.avi'"),(0,n.kt)("li",{parentName:"ul"},"\u7f16\u7801\u65b9\u5f0f ",(0,n.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/fourcc/6168470?fr=aladdin"},"FourCC")," \u7801"),(0,n.kt)("li",{parentName:"ul"},"\u5e27\u7387 ",(0,n.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/FPS/3227416"},"FPS")),(0,n.kt)("li",{parentName:"ul"},"\u8981\u4fdd\u5b58\u7684\u5206\u8fa8\u7387\u5927\u5c0f")),(0,n.kt)("p",null,"FourCC \u662f\u7528\u6765\u6307\u5b9a\u89c6\u9891\u7f16\u7801\u65b9\u5f0f\u7684\u56db\u5b57\u8282\u7801\uff0c\u6240\u6709\u7684\u7f16\u7801\u53ef\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"http://www.fourcc.org/codecs.php"},"Video Codecs"),"\u3002\u5982 MJPG \u7f16\u7801\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a ",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.VideoWriter_fourcc(*'MJPG')"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.VideoWriter_fourcc('M','J','P','G')")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"capture = cv2.VideoCapture(0)\n\n# \u5b9a\u4e49\u7f16\u7801\u65b9\u5f0f\u5e76\u521b\u5efa VideoWriter \u5bf9\u8c61\nfourcc = cv2.VideoWriter_fourcc(*'MJPG')\noutfile = cv2.VideoWriter('output.avi', fourcc, 25., (640, 480))\n\nwhile(capture.isOpened()):\n    ret, frame = capture.read()\n\n    if ret:\n        outfile.write(frame)  # \u5199\u5165\u6587\u4ef6\n        cv2.imshow('frame', frame)\n        if cv2.waitKey(1) == ord('q'):\n            break\n    else:\n        break\n")),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.VideoCapture()"),"\u521b\u5efa\u89c6\u9891\u5bf9\u8c61\uff0c\u7136\u540e\u5728\u5faa\u73af\u4e2d\u4e00\u5e27\u5e27\u663e\u793a\u56fe\u50cf\u3002\u53c2\u6570\u4f20\u5165\u6570\u5b57\u65f6\uff0c\u4ee3\u8868\u6253\u5f00\u6444\u50cf\u5934\uff0c\u4f20\u5165\u672c\u5730\u89c6\u9891\u8def\u5f84\u65f6\uff0c\u8868\u793a\u64ad\u653e\u672c\u5730\u89c6\u9891\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cap.get(propId)"),"\u83b7\u53d6\u89c6\u9891\u5c5e\u6027\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"cap.set(propId,value)"),"\u8bbe\u7f6e\u89c6\u9891\u5c5e\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cv2.VideoWriter()"),"\u521b\u5efa\u89c6\u9891\u5199\u5165\u5bf9\u8c61\uff0c\u7528\u6765\u5f55\u5236/\u4fdd\u5b58\u89c6\u9891\u3002")),(0,n.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8bf7\u5148\u9605\u8bfb",(0,n.kt)("a",{parentName:"li",href:"./extra-03-trackbar/"},"\u756a\u5916\u7bc7\uff1a\u6ed1\u52a8\u6761"),"\uff0c\u7136\u540e\u5b9e\u73b0\u4e00\u4e2a\u53ef\u4ee5\u62d6\u52a8\u6ed1\u5757\u64ad\u653e\u89c6\u9891\u7684\u529f\u80fd\u3002\uff08\u63d0\u793a\uff1a\u9700\u8981\u7528\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.CAP_PROP_FRAME_COUNT"),"\u548c",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.CAP_PROP_POS_FRAMES"),"\u4e24\u4e2a\u5c5e\u6027\uff09\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d8/dfe/classcv_1_1VideoCapture.html%3E"},"VideoCapture Object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/dd/d9e/classcv_1_1VideoWriter.html%3E"},"VideoWriter Object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab"},"cv2.cvtColor()"))),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/03-Open-Camera"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.fourcc.org/codecs.php"},"Video Codecs by FOURCC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_video_display/py_video_display.html"},"Getting Started with Videos"))))}u.isMDXComponent=!0}}]);