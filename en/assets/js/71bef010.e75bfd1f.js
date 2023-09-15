"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[369],{6110:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var l=i(87462),n=(i(67294),i(3905));i(16758);const a={},p=void 0,s={unversionedId:"artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72",id:"artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72",title:"\u4e00\u952e\u90e8\u7f72",description:'\u968f\u7740\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u8ffd\u4e0a"AI\u7ed8\u56fe"\u8fd9\u4e00\u70ed\u6f6e\uff0cStable Diffusion \u7684\u53d7\u6b22\u8fce\u7a0b\u5ea6\u7ee7\u7eed\u7206\u70b8\u5f0f\u589e\u957f\u3002',source:"@site/docs/artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72.md",sourceDirName:"artificial-intelligence/ai-paint",slug:"/artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72",permalink:"/en/docs/artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"ai",previous:{title:"opencv\u57fa\u7840\u65b9\u6cd5",permalink:"/en/docs/artificial-intelligence/opencv/basic-method"},next:{title:"\u7b80\u5355\u5165\u95e8",permalink:"/en/docs/artificial-intelligence/ai-paint/\u7b80\u5355\u5165\u95e8"}},u={},r=[{value:"Stable-Diffusion-WEBUI",id:"stable-diffusion-webui",level:2},{value:"txt2img\u90e8\u5206\u4ecb\u7ecd",id:"txt2img\u90e8\u5206\u4ecb\u7ecd",level:2},{value:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206\uff1a",id:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206",level:3},{value:"\u4f18\u5316\u65b9\u6cd5\u90e8\u5206\uff1a",id:"\u4f18\u5316\u65b9\u6cd5\u90e8\u5206",level:3},{value:"img2img\u90e8\u5206\u4ecb\u7ecd",id:"img2img\u90e8\u5206\u4ecb\u7ecd",level:2},{value:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206\uff1a",id:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206-1",level:3},{value:"\u8c03\u6574\u90e8\u5206",id:"\u8c03\u6574\u90e8\u5206",level:3},{value:"Extras\u90e8\u5206\u4ecb\u7ecd",id:"extras\u90e8\u5206\u4ecb\u7ecd",level:3},{value:"PNG Info\u90e8\u5206\u4ecb\u7ecd",id:"png-info\u90e8\u5206\u4ecb\u7ecd",level:3}],o={toc:r};function d(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,l.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'\u968f\u7740\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u8ffd\u4e0a"AI\u7ed8\u56fe"\u8fd9\u4e00\u70ed\u6f6e\uff0cStable Diffusion \u7684\u53d7\u6b22\u8fce\u7a0b\u5ea6\u7ee7\u7eed\u7206\u70b8\u5f0f\u589e\u957f\u3002'),(0,n.kt)("p",{parentName:"admonition"},'\u4f5c\u4e3a\u6a21\u578b\u516c\u5f00\u4e14\u6548\u679c\u6781\u4f73\u7684\u6269\u6563\u6a21\u578bStable Diffusion\u662fCompVis\u7814\u7a76\u56e2\u961f\u4e0a\u4e2a\u6708(8\u6708\u5e95)\u53d1\u5e03\u7684\u3002\u8be5\u6a21\u578b\u4f7f\u7528 LAION 5B \u6570\u636e\u96c6\u7684\u5b50\u96c6\u8fdb\u884c\u8bad\u7ec3\uff0c\u5305\u62ec\u7528\u4e8e\u521d\u59cb\u8bad\u7ec3\u7684\u9ad8\u5206\u8fa8\u7387\u5b50\u96c6\u548c\u7528\u4e8e\u540e\u7eed\u5404\u79cd\u5f00\u53d1\u8005\u63d0\u5347"\u7f8e\u5b66"\u5b55\u80b2\u51fa\u6765\u7684\u7684\u5404\u79cd\u9488\u5bf9\u6027\u6a21\u578b\u3002')),(0,n.kt)("h2",{id:"stable-diffusion-webui"},"Stable-Diffusion-WEBUI"),(0,n.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui"},"https://github.com/AUTOMATIC1111/stable-diffusion-webui")),(0,n.kt)("p",null,"\u4e00\u952e\u542f\u52a8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./webui.sh\n")),(0,n.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72\u4f1a\u82b1\u8d39\u8f83\u4e45\u65f6\u95f4\uff08\u5efa\u8bae\u8d70\u4e0b\u4ee3\u7406\uff0c\u5426\u5219git clone\u4f1a\u975e\u5e38\u6162\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=lanch.py",title:"lanch.py"},"def setGitProxy():\n    run('git config --global http.proxy 127.0.0.1:7890')\n    run('git config --global httpx.proxy 127.0.0.1:7890')\n\n\ndef prepare_environment():\n...\nsetGitProxy()\n...\n")),(0,n.kt)("p",null,"\u642d\u5efa\u5b8c\u6210\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u5230\u4e0b\u9762\u7684\u754c\u9762\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202302242213211.png",alt:null})),(0,n.kt)("p",null,"\u901a\u8fc7\u8c03\u8282\u4e0d\u540c\u53c2\u6570\u53ef\u4ee5\u751f\u6210\u4e0d\u540c\u6548\u679c\uff0c\u6211\u8fd9\u91cc\u6839\u636e\u81ea\u5df1\u7684\u4f7f\u7528\u7406\u89e3\u8fdb\u884c\u4e00\u4e9b\u8bf4\u660e\uff0c\u5e0c\u671b\u5bf9\u7528\u6237\u6709\u5e2e\u52a9\u3002"),(0,n.kt)("p",null,"\u8bbf\u95ee\u5185\u5bb9\u540e\u5206\u4e3a\u51e0\u4e2a\u5927\u7684\u6a21\u5757;"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"txt2img --- \u6807\u51c6\u7684\u6587\u5b57\u751f\u6210\u56fe\u50cf\uff1b"),(0,n.kt)("li",{parentName:"ul"},"img2img --- \u6839\u636e\u56fe\u50cf\u6210\u6587\u8303\u672c\u3001\u7ed3\u5408\u6587\u5b57\u751f\u6210\u56fe\u50cf\uff1b"),(0,n.kt)("li",{parentName:"ul"},"Extras --- \u4f18\u5316(\u6e05\u6670\u3001\u6269\u5c55)\u56fe\u50cf\uff1b"),(0,n.kt)("li",{parentName:"ul"},"PNG Info --- \u56fe\u50cf\u57fa\u672c\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"Checkpoint Merger --- \u6a21\u578b\u5408\u5e76"),(0,n.kt)("li",{parentName:"ul"},"Textual inversion --- \u8bad\u7ec3\u6a21\u578b\u5bf9\u4e8e\u67d0\u79cd\u56fe\u50cf\u98ce\u683c"),(0,n.kt)("li",{parentName:"ul"},"Settings --- \u9ed8\u8ba4\u53c2\u6570\u4fee\u6539")),(0,n.kt)("h2",{id:"txt2img\u90e8\u5206\u4ecb\u7ecd"},"txt2img\u90e8\u5206\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206"},"\u5185\u5bb9\u8f93\u5165\u90e8\u5206\uff1a"),(0,n.kt)("p",null,"prompt \u8be5\u90e8\u5206\u4e3b\u8981\u5c31\u662f\u5bf9\u4e8e\u56fe\u50cf\u8fdb\u884c\u63cf\u8ff0\uff0c\u6709\u5185\u5bb9\u98ce\u683c\u7b49\u4fe1\u606f\u8fdb\u884c\u63cf\u8ff0\u3002\u540e\u9762\u7684\u753b\u677f\u53ef\u4ee5\u4e00\u4e9b\u968f\u673a\u7684\u98ce\u683c\u3001\u4e0b\u9762\u7bad\u5934\u662f\u4e4b\u524d\u4efb\u52a1\u7684\u53c2\u6570\uff1b"),(0,n.kt)("p",null,"Negative prompt \u8fd9\u4e2a\u4e3b\u8981\u662f\u63d0\u4f9b\u7ed9\u6a21\u578b\uff0c\u6211\u4e0d\u60f3\u8981\u4ec0\u4e48\u6837\u7684\u98ce\u683c\uff1b\u7279\u522b\u5bf9\u4e8e\u56fe\u4e0a\u51fa\u73b0\u591a\u4e2a\u4eba\u7684\u60c5\u51b5\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc72girls\u7b49\u4fe1\u606f\u8fdb\u884c\u6d88\u9664\uff1b"),(0,n.kt)("h3",{id:"\u4f18\u5316\u65b9\u6cd5\u90e8\u5206"},"\u4f18\u5316\u65b9\u6cd5\u90e8\u5206\uff1a"),(0,n.kt)("p",null,"Sampling Steps diffusion model \u751f\u6210\u56fe\u7247\u7684\u8fed\u4ee3\u6b65\u6570\uff0c\u6bcf\u591a\u4e00\u6b21\u8fed\u4ee3\u90fd\u4f1a\u7ed9 AI \u66f4\u591a\u7684\u673a\u4f1a\u53bb\u6bd4\u5bf9 prompt \u548c \u5f53\u524d\u7ed3\u679c\uff0c\u53bb\u8c03\u6574\u56fe\u7247\u3002\u66f4\u9ad8\u7684\u6b65\u6570\u9700\u8981\u82b1\u8d39\u66f4\u591a\u7684\u8ba1\u7b97\u65f6\u95f4\uff0c\u4e5f\u76f8\u5bf9\u66f4\u8d35\u3002\u4f46\u4e0d\u4e00\u5b9a\u610f\u5473\u7740\u66f4\u597d\u7684\u7ed3\u679c\u3002\u5f53\u7136\u8fed\u4ee3\u6b65\u6570\u4e0d\u8db3\uff08\u5c11\u4e8e 50\uff09\u80af\u5b9a\u4f1a\u964d\u4f4e\u7ed3\u679c\u7684\u56fe\u50cf\u8d28\u91cf\uff1b"),(0,n.kt)("p",null,"Sampling method \u6269\u6563\u53bb\u566a\u7b97\u6cd5\u7684\u91c7\u6837\u6a21\u5f0f\uff0c\u4f1a\u5e26\u6765\u4e0d\u4e00\u6837\u7684\u6548\u679c\uff0cddim \u548c pms(plms) \u7684\u7ed3\u679c\u5dee\u5f02\u4f1a\u5f88\u5927\uff0c\u5f88\u591a\u4eba\u8fd8\u4f1a\u4f7f\u7528euler\uff0c\u5177\u4f53\u6ca1\u6709\u7cfb\u7edf\u6d4b\u8bd5\uff1b"),(0,n.kt)("p",null,"Width\u3001Height \u56fe\u50cf\u957f\u5bbd\uff0c\u53ef\u4ee5\u901a\u8fc7send to extras \u8fdb\u884c\u6269\u5927\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u5efa\u8bae\u8bbe\u7f6e\u592a\u5927","[\u663e\u5b58\u5c0f\u7684\u7279\u522b\u6ce8\u610f]","\uff1b"),(0,n.kt)("p",null,"Restore faces \u4f18\u5316\u9762\u90e8\uff0c\u7ed8\u5236\u9762\u90e8\u56fe\u50cf\u7279\u522b\u6ce8\u610f\uff1b"),(0,n.kt)("p",null,"Tiling \u751f\u6210\u4e00\u4e2a\u53ef\u4ee5\u5e73\u94fa\u7684\u56fe\u50cf\uff1b"),(0,n.kt)("p",null,"Highres. fix \u4f7f\u7528\u4e24\u4e2a\u6b65\u9aa4\u7684\u8fc7\u7a0b\u8fdb\u884c\u751f\u6210\uff0c\u4ee5\u8f83\u5c0f\u7684\u5206\u8fa8\u7387\u521b\u5efa\u56fe\u50cf\uff0c\u7136\u540e\u5728\u4e0d\u6539\u53d8\u6784\u56fe\u7684\u60c5\u51b5\u4e0b\u6539\u8fdb\u5176\u4e2d\u7684\u7ec6\u8282\uff0c\u9009\u62e9\u8be5\u90e8\u5206\u4f1a\u6709\u4e24\u4e2a\u65b0\u7684\u53c2\u6570 Scale latent \u5728\u6f5c\u7a7a\u95f4\u4e2d\u5bf9\u56fe\u50cf\u8fdb\u884c\u7f29\u653e\u3002\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u4ece\u6f5c\u5728\u7684\u8868\u8c61\u4e2d\u4ea7\u751f\u5b8c\u6574\u7684\u56fe\u50cf\uff0c\u5c06\u5176\u5347\u7ea7\uff0c\u7136\u540e\u5c06\u5176\u79fb\u56de\u6f5c\u5728\u7684\u7a7a\u95f4\u3002Denoising strength \u51b3\u5b9a\u7b97\u6cd5\u5bf9\u56fe\u50cf\u5185\u5bb9\u7684\u4fdd\u7559\u7a0b\u5ea6\u3002\u57280\u5904\uff0c\u4ec0\u4e48\u90fd\u4e0d\u4f1a\u6539\u53d8\uff0c\u800c\u57281\u5904\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a\u4e0d\u76f8\u5173\u7684\u56fe\u50cf\uff1b"),(0,n.kt)("p",null,"Batch count\u3001 Batch size \u90fd\u662f\u751f\u6210\u51e0\u5f20\u56fe\uff0c\u524d\u8005\u8ba1\u7b97\u65f6\u95f4\u957f\uff0c\u540e\u8005\u9700\u8981\u663e\u5b58\u5927\uff1b"),(0,n.kt)("p",null,"CFG Scale \u5206\u7c7b\u5668\u81ea\u7531\u5f15\u5bfc\u5c3a\u5ea6\u2014\u2014\u56fe\u50cf\u4e0e\u63d0\u793a\u7b26\u7684\u4e00\u81f4\u7a0b\u5ea6\u2014\u2014\u8d8a\u4f4e\u7684\u503c\u4ea7\u751f\u8d8a\u6709\u521b\u610f\u7684\u7ed3\u679c\uff1b"),(0,n.kt)("p",null,"Seed \u79cd\u5b50\u6570\uff0c\u53ea\u8981\u4e2d\u5b50\u6570\u4e00\u6837\uff0c\u53c2\u6570\u4e00\u81f4\u3001\u6a21\u578b\u4e00\u6837\u56fe\u50cf\u5c31\u80fd\u91cd\u65b0\uff1b"),(0,n.kt)("h2",{id:"img2img\u90e8\u5206\u4ecb\u7ecd"},"img2img\u90e8\u5206\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u8fd9\u90e8\u5206\u53c2\u6570\u5f88\u591a\u4e0etxt2img\u7c7b\u4f3c\uff0c\u8fd9\u91cc\u4e3b\u8981\u8bf4\u660e\u4e00\u4e0b\u4e0d\u540c\u90e8\u5206\uff1b"),(0,n.kt)("h3",{id:"\u5185\u5bb9\u8f93\u5165\u90e8\u5206-1"},"\u5185\u5bb9\u8f93\u5165\u90e8\u5206\uff1a"),(0,n.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u589e\u52a0\u7684\u662f\u8981\u6a21\u4eff\u7684\u56fe\u7247\uff0c\u53ef\u4ee5\u662f\u624b\u7ed8\u7684\u3001\u4e5f\u53ef\u4ee5\u662f\u7c7b\u4f3c\u7684\uff1b"),(0,n.kt)("p",null,"\u5176\u4ed6\u6587\u5b57\u4fe1\u606f\u7c7b\u4f3c\uff0c\u8fd9\u91cc\u4f9d\u7136\u662f\u63cf\u8ff0\u8d8a\u51c6\u786e\u8d8a\u597d\uff1b"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5176\u4e2d\u53c2\u6570\u4e3b\u8981\u662f\u56fe\u50cf\u662f\u5426\u8981\u4fdd\u5b58\u76f8\u540c\u5c3a\u5bf8\uff1a"),(0,n.kt)("p",null,"Just resize\u3001 Crop and resize\u3001 Resize and fill \u8fd9\u4e09\u79cd\u6a21\u5f0f\u4fdd\u8bc1\u56fe\u8f93\u51fa\u6548\u679c\uff0c\u56e0\u4e3a\u4e0b\u9762\u4f1a\u6709\u65b0\u7684\u5c3a\u5bf8\uff0c\u662f\u586b\u5145\u8fd8\u662f\u6027\u5bf9\u5e94\u7f29\u653e\uff1b"),(0,n.kt)("h3",{id:"\u8c03\u6574\u90e8\u5206"},"\u8c03\u6574\u90e8\u5206"),(0,n.kt)("p",null,"\u8fd9\u90e8\u5206\u5927\u90e8\u5206\u53c2\u6570\u4e0e\u4e0a\u9762\u4e00\u81f4\uff0c\u4e3b\u8981\u65b0\u589e\u52a0\u7684\u662f\uff1a"),(0,n.kt)("p",null,"Denoising strength \u4e0e\u539f\u56fe\u4e00\u81f4\u6027\u7684\u7a0b\u5ea6\uff0c\u4e00\u822c\u5927\u4e8e0.7\u51fa\u6765\u7684\u90fd\u662f\u65b0\u6548\u679c\uff0c\u5c0f\u4e8e0.3\u57fa\u672c\u5c31\u4f1a\u539f\u56fe\u7f1d\u7f1d\u8865\u8865\uff1b"),(0,n.kt)("h3",{id:"extras\u90e8\u5206\u4ecb\u7ecd"},"Extras\u90e8\u5206\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u8be5\u90e8\u5206\u4e3b\u8981\u5c06\u56fe\u50cf\u8fdb\u884c\u4f18\u5316\uff0c\u5176\u4e2d\u5f88\u591a\u65b9\u6cd5\u7684\u6a21\u578b\u4f7f\u7528\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u4e0b\u8f7d\uff0c\u5f88\u5bb9\u6613\u4e0b\u8f7d\u5931\u8d25\u5bfc\u81f4\u62a5\u9519\u3002"),(0,n.kt)("p",null,"\u56fe\u7247\u5bfc\u5165\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u6a21\u5757\u4e2d\u7684send to extras\u76f4\u63a5\u4f7f\u7528\uff1b"),(0,n.kt)("p",null,"\u4e0b\u9762\u76f8\u5173\u53c2\u6570\u4e3b\u8981\u662f\u5bf9\u4e8e\u56fe\u50cf\u7684\u4f18\u5316\u7b49\u5de5\u4f5c\uff0c\u5177\u4f53\u4f7f\u7528\u5927\u5bb6\u53ef\u4ee5\u81ea\u5df1\u6d4b\u8bd5\u3002"),(0,n.kt)("p",null,"GFPGAN visibility \u4e3b\u8981\u5c31\u662f\u5bf9\u4e8e\u56fe\u50cf\u6e05\u6670\u5ea6\u8fdb\u884c\u4f18\u5316\uff0c\u4f8b\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,"\u5176\u4ed6\u53c2\u6570\u4f7f\u7528\u4e0d\u591a\uff0c\u8fd9\u91cc\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\u3002"),(0,n.kt)("h3",{id:"png-info\u90e8\u5206\u4ecb\u7ecd"},"PNG Info\u90e8\u5206\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u8be5\u90e8\u5206\u4e3b\u8981\u8bf4\u660e\u56fe\u50cf\u5927\u5c0f\u7b49\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u540e\u9762\u7684\u51e0\u4e2a\u6a21\u5757\u57fa\u672c\u662f\u8c03\u6574\u6a21\u578b\u4f55\u5982\u4f55\u8bad\u7ec3\u65b0\u7684prompt\u7684\uff0c\u8fd9\u91cc\u5c31\u4e0d\u505a\u8fc7\u591a\u8bf4\u660e\u3002"))}d.isMDXComponent=!0}}]);