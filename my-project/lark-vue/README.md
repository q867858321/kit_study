安装
npm install vuex --save
npm install --save vuex

初始化 npm install

常见问题
dev: `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js` vue启动报错解决
这是因为webpack-dev-server版本和vue版本不一样，需要将webpack-dev-server卸载了，安装对应版本
卸载npm uninstall webpack-dev-server，在安装这个npm i webpack-dev-server@2.9.7，我的可以正常启动了。