
// http作用就是启动一个服务

var http = require("http")
var querystring = require("querystring")


var server = http.createServer(function(req,res){
    // console.log(req.url)

    if(req.url == "/favicon.ico"){
        return 
    }
    // 获得url参数
    var obj = querystring.parse(req.url)
    console.log(obj)
    // 地址 http://localhost:9093/user/list=223
    console.log(obj["/user/list"])  //223
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.write("<h1>主标题</h1>")
    res.write("<h2>二级标题</h2>")
    res.end("数字相加结果 : "+(1+2+3+4).toString()) //仅能发送字符串
})

server.listen(9093,function(){
    console.log("node启动了")
})