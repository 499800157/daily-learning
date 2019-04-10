/* 
        - path.normalize方法会纠正路径中的不规范的地方 , var fileURL = "./" + path.normalize("./static/" + pathname)
        - 得到拓展名 , var extname = path.extname(pathname)
        - 解析路径　path.parse("/home/rocky/atgui/index.html")
*/

var http = require("http")
var url = require("url")
var path = require("path")
var fs = require("fs")

var {getFileContent} = require("../util/getJSONconten")

var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname
    if(pathname == "/favicon.ico"){
        return
    }   
    // 当访问的地址中不存在 "." 即是未有后缀名,可能是目录,让其显示目录下的index页面
    if(pathname.indexOf(".") == -1){
        pathname += "/index.html"
    }
    // 需要读取的文件
    // path.normalize方法会纠正路径中的不规范的地方
    var fileURL = "./" + path.normalize("./static/" + pathname)
    console.log(fileURL)
    //得到拓展名
    var extname = path.extname(pathname)
    console.log(extname)
    fs.readFile(fileURL,function(err,data){
        if(err){
            res.writeHead(404,{"Content-type":"text/html;charset=utf-8"})
            res.end("404,页面未找到!")
        }
        getFileContent(extname,"./mime.json",function(type){
            res.writeHead(200,{"Content-type":type})
            res.end(data)
        })
    })
})

server.listen(9093,"127.0.0.1",function(){
    console.log("node跑起来了")
    var a = path.parse("/home/rocky/atgui/index.html")
    console.log(a)
/*     
        a:{ 
            root: '/',
            dir: '/home/rocky/atgui',
            base: 'index.html',
            ext: '.html',
            name: 'index' 
        }
 */
})

