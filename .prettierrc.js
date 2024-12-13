const { parse } = require("path");

module.exports = {
  arrowParens: "avoid", //箭头函数只有一个参数的时候可以忽略括号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  endOfLine: "lf", //结束行形式
  jsxBracketSameLine: false, //多属性html标签的‘>’折行放置
  printWidth: 100, //单行长度
  proseWrap: "preserve", //换行方式
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  trailingComma: "all", //多行时尽可能打印尾随逗号
  parse: "typescript",
};
