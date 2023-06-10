"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8160],{39598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var c=r(87462),n=(r(67294),r(3905));r(16758);const s={title:"\u4f7f\u7528 grep \u67e5\u627e\u6240\u6709\u5305\u542b\u6307\u5b9a\u6587\u672c\u7684\u6587\u4ef6"},a=void 0,i={unversionedId:"others/Shell/grep",id:"others/Shell/grep",title:"\u4f7f\u7528 grep \u67e5\u627e\u6240\u6709\u5305\u542b\u6307\u5b9a\u6587\u672c\u7684\u6587\u4ef6",description:"- \u76ee\u6807\uff1a\u672c\u6587\u63d0\u4f9b\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u641c\u7d22\u51fa\u6307\u5b9a\u76ee\u5f55\u6216\u6574\u4e2a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u90a3\u4e9b\u5305\u542b\u6307\u5b9a\u5355\u8bcd\u6216\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\u3002",source:"@site/docs/others/Shell/grep.md",sourceDirName:"others/Shell",slug:"/others/Shell/grep",permalink:"/docs/others/Shell/grep",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Shell/grep.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{title:"\u4f7f\u7528 grep \u67e5\u627e\u6240\u6709\u5305\u542b\u6307\u5b9a\u6587\u672c\u7684\u6587\u4ef6"},sidebar:"anyThing",previous:{title:"conda\u7cfb\u5217\u64cd\u4f5c",permalink:"/docs/others/Shell/conda"},next:{title:"Linux\u4e4bsed\u547d\u4ee4\u8be6\u89e3",permalink:"/docs/others/Shell/sed"}},l={},o=[{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u975e\u9012\u5f52\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",id:"\u975e\u9012\u5f52\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",level:3},{value:"\u9012\u5f52\u5730\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",id:"\u9012\u5f52\u5730\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",level:3},{value:"\u641c\u7d22\u6240\u6709\u5305\u542b\u7279\u5b9a\u5355\u8bcd\u7684\u6587\u4ef6",id:"\u641c\u7d22\u6240\u6709\u5305\u542b\u7279\u5b9a\u5355\u8bcd\u7684\u6587\u4ef6",level:3},{value:"\u663e\u793a\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u6587\u4ef6\u540d",id:"\u663e\u793a\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u6587\u4ef6\u540d",level:3},{value:"\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u641c\u7d22",id:"\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u641c\u7d22",level:3},{value:"\u641c\u7d22\u65f6\u5305\u542b/\u6392\u9664\u6307\u5b9a\u6587\u4ef6",id:"\u641c\u7d22\u65f6\u5305\u542b\u6392\u9664\u6307\u5b9a\u6587\u4ef6",level:3},{value:"\u7c7b\u4f3c\u7684\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 --exclude \u6765\u6392\u9664\u7279\u5b9a\u7684\u6587\u4ef6:",id:"\u7c7b\u4f3c\u7684\u4e5f\u53ef\u4ee5\u4f7f\u7528---exclude-\u6765\u6392\u9664\u7279\u5b9a\u7684\u6587\u4ef6",level:3},{value:"\u641c\u7d22\u65f6\u6392\u9664\u6307\u5b9a\u76ee\u5f55",id:"\u641c\u7d22\u65f6\u6392\u9664\u6307\u5b9a\u76ee\u5f55",level:3},{value:"\u663e\u793a\u5305\u542b\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u884c\u53f7",id:"\u663e\u793a\u5305\u542b\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u884c\u53f7",level:3},{value:"\u5bfb\u627e\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",id:"\u5bfb\u627e\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6",level:3}],d={toc:o};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,c.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u6807\uff1a\u672c\u6587\u63d0\u4f9b\u4e00\u4e9b\u5173\u4e8e\u5982\u4f55\u641c\u7d22\u51fa\u6307\u5b9a\u76ee\u5f55\u6216\u6574\u4e2a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u90a3\u4e9b\u5305\u542b\u6307\u5b9a\u5355\u8bcd\u6216\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u96be\u5ea6\uff1a\u5bb9\u6613"),(0,n.kt)("li",{parentName:"ul"},"\u7ea6\u5b9a\uff1a\u9700\u8981\u4f7f\u7528 root \u6743\u9650\u6765\u6267\u884c\u6307\u5b9a\u547d\u4ee4\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 root \u7528\u6237\u6765\u6267\u884c\u4e5f\u53ef\u4ee5\u4f7f\u7528 sudo \u547d\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"$ - \u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7528\u6237\u6765\u6267\u884c\u6307\u5b9a\u547d\u4ee4"))),(0,n.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,n.kt)("h3",{id:"\u975e\u9012\u5f52\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"},"\u975e\u9012\u5f52\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"),(0,n.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u8ba9\u6211\u4eec\u6765\u641c\u7d22 /etc/ \u76ee\u5f55\u4e0b\u6240\u6709\u5305\u542b stretch \u5b57\u7b26\u4e32\u7684\u6587\u4ef6\uff0c\u4f46\u4e0d\u53bb\u641c\u7d22\u5176\u4e2d\u7684\u5b50\u76ee\u5f55:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -s stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/etc/os-release:PRETTY_NAME="Debian GNU/Linux 9 (stretch)"\n/etc/os-release:VERSION="9 (stretch)"\n')),(0,n.kt)("p",null,"grep \u7684 -s \u9009\u9879\u4f1a\u5728\u53d1\u73b0\u4e0d\u5b58\u5728\u6216\u8005\u4e0d\u80fd\u8bfb\u53d6\u7684\u6587\u4ef6\u65f6\u9690\u85cf\u62a5\u9519\u4fe1\u606f\u3002\u7ed3\u679c\u663e\u793a\u9664\u4e86\u6587\u4ef6\u540d\u4e4b\u5916\uff0c\u8fd8\u6709\u5305\u542b\u8bf7\u6c42\u5b57\u7b26\u4e32\u7684\u884c\u4e5f\u88ab\u4e00\u8d77\u8f93\u51fa\u4e86\u3002"),(0,n.kt)("h3",{id:"\u9012\u5f52\u5730\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"},"\u9012\u5f52\u5730\u641c\u7d22\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"),(0,n.kt)("p",null,"\u4e0a\u9762\u6848\u4f8b\u4e2d\u5ffd\u7565\u4e86\u6240\u6709\u7684\u5b50\u76ee\u5f55\u3002\u6240\u8c13\u9012\u5f52\u641c\u7d22\u5c31\u662f\u6307\u540c\u65f6\u641c\u7d22\u6240\u6709\u7684\u5b50\u76ee\u5f55\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u4f1a\u5728 /etc/ \u53ca\u5176\u5b50\u76ee\u5f55\u4e2d\u641c\u7d22\u5305\u542b stretch \u5b57\u7b26\u4e32\u7684\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -R stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/etc/apt/sources.list:# deb cdrom:[Debian GNU/Linux testing _Stretch_ - Official Snapshot amd64 NETINST Binary-1 20170109-05:56]/ stretch main\n/etc/apt/sources.list:#deb cdrom:[Debian GNU/Linux testing _Stretch_ - Official Snapshot amd64 NETINST Binary-1 20170109-05:56]/ stretch main\n/etc/apt/sources.list:deb http://ftp.au.debian.org/debian/ stretch main\n/etc/apt/sources.list:deb-src http://ftp.au.debian.org/debian/ stretch main\n/etc/apt/sources.list:deb http://security.debian.org/debian-security stretch/updates main\n/etc/apt/sources.list:deb-src http://security.debian.org/debian-security stretch/updates main\n/etc/dictionaries-common/words:backstretch\n/etc/dictionaries-common/words:backstretch\'s\n/etc/dictionaries-common/words:backstretches\n/etc/dictionaries-common/words:homestretch\n/etc/dictionaries-common/words:homestretch\'s\n/etc/dictionaries-common/words:homestretches\n/etc/dictionaries-common/words:outstretch\n/etc/dictionaries-common/words:outstretched\n/etc/dictionaries-common/words:outstretches\n/etc/dictionaries-common/words:outstretching\n/etc/dictionaries-common/words:stretch\n/etc/dictionaries-common/words:stretch\'s\n/etc/dictionaries-common/words:stretched\n/etc/dictionaries-common/words:stretcher\n/etc/dictionaries-common/words:stretcher\'s\n/etc/dictionaries-common/words:stretchers\n/etc/dictionaries-common/words:stretches\n/etc/dictionaries-common/words:stretchier\n/etc/dictionaries-common/words:stretchiest\n/etc/dictionaries-common/words:stretching\n/etc/dictionaries-common/words:stretchy\n/etc/grub.d/00_header:background_image -m stretch `make_system_path_relative_to_its_root "$GRUB_BACKGROUND"`\n/etc/os-release:PRETTY_NAME="Debian GNU/Linux 9 (stretch)"\n/etc/os-release:VERSION="9 (stretch)"\n')),(0,n.kt)("h3",{id:"\u641c\u7d22\u6240\u6709\u5305\u542b\u7279\u5b9a\u5355\u8bcd\u7684\u6587\u4ef6"},"\u641c\u7d22\u6240\u6709\u5305\u542b\u7279\u5b9a\u5355\u8bcd\u7684\u6587\u4ef6"),(0,n.kt)("p",null,"\u4e0a\u9762 grep \u547d\u4ee4\u7684\u6848\u4f8b\u4e2d\u5217\u51fa\u7684\u662f\u6240\u6709\u5305\u542b\u5b57\u7b26\u4e32 stretch \u7684\u6587\u4ef6\u3002\u4e5f\u5c31\u662f\u8bf4\u5305\u542b stretches \uff0c stretched \u7b49\u5185\u5bb9\u7684\u884c\u4e5f\u4f1a\u88ab\u663e\u793a\u3002 \u4f7f\u7528 grep \u7684 -w \u9009\u9879\u4f1a\u53ea\u663e\u793a\u5305\u542b\u7279\u5b9a\u5355\u8bcd\u7684\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Rw stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'/etc/apt/sources.list:# deb cdrom:[Debian GNU/Linux testing _Stretch_ - Official Snapshot amd64 NETINST Binary-1 20170109-05:56]/ stretch main\n/etc/apt/sources.list:#deb cdrom:[Debian GNU/Linux testing _Stretch_ - Official Snapshot amd64 NETINST Binary-1 20170109-05:56]/ stretch main\n/etc/apt/sources.list:deb http://ftp.au.debian.org/debian/ stretch main\n/etc/apt/sources.list:deb-src http://ftp.au.debian.org/debian/ stretch main\n/etc/apt/sources.list:deb http://security.debian.org/debian-security stretch/updates main\n/etc/apt/sources.list:deb-src http://security.debian.org/debian-security stretch/updates main\n/etc/dictionaries-common/words:stretch\n/etc/dictionaries-common/words:stretch\'s\n/etc/grub.d/00_header:background_image -m stretch `make_system_path_relative_to_its_root "$GRUB_BACKGROUND"`\n/etc/os-release:PRETTY_NAME="Debian GNU/Linux 9 (stretch)"\n/etc/os-release:VERSION="9 (stretch)"\n')),(0,n.kt)("h3",{id:"\u663e\u793a\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u6587\u4ef6\u540d"},"\u663e\u793a\u5305\u542b\u7279\u5b9a\u6587\u672c\u7684\u6587\u4ef6\u540d"),(0,n.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u90fd\u4f1a\u4ea7\u751f\u591a\u4f59\u7684\u8f93\u51fa\u3002\u4e0b\u4e00\u4e2a\u6848\u4f8b\u5219\u4f1a\u9012\u5f52\u5730\u641c\u7d22 etc \u76ee\u5f55\u4e2d\u5305\u542b stretch \u7684\u6587\u4ef6\u5e76\u53ea\u8f93\u51fa\u6587\u4ef6\u540d\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Rl stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/apt/sources.list\n/etc/dictionaries-common/words\n/etc/grub.d/00_header\n/etc/os-release\n")),(0,n.kt)("h3",{id:"\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u641c\u7d22"},"\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u641c\u7d22"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u641c\u7d22\u662f\u5927\u5c0f\u5199\u654f\u611f\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u5f53\u641c\u7d22\u5b57\u7b26\u4e32 stretch \u65f6\u53ea\u4f1a\u5305\u542b\u5927\u5c0f\u5199\u4e00\u81f4\u5185\u5bb9\u7684\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 grep \u7684 -i \u9009\u9879\uff0cgrep \u547d\u4ee4\u8fd8\u4f1a\u5217\u51fa\u6240\u6709\u5305\u542b Stretch \uff0c STRETCH \uff0c StReTcH \u7b49\u5185\u5bb9\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fdb\u884c\u7684\u662f\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u7684\u641c\u7d22\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Ril stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/apt/sources.list\n/etc/dictionaries-common/default.hash\n/etc/dictionaries-common/words\n/etc/grub.d/00_header\n/etc/os-release\n")),(0,n.kt)("h3",{id:"\u641c\u7d22\u65f6\u5305\u542b\u6392\u9664\u6307\u5b9a\u6587\u4ef6"},"\u641c\u7d22\u65f6\u5305\u542b/\u6392\u9664\u6307\u5b9a\u6587\u4ef6"),(0,n.kt)("p",null,"grep \u547d\u4ee4\u4e5f\u53ef\u4ee5\u53ea\u5728\u6307\u5b9a\u6587\u4ef6\u4e2d\u8fdb\u884c\u641c\u7d22\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u5728\u914d\u7f6e\u6587\u4ef6\uff08\u6269\u5c55\u540d\u4e3a.conf\uff09\u4e2d\u641c\u7d22\u6307\u5b9a\u7684\u6587\u672c/\u5b57\u7b26\u4e32\u3002 \u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4f1a\u5728 /etc \u76ee\u5f55\u4e2d\u641c\u7d22\u5e26\u5b57\u7b26\u4e32 bash \u4e14\u6240\u6709\u6269\u5c55\u540d\u4e3a .conf \u7684\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Ril bash /etc/*.conf\n")),(0,n.kt)("p",null,"OR"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Ril --include=\\*.conf bash /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/adduser.conf\n")),(0,n.kt)("h3",{id:"\u7c7b\u4f3c\u7684\u4e5f\u53ef\u4ee5\u4f7f\u7528---exclude-\u6765\u6392\u9664\u7279\u5b9a\u7684\u6587\u4ef6"},"\u7c7b\u4f3c\u7684\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 --exclude \u6765\u6392\u9664\u7279\u5b9a\u7684\u6587\u4ef6:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Ril --exclude=\\*.conf bash /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/alternatives/view\n/etc/alternatives/vim\n/etc/alternatives/vi\n/etc/alternatives/vimdiff\n/etc/alternatives/rvim\n/etc/alternatives/ex\n/etc/alternatives/rview\n/etc/bash.bashrc\n/etc/bash_completion.d/grub\n/etc/cron.daily/apt-compat\n/etc/cron.daily/exim4-base\n/etc/dictionaries-common/default.hash\n/etc/dictionaries-common/words\n/etc/inputrc\n/etc/passwd\n/etc/passwd-\n/etc/profile\n/etc/shells\n/etc/skel/.profile\n/etc/skel/.bashrc\n/etc/skel/.bash_logout\n")),(0,n.kt)("h3",{id:"\u641c\u7d22\u65f6\u6392\u9664\u6307\u5b9a\u76ee\u5f55"},"\u641c\u7d22\u65f6\u6392\u9664\u6307\u5b9a\u76ee\u5f55"),(0,n.kt)("p",null,"\u8ddf\u6587\u4ef6\u4e00\u6837\uff0cgrep \u4e5f\u80fd\u5728\u641c\u7d22\u65f6\u6392\u9664\u6307\u5b9a\u76ee\u5f55\u3002 \u4f7f\u7528 --exclude-dir \u9009\u9879\u5c31\u884c\u3002"),(0,n.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u4f1a\u641c\u7d22 /etc \u76ee\u5f55\u4e2d\u641c\u6709\u5305\u542b\u5b57\u7b26\u4e32 stretch \u7684\u6587\u4ef6\uff0c\u4f46\u4e0d\u5305\u62ec /etc/grub.d \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep --exclude-dir=/etc/grub.d -Rwl stretch /etc/*\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/apt/sources.list\n/etc/dictionaries-common/words\n/etc/os-release\n")),(0,n.kt)("h3",{id:"\u663e\u793a\u5305\u542b\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u884c\u53f7"},"\u663e\u793a\u5305\u542b\u641c\u7d22\u5b57\u7b26\u4e32\u7684\u884c\u53f7"),(0,n.kt)("p",null,"-n \u9009\u9879\u8fd8\u4f1a\u663e\u793a\u6307\u5b9a\u5b57\u7b26\u4e32\u6240\u5728\u884c\u7684\u884c\u53f7:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Rni bash /etc/*.conf\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/etc/adduser.conf:6:DSHELL=/bin/bash\n")),(0,n.kt)("h3",{id:"\u5bfb\u627e\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"},"\u5bfb\u627e\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6"),(0,n.kt)("p",null,"\u6700\u540e\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528 -v \u6765\u5217\u51fa\u6240\u6709\u4e0d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u547d\u4ee4\u4f1a\u641c\u7d22 /etc \u76ee\u5f55\u4e2d\u4e0d\u5305\u542b stretch \u7684\u6240\u6709\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"grep -Rlv stretch /etc/*\n")))}p.isMDXComponent=!0}}]);