/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

	// 不同页面使用不同目录
	frontEndSidebar: [{ type: 'autogenerated', dirName: '前端' }],
	backEndSidebar: [{ type: 'autogenerated', dirName: '服务端' }],
	toolsSidebar: [{ type: 'autogenerated', dirName: '工具' }],
	anyThing: [{ type: 'autogenerated', dirName: '杂项' }],
	mind: [{ type: 'autogenerated', dirName: '心理' }],
	ai: [{ type: 'autogenerated', dirName: '人工智能' }],
};

module.exports = sidebars;