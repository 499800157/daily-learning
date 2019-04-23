var express = require("express")

var app = express()

app.listen(9093)

app.set("view engine","ejs")
// 接收get的请求
app.get("/",function(req,res){
    res.render("form")
})

// 接收post的请求
app.post("/",function(req,res){
    // req.params是url传递的参数
    // req为表单传过来的数据,但具体的数据通过body-parser来获取
    console.log(req.body) //此处没有引用body-parser,所以此处还是undefined
    res.send("成功")
})