vue一些特殊写法说明
http://localhost:8080/detail?id=1&name=4
参数 this.$route.query

vuex
数据保存在 this.$store.state

安装插件
npm install axios --S  2.0
vue add axios 
安装的插件
babel-plugin-syntax-dynamic-import 分片打包
axios vue-axios
less  less-loader
vue-router
vuex
vue-wechat-title  title标题


全局卸载vue-cli 并重装vue-cli
npm uninstall -g vue-cli
npm install -g @vue/cli
创建项目
vue create hello-world
初始化
npm install
运行 
npm run dev
打包
npm run build
vue-cli3弹出webpack配置项
vue inspect > output.js
查看node、vue、webpack版本信息
node -V
npm info webpack
vue -V


出现的问题？
1、npm install 报错
    npm cache clean --force
2、npm run dev报错
    查看npm依赖包是否引进
