"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4043],{52508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));n(16758);const r={},i="\u6311\u6218\u4efb\u52a1\uff1aPyQt5 \u7f16\u5199 GUI \u754c\u9762",p={unversionedId:"artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5",id:"artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5",title:"\u6311\u6218\u4efb\u52a1\uff1aPyQt5 \u7f16\u5199 GUI \u754c\u9762",description:"\u62d3\u5c55\u6311\u6218\uff1a\u7f16\u5199 GUI \u56fe\u50cf\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5",permalink:"/en/docs/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"Jun 10, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u6311\u6218\u4efb\u52a1\uff1a\u753b\u52a8\u6001\u65f6\u949f",permalink:"/en/docs/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock"},next:{title:"\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-01-code-optimization"}},o={},s=[{value:"\u6311\u6218\u5185\u5bb9",id:"\u6311\u6218\u5185\u5bb9",level:2},{value:"\u6311\u6218\u89e3\u7b54",id:"\u6311\u6218\u89e3\u7b54",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u754c\u9762\u8bbe\u8ba1",id:"\u754c\u9762\u8bbe\u8ba1",level:3},{value:"\u6309\u94ae\u4e8b\u4ef6",id:"\u6309\u94ae\u4e8b\u4ef6",level:3},{value:"ui \u6587\u4ef6\u8f6c py \u4ee3\u7801",id:"ui-\u6587\u4ef6\u8f6c-py-\u4ee3\u7801",level:3},{value:"\u7f16\u5199\u903b\u8f91\u4ee3\u7801",id:"\u7f16\u5199\u903b\u8f91\u4ee3\u7801",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6311\u6218\u4efb\u52a1pyqt5-\u7f16\u5199-gui-\u754c\u9762"},"\u6311\u6218\u4efb\u52a1\uff1aPyQt5 \u7f16\u5199 GUI \u754c\u9762"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt_gui_sample.jpg",alt:null})),(0,l.kt)("p",null,"\u62d3\u5c55\u6311\u6218\uff1a\u7f16\u5199 GUI \u56fe\u50cf\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h2",{id:"\u6311\u6218\u5185\u5bb9"},"\u6311\u6218\u5185\u5bb9"),(0,l.kt)("p",null,"\u524d\u9762\u6211\u4eec\u5b66\u4e60\u7684 OpenCV \u5185\u5bb9\u90fd\u662f\u8fd0\u884c\u5728\u547d\u4ee4\u884c\u4e2d\u7684\uff0c\u6ca1\u6709\u754c\u9762\uff0c\u6240\u4ee5\u672c\u6b21\u7684\u62d3\u5c55\u6311\u6218\u5185\u5bb9\u4fbf\u662f\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4e86\u89e3 Python \u7f16\u5199"),(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/GUI"},(0,l.kt)("strong",{parentName:"a"},"GUI")),(0,l.kt)("strong",{parentName:"p"},"\u754c\u9762\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528 PyQt5 \u7f16\u5199\u5982\u4e0b\u7684\u56fe\u50cf\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b9e\u73b0\u6253\u5f00\u6444\u50cf\u5934\u3001\u6355\u83b7\u56fe\u7247\u3001\u8bfb\u53d6\u672c\u5730\u56fe\u7247\u3001\u7070\u5ea6\u5316\u548c Otsu \u81ea\u52a8\u9608\u503c\u5206\u5272\u7684\u529f\u80fd\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt_gui_sample.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6311\u6218\u9898\u4e0d\u4f1a\u505a\u4e5f\u6728\u6709\u5173\u7cfb\uff0c\u4f46\u8bf7\u52a1\u5fc5\u5728\u81ea\u884c\u5c1d\u8bd5\u540e\uff0c\u518d\u770b\u4e0b\u9762\u7684\u89e3\u7b54\u5662\uff0c"),"\u4e0d\u7136...\u6211\u4e5f\u6ca1\u529e\u6cd5","(","\uffe3 \u25bd \uffe3",")",'"'),(0,l.kt)("h2",{id:"\u6311\u6218\u89e3\u7b54"},"\u6311\u6218\u89e3\u7b54"),(0,l.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'\u76ee\u524d\u6211\u4eec\u5b66\u7684\u5185\u5bb9\u90fd\u662f\u8dd1\u5728\u547d\u4ee4\u884c\u4e2d\u7684\uff0c\u5e76\u6ca1\u6709\u754c\u9762\uff0c\u90a3\u4e48"\u811a\u672c\u8bed\u8a00"Python \u5982\u4f55\u642d\u5efa GUI \u754c\u9762\u5462\uff1f')),(0,l.kt)("p",null,"\u5176\u5b9e Python \u652f\u6301\u591a\u79cd\u56fe\u5f62\u754c\u9762\u5e93\uff0c\u5982",(0,l.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/TkInter"},"Tk","(","Tkinter",")"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://www.wxpython.org/"},"wxPython"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/PyQt"},"PyQt"),"\u7b49\uff0c\u867d\u7136 Python \u81ea\u5e26 Tkinter\uff0c\u65e0\u9700\u989d\u5916\u5b89\u88c5\u5305\uff0c\u4f46\u6211\u66f4\u63a8\u8350\u4f7f\u7528 PyQt\uff0c\u4e00\u662f\u56e0\u4e3a\u5b83\u5b8c\u5168\u57fa\u4e8e Qt\uff0c\u8de8\u5e73\u53f0\uff0c\u529f\u80fd\u5f3a\u5927\uff0c\u6709\u52a9\u4e8e\u4e86\u89e3 Qt \u7684\u8bed\u6cd5\uff0c\u4e8c\u662f Qt \u63d0\u4f9b\u4e86 Designer \u8bbe\u8ba1\u5de5\u5177\uff0c\u754c\u9762\u8bbe\u8ba1\u4e0a\u53ef\u4ee5\u62d6\u63a7\u4ef6\u641e\u5b9a\uff0c\u975e\u5e38\u65b9\u4fbf\uff0c\u5927\u5927\u8282\u7701\u65f6\u95f4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u65b0\u7248\u672c\uff1aPyQt 5.x"),(0,l.kt)("li",{parentName:"ul"},"\u5b98\u7f51\uff08\u53ef\u80fd\u9700\u8981\u79d1\u5b66\u4e0a\u7f51\uff09\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.riverbankcomputing.com/software/pyqt/"},"https://www.riverbankcomputing.com/software/pyqt/"))),(0,l.kt)("p",null,"\u5927\u5bb6\u611f\u5174\u8da3\u7684\u8bdd\uff0c\u9664\u53bb\u5b98\u7f51\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u53ef\u53c2\u8003\u7684\u8d44\u6e90\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/PyQt"},"Python Wiki: PyQt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/PyQt/Tutorials"},"PyQt/Tutorials")),(0,l.kt)("li",{parentName:"ul"},"PyQt5 tutorial\uff1a",(0,l.kt)("a",{parentName:"li",href:"http://zetcode.com/gui/pyqt5/"},"\u82f1\u6587\u539f\u7248")),(0,l.kt)("li",{parentName:"ul"},"PyQt4 tutorial\uff1a",(0,l.kt)("a",{parentName:"li",href:"http://www.qaulau.com/books/PyQt4_Tutorial/index.html"},"\u4e2d\u6587\u7248"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"http://zetcode.com/gui/pyqt4/"},"\u82f1\u6587\u539f\u7248")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://doc.qt.io/qt-5/"},"Qt5 Documentation")),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u6587\u53c2\u8003\u4e66\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.amazon.cn/dp/B075VWFYFH/ref=sr_1_1?ie=UTF8&qid=1543407852&sr=8-1&keywords=PyQt5%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E4%B8%8E%E5%AE%9E%E6%88%98"},"PyQt5 \u5feb\u901f\u5f00\u53d1\u4e0e\u5b9e\u6218")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://eric-ide.python-projects.org/"},"\u57fa\u4e8e Qt \u7684 Python IDE Eric"))),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"pip install pyqt5\n")),(0,l.kt)("p",null,"\u4e0b\u8f7d\u901f\u5ea6\u6162\u7684\u8bdd\uff0c\u53ef\u4ee5\u5230",(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyQt5/#files"},"PyPI"),"\u4e0a\u4e0b\u8f7d\u79bb\u7ebf\u7248\u5b89\u88c5\u3002\u53e6\u5916\u6211\u63a8\u8350\u4f7f\u7528 Qt Designer \u6765\u8bbe\u8ba1\u754c\u9762\uff0c\u5982\u679c\u4f60\u88c5\u7684\u662f Anaconda \u7684\u8bdd\uff0c\u5c31\u5df2\u7ecf\u81ea\u5e26\u4e86 designer.exe\uff0c\u4f8b\u5982\u6211\u7684\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"D:\\ProgramData\\Anaconda3\\Library\\bin\\"),"\uff0c\u5982\u679c\u662f\u666e\u901a\u7684 Python \u73af\u5883\uff0c\u5219\u9700\u8981\u81ea\u884c\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"pip install pyqt5-tools\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0cdesigner.exe \u5e94\u8be5\u5728 Python \u5b89\u88c5\u76ee\u5f55\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"xxx\\Lib\\site-packages\\pyqt5_tools\\"),"\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u751f\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u754c\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nfrom PyQt5.QtWidgets import QApplication, QWidget\n\nif __name__ == '__main__':\n    app = QApplication(sys.argv)\n\n    window = QWidget()\n    window.setWindowTitle('Hello World!')\n    window.show()\n\n    sys.exit(app.exec_())\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_hello_world_sample.jpg",alt:null})),(0,l.kt)("h3",{id:"\u754c\u9762\u8bbe\u8ba1"},"\u754c\u9762\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u6311\u6218\u5185\u5bb9\uff0c\u89e3\u51b3\u601d\u8def\u662f\u4f7f\u7528 Qt Designer \u6765\u8bbe\u8ba1\u754c\u9762\uff0c\u4f7f\u7528 Python \u5b8c\u6210\u4ee3\u7801\u903b\u8f91\u3002\u6253\u5f00 designer.exe\uff0c\u4f1a\u5f39\u51fa\u521b\u5efa\u65b0\u7a97\u4f53\u7684\u7a97\u53e3\uff0c\u6211\u4eec\u76f4\u63a5\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"p"},"create"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_designer_main_ui.jpg",alt:null})),(0,l.kt)("p",null,"\u754c\u9762\u7684\u5de6\u4fa7\u662f Qt \u7684\u5e38\u7528\u63a7\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"Widget Box"),"\uff0c\u53f3\u4fa7\u6709\u4e00\u4e2a\u63a7\u4ef6\u5c5e\u6027\u7a97\u53e3",(0,l.kt)("inlineCode",{parentName:"p"},"Property Editor"),"\uff0c\u5176\u4f59\u6682\u65f6\u7528\u4e0d\u5230\u3002\u672c\u4f8b\u4e2d\u6211\u4eec\u53ea\u7528\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"Push Button"),"\u63a7\u4ef6\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Label"),"\u63a7\u4ef6\uff1a\u6700\u4e0a\u9762\u7684\u4e09\u4e2a Label \u63a7\u4ef6\u7528\u4e8e\u663e\u793a\u56fe\u7247\uff0c\u53ef\u4ee5\u5728\u5c5e\u6027\u7a97\u53e3\u8c03\u6574\u5b83\u7684\u5927\u5c0f\uff0c\u6211\u4eec\u7edf\u4e00\u8c03\u6574\u5230 150\xd7150\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_main_ui_rough.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_designer_property_windows.jpg",alt:null})),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u63a7\u4ef6\u4e0a\u663e\u793a\u7684\u6587\u5b57",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"\u5c5e\u6027\u548c\u63a7\u4ef6\u7684\u540d\u5b57",(0,l.kt)("inlineCode",{parentName:"p"},"objectName"),"\u5c5e\u6027\u9700\u8981\u4fee\u6539\uff0c\u4fbf\u4e8e\u663e\u793a\u548c\u4ee3\u7801\u8c03\u7528\u3002\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u6211\u63a8\u8350\u7684\u547d\u540d\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u63a7\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u663e\u793a\u5185\u5bb9 text"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u63a7\u4ef6\u540d objectName"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PushButton"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6253\u5f00\u6444\u50cf\u5934"),(0,l.kt)("td",{parentName:"tr",align:"center"},"btnOpenCamera")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PushButton"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6355\u83b7\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:"center"},"btnCapture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PushButton"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6253\u5f00\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:"center"},"btnReadImage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PushButton"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7070\u5ea6\u5316"),(0,l.kt)("td",{parentName:"tr",align:"center"},"btnGray")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"PushButton"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u9608\u503c\u5206\u5272","(","Otsu",")"),(0,l.kt)("td",{parentName:"tr",align:"center"},"btnThreshold")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Label"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6444\u50cf\u5934"),(0,l.kt)("td",{parentName:"tr",align:"center"},"labelCamera")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Label"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6355\u83b7\u56fe"),(0,l.kt)("td",{parentName:"tr",align:"center"},"labelCapture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Label"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7ed3\u679c\u56fe"),(0,l.kt)("td",{parentName:"tr",align:"center"},"labelResult")))),(0,l.kt)("p",null,"\u8fd9\u6837\u5927\u81f4\u754c\u9762\u5c31\u51fa\u6765\u4e86\uff0c\u5f88\u7b80\u5355\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_main_ui_word.jpg",alt:null})),(0,l.kt)("h3",{id:"\u6309\u94ae\u4e8b\u4ef6"},"\u6309\u94ae\u4e8b\u4ef6"),(0,l.kt)("p",null,'\u5982\u679c\u4f60\u4e4b\u524d\u6709\u8fc7\u4e00\u4e9b GUI \u5f00\u53d1\u7ecf\u9a8c\uff0c\u6bd4\u5982 MFC\uff0cWinForm \u7b49\uff0c\u5c31\u77e5\u9053 GUI \u662f\u901a\u8fc7\u4e8b\u4ef6\u9a71\u52a8\u7684\uff0c\u4ec0\u4e48\u610f\u601d\u5462\uff1f\u6bd4\u5982\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u8bbe\u8ba1\u597d\u4e86\u754c\u9762\uff0c\u63a5\u4e0b\u6765\u5c31\u9700\u8981\u5b9e\u73b0"\u6253\u5f00\u6444\u50cf\u5934"\u5230"\u9608\u503c\u5206\u5272"\u8fd9 5 \u4e2a\u6309\u94ae\u7684\u529f\u80fd\uff0c\u4e5f\u5c31\u662f\u7ed9\u6bcf\u4e2a\u6309\u94ae\u6307\u5b9a\u4e00\u4e2a"\u51fd\u6570"\uff0c\u903b\u8f91\u4ee3\u7801\u5199\u5728\u8fd9\u4e2a\u51fd\u6570\u91cc\u9762\u3002\u8fd9\u79cd\u51fd\u6570\u5c31\u79f0\u4e3a\u4e8b\u4ef6\uff0cQt \u4e2d\u79f0\u4e3a\u69fd\u8fde\u63a5\u3002'),(0,l.kt)("p",null,"\u70b9\u51fb Designer \u5de5\u5177\u680f\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Edit Signals/Slots"),"\u6309\u94ae\uff0c\u8fdb\u5165\u69fd\u51fd\u6570\u7f16\u8f91\u754c\u9762\uff0c\u70b9\u51fb\u65c1\u8fb9\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Edit Widgets"),"\u53ef\u4ee5\u6062\u590d\u6b63\u5e38\u89c6\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_designer_edit_singals_slots.jpg",alt:null})),(0,l.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u6309\u94ae\u5e76\u62d6\u52a8\uff0c\u5f53\u4ea7\u751f\u7c7b\u4f3c\u4e8e\u7535\u8def\u4e2d\u7684\u63a5\u5730\u7b26\u53f7\u65f6\u91ca\u653e\u9f20\u6807\uff0c\u53c2\u770b\u4e0b\u9762\u52a8\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_how_to_create_slots.gif",alt:null})),(0,l.kt)("p",null,'\u5728\u5f39\u51fa\u7684\u914d\u7f6e\u7a97\u53e3\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u5de6\u4fa7\u662f\u6309\u94ae\u7684\u5e38\u7528\u4e8b\u4ef6\uff0c\u6211\u4eec\u9009\u62e9\u70b9\u51fb\u4e8b\u4ef6"clicked()"\uff0c\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a"btnOpenCamera_Clicked()"\u7684\u69fd\u51fd\u6570\uff1a'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_how_to_create_slots2.gif",alt:null})),(0,l.kt)("p",null,"\u91cd\u590d\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u7ed9\u4e94\u4e2a\u6309\u94ae\u6dfb\u52a0\u4e94\u4e2a\u69fd\u51fd\u6570\uff0c\u6700\u7ec8\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_main_click_event.jpg",alt:null})),(0,l.kt)("p",null,"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u754c\u9762\u8bbe\u8ba1\u7684\u6240\u6709\u5de5\u4f5c\uff0c\u6309\u4e0b Ctrl+S \u4fdd\u5b58\u5f53\u524d\u7a97\u53e3\u4e3a.ui \u6587\u4ef6\u3002.ui \u6587\u4ef6\u5176\u5b9e\u662f\u6309\u7167 XML \u683c\u5f0f\u6807\u8bb0\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u7528\u6587\u672c\u7f16\u8f91\u5668\u5c06.ui \u6587\u4ef6\u6253\u5f00\u770b\u770b\u3002"),(0,l.kt)("h3",{id:"ui-\u6587\u4ef6\u8f6c-py-\u4ee3\u7801"},"ui \u6587\u4ef6\u8f6c py \u4ee3\u7801"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u662f\u7528 Designer \u5de5\u5177\u8bbe\u8ba1\u51fa\u7684\u754c\u9762\uff0c\u5e76\u4e0d\u662f\u7528 Python \u4ee3\u7801\u6572\u51fa\u6765\u7684\uff0c\u6240\u4ee5\u8981\u60f3\u771f\u6b63\u8fd0\u884c\uff0c\u9700\u8981\u4f7f\u7528 pyuic5 \u5c06 ui \u6587\u4ef6\u8f6c\u6210 py \u6587\u4ef6\u3002pyuic5.exe \u9ed8\u8ba4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"%\\Scripts\\"),"\u4e0b\uff0c\u6bd4\u5982\u6211\u7684\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"D:\\ProgramData\\Anaconda3\\Scripts\\"),"\u3002"),(0,l.kt)("p",null,"\u6253\u5f00 cmd \u547d\u4ee4\u884c\uff0c\u5207\u6362\u5230 ui \u6587\u4ef6\u7684\u4fdd\u5b58\u76ee\u5f55\u3002Windows \u4e0b\u6709\u4e2a\u5c0f\u6280\u5de7\uff0c\u53ef\u4ee5\u5728\u76ee\u5f55\u7684\u5730\u5740\u680f\u8f93\u5165 cmd\uff0c\u4e00\u6b65\u5207\u6362\u5230\u5f53\u524d\u76ee\u5f55\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt5_pyuic_quick_cmd.gif",alt:null})),(0,l.kt)("p",null,"\u7136\u540e\u6267\u884c\u8fd9\u6761\u6307\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"pyuic5 -o mainForm.py using_pyqt_create_ui.ui\n")),(0,l.kt)("p",null,'\u5982\u679c\u51fa\u73b0 pyuic5 \u4e0d\u662f\u5185\u90e8\u547d\u4ee4\u7684\u9519\u8bef\uff0c\u8bf4\u660e pyuic5 \u7684\u8def\u5f84\u6ca1\u6709\u5728\u73af\u5883\u53d8\u91cf\u91cc\uff0c\u6dfb\u52a0\u4e0b\u5c31\u597d\u4e86\u3002\u6267\u884c\u6b63\u5e38\u7684\u8bdd\uff0c\u5c31\u4f1a\u751f\u6210 mainForm.py \u6587\u4ef6\uff0c\u91cc\u9762\u5e94\u8be5\u5305\u542b\u4e00\u4e2a\u540d\u4e3a"Ui_MainWindow"\u7684\u7c7b\u3002'),(0,l.kt)("h3",{id:"\u7f16\u5199\u903b\u8f91\u4ee3\u7801"},"\u7f16\u5199\u903b\u8f91\u4ee3\u7801"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"mainForm.py \u6587\u4ef6\u662f\u6839\u636e ui \u6587\u4ef6\u751f\u6210\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u751f\u6210\u4f1a\u8986\u76d6\u6389"),"\u3002\u6240\u4ee5\u4e3a\u4e86\u4f7f\u754c\u9762\u4e0e\u903b\u8f91\u5206\u79bb\uff0c\u6211\u4eec\u9700\u8981\u65b0\u5efa\u4e00\u4e2a\u903b\u8f91\u6587\u4ef6\u3002")),(0,l.kt)("p",null,'\u5728\u540c\u4e00\u5de5\u4f5c\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a"mainEntry.py"\u7684\u6587\u4ef6\uff0c\u5b58\u653e\u903b\u8f91\u4ee3\u7801\u3002\u4ee3\u7801\u4e2d\u7684\u6bcf\u90e8\u5206\u6211\u90fd\u5199\u5f97\u6bd4\u8f83\u72ec\u7acb\uff0c\u6ca1\u6709\u5c01\u88c5\u6210\u51fd\u6570\uff0c\u4fbf\u4e8e\u7406\u89e3\u3002\u4ee3\u7801\u770b\u4e0a\u53bb\u5f88\u957f\uff0c\u4f46\u5f88\u7b80\u5355\uff0c\u53ef\u4ee5\u6bcf\u4e2a\u6a21\u5757\u5355\u72ec\u770b\uff0c\u6709\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u6211\u505a\u4e86\u6ce8\u91ca\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nimport cv2\n\nfrom PyQt5 import QtCore, QtGui, QtWidgets\nfrom PyQt5.QtCore import *\nfrom PyQt5.QtGui import *\nfrom PyQt5.QtWidgets import QFileDialog, QMainWindow\n\nfrom mainForm import Ui_MainWindow\n\n\nclass PyQtMainEntry(QMainWindow, Ui_MainWindow):\n    def __init__(self):\n        super().__init__()\n        self.setupUi(self)\n\n        self.camera = cv2.VideoCapture(0)\n        self.is_camera_opened = False  # \u6444\u50cf\u5934\u6709\u6ca1\u6709\u6253\u5f00\u6807\u8bb0\n\n        # \u5b9a\u65f6\u5668\uff1a30ms \u6355\u83b7\u4e00\u5e27\n        self._timer = QtCore.QTimer(self)\n        self._timer.timeout.connect(self._queryFrame)\n        self._timer.setInterval(30)\n\n    def btnOpenCamera_Clicked(self):\n        '''\n        \u6253\u5f00\u548c\u5173\u95ed\u6444\u50cf\u5934\n        '''\n        self.is_camera_opened = ~self.is_camera_opened\n        if self.is_camera_opened:\n            self.btnOpenCamera.setText(\"\u5173\u95ed\u6444\u50cf\u5934\")\n            self._timer.start()\n        else:\n            self.btnOpenCamera.setText(\"\u6253\u5f00\u6444\u50cf\u5934\")\n            self._timer.stop()\n\n    def btnCapture_Clicked(self):\n        '''\n        \u6355\u83b7\u56fe\u7247\n        '''\n        # \u6444\u50cf\u5934\u672a\u6253\u5f00\uff0c\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\n        if not self.is_camera_opened:\n            return\n\n        self.captured = self.frame\n\n        # \u540e\u9762\u8fd9\u51e0\u884c\u4ee3\u7801\u51e0\u4e4e\u90fd\u4e00\u6837\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5c01\u88c5\u6210\u4e00\u4e2a\u51fd\u6570\n        rows, cols, channels = self.captured.shape\n        bytesPerLine = channels * cols\n        # Qt \u663e\u793a\u56fe\u7247\u65f6\uff0c\u9700\u8981\u5148\u8f6c\u6362\u6210 QImgage \u7c7b\u578b\n        QImg = QImage(self.captured.data, cols, rows, bytesPerLine, QImage.Format_RGB888)\n        self.labelCapture.setPixmap(QPixmap.fromImage(QImg).scaled(\n            self.labelCapture.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))\n\n    def btnReadImage_Clicked(self):\n        '''\n        \u4ece\u672c\u5730\u8bfb\u53d6\u56fe\u7247\n        '''\n        # \u6253\u5f00\u6587\u4ef6\u9009\u53d6\u5bf9\u8bdd\u6846\n        filename,  _ = QFileDialog.getOpenFileName(self, '\u6253\u5f00\u56fe\u7247')\n        if filename:\n            self.captured = cv2.imread(str(filename))\n            # OpenCV \u56fe\u50cf\u4ee5 BGR \u901a\u9053\u5b58\u50a8\uff0c\u663e\u793a\u65f6\u9700\u8981\u4ece BGR \u8f6c\u5230 RGB\n            self.captured = cv2.cvtColor(self.captured, cv2.COLOR_BGR2RGB)\n\n            rows, cols, channels = self.captured.shape\n            bytesPerLine = channels * cols\n            QImg = QImage(self.captured.data, cols, rows, bytesPerLine, QImage.Format_RGB888)\n            self.labelCapture.setPixmap(QPixmap.fromImage(QImg).scaled(\n                self.labelCapture.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))\n\n    def btnGray_Clicked(self):\n        '''\n        \u7070\u5ea6\u5316\n        '''\n        # \u5982\u679c\u6ca1\u6709\u6355\u83b7\u56fe\u7247\uff0c\u5219\u4e0d\u6267\u884c\u64cd\u4f5c\n        if not hasattr(self, \"captured\"):\n            return\n\n        self.cpatured = cv2.cvtColor(self.captured, cv2.COLOR_RGB2GRAY)\n\n        rows, columns = self.cpatured.shape\n        bytesPerLine = columns\n        # \u7070\u5ea6\u56fe\u662f\u5355\u901a\u9053\uff0c\u6240\u4ee5\u9700\u8981\u7528 Format_Indexed8\n        QImg = QImage(self.cpatured.data, columns, rows, bytesPerLine, QImage.Format_Indexed8)\n        self.labelResult.setPixmap(QPixmap.fromImage(QImg).scaled(\n            self.labelResult.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))\n\n    def btnThreshold_Clicked(self):\n        '''\n        Otsu \u81ea\u52a8\u9608\u503c\u5206\u5272\n        '''\n        if not hasattr(self, \"captured\"):\n            return\n\n        _, self.cpatured = cv2.threshold(\n            self.cpatured, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\n\n        rows, columns = self.cpatured.shape\n        bytesPerLine = columns\n        # \u9608\u503c\u5206\u5272\u56fe\u4e5f\u662f\u5355\u901a\u9053\uff0c\u4e5f\u9700\u8981\u7528 Format_Indexed8\n        QImg = QImage(self.cpatured.data, columns, rows, bytesPerLine, QImage.Format_Indexed8)\n        self.labelResult.setPixmap(QPixmap.fromImage(QImg).scaled(\n            self.labelResult.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))\n\n    @QtCore.pyqtSlot()\n    def _queryFrame(self):\n        '''\n        \u5faa\u73af\u6355\u83b7\u56fe\u7247\n        '''\n        ret, self.frame = self.camera.read()\n\n        img_rows, img_cols, channels = self.frame.shape\n        bytesPerLine = channels * img_cols\n\n        cv2.cvtColor(self.frame, cv2.COLOR_BGR2RGB, self.frame)\n        QImg = QImage(self.frame.data, img_cols, img_rows, bytesPerLine, QImage.Format_RGB888)\n        self.labelCamera.setPixmap(QPixmap.fromImage(QImg).scaled(\n            self.labelCamera.size(), Qt.KeepAspectRatio, Qt.SmoothTransformation))\n\n\nif __name__ == \"__main__\":\n    app = QtWidgets.QApplication(sys.argv)\n    window = PyQtMainEntry()\n    window.show()\n    sys.exit(app.exec_())\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_pyqt_gui_sample2.jpg",alt:null})),(0,l.kt)("p",null,"\u672c\u6587\u53ea\u662f\u629b\u7816\u5f15\u7389\uff0c\u4ecb\u7ecd\u4e86 PyQt5 \u7684\u7b80\u5355\u4f7f\u7528\uff0c\u60f3\u8981\u6df1\u5165\u5b66\u4e60\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u5f00\u5934\u7684\u53c2\u8003\u8d44\u6599\u5662","(","\u25cf\u02c7\u2200\u02c7\u25cf",")"),(0,l.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Challenge-02-Create-GUI-with-PyQt5"},"\u672c\u8282\u6e90\u7801"))))}c.isMDXComponent=!0}}]);