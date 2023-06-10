"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7157],{7136:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));a(16758);const p={},i="16: \u6a21\u677f\u5339\u914d",c={unversionedId:"artificial-intelligence/opencv/basic/template-matching",id:"artificial-intelligence/opencv/basic/template-matching",title:"16: \u6a21\u677f\u5339\u914d",description:"\u5b66\u4e60\u4f7f\u7528\u6a21\u677f\u5339\u914d\u5728\u56fe\u50cf\u4e2d\u5bfb\u627e\u7269\u4f53\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/16-template-matching.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/template-matching",permalink:"/docs/artificial-intelligence/opencv/basic/template-matching",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/16-template-matching.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",sidebarPosition:16,frontMatter:{},sidebar:"ai",previous:{title:"15: \u76f4\u65b9\u56fe",permalink:"/docs/artificial-intelligence/opencv/basic/histograms"},next:{title:"17: \u970d\u592b\u53d8\u6362",permalink:"/docs/artificial-intelligence/opencv/basic/hough-transform"}},r={},m=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u6a21\u677f\u5339\u914d",id:"\u6a21\u677f\u5339\u914d",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u5339\u914d\u591a\u4e2a\u7269\u4f53",id:"\u5339\u914d\u591a\u4e2a\u7269\u4f53",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],o={toc:m};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"16-\u6a21\u677f\u5339\u914d"},"16: \u6a21\u677f\u5339\u914d"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_template_matching.jpg",alt:null})),(0,n.kt)("p",null,"\u5b66\u4e60\u4f7f\u7528\u6a21\u677f\u5339\u914d\u5728\u56fe\u50cf\u4e2d\u5bfb\u627e\u7269\u4f53\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6a21\u677f\u5339\u914d\u5728\u56fe\u50cf\u4e2d\u5bfb\u627e\u7269\u4f53"),(0,n.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.matchTemplate()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.minMaxLoc()"))),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("h3",{id:"\u6a21\u677f\u5339\u914d"},"\u6a21\u677f\u5339\u914d"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/%E6%A8%A1%E6%9D%BF%E5%8C%B9%E9%85%8D"},"\u6a21\u677f\u5339\u914d"),"\u5c31\u662f\u7528\u6765\u5728\u5927\u56fe\u4e2d\u627e\u5c0f\u56fe\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u4e00\u526f\u56fe\u50cf\u4e2d\u5bfb\u627e\u53e6\u5916\u4e00\u5f20\u6a21\u677f\u56fe\u50cf\u7684\u4f4d\u7f6e\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_template_matching.jpg",alt:null})),(0,n.kt)("p",null,"\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.matchTemplate()"),"\u5b9e\u73b0\u6a21\u677f\u5339\u914d\u3002\u9996\u5148\u6211\u4eec\u6765\u8bfb\u5165\u56fe\u7247\u548c\u6a21\u677f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\nfrom matplotlib import pyplot as plt\n\nimg = cv2.imread('lena.jpg', 0)\ntemplate = cv2.imread('face.jpg', 0)\nh, w = template.shape[:2]  # rows->h, cols->w\n")),(0,n.kt)("p",null,"\u5339\u914d\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u526f\u7070\u5ea6\u56fe\uff0c\u6700\u767d\u7684\u5730\u65b9\u8868\u793a\u6700\u5927\u7684\u5339\u914d\u3002\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.minMaxLoc()"),"\u51fd\u6570\u53ef\u4ee5\u5f97\u5230\u6700\u5927\u5339\u914d\u503c\u7684\u5750\u6807\uff0c\u4ee5\u8fd9\u4e2a\u70b9\u4e3a\u5de6\u4e0a\u89d2\u89d2\u70b9\uff0c\u6a21\u677f\u7684\u5bbd\u548c\u9ad8\u753b\u77e9\u5f62\u5c31\u662f\u5339\u914d\u7684\u4f4d\u7f6e\u4e86\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u76f8\u5173\u7cfb\u6570\u5339\u914d\u65b9\u6cd5\uff1acv2.TM_CCOEFF\nres = cv2.matchTemplate(img, template, cv2.TM_CCOEFF)\nmin_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)\n\nleft_top = max_loc  # \u5de6\u4e0a\u89d2\nright_bottom = (left_top[0] + w, left_top[1] + h)  # \u53f3\u4e0b\u89d2\ncv2.rectangle(img, left_top, right_bottom, 255, 2)  # \u753b\u51fa\u77e9\u5f62\u4f4d\u7f6e\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_ccoeff_matching_template.jpg",alt:null})),(0,n.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u90e8\u5206\u53ef\u770b\u53ef\u4e0d\u770b\uff0c\u4e0d\u592a\u7406\u89e3\u4e5f\u6ca1\u5173\u7cfb\uff0c\u8fd8\u8bb0\u5f97\u524d\u9762\u7684\u65b9\u6cd5\u5417\uff1f\u4e0d\u61c2\u5f97\u5c31\u5212\u6389","(","\u273f\u25d5\u203f\u25d5\u273f",")")),(0,n.kt)("p",null,"\u6a21\u677f\u5339\u914d\u7684\u539f\u7406\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u4e0d\u65ad\u5730\u5728\u539f\u56fe\u4e2d\u79fb\u52a8\u6a21\u677f\u56fe\u50cf\u53bb\u6bd4\u8f83\uff0c\u6709 6 \u79cd\u4e0d\u540c\u7684\u6bd4\u8f83\u65b9\u6cd5\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.opencv.org/3.3.1/df/dfb/group__imgproc__object.html#ga3a7850640f1fe1f58fe91a2d7583695d"},"TemplateMatchModes")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5e73\u65b9\u5dee\u5339\u914d CV_TM_SQDIFF\uff1a\u7528\u4e24\u8005\u7684\u5e73\u65b9\u5dee\u6765\u5339\u914d\uff0c\u6700\u597d\u7684\u5339\u914d\u503c\u4e3a 0"),(0,n.kt)("li",{parentName:"ul"},"\u5f52\u4e00\u5316\u5e73\u65b9\u5dee\u5339\u914d CV_TM_SQDIFF_NORMED"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5173\u5339\u914d CV_TM_CCORR\uff1a\u7528\u4e24\u8005\u7684\u4e58\u79ef\u5339\u914d\uff0c\u6570\u503c\u8d8a\u5927\u8868\u660e\u5339\u914d\u7a0b\u5ea6\u8d8a\u597d"),(0,n.kt)("li",{parentName:"ul"},"\u5f52\u4e00\u5316\u76f8\u5173\u5339\u914d CV_TM_CCORR_NORMED"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7cfb\u6570\u5339\u914d CV_TM_CCOEFF\uff1a\u7528\u4e24\u8005\u7684\u76f8\u5173\u7cfb\u6570\u5339\u914d\uff0c1 \u8868\u793a\u5b8c\u7f8e\u7684\u5339\u914d\uff0c-1 \u8868\u793a\u6700\u5dee\u7684\u5339\u914d"),(0,n.kt)("li",{parentName:"ul"},"\u5f52\u4e00\u5316\u76f8\u5173\u7cfb\u6570\u5339\u914d CV_TM_CCOEFF_NORMED")),(0,n.kt)("p",null,"\u5f52\u4e00\u5316\u7684\u610f\u601d\u5c31\u662f\u5c06\u503c\u7edf\u4e00\u5230 0~1\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7684\u5bf9\u6bd4\u4ee3\u7801\u53ef\u5230",(0,n.kt)("a",{parentName:"p",href:"#%E5%BC%95%E7%94%A8"},"\u6e90\u7801\u5904"),"\u67e5\u770b\u3002\u6a21\u677f\u5339\u914d\u4e5f\u662f\u5e94\u7528\u5377\u79ef\u6765\u5b9e\u73b0\u7684\uff1a\u5047\u8bbe\u539f\u56fe\u5927\u5c0f\u4e3a W\xd7H\uff0c\u6a21\u677f\u56fe\u5927\u5c0f\u4e3a w\xd7h\uff0c\u90a3\u4e48\u751f\u6210\u56fe\u5927\u5c0f\u662f","(","W-w+1",")","\xd7","(","H-h+1",")","\uff0c\u751f\u6210\u56fe\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20\u503c\u8868\u793a\u539f\u56fe\u4e0e\u6a21\u677f\u7684\u5339\u914d\u7a0b\u5ea6\u3002"),(0,n.kt)("h3",{id:"\u5339\u914d\u591a\u4e2a\u7269\u4f53"},"\u5339\u914d\u591a\u4e2a\u7269\u4f53"),(0,n.kt)("p",null,"\u524d\u9762\u6211\u4eec\u662f\u627e\u6700\u5927\u5339\u914d\u7684\u70b9\uff0c\u6240\u4ee5\u53ea\u80fd\u5339\u914d\u4e00\u6b21\u3002\u6211\u4eec\u53ef\u4ee5\u8bbe\u5b9a\u4e00\u4e2a\u5339\u914d\u9608\u503c\u6765\u5339\u914d\u591a\u6b21\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# 1.\u8bfb\u5165\u539f\u56fe\u548c\u6a21\u677f\nimg_rgb = cv2.imread('mario.jpg')\nimg_gray = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY)\ntemplate = cv2.imread('mario_coin.jpg', 0)\nh, w = template.shape[:2]\n\n# 2.\u6807\u51c6\u76f8\u5173\u6a21\u677f\u5339\u914d\nres = cv2.matchTemplate(img_gray, template, cv2.TM_CCOEFF_NORMED)\nthreshold = 0.8\n\n# 3.\u8fd9\u8fb9\u662f Python/Numpy \u7684\u77e5\u8bc6\uff0c\u540e\u9762\u89e3\u91ca\nloc = np.where(res >= threshold)  # \u5339\u914d\u7a0b\u5ea6\u5927\u4e8e%80 \u7684\u5750\u6807 y,x\nfor pt in zip(*loc[::-1]):  # *\u53f7\u8868\u793a\u53ef\u9009\u53c2\u6570\n    right_bottom = (pt[0] + w, pt[1] + h)\n    cv2.rectangle(img_rgb, pt, right_bottom, (0, 0, 255), 2)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_template_matching_multi.jpg",alt:null})),(0,n.kt)("p",null,"\u7b2c 3 \u6b65\u6709\u51e0\u4e2a Python/Numpy \u7684\u91cd\u8981\u77e5\u8bc6\uff0c\u6765\u5927\u81f4\u770b\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.scipy.org/doc/numpy/reference/generated/numpy.where.html"},"np.where","(",")"),"\u5728\u8fd9\u91cc\u8fd4\u56de res \u4e2d\u503c\u5927\u4e8e 0.8 \u7684\u6240\u6709\u5750\u6807\uff0c\u5982\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"x = np.arange(9.).reshape(3, 3)\nprint(np.where(x > 5))\n# \u7ed3\u679c (\u5148 y \u5750\u6807\uff0c\u518d x \u5750\u6807)\uff1a(array([2, 2, 2]), array([0, 1, 2]))\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_np_where_function.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/functions.html#zip"},"zip","(",")"),"\u51fd\u6570\uff0c\u529f\u80fd\u5f3a\u5927\u5230\u96be\u4ee5\u89e3\u91ca\uff0c\u4e3e\u4e2a\u7b80\u5355\u4f8b\u5b50\u5c31\u77e5\u9053\u4e86\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"x = [1, 2, 3]\ny = [4, 5, 6]\nprint(list(zip(x, y)))  # [(1, 4), (2, 5), (3, 6)]\n")),(0,n.kt)("p",null,"\u8fd9\u6837\u5927\u5bb6\u5c31\u80fd\u7406\u89e3\u524d\u9762\u4ee3\u7801\u7684\u7528\u6cd5\u4e86\u5427\uff1a\u56e0\u4e3a loc \u662f\u5148 y \u5750\u6807\u518d x \u5750\u6807\uff0c\u6240\u4ee5\u7528 loc","[","::-1","]"," \u7ffb\u8f6c\u4e00\u4e0b\uff0c\u7136\u540e\u518d\u7528 zip \u51fd\u6570\u62fc\u63a5\u5728\u4e00\u8d77\u3002"),(0,n.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e4b\u524d\u6211\u4eec\u6709\u5b66\u8fc7\u5f62\u72b6\u5339\u914d\uff0c\u4e0d\u8bba\u5f62\u72b6\u65cb\u8f6c/\u7f29\u653e\u90fd\u53ef\u4ee5\u5339\u914d\u5230\u3002\u601d\u8003\u4e00\u4e0b\uff0c\u56fe\u7247\u65cb\u8f6c\u6216\u7f29\u653e\u7684\u8bdd\u6a21\u677f\u5339\u914d\u8fd8\u6709\u4f5c\u7528\u5417\uff1f")),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6a21\u677f\u5339\u914d\u7528\u6765\u5728\u5927\u56fe\u4e2d\u627e\u5c0f\u56fe\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cv2.matchTemplate()"),"\u7528\u6765\u8fdb\u884c\u6a21\u677f\u5339\u914d\u3002")),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/16-Template-Matching"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_template_matching/py_template_matching.html"},"Template Matching")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.opencv.org.cn/opencvdoc/2.3.2/html/doc/tutorials/imgproc/histograms/template_matching/template_matching.html#template-matching"},"\u6a21\u677f\u5339\u914d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/3.3.1/df/dfb/group__imgproc__object.html#ga3a7850640f1fe1f58fe91a2d7583695d"},"TemplateMatchModes"))))}s.isMDXComponent=!0}}]);