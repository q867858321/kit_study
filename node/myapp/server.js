    /*           以下代码等下会有详细的解释              */
var express = require('express');  // 用来引入express模块
var app     = express();                 // express 实例对象
app.set('port',process.env.PORT || 3001);
                                                    // 设置端口为3000
app.get('/',function  (req,res) {          //  设置首页的路由 用 '/' 表示
res.send('Ritsu Yan ') 
})
app.get('/about',function  (req,res) {    //设置about页面的路由 用 '/about' 表示
res.send('the node course')             
})
app.use(function  (req,res,next) {         // 设置404页面
res.status(404);
res.send('404 - Not Found')
})
app.listen(app.get('port'),function  () {      // 监听端口如果有用户进入页面发送请求我们输出以下语句
console.log('express started on port 3000')
})