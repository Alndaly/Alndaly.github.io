"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8182],{54030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));a(16758);const r={title:"oauth"},i=void 0,d={unversionedId:"backend/Django/oauth",id:"backend/Django/oauth",title:"oauth",description:"\u8fd9\u91cc\u8bb0\u8f7d\u4e00\u4e9b\u4f7f\u7528\u8fd9\u4e00\u6846\u67b6\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u3002",source:"@site/docs/backend/Django/oauth.md",sourceDirName:"backend/Django",slug:"/backend/Django/oauth",permalink:"/en/docs/backend/Django/oauth",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Django/oauth.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"Jun 10, 2023",frontMatter:{title:"oauth"},sidebar:"backEndSidebar",previous:{title:"\u8de8\u57df\u5904\u7406",permalink:"/en/docs/backend/Django/cors"},next:{title:"rest_framework\u57fa\u672c\u64cd\u4f5c",permalink:"/en/docs/backend/Django/rest_framework"}},l={},p=[{value:"\u5b89\u88c5\u6a21\u5757",id:"\u5b89\u88c5\u6a21\u5757",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4fee\u6539URL",id:"\u4fee\u6539url",level:2},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:2},{value:"\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237",id:"\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237",level:2},{value:"\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740",id:"\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740",level:3},{value:"\u767b\u5f55\u63a7\u5236\u53f0",id:"\u767b\u5f55\u63a7\u5236\u53f0",level:3},{value:"\u65b0\u589e<code>APPLICATION</code>(<code>PASSWORD</code>\u8ba4\u8bc1\u65b9\u5f0f)",id:"\u65b0\u589eapplicationpassword\u8ba4\u8bc1\u65b9\u5f0f",level:3},{value:"\u8fdb\u5165oauth\u63d0\u4f9b\u7684url",id:"\u8fdb\u5165oauth\u63d0\u4f9b\u7684url",level:4},{value:"\u8fdb\u5165django admin",id:"\u8fdb\u5165django-admin",level:4},{value:"\u83b7\u53d6<code>TOKEN</code>",id:"\u83b7\u53d6token",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u8bb0\u8f7d\u4e00\u4e9b\u4f7f\u7528\u8fd9\u4e00\u6846\u67b6\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528\u4e86\u4e00\u5b9a\u65f6\u95f4\u4e4b\u540e\uff0c\u611f\u89c9\u6709\u5f88\u591a\u5730\u65b9\u5176\u5b9e\u8fd8\u662f\u4e0d\u80fd\u6ee1\u8db3\u81ea\u5df1\u5e0c\u671b\u5f97\u5230\u7684\u6548\u679c\uff0c\u6545\u800c\u628a\u5bf9\u5e94\u4ed3\u5e93fork\u4e86\u4e00\u4efd\uff0c\u81ea\u5df1\u52a0\u4ee5\u5f00\u53d1\uff0c\u4ed3\u5e93\u5730\u5740",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Alndaly/django-oauth-toolkit"},"Alndaly/django-oauth-toolkit"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u540e\u7eed\u4f1a\u8003\u8651\u4f18\u5316\u4ee3\u7801\u540e\u63d0\u4ea4pr\u7ed9\u5b98\u65b9\u3002")),(0,o.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://django-oauth-toolkit.readthedocs.io/en/latest/getting_started.html"},"https://django-oauth-toolkit.readthedocs.io/en/latest/getting_started.html")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u6a21\u5757"},"\u5b89\u88c5\u6a21\u5757"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip install django-oauth-toolkit djangorestframework\n")),(0,o.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"settings.py","settings.py":!0},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'oauth2_provider',   \n    'rest_framework',\n    'corsheaders',\n]\n\nMIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    #'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n    'corsheaders.middleware.CorsMiddleware',\n]\n\nAUTHENTICATION_BACKENDS = (\n    'django.contrib.auth.backends.ModelBackend',\n    'oauth2_provider.backends.OAuth2Backend',\n)\n \nREST_FRAMEWORK = {\n    'DEFAULT_AUTHENTICATION_CLASSES': (\n        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',\n        # \u4f4e\u7248\u672c\u7684oauth2\u914d\u7f6e\u4e3a\uff1aoauth2_provider.ext.rest_framework.OAuth2Authentication\n    )\n}\n")),(0,o.kt)("h2",{id:"\u4fee\u6539url"},"\u4fee\u6539URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"urls.py","urls.py":!0},"from django.conf.urls import include, url\nfrom django.contrib import admin\nfrom rest_framework.routers import DefaultRouter\n# Create a router and register our viewsets with it.\nrouter = DefaultRouter()\nurlpatterns += [\n    url(r'^admin/', include(admin.site.urls)),\n    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider'))]\n")),(0,o.kt)("h2",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python manage.py makemigrations\npython manage.py migrate\npython manage.py createsuperuser\n# \u7136\u540e\u8f93\u5165\u5e10\u53f7\u548c\u5bc6\u7801\n")),(0,o.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python manage.py runserver\n")),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237"},"\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237"),(0,o.kt)("h3",{id:"\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740"},"\u6253\u5f00\u6d4f\u89c8\u5668\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://127.0.0.1:8000/admin\n")),(0,o.kt)("h3",{id:"\u767b\u5f55\u63a7\u5236\u53f0"},"\u767b\u5f55\u63a7\u5236\u53f0"),(0,o.kt)("h3",{id:"\u65b0\u589eapplicationpassword\u8ba4\u8bc1\u65b9\u5f0f"},"\u65b0\u589e",(0,o.kt)("inlineCode",{parentName:"h3"},"APPLICATION"),"(",(0,o.kt)("inlineCode",{parentName:"h3"},"PASSWORD"),"\u8ba4\u8bc1\u65b9\u5f0f)"),(0,o.kt)("h4",{id:"\u8fdb\u5165oauth\u63d0\u4f9b\u7684url"},"\u8fdb\u5165oauth\u63d0\u4f9b\u7684url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://127.0.0.1:8000/o/applications/register/\n")),(0,o.kt)("h4",{id:"\u8fdb\u5165django-admin"},"\u8fdb\u5165django admin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://127.0.0.1:8000/admin/#/admin/oauth2_provider/application/\n")),(0,o.kt)("h2",{id:"\u83b7\u53d6token"},"\u83b7\u53d6",(0,o.kt)("inlineCode",{parentName:"h2"},"TOKEN")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u5982\u679c\u7528\u7684\u539f\u751foauth\u6846\u67b6\uff0c\u90a3\u4e48\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"x-www-form-urlecode"),"\u7684\u8bf7\u6c42\u5934\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"url")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8000/o/token/"},"http://127.0.0.1:8000/o/token/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"client_id"),(0,o.kt)("li",{parentName:"ul"},"grant_type"),(0,o.kt)("li",{parentName:"ul"},"username \uff08\u8fd9\u662f\u4f60\u8d26\u6237\u7684\u7528\u6237\u540d\uff0c\u6ce8\u610f\u5982\u679c\u662f\u81ea\u5b9a\u4e49\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"user``model"),"\uff0c\u90a3\u4e48\u9700\u8981\u662f\u4f60\u8bbe\u7f6e\u597d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"USERNAME_FIELD"),"\u5b57\u6bb5\uff09"),(0,o.kt)("li",{parentName:"ul"},"password"),(0,o.kt)("li",{parentName:"ul"},"client_secret")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202210292009789.png",alt:null})))}u.isMDXComponent=!0}}]);