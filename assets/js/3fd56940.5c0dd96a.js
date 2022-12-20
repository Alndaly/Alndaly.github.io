"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2277],{94884:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(16758);const o={},i=void 0,l={unversionedId:"frontend/Swift/CoreData",id:"frontend/Swift/CoreData",title:"CoreData",description:"\u5feb\u901f\u5f00\u59cb",source:"@site/docs/frontend/Swift/CoreData.md",sourceDirName:"frontend/Swift",slug:"/frontend/Swift/CoreData",permalink:"/docs/frontend/Swift/CoreData",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/CoreData.md",tags:[],version:"current",lastUpdatedAt:1671519390,formattedLastUpdatedAt:"2022\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"Codable",permalink:"/docs/frontend/Swift/Codable"},next:{title:"SwiftUI\u7ec4\u4ef6",permalink:"/docs/category/swiftui\u7ec4\u4ef6"}},s={},p=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u4e00\u4e9b\u62a5\u9519",id:"\u4e00\u4e9b\u62a5\u9519",level:2}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u65b0\u5efaModel")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://upload.kinda.info/image/202212201449843.png",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6eModel")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://upload.kinda.info/image/202212201450214.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u65b0\u5efaDataController")),(0,r.kt)("p",null,"\u51c6\u5907\u597dModel\u6570\u636e\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6b64\u65f6\u5e76\u6ca1\u6709\u52a0\u8f7d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let container = NSPersistentContainer(name: "notify")\n')),(0,r.kt)("p",null,"\u52a0\u8f7d\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'container.loadPersistentStores{ description, error in\n    if let error = error {\n        print("Core Data fail to load, \\(error.localizedDescription)")\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'import CoreData\nimport Foundation\n\nclass DataController: ObservableObject {\n    let container = NSPersistentContainer(name: "notify")\n    \n    init(){\n        container.loadPersistentStores{ description, error in\n            if let error = error {\n                print("Core Data fail to load, \\(error.localizedDescription)")\n            }\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"App\u4e2d\u7ed1\u5b9a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{10, 15}","{10,":!0,"15}":!0},"import SwiftUI\n\n@main\nstruct notifyApp: App {\n    \n    // \u6ce8\u518c\u751f\u547d\u5468\u671f\n    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate\n    \n    // \u7ed1\u5b9aCoreData\n    @StateObject private var dataController = DataController()\n\n    var body: some Scene {\n        WindowGroup {\n            ContentView()\n                .environment(\\.managedObjectContext, dataController.container.viewContext)\n        }\n    }\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"View\u4e2d\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@FetchRequest(entity: Notify.entity(),sortDescriptors: []) var notifies: FetchedResults<Notify>\n")),(0,r.kt)("h2",{id:"\u4e00\u4e9b\u62a5\u9519"},"\u4e00\u4e9b\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Thread 1: "executeFetchRequest:error: A fetch request must have an entity."\n')),(0,r.kt)("p",null,"\u5728\u6709\u591a\u4e2a\u5b9e\u4f53\u7684\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@FetchRequest"),"\u9700\u8981\u6ce8\u660eentity\u53c2\u6570\u4f7f\u7528\u7684\u662f\u90a3\u4e2aentity\uff0c\u53ea\u6709\u4e00\u4e2aentity\u7684\u65f6\u5019\u53ef\u4ee5\u7701\u7565\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@FetchRequest(entity: Finance.entity(),  sortDescriptors: []) var finance: FetchedResults<Finance>\n")))}c.isMDXComponent=!0}}]);