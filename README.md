# webpack4-vuejs-analysis

## Project setup

vuejs 源码分析

源码文件位置 lib/vuejs

版本 2.6.11

程序运行方式

npm install

npm run start

src/index 文件 导入源文件

import Vue from "web/entry-runtime-with-compiler"

flow-bin

add .babelrc.js file

add npm package

@babel/plugin-transform-flow-strip-types
babel-plugin-syntax-jsx
babel-plugin-transform-vue-jsx

add vscode config

{
// ...
"javascript.validate.enable": false,
"flow.useLSP": false
}

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
