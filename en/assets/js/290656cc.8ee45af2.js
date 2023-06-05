"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3937],{86382:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=o(87462),a=(o(67294),o(3905));o(16758);const l={},i=void 0,s={unversionedId:"frontend/quasar/\u4e00\u4e9b\u63d0\u9192",id:"frontend/quasar/\u4e00\u4e9b\u63d0\u9192",title:"\u4e00\u4e9b\u63d0\u9192",description:"q-dialog \u7684\u81ea\u5b9a\u4e49\u5f39\u6846",source:"@site/docs/frontend/quasar/\u4e00\u4e9b\u63d0\u9192.md",sourceDirName:"frontend/quasar",slug:"/frontend/quasar/\u4e00\u4e9b\u63d0\u9192",permalink:"/en/docs/frontend/quasar/\u4e00\u4e9b\u63d0\u9192",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/quasar/\u4e00\u4e9b\u63d0\u9192.md",tags:[],version:"current",lastUpdatedAt:1685947865,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u4e00\u4e9b\u63d0\u9192",permalink:"/en/docs/frontend/echarts/\u4e00\u4e9b\u63d0\u9192"},next:{title:"\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6",permalink:"/en/docs/frontend/standard/eslint/example"}},r={},d=[{value:"q-dialog \u7684\u81ea\u5b9a\u4e49\u5f39\u6846",id:"q-dialog-\u7684\u81ea\u5b9a\u4e49\u5f39\u6846",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"q-page \u5185\u5bb9\u533a\u7684\u5927\u5c0f",id:"q-page-\u5185\u5bb9\u533a\u7684\u5927\u5c0f",level:2}],p={toc:d};function c(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"q-dialog-\u7684\u81ea\u5b9a\u4e49\u5f39\u6846"},"q-dialog \u7684\u81ea\u5b9a\u4e49\u5f39\u6846"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f39\u6846\u7ec4\u4ef6\u5fc5\u987b\u7c7b\u4f3c\u5982\u4e0b\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <q-dialog ref="dialogRef" @hide="onDialogHide">\n    <q-card class="q-dialog-plugin">\n      \x3c!--\n        ...content\n        ... use q-card-section for it?\n      --\x3e\n\n      \x3c!-- buttons example --\x3e\n      <q-card-actions align="right">\n        <q-btn color="primary" label="OK" @click="onOKClick" />\n        <q-btn color="primary" label="Cancel" @click="onDialogCancel" />\n      </q-card-actions>\n    </q-card>\n  </q-dialog>\n</template>\n\n<script setup>\nimport { useDialogPluginComponent } from \'quasar\';\n\nconst props = defineProps({\n  // ...your custom props\n});\n\ndefineEmits([\n  // REQUIRED; need to specify some events that your\n  // component will emit through useDialogPluginComponent()\n  ...useDialogPluginComponent.emits,\n]);\n\nconst { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =\n  useDialogPluginComponent();\n// dialogRef      - Vue ref to be applied to QDialog\n// onDialogHide   - Function to be used as handler for @hide on QDialog\n// onDialogOK     - Function to call to settle dialog with "ok" outcome\n//                    example: onDialogOK() - no payload\n//                    example: onDialogOK({ /*...*/ }) - with payload\n// onDialogCancel - Function to call to settle dialog with "cancel" outcome\n\n// this is part of our example (so not required)\nfunction onOKClick() {\n  // on OK, it is REQUIRED to\n  // call onDialogOK (with optional payload)\n  onDialogOK();\n  // or with payload: onDialogOK({ ... })\n  // ...and it will also hide the dialog automatically\n}\n<\/script>\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQuasar } from 'quasar'\nimport CustomComponent from '..path.to.component..'\n\nsetup () {\n  const $q = useQuasar()\n\n  $q.dialog({\n    component: CustomComponent,\n\n    // props forwarded to your custom component\n    componentProps: {\n      text: 'something',\n      // ...more..props...\n    }\n  }).onOk(() => {\n    console.log('OK')\n  }).onCancel(() => {\n    console.log('Cancel')\n  }).onDismiss(() => {\n    console.log('Called on OK or Cancel')\n  })\n}\n")),(0,a.kt)("h2",{id:"q-page-\u5185\u5bb9\u533a\u7684\u5927\u5c0f"},"q-page \u5185\u5bb9\u533a\u7684\u5927\u5c0f"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u76f4\u63a5\u5199\u9ad8\u5ea6\u4e3a100vh\uff0c\u90a3\u4e48\u7b97\u4e0a\u9876\u90e8\u7684Header\uff0c\u4f1a\u5bfc\u81f4\u603b\u9ad8\u5ea6\u8d85\u8fc7\u5c4f\u5e55\u800c\u51fa\u73b0\u6eda\u52a8\u6761\u3002")),(0,a.kt)("p",null,"QPage\u9700\u8981QLayout\uff0c\u56e0\u4e3aQLayout\u63a7\u5236\u9875\u9762\u7684\u6240\u6709\u504f\u79fb\u91cf\uff0c\u5e76\u6839\u636e\u5176\u201cview\u201d\u5c5e\u6027\u914d\u7f6e\u8ba1\u7b97\u9875\u7709/\u9875\u811a/\u62bd\u5c49\u4f7f\u7528\u7684\u7a7a\u95f4\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u60a8\u7684QPage\u7ec4\u4ef6\u4e0a\u5c06\u8bbe\u7f6e\u4e00\u4e2amin-heightCSS\u5c5e\u6027\uff0c\u4ee5\u786e\u4fdd\u5185\u5bb9\u59cb\u7ec8\u586b\u5145\u5c4f\u5e55\uff0c\u5373\u4f7f\u5185\u5bb9\u53ea\u6709\u51e0\u884c\u4e5f\u662f\u5982\u6b64\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8c03\u6574\u751a\u81f3\u5220\u9664\u6b64\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528style-fn\u5c5e\u6027\u6765\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <q-page :style-fn=\"myTweak\">...</q-page>\n</template>\n\n<script>\nexport default {\n  // ...\n  methods: {\n    myTweak (offset) {\n      // \u201coffset\u201d\u662f\u4e00\u4e2a\u6570\u5b57\uff08\u50cf\u7d20\uff09\uff0c\n      //\u5b83\u8868\u793a\u57fa\u4e8eQLayout\u201cview\u201d\u5c5e\u6027\u914d\u7f6e\u7684\n      //\u5c4f\u5e55\u4e0a\u9875\u7709+\u9875\u811a\u7684\u603b\u9ad8\u5ea6\n\n      // \u8fd9\u5b9e\u9645\u4e0a\u662fQuasar\u4e2d\u9ed8\u8ba4style-fn\u7684\u529f\u80fd\n      return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' }\n    }\n  }\n}\n<\/script>\n")))}c.isMDXComponent=!0}}]);