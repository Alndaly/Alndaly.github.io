"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7206],{52826:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=e(87462),r=(e(67294),e(3905));e(16758);const l={title:"Swift\u5c5e\u6027"},i=void 0,s={unversionedId:"frontend/Swift/basic/\u5c5e\u6027",id:"frontend/Swift/basic/\u5c5e\u6027",title:"Swift\u5c5e\u6027",description:"swift\u5c5e\u6027\u5206\u4e3a\u4e24\u79cd",source:"@site/docs/frontend/Swift/basic/\u5c5e\u6027.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u5c5e\u6027",permalink:"/docs/frontend/Swift/basic/\u5c5e\u6027",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/basic/\u5c5e\u6027.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"2023\u5e746\u670810\u65e5",frontMatter:{title:"Swift\u5c5e\u6027"},sidebar:"frontEndSidebar",previous:{title:"Swift\u5b57\u5178",permalink:"/docs/frontend/Swift/basic/\u5b57\u5178"},next:{title:"Swift\u5faa\u73af",permalink:"/docs/frontend/Swift/basic/\u5faa\u73af"}},p={},d=[{value:"\u5b58\u50a8\u5c5e\u6027",id:"\u5b58\u50a8\u5c5e\u6027",level:2},{value:"\u5ef6\u8fdf\u5c5e\u6027",id:"\u5ef6\u8fdf\u5c5e\u6027",level:2},{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027",id:"\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"\u5c5e\u6027\u89c2\u5bdf\u5668",id:"\u5c5e\u6027\u89c2\u5bdf\u5668",level:2},{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"\u83b7\u53d6\u548c\u8bbe\u7f6e\u7c7b\u578b\u5c5e\u6027\u7684\u503c",id:"\u83b7\u53d6\u548c\u8bbe\u7f6e\u7c7b\u578b\u5c5e\u6027\u7684\u503c",level:2}],u={toc:d};function o(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"swift\u5c5e\u6027\u5206\u4e3a\u4e24\u79cd"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b58\u50a8\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ba1\u7b97\u5c5e\u6027"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5e38\u91cf\u6216\u53d8\u91cf\u4f5c\u4e3a\u5b9e\u4f8b\u7684\u4e00\u90e8\u5206"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba1\u7b97\uff08\u800c\u4e0d\u662f\u5b58\u50a8\uff09\u4e00\u4e2a\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7c7b\u548c\u7ed3\u6784\u4f53"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7c7b\u3001\u7ed3\u6784\u4f53\u548c\u679a\u4e3e")))),(0,r.kt)("h2",{id:"\u5b58\u50a8\u5c5e\u6027"},"\u5b58\u50a8\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b80\u5355\u6765\u8bf4\uff0c\u4e00\u4e2a\u5b58\u50a8\u5c5e\u6027\u5c31\u662f\u5b58\u50a8\u5728\u7279\u5b9a\u7c7b\u6216\u8005\u7ed3\u6784\u4f53\u91cc\u7684\u4e00\u4e2a\u5b9e\u4f8b\u7684\u4e00\u4e2a\u5e38\u91cf\u6216\u8005\u53d8\u91cf\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Number\n{\n   var digits: Int\n   let pi = 3.1415\n}\n\nvar n = Number(digits: 12345)\nn.digits = 67\n\nprint("\\(n.digits)")\nprint("\\(n.pi)")\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u4e2d pi \u5728\u5b9a\u4e49\u5b58\u50a8\u5c5e\u6027\u7684\u65f6\u5019\u6307\u5b9a\u9ed8\u8ba4\u503c\uff08pi = 3.1415\uff09\uff0c\u6240\u4ee5\u4e0d\u7ba1\u4f60\u4ec0\u4e48\u65f6\u5019\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53\uff0c\u5b83\u90fd\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5b9a\u4e49\u7684\u662f\u4e00\u4e2a\u5e38\u91cf\u5b58\u50a8\u5c5e\u6027\uff0c\u5982\u679c\u5c1d\u8bd5\u4fee\u6539\u5b83\u5c31\u4f1a\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Number\n{\n    var digits: Int\n    let numbers = 3.1415\n}\n\nvar n = Number(digits: 12345)\nn.digits = 67\n\nprint("\\(n.digits)")\nprint("\\(n.numbers)")\nn.numbers = 8.7\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\uff0c\u6267\u884c\u4f1a\u62a5\u9519\uff0c\u9519\u8bef\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"error: cannot assign to property: 'numbers' is a 'let' constant\nn.numbers = 8.7\n")),(0,r.kt)("h2",{id:"\u5ef6\u8fdf\u5c5e\u6027"},"\u5ef6\u8fdf\u5c5e\u6027"),(0,r.kt)("p",null,"\u5ef6\u8fdf\u5b58\u50a8\u5c5e\u6027\u662f\u6307\u5f53\u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u7684\u65f6\u5019\u624d\u4f1a\u8ba1\u7b97\u5176\u521d\u59cb\u503c\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u5728\u5c5e\u6027\u58f0\u660e\u524d\u4f7f\u7528 lazy \u6765\u6807\u793a\u4e00\u4e2a\u5ef6\u8fdf\u5b58\u50a8\u5c5e\u6027\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5fc5\u987b\u5c06\u5ef6\u8fdf\u5b58\u50a8\u5c5e\u6027\u58f0\u660e\u6210\u53d8\u91cf\uff08\u4f7f\u7528var\u5173\u952e\u5b57\uff09\uff0c\u56e0\u4e3a\u5c5e\u6027\u7684\u503c\u5728\u5b9e\u4f8b\u6784\u9020\u5b8c\u6210\u4e4b\u524d\u53ef\u80fd\u65e0\u6cd5\u5f97\u5230\u3002\u800c\u5e38\u91cf\u5c5e\u6027\u5728\u6784\u9020\u8fc7\u7a0b\u5b8c\u6210\u4e4b\u524d\u5fc5\u987b\u8981\u6709\u521d\u59cb\u503c\uff0c\u56e0\u6b64\u65e0\u6cd5\u58f0\u660e\u6210\u5ef6\u8fdf\u5c5e\u6027\u3002")),(0,r.kt)("p",null,"\u5ef6\u8fdf\u5c5e\u6027\u4e00\u822c\u7528\u4e8e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5ef6\u8fdf\u5bf9\u8c61\u7684\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u5c5e\u6027\u7684\u503c\u4f9d\u8d56\u4e8e\u5176\u4ed6\u672a\u77e5\u7c7b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class sample {\n    lazy var no = number() // `var` \u5173\u952e\u5b57\u662f\u5fc5\u987b\u7684\n}\n\nclass number {\n    var name = "Runoob Swift \u6559\u7a0b"\n}\n\nvar firstsample = sample()\nprint(firstsample.no.name)\n')),(0,r.kt)("h2",{id:"\u8ba1\u7b97\u5c5e\u6027"},"\u8ba1\u7b97\u5c5e\u6027"),(0,r.kt)("p",null,"\u9664\u5b58\u50a8\u5c5e\u6027\u5916\uff0c\u7c7b\u3001\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u53ef\u4ee5\u5b9a\u4e49\u8ba1\u7b97\u5c5e\u6027\uff0c\u8ba1\u7b97\u5c5e\u6027\u4e0d\u76f4\u63a5\u5b58\u50a8\u503c\uff0c\u800c\u662f\u63d0\u4f9b\u4e00\u4e2a getter \u6765\u83b7\u53d6\u503c\uff0c\u4e00\u4e2a\u53ef\u9009\u7684 setter \u6765\u95f4\u63a5\u8bbe\u7f6e\u5176\u4ed6\u5c5e\u6027\u6216\u53d8\u91cf\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"class sample {\n    var no1 = 0.0, no2 = 0.0\n    var length = 300.0, breadth = 150.0\n    \n    var middle: (Double, Double) {\n        get{\n            return (length / 2, breadth / 2)\n        }\n        set(axis){\n            no1 = axis.0 - (length / 2)\n            no2 = axis.1 - (breadth / 2)\n        }\n    }\n}\n\nvar result = sample()\nresult.middle = (0.0, 10.0)\n")),(0,r.kt)("h2",{id:"\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027"},"\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class film {\n    var head = ""\n    var duration = 0.0\n    var metaInfo: [String:String] {\n        return [\n            "head": self.head,\n            "duration":"\\(self.duration)"\n        ]\n    }\n}\n\nvar movie = film()\nmovie.head = "Swift \u5c5e\u6027"\nmovie.duration = 3.09\n\nprint(movie.metaInfo["head"]!)\nprint(movie.metaInfo["duration"]!)\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5fc5\u987b\u4f7f\u7528var\u5173\u952e\u5b57\u5b9a\u4e49\u8ba1\u7b97\u5c5e\u6027\uff0c\u5305\u62ec\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u503c\u4e0d\u662f\u56fa\u5b9a\u7684\u3002let\u5173\u952e\u5b57\u53ea\u7528\u6765\u58f0\u660e\u5e38\u91cf\u5c5e\u6027\uff0c\u8868\u793a\u521d\u59cb\u5316\u540e\u518d\u4e5f\u65e0\u6cd5\u4fee\u6539\u7684\u503c\u3002")),(0,r.kt)("h2",{id:"\u5c5e\u6027\u89c2\u5bdf\u5668"},"\u5c5e\u6027\u89c2\u5bdf\u5668"),(0,r.kt)("p",null,"\u5c5e\u6027\u89c2\u5bdf\u5668\u76d1\u63a7\u548c\u54cd\u5e94\u5c5e\u6027\u503c\u7684\u53d8\u5316\uff0c\u6bcf\u6b21\u5c5e\u6027\u88ab\u8bbe\u7f6e\u503c\u7684\u65f6\u5019\u90fd\u4f1a\u8c03\u7528\u5c5e\u6027\u89c2\u5bdf\u5668\uff0c\u751a\u81f3\u65b0\u7684\u503c\u548c\u73b0\u5728\u7684\u503c\u76f8\u540c\u7684\u65f6\u5019\u4e5f\u4e0d\u4f8b\u5916\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u9664\u4e86\u5ef6\u8fdf\u5b58\u50a8\u5c5e\u6027\u4e4b\u5916"),"\u7684\u5176\u4ed6\u5b58\u50a8\u5c5e\u6027\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u91cd\u8f7d\u5c5e\u6027\u7684\u65b9\u5f0f"),"\u4e3a\u7ee7\u627f\u7684\u5c5e\u6027\uff08\u5305\u62ec\u5b58\u50a8\u5c5e\u6027\u548c\u8ba1\u7b97\u5c5e\u6027\uff09\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4e3a\u5c5e\u6027\u6dfb\u52a0\u5982\u4e0b\u7684\u4e00\u4e2a\u6216\u5168\u90e8\u89c2\u5bdf\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"willSet"),"\u5728\u8bbe\u7f6e\u65b0\u7684\u503c\u4e4b\u524d\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"didSet"),"\u5728\u65b0\u7684\u503c\u88ab\u8bbe\u7f6e\u4e4b\u540e\u7acb\u5373\u8c03\u7528"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"willSet"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"didSet"),"\u89c2\u5bdf\u5668\u5728\u5c5e\u6027\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u88ab\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class Samplepgm {\n    var counter: Int = 0{\n        willSet(newTotal){\n            print("\u8ba1\u6570\u5668: \\(newTotal)")\n        }\n        didSet{\n            if counter > oldValue {\n                print("\u65b0\u589e\u6570 \\(counter - oldValue)")\n            }\n        }\n    }\n}\nlet NewCounter = Samplepgm()\nNewCounter.counter = 100\nNewCounter.counter = 800\n')),(0,r.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,r.kt)("p",null,"\u7c7b\u578b\u5c5e\u6027\u662f\u4f5c\u4e3a\u7c7b\u578b\u5b9a\u4e49\u7684\u4e00\u90e8\u5206\u5199\u5728\u7c7b\u578b\u6700\u5916\u5c42\u7684\u82b1\u62ec\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"\uff08{}\uff09"),"\u5185\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u5173\u952e\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"static"),"\u6765\u5b9a\u4e49\u503c\u7c7b\u578b\u7684\u7c7b\u578b\u5c5e\u6027\uff0c\u5173\u952e\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"\u6765\u4e3a\u7c7b\u5b9a\u4e49\u7c7b\u578b\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Structname {\n   static var storedTypeProperty = " "\n   static var computedTypeProperty: Int {\n      // \u8fd9\u91cc\u8fd4\u56de\u4e00\u4e2a Int \u503c\n   }\n}\n\nenum Enumname {\n   static var storedTypeProperty = " "\n   static var computedTypeProperty: Int {\n      // \u8fd9\u91cc\u8fd4\u56de\u4e00\u4e2a Int \u503c\n   }\n}\n\nclass Classname {\n   class var computedTypeProperty: Int {\n      // \u8fd9\u91cc\u8fd4\u56de\u4e00\u4e2a Int \u503c\n   }\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f8b\u5b50\u4e2d\u7684\u8ba1\u7b97\u578b\u7c7b\u578b\u5c5e\u6027\u662f\u53ea\u8bfb\u7684\uff0c\u4f46\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u53ef\u8bfb\u53ef\u5199\u7684\u8ba1\u7b97\u578b\u7c7b\u578b\u5c5e\u6027\uff0c\u8ddf\u5b9e\u4f8b\u8ba1\u7b97\u5c5e\u6027\u7684\u8bed\u6cd5\u7c7b\u4f3c\u3002")),(0,r.kt)("h2",{id:"\u83b7\u53d6\u548c\u8bbe\u7f6e\u7c7b\u578b\u5c5e\u6027\u7684\u503c"},"\u83b7\u53d6\u548c\u8bbe\u7f6e\u7c7b\u578b\u5c5e\u6027\u7684\u503c"),(0,r.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u5b9e\u4f8b\u7684\u5c5e\u6027\uff0c\u7c7b\u578b\u5c5e\u6027\u7684\u8bbf\u95ee\u4e5f\u662f\u901a\u8fc7\u70b9\u8fd0\u7b97\u7b26(.)\u6765\u8fdb\u884c\u3002\u4f46\u662f\uff0c\u7c7b\u578b\u5c5e\u6027\u662f\u901a\u8fc7\u7c7b\u578b\u672c\u8eab\u6765\u83b7\u53d6\u548c\u8bbe\u7f6e\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u5b9e\u4f8b\u3002\u5b9e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"struct StudMarks {\n   static let markCount = 97\n   static var totalCount = 0\n   var InternalMarks: Int = 0 {\n      didSet {\n        // \u6ce8\u610f\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u4ed6\u662f\u76f4\u63a5\u5bf9\u7c7b\u7684\u5c5e\u6027\u505a\u64cd\u4f5c\n         if InternalMarks > StudMarks.markCount {\n            InternalMarks = StudMarks.markCount\n         }\n         if InternalMarks > StudMarks.totalCount {\n            StudMarks.totalCount = InternalMarks\n         }\n      }\n   }\n}\n\nvar stud1Mark1 = StudMarks()\nvar stud1Mark2 = StudMarks()\n\nstud1Mark1.InternalMarks = 98\nprint(stud1Mark1.InternalMarks) \n\nstud1Mark2.InternalMarks = 87\nprint(stud1Mark2.InternalMarks)\n")))}o.isMDXComponent=!0}}]);