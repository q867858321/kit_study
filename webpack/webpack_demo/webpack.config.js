//webpack2.0以上版本需要此采用相对路径
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //输入为数组，打包为一个文件
    // entry: ['./src/script/main.js', './src/script/app.js'],
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'bundle.js'
    // }
    //输入为对象，打包成多个文件
    entry: {
        main: "./src/script/main.js",
        app: "./src/script/app.js",
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com',

    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "a.html",
            template: 'index.html',
            inject: 'head',
            title: 'this is a.html',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: "b.html",
            template: 'index.html',
            inject: 'head',
            title: 'this is b.html',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['b']
        }),
        new htmlWebpackPlugin({
            filename: "c.html",
            template: 'index.html',
            inject: 'head',
            title: 'this is c.html',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['c']
        })
    ]
}