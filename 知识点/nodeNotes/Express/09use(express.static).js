var express = require("express")

var app = express()

app.listen(9093)

// express读取静态资源
app.use("/jingtai",express.static("../static/public"))

// 新路由
app.get("/images",function(req,res){
    res.send("哈哈")
})

// 会自动识别err参数,如果存在err,则该函数就可以捕获err
app.use(function(req,res){
    res.status(404).send("没有此页面")
})


