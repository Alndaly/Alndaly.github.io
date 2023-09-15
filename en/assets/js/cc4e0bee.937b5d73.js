"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9831],{35662:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(87462),s=(r(67294),r(3905));r(16758);const o={},a=void 0,i={unversionedId:"frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",id:"frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",title:"\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",description:"",source:"@site/docs/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5.md",sourceDirName:"frontend/WxMiniprogram",slug:"/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",permalink:"/en/docs/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5.md",tags:[],version:"current",lastUpdatedAt:1694749424,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5",permalink:"/en/docs/frontend/WxMiniprogram/\u7f13\u5b58\u5de5\u5177\u65b9\u6cd5"},next:{title:"async\u548cawait:\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355",permalink:"/en/docs/frontend/async\u548cawait"}},c={},d=[],l={toc:d};function u(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import qs from "qs";\nimport cache from "./cache";\nimport { refreshTokenService, loginUserService } from "@/service/index";\nimport { CLIENT_SECRET, CLIENT_ID } from "@/constants/app";\nimport { to } from "@/utils/util";\n\n// \u9ed8\u8ba4\u5237\u65b0\u72b6\u6001\uff0c\u786e\u4fdd\u4e00\u65e6\u9047\u5230token\u8fc7\u671f\u7684\u72b6\u51b5\u5c31\u80fd\u66f4\u65b0\nlet isTokenRefreshing = false;\n// \u9632\u6b62\u591a\u6b21\u8bf7\u6c42token\u83b7\u53d6\u63a5\u53e3\uff08\u9650\u5236\u4e09\u6b21\uff0c\u4e09\u6b21\u4ee5\u540e\u76f4\u63a5\u663e\u793a\u8d26\u53f7\u4fe1\u606f\u9519\u8bef\uff09\nlet refreshTokenTimes = 0;\n// \u9632\u6b62access_token\u9519\u8bef\u60c5\u51b5\u4e0b\u800crefresh_token\u7684\u65e0\u9650\u8bf7\u6c42\u8fb9\u9645\u60c5\u51b5\nlet wrongAuth = 0;\n// \u662f\u5426\u5b58\u5728token\nlet firstTokenGetting = false;\n// \u9632\u6b62\u83b7\u53d6token\u6b21\u6570\u8fc7\u591a\nlet tokenFirstGetTimes = 0;\n// \u88ab\u62e6\u622a\u7684\u8bf7\u6c42\u6570\u7ec4\nlet subscribers: any[] = [];\n\n// \u5904\u7406\u88ab\u7f13\u5b58\u7684\u8bf7\u6c42\nfunction onAccessTokenFetched() {\n  subscribers.forEach((callback) => {\n    callback();\n  });\n  // \u5904\u7406\u5b8c\u540e\u6e05\u7a7a\u7f13\u5b58\u8bf7\u6c42\u6570\u7ec4\n  subscribers = [];\n}\n\nconst doLogin = async () => {\n  const [res_code, err_code] = await to(wx.login());\n  if (err_code) {\n    console.log("wxlogin\u51fa\u9519:", err_code);\n  }\n  if (res_code) {\n    const [res, err] = await loginUserService({\n      code: res_code.code,\n      client_id: CLIENT_ID,\n    });\n    if (res) {\n      cache.set(\n        "access_token",\n        res.data.data.access_token,\n        res.data.data.expires_in\n      );\n      cache.set("refresh_token", res.data.data.refresh_token);\n      return res;\n    }\n    if (err) {\n      wx.showToast({\n        title: "\u7528\u6237\u8ba4\u8bc1\u5931\u8d25",\n        icon: "error",\n      });\n    }\n  }\n};\n\n// \u5c06\u8bf7\u6c42\u7f13\u5b58\u5230\u8bf7\u6c42\u6570\u7ec4\u4e2d\nconst addSubscriber = (callback: any) => {\n  subscribers.push(callback);\n};\n\nconst refreshToken = async () => {\n  if (refreshTokenTimes >= 3) {\n    console.error("\u767b\u9646\u4fe1\u606f\u8fc7\u671f");\n    return;\n  }\n  console.log("token\u5f00\u59cb\u66f4\u65b0");\n  isTokenRefreshing = true;\n  refreshTokenTimes++;\n  const [res] = await refreshTokenService({\n    access_token: cache.get("refresh_token"),\n    client_id: CLIENT_ID,\n    client_secret: CLIENT_SECRET,\n  });\n  isTokenRefreshing = false;\n  if (res && res.statusCode === 200) {\n    cache.set(\n      "access_token",\n      res.data.data.access_token,\n      res.data.data.expires_in\n    );\n    cache.set("refresh_token", res.data.data.refresh_token);\n    onAccessTokenFetched();\n  } else {\n    refreshToken();\n  }\n};\n\nconst getToken = async () => {\n  if (tokenFirstGetTimes >= 3) {\n    console.error("\u767b\u5f55\u5931\u8d25");\n    return;\n  }\n  firstTokenGetting = true;\n  tokenFirstGetTimes += 1;\n  console.log("token\u5f00\u59cb\u9996\u6b21\u83b7\u53d6");\n  const res = await doLogin();\n  if (res) {\n    onAccessTokenFetched();\n  } else {\n    getToken();\n  }\n};\n\nconst checkHasToken = (url: string, method: any, data: any) => {\n  // \u672c\u5730\u6ca1\u6709token\u65f6\u83b7\u53d6token\u7684\u51fd\u6570,\u8fd9\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5f00\u5173\uff0c\u9632\u6b62\u91cd\u590d\u8bf7\u6c42\n  if (!firstTokenGetting) {\n    getToken();\n  }\n  // \u5c06\u5f53\u524d\u7684\u8bf7\u6c42\u4fdd\u5b58\u5728\u89c2\u5bdf\u8005\u6570\u7ec4\u4e2d\n  const retryOriginalRequest = new Promise((resolve) => {\n    addSubscriber(() => {\n      resolve(requestBase(url, method, data));\n    });\n  });\n  return retryOriginalRequest;\n};\n\nconst checkTokenRefreshStatus = (url: string, method: any, data: any) => {\n  // \u5237\u65b0token\u7684\u51fd\u6570,\u8fd9\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5f00\u5173\uff0c\u9632\u6b62\u91cd\u590d\u8bf7\u6c42\n  if (isTokenRefreshing) {\n    refreshToken();\n  }\n  isTokenRefreshing = false;\n  // \u5c06\u5f53\u524d\u7684\u8bf7\u6c42\u4fdd\u5b58\u5728\u89c2\u5bdf\u8005\u6570\u7ec4\u4e2d\n  const retryOriginalRequest = new Promise((resolve) => {\n    addSubscriber(() => {\n      resolve(requestBase(url, method, data));\n    });\n  });\n  return retryOriginalRequest;\n};\n\nconst requestBase = (url: string, method: any, data: any) => {\n  if (wrongAuth >= 5) {\n    console.error("\u591a\u4e2a\u8bf7\u6c42\u6388\u6743\u5931\u8d25\uff0c\u91cd\u65b0\u767b\u9646\u4e0b\uff1f");\n    return;\n  }\n  return new Promise((resolve, reject) => {\n    wx.request({\n      url: data ? url : url + "?" + qs.stringify(data),\n      header: {\n        "content-type": "application/json;charset=UTF-8;",\n        authorization: `Bearer ${cache.get("access_token")}`,\n      },\n      method: method,\n      data: data,\n      success(res) {\n        if (res && res.statusCode !== 200) {\n          if (res.statusCode === 401) {\n            wrongAuth++;\n            try {\n              if (!cache.directGet("access_token")) {\n                resolve(checkHasToken(url, method, data));\n              }\n              // \u6ce8\u610f\u6b64\u5904\u5982\u679c\u8fc7\u671f\u4e86\u90a3\u4e48\u4f1a\u76f4\u63a5\u88ab\u540e\u7aef\u62e6\u622a\uff0c\u4e0d\u4f1a\u6709code\u7b49\u4fe1\u606f\uff0c\u6240\u4ee5\u63a5\u53e3\u7c7b\u4e0d\u9002\u7528\n              else if (\n                res.data.detail === "\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\u672a\u63d0\u4f9b\u3002" ||\n                res.data.detail ===\n                  "Authentication credentials were not provided."\n              ) {\n                resolve(checkTokenRefreshStatus(url, method, data));\n              }\n            } catch (e) {\n              throw e;\n            }\n          }\n        } else {\n          if (res && res.data.code === 20000) {\n            resolve(res);\n            console.log("\u5168\u5c40\u6253\u5370\u8bf7\u6c42\u6210\u529f:", res);\n          } else {\n            reject(res);\n            console.log("\u72b6\u6001\u7801\u975e20000:", res);\n          }\n        }\n      },\n      fail(err) {\n        reject(err);\n        console.error("\u5168\u5c40\u6253\u5370\u8bf7\u6c42\u5931\u8d25:", err);\n      },\n    });\n  });\n};\n\nexport const post = (url: string, data: any) => {\n  return requestBase(url, "POST", data);\n};\n\nexport const get = (url: string, data: any) => {\n  return requestBase(url, "GET", data);\n};\n')))}u.isMDXComponent=!0}}]);