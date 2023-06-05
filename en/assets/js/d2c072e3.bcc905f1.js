"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4052],{62380:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));t(16758);const r={title:"Swift\u534f\u8bae"},l=void 0,o={unversionedId:"frontend/Swift/basic/\u534f\u8bae",id:"frontend/Swift/basic/\u534f\u8bae",title:"Swift\u534f\u8bae",description:"\u534f\u8bae\u89c4\u5b9a\u4e86\u7528\u6765\u5b9e\u73b0\u67d0\u4e00\u7279\u5b9a\u529f\u80fd\u6240\u5fc5\u9700\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u3002",source:"@site/docs/frontend/Swift/basic/\u534f\u8bae.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u534f\u8bae",permalink:"/en/docs/frontend/Swift/basic/\u534f\u8bae",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/basic/\u534f\u8bae.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"Swift\u534f\u8bae"},sidebar:"frontEndSidebar",previous:{title:"Swift\u51fd\u6570",permalink:"/en/docs/frontend/Swift/basic/\u51fd\u6570"},next:{title:"Swift\u5b57\u5178",permalink:"/en/docs/frontend/Swift/basic/\u5b57\u5178"}},i={},c=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5bf9\u5c5e\u6027\u7684\u89c4\u5b9a",id:"\u5bf9\u5c5e\u6027\u7684\u89c4\u5b9a",level:2},{value:"\u5bf9Mutating\u65b9\u6cd5\u7684\u89c4\u5b9a",id:"\u5bf9mutating\u65b9\u6cd5\u7684\u89c4\u5b9a",level:2},{value:"\u5bf9\u6784\u9020\u5668\u7684\u89c4\u5b9a",id:"\u5bf9\u6784\u9020\u5668\u7684\u89c4\u5b9a",level:2},{value:"\u534f\u8bae\u7684\u7ee7\u627f",id:"\u534f\u8bae\u7684\u7ee7\u627f",level:2},{value:"\u7c7b\u4e13\u5c5e\u7684\u534f\u8bae",id:"\u7c7b\u4e13\u5c5e\u7684\u534f\u8bae",level:2},{value:"\u534f\u8bae\u5408\u6210",id:"\u534f\u8bae\u5408\u6210",level:2},{value:"\u68c0\u9a8c\u534f\u8bae\u7684\u4e00\u81f4\u6027",id:"\u68c0\u9a8c\u534f\u8bae\u7684\u4e00\u81f4\u6027",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3}],u={toc:c};function d(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u534f\u8bae\u89c4\u5b9a\u4e86\u7528\u6765\u5b9e\u73b0\u67d0\u4e00\u7279\u5b9a\u529f\u80fd\u6240\u5fc5\u9700\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u3002"),(0,s.kt)("p",null,"\u4efb\u610f\u80fd\u591f\u6ee1\u8db3\u534f\u8bae\u8981\u6c42\u7684\u7c7b\u578b\u88ab\u79f0\u4e3a\u9075\u5faa(conform)\u8fd9\u4e2a\u534f\u8bae\u3002"),(0,s.kt)("p",null,"\u7c7b\uff0c\u7ed3\u6784\u4f53\u6216\u679a\u4e3e\u7c7b\u578b\u90fd\u53ef\u4ee5\u9075\u5faa\u534f\u8bae\uff0c\u5e76\u63d0\u4f9b\u5177\u4f53\u5b9e\u73b0\u6765\u5b8c\u6210\u534f\u8bae\u5b9a\u4e49\u7684\u65b9\u6cd5\u548c\u529f\u80fd\u3002"),(0,s.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"protocol SomeProtocol {\n    // \u534f\u8bae\u5185\u5bb9\n}\n")),(0,s.kt)("p",null,"\u8981\u4f7f\u7c7b\u9075\u5faa\u67d0\u4e2a\u534f\u8bae\uff0c\u9700\u8981\u5728\u7c7b\u578b\u540d\u79f0\u540e\u52a0\u4e0a\u534f\u8bae\u540d\u79f0\uff0c\u4e2d\u95f4\u4ee5\u5192\u53f7:\u5206\u9694\uff0c\u4f5c\u4e3a\u7c7b\u578b\u5b9a\u4e49\u7684\u4e00\u90e8\u5206\u3002\u9075\u5faa\u591a\u4e2a\u534f\u8bae\u65f6\uff0c\u5404\u534f\u8bae\u4e4b\u95f4\u7528\u9017\u53f7,\u5206\u9694\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"struct SomeStructure: FirstProtocol, AnotherProtocol {\n    // \u7ed3\u6784\u4f53\u5185\u5bb9\n}\n")),(0,s.kt)("p",null,"\u5982\u679c\u7c7b\u5728\u9075\u5faa\u534f\u8bae\u7684\u540c\u65f6\u62e5\u6709\u7236\u7c7b\uff0c\u5e94\u8be5\u5c06\u7236\u7c7b\u540d\u653e\u5728\u534f\u8bae\u540d\u4e4b\u524d\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"class SomeClass: SomeSuperClass, FirstProtocol, AnotherProtocol {\n    // \u7c7b\u7684\u5185\u5bb9\n}\n")),(0,s.kt)("h2",{id:"\u5bf9\u5c5e\u6027\u7684\u89c4\u5b9a"},"\u5bf9\u5c5e\u6027\u7684\u89c4\u5b9a"),(0,s.kt)("p",null,"\u534f\u8bae\u7528\u4e8e\u6307\u5b9a\u7279\u5b9a\u7684\u5b9e\u4f8b\u5c5e\u6027\u6216\u7c7b\u5c5e\u6027\uff0c\u800c\u4e0d\u7528\u6307\u5b9a\u662f\u5b58\u50a8\u578b\u5c5e\u6027\u6216\u8ba1\u7b97\u578b\u5c5e\u6027\u3002\u6b64\u5916\u8fd8\u5fc5\u987b\u6307\u660e\u662f\u53ea\u8bfb\u7684\u8fd8\u662f\u53ef\u8bfb\u53ef\u5199\u7684\u3002"),(0,s.kt)("p",null,"\u534f\u8bae\u4e2d\u7684\u901a\u5e38\u7528var\u6765\u58f0\u660e\u53d8\u91cf\u5c5e\u6027\uff0c\u5728\u7c7b\u578b\u58f0\u660e\u540e\u52a0\u4e0a{ set get }\u6765\u8868\u793a\u5c5e\u6027\u662f\u53ef\u8bfb\u53ef\u5199\u7684\uff0c\u53ea\u8bfb\u5c5e\u6027\u5219\u7528{ get }\u6765\u8868\u793a\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'protocol classa {\n    \n    var marks: Int { get set }\n    var result: Bool { get }\n    \n    func attendance() -> String\n    func markssecured() -> String\n    \n}\n\nprotocol classb: classa {\n    \n    var present: Bool { get set }\n    var subject: String { get set }\n    var stname: String { get set }\n    \n}\n\nclass classc: classb {\n    var marks = 96\n    let result = true\n    var present = false\n    var subject = "Swift \u534f\u8bae"\n    var stname = "Protocols"\n    \n    func attendance() -> String {\n        return "The \\(stname) has secured 99% attendance"\n    }\n    \n    func markssecured() -> String {\n        return "\\(stname) has scored \\(marks)"\n    }\n}\n\nlet studdet = classc()\nstuddet.stname = "Swift"\nstuddet.marks = 98\nstuddet.markssecured()\n')),(0,s.kt)("h2",{id:"\u5bf9mutating\u65b9\u6cd5\u7684\u89c4\u5b9a"},"\u5bf9Mutating\u65b9\u6cd5\u7684\u89c4\u5b9a"),(0,s.kt)("p",null,"\u6709\u65f6\u9700\u8981\u5728\u65b9\u6cd5\u4e2d\u6539\u53d8\u5b83\u7684\u5b9e\u4f8b\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\uff0c\u503c\u7c7b\u578b(\u7ed3\u6784\u4f53\uff0c\u679a\u4e3e)\u7684\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\uff0c\u5c06mutating\u5173\u952e\u5b57\u4f5c\u4e3a\u51fd\u6570\u7684\u524d\u7f00\uff0c\u5199\u5728func\u4e4b\u524d\uff0c\u8868\u793a\u53ef\u4ee5\u5728\u8be5\u65b9\u6cd5\u4e2d\u4fee\u6539\u5b83\u6240\u5c5e\u7684\u5b9e\u4f8b\u53ca\u5176\u5b9e\u4f8b\u5c5e\u6027\u7684\u503c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'protocol daysofaweek {\n    mutating func show()\n}\n\nenum days: daysofaweek {\n    case sun, mon, tue, wed, thurs, fri, sat\n    mutating func show() {\n        switch self {\n        case .sun:\n            self = .sun\n            print("Sunday")\n        case .mon:\n            self = .mon\n            print("Monday")\n        case .tue:\n            self = .tue\n            print("Tuesday")\n        case .wed:\n            self = .wed\n            print("Wednesday")\n        case .thurs:\n            self = .thurs\n            print("Wednesday")\n        case .fri:\n            self = .fri\n            print("Firday")\n        case .sat:\n            self = .sat\n            print("Saturday")\n        default:\n            print("NO Such Day")\n        }\n    }\n}\n\nvar res = days.wed\nres.show()\n')),(0,s.kt)("h2",{id:"\u5bf9\u6784\u9020\u5668\u7684\u89c4\u5b9a"},"\u5bf9\u6784\u9020\u5668\u7684\u89c4\u5b9a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"protocol SomeProtocol {\n   init(someParameter: Int)\n}\n")),(0,s.kt)("h2",{id:"\u534f\u8bae\u7684\u7ee7\u627f"},"\u534f\u8bae\u7684\u7ee7\u627f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"protocol InheritingProtocol: SomeProtocol, AnotherProtocol {\n    // \u534f\u8bae\u5b9a\u4e49\n}\n")),(0,s.kt)("h2",{id:"\u7c7b\u4e13\u5c5e\u7684\u534f\u8bae"},"\u7c7b\u4e13\u5c5e\u7684\u534f\u8bae"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u534f\u8bae\u7684\u7ee7\u627f\u5217\u8868\u4e2d,\u901a\u8fc7\u6dfb\u52a0class\u5173\u952e\u5b57,\u9650\u5236\u534f\u8bae\u53ea\u80fd\u9002\u914d\u5230\u7c7b\uff08class\uff09\u7c7b\u578b\u3002"),(0,s.kt)("p",null,"\u8be5class\u5173\u952e\u5b57\u5fc5\u987b\u662f\u7b2c\u4e00\u4e2a\u51fa\u73b0\u5728\u534f\u8bae\u7684\u7ee7\u627f\u5217\u8868\u4e2d\uff0c\u5176\u540e\uff0c\u624d\u662f\u5176\u4ed6\u7ee7\u627f\u534f\u8bae\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"protocol SomeClassOnlyProtocol: class, SomeInheritedProtocol {\n    // \u534f\u8bae\u5b9a\u4e49\n}\n")),(0,s.kt)("h2",{id:"\u534f\u8bae\u5408\u6210"},"\u534f\u8bae\u5408\u6210"),(0,s.kt)("p",null,"Swift \u652f\u6301\u5408\u6210\u591a\u4e2a\u534f\u8bae\uff0c\u8fd9\u5728\u6211\u4eec\u9700\u8981\u540c\u65f6\u9075\u5faa\u591a\u4e2a\u534f\u8bae\u65f6\u975e\u5e38\u6709\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'protocol Stname {\n    var name: String { get }\n}\n\nprotocol Stage {\n    var age: Int { get }\n}\n\nstruct Person: Stname, Stage {\n    var name: String\n    var age: Int\n}\n\nfunc show(celebrator: Stname & Stage) {\n    print("\\(celebrator.name) is \\(celebrator.age) years old")\n}\n\nlet studname = Person(name: "Priya", age: 21)\nprint(studname)\n\nlet stud = Person(name: "Rehan", age: 29)\nprint(stud)\n\nlet student = Person(name: "Roshan", age: 19)\nprint(student)\n')),(0,s.kt)("h2",{id:"\u68c0\u9a8c\u534f\u8bae\u7684\u4e00\u81f4\u6027"},"\u68c0\u9a8c\u534f\u8bae\u7684\u4e00\u81f4\u6027"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"is"),"\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"as"),"\u64cd\u4f5c\u7b26\u6765\u68c0\u67e5\u662f\u5426\u9075\u5faa\u67d0\u4e00\u534f\u8bae\u6216\u5f3a\u5236\u8f6c\u5316\u4e3a\u67d0\u4e00\u7c7b\u578b\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"is"),"\u64cd\u4f5c\u7b26\u7528\u6765\u68c0\u67e5\u5b9e\u4f8b\u662f\u5426\u9075\u5faa\u4e86\u67d0\u4e2a\u534f\u8bae\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"as?"),"\u8fd4\u56de\u4e00\u4e2a\u53ef\u9009\u503c\uff0c\u5f53\u5b9e\u4f8b\u9075\u5faa\u534f\u8bae\u65f6\uff0c\u8fd4\u56de\u8be5\u534f\u8bae\u7c7b\u578b\uff1b\u5426\u5219\u8fd4\u56de",(0,s.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"as"),"\u7528\u4ee5\u5f3a\u5236\u5411\u4e0b\u8f6c\u578b\uff0c\u5982\u679c\u5f3a\u8f6c\u5931\u8d25\uff0c\u4f1a\u5f15\u8d77\u8fd0\u884c\u65f6\u9519\u8bef\u3002"),(0,s.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'protocol HasArea {\n    var area: Double { get }\n}\n\n// \u5b9a\u4e49\u4e86Circle\u7c7b\uff0c\u90fd\u9075\u5faa\u4e86HasArea\u534f\u8bae\nclass Circle: HasArea {\n    let pi = 3.1415927\n    var radius: Double\n    var area: Double { return pi * radius * radius }\n    init(radius: Double) { self.radius = radius }\n}\n\n// \u5b9a\u4e49\u4e86Country\u7c7b\uff0c\u90fd\u9075\u5faa\u4e86HasArea\u534f\u8bae\nclass Country: HasArea {\n    var area: Double\n    init(area: Double) { self.area = area }\n}\n\n// Animal\u662f\u4e00\u4e2a\u6ca1\u6709\u5b9e\u73b0HasArea\u534f\u8bae\u7684\u7c7b\nclass Animal {\n    var legs: Int\n    init(legs: Int) { self.legs = legs }\n}\n\nlet objects: [AnyObject] = [\n    Circle(radius: 2.0),\n    Country(area: 243_610),\n    Animal(legs: 4)\n]\n\nfor object in objects {\n    // \u5bf9\u8fed\u4ee3\u51fa\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u5b83\u662f\u5426\u9075\u5faa\u4e86HasArea\u534f\u8bae\n    if let objectWithArea = object as? HasArea {\n        print("\u9762\u79ef\u4e3a \\(objectWithArea.area)")\n    } else {\n        print("\u6ca1\u6709\u9762\u79ef")\n    }\n}\n')))}d.isMDXComponent=!0}}]);