"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5967],{55750:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));t(16758);const l={title:"Swift\u7ee7\u627f"},i=void 0,s={unversionedId:"frontend/Swift/basic/\u7ee7\u627f",id:"frontend/Swift/basic/\u7ee7\u627f",title:"Swift\u7ee7\u627f",description:"\u57fa\u7c7b",source:"@site/docs/frontend/Swift/basic/\u7ee7\u627f.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u7ee7\u627f",permalink:"/en/docs/frontend/Swift/basic/\u7ee7\u627f",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/basic/\u7ee7\u627f.md",tags:[],version:"current",lastUpdatedAt:1675520920,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"Swift\u7ee7\u627f"},sidebar:"frontEndSidebar",previous:{title:"Swift\u7c7b\u578b\u522b\u540d",permalink:"/en/docs/frontend/Swift/basic/\u7c7b\u578b\u522b\u540d"},next:{title:"Swift\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",permalink:"/en/docs/frontend/Swift/basic/\u8bf7\u6c42"}},d={},p=[{value:"\u57fa\u7c7b",id:"\u57fa\u7c7b",level:2},{value:"\u5b50\u7c7b",id:"\u5b50\u7c7b",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u91cd\u5199",id:"\u91cd\u5199",level:2},{value:"\u91cd\u5199\u65b9\u6cd5",id:"\u91cd\u5199\u65b9\u6cd5",level:3},{value:"\u91cd\u5199\u5c5e\u6027",id:"\u91cd\u5199\u5c5e\u6027",level:3},{value:"\u91cd\u5199\u5c5e\u6027\u89c2\u5bdf\u5668",id:"\u91cd\u5199\u5c5e\u6027\u89c2\u5bdf\u5668",level:3},{value:"\u9632\u6b62\u91cd\u5199",id:"\u9632\u6b62\u91cd\u5199",level:2}],u={toc:p};function o(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u7c7b"},"\u57fa\u7c7b"),(0,r.kt)("p",null,"\u6ca1\u6709\u7ee7\u627f\u5176\u5b83\u7c7b\u7684\u7c7b\uff0c\u79f0\u4e4b\u4e3a\u57fa\u7c7b\uff08Base Class\uff09\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u4e2d\u6211\u4eec\u5b9a\u4e49\u4e86\u57fa\u7c7b StudDetails \uff0c\u63cf\u8ff0\u4e86\u5b66\u751f\uff08stname\uff09\u53ca\u5176\u5404\u79d1\u6210\u7ee9\u7684\u5206\u6570(mark1\u3001mark2\u3001mark3)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class StudDetails {\n    var stname: String!\n    var mark1: Int!\n    var mark2: Int!\n    var mark3: Int!\n    init(stname: String, mark1: Int, mark2: Int, mark3: Int) {\n        self.stname = stname\n        self.mark1 = mark1\n        self.mark2 = mark2\n        self.mark3 = mark3\n    }\n}\nlet stname = "swift"\nlet mark1 = 98\nlet mark2 = 89\nlet mark3 = 76\n\nlet sds = StudDetails(stname:stname, mark1:mark1, mark2:mark2, mark3:mark3);\n')),(0,r.kt)("h2",{id:"\u5b50\u7c7b"},"\u5b50\u7c7b"),(0,r.kt)("p",null,"\u5b50\u7c7b\u6307\u7684\u662f\u5728\u4e00\u4e2a\u5df2\u6709\u7c7b\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7c7b\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6307\u660e\u67d0\u4e2a\u7c7b\u7684\u8d85\u7c7b\uff0c\u5c06\u8d85\u7c7b\u540d\u5199\u5728\u5b50\u7c7b\u540d\u7684\u540e\u9762\uff0c\u7528\u5192\u53f7(",(0,r.kt)("inlineCode",{parentName:"p"},":"),")\u5206\u9694,\u8bed\u6cd5\u683c\u5f0f\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"class SomeClass: SomeSuperclass {\n    // \u7c7b\u7684\u5b9a\u4e49\n}\n")),(0,r.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class StudDetails\n{\n    var mark1: Int;\n    var mark2: Int;\n    \n    init(stm1:Int, results stm2:Int)\n    {\n        mark1 = stm1;\n        mark2 = stm2;\n    }\n    \n    func show()\n    {\n        print("Mark1:\\(self.mark1), Mark2:\\(self.mark2)")\n    }\n}\n\nclass Tom : StudDetails\n{\n    init()\n    {\n        super.init(stm1: 93, results: 89)\n    }\n}\n\nlet tom = Tom()\ntom.show()\n')),(0,r.kt)("h2",{id:"\u91cd\u5199"},"\u91cd\u5199"),(0,r.kt)("p",null,"\u5b50\u7c7b\u53ef\u4ee5\u901a\u4fee\u6539\u7ee7\u627f\u6765\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u7c7b\u65b9\u6cd5\uff0c\u5b9e\u4f8b\u5c5e\u6027\uff0c\u6216\u4e0b\u6807\u811a\u672c\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u5b9a\u5236\u529f\u80fd\uff0c\u6211\u4eec\u628a\u8fd9\u79cd\u884c\u4e3a\u53eb\u91cd\u5199\uff08overriding\uff09\u3002\n\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"override"),"\u5173\u952e\u5b57\u6765\u5b9e\u73b0\u91cd\u5199\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"super"),"\u524d\u7f00\u6765\u8bbf\u95ee\u8d85\u7c7b\u7684\u65b9\u6cd5\uff0c\u5c5e\u6027\u6216\u4e0b\u6807\u811a\u672c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u91cd\u5199"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bbf\u95ee\u65b9\u6cd5\uff0c\u5c5e\u6027\uff0c\u4e0b\u6807\u811a\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:null},"super.somemethod()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"super.someProperty()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u6807\u811a\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"super","[someIndex]")))),(0,r.kt)("h3",{id:"\u91cd\u5199\u65b9\u6cd5"},"\u91cd\u5199\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class SuperClass {\n    func show() {\n        print("\u8fd9\u662f\u8d85\u7c7b SuperClass")\n    }\n}\n\nclass SubClass: SuperClass  {\n    override func show() {\n        print("\u8fd9\u662f\u5b50\u7c7b SubClass")\n    }\n}\n\nlet superClass = SuperClass()\nsuperClass.show()\n\nlet subClass = SubClass()\nsubClass.show()\n')),(0,r.kt)("h3",{id:"\u91cd\u5199\u5c5e\u6027"},"\u91cd\u5199\u5c5e\u6027"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u63d0\u4f9b\u5b9a\u5236\u7684 getter\uff08\u6216 setter\uff09\u6765\u91cd\u5199\u4efb\u610f\u7ee7\u627f\u6765\u7684\u5c5e\u6027\uff0c\u65e0\u8bba\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u662f\u5b58\u50a8\u578b\u7684\u8fd8\u662f\u8ba1\u7b97\u578b\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u5b50\u7c7b\u5e76\u4e0d\u77e5\u9053\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u662f\u5b58\u50a8\u578b\u7684\u8fd8\u662f\u8ba1\u7b97\u578b\u7684\uff0c\u5b83\u53ea\u77e5\u9053\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u4f1a\u6709\u4e00\u4e2a\u540d\u5b57\u548c\u7c7b\u578b\u3002\u6240\u4ee5\u4f60\u5728\u91cd\u5199\u4e00\u4e2a\u5c5e\u6027\u65f6\uff0c\u5fc5\u9700\u5c06\u5b83\u7684\u540d\u5b57\u548c\u7c7b\u578b\u90fd\u5199\u51fa\u6765\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728\u91cd\u5199\u5c5e\u6027\u4e2d\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"setter"),"\uff0c\u90a3\u4e48\u4f60\u4e5f\u4e00\u5b9a\u8981\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"li"},"getter"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u60f3\u5728\u91cd\u5199\u7248\u672c\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"getter")," \u91cc\u4fee\u6539\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u503c\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"super.someProperty"),"\u6765\u8fd4\u56de\u7ee7\u627f\u6765\u7684\u503c\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"someProperty"),"\u662f\u4f60\u8981\u91cd\u5199\u7684\u5c5e\u6027\u7684\u540d\u5b57\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class Circle {\n    var radius = 12.5\n    var area: String {\n        return "\u77e9\u5f62\u534a\u5f84 \\(radius) "\n    }\n}\n\n// \u7ee7\u627f\u8d85\u7c7b Circle\nclass Rectangle: Circle {\n    var print = 7\n    override var area: String {\n        return super.area + " \uff0c\u4f46\u73b0\u5728\u88ab\u91cd\u5199\u4e3a \\(print)"\n    }\n}\n\nlet rect = Rectangle()\nrect.radius = 25.0\nrect.print = 3\nprint("Radius \\(rect.area)")\n')),(0,r.kt)("h3",{id:"\u91cd\u5199\u5c5e\u6027\u89c2\u5bdf\u5668"},"\u91cd\u5199\u5c5e\u6027\u89c2\u5bdf\u5668"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5c5e\u6027\u91cd\u5199\u4e2d\u4e3a\u4e00\u4e2a\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u5f53\u7ee7\u627f\u6765\u7684\u5c5e\u6027\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f60\u5c31\u4f1a\u76d1\u6d4b\u5230\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u4e0d\u53ef\u4ee5\u4e3a\u7ee7\u627f\u6765\u7684\u5e38\u91cf\u5b58\u50a8\u578b\u5c5e\u6027\u6216\u7ee7\u627f\u6765\u7684\u53ea\u8bfb\u8ba1\u7b97\u578b\u5c5e\u6027\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class Circle {\n    var radius = 12.5\n    var area: String {\n        return "\u77e9\u5f62\u534a\u5f84\u4e3a \\(radius) "\n    }\n}\n\nclass Rectangle: Circle {\n    var print = 7\n    override var area: String {\n        return super.area + " \uff0c\u4f46\u73b0\u5728\u88ab\u91cd\u5199\u4e3a \\(print)"\n    }\n}\n\n\nlet rect = Rectangle()\nrect.radius = 25.0\nrect.print = 3\nprint("\u534a\u5f84: \\(rect.area)")\n\nclass Square: Rectangle {\n    override var radius: Double {\n        didSet {\n            print = Int(radius/5.0)+1\n        }\n    }\n}\n\n\nlet sq = Square()\nsq.radius = 100.0\nprint("\u534a\u5f84: \\(sq.area)")\n')),(0,r.kt)("h2",{id:"\u9632\u6b62\u91cd\u5199"},"\u9632\u6b62\u91cd\u5199"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," \u5173\u952e\u5b57\u9632\u6b62\u5b83\u4eec\u88ab\u91cd\u5199\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u91cd\u5199\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"final"),"\u65b9\u6cd5\uff0c\u5c5e\u6027\u6216\u4e0b\u6807\u811a\u672c\uff0c\u5728\u7f16\u8bd1\u65f6\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5173\u952e\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"\u524d\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"final"),"\u7279\u6027\uff08final class\uff09\u6765\u5c06\u6574\u4e2a\u7c7b\u6807\u8bb0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"final")," \u7684\uff0c\u8fd9\u6837\u7684\u7c7b\u662f\u4e0d\u53ef\u88ab\u7ee7\u627f\u7684\uff0c\u5426\u5219\u4f1a\u62a5\u7f16\u8bd1\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'final class Circle {\n    final var radius = 12.5\n    var area: String {\n        return "\u77e9\u5f62\u534a\u5f84\u4e3a \\(radius) "\n    }\n}\nclass Rectangle: Circle {\n    var print = 7\n    override var area: String {\n        return super.area + " \uff0c\u4f46\u73b0\u5728\u88ab\u91cd\u5199\u4e3a \\(print)"\n    }\n}\n\nlet rect = Rectangle()\nrect.radius = 25.0\nrect.print = 3\nprint("\u534a\u5f84: \\(rect.area)")\n\nclass Square: Rectangle {\n    override var radius: Double {\n        didSet {\n            print = Int(radius/5.0)+1\n        }\n    }\n}\n\nlet sq = Square()\nsq.radius = 100.0\nprint("\u534a\u5f84: \\(sq.area)")\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4fbf\u4f1a\u62a5\u9519"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"error: var overrides a 'final' var\n    override var area: String {\n                 ^\nnote: overridden declaration is here\n    var area: String {\n        ^\nerror: var overrides a 'final' var\n    override var radius: Double {\n                 ^\nnote: overridden declaration is here\n    final var radius = 12.5\n              ^\nerror: inheritance from a final class 'Circle'\nclass Rectangle: Circle {\n      ^\n")))}o.isMDXComponent=!0}}]);