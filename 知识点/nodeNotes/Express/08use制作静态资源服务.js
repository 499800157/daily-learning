var express = require("express")

var fs = require("fs")
var app = express()

app.listen(9093)

// 访问 http://localhost:9093/index.html
app.use(haha)
app.get("/admin",function(req,res){
    res.send("管理员")
})
/* 
    根据当前的网址，读取public文件夹中的文件
    如果有这个文件，那么渲染这个文件
    如果没有这个文件，那么next();
*/
function haha(req,res,next){
    var filePath = req.originalUrl

    fs.readFile("../static/public/" + filePath,function(err,data){
        // 文件不存在
        if(err){
            next()
            return
        }
        console.log(data)
        res.send(data.toString())
    })
}