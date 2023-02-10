"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9885],{73922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=t(87462),a=(t(67294),t(3905));t(16758);const l={title:"\u6253\u5305NPM\u5305"},o=void 0,r={unversionedId:"frontend/Webpack/buildNpm",id:"frontend/Webpack/buildNpm",title:"\u6253\u5305NPM\u5305",description:"\u4e00\u822c\u6b65\u9aa4",source:"@site/docs/frontend/Webpack/buildNpm.md",sourceDirName:"frontend/Webpack",slug:"/frontend/Webpack/buildNpm",permalink:"/docs/frontend/Webpack/buildNpm",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Webpack/buildNpm.md",tags:[],version:"current",lastUpdatedAt:1676027242,formattedLastUpdatedAt:"2023\u5e742\u670810\u65e5",frontMatter:{title:"\u6253\u5305NPM\u5305"},sidebar:"frontEndSidebar",previous:{title:"\u4e00\u4e9b\u6ce8\u610f\u70b9",permalink:"/docs/frontend/Vue/\u4e00\u4e9b\u6ce8\u610f\u70b9"},next:{title:"\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5",permalink:"/docs/frontend/WxMiniprogram/\u6587\u4ef6\u5de5\u5177\u65b9\u6cd5"}},i={},d=[{value:"\u4e00\u822c\u6b65\u9aa4",id:"\u4e00\u822c\u6b65\u9aa4",level:2},{value:"\u52a0\u4e0a\u4e00\u4e9bcommit\u89c4\u8303",id:"\u52a0\u4e0a\u4e00\u4e9bcommit\u89c4\u8303",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u822c\u6b65\u9aa4"},"\u4e00\u822c\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u76ee\u5f55\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  |- webpack.config.js\n  |- /src\n    |- index.ts\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,a.kt)("p",null,"\u6587\u4ef6\u76ee\u5f55\u4f1a\u53d8\u6210\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  |- webpack.config.js\n  |- package.json\n  |- /src\n    |- index.ts\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"li"},"webpack.config.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst webpack = require('webpack'); // \u7528\u4e8e\u8bbf\u95ee\u5185\u7f6e\u63d2\u4ef6\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\n\n/**\n * @type {import('webpack').Configuration}\n */\nmodule.exports = {\n    entry: path.resolve(__dirname, '../src/index.ts'),\n    output: {\n        path: path.resolve(__dirname, '../dist'),\n        filename: 'utils.js',\n        library: {\n            name: '[NPM\u5305\u540d]',\n            type: 'umd',\n        },\n    },\n    module: {\n        rules: [\n            { test: /\\.txt$/, use: 'raw-loader' },\n            { test: /\\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },\n            { test: /\\.json$/, use: 'json-loader' },\n            {\n                test: /\\.s[ac]ss$/i,\n                use: [\n                    // \u5c06 JS \u5b57\u7b26\u4e32\u751f\u6210\u4e3a style \u8282\u70b9\n                    'style-loader',\n                    // \u5c06 CSS \u8f6c\u5316\u6210 CommonJS \u6a21\u5757\n                    'css-loader',\n                    // \u81ea\u5b9a\u4e49css\u6587\u4ef6\u524d\u7f00\n                    'postcss-loader',\n                    // \u5c06 Sass \u7f16\u8bd1\u6210 CSS\n                    'sass-loader',\n                ],\n            },\n            {\n                test: /\\.jsx$/,\n                use: ['babel-loader'],\n            },\n            {\n                test: /\\.tsx?$/,\n                use: 'ts-loader',\n                exclude: /node_modules/,\n            },\n            {\n                test: /\\.less$/i,\n                use: [\n                    // compiles Less to CSS\n                    'style-loader',\n                    'css-loader',\n                    'postcss-loader',\n                    'less-loader',\n                ],\n            },\n        ],\n    },\n    resolve: {\n        extensions: ['.tsx', '.ts', '.js'],\n    },\n    plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],\n};\n\n")),(0,a.kt)("h2",{id:"\u52a0\u4e0a\u4e00\u4e9bcommit\u89c4\u8303"},"\u52a0\u4e0a\u4e00\u4e9bcommit\u89c4\u8303"))}c.isMDXComponent=!0}}]);