安装
npm install --global vue-cli
vue init webpack baoge

npm install vuex --save
npm install --save vuex
npm install less less-loader --save
npm install axios -S
初始化 npm install


运行
npm run dev

编辑器调整
安装vetur 在设置中配
"vetur.format.defaultFormatter.js": "vscode-typescript",
"vetur.format.defaultFormatter.html": "js-beautify-html",
"vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
        "wrap_attributes": "auto"
    }
}
格式化 快捷键为 alt+shift+f

常见问题
dev: `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js` vue启动报错解决
这是因为webpack-dev-server版本和vue版本不一样，需要将webpack-dev-server卸载了，安装对应版本
卸载npm uninstall webpack-dev-server，在安装这个npm i webpack-dev-server@2.9.7，我的可以正常启动了。

优先利用父子传值，数据放在父主件的data里
再考虑用vuex，如果是大项目会让项目变的复杂，存多地方应用的变量（不应该把ajax请求过来的数据放在这里面）


