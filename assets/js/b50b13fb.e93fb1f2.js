"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2711],{44559:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));t(16758);const o={},i=void 0,s={unversionedId:"frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",id:"frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",title:"\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",description:"",source:"@site/docs/frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5.md",sourceDirName:"frontend/WxMiniprogram",slug:"/frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",permalink:"/docs/frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5.md",tags:[],version:"current",lastUpdatedAt:1695455608,formattedLastUpdatedAt:"2023\u5e749\u670823\u65e5",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u672c\u5730\u6587\u4ef6\u4f4d\u7f6e",permalink:"/docs/frontend/WxMiniprogram/\u672c\u5730\u6587\u4ef6\u4f4d\u7f6e"},next:{title:"\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",permalink:"/docs/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5"}},d={},c=[],l={toc:c};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  // \u6b64\u5904expire\u662f\u79d2\u6570\n  set(key: string, val: any, expire?: number | null) {\n    try {\n      let curTime = new Date().getTime();\n      expire = expire ? 1000 * expire : null;\n      wx.setStorageSync(\n        key,\n        JSON.stringify({\n          data: val,\n          saveTime: curTime,\n          expire,\n        })\n      );\n    } catch (e) {\n      console.error("\u7f13\u5b58\u8bbe\u7f6e\u5931\u8d25", e);\n    }\n  },\n\n  // \u5224\u65ad\u662f\u5426\u8fc7\u671f\n  expired(key: string) {\n    try {\n      const data = wx.getStorageSync(key);\n      if (data) {\n        const dataObj = JSON.parse(data);\n        if (\n          dataObj.expire &&\n          new Date().getTime() - dataObj.saveTime > dataObj.expire\n        ) {\n          return true;\n        } else {\n          return false;\n        }\n      }\n      return;\n    } catch (e) {\n      console.error(e);\n      return;\n    }\n  },\n\n  directGet(key: string) {\n    try {\n      const data = wx.getStorageSync(key);\n      if (data) {\n        const dataObj = JSON.parse(data);\n        return dataObj.data;\n      }\n      return null;\n    } catch (e) {\n      console.error("\u83b7\u53d6\u7f13\u5b58\u5931\u8d25", e);\n    }\n  },\n\n  get(key: string) {\n    try {\n      const data = wx.getStorageSync(key);\n      if (data) {\n        const dataObj = JSON.parse(data);\n        if (\n          dataObj.expire &&\n          new Date().getTime() - dataObj.saveTime > dataObj.expire\n        ) {\n          this.remove(key);\n          return null;\n        } else {\n          return dataObj.data;\n        }\n      }\n      return null;\n    } catch (e) {\n      console.error("\u83b7\u53d6\u7f13\u5b58\u5931\u8d25", e);\n    }\n  },\n\n  remove(key: string) {\n    try {\n      wx.removeStorageSync(key);\n    } catch (e) {\n      console.error("\u7f13\u5b58\u6e05\u9664\u5931\u8d25", e);\n    }\n  },\n\n  clear() {\n    try {\n      wx.clearStorage();\n    } catch (e) {\n      console.error("\u7f13\u5b58\u6e05\u7a7a\u5931\u8d25", e);\n    }\n  },\n};\n')))}p.isMDXComponent=!0}}]);