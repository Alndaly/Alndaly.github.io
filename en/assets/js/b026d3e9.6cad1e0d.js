"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7343],{34476:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));t(16758);const p={title:"Swift\u6cdb\u578b"},r=void 0,l={unversionedId:"frontend/Swift/basic/\u6cdb\u578b",id:"frontend/Swift/basic/\u6cdb\u578b",title:"Swift\u6cdb\u578b",description:"Swift \u63d0\u4f9b\u4e86\u6cdb\u578b\u8ba9\u4f60\u5199\u51fa\u7075\u6d3b\u4e14\u53ef\u91cd\u7528\u7684\u51fd\u6570\u548c\u7c7b\u578b\u3002",source:"@site/docs/frontend/Swift/basic/\u6cdb\u578b.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u6cdb\u578b",permalink:"/en/docs/frontend/Swift/basic/\u6cdb\u578b",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/basic/\u6cdb\u578b.md",tags:[],version:"current",lastUpdatedAt:1686392864,formattedLastUpdatedAt:"Jun 10, 2023",frontMatter:{title:"Swift\u6cdb\u578b"},sidebar:"frontEndSidebar",previous:{title:"Swift\u679a\u4e3e",permalink:"/en/docs/frontend/Swift/basic/\u679a\u4e3e"},next:{title:"Swift\u7c7b\u548c\u7ed3\u6784\u4f53",permalink:"/en/docs/frontend/Swift/basic/\u7c7b\u548c\u7ed3\u6784\u4f53"}},o={},m=[],u={toc:m};function s(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Swift \u63d0\u4f9b\u4e86\u6cdb\u578b\u8ba9\u4f60\u5199\u51fa\u7075\u6d3b\u4e14\u53ef\u91cd\u7528\u7684\u51fd\u6570\u548c\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"Swift \u6807\u51c6\u5e93\u662f\u901a\u8fc7\u6cdb\u578b\u4ee3\u7801\u6784\u5efa\u51fa\u6765\u7684\u3002"),(0,i.kt)("p",null,"Swift \u7684\u6570\u7ec4\u548c\u5b57\u5178\u7c7b\u578b\u90fd\u662f\u6cdb\u578b\u96c6\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2aInt\u6570\u7ec4\uff0c\u4e5f\u53ef\u521b\u5efa\u4e00\u4e2aString\u6570\u7ec4\uff0c\u6216\u8005\u751a\u81f3\u4e8e\u53ef\u4ee5\u662f\u4efb\u4f55\u5176\u4ed6 Swift \u7684\u7c7b\u578b\u6570\u636e\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u662f\u4e00\u4e2a\u975e\u6cdb\u578b\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"exchange")," \u7528\u6765\u4ea4\u6362\u4e24\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u503c\uff1a"),(0,i.kt)("p",null,"\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u5b9a\u4e49\u4e00\u4e2a\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u51fd\u6570\nfunc swapTwoInts(_ a: inout Int, _ b: inout Int) {\n    let temporaryA = a\n    a = b\n    b = temporaryA\n}\n \nvar numb1 = 100\nvar numb2 = 200\n \nprint("\u4ea4\u6362\u524d\u6570\u636e: \\(numb1) \u548c \\(numb2)")\nswapTwoInts(&numb1, &numb2)\nprint("\u4ea4\u6362\u540e\u6570\u636e: \\(numb1) \u548c \\(numb2)")\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u4ea4\u6362\u524d\u6570\u636e: 100 \u548c 200\n\u4ea4\u6362\u540e\u6570\u636e: 200 \u548c 100\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u53ea\u8bd5\u7528\u4e0e\u4ea4\u6362\u6574\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u7c7b\u578b\u7684\u53d8\u91cf\u3002\u5982\u679c\u4f60\u60f3\u8981\u4ea4\u6362\u4e24\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u503c\u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"Double")," \u503c\uff0c\u5c31\u5f97\u91cd\u65b0\u5199\u4e2a\u5bf9\u5e94\u7684\u51fd\u6570\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"swapTwoStrings(_:_:)")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"swapTwoDoubles(_:_:)"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("p",null,"String \u548c Double \u503c\u4ea4\u6362\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func swapTwoStrings(_ a: inout String, _ b: inout String) {\n    let temporaryA = a\n    a = b\n    b = temporaryA\n}\n \nfunc swapTwoDoubles(_ a: inout Double, _ b: inout Double) {\n    let temporaryA = a\n    a = b\n    b = temporaryA\n}\n")),(0,i.kt)("p",null,"\u4ece\u4ee5\u4e0a\u4ee3\u7801\u6765\u770b\uff0c\u5b83\u4eec\u529f\u80fd\u4ee3\u7801\u662f\u76f8\u540c\u7684\uff0c\u53ea\u662f\u7c7b\u578b\u4e0a\u4e0d\u4e00\u6837\uff0c\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\uff0c\u4ece\u800c\u907f\u514d\u91cd\u590d\u7f16\u5199\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u6cdb\u578b\u4f7f\u7528\u4e86\u5360\u4f4d\u7c7b\u578b\u540d\uff08\u5728\u8fd9\u91cc\u7528\u5b57\u6bcd ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," \u6765\u8868\u793a\uff09\u6765\u4ee3\u66ff\u5b9e\u9645\u7c7b\u578b\u540d\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Double"),"\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func swapTwoValues<T>(_ a: inout T, _ b: inout T)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"swapTwoValues")," \u540e\u9762\u8ddf\u7740\u5360\u4f4d\u7c7b\u578b\u540d\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"\uff09\uff0c\u5e76\u7528\u5c16\u62ec\u53f7\u62ec\u8d77\u6765\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<T>"),"\uff09\u3002\u8fd9\u4e2a\u5c16\u62ec\u53f7\u544a\u8bc9 Swift \u90a3\u4e2a T \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"swapTwoValues(_:_:)")," \u51fd\u6570\u5b9a\u4e49\u5185\u7684\u4e00\u4e2a\u5360\u4f4d\u7c7b\u578b\u540d\uff0c\u56e0\u6b64 Swift \u4e0d\u4f1a\u53bb\u67e5\u627e\u540d\u4e3a T \u7684\u5b9e\u9645\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u662f\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"exchange")," \u7528\u6765\u4ea4\u6362\u4e24\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u503c\uff1a"),(0,i.kt)("p",null,"\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u5b9a\u4e49\u4e00\u4e2a\u4ea4\u6362\u4e24\u4e2a\u53d8\u91cf\u7684\u51fd\u6570\nfunc swapTwoValues<T>(_ a: inout T, _ b: inout T) {\n    let temporaryA = a\n    a = b\n    b = temporaryA\n}\n \nvar numb1 = 100\nvar numb2 = 200\n \nprint("\u4ea4\u6362\u524d\u6570\u636e:  \\(numb1) \u548c \\(numb2)")\nswapTwoValues(&numb1, &numb2)\nprint("\u4ea4\u6362\u540e\u6570\u636e: \\(numb1) \u548c \\(numb2)")\n \nvar str1 = "A"\nvar str2 = "B"\n \nprint("\u4ea4\u6362\u524d\u6570\u636e:  \\(str1) \u548c \\(str2)")\nswapTwoValues(&str1, &str2)\nprint("\u4ea4\u6362\u540e\u6570\u636e: \\(str1) \u548c \\(str2)")\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u4ea4\u6362\u524d\u6570\u636e:  100 \u548c 200\n\u4ea4\u6362\u540e\u6570\u636e: 200 \u548c 100\n\u4ea4\u6362\u524d\u6570\u636e:  A \u548c B\n\u4ea4\u6362\u540e\u6570\u636e: B \u548c A\n")),(0,i.kt)("p",null,"\u6cdb\u578b\u7c7b\u578b"),(0,i.kt)("p",null,"Swift \u5141\u8bb8\u4f60\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684\u6cdb\u578b\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u7c7b\u3001\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u4f5c\u7528\u4e8e\u4efb\u4f55\u7c7b\u578b\uff0c\u5982\u540c ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," \u7684\u7528\u6cd5\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \uff08\u6808\uff09\u7684\u6cdb\u578b\u96c6\u5408\u7c7b\u578b\uff0c\u6808\u53ea\u5141\u8bb8\u5728\u96c6\u5408\u7684\u672b\u7aef\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\uff08\u79f0\u4e4b\u4e3a\u5165\u6808\uff09\uff0c\u4e14\u4e5f\u53ea\u80fd\u4ece\u672b\u7aef\u79fb\u9664\u5143\u7d20\uff08\u79f0\u4e4b\u4e3a\u51fa\u6808\uff09\u3002"),(0,i.kt)("p",null,"\u56fe\u7247\u4e2d\u4ece\u5de6\u5230\u53f3\u89e3\u6790\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u4e09\u4e2a\u503c\u5728\u6808\u4e2d\u3002"),(0,i.kt)("p",null,"\u7b2c\u56db\u4e2a\u503c\u88ab\u538b\u5165\u5230\u6808\u7684\u9876\u90e8\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6709\u56db\u4e2a\u503c\u5728\u6808\u4e2d\uff0c\u6700\u8fd1\u5165\u6808\u7684\u90a3\u4e2a\u503c\u5728\u9876\u90e8\u3002"),(0,i.kt)("p",null,"\u6808\u4e2d\u6700\u9876\u90e8\u7684\u90a3\u4e2a\u503c\u88ab\u79fb\u9664\uff0c\u6216\u79f0\u4e4b\u4e3a\u51fa\u6808\u3002"),(0,i.kt)("p",null,"\u79fb\u9664\u6389\u4e00\u4e2a\u503c\u540e\uff0c\u73b0\u5728\u6808\u53c8\u53ea\u6709\u4e09\u4e2a\u503c\u4e86\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u662f\u4e00\u4e2a\u975e\u6cdb\u578b\u7248\u672c\u7684\u6808\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u578b\u7684\u6808\u4e3a\u4f8b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u578b\u7684\u6808"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct IntStack {\n    var items = [Int]()\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n    mutating func pop() -> Int {\n        return items.removeLast()\n    }\n}\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u7ed3\u6784\u4f53\u5728\u6808\u4e2d\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," \u5c5e\u6027\u6765\u5b58\u50a8\u503c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u65b9\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"push(_:)")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"pop()"),"\uff0c\u7528\u6765\u5411\u6808\u4e2d\u538b\u5165\u503c\u4ee5\u53ca\u4ece\u6808\u4e2d\u79fb\u9664\u503c\u3002\u8fd9\u4e9b\u65b9\u6cd5\u88ab\u6807\u8bb0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"mutating"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u9700\u8981\u4fee\u6539\u7ed3\u6784\u4f53\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u4e0a\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"IntStack")," \u7ed3\u6784\u4f53\u53ea\u80fd\u7528\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u7c7b\u578b\u3002\u4e0d\u8fc7\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6cdb\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u7ed3\u6784\u4f53\uff0c\u4ece\u800c\u80fd\u591f\u5904\u7406\u4efb\u610f\u7c7b\u578b\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u76f8\u540c\u4ee3\u7801\u7684\u6cdb\u578b\u7248\u672c\uff1a"),(0,i.kt)("p",null,"\u6cdb\u578b\u7684\u6808"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct Stack<Element> {\n    var items = [Element]()\n    mutating func push(_ item: Element) {\n        items.append(item)\n    }\n    mutating func pop() -> Element {\n        return items.removeLast()\n    }\n}\n \nvar stackOfStrings = Stack<String>()\nprint("\u5b57\u7b26\u4e32\u5143\u7d20\u5165\u6808: ")\nstackOfStrings.push("google")\nstackOfStrings.push("runoob")\nprint(stackOfStrings.items);\n \nlet deletetos = stackOfStrings.pop()\nprint("\u51fa\u6808\u5143\u7d20: " + deletetos)\n \nvar stackOfInts = Stack<Int>()\nprint("\u6574\u6570\u5143\u7d20\u5165\u6808: ")\nstackOfInts.push(1)\nstackOfInts.push(2)\nprint(stackOfInts.items);\n')),(0,i.kt)("p",null,"\u5b9e\u4f8b\u6267\u884c\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\u5b57\u7b26\u4e32\u5143\u7d20\u5165\u6808: \n["google", "runoob"]\n\u51fa\u6808\u5143\u7d20: runoob\n\u6574\u6570\u5143\u7d20\u5165\u6808: \n[1, 2]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," \u57fa\u672c\u4e0a\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"IntStack")," \u76f8\u540c\uff0c\u5360\u4f4d\u7c7b\u578b\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u4ee3\u66ff\u4e86\u5b9e\u9645\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u4f8b\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u5728\u5982\u4e0b\u4e09\u4e2a\u5730\u65b9\u88ab\u7528\u4f5c\u5360\u4f4d\u7b26\uff1a"),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u5c5e\u6027\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u7c7b\u578b\u7684\u7a7a\u6570\u7ec4\u5bf9\u5176\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,i.kt)("p",null,"\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"push(_:)")," \u65b9\u6cd5\u7684\u552f\u4e00\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," \u7684\u7c7b\u578b\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"pop()")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u6269\u5c55\u6cdb\u578b\u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53\u4f60\u6269\u5c55\u4e00\u4e2a\u6cdb\u578b\u7c7b\u578b\u7684\u65f6\u5019\uff08\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"extension")," \u5173\u952e\u5b57\uff09\uff0c\u4f60\u5e76\u4e0d\u9700\u8981\u5728\u6269\u5c55\u7684\u5b9a\u4e49\u4e2d\u63d0\u4f9b\u7c7b\u578b\u53c2\u6570\u5217\u8868\u3002\u66f4\u52a0\u65b9\u4fbf\u7684\u662f\uff0c\u539f\u59cb\u7c7b\u578b\u5b9a\u4e49\u4e2d\u58f0\u660e\u7684\u7c7b\u578b\u53c2\u6570\u5217\u8868\u5728\u6269\u5c55\u91cc\u662f\u53ef\u4ee5\u4f7f\u7528\u7684\uff0c\u5e76\u4e14\u8fd9\u4e9b\u6765\u81ea\u539f\u59cb\u7c7b\u578b\u4e2d\u7684\u53c2\u6570\u540d\u79f0\u4f1a\u88ab\u7528\u4f5c\u539f\u59cb\u5b9a\u4e49\u4e2d\u7c7b\u578b\u53c2\u6570\u7684\u5f15\u7528\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u6269\u5c55\u4e86\u6cdb\u578b\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack"),"\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"topItem")," \u7684\u53ea\u8bfb\u8ba1\u7b97\u578b\u5c5e\u6027\uff0c\u5b83\u5c06\u4f1a\u8fd4\u56de\u5f53\u524d\u6808\u9876\u7aef\u7684\u5143\u7d20\u800c\u4e0d\u4f1a\u5c06\u5176\u4ece\u6808\u4e2d\u79fb\u9664\uff1a"),(0,i.kt)("p",null,"\u6cdb\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct Stack<Element> {\n    var items = [Element]()\n    mutating func push(_ item: Element) {\n        items.append(item)\n    }\n    mutating func pop() -> Element {\n        return items.removeLast()\n    }\n}\n \nextension Stack {\n    var topItem: Element? {\n       return items.isEmpty ? nil : items[items.count - 1]\n    }\n}\n \nvar stackOfStrings = Stack<String>()\nprint("\u5b57\u7b26\u4e32\u5143\u7d20\u5165\u6808: ")\nstackOfStrings.push("google")\nstackOfStrings.push("runoob")\n \nif let topItem = stackOfStrings.topItem {\n    print("\u6808\u4e2d\u7684\u9876\u90e8\u5143\u7d20\u662f\uff1a\\(topItem).")\n}\n \nprint(stackOfStrings.items)\n')),(0,i.kt)("p",null,"\u5b9e\u4f8b\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"topItem")," \u5c5e\u6027\u4f1a\u8fd4\u56de\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Element")," \u7c7b\u578b\u7684\u53ef\u9009\u503c\u3002\u5f53\u6808\u4e3a\u7a7a\u7684\u65f6\u5019\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"topItem")," \u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"\uff1b\u5f53\u6808\u4e0d\u4e3a\u7a7a\u7684\u65f6\u5019\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"topItem")," \u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u6570\u7ec4\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\u5b57\u7b26\u4e32\u5143\u7d20\u5165\u6808: \n\u6808\u4e2d\u7684\u9876\u90e8\u5143\u7d20\u662f\uff1arunoob.\n["google", "runoob"]\n')),(0,i.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6269\u5c55\u4e00\u4e2a\u5b58\u5728\u7684\u7c7b\u578b\u6765\u6307\u5b9a\u5173\u8054\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"Swift")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," \u7c7b\u578b\u5df2\u7ecf\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"append(_:)")," \u65b9\u6cd5\uff0c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," \u5c5e\u6027\uff0c\u4ee5\u53ca\u4e00\u4e2a\u63a5\u53d7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," \u7c7b\u578b\u7d22\u5f15\u503c\u7684\u4e0b\u6807\u7528\u4ee5\u68c0\u7d22\u5176\u5143\u7d20\u3002\u8fd9\u4e09\u4e2a\u529f\u80fd\u90fd\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u534f\u8bae\u7684\u8981\u6c42\uff0c\u6240\u4ee5\u4f60\u53ea\u9700\u7b80\u5355\u5730\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," \u91c7\u7eb3\u8be5\u534f\u8bae\u5c31\u53ef\u4ee5\u6269\u5c55 ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),"\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u7a7a\u6269\u5c55\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"extension Array: Container {}\n")),(0,i.kt)("p",null,"\u7c7b\u578b\u7ea6\u675f"),(0,i.kt)("p",null,"\u7c7b\u578b\u7ea6\u675f\u6307\u5b9a\u4e86\u4e00\u4e2a\u5fc5\u987b\u7ee7\u627f\u81ea\u6307\u5b9a\u7c7b\u7684\u7c7b\u578b\u53c2\u6570\uff0c\u6216\u8005\u9075\u5faa\u4e00\u4e2a\u7279\u5b9a\u7684\u534f\u8bae\u6216\u534f\u8bae\u6784\u6210\u3002"),(0,i.kt)("p",null,"\u7c7b\u578b\u7ea6\u675f\u8bed\u6cd5"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5199\u4e00\u4e2a\u5728\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u540d\u540e\u9762\u7684\u7c7b\u578b\u7ea6\u675f\uff0c\u901a\u8fc7\u5192\u53f7\u5206\u5272\uff0c\u6765\u4f5c\u4e3a\u7c7b\u578b\u53c2\u6570\u94fe\u7684\u4e00\u90e8\u5206\u3002\u8fd9\u79cd\u4f5c\u7528\u4e8e\u6cdb\u578b\u51fd\u6570\u7684\u7c7b\u578b\u7ea6\u675f\u7684\u57fa\u7840\u8bed\u6cd5\u5982\u4e0b\u6240\u793a\uff08\u548c\u6cdb\u578b\u7c7b\u578b\u7684\u8bed\u6cd5\u76f8\u540c\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func someFunction<T: SomeClass, U: SomeProtocol>(someT: T, someU: U) {\n    // \u8fd9\u91cc\u662f\u6cdb\u578b\u51fd\u6570\u7684\u51fd\u6570\u4f53\u90e8\u5206\n}\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u51fd\u6570\u6709\u4e24\u4e2a\u7c7b\u578b\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"\uff0c\u6709\u4e00\u4e2a\u8981\u6c42 T \u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeClass")," \u5b50\u7c7b\u7684\u7c7b\u578b\u7ea6\u675f\uff1b\u7b2c\u4e8c\u4e2a\u7c7b\u578b\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),"\uff0c\u6709\u4e00\u4e2a\u8981\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," \u5fc5\u987b\u7b26\u5408 ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeProtocol")," \u534f\u8bae\u7684\u7c7b\u578b\u7ea6\u675f\u3002"),(0,i.kt)("p",null,"\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u6cdb\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u975e\u6cdb\u578b\u51fd\u6570\uff0c\u67e5\u627e\u6307\u5b9a\u5b57\u7b26\u4e32\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\nfunc findIndex(ofString valueToFind: String, in array: [String]) -> Int? {\n    for (index, value) in array.enumerated() {\n        if value == valueToFind {\n            // \u627e\u5230\u8fd4\u56de\u7d22\u5f15\u503c\n            return index\n        }\n    }\n    return nil\n}\n \n \nlet strings = ["google", "weibo", "taobao", "runoob", "facebook"]\nif let foundIndex = findIndex(ofString: "runoob", in: strings) {\n    print("runoob \u7684\u7d22\u5f15\u4e3a \\(foundIndex)")\n}\n')),(0,i.kt)("p",null,"\u7d22\u5f15\u4e0b\u6807\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u5f00\u59cb\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"runoob \u7684\u7d22\u5f15\u4e3a 3\n")),(0,i.kt)("p",null,"\u5173\u8054\u7c7b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Swift")," \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"associatedtype")," \u5173\u952e\u5b57\u6765\u8bbe\u7f6e\u5173\u8054\u7c7b\u578b\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u534f\u8bae\uff0c\u8be5\u534f\u8bae\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5173\u8054\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemType"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u534f\u8bae\u53ea\u6307\u5b9a\u4e86\u4e09\u4e2a\u4efb\u4f55\u9075\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," \u534f\u8bae\u7684\u7c7b\u578b\u5fc5\u987b\u63d0\u4f9b\u7684\u529f\u80fd\u3002\u9075\u4ece\u534f\u8bae\u7684\u7c7b\u578b\u5728\u6ee1\u8db3\u8fd9\u4e09\u4e2a\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u5176\u4ed6\u989d\u5916\u7684\u529f\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Container \u534f\u8bae\nprotocol Container {\n    associatedtype ItemType\n    // \u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\u5230\u5bb9\u5668\u91cc\n    mutating func append(_ item: ItemType)\n    // \u83b7\u53d6\u5bb9\u5668\u4e2d\u5143\u7d20\u7684\u6570\n    var count: Int { get }\n    // \u901a\u8fc7\u7d22\u5f15\u503c\u7c7b\u578b\u4e3a Int \u7684\u4e0b\u6807\u68c0\u7d22\u5230\u5bb9\u5668\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\n    subscript(i: Int) -> ItemType { get }\n}\n\n// Stack \u7ed3\u6784\u4f53\u9075\u4ece Container \u534f\u8bae\nstruct Stack<Element>: Container {\n    // Stack<Element> \u7684\u539f\u59cb\u5b9e\u73b0\u90e8\u5206\n    var items = [Element]()\n    mutating func push(_ item: Element) {\n        items.append(item)\n    }\n    mutating func pop() -> Element {\n        return items.removeLast()\n    }\n    // Container \u534f\u8bae\u7684\u5b9e\u73b0\u90e8\u5206\n    mutating func append(_ item: Element) {\n        self.push(item)\n    }\n    var count: Int {\n        return items.count\n    }\n    subscript(i: Int) -> Element {\n        return items[i]\n    }\n}\n\nvar tos = Stack<String>()\ntos.push("google")\ntos.push("runoob")\ntos.push("taobao")\n// \u5143\u7d20\u5217\u8868\nprint(tos.items)\n// \u5143\u7d20\u4e2a\u6570\nprint( tos.count)\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'["google", "runoob", "taobao"]\n3\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Where")," \u8bed\u53e5"),(0,i.kt)("p",null,"\u7c7b\u578b\u7ea6\u675f\u80fd\u591f\u786e\u4fdd\u7c7b\u578b\u7b26\u5408\u6cdb\u578b\u51fd\u6570\u6216\u7c7b\u7684\u5b9a\u4e49\u7ea6\u675f\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u53c2\u6570\u5217\u8868\u4e2d\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"where"),"\u8bed\u53e5\u5b9a\u4e49\u53c2\u6570\u7684\u7ea6\u675f\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5199\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"where"),"\u8bed\u53e5\uff0c\u7d27\u8ddf\u5728\u5728\u7c7b\u578b\u53c2\u6570\u5217\u8868\u540e\u9762\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"where"),"\u8bed\u53e5\u540e\u8ddf\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u9488\u5bf9\u5173\u8054\u7c7b\u578b\u7684\u7ea6\u675f\uff0c\u4ee5\u53ca\uff08\u6216\uff09\u4e00\u4e2a\u6216\u591a\u4e2a\u7c7b\u578b\u548c\u5173\u8054\u7c7b\u578b\u95f4\u7684\u7b49\u4ef7(",(0,i.kt)("inlineCode",{parentName:"p"},"equality"),")\u5173\u7cfb\u3002"),(0,i.kt)("p",null,"\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"allItemsMatch"),"\u7684\u6cdb\u578b\u51fd\u6570\uff0c\u7528\u6765\u68c0\u67e5\u4e24\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),"\u5b9e\u4f8b\u662f\u5426\u5305\u542b\u76f8\u540c\u987a\u5e8f\u7684\u76f8\u540c\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6240\u6709\u7684\u5143\u7d20\u80fd\u591f\u5339\u914d\uff0c\u90a3\u4e48\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,i.kt)("p",null,"\u6cdb\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Container \u534f\u8bae\nprotocol Container {\n    associatedtype ItemType\n    // \u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\u5230\u5bb9\u5668\u91cc\n    mutating func append(_ item: ItemType)\n    // \u83b7\u53d6\u5bb9\u5668\u4e2d\u5143\u7d20\u7684\u6570\n    var count: Int { get }\n    // \u901a\u8fc7\u7d22\u5f15\u503c\u7c7b\u578b\u4e3a Int \u7684\u4e0b\u6807\u68c0\u7d22\u5230\u5bb9\u5668\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\n    subscript(i: Int) -> ItemType { get }\n}\n \n// // \u9075\u5faaContainer\u534f\u8bae\u7684\u6cdb\u578bTOS\u7c7b\u578b\nstruct Stack<Element>: Container {\n    // Stack<Element> \u7684\u539f\u59cb\u5b9e\u73b0\u90e8\u5206\n    var items = [Element]()\n    mutating func push(_ item: Element) {\n        items.append(item)\n    }\n    mutating func pop() -> Element {\n        return items.removeLast()\n    }\n    // Container \u534f\u8bae\u7684\u5b9e\u73b0\u90e8\u5206\n    mutating func append(_ item: Element) {\n        self.push(item)\n    }\n    var count: Int {\n        return items.count\n    }\n    subscript(i: Int) -> Element {\n        return items[i]\n    }\n}\n// \u6269\u5c55\uff0c\u5c06 Array \u5f53\u4f5c Container \u6765\u4f7f\u7528\nextension Array: Container {}\n \nfunc allItemsMatch<C1: Container, C2: Container>\n    (_ someContainer: C1, _ anotherContainer: C2) -> Bool\n    where C1.ItemType == C2.ItemType, C1.ItemType: Equatable {\n        \n        // \u68c0\u67e5\u4e24\u4e2a\u5bb9\u5668\u542b\u6709\u76f8\u540c\u6570\u91cf\u7684\u5143\u7d20\n        if someContainer.count != anotherContainer.count {\n            return false\n        }\n        \n        // \u68c0\u67e5\u6bcf\u4e00\u5bf9\u5143\u7d20\u662f\u5426\u76f8\u7b49\n        for i in 0..<someContainer.count {\n            if someContainer[i] != anotherContainer[i] {\n                return false\n            }\n        }\n        \n        // \u6240\u6709\u5143\u7d20\u90fd\u5339\u914d\uff0c\u8fd4\u56de true\n        return true\n}\nvar tos = Stack<String>()\ntos.push("google")\ntos.push("runoob")\ntos.push("taobao")\n \nvar aos = ["google", "runoob", "taobao"]\n \nif allItemsMatch(tos, aos) {\n    print("\u5339\u914d\u6240\u6709\u5143\u7d20")\n} else {\n    print("\u5143\u7d20\u4e0d\u5339\u914d")\n}\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7a0b\u5e8f\u6267\u884c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u5339\u914d\u6240\u6709\u5143\u7d20\n")))}s.isMDXComponent=!0}}]);