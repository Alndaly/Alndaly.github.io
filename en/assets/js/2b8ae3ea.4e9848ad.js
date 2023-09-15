"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5074],{93782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(16758);const r={title:"Swift\u679a\u4e3e"},s=void 0,l={unversionedId:"frontend/Swift/basic/\u679a\u4e3e",id:"frontend/Swift/basic/\u679a\u4e3e",title:"Swift\u679a\u4e3e",description:"- \u5b83\u58f0\u660e\u5728\u7c7b\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u5316\u7c7b\u6765\u8bbf\u95ee\u5b83\u7684\u503c\u3002",source:"@site/docs/frontend/Swift/basic/\u679a\u4e3e.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u679a\u4e3e",permalink:"/en/docs/frontend/Swift/basic/\u679a\u4e3e",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/basic/\u679a\u4e3e.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{title:"Swift\u679a\u4e3e"},sidebar:"frontEndSidebar",previous:{title:"Swift\u6790\u6784",permalink:"/en/docs/frontend/Swift/basic/\u6790\u6784"},next:{title:"Swift\u6cdb\u578b",permalink:"/en/docs/frontend/Swift/basic/\u6cdb\u578b"}},o={},d=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u76f8\u5173\u503c",id:"\u76f8\u5173\u503c",level:2},{value:"\u539f\u59cb\u503c",id:"\u539f\u59cb\u503c",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u679a\u4e3e\u7684\u529f\u80fd",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u5b83\u58f0\u660e\u5728\u7c7b\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u5316\u7c7b\u6765\u8bbf\u95ee\u5b83\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u679a\u4e3e\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u6784\u9020\u51fd\u6570\uff08initializers\uff09\u6765\u63d0\u4f9b\u4e00\u4e2a\u521d\u59cb\u6210\u5458\u503c\uff1b\u53ef\u4ee5\u5728\u539f\u59cb\u7684\u5b9e\u73b0\u57fa\u7840\u4e0a\u6269\u5c55\u5b83\u4eec\u7684\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u9075\u5b88\u534f\u8bae\uff08protocols\uff09\u6765\u63d0\u4f9b\u6807\u51c6\u7684\u529f\u80fd\u3002"))),(0,i.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"enum enumname{\n    // \u679a\u4e3e\u5b9a\u4e49\u653e\u5728\u8fd9\u91cc\n}\n")),(0,i.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u5b9a\u4e49\u4e0b\u8868\u793a\u661f\u671f\u7684\u679a\u4e3e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u5b9a\u4e49\u679a\u4e3e\nenum DaysofaWeek {\n    case Sunday\n    case Monday\n    case TUESDAY\n    case WEDNESDAY\n    case THURSDAY\n    case FRIDAY\n    case Saturday\n}\n\nvar weekDay = DaysofaWeek.THURSDAY\nweekDay = .THURSDAY\nswitch weekDay {\n    case .Sunday:\n        print("\u661f\u671f\u5929")\n    case .Monday:\n        print("\u661f\u671f\u4e00")\n    case .TUESDAY:\n        print("\u661f\u671f\u4e8c")\n    case .WEDNESDAY:\n        print("\u661f\u671f\u4e09")\n    case .THURSDAY:\n        print("\u661f\u671f\u56db")\n    case .FRIDAY:\n        print("\u661f\u671f\u4e94")\n    case .Saturday:\n        print("\u661f\u671f\u516d")\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"weekDay"),"\u7684\u7c7b\u578b\u53ef\u4ee5\u5728\u5b83\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"DaysofaWeek"),"\u7684\u4e00\u4e2a\u53ef\u80fd\u503c\u521d\u59cb\u5316\u65f6\u63a8\u65ad\u51fa\u6765\u3002\u4e00",(0,i.kt)("inlineCode",{parentName:"p"},"\u65e6weekDay"),"\u88ab\u58f0\u660e\u4e3a\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"DaysofaWeek"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u7f29\u5199\u8bed\u6cd5\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"."),"\uff09\u5c06\u5176\u8bbe\u7f6e\u4e3a\u53e6\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"DaysofaWeek"),"\u7684\u503c\u3002")),(0,i.kt)("h2",{id:"\u76f8\u5173\u503c"},"\u76f8\u5173\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u6570\u636e\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"\u503c\u7684\u521b\u5efa\u57fa\u4e8e\u5e38\u91cf\u6216\u53d8\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5173\u503c\u662f\u5f53\u4f60\u5728\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u679a\u4e3e\u6210\u5458\u7684\u65b0\u5e38\u91cf\u6216\u53d8\u91cf\u65f6\u624d\u4f1a\u88ab\u8bbe\u7f6e\uff0c\u5e76\u4e14\u6bcf\u6b21\u5f53\u4f60\u8fd9\u4e48\u505a\u5f97\u65f6\u5019\uff0c\u5b83\u7684\u503c\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'enum Student{\n    case Name(String)\n    case Mark(Int,Int,Int)\n}\nvar studDetails = Student.Name("Runoob")\nvar studMarks = Student.Mark(98,97,95)\nswitch studMarks {\n    case .Name(let studName):\n        print("\u5b66\u751f\u7684\u540d\u5b57\u662f: \\(studName)\u3002")\n    case .Mark(let Mark1, let Mark2, let Mark3):\n        print("\u5b66\u751f\u7684\u6210\u7ee9\u662f: \\(Mark1),\\(Mark2),\\(Mark3)\u3002")\n}\n')),(0,i.kt)("h2",{id:"\u539f\u59cb\u503c"},"\u539f\u59cb\u503c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f8\u540c\u6570\u636e\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"\u9884\u5148\u586b\u5145\u7684\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u539f\u59cb\u503c\u59cb\u7ec8\u662f\u76f8\u540c\u7684")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'enum Month: Int {\n    case January = 1, February, March, April, May, June, July, August, September, October, November, December\n}\n\nlet yearMonth = Month.May.rawValue\nprint("\u6570\u5b57\u6708\u4efd\u4e3a: \\(yearMonth)\u3002")\n')))}u.isMDXComponent=!0}}]);