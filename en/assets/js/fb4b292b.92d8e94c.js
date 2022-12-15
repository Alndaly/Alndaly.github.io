"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4701],{5612:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));i(16758);const a={},o=void 0,l={unversionedId:"frontend/Swift/SwiftUi/\u901a\u77e5",id:"frontend/Swift/SwiftUi/\u901a\u77e5",title:"\u901a\u77e5",description:"\u672c\u5730\u63a8\u9001",source:"@site/docs/frontend/Swift/SwiftUi/\u901a\u77e5.md",sourceDirName:"frontend/Swift/SwiftUi",slug:"/frontend/Swift/SwiftUi/\u901a\u77e5",permalink:"/en/docs/frontend/Swift/SwiftUi/\u901a\u77e5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/SwiftUi/\u901a\u77e5.md",tags:[],version:"current",lastUpdatedAt:1671075457,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"List\u7ec4\u4ef6",permalink:"/en/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/List"},next:{title:"\u91cd\u542fapp\u540e\u6570\u636e\u4fdd\u5b58",permalink:"/en/docs/frontend/Swift/SwiftUi/\u91cd\u542fapp\u540e\u6570\u636e\u4fdd\u5b58"}},s={},d=[{value:"\u672c\u5730\u63a8\u9001",id:"\u672c\u5730\u63a8\u9001",level:2},{value:"\u7533\u8bf7\u901a\u77e5\u6743\u9650",id:"\u7533\u8bf7\u901a\u77e5\u6743\u9650",level:3},{value:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9",id:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9",level:3},{value:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4",id:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4",level:3},{value:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b",id:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b",level:3},{value:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3",id:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3",level:3},{value:"\u8fdc\u7a0b\u63a8\u9001",id:"\u8fdc\u7a0b\u63a8\u9001",level:2}],c={toc:d};function f(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u672c\u5730\u63a8\u9001"},"\u672c\u5730\u63a8\u9001"),(0,r.kt)("h3",{id:"\u7533\u8bf7\u901a\u77e5\u6743\u9650"},"\u7533\u8bf7\u901a\u77e5\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'UNUserNotificationCenter.current().requestAuthorization(options: [.alert,.badge,.sound]){success, error in\n    if(success){\n        print("All Set!")\n    }else if let error = error{\n        print(error.localizedDescription)\n    }\n}\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9"},"\u8bbe\u7f6e\u901a\u77e5\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let content = UNMutableNotificationContent()\ncontent.title = "Feed the cat"\ncontent.subtitle = "It looks hungry"\ncontent.sound = UNNotificationSound.default\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4"},"\u8bbe\u7f6e\u901a\u77e5\u89e6\u53d1\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// show this notification five seconds from now\nlet trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5, repeats: false)\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b"},"\u521b\u5efa\u63a8\u9001\u8bf7\u6c42\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)\n")),(0,r.kt)("h3",{id:"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3"},"\u5c06\u63a8\u9001\u8bf7\u6c42\u52a0\u5165\u901a\u77e5\u4e2d\u5fc3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"UNUserNotificationCenter.current().add(request)\n")),(0,r.kt)("h2",{id:"\u8fdc\u7a0b\u63a8\u9001"},"\u8fdc\u7a0b\u63a8\u9001"))}f.isMDXComponent=!0}}]);