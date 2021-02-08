module.exports = {
    publicPath: '/',
    outputDir: 'saas-web',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        open: false,  // npm run serve后自动打开页面
        host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8989, // 开发服务器运行端口号
        proxy: {
            '/saas': {
                target: 'http://192.168.12.83:8080',//杨测试服务器 广安
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 是否跨域
                // pathRewrite: {
                //     '^/saas': '/saas'   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
                // }
            }
        }
    },

    chainWebpack(config) {
        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                vue: {
                                    name: 'chunk-vue', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?vue(.*)/ // in order to adapt to cnpm
                                },
                                element: {
                                    name: 'chunk-element',
                                    priority: 20,
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                                },
                                antD: {
                                    name: 'chunk-antD', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/ // in order to adapt to cnpm
                                },
                                echarts: {
                                    name: 'chunk-echarts', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?echarts(.*)/ // in order to adapt to cnpm
                                }
                            }
                        })
                }
            )
    },
}