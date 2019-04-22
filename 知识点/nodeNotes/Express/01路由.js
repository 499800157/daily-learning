var express = require("express")
var app = express()
app.listen(9093,function(){
    console.log("node 在端口9093跑起来了!")
})

// console.log(app)

app.get("/",function(req,res){    
    res.send("你好")
})

app.get("/haha",function(req,res){
    res.send("这是哈哈页面")
})
app.get("/heihei",function(req,res){
    res.send("这是嘿嘿页面")
})

// 但学号一般都是固定位数
app.get("/student/:number",function(req,res){
    res.send("学生信息,学号为:"+req.params.number)
})

app.get(/^\/teacher\/([\d]+)$/,function(req,res){
    res.send("老师信息,工号为:"+ req.params[0])
})
// 固定位数
app.get(/^\/laoshi\/([\d]{5})$/,function(req,res){
    res.send("老师信息,工号为:"+ req.params[0])
})

// 404显示404页面


// 访问路径不区分大小写
app.get("/AAb",function(req,res){
    res.send("不区分大小写")
})

// 当id为空,不能匹配到该路由
app.get("/xuesheng/:id",function(req,res){
    var id = req.params["id"]
    var reg = /^[\d]{6}$/;
    if(reg.test(id)){
        res.send(id)
    }else{
        res.send("请检查格式")
    }
    
})

// res.write和res.send不能同时使用
app.get("/:username/:uid",function(req,res){
    var username = req.params["username"]
    var uid = req.params["uid"]
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8;"})
    res.write("用户名 : "+username + "\n")
    res.end("uid : " + uid)
    // res.send("用户名 : "+ username + "uid : "+uid )
})