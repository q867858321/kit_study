const path = require('path')
const debug = process.env.NODE_ENV !== 'production'


// 配置请求本地地址
const express = require('express')
const app = express()
var apiRoutes = express.Router()
app.use('/api', apiRoutes)


module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', // 根域上下文目录
    outputDir: 'dist3', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else { // 生产环境配置
        }
        Object.assign(config, { // 开发生产共同配置，配置别名
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components'),
                    'vue$': 'vue/dist/vue.esm.js'
                }
            }
        })
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        proxy: { // 配置跨域
            '/manage': {
                //要访问的跨域的api的域名
                target: 'http://192.168.2.111:8764/',
                ws: true,
                changOrigin: true,
            }
        },
        before: app => {
            //请求本地地址
            app.get('/api/income', function (req, res) {
                let appData = require('./static/income.json')
                res.json({ code: 0, data: appData })
            });
        }
    }
}
