var express = require("express")

var app = express()

app.listen(9093)
/* 
    在 Express 可以呈现模板文件之前，必须设置以下应用程序设置：
        views：模板文件所在目录。例如：app.set('views', './views')
        view engine：要使用的模板引擎。例如：app.set('view engine', 'pug')     --如果未设置 view engine 属性，必须指定 view 文件的扩展名。否则，可以将其忽略。

*/
//设置模板引擎
app.set("view engine","ejs")

app.get("/",function(req,res){
    // 读取当前路径下的views目录下的haha.ejs模板
    /* 
        res.render（view [，locals] [，callback]）
        view参数是一个字符串，它是视图文件来渲染的文件路径
        locals，一个对象，其属性定义视图的局部变量。
        callback，一个回调函数。如果提供，则该方法返回可能的错误和呈现的字符串
     */
    res.render("haha",{
        "news":["我是小新闻","我也是","嘿嘿"]
    })
})