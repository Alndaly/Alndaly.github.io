"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4675],{58214:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));t(16758);const o={sidebar_position:5},p=void 0,i={unversionedId:"backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",id:"backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",title:"\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u201cHello World\uff01\u201dWeb\u5e94\u7528\u7a0b\u5e8f\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u7a81\u51fa\u4e86Spring Boot\u7684\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\u3002\u6211\u4eec\u4f7f\u7528Maven\u6765\u6784\u5efa\u8fd9\u4e2a\u9879\u76ee\uff0c\u56e0\u4e3a\u5927\u591a\u6570IDE\u90fd\u652f\u6301\u5b83\u3002",source:"@site/docs/backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f.md",sourceDirName:"backend/Spring/SpringBoot",slug:"/backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",permalink:"/docs/backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f.md",tags:[],version:"current",lastUpdatedAt:1695270646,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backEndSidebar",previous:{title:"\u7b80\u5355\u5c1d\u8bd5",permalink:"/docs/backend/Spring/SpringBoot/\u7b80\u5355\u5c1d\u8bd5"},next:{title:"\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",permalink:"/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668"}},l={},m=[{value:"\u521b\u5efaPOM",id:"\u521b\u5efapom",level:2},{value:"\u6dfb\u52a0\u7c7b\u8def\u5f84\u4f9d\u8d56\u9879",id:"\u6dfb\u52a0\u7c7b\u8def\u5f84\u4f9d\u8d56\u9879",level:2},{value:"\u7f16\u5199\u4ee3\u7801",id:"\u7f16\u5199\u4ee3\u7801",level:2},{value:"<code>@RestController</code>\u548c<code>@RequestMapping Annotations</code>",id:"restcontroller\u548crequestmapping-annotations",level:3},{value:"<code>@EnableAutoConfiguration</code>\u6ce8\u91ca",id:"enableautoconfiguration\u6ce8\u91ca",level:3},{value:"<code>main</code>\u65b9\u6cd5",id:"main\u65b9\u6cd5",level:3},{value:"\u8fd0\u884c\u793a\u4f8b",id:"\u8fd0\u884c\u793a\u4f8b",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u53ef\u6267\u884c\u7684Jar",id:"\u521b\u5efa\u4e00\u4e2a\u53ef\u6267\u884c\u7684jar",level:3}],d={toc:m};function s(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u201cHello World\uff01\u201dWeb\u5e94\u7528\u7a0b\u5e8f\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u7a81\u51fa\u4e86Spring Boot\u7684\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\u3002\u6211\u4eec\u4f7f\u7528Maven\u6765\u6784\u5efa\u8fd9\u4e2a\u9879\u76ee\uff0c\u56e0\u4e3a\u5927\u591a\u6570IDE\u90fd\u652f\u6301\u5b83\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5spring.io\u7f51\u7ad9\u5305\u542b\u4e86\u8bb8\u591a\u201c\u5165\u95e8\u201d \u6307\u5bfc\u5728\u4f7f\u7528Spring Boot\u3002\u5982\u679c\u60a8\u9700\u8981\u89e3\u51b3\u7279\u5b9a\u95ee\u9898\uff0c\u8bf7\u5148\u68c0\u67e5\u4e00\u4e0b\u3002\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u8f6c\u5230",(0,r.kt)("a",{parentName:"p",href:"https://start.spring.io"},"start.spring.io"),"\u5e76\u4ece\u4f9d\u8d56\u5173\u7cfb\u641c\u7d22\u5668\u4e2d\u9009\u62e9\u201cWeb\u201d\u542f\u52a8\u5668\u6765\u5feb\u6377\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002\u8fd9\u6837\u505a\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u9879\u76ee\u7ed3\u6784\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u7f16\u7801\u3002")),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6253\u5f00\u7ec8\u7aef\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u786e\u4fdd\u60a8\u5b89\u88c5\u4e86\u6709\u6548\u7248\u672c\u7684Java\u548cMaven\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'java -version\njava version "1.8.0_102"\nJava(TM) SE Runtime Environment (build 1.8.0_102-b14)\nJava HotSpot(TM) 64-Bit Server VM (build 25.102-b14, mixed mode)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn -v\nApache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-17T14:33:14-04:00)\nMaven home: /usr/local/Cellar/maven/3.3.9/libexec\nJava version: 1.8.0_102, vendor: Oracle Corporation\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u793a\u4f8b\u9700\u8981\u5728\u5176\u81ea\u5df1\u7684\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u3002\u540e\u7eed\u8bf4\u660e\u5047\u5b9a\u60a8\u5df2\u521b\u5efa\u5408\u9002\u7684\u6587\u4ef6\u5939\uff0c\u5e76\u4e14\u5b83\u662f\u60a8\u5f53\u524d\u7684\u76ee\u5f55\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efapom"},"\u521b\u5efaPOM"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2aMaven ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u6587\u4ef6\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u662f\u7528\u4e8e\u6784\u5efa\u9879\u76ee\u7684\u914d\u65b9\u3002\u6253\u5f00\u60a8\u559c\u6b22\u7684\u6587\u672c\u7f16\u8f91\u5668\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>myproject</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.1.1.RELEASE</version>\n    </parent>\n\n    \x3c!-- Additional lines to be added here... --\x3e\n\n</project>\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u6e05\u5355\u5e94\u8be5\u4e3a\u60a8\u63d0\u4f9b\u6709\u6548\u7684\u6784\u5efa\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),"\u6765\u6d4b\u8bd5\u5b83\uff08\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u201cjar\u5c06\u4e3a\u7a7a - \u6ca1\u6709\u5185\u5bb9\u88ab\u6807\u8bb0\u4e3a\u5305\u542b\uff01\u201d\u8b66\u544a\uff09\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06\u9879\u76ee\u5bfc\u5165IDE\uff08\u5927\u591a\u6570\u73b0\u4ee3Java IDE\u5305\u542b\u5bf9Maven\u7684\u5185\u7f6e\u652f\u6301\uff09\u3002\u4e3a\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u7ee7\u7eed\u4e3a\u6b64\u793a\u4f8b\u4f7f\u7528\u7eaf\u6587\u672c\u7f16\u8f91\u5668\u3002")),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u7c7b\u8def\u5f84\u4f9d\u8d56\u9879"},"\u6dfb\u52a0\u7c7b\u8def\u5f84\u4f9d\u8d56\u9879"),(0,r.kt)("p",null,"Spring Boot\u63d0\u4f9b\u4e86\u4e00\u4e9b\u201cStarters\u201d\uff0c\u53ef\u8ba9\u60a8\u5c06jar\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84\u4e2d\u3002\u6211\u4eec\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u5728POM\u7684parent\u90e8\u5206\u4f7f\u7528\u4e86spring-boot-starter-parent\u3002spring-boot-starter-parent\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u542f\u52a8\u5668\uff0c\u63d0\u4f9b\u6709\u7528\u7684Maven\u9ed8\u8ba4\u503c\u3002\u5b83\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a dependency-management \u90e8\u5206\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u7701\u7565version\u6807\u7b7e\u4e2d\u7684\u201c\u795d\u798f\u201d\u4f9d\u8d56\u9879\u3002"),(0,r.kt)("p",null,"\u5176\u4ed6\u201cStarters\u201d\u63d0\u4f9b\u4e86\u5728\u5f00\u53d1\u7279\u5b9a\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6\u53ef\u80fd\u9700\u8981\u7684\u4f9d\u8d56\u9879\u3002\u7531\u4e8e\u6211\u4eec\u6b63\u5728\u5f00\u53d1Web\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u6211\u4eec\u6dfb\u52a0\u4e86spring-boot-starter-web\u4f9d\u8d56\u9879\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u7684\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn dependency:tree\n\n[INFO] com.example:myproject:jar:0.0.1-SNAPSHOT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),"\u547d\u4ee4\u6253\u5370\u9879\u76ee\u4f9d\u8d56\u9879\u7684\u6811\u8868\u793a\u3002\u60a8\u53ef\u4ee5\u770b\u5230spring-boot-starter-parent\u672c\u8eab\u4e0d\u63d0\u4f9b\u4f9d\u8d56\u5173\u7cfb\u3002\u8981\u6dfb\u52a0\u5fc5\u8981\u7684\u4f9d\u8d56\u9879\uff0c\u8bf7\u7f16\u8f91pom.xml\u5e76\u5728parent\u90e8\u5206\u4e0b\u65b9\u6dfb\u52a0spring-boot-starter-web\u4f9d\u8d56\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("p",null,"\u5982\u679c\u518d\u6b21\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"mvn dependency:tree"),"\uff0c\u60a8\u4f1a\u53d1\u73b0\u73b0\u5728\u6709\u8bb8\u591a\u5176\u4ed6\u4f9d\u8d56\u9879\uff0c\u5305\u62ecTomcat Web\u670d\u52a1\u5668\u548cSpring Boot\u672c\u8eab\u3002"),(0,r.kt)("h2",{id:"\u7f16\u5199\u4ee3\u7801"},"\u7f16\u5199\u4ee3\u7801"),(0,r.kt)("p",null,"\u8981\u5b8c\u6210\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2aJava\u6587\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMaven\u7f16\u8bd1\u6765\u81easrc/main/java\u7684\u6e90\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u521b\u5efa\u8be5\u6587\u4ef6\u5939\u7ed3\u6784\uff0c\u7136\u540e\u6dfb\u52a0\u540d\u4e3asrc/main/java/Example.java\u7684\u6587\u4ef6\u4ee5\u5305\u542b\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.springframework.boot.*;\nimport org.springframework.boot.autoconfigure.*;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@EnableAutoConfiguration\npublic class Example {\n\n    @RequestMapping("/")\n    String home() {\n        return "Hello World!";\n    }\n\n    public static void main(String[] args) throws Exception {\n        SpringApplication.run(Example.class, args);\n    }\n\n}\n')),(0,r.kt)("p",null,"\u867d\u7136\u8fd9\u91cc\u7684\u4ee3\u7801\u4e0d\u591a\uff0c\u4f46\u8fd8\u662f\u6709\u5f88\u591a\u4ee3\u7801\u3002\u6211\u4eec\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u51e0\u8282\u4e2d\u9010\u6b65\u4ecb\u7ecd\u91cd\u8981\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"restcontroller\u548crequestmapping-annotations"},(0,r.kt)("inlineCode",{parentName:"h3"},"@RestController"),"\u548c",(0,r.kt)("inlineCode",{parentName:"h3"},"@RequestMapping Annotations")),(0,r.kt)("p",null,"Example\u7c7b\u7684\u7b2c\u4e00\u4e2a\u6ce8\u91ca\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"@RestController"),"\u3002\u8fd9\u88ab\u79f0\u4e3a\u6784\u9020\u578b\u6ce8\u91ca\u3002\u5b83\u4e3a\u9605\u8bfb\u4ee3\u7801\u7684\u4eba\u63d0\u4f9b\u4e86\u63d0\u793a\uff08Kinda\u6ce8\uff1a\u8fd9\u662f\u7ed3\u5408\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"@Controller"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@ResponseBody"),"\uff09\uff0c\u5e76\u4e3aSpring\u63d0\u4f9b\u4e86\u8be5\u7c7b\u626e\u6f14\u7279\u5b9a\u89d2\u8272\u7684\u63d0\u793a\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u7684\u7c7b\u662f\u4e00\u4e2aweb",(0,r.kt)("inlineCode",{parentName:"p"},"@Controller"),"\uff0c\u6240\u4ee5Spring\u5728\u5904\u7406\u4f20\u5165\u7684Web\u8bf7\u6c42\u65f6\u4f1a\u8003\u8651\u5b83\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@RequestMapping"),"\u6ce8\u91ca\u63d0\u4f9b\u201c\u8def\u7531\u201d\u4fe1\u606f\u3002\u5b83\u544a\u8bc9Spring\u4efb\u4f55\u5e26\u6709/\u8def\u5f84\u7684HTTP\u8bf7\u6c42\u90fd\u5e94\u8be5\u6620\u5c04\u5230home\u65b9\u6cd5\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"@RestController"),"\u6ce8\u91ca\u544a\u8bc9Spring\u5c06\u7ed3\u679c\u5b57\u7b26\u4e32\u76f4\u63a5\u5448\u73b0\u7ed9\u8c03\u7528\u8005\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@RestController"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@RequestMapping"),"\u6ce8\u91ca\u662fSpring MVC\u6ce8\u91ca\u3002\uff08\u5b83\u4eec\u4e0d\u662fSpring Boot\u7279\u6709\u7684\u3002\uff09")),(0,r.kt)("h3",{id:"enableautoconfiguration\u6ce8\u91ca"},(0,r.kt)("inlineCode",{parentName:"h3"},"@EnableAutoConfiguration"),"\u6ce8\u91ca"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7c7b\u7ea7\u522b\u6ce8\u91ca\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableAutoConfiguration"),"\u3002\u8fd9\u4e2a\u6ce8\u91ca\u544a\u8bc9Spring Boot\u6839\u636e\u4f60\u6dfb\u52a0\u7684jar\u4f9d\u8d56\u5173\u7cfb\u201c\u731c\u6d4b\u201d\u4f60\u60f3\u8981\u5982\u4f55\u914d\u7f6eSpring\u3002\u7531\u4e8espring-boot-starter-web\u6dfb\u52a0\u4e86Tomcat\u548cSpring MVC\uff0c\u56e0\u6b64\u81ea\u52a8\u914d\u7f6e\u5047\u5b9a\u60a8\u6b63\u5728\u5f00\u53d1Web\u5e94\u7528\u7a0b\u5e8f\u5e76\u76f8\u5e94\u5730\u8bbe\u7f6eSpring\u3002"),(0,r.kt)("admonition",{title:"Starters\u548c\u81ea\u52a8\u914d\u7f6e",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u81ea\u52a8\u914d\u7f6e\u65e8\u5728\u4e0e\u201cStarters\u201d\u914d\u5408\u4f7f\u7528\uff0c\u4f46\u8fd9\u4e24\u4e2a\u6982\u5ff5\u5e76\u4e0d\u76f4\u63a5\u76f8\u5173\u3002\u60a8\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5e76\u5728\u9996\u53d1\u4e4b\u5916\u9009\u62e9jar\u4f9d\u8d56\u9879\u3002Spring Boot\u4ecd\u7136\u5c3d\u529b\u81ea\u52a8\u914d\u7f6e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.kt)("h3",{id:"main\u65b9\u6cd5"},(0,r.kt)("inlineCode",{parentName:"h3"},"main"),"\u65b9\u6cd5"),(0,r.kt)("p",null,"\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u540e\u4e00\u90e8\u5206\u662fmain\u65b9\u6cd5\u3002\u8fd9\u53ea\u662f\u9075\u5faa\u5e94\u7528\u7a0b\u5e8f\u5165\u53e3\u70b9\u7684Java\u7ea6\u5b9a\u7684\u6807\u51c6\u65b9\u6cd5\u3002\u6211\u4eec\u7684\u4e3b\u8981\u65b9\u6cd5\u662f\u901a\u8fc7\u8c03\u7528run\u6765\u59d4\u6258Spring Boot\u7684SpringApplication\u7c7b\u3002SpringApplication\u5f15\u5bfc\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4eceSpring\u5f00\u59cb\uff0c\u7136\u540e\u542f\u52a8\u81ea\u52a8\u914d\u7f6e\u7684Tomcat Web\u670d\u52a1\u5668\u3002\u6211\u4eec\u9700\u8981\u5c06Example.class\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9run\u65b9\u6cd5\uff0c\u4ee5\u544a\u8bc9SpringApplication\u54ea\u4e2a\u662f\u4e3b\u8981\u7684Spring\u7ec4\u4ef6\u3002\u8fd8\u4f1a\u4f20\u9012args\u6570\u7ec4\u4ee5\u516c\u5f00\u4efb\u4f55\u547d\u4ee4\u884c\u53c2\u6570\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u793a\u4f8b"},"\u8fd0\u884c\u793a\u4f8b"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5e94\u8be5\u5de5\u4f5c\u3002\u7531\u4e8e\u60a8\u4f7f\u7528\u4e86spring-boot-starter-parent POM\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528\u6709\u7528\u7684run\u76ee\u6807\u6765\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\u4ece\u6839\u9879\u76ee\u76ee\u5f55\u4e2d\u952e\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"mvn spring-boot:run"),"\u4ee5\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\u60a8\u5e94\u8be5\u770b\u5230\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u7684\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn spring-boot:run\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::  (v2.1.1.RELEASE)\n....... . . .\n....... . . . (log output here)\n....... . . .\n........ Started Example in 2.222 seconds (JVM running for 6.514)\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6253\u5f00Web\u6d4f\u89c8\u5668\u5230localhost:8080\uff0c\u60a8\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello World!\n")),(0,r.kt)("p",null,"\u8981\u6b63\u5e38\u9000\u51fa\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u6309ctrl-c\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u53ef\u6267\u884c\u7684jar"},"\u521b\u5efa\u4e00\u4e2a\u53ef\u6267\u884c\u7684Jar"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u5b8c\u5168\u81ea\u5305\u542b\u7684\u53ef\u6267\u884cjar\u6587\u4ef6\u6765\u5b8c\u6210\u6211\u4eec\u7684\u793a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u751f\u4ea7\u4e2d\u8fd0\u884c\u5b83\u3002\u53ef\u6267\u884cjar\uff08\u6709\u65f6\u79f0\u4e3a\u201cfat jar\u201d\uff09\u662f\u5305\u542b\u5df2\u7f16\u8bd1\u7c7b\u4ee5\u53ca\u4ee3\u7801\u9700\u8981\u8fd0\u884c\u7684\u6240\u6709jar\u4f9d\u8d56\u9879\u7684\u5f52\u6863\u3002"),(0,r.kt)("admonition",{title:"\u53ef\u6267\u884c\u7684jar\u548cJava",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Java\u6ca1\u6709\u63d0\u4f9b\u52a0\u8f7d\u5d4c\u5957jar\u6587\u4ef6\u7684\u6807\u51c6\u65b9\u6cd5\uff08jar\u6587\u4ef6\u672c\u8eab\u5305\u542b\u5728jar\u4e2d\uff09\u3002\u5982\u679c\u60a8\u8981\u5206\u53d1\u81ea\u5305\u542b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u53ef\u80fd\u4f1a\u6709\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8bb8\u591a\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u201c\u8d85\u7ea7\u201d\u7f50\u5b50\u3002uber jar\u5c06\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u9879\u4e2d\u7684\u6240\u6709\u7c7b\u6253\u5305\u5230\u4e00\u4e2a\u5b58\u6863\u4e2d\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u95ee\u9898\u5728\u4e8e\u5f88\u96be\u770b\u51fa\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6709\u54ea\u4e9b\u5e93\u3002\u5982\u679c\u5728\u591a\u4e2a\u7f50\u5b50\u4e2d\u4f7f\u7528\u76f8\u540c\u7684\u6587\u4ef6\u540d\uff08\u4f46\u5177\u6709\u4e0d\u540c\u7684\u5185\u5bb9\uff09\uff0c\u4e5f\u53ef\u80fd\u4f1a\u6709\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Spring Boot\u91c7\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\uff0c\u8ba9\u4f60\u76f4\u63a5\u5d4c\u5957\u7f50\u5b50\u3002")),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u53ef\u6267\u884cjar\uff0c\u6211\u4eec\u9700\u8981\u5c06spring-boot-maven-plugin\u6dfb\u52a0\u5230pom.xml\u3002\u4e3a\u6b64\uff0c\u8bf7\u5728dependencies\u90e8\u5206\u4e0b\u65b9\u63d2\u5165\u4ee5\u4e0b\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"pom.xml","pom.xml":!0},"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"spring-boot-starter-parent POM\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"<executions>"),"\u914d\u7f6e\u4ee5\u7ed1\u5b9arepackage\u76ee\u6807\u3002\u5982\u679c\u60a8\u4e0d\u4f7f\u7528\u7236POM\uff0c\u5219\u9700\u8981\u81ea\u5df1\u58f0\u660e\u6b64\u914d\u7f6e\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u63d2\u4ef6\u6587\u6863\u3002")),(0,r.kt)("p",null,"\u4fdd\u5b58pom.xml\u5e76\u4ece\u547d\u4ee4\u884c\u8fd0\u884cmvn package\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn package\n\n[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------------------------------------------------------------\n[INFO] Building myproject 0.0.1-SNAPSHOT\n[INFO] ------------------------------------------------------------------------\n[INFO] .... ..\n[INFO] --- maven-jar-plugin:2.4:jar (default-jar) @ myproject ---\n[INFO] Building jar: /Users/developer/example/spring-boot-example/target/myproject-0.0.1-SNAPSHOT.jar\n[INFO]\n[INFO] --- spring-boot-maven-plugin:2.1.1.RELEASE:repackage (default) @ myproject ---\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u67e5\u770btarget\u76ee\u5f55\uff0c\u4f60\u5e94\u8be5\u770b\u5230myproject-0.0.1-SNAPSHOT.jar\u3002\u8be5\u6587\u4ef6\u5927\u5c0f\u5e94\u4e3a10 MB\u5de6\u53f3\u3002\u5982\u679c\u8981\u67e5\u770b\u5185\u90e8\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"jar tvf"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"jar tvf target/myproject-0.0.1-SNAPSHOT.jar\n")),(0,r.kt)("p",null,"\u60a8\u8fd8\u5e94\u8be5\u5728target\u76ee\u5f55\u4e2d\u770b\u5230\u4e00\u4e2a\u540d\u4e3amyproject-0.0.1-SNAPSHOT.jar.original\u7684\u5c0f\u6587\u4ef6\u3002\u8fd9\u662fMaven\u5728Spring Boot\u91cd\u65b0\u6253\u5305\u4e4b\u524d\u521b\u5efa\u7684\u539f\u59cbjar\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8981\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar"),"\u547d\u4ee4\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/myproject-0.0.1-SNAPSHOT.jar\n\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::  (v2.1.1.RELEASE)\n....... . . .\n....... . . . (log output here)\n....... . . .\n........ Started Example in 2.536 seconds (JVM running for 2.864)\n")),(0,r.kt)("p",null,"\u548c\u4ee5\u524d\u4e00\u6837\uff0c\u8981\u9000\u51fa\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u6309",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"\u3002"))}s.isMDXComponent=!0}}]);