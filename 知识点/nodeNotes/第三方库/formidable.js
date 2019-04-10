/* 
    表单上传
    安装　
        cnpm install --save formidable
*/

var http = require("http");
var formidable = require('formidable');
var util = require("util");
var fs = require("fs")
console.log(util)
//创建服务器
var server = http.createServer(function(req,res){
    fs.readFile("../view/form.html",function(err,data){
        if(err){
            throw Error ("form文件未找到!")
        }
        res.end(data)
    })
    //如果你的访问地址是这个，并且请求类型是post
    if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
        //Creates a new incoming form.
        var form = new formidable.IncomingForm();
        //设置文件上传存放地址
        form.uploadDir = "./uploads";
        //执行里面的回调函数的时候，表单已经全部接收完毕了。
        form.parse(req, function(err, fields, files) {
            if(err){
                throw err;
            }
            // console.log(fields);
            // console.log(files);
            console.log(util.inspect({fields: fields, files: files}));
            //所有的文本域、单选框，都在fields存放；
            //所有的文件域，files
            res.writeHead(200, {'content-type': 'text/plain'});

            res.end("成功");
        });
    }
});

server.listen(9093,"127.0.0.1");