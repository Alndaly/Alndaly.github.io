"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9918],{64441:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>p,default:()=>g,frontMatter:()=>n,metadata:()=>m,toc:()=>o});var l=a(87462),i=(a(67294),a(3905));a(16758);const n={},p="\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib",m={unversionedId:"artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib",id:"artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib",title:"\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib",description:"\u4e86\u89e3\u5e38\u7528\u56fe\u7247\u683c\u5f0f\u548c OpenCV \u9ad8\u8d28\u91cf\u4fdd\u5b58\u56fe\u7247\u7684\u65b9\u5f0f\uff0c\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Matplotlib \u663e\u793a OpenCV \u56fe\u50cf\u3002",source:"@site/docs/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-01-code-optimization"},next:{title:"\u756a\u5916\u7bc7\uff1a\u6ed1\u52a8\u6761",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-03-trackbar"}},r={},o=[{value:"\u65e0\u635f\u4fdd\u5b58",id:"\u65e0\u635f\u4fdd\u5b58",level:2},{value:"\u5e38\u7528\u56fe\u7247\u683c\u5f0f",id:"\u5e38\u7528\u56fe\u7247\u683c\u5f0f",level:3},{value:"\u9ad8\u8d28\u91cf\u4fdd\u5b58",id:"\u9ad8\u8d28\u91cf\u4fdd\u5b58",level:3},{value:"Matplotlib",id:"matplotlib",level:2},{value:"\u663e\u793a\u7070\u5ea6\u56fe",id:"\u663e\u793a\u7070\u5ea6\u56fe",level:3},{value:"\u663e\u793a\u5f69\u8272\u56fe",id:"\u663e\u793a\u5f69\u8272\u56fe",level:3},{value:"\u52a0\u8f7d\u548c\u4fdd\u5b58\u56fe\u7247",id:"\u52a0\u8f7d\u548c\u4fdd\u5b58\u56fe\u7247",level:3},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:o};function g(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u756a\u5916\u7bc7\u65e0\u635f\u4fdd\u5b58\u548c-matplotlib"},"\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_matplotlib_show_gray_image.jpg",alt:null})),(0,i.kt)("p",null,"\u4e86\u89e3\u5e38\u7528\u56fe\u7247\u683c\u5f0f\u548c OpenCV \u9ad8\u8d28\u91cf\u4fdd\u5b58\u56fe\u7247\u7684\u65b9\u5f0f\uff0c\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Matplotlib \u663e\u793a OpenCV \u56fe\u50cf\u3002"),(0,i.kt)("h2",{id:"\u65e0\u635f\u4fdd\u5b58"},"\u65e0\u635f\u4fdd\u5b58"),(0,i.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u65e5\u5e38\u770b\u5230\u7684\u5927\u90e8\u5206\u56fe\u7247\u90fd\u662f\u538b\u7f29\u8fc7\u7684\uff0c\u90a3\u4e48\u90fd\u6709\u54ea\u4e9b\u5e38\u89c1\u7684\u56fe\u7247\u683c\u5f0f\u5462\uff1f"),(0,i.kt)("h3",{id:"\u5e38\u7528\u56fe\u7247\u683c\u5f0f"},"\u5e38\u7528\u56fe\u7247\u683c\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/BMP/35116"},"bmp"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168\u79f0\uff1aBitmap"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e0d\u538b\u7f29")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/JPEG"},"jpg"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168\u79f0\uff1aJoint Photographic Experts Group"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6709\u635f\u538b\u7f29\u65b9\u5f0f")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/PNG"},"png"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168\u79f0\uff1aPortable Network Graphics"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u65e0\u635f\u538b\u7f29\u65b9\u5f0f"))))),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u540c\u4e00\u4e2a\u6587\u4ef6\u4fdd\u5b58\u6210\u4e0d\u540c\u7684\u683c\u5f0f\u540e\uff0c\u6587\u4ef6\u5927\u5c0f\u4e0a bmp \u80af\u5b9a\u662f\u6700\u5927\u7684\uff0c\u800c png \u548c jpg\uff0c\u4e0d\u540c\u7684\u538b\u7f29\u6bd4\u7ed3\u679c\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u53ef\u4ee5\u7528\u753b\u56fe\u5de5\u5177\u65b0\u5efa\u4e00\u526f 100\xd7100 \u7684\u56fe\u50cf\uff0c\u5206\u522b\u4fdd\u5b58\u6210\u8fd9\u4e09\u79cd\u683c\u5f0f\u6765\u9a8c\u8bc1\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_high_save_mspaint_format.jpg",alt:null})),(0,i.kt)("h3",{id:"\u9ad8\u8d28\u91cf\u4fdd\u5b58"},"\u9ad8\u8d28\u91cf\u4fdd\u5b58"),(0,i.kt)("p",null,"\u7528 cv2.imwrite() \u4fdd\u5b58\u56fe\u7247\u65f6\uff0c\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u4fdd\u5b58\u8d28\u91cf\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cv2.IMWRITE_JPEG_QUALITY"),"\uff1ajpg \u8d28\u91cf\u63a7\u5236\uff0c\u53d6\u503c 0~100\uff0c\u503c\u8d8a\u5927\uff0c\u8d28\u91cf\u8d8a\u597d\uff0c\u9ed8\u8ba4\u4e3a 95"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cv2.IMWRITE_PNG_COMPRESSION"),"\uff1apng \u8d28\u91cf\u63a7\u5236\uff0c\u53d6\u503c 0~9\uff0c\u503c\u8d8a\u5927\uff0c\u538b\u7f29\u6bd4\u8d8a\u9ad8\uff0c\u9ed8\u8ba4\u4e3a 1")),(0,i.kt)("p",null,"\u8fd8\u6709\u8bf8\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"CV_IMWRITE_WEBP_QUALITY"),"\u7684\u53c2\u91cf\uff0c\u4e0d\u5e38\u7528\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#ga292d81be8d76901bff7988d18d2b42ac%3E"},"ImwriteFlags"),"\u3002"),(0,i.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u539f\u56fe lena.jpg \u7684\u5206\u8fa8\u7387\u662f 350\xd7350\uff0c\u5927\u5c0f 49.7KB\u3002\u6211\u4eec\u628a\u5b83\u8f6c\u6210\u4e0d\u540c\u683c\u5f0f\u770b\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nnew_img = cv2.imread('lena.jpg')\n\n# bmp\ncv2.imwrite('img_bmp.bmp',new_img) # \u6587\u4ef6\u5927\u5c0f\uff1a359KB\n\n# jpg \u9ed8\u8ba4 95% \u8d28\u91cf\ncv2.imwrite('img_jpg95.jpg',new_img) # \u6587\u4ef6\u5927\u5c0f\uff1a52.3KB\n# jpg 20% \u8d28\u91cf\ncv2.imwrite('img_jpg20.jpg',new_img,[int(cv2.IMWRITE_JPEG_QUALITY),20]) # \u6587\u4ef6\u5927\u5c0f\uff1a8.01KB\n# jpg 100% \u8d28\u91cf\ncv2.imwrite('img_jpg100.jpg',new_img,[int(cv2.IMWRITE_JPEG_QUALITY),100]) # \u6587\u4ef6\u5927\u5c0f\uff1a82.5KB\n\n# png \u9ed8\u8ba4 1 \u538b\u7f29\u6bd4\ncv2.imwrite('img_png1.png',new_img) # \u6587\u4ef6\u5927\u5c0f\uff1a240KB\n# png 9 \u538b\u7f29\u6bd4\ncv2.imwrite('img_png9.png',new_img,[int(cv2.IMWRITE_PNG_COMPRESSION),9]) # \u6587\u4ef6\u5927\u5c0f\uff1a207KB\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bmp \u6587\u4ef6\u662f\u6700\u5927\u7684\uff0c\u6ca1\u6709\u4efb\u4f55\u538b\u7f29\uff081 \u4e2a\u50cf\u7d20\u70b9 1byte\uff0c3 \u901a\u9053\u7684\u5f69\u8272\u56fe\u603b\u5927\u5c0f\uff1a350\xd7350\xd73/1024 \u2248 359 KB\uff09"),(0,i.kt)("li",{parentName:"ul"},"jpg/png \u672c\u8eab\u5c31\u6709\u538b\u7f29\u7684\uff0c\u6240\u4ee5\u5c31\u7b97\u662f 100% \u7684\u8d28\u91cf\u4fdd\u5b58\uff0c\u4f53\u79ef\u4e5f\u6bd4 bmp \u5c0f\u5f88\u591a"),(0,i.kt)("li",{parentName:"ul"},"jpg \u7684\u5bb9\u91cf\u4f18\u52bf\u5f88\u660e\u663e\uff0c\u8fd9\u4e5f\u662f\u5b83\u4e3a\u4ec0\u4e48\u5982\u6b64\u6d41\u884c\u7684\u539f\u56e0")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u601d\u8003\uff1a\u4e3a\u4ec0\u4e48\u539f\u56fe 49.7KB\uff0c\u4fdd\u5b58\u6210 bmp \u6216\u5176\u4ed6\u683c\u5f0f\u53cd\u800c\u5927\u4e86\u5462\uff1f")),(0,i.kt)("p",null,"\u8fd9\u662f\u4e2a\u5f88\u6709\u8da3\u7684\u95ee\u9898\uff0c\u5f88\u591a\u7ae5\u978b\u90fd\u95ee\u8fc7\u6211\u3002\u8fd9\u91cc\u9700\u8981\u660e\u786e\u7684\u662f\u4fdd\u5b58\u65b0\u683c\u5f0f\u65f6\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5bb9\u91cf\u5927\u5c0f\u8ddf\u539f\u56fe\u7684\u5bb9\u91cf\u6ca1\u6709\u76f4\u63a5\u5173\u7cfb\uff0c\u800c\u662f\u53d6\u51b3\u4e8e\u539f\u56fe\u7684\u5206\u8fa8\u7387\u5927\u5c0f\u548c\u539f\u56fe\u672c\u8eab\u7684\u5185\u5bb9\uff08\u538b\u7f29\u65b9\u5f0f\uff09"),"\uff0c\u6240\u4ee5 lena.jpg \u4fdd\u5b58\u6210\u4e0d\u538b\u7f29\u7684 bmp \u683c\u5f0f\u65f6\uff0c\u5bb9\u91cf\u5927\u5c0f\u5c31\u662f\u56fa\u5b9a\u7684 350\xd7350\xd73/1024 \u2248 359 KB\uff1b\u53e6\u5916\uff0c\u5bb9\u91cf\u53d8\u5927\u4e0d\u4ee3\u8868\u753b\u8d28\u63d0\u5347\u5662\uff0c\u4e0d\u7136\u5c31\u9006\u5929\u4e86~~~"),(0,i.kt)("h2",{id:"matplotlib"},"Matplotlib"),(0,i.kt)("p",null,"Matplotlib \u662f Python \u7684\u4e00\u4e2a\u5f88\u5e38\u7528\u7684\u7ed8\u56fe\u5e93\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u53bb",(0,i.kt)("a",{parentName:"p",href:"http://www.matplotlib.org/"},"\u5b98\u7f51"),"\u5b66\u4e60\u66f4\u591a\u5185\u5bb9\u3002"),(0,i.kt)("h3",{id:"\u663e\u793a\u7070\u5ea6\u56fe"},"\u663e\u793a\u7070\u5ea6\u56fe"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('lena.jpg', 0)\n\n# \u7070\u5ea6\u56fe\u663e\u793a\uff0ccmap(color map) \u8bbe\u7f6e\u4e3a gray\nplt.imshow(img, cmap='gray')\nplt.show()\n")),(0,i.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_matplotlib_show_gray_image.jpg",alt:null})),(0,i.kt)("h3",{id:"\u663e\u793a\u5f69\u8272\u56fe"},"\u663e\u793a\u5f69\u8272\u56fe"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OpenCV \u4e2d\u7684\u56fe\u50cf\u662f\u4ee5 BGR \u7684\u901a\u9053\u987a\u5e8f\u5b58\u50a8\u7684"),"\uff0c\u4f46 Matplotlib \u662f\u4ee5 RGB \u6a21\u5f0f\u663e\u793a\u7684\uff0c\u6240\u4ee5\u76f4\u63a5\u5728 Matplotlib \u4e2d\u663e\u793a OpenCV \u56fe\u50cf\u4f1a\u51fa\u73b0\u95ee\u9898\uff0c\u56e0\u6b64\u9700\u8981\u8f6c\u6362\u4e00\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('lena.jpg')\nimg2 = img[:, :, ::-1]\n# \u6216\u4f7f\u7528\n# img2 = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\n\n# \u663e\u793a\u4e0d\u6b63\u786e\u7684\u56fe\nplt.subplot(121),plt.imshow(img)\n\n# \u663e\u793a\u6b63\u786e\u7684\u56fe\nplt.subplot(122)\nplt.xticks([]), plt.yticks([]) # \u9690\u85cf x \u548c y \u8f74\nplt.imshow(img2)\n\nplt.show()\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"img[:,:,0]"),"\u8868\u793a\u56fe\u7247\u7684\u84dd\u8272\u901a\u9053\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"img[:,:,::-1]"),"\u5c31\u8868\u793a BGR \u7ffb\u8f6c\uff0c\u53d8\u6210 RGB\uff0c\u8bf4\u660e\u4e00\u4e0b\uff1a")),(0,i.kt)("p",null,"\u719f\u6089 Python \u7684\u7ae5\u978b\u5e94\u8be5\u77e5\u9053\uff0c\u5bf9\u4e00\u4e2a\u5b57\u7b26\u4e32 s \u7ffb\u8f6c\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"s[::-1]"),"\uff0c'abc'\u53d8\u6210'cba'\uff0c-1 \u8868\u793a\u9006\u5e8f\u3002\u56fe\u7247\u662f\u4e8c\u7ef4\u7684\uff0c\u6240\u4ee5\u5b8c\u6574\u5730\u590d\u5236\u4e00\u526f\u56fe\u50cf\u5c31\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"img2 = img[:,:] # \u5199\u5168\u5c31\u662f\uff1aimg2 = img[0:height,0:width]\n")),(0,i.kt)("p",null,"\u800c\u56fe\u7247\u662f\u6709\u4e09\u4e2a\u901a\u9053\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u957f\u5ea6\u4e3a 3 \u7684\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u901a\u9053\u7ffb\u8f6c\u4e0e\u56fe\u7247\u590d\u5236\u7ec4\u5408\u8d77\u6765\u4fbf\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"img[:,:,::-1]"),"\u3002"),(0,i.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_matplotlib_show_color_image.jpg",alt:null})),(0,i.kt)("h3",{id:"\u52a0\u8f7d\u548c\u4fdd\u5b58\u56fe\u7247"},"\u52a0\u8f7d\u548c\u4fdd\u5b58\u56fe\u7247"),(0,i.kt)("p",null,"\u4e0d\u4f7f\u7528 OpenCV\uff0cMatplotlib \u4e5f\u53ef\u4ee5\u52a0\u8f7d\u548c\u4fdd\u5b58\u56fe\u7247\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.image as pli\n\nimg = pli.imread('lena.jpg')\nplt.imshow(img)\n\n# \u4fdd\u5b58\u56fe\u7247\uff0c\u9700\u653e\u5728 show() \u51fd\u6570\u4e4b\u524d\nplt.savefig('lena2.jpg')\nplt.show()\n")),(0,i.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#gabbc7ef1aa2edfaa87772f1202d67e0ce"},"cv2.imwrite()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#ga292d81be8d76901bff7988d18d2b42ac"},"ImwriteFlags"))),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-02-High-Quality-Save-and-Matplotlib"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000013589397"},"\u804a\u4e00\u804a\u51e0\u79cd\u5e38\u7528 web \u56fe\u7247\u683c\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.matplotlib.org/"},"Matplotlib \u5b98\u7f51"))))}g.isMDXComponent=!0}}]);