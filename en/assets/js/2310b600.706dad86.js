"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4424],{32148:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(87462),d=(a(67294),a(3905));a(16758);const o={title:"\u8de8\u57df\u5904\u7406"},s=void 0,r={unversionedId:"backend/Django/cors",id:"backend/Django/cors",title:"\u8de8\u57df\u5904\u7406",description:"\u5b89\u88c5django-cors-headers",source:"@site/docs/backend/Django/cors.md",sourceDirName:"backend/Django",slug:"/backend/Django/cors",permalink:"/en/docs/backend/Django/cors",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Django/cors.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{title:"\u8de8\u57df\u5904\u7406"},sidebar:"backEndSidebar",previous:{title:"channels",permalink:"/en/docs/backend/Django/channels"},next:{title:"oauth",permalink:"/en/docs/backend/Django/oauth"}},i={},c=[{value:"\u5b89\u88c5django-cors-headers",id:"\u5b89\u88c5django-cors-headers",level:2},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:2}],l={toc:c};function g(e){let{components:n,...a}=e;return(0,d.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"\u5b89\u88c5django-cors-headers"},"\u5b89\u88c5django-cors-headers"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-shell"},"pip install django-cors-headers\n")),(0,d.kt)("h2",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,d.kt)("admonition",{type:"note"},(0,d.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4e0d\u8981\u5199\u9519\u5355\u8bcd\u3002")),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=settings.py",title:"settings.py"},"\n# \u5141\u8bb8\u5168\u90e8\u6765\u6e90\nCORS_ORIGIN_ALLOW_ALL = False  # \u5982\u679c\u4e3aTrue\uff0c\u5c06\u4e0d\u4f7f\u7528\u767d\u540d\u5355\uff0c\u5e76\u4e14\u5c06\u63a5\u53d7\u6240\u6709\u6765\u6e90\u3002\u9ed8\u8ba4\u4e3aFalse\u3002\n\n# # \u767d\u540d\u5355\n# CORS_ORIGIN_WHITELIST = [\n#     \"https://test.example.com\",\n# ]\n\n# \u6b63\u5219\u5339\u914d\u767d\u540d\u5355\nCORS_ORIGIN_REGEX_WHITELIST = (r'^(https?://)?(\\w+\\.)?google\\.com$', )\n\n\nINSTALLED_APPS = [\n    'simpleui',\n    'rest_framework',  # \u589e\u52a0\u8fd9\u4e00\u884c\n    'corsheaders',  # \u8fd9\u91cc\u589e\u52a0\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u5934\u914d\u7f6e\n    \"django.contrib.admin\",\n    \"django.contrib.auth\",\n    \"django.contrib.contenttypes\",\n    \"django.contrib.sessions\",\n    \"django.contrib.messages\",\n    \"django.contrib.staticfiles\",\n]\n\nMIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'corsheaders.middleware.CorsMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n]\n")))}g.isMDXComponent=!0}}]);