module.exports = {
    publicPath: '/',  //根路径
    outputDir: 'dist2', //构建输出目录,
    assetsDir: 'assets',  //静态资源目录
    lintOnSave: false,//否否开启eslint检测 ture false error
    devServer: {
        open: true,  //创建完成自动打开浏览器
        // host: "localhost",
        // port: 8081
        proxy: { //配置跨域
            '/api': {
                target: "http://localhost:5000/api/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}