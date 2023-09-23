"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5472],{36414:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));r(16758);const i={},s=void 0,o={unversionedId:"backend/Spring/OpenFeign",id:"backend/Spring/OpenFeign",title:"OpenFeign",description:"\u670d\u52a1\u8c03\u7528\u8005",source:"@site/docs/backend/Spring/OpenFeign.md",sourceDirName:"backend/Spring",slug:"/backend/Spring/OpenFeign",permalink:"/en/docs/backend/Spring/OpenFeign",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/OpenFeign.md",tags:[],version:"current",lastUpdatedAt:1695455608,formattedLastUpdatedAt:"Sep 23, 2023",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"Mybatis",permalink:"/en/docs/backend/Spring/Mybatis"},next:{title:"\u4ecb\u7ecd",permalink:"/en/docs/backend/Spring/SpringBoot/\u4ecb\u7ecd"}},c={},p=[{value:"\u670d\u52a1\u8c03\u7528\u8005",id:"\u670d\u52a1\u8c03\u7528\u8005",level:2},{value:"\u670d\u52a1\u63d0\u4f9b\u8005",id:"\u670d\u52a1\u63d0\u4f9b\u8005",level:2}],l={toc:p};function g(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u670d\u52a1\u8c03\u7528\u8005"},"\u670d\u52a1\u8c03\u7528\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=UserController.java",title:"UserController.java"},'package com.zuowu.serviceuser.controller;\n\nimport com.zuowu.serviceuser.service.UgcService;\nimport com.zuowu.serviceuser.service.UserService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/user")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    @RequestMapping("/one")\n    public String testOne(){\n        String res = userService.getUserByUgc(1);\n        return res;\n    }\n}\n\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e00\u6587\u4ef6\u4fbf\u662f\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528\u7684\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=UgcService.java",title:"UgcService.java"},'package com.zuowu.serviceuser.service;\n\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.web.bind.annotation.GetMapping;\n\n@FeignClient("ugc-server")\npublic interface UgcService {\n    @GetMapping("/ugc/test")\n    String getUgc();\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=UserService.java",title:"UserService.java"},"package com.zuowu.serviceuser.service;\n\nimport org.springframework.stereotype.Service;\n\npublic interface UserService {\n    String getUserByUgc(Integer ugcId);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=UserServiceImpl.java",title:"UserServiceImpl.java"},"package com.zuowu.serviceuser.service.impl;\n\nimport com.zuowu.serviceuser.service.UgcService;\nimport com.zuowu.serviceuser.service.UserService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class UserServiceImpl implements UserService {\n    @Autowired\n    private UgcService ugcService;\n    @Override\n    public String getUserByUgc(Integer ugcId) {\n        return ugcService.getUgc();\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"application.yml","application.yml":!0},"\n```yml application.yml\nserver:\n  port: 8764\nspring:\n  application:\n    # colony name\n    name: user-server\neureka:\n  instance:\n    hostname: user-server\n    # register with ip and port\n    prefer-ip-address: true\n    # the unique id of this instance\n    instance-id: ${spring.cloud.client.ip-address}:${server.port}\n    # the name of the instance\n    app-name: user-server\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/ # separated by comma if there is more than two eureka server instances\n")),(0,a.kt)("h2",{id:"\u670d\u52a1\u63d0\u4f9b\u8005"},"\u670d\u52a1\u63d0\u4f9b\u8005"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=UgcController.java",title:"UgcController.java"},'package com.zuowu.serviceugc.controller;\n\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("ugc")\npublic class UgcController {\n    @RequestMapping("test")\n    public String testOne(){\n        return "111";\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"application.yml","application.yml":!0},"server:\n  port: 8763\nspring:\n  application:\n    # colony name\n    name: ugc-server\neureka:\n  instance:\n    hostname: ugc-server\n    # register with ip and port\n    prefer-ip-address: true\n    # the unique id of this instance\n    instance-id: ${spring.cloud.client.ip-address}:${server.port}\n    # the name of the instance\n    app-name: ugc-server\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/ # separated by comma if there is more than two eureka server instances\n")))}g.isMDXComponent=!0}}]);