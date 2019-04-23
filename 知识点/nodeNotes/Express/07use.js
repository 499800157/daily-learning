var express = require("express")

var app = express()
app.listen(9093)

/* 
    app.get和app.use的区别
    app.use(path,callback)中的callback既可以是router对象又可以是函数
    app.get(path,callback)中的callback只能是函数

    当一个路径有多个匹配规则时，使用app.use，否则使用相应的app.method(get、post)

*/
/* 
    当你不写路径的时候，实际上就相当于"/"，就是所有网址
    使用中间件,不调用next,不会向下执行
    use对于path的匹配大于get的匹配{
        举例
            比较use"/haha"和 get "/haha"
            当路径访问 /haha s时,两个方法均可以处理
            当路径访问 /haha/xxx 时,只有use可以处理
            
    }
*/
app.use("/haha",function(req,res,next){
    console.log(new Date())
    next()
})
app.get("/",function(req,res){
    console.log("app.get('/')")
})
app.get("/haha",function(req,res){
    console.log("哈哈")
})

app.use("/admin",function(req,res){
    console.log("use")
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8;"})
    res.write(req.originalUrl + "\n")
    res.write(req.baseUrl + "\n")
    res.write(req.path + "\n")
    res.end("你好")
})

