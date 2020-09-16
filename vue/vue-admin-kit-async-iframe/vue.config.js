
const externalsConfig = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  // 'echarts': 'echarts',
}
module.exports = {
  publicPath: '/',
  outputDir: 'out',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 8989, // 开发服务器运行端口号
    proxy: {
      '/saas': {
        target: 'http://192.168.161.239:8080', // 代理接口地址
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        // pathRewrite: {
        //     '^/saas': '/saas'   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        // }
      }
    }
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? externalsConfig : {},
  },
}