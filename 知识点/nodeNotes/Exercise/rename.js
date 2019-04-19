var http = require("http")
var path = require("path")
var fs = require("fs")

var sd = require("silly-datetime")
var formidable = require("formidable")


var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return
    }
    if(req.url == "/"){
        fs.readFile("../view/form.html","utf8",function(err,data){
            if(err){
                throw Error(err)
            }
            res.end(data)
        })
    }

})


server.listen(9093,function(){
    console.log("node在端口9093上跑起来了！")
})

