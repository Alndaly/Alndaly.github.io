"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7416],{52627:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));t(16758);const a={},o=void 0,d={unversionedId:"backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528",id:"backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528",title:"\u7b80\u5355\u4f7f\u7528",description:"pom.xml\u914d\u7f6e\u6587\u4ef6",source:"@site/docs/backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528.md",sourceDirName:"backend/Spring/JPA",slug:"/backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528",permalink:"/docs/backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Spring/JPA/\u7b80\u5355\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"2023\u5e746\u67085\u65e5",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"SpringSecurity",permalink:"/docs/backend/Spring/SpringSecurity"},next:{title:"Maven",permalink:"/docs/backend/Spring/Maven"}},p={},s=[{value:"pom.xml\u914d\u7f6e\u6587\u4ef6",id:"pomxml\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u5b9e\u4f53\u7c7b",id:"\u521b\u5efa\u5b9e\u4f53\u7c7b",level:2},{value:"\u521b\u5efadao/repository\u5c42",id:"\u521b\u5efadaorepository\u5c42",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],c={toc:s};function g(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pomxml\u914d\u7f6e\u6587\u4ef6"},"pom.xml\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.0.0</version>\n        <relativePath/> \x3c!-- lookup parent from repository --\x3e\n    </parent>\n    <groupId>com.kinda</groupId>\n    <artifactId>kindaNotify</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>kindaNotify</name>\n    <description>kindaNotify</description>\n    <properties>\n        <java.version>17</java.version>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-elasticsearch</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-redis</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-jdbc</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-thymeleaf</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.mybatis.spring.boot</groupId>\n            <artifactId>mybatis-spring-boot-starter</artifactId>\n            <version>3.0.0</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.session</groupId>\n            <artifactId>spring-session-data-redis</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.session</groupId>\n            <artifactId>spring-session-jdbc</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.mysql</groupId>\n            <artifactId>mysql-connector-j</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        \x3c!--lombok--\x3e\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,i.kt)("h2",{id:"\u521b\u5efa\u5b9e\u4f53\u7c7b"},"\u521b\u5efa\u5b9e\u4f53\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.kinda.kindanotify.pojo.entity;\n\nimport jakarta.persistence.*;\nimport lombok.Builder;\n\n@Entity\n@Builder\n@Table(name = "event")\npublic class Event {\n    private Integer id;\n    private String title;\n    private String message;\n\n    @Id\n    @Column(name = "id")\n    @GeneratedValue(strategy = GenerationType.AUTO)\n    public Integer getId() {\n        return id;\n    }\n\n    public void setId(Integer id) {\n        this.id = id;\n    }\n\n    @Column(name = "title")\n    public String getTitle() {\n        return title;\n    }\n\n    public void setTitle(String title) {\n        this.title = title;\n    }\n\n    @Column(name = "message")\n    public String getMessage() {\n        return message;\n    }\n\n    public void setMessage(String message) {\n        this.message = message;\n    }\n\n    public Event() {\n    }\n\n    public Event(Integer id, String title, String message) {\n        this.id = id;\n        this.title = title;\n        this.message = message;\n    }\n\n    @Override\n    public String toString() {\n        return "Event{" +\n                "id=" + id +\n                ", title=\'" + title + \'\\\'\' +\n                ", message=\'" + message + \'\\\'\' +\n                \'}\';\n    }\n}\n')),(0,i.kt)("h2",{id:"\u521b\u5efadaorepository\u5c42"},"\u521b\u5efadao/repository\u5c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.kinda.kindanotify.repository;\n\nimport com.kinda.kindanotify.pojo.entity.Event;\nimport org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface EventRepo extends JpaRepository<Event, Integer> {\n\n}\n")),(0,i.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.kinda.kindanotify;\n\nimport com.kinda.kindanotify.pojo.entity.Event;\nimport com.kinda.kindanotify.repository.EventRepo;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\n\n@SpringBootTest\nclass KindaNotifyApplicationTests {\n\n    @Autowired\n    private EventRepo eventRepo;\n\n    // @Test\n    // void contextLoads() {\n    //     System.out.println("\u521d\u59cb\u5316\u6570\u636e\u5e93\u8868");\n    // }\n\n    // \u6d4b\u8bd5JPA\u63d0\u4f9b\u7684\u65b9\u6cd5\n    /**\n     * \u6d4b\u8bd5\u6dfb\u52a0\u4e8b\u4ef6\n     */\n    @Test\n    void testAddEvent(){\n        Event event = new Event();\n        event = event.builder().title("\u6d4b\u8bd5\u6807\u9898").message("\u6d4b\u8bd5\u4fe1\u606f").build();\n        System.out.println(event);\n        eventRepo.save(event);\n    }\n\n}\n')))}g.isMDXComponent=!0}}]);