新建文件
初始化文件夹
npm init
安装到本文件夹下
npm install webpack --save-dev
npm install webpack-cli --save-dev
打包单个文件
webpack hello.js -o hello.build.js

安装css-loader style-load
npm install css-loader style-loader --save-dev
导入方法
require('style-loader!css-loader!./style.css')
或者命令行
webpack hello.js -o hello.build.js --module-bind 'css=style-loader!css-loader'
热更新
webpack hello.js -o hello.build.js --module-bind 'css=style-loader!css-loader' --watch
加 --progress 可以看出打包过程
加 -modules 列出所有打包的模块