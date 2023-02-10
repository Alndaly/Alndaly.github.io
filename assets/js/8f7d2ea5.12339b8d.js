"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5151],{91201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(16758);const l={},o=void 0,p={unversionedId:"backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis",id:"backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis",title:"\u6574\u5408WebSocket\u548cRedis",description:"\u80cc\u666f",source:"@site/docs/backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis.md",sourceDirName:"backend/Spring/SpringBoot",slug:"/backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis",permalink:"/docs/backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",permalink:"/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668"},next:{title:"Config\u914d\u7f6e\u4e2d\u5fc3",permalink:"/docs/backend/Spring/SpringCloud/Config\u914d\u7f6e\u4e2d\u5fc3"}},r={},d=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:3},{value:"\u7f16\u5199\u4ece\u5bb9\u5668\u4e2d\u53d6\u5bf9\u8c61\u7684\u5de5\u5177\u7c7b",id:"\u7f16\u5199\u4ece\u5bb9\u5668\u4e2d\u53d6\u5bf9\u8c61\u7684\u5de5\u5177\u7c7b",level:4},{value:"\u7136\u540e\u518d\u5728<code>WebSocket</code>\u4e2d",id:"\u7136\u540e\u518d\u5728websocket\u4e2d",level:4}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u9879\u76ee\u4e2d\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocket"),"\u4e2d\u60f3\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Redis"),"\u3002\u628a\u81ea\u5df1\u7f16\u5199\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RedisUtils"),"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\u81ea\u52a8\u6ce8\u5165\u5230\u5f53\u524d\u7c7b\u3002"),(0,a.kt)("p",null,"\u5728\u8fd0\u884c\u65f6\uff0c\u51fa\u73b0\u5f02\u5e38\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"java.lang.NullPointException"),"\uff0c\u627e\u4e0d\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"RedisUtils")),(0,a.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u7f16\u5199\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"RedisUtils"),"\u6ca1\u6709\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"spring"),"\u5bb9\u5668\u4e2d\uff08\u5bfc\u81f4\u6ca1\u6709\u5b9e\u4f8b\u5316\uff09\u3002\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u6392\u9664\u6b64\u539f\u56e0\u3002\uff08\u7b80\u5355\u7684\u901a\u8fc7\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"Controller"),"\u4e2d\u64cd\u4f5c",(0,a.kt)("inlineCode",{parentName:"li"},"redis"),"\u5224\u65ad\u5373\u53ef\uff0c\u6216\u8005\u76f4\u63a5\u53d6\u51fa\u6240\u6709\u7684bean\u770b\u4e0b\u662f\u5426\u5b58\u5728\u3002\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WebSocket"),"\u662f\u591a\u5bf9\u8c61\u7684\uff0c\u4f7f\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"spring"),"\u5374\u662f\u5355\u4f8b\u6a21\u5f0f\u3002\u8fd9\u4e24\u8005\u521a\u597d\u51b2\u7a81\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"@Autowired"),"\u6ce8\u89e3\u6ce8\u5165\u5bf9\u8c61\u662f\u5728\u542f\u52a8\u7684\u65f6\u5019\u5c31\u628a\u5bf9\u8c61\u6ce8\u5165\uff0c\u800c\u4e0d\u662f\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u5bf9\u8c61\u65f6\u624d\u628a",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u9700\u8981\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"\u5bf9\u8c61\u6ce8\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u4e2d\u3002\u800c",(0,a.kt)("inlineCode",{parentName:"li"},"WebSocket"),"\u5728\u521a\u521a\u6709\u8bf4\u5230\uff0c\u6709\u8fde\u63a5\u65f6\u624d\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0c\u800c\u4e14\u6709\u591a\u4e2a\u8fde\u63a5\u5c31\u6709\u591a\u4e2a\u5bf9\u8c61\u3002\u7531\u6b64\u5f97\u77e5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"RedisUtils"),"\u6839\u672c\u5c31\u6ca1\u6709\u6ce8\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"WebSocket"),"\u5f53\u4e2d\u3002")),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,a.kt)("p",null,"\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"RedisUtils"),"\u5c5e\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketServer"),"\u8fd9\u4e2a\u7c7b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static RedisUtils redisUtils;\n\n@Autowired\npublic void setRedisUtils(RedisUtils redisUtils) {\n    WebSocketServer.redisUtils = redisUtils;\n}\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,a.kt)("h4",{id:"\u7f16\u5199\u4ece\u5bb9\u5668\u4e2d\u53d6\u5bf9\u8c61\u7684\u5de5\u5177\u7c7b"},"\u7f16\u5199\u4ece\u5bb9\u5668\u4e2d\u53d6\u5bf9\u8c61\u7684\u5de5\u5177\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class SpringUtil implements ApplicationContextAware {\n    private static ApplicationContext applicationContext;\n \n    @Override\n    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n        SpringUtil.applicationContext = applicationContext;\n    }\n \n    public ApplicationContext getApplicationContext(){\n        return applicationContext;\n    }\n \n    public static Object getBean(String beanName){\n        return applicationContext.getBean(beanName);\n    }\n \n    public static <T> T getBean(Class<T> clazz){\n        return (T)applicationContext.getBean(clazz);\n    }\n}\n")),(0,a.kt)("h4",{id:"\u7136\u540e\u518d\u5728websocket\u4e2d"},"\u7136\u540e\u518d\u5728",(0,a.kt)("inlineCode",{parentName:"h4"},"WebSocket"),"\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"RedisUtil redisUtil = SpringUtil.getBean(RedisUtil.class);\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u5728\u65b9\u6cd5\u91cc\u9762\u7684\u5c40\u90e8\u53d8\u91cf\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"RedisUtil redisUtil = SpringUtil.getBean(RedisUtil.class);"),"\u624d\u53ef\u4ee5\uff0c\u4e0d\u80fd\u653e\u5728\u5168\u5c40\u53d8\u91cf\uff0c\u56e0\u4e3a\u5728\u5168\u5c40\u53d8\u91cf\u7684\u8bdd\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"applicationContext"),"\u8fd8\u6ca1",(0,a.kt)("inlineCode",{parentName:"p"},"set"),"\u7684\u65f6\u5019\u88ab\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"getBean"),"\u65b9\u6cd5\uff0c\u8fd9\u65f6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"applicationContext"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u4f1a\u62a5\u7a7a\u6307\u9488\u5f02\u5e38\u3002")))}c.isMDXComponent=!0}}]);