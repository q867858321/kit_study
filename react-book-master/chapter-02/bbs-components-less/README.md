弹出webpack配置文件
webpack会跟git有冲突
1.
git add .
2.
git commit -m "init"
也可以换
git commit -am "Save before ejecting"
3.
npm run eject

安装less
  npm install less less-loader --save-dev

修改webpack.config.dev.js,webpack.config.prod.js
详情见config下配置文件
test: /\.(css|less)$/,  =>  test: /\.(css|less)$/,
在下面不远处
test: /\.(css|less)$/,  //TODO 第一处
use: [
  require.resolve('style-loader'),
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
    },
  },
  // TODO 第二处 
  {
    loader: require.resolve('less-loader')
  }
  ...
]
最后
exclude: [/\.js$/, /\.html$/, /\.json$/, /\.(css|less)$/], //TODO 第三处
