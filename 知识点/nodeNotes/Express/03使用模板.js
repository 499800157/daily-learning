var express = require("express")

var app = express()

app.listen(9093)

//设置模板引擎
app.set("view engine","ejs")

app.get("/",function(req,res){
    // 读取当前路径下的views目录下的haha.ejs模板
    res.render("haha",{
        "news":["我是小新闻","我也是","嘿嘿"]
    })
})