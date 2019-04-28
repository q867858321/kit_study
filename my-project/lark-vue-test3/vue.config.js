
module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 配置 webpack-dev-server 行为。
    devServer: {
        proxy: { // 配置跨域
            '/manage': {
                //要访问的跨域的api的域名
                target: 'http: //192.168.2.111:8764/',
                ws: true,
                changOrigin: true,
            }
        },
    }
}