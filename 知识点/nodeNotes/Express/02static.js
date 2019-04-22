var express = require("express")

var app = express()

app.listen(9093,function(){
    console.log("node跑起来了")
})

/* 
    根路径下展示该index页面
    引用该路径下所有文件,该目录下的index页面被展示出来,所以注意引用的目录层级.
*/ 
app.use(express.static("../static/public"))

app.get("/haha",function(req,res){
    res.send("haha")
})

