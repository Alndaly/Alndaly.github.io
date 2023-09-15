"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6695],{1642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));n(16758);const o={sidebar_position:6},a=void 0,p={unversionedId:"backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",id:"backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",title:"\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",description:"\u62e6\u622a\u5668",source:"@site/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668.md",sourceDirName:"backend/Spring/SpringBoot",slug:"/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",permalink:"/en/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"backEndSidebar",previous:{title:"\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f",permalink:"/en/docs/backend/Spring/SpringBoot/\u5f00\u53d1\u7b2c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f"},next:{title:"\u6574\u5408WebSocket\u548cRedis",permalink:"/en/docs/backend/Spring/SpringBoot/\u6574\u5408WebSocket\u548cRedis"}},s={},l=[{value:"\u62e6\u622a\u5668",id:"\u62e6\u622a\u5668",level:2},{value:"\u5199\u62e6\u622a\u5668",id:"\u5199\u62e6\u622a\u5668",level:2},{value:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668",id:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668",level:3},{value:"\u8fc7\u6ee4\u5668",id:"\u8fc7\u6ee4\u5668",level:2},{value:"\u5148\u5b9a\u4e49Filter",id:"\u5148\u5b9a\u4e49filter",level:3},{value:"\u6ce8\u518c\u81ea\u5b9a\u4e49Filter",id:"\u6ce8\u518c\u81ea\u5b9a\u4e49filter",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u62e6\u622a\u5668"},"\u62e6\u622a\u5668"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9047\u5230\u8def\u7531404\uff0c\u90a3\u4e48\u4f1a\u9ed8\u8ba4\u8bbf\u95ee\u5bf9\u5e94\u8def\u7531\u4e0b\u7684\u9759\u6001\u8d44\u6e90\uff0c\u8fd9\u5bfc\u81f4\u5728\u8bbf\u95ee404\u63a5\u53e3\u65f6\u62e6\u622a\u5668\u4f1a\u8dd1\u4e24\u6b21\u3002\uff08\u95ee\u9898\u4e0d\u5927\uff0c\u4f46\u662f\u5f3a\u8feb\u75c7\u8868\u793a\u4e0d\u80fd\u63a5\u53d7\u3002\uff09"),(0,i.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9759\u6001\u8d44\u6e90\u8def\u5f84\u7684\u65b9\u5f0f\u53bb\u89e3\u51b3\u3002"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=application.yml",title:"application.yml"},"spring:\n  mvc:\n    static-path-pattern: /static/**\n"))),(0,i.kt)("h2",{id:"\u5199\u62e6\u622a\u5668"},"\u5199\u62e6\u622a\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.kinda.springBootDemo.interceptor;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.servlet.HandlerInterceptor;\nimport org.springframework.web.servlet.ModelAndView;\n\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\n@Component\n@Slf4j\npublic class Oauth2Interceptor implements HandlerInterceptor {\n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        log.info("\u9274\u6743\u6807\u8bc6\u7b26: {}", request.getHeader("authorization"));\n        return true;\n    }\n\n    @Override\n    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {\n        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);\n    }\n\n    @Override\n    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {\n        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);\n    }\n}\n\n')),(0,i.kt)("h3",{id:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668"},"\u6ce8\u518c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.kinda.springBootDemo.interceptor;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.InterceptorRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n/**\n * \u914d\u7f6e\u62e6\u622a\u5668\n * \u6b64\u5904\u7ed1\u5b9a\u63a5\u53e3\u9274\u6743\u90e8\u5206\n */\n@Configuration\npublic class interceptor implements WebMvcConfigurer {\n    @Autowired\n    private Oauth2Interceptor oauth2Interceptor;\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(oauth2Interceptor);\n    }\n}\n")),(0,i.kt)("h2",{id:"\u8fc7\u6ee4\u5668"},"\u8fc7\u6ee4\u5668"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"spring boot"),"\u63d0\u4f9b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"FilterRegistrationBean"),"\u6ce8\u518c",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),"\u3002"),(0,i.kt)("h3",{id:"\u5148\u5b9a\u4e49filter"},"\u5148\u5b9a\u4e49Filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' \npackage com.corwien.filter;\nimport javax.servlet.*;\nimport java.io.IOException;\npublic class MyFilter implements Filter {\n    @Override public void init(FilterConfig filterConfig) throws ServletException {\n \n    }\n    @Override public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException { // do something \u5904\u7406request \u6216response\n     // doFilter()\u65b9\u6cd5\u4e2d\u7684servletRequest\u53c2\u6570\u7684\u7c7b\u578b\u662fServletRequest\uff0c\u9700\u8981\u8f6c\u6362\u4e3aHttpServletRequest\u7c7b\u578b\u65b9\u4fbf\u8c03\u7528\u67d0\u4e9b\u65b9\u6cd5\n      System.out.println("filter1"); // \u8c03\u7528filter\u94fe\u4e2d\u7684\u4e0b\u4e00\u4e2afilter\n \n    HttpServletRequest request = (HttpServletRequest) servletRequest;\n        HttpServletResponse response = (HttpServletResponse) servletResponse;\n \n        String ip = request.getRemoteAddr();\n        String url = request.getRequestURL().toString();\n        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        Date d = new Date();\n        String date = sdf.format(d);\n \n        System.out.printf("%s %s \u8bbf\u95ee\u4e86 %s%n", date, ip, url);\n        \n        filterChain.doFilter(request, response);\n    }\n    @Override public void destroy() {\n \n    }\n}\n')),(0,i.kt)("h3",{id:"\u6ce8\u518c\u81ea\u5b9a\u4e49filter"},"\u6ce8\u518c\u81ea\u5b9a\u4e49Filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class FilterConfig {\n \n    @Bean\n    public FilterRegistrationBean registrationBean() {\n        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(new MyFilter());\n        filterRegistrationBean.addUrlPatterns("/*");\n        return filterRegistrationBean;\n    }\n}\n')))}c.isMDXComponent=!0}}]);