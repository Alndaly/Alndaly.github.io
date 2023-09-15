"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9303],{12558:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>w});var n=i(87462),s=(i(67294),i(3905));i(16758);const r={},o=void 0,a={unversionedId:"frontend/Swift/SwiftUi/\u62bd\u5c49View",id:"frontend/Swift/SwiftUi/\u62bd\u5c49View",title:"\u62bd\u5c49View",description:"",source:"@site/docs/frontend/Swift/SwiftUi/\u62bd\u5c49View.md",sourceDirName:"frontend/Swift/SwiftUi",slug:"/frontend/Swift/SwiftUi/\u62bd\u5c49View",permalink:"/en/docs/frontend/Swift/SwiftUi/\u62bd\u5c49View",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/SwiftUi/\u62bd\u5c49View.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"TextField",permalink:"/en/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField"},next:{title:"Xcode\u8bc1\u4e66\u914d\u7f6e",permalink:"/en/docs/frontend/Swift/Xcode\u8bc1\u4e66\u914d\u7f6e"}},d={},w=[],f={toc:w};function l(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\n\nstruct NewView: View {\n    @Environment(\\.dismiss) var dismiss\n    var body: some View{\n        Button("dismiss"){\n            // \u624b\u52a8\u64cd\u4f5c\u9000\u51fa\u5f53\u524dView\n            dismiss()\n        }\n    }\n}\n\nstruct OriginView: View {\n    @State private var showingSheet = false\n    var body: some View {\n        Button("Show Sheet"){\n            showingSheet.toggle()\n        }\n        .sheet(isPresented: $showingSheet) {\n            NewView()\n        }\n    }\n}\n\nstruct OriginView_Previews: PreviewProvider {\n    static var previews: some View {\n        OriginView()\n    }\n}\n\n')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212131517510.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202212131517124.png",alt:null})))}l.isMDXComponent=!0}}]);