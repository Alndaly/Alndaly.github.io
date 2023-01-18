"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5329],{67191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));n(16758);const a={},o=void 0,s={unversionedId:"frontend/Swift/\u672c\u5730\u901a\u77e5",id:"frontend/Swift/\u672c\u5730\u901a\u77e5",title:"\u672c\u5730\u901a\u77e5",description:"\u7533\u8bf7\u901a\u77e5\u6743\u9650",source:"@site/docs/frontend/Swift/\u672c\u5730\u901a\u77e5.md",sourceDirName:"frontend/Swift",slug:"/frontend/Swift/\u672c\u5730\u901a\u77e5",permalink:"/en/docs/frontend/Swift/\u672c\u5730\u901a\u77e5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/\u672c\u5730\u901a\u77e5.md",tags:[],version:"current",lastUpdatedAt:1674055704,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",permalink:"/en/docs/frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e"},next:{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53",permalink:"/en/docs/frontend/Swift/\u81ea\u5b9a\u4e49\u5b57\u4f53"}},l={},d=[{value:"\u7533\u8bf7\u901a\u77e5\u6743\u9650",id:"\u7533\u8bf7\u901a\u77e5\u6743\u9650",level:2},{value:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9",id:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9",level:2},{value:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4",id:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4",level:2},{value:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b",id:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b",level:2},{value:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3",id:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7533\u8bf7\u901a\u77e5\u6743\u9650"},"\u7533\u8bf7\u901a\u77e5\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'UNUserNotificationCenter.current().requestAuthorization(options: [.alert,.badge,.sound]){success, error in\n    if(success){\n        print("All Set!")\n    }else if let error = error{\n        print(error.localizedDescription)\n    }\n}\n')),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9"},"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let content = UNMutableNotificationContent()\ncontent.title = "Feed the cat"\ncontent.subtitle = "It looks hungry"\ncontent.sound = UNNotificationSound.default\n')),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4"},"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// show this notification five seconds from now\nlet trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b"},"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)\n")),(0,r.kt)("h2",{id:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3"},"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"UNUserNotificationCenter.current().add(request)\n")))}u.isMDXComponent=!0}}]);