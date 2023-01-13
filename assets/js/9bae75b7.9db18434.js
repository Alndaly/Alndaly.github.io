"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8226],{57776:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>k});var a=e(87462),l=(e(67294),e(3905));e(16758);const r={title:"Swift\u7c7b\u548c\u7ed3\u6784\u4f53"},i=void 0,s={unversionedId:"frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53",id:"frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53",title:"Swift\u7c7b\u548c\u7ed3\u6784\u4f53",description:"\u7ed3\u6784\u4f53",source:"@site/docs/frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53",permalink:"/docs/frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53.md",tags:[],version:"current",lastUpdatedAt:1673619540,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{title:"Swift\u7c7b\u548c\u7ed3\u6784\u4f53"},sidebar:"frontEndSidebar",previous:{title:"Swift\u6cdb\u578b",permalink:"/docs/frontend/Swift/basic/\u6cdb\u578b"},next:{title:"Swift\u7c7b\u578b\u522b\u540d",permalink:"/docs/frontend/Swift/basic/\u7c7b\u578b\u522b\u540d"}},u={},k=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"<code>init</code>\u51fd\u6570(\u7ed3\u6784\u4f53\u548c\u7c7b\u90fd\u6709\u8fd9\u4e00\u51fd\u6570)",id:"init\u51fd\u6570\u7ed3\u6784\u4f53\u548c\u7c7b\u90fd\u6709\u8fd9\u4e00\u51fd\u6570",level:3},{value:"\u5728\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4fee\u6539\u503c\u7c7b\u578b\uff08\u53ea\u6709\u5728<code>struct</code>\u4e2d\u53ef\u4ee5\u4f7f\u7528<code>mutating</code>\uff09",id:"\u5728\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4fee\u6539\u503c\u7c7b\u578b\u53ea\u6709\u5728struct\u4e2d\u53ef\u4ee5\u4f7f\u7528mutating",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:3},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:3},{value:"\u7c7b",id:"\u7c7b",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:3},{value:"self\u5c5e\u6027",id:"self\u5c5e\u6027",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5-1",level:3},{value:"Swift\u7c7b\u548c\u7ed3\u6784\u4f53\u5bf9\u6bd4",id:"swift\u7c7b\u548c\u7ed3\u6784\u4f53\u5bf9\u6bd4",level:2}],c={toc:k};function m(t){let{components:n,...e}=t;return(0,l.kt)("wrapper",(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,l.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"struct nameStruct { \n   Definition 1\n   Definition 2\n   \u2026\u2026\n   Definition N\n}\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'struct studentMarks {\n   var mark1 = 100\n   var mark2 = 78\n   var mark3 = 98\n}\nlet marks = studentMarks()\nprint("Mark1 \u662f \\(marks.mark1)")\nprint("Mark2 \u662f \\(marks.mark2)")\nprint("Mark3 \u662f \\(marks.mark3)")\n')),(0,l.kt)("h3",{id:"init\u51fd\u6570\u7ed3\u6784\u4f53\u548c\u7c7b\u90fd\u6709\u8fd9\u4e00\u51fd\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"init"),"\u51fd\u6570(\u7ed3\u6784\u4f53\u548c\u7c7b\u90fd\u6709\u8fd9\u4e00\u51fd\u6570)"),(0,l.kt)("p",null,"\u63a5\u6536\u53c2\u6570\uff0c\u521d\u59cb\u5316\u7ed3\u6784\u4f53\u5185\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"struct MarksStruct {\n   var mark: Int\n\n   init(mark: Int) {\n      self.mark = mark\n   }\n}\nvar aStruct = MarksStruct(mark: 98)\nvar bStruct = aStruct // aStruct \u548c bStruct \u662f\u4f7f\u7528\u76f8\u540c\u503c\u7684\u7ed3\u6784\u4f53\uff01\nbStruct.mark = 97\nprint(aStruct.mark) // 98\nprint(bStruct.mark) // 97\n")),(0,l.kt)("h3",{id:"\u5728\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4fee\u6539\u503c\u7c7b\u578b\u53ea\u6709\u5728struct\u4e2d\u53ef\u4ee5\u4f7f\u7528mutating"},"\u5728\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4fee\u6539\u503c\u7c7b\u578b\uff08\u53ea\u6709\u5728",(0,l.kt)("inlineCode",{parentName:"h3"},"struct"),"\u4e2d\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"mutating"),"\uff09"),(0,l.kt)("p",null,"Swift \u8bed\u8a00\u4e2d\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u662f\u503c\u7c7b\u578b\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u503c\u7c7b\u578b\u7684\u5c5e\u6027\u4e0d\u80fd\u5728\u5b83\u7684\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u88ab\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u786e\u5b9e\u9700\u8981\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u65b9\u6cd5\u4e2d\u4fee\u6539\u7ed3\u6784\u4f53\u6216\u8005\u679a\u4e3e\u7684\u5c5e\u6027\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u53d8\u5f02(mutating)\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u7136\u540e\u65b9\u6cd5\u5c31\u53ef\u4ee5\u4ece\u65b9\u6cd5\u5185\u90e8\u6539\u53d8\u5b83\u7684\u5c5e\u6027\uff1b\u5e76\u4e14\u5b83\u505a\u7684\u4efb\u4f55\u6539\u53d8\u5728\u65b9\u6cd5\u7ed3\u675f\u65f6\u8fd8\u4f1a\u4fdd\u7559\u5728\u539f\u59cb\u7ed3\u6784\u4e2d\u3002"),(0,l.kt)("p",null,"\u65b9\u6cd5\u8fd8\u53ef\u4ee5\u7ed9\u5b83\u9690\u542b\u7684self\u5c5e\u6027\u8d4b\u503c\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u65b0\u5b9e\u4f8b\u5728\u65b9\u6cd5\u7ed3\u675f\u540e\u5c06\u66ff\u6362\u539f\u6765\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"struct area {\n    var length = 1\n    var breadth = 1\n    \n    func area() -> Int {\n        return length * breadth\n    }\n    \n    mutating func scaleBy(res: Int) {\n        length *= res\n        breadth *= res\n        \n        print(length)\n        print(breadth)\n    }\n}\n\nvar val = area(length: 3, breadth: 5)\nval.scaleBy(res: 3)\nval.scaleBy(res: 30)\nval.scaleBy(res: 300)\n")),(0,l.kt)("h3",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"struct absno\n{\n   // \u7ed3\u6784\u4f53\u4e2d\u7c7b\u578b\u65b9\u6cd5\u8981\u52a0static\n    static func abs(number: Int) -> Int\n    {\n        if number < 0\n        {\n            return (-number)\n        }\n        else\n        {\n            return number\n        }\n    }\n}\n\nlet num = absno.abs(number: -5)\n")),(0,l.kt)("h3",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,l.kt)("p",null,"\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7ed3\u6784\u4f53\u6765\u5b9a\u4e49\u4f60\u7684\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u7ed3\u6784\u4f53\u5b9e\u4f8b\u603b\u662f\u901a\u8fc7\u503c\u4f20\u9012\u6765\u5b9a\u4e49\u4f60\u7684\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u6309\u7167\u901a\u7528\u7684\u51c6\u5219\uff0c\u5f53\u7b26\u5408\u4e00\u6761\u6216\u591a\u6761\u4ee5\u4e0b\u6761\u4ef6\u65f6\uff0c\u8bf7\u8003\u8651\u6784\u5efa\u7ed3\u6784\u4f53\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u4f53\u7684\u4e3b\u8981\u76ee\u7684\u662f\u7528\u6765\u5c01\u88c5\u5c11\u91cf\u76f8\u5173\u7b80\u5355\u6570\u636e\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u7406\u7531\u9884\u8ba1\u4e00\u4e2a\u7ed3\u6784\u4f53\u5b9e\u4f8b\u5728\u8d4b\u503c\u6216\u4f20\u9012\u65f6\uff0c\u5c01\u88c5\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u62f7\u8d1d\u800c\u4e0d\u662f\u88ab\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u5728\u7ed3\u6784\u4f53\u4e2d\u50a8\u5b58\u7684\u503c\u7c7b\u578b\u5c5e\u6027\uff0c\u4e5f\u5c06\u4f1a\u88ab\u62f7\u8d1d\uff0c\u800c\u4e0d\u662f\u88ab\u5f15\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u6784\u4f53\u4e0d\u9700\u8981\u53bb\u7ee7\u627f\u53e6\u4e00\u4e2a\u5df2\u5b58\u5728\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u8005\u884c\u4e3a\u3002\n\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4ee5\u4e0b\u60c5\u5883\u4e2d\u9002\u5408\u4f7f\u7528\u7ed3\u6784\u4f53\uff1a"),(0,l.kt)("li",{parentName:"ul"},"\u51e0\u4f55\u5f62\u72b6\u7684\u5927\u5c0f\uff0c\u5c01\u88c5\u4e00\u4e2awidth\u5c5e\u6027\u548cheight\u5c5e\u6027\uff0c\u4e24\u8005\u5747\u4e3aDouble\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u8303\u56f4\u5185\u7684\u8def\u5f84\uff0c\u5c01\u88c5\u4e00\u4e2astart\u5c5e\u6027\u548clength\u5c5e\u6027\uff0c\u4e24\u8005\u5747\u4e3aInt\u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e09\u7ef4\u5750\u6807\u7cfb\u5185\u4e00\u70b9\uff0c\u5c01\u88c5x\uff0cy\u548cz\u5c5e\u6027\uff0c\u4e09\u8005\u5747\u4e3aDouble\u7c7b\u578b\u3002\n\u7ed3\u6784\u4f53\u5b9e\u4f8b\u662f\u901a\u8fc7\u503c\u4f20\u9012\u800c\u4e0d\u662f\u901a\u8fc7\u5f15\u7528\u4f20\u9012\u3002")),(0,l.kt)("h2",{id:"\u7c7b"},"\u7c7b"),(0,l.kt)("h3",{id:"\u8bed\u6cd5-1"},"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"class classname {\n   Definition 1\n   Definition 2\n   \u2026\u2026\n   Definition N\n}\n")),(0,l.kt)("p",null,"\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'class MarksStruct {\n    var mark: Int\n    init(mark: Int) {\n        self.mark = mark\n    }\n}\n\nclass studentMarks {\n    var mark = 300\n}\nlet marks = studentMarks()\nprint("\u6210\u7ee9\u4e3a \\(marks.mark)")\n')),(0,l.kt)("h3",{id:"self\u5c5e\u6027"},"self\u5c5e\u6027"),(0,l.kt)("p",null,"\u7c7b\u578b\u7684\u6bcf\u4e00\u4e2a\u5b9e\u4f8b\u90fd\u6709\u4e00\u4e2a\u9690\u542b\u5c5e\u6027\u53eb\u505aself\uff0cself \u5b8c\u5168\u7b49\u540c\u4e8e\u8be5\u5b9e\u4f8b\u672c\u8eab\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u5b9e\u4f8b\u7684\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u9690\u542b\u7684self\u5c5e\u6027\u6765\u5f15\u7528\u5f53\u524d\u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'class calculations {\n    let a: Int\n    let b: Int\n    let res: Int\n    \n    init(a: Int, b: Int) {\n        self.a = a\n        self.b = b\n        res = a + b\n        print("Self \u5185: \\(res)")\n    }\n    \n    func tot(c: Int) -> Int {\n        return res - c\n    }\n    \n    func result() {\n        print("\u7ed3\u679c\u4e3a: \\(tot(c: 20))")\n        print("\u7ed3\u679c\u4e3a: \\(tot(c: 50))")\n    }\n}\n\nlet pri = calculations(a: 600, b: 300)\nlet sum = calculations(a: 1200, b: 300)\n\npri.result()\nsum.result()\n')),(0,l.kt)("h3",{id:"\u7c7b\u578b\u65b9\u6cd5-1"},"\u7c7b\u578b\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"class Math\n{\n    class func abs(number: Int) -> Int\n    {\n        if number < 0\n        {\n            return (-number)\n        }\n        else\n        {\n            return number\n        }\n    }\n}\n\nlet no = Math.abs(number: -35)\n")),(0,l.kt)("h2",{id:"swift\u7c7b\u548c\u7ed3\u6784\u4f53\u5bf9\u6bd4"},"Swift\u7c7b\u548c\u7ed3\u6784\u4f53\u5bf9\u6bd4"),(0,l.kt)("p",null,"Swift \u4e2d\u7c7b\u548c\u7ed3\u6784\u4f53\u6709\u5f88\u591a\u5171\u540c\u70b9\u3002\u5171\u540c\u5904\u5728\u4e8e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5c5e\u6027\u7528\u4e8e\u5b58\u50a8\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u65b9\u6cd5\u7528\u4e8e\u63d0\u4f9b\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u9644\u5c5e\u811a\u672c\u7528\u4e8e\u8bbf\u95ee\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6784\u9020\u5668\u7528\u4e8e\u751f\u6210\u521d\u59cb\u5316\u503c"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6269\u5c55\u4ee5\u589e\u52a0\u9ed8\u8ba4\u5b9e\u73b0\u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u7b26\u5408\u534f\u8bae\u4ee5\u5bf9\u67d0\u7c7b\u63d0\u4f9b\u6807\u51c6\u529f\u80fd")),(0,l.kt)("p",null,"\u4e0e\u7ed3\u6784\u4f53\u76f8\u6bd4\uff0c\u7c7b\u8fd8\u6709\u5982\u4e0b\u7684\u9644\u52a0\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u5141\u8bb8\u4e00\u4e2a\u7c7b\u7ee7\u627f\u53e6\u4e00\u4e2a\u7c7b\u7684\u7279\u5f81"),(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u8f6c\u6362\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u68c0\u67e5\u548c\u89e3\u91ca\u4e00\u4e2a\u7c7b\u5b9e\u4f8b\u7684\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6784\u5668\u5141\u8bb8\u4e00\u4e2a\u7c7b\u5b9e\u4f8b\u91ca\u653e\u4efb\u4f55\u5176\u6240\u88ab\u5206\u914d\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u8ba1\u6570\u5141\u8bb8\u5bf9\u4e00\u4e2a\u7c7b\u7684\u591a\u6b21\u5f15\u7528")),(0,l.kt)("p",null,"\u7ed3\u6784\u4f53\u76f8\u6bd4\u7c7b\uff0c\u6709\u5982\u4e0b\u9644\u52a0\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u4f8b\u65b9\u6cd5\u4e2d\u4fee\u6539\u503c\u7c7b\u578b\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"mutating"),"\uff09")))}m.isMDXComponent=!0}}]);