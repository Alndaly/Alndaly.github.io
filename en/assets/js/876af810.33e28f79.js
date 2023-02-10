"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6453],{98980:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=r(87462),t=(r(67294),r(3905));r(16758);const a={},i=void 0,l={unversionedId:"frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",id:"frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",title:"\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",description:"",source:"@site/docs/frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5.md",sourceDirName:"frontend/WxMiniprogram",slug:"/frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",permalink:"/en/docs/frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u6253\u5305NPM\u5305",permalink:"/en/docs/frontend/Webpack/buildNpm"},next:{title:"\u672c\u5730\u6587\u4ef6\u4f4d\u7f6e",permalink:"/en/docs/frontend/WxMiniprogram/\u672c\u5730\u6587\u4ef6\u4f4d\u7f6e"}},o={},c=[],f={toc:c};function d(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,s.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'type FileEncodeing =\n  | "utf8"\n  | "ascii"\n  | "base64"\n  | "binary"\n  | "hex"\n  | "ucs2"\n  | "ucs-2"\n  | "utf16le"\n  | "utf-16le"\n  | "utf-8"\n  | "latin1"\n  | undefined;\n\ntype OpenFileFlag =\n  | "a+"\n  | "a"\n  | "ax"\n  | "ax+"\n  | "as"\n  | "as+"\n  | "r"\n  | "r+"\n  | "w"\n  | "wx"\n  | "w+"\n  | "wx+"\n  | undefined;\n\ntype FileType =\n  | "doc"\n  | "docx"\n  | "xls"\n  | "xlsx"\n  | "ppt"\n  | "pptx"\n  | "pdf"\n  | undefined;\n\nconst fileSystemManager = wx.getFileSystemManager();\n\nexport default {\n  // \u5c06\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u4e3a\u672c\u5730\u6587\u4ef6\uff08\u6ce8\u610f\uff1asaveFile \u4f1a\u628a\u4e34\u65f6\u6587\u4ef6\u79fb\u52a8\uff0c\u56e0\u6b64\u8c03\u7528\u6210\u529f\u540e\u4f20\u5165\u7684 tempFilePath \u5c06\u4e0d\u53ef\u7528\uff09\n  saveTempFile(tempFilePath: string) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.saveFile({\n        tempFilePath: tempFilePath,\n        success(res) {\n          resolve(res);\n        },\n        fail(err) {\n          reject(err);\n        },\n      });\n    });\n  },\n\n  // \u5220\u9664\u672c\u5730\u7f13\u5b58\u6587\u4ef6\n  removeSavedFile(filePath: string) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.removeSavedFile({\n        filePath: filePath,\n        success(res) {\n          resolve(res);\n        },\n        fail(err) {\n          reject(err);\n        },\n      });\n    });\n  },\n\n  // \u65b0\u9875\u9762\u6253\u5f00\u6587\u4ef6\n  openDocumentInNewPage(filePath: string, fileType: FileType) {\n    return new Promise((resolve, reject) => {\n      wx.openDocument({\n        filePath: filePath,\n        fileType: fileType,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u6253\u5f00\u6587\u4ef6\uff08\u8fd4\u56de\u6587\u4ef6\u63cf\u8ff0\u7b26\uff09\n  openFile(filePath: string, flag: OpenFileFlag = "a+") {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.open({\n        filePath: `${wx.env.USER_DATA_PATH}` + filePath,\n        flag: flag,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u5173\u95ed\u6587\u4ef6\uff08fd\uff1a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff09\n  closeFile(fd: any) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.close({\n        fd: fd,\n        success(res) {\n          resolve(res);\n        },\n        fail(err) {\n          reject(err);\n        },\n      });\n    });\n  },\n\n  // \u83b7\u53d6\u672c\u5730\u6587\u4ef6\u7684\u6587\u4ef6\u4fe1\u606f\u3002\uff08\u53ea\u80fd\u7528\u4e8e\u83b7\u53d6\u5df2\u4fdd\u5b58\u5230\u672c\u5730\u7684\u6587\u4ef6\uff09\n  // \u4f1a\u8fd4\u56de\u6587\u4ef6\u5927\u5c0f\u548c\u6587\u4ef6\u4fdd\u5b58\u65f6\u7684\u65f6\u95f4\u6233\uff0c\u4ece1970/01/01 08:00:00 \u5230\u8be5\u65f6\u523b\u7684\u79d2\u6570\n  getSavedFileList() {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.getSavedFileList({\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u83b7\u53d6\u6587\u4ef6\u4fe1\u606f\uff08\u6b64\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6\u4e34\u65f6\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u4f46\u662f\u8fd4\u56de\u7684\u7ed3\u679c\u4e2d\u4e0d\u542b\u65f6\u95f4\uff09\n  // \u53ea\u80fd\u8fd4\u56de\u6587\u4ef6\u5927\u5c0f\u548c\u6309\u7167\u4f20\u5165\u7684 digestAlgorithm \u8ba1\u7b97\u5f97\u51fa\u7684\u7684\u6587\u4ef6\u6458\u8981\n  getFileInfo(filePath: string) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.getFileInfo({\n        filePath: filePath,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u67e5\u770b\u662f\u5426\u5b58\u5728\u5bf9\u5e94\u6587\u4ef6\uff08\u6b64\u5904\u9ed8\u8ba4\u5728\u7528\u6237\u76ee\u5f55wx.env.USER_DATA_PATH\u4e0b\u641c\u7d22\uff09\n  hasFileOrPath(path: string) {\n    console.log("\u67e5\u770b\u8def\u5f84\uff1a" + `${wx.env.USER_DATA_PATH}` + path);\n    return new Promise((resolve, reject) => {\n      fileSystemManager.access({\n        path: `${wx.env.USER_DATA_PATH}` + path,\n        success(res) {\n          // \u6587\u4ef6\u5b58\u5728\n          resolve(res);\n        },\n        fail(err) {\n          reject(err);\n        },\n      });\n    });\n  },\n\n  // \u83b7\u53d6\u6587\u4ef6\u7684\u72b6\u6001\u4fe1\u606f\n  // \uff08fd\uff09\u6587\u4ef6\u63cf\u8ff0\u7b26\n  fstatFile(fd: any) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.fstat({\n        fd: fd,\n        success(res) {\n          console.log(res);\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u8bfb\u53d6\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5217\u8868\n  readDir(path: string) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.readdir({\n        dirPath: `${wx.env.USER_DATA_PATH}/` + path,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\n  readFile(path: string, encoding: FileEncodeing = "utf8") {\n    const fs = wx.getFileSystemManager();\n    return new Promise((resolve, reject) => {\n      // \u6253\u5f00\u6587\u4ef6\n      fs.readFile({\n        filePath: `${wx.env.USER_DATA_PATH}` + path,\n        encoding: encoding,\n        position: 0,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u4fdd\u5b58\u56fe\u7247\u5230\u672c\u5730\u76f8\u518c\n  // filePath \u56fe\u7247\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u6216\u6c38\u4e45\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84) \uff0c\u4e0d\u652f\u6301\u7f51\u7edc\u8def\u5f84\n  saveImageToPhotosAlbum(filePath: string) {\n    return new Promise((resolve, reject) => {\n      wx.saveImageToPhotosAlbum({\n        filePath: filePath,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u4fdd\u5b58\u89c6\u9891\u5230\u672c\u5730\u76f8\u518c\n  saveVideoToPhotosAlbum(filePath: string) {\n    return new Promise((resolve, reject) => {\n      wx.saveVideoToPhotosAlbum({\n        filePath: filePath,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u521b\u5efa\u76ee\u5f55\n  makeDir(path: string) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.mkdir({\n        dirPath: `${wx.env.USER_DATA_PATH}` + path,\n        // \u9ed8\u8ba4\u5982\u679c\u7236\u7ea7\u76ee\u5f55\u4e0d\u5b58\u5728\u5c31\u62a5\u9519\n        recursive: false,\n        success(res) {\n          resolve(res);\n        },\n        fail(res) {\n          reject(res);\n        },\n      });\n    });\n  },\n\n  // \u8ffd\u52a0\u6587\u4ef6\u5185\u5bb9\n  appendFile(path: string, data: any) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.open({\n        filePath: `${wx.env.USER_DATA_PATH}` + path,\n        flag: "a+",\n        success(res) {\n          // \u5199\u5165\u6587\u4ef6\n          fileSystemManager.write({\n            fd: res.fd,\n            data: data,\n            success(res) {\n              resolve(res);\n            },\n            fail(res) {\n              reject(res);\n            },\n          });\n        },\n      });\n    });\n  },\n\n  // \u5199\u6587\u4ef6\n  writeFile(path: string, data: any) {\n    return new Promise((resolve, reject) => {\n      fileSystemManager.open({\n        filePath: `${wx.env.USER_DATA_PATH}` + path,\n        flag: "w+",\n        success(res) {\n          // \u5199\u5165\u6587\u4ef6\n          fileSystemManager.write({\n            fd: res.fd,\n            data: data,\n            success(res) {\n              resolve(res);\n            },\n            fail(res) {\n              reject(res);\n            },\n          });\n        },\n      });\n    });\n  },\n};\n')))}d.isMDXComponent=!0}}]);