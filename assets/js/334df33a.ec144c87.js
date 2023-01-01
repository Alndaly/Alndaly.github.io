"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5618],{67476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>k});var n=a(87462),p=(a(67294),a(3905));a(16758);const i={title:"Vim\u8f6f\u4ef6\u5305",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},l="\u7b2c22\u7ae0 Vim\u8f6f\u4ef6\u5305",m={unversionedId:"others/Vim/ch23_vim_packages",id:"others/Vim/ch23_vim_packages",title:"Vim\u8f6f\u4ef6\u5305",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch23_vim_packages.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch23_vim_packages",permalink:"/docs/others/Vim/ch23_vim_packages",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Vim/ch23_vim_packages.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1672546814,formattedLastUpdatedAt:"2023\u5e741\u67081\u65e5",frontMatter:{title:"Vim\u8f6f\u4ef6\u5305",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Vimrc",permalink:"/docs/others/Vim/ch22_vimrc"},next:{title:"Vim Rumtime",permalink:"/docs/others/Vim/ch24_vim_runtime"}},r={},k=[{value:"\u5305\u76ee\u5f55",id:"\u5305\u76ee\u5f55",level:2},{value:"\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f",id:"\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f",level:2},{value:"\u81ea\u52a8\u52a0\u8f7d",id:"\u81ea\u52a8\u52a0\u8f7d",level:3},{value:"\u624b\u52a8\u52a0\u8f7d",id:"\u624b\u52a8\u52a0\u8f7d",level:3},{value:"\u7ec4\u7ec7\u7ba1\u7406\u8f6f\u4ef6\u5305",id:"\u7ec4\u7ec7\u7ba1\u7406\u8f6f\u4ef6\u5305",level:2},{value:"\u806a\u660e\u5730\u6dfb\u52a0\u63d2\u4ef6",id:"\u806a\u660e\u5730\u6dfb\u52a0\u63d2\u4ef6",level:2}],o={toc:k};function c(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u7b2c22\u7ae0-vim\u8f6f\u4ef6\u5305"},"\u7b2c22\u7ae0 Vim\u8f6f\u4ef6\u5305"),(0,p.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u63d0\u5230\u4f7f\u7528\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7ba1\u7406\u5668\u6765\u5b89\u88c5\u63d2\u4ef6\u3002\u4eceVim 8\u5f00\u59cb\uff0cVim\u81ea\u5e26\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u540d\u53eb ",(0,p.kt)("em",{parentName:"p"},"\u8f6f\u4ef6\u5305\uff08packages\uff09"),"\u3002\u5728\u672c\u7ae0\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528Vim\u8f6f\u4ef6\u5305\u6765\u5b89\u88c5\u63d2\u4ef6\u3002"),(0,p.kt)("p",null,"\u8981\u770b\u60a8\u7684Vim\u7f16\u8bd1\u7248\u672c\u662f\u5426\u80fd\u591f\u4f7f\u7528\u8f6f\u4ef6\u5305\uff0c\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},":version"),"\u3002\u7136\u540e\u67e5\u770b\u662f\u5426\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"+packages"),"\u5c5e\u6027\u3002\u53e6\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},":echo has('packages')"),"\uff08\u5982\u679c\u8fd4\u56de1\uff0c\u8868\u793a\u53ef\u4ee5\u4f7f\u7528\u8f6f\u4ef6\u5305\uff09\u3002"),(0,p.kt)("h2",{id:"\u5305\u76ee\u5f55"},"\u5305\u76ee\u5f55"),(0,p.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u67e5\u770b\u60a8\u662f\u5426\u6709\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.vim")," \u6587\u4ef6\u5939\u3002\u5982\u679c\u6ca1\u6709\u5c31\u65b0\u5efa\u4e00\u4e2a\u3002\u5728\u6587\u4ef6\u5939\u91cc\u9762\uff0c\u521b\u5efa\u4e00\u4e2a\u5b50\u6587\u4ef6\u5939\u53d6\u540d ",(0,p.kt)("inlineCode",{parentName:"p"},"pack"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"~/.vim/pack/"),")\u3002Vim\u4f1a\u5728\u8fd9\u4e2a\u5b50\u6587\u4ef6\u5939\u5185\u81ea\u52a8\u641c\u7d22\u63d2\u4ef6\u3002"),(0,p.kt)("h2",{id:"\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f"},"\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f"),(0,p.kt)("p",null,"Vim\u8f6f\u4ef6\u5305\u6709\u4e24\u79cd\u52a0\u8f7d\u673a\u5236\uff1a\u81ea\u52a8\u52a0\u8f7d\u548c\u624b\u52a8\u52a0\u8f7d\u3002"),(0,p.kt)("h3",{id:"\u81ea\u52a8\u52a0\u8f7d"},"\u81ea\u52a8\u52a0\u8f7d"),(0,p.kt)("p",null,"\u8981\u60f3\u8ba9Vim\u542f\u52a8\u65f6\u81ea\u52a8\u52a0\u8f7d\u63d2\u4ef6\uff0c\u4f60\u9700\u8981\u5c06\u5b83\u4eec\u653e\u7f6e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"start/"),"\u5b50\u76ee\u5f55\u4e2d\u3002\u8def\u5f84\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/*/start/\n")),(0,p.kt)("p",null,"\u73b0\u5728\u60a8\u53ef\u80fd\u4f1a\u95ee\uff0c\u4e3a\u4ec0\u4e48\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"pack/")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"start/")," \u4e4b\u95f4\u6709\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"*")," \uff1f\u8fd9\u4e2a\u661f\u53f7\u53ef\u4ee5\u662f\u4efb\u610f\u540d\u5b57\u3002\u8ba9\u6211\u4eec\u5c06\u5b83\u53d6\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"packdemo/"),"\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/packdemo/start/\n")),(0,p.kt)("p",null,"\u8bb0\u4f4f\uff0c\u5982\u679c\u60a8\u5ffd\u7565\u8fd9\u4e00\u70b9\uff0c\u7528\u4e0b\u9762\u7684\u8def\u5f84\u4ee3\u66ff\u7684\u8bdd\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/start/\n")),(0,p.kt)("p",null,"\u8f6f\u4ef6\u5305\u7cfb\u7edf\u662f\u4e0d\u4f1a\u6b63\u5e38\u5de5\u4f5c\u7684\u3002\xa0\u5fc5\u987b\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"pack/")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"start/"),"\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u540d\u5b57\u624d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,p.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u8ba9\u6211\u4eec\u5c1d\u8bd5\u5b89\u88c5 ","[NERDTree]","(",(0,p.kt)("a",{parentName:"p",href:"https://github.com/preservim/nThe"},"https://github.com/preservim/nThe")," package system won't work. It is imperative to put a name between ",(0,p.kt)("inlineCode",{parentName:"p"},"pack/")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"start/"),".erdtree) \u63d2\u4ef6\u3002\u7528\u4efb\u610f\u65b9\u6cd5\u8fdb\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"start/")," \u76ee\u5f55\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"cd ~/.vim/pack/packdemo/start/"),"\uff09\uff0c\u7136\u540e\u5c06NERDTree\u7684\u4ed3\u5e93\u514b\u9686\u4e0b\u6765\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"git clone https://github.com/preservim/nerdtree.git\n")),(0,p.kt)("p",null,"\u5b8c\u6210\u4e86\uff01\u60a8\u5df2\u7ecf\u5b8c\u6210\u4e86\u5b89\u88c5\u3002\u4e0b\u4e00\u6b21\u60a8\u542f\u52a8Vim\uff0c\u60a8\u53ef\u4ee5\u7acb\u5373\u6267\u884c NERDTree \u547d\u4ee4 ",(0,p.kt)("inlineCode",{parentName:"p"},":NERDTreeToggle"),"\u3002"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"~/.vim/pack/*/start/")," \u76ee\u5f55\u4e2d\uff0c\u60a8\u60f3\u514b\u9686\u591a\u5c11\u63d2\u4ef6\u4ed3\u5e93\u5c31\u514b\u9686\u591a\u5c11\u3002Vim\u5c06\u4f1a\u81ea\u52a8\u52a0\u8f7d\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u3002\u5982\u679c\u60a8\u5220\u9664\u4e86\u514b\u9686\u7684\u4ed3\u5e93\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"rm -rf nerdtree"),"\uff09\uff0c\u90a3\u4e48\u63d2\u4ef6\u5c31\u5931\u6548\u4e86\u3002"),(0,p.kt)("h3",{id:"\u624b\u52a8\u52a0\u8f7d"},"\u624b\u52a8\u52a0\u8f7d"),(0,p.kt)("p",null,"\u8981\u60f3\u5728Vim\u542f\u52a8\u65f6\u624b\u52a8\u52a0\u8f7d\u63d2\u4ef6\uff0c\u60a8\u5f97\u5c06\u76f8\u5173\u63d2\u4ef6\u653e\u7f6e\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"opt/")," \u76ee\u5f55\u4e2d\uff0c\u7c7b\u4f3c\u4e8e\u81ea\u52a8\u52a0\u8f7d\uff0c\u8fd9\u4e2a\u8def\u5f84\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/*/opt/\n")),(0,p.kt)("p",null,"\u8ba9\u6211\u4eec\u7ee7\u7eed\u4f7f\u7528\u524d\u9762\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"packdemo/")," \u8fd9\u4e2a\u540d\u5b57\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/packdemo/opt/\n")),(0,p.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u8ba9\u6211\u4eec\u5b89\u88c5",(0,p.kt)("a",{parentName:"p",href:"https://github.com/vim/killersheep"},"killersheep")," \u6e38\u620f\uff08\u9700\u8981Vim8.2\u4ee5\u4e0a\u7248\u672c\uff09\u3002\u8fdb\u5165",(0,p.kt)("inlineCode",{parentName:"p"},"opt/")," \u76ee\u5f55(",(0,p.kt)("inlineCode",{parentName:"p"},"cd ~/.vim/pack/packdemo/opt/"),") \u7136\u540e\u514b\u9686\u4ed3\u5e93\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"git clone https://github.com/vim/killersheep.git\n")),(0,p.kt)("p",null,"\u542f\u52a8Vim\u3002\u6267\u884c\u6e38\u620f\u7684\u547d\u4ee4\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},":KillKillKill"),"\u3002\u8bd5\u7740\u8fd0\u884c\u4e00\u4e0b\u3002Vim\u5c06\u4f1a\u63d0\u793a\u8fd9\u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684\u7f16\u8f91\u547d\u4ee4\u3002\u60a8\u9700\u8981\u9996\u5148 ",(0,p.kt)("em",{parentName:"p"},"\u624b\u52a8")," \u52a0\u8f7d\u63d2\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},":packadd killersheep\n")),(0,p.kt)("p",null,"\u73b0\u5728\u518d\u8fd0\u884c\u4e00\u4e0b ",(0,p.kt)("inlineCode",{parentName:"p"},":KillKillKill")," \u3002\u547d\u4ee4\u5df2\u7ecf\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,p.kt)("p",null,"\u60a8\u53ef\u80fd\u597d\u5947\uff0c\u201c\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u624b\u52a8\u52a0\u8f7d\u63d2\u4ef6\uff1f\u542f\u52a8\u65f6\u81ea\u52a8\u52a0\u8f7d\u5c82\u4e0d\u662f\u66f4\u597d\uff1f\u201d"),(0,p.kt)("p",null,"\u5f88\u597d\u7684\u95ee\u9898\u3002\u6709\u65f6\u5019\u6709\u4e9b\u63d2\u4ef6\u6211\u4eec\u5e76\u4e0d\u662f\u6240\u6709\u7684\u65f6\u5019\u90fd\u5728\u7528\uff0c\u6bd4\u5982 KillerSheep \u6e38\u620f\u3002\u60a8\u53ef\u80fd\u4e0d\u4f1a\u60f3\u8981\u52a0\u8f7d10\u4e2a\u4e0d\u540c\u7684\u6e38\u620f\u5bfc\u81f4Vim\u542f\u52a8\u53d8\u6162\u3002\u4f46\u662f\u5076\u5c14\u5f53\u60a8\u89c9\u5f97\u4e4f\u5473\u7684\u65f6\u5019\uff0c\u60a8\u53ef\u80fd\u60f3\u8981\u73a9\u51e0\u4e2a\u6e38\u620f\uff0c\u4f7f\u7528\u624b\u52a8\u52a0\u8f7d\u4e00\u4e9b\u975e\u5fc5\u987b\u7684\u63d2\u4ef6\u3002"),(0,p.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6709\u6761\u4ef6\u7684\u52a0\u8f7d\u63d2\u4ef6\u3002\u53ef\u80fd\u60a8\u540c\u65f6\u4f7f\u7528\u4e86Neovim\u548cVim\uff0c\u6709\u4e00\u4e9b\u63d2\u4ef6\u662f\u4e3aNeoVim\u4f18\u5316\u8fc7\u7684\u3002\u60a8\u53ef\u4ee5\u6dfb\u52a0\u7c7b\u4f3c\u4e0b\u5217\u7684\u5185\u5bb9\u5230\u60a8\u7684vimrc\u4e2d\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"if has('nvim')\n  packadd! neovim-only-plugin\nelse\n  packadd! generic-vim-plugin\nendif\n")),(0,p.kt)("h2",{id:"\u7ec4\u7ec7\u7ba1\u7406\u8f6f\u4ef6\u5305"},"\u7ec4\u7ec7\u7ba1\u7406\u8f6f\u4ef6\u5305"),(0,p.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\uff0c\u8981\u4f7f\u7528Vim\u7684\u8f6f\u4ef6\u5305\u7cfb\u7edf\u5fc5\u987b\u6709\u4ee5\u4e0b\u9700\u6c42\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/*/start/\n")),(0,p.kt)("p",null,"\u6216\u8005:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/*/opt/\n")),(0,p.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"*"),"\u661f\u53f7\u53ef\u4ee5\u4f7f ",(0,p.kt)("em",{parentName:"p"},"\u4efb\u610f")," \u540d\u5b57\uff0c\u8fd9\u4e2a\u540d\u5b57\u5c31\u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u60a8\u7684\u63d2\u4ef6\u3002\u5047\u8bbe\u60a8\u60f3\u5c06\u60a8\u7684\u63d2\u4ef6\u6839\u636e\u7c7b\u578b\uff08\u989c\u8272\u3001\u8bed\u6cd5\u3001\u6e38\u620f\uff09\u5206\u7ec4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/colors/\n~/.vim/pack/syntax/\n~/.vim/pack/games/\n")),(0,p.kt)("p",null,"\u60a8\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u5404\u4e2a\u76ee\u5f55\u4e0b\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"start/")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"opt/")," \u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"~/.vim/pack/colors/start/\n~/.vim/pack/colors/opt/\n\n~/.vim/pack/syntax/start/\n~/.vim/pack/syntax/opt/\n\n~/.vim/pack/games/start/\n~/.vim/pack/games/opt/\n")),(0,p.kt)("h2",{id:"\u806a\u660e\u5730\u6dfb\u52a0\u63d2\u4ef6"},"\u806a\u660e\u5730\u6dfb\u52a0\u63d2\u4ef6"),(0,p.kt)("p",null,"\u60a8\u53ef\u80fd\u597d\u5947\uff0cVim\u8f6f\u4ef6\u5305\u662f\u5426\u8ba9\u4e00\u4e9b\u6d41\u884c\u7684\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u6bd4\u5982 vim-pathogen, vundle.vim, dein.vim, a\u8fd8\u6709vim-plug\u9762\u4e34\u6dd8\u6c70\uff1f"),(0,p.kt)("p",null,"\u7b54\u6848\u6c38\u8fdc\u662f\uff1a\u201c\u770b\u60c5\u51b5\u800c\u5b9a\u3002\u201d"),(0,p.kt)("p",null,"\u6211\u4ecd\u7136\u4f7f\u7528vim-plug\uff0c\u56e0\u4e3a\u4f7f\u7528\u5b83\u6dfb\u52a0\u3001\u5220\u9664\u3001\u66f4\u65b0\u63d2\u4ef6\u5f88\u5bb9\u6613\u3002\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u5f88\u591a\u63d2\u4ef6\uff0c\u63d2\u4ef6\u7ba1\u7406\u5668\u7684\u597d\u5904\u66f4\u52a0\u660e\u663e\uff0c\u56e0\u4e3a\u4f7f\u7528\u5b83\u53ef\u4ee5\u5bf9\u5f88\u591a\u63d2\u4ef6\u8fdb\u884c\u540c\u65f6\u66f4\u65b0\u3002\u6709\u4e9b\u63d2\u4ef6\u7ba1\u7406\u5668\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5f02\u6b65\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u662f\u6781\u7b80\u4e3b\u4e49\u8005\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0bVim\u8f6f\u4ef6\u5305\u3002\u5982\u679c\u60a8\u662f\u4e00\u540d\u63d2\u4ef6\u91cd\u5ea6\u4f7f\u7528\u8005\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u63d2\u4ef6\u7ba1\u7406\u5668\u3002"))}c.isMDXComponent=!0}}]);