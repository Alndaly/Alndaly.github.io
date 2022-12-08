---
title: 数组方法
description: 简单总结一下js数组的一些方法
---

## `find`

返回数组中满足提供的测试函数的第一个元素的值。否则返回`undifined`。

:::tip
`find`方法不会改变原数组。
:::

### 语法

```jsx
// 箭头函数
find((element) => { /* … */ } )
find((element, index) => { /* … */ } )
find((element, index, array) => { /* … */ } )

// 回调函数
find(callbackFn)
find(callbackFn, thisArg)

// 内联回调函数
find(function(element) { /* … */ })
find(function(element, index) { /* … */ })
find(function(element, index, array){ /* … */ })
find(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

`callbackFn`

在数组每一项上执行的函数，接收3个参数

- element 当前遍历到的项
- index 当前遍历到的项的下标
- array 当前数组

`thisArg`

回调函数中作为`this`的对象。

### 返回值

数组中第一个满足回调函数要求的项的具体内容。

### 范例

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```