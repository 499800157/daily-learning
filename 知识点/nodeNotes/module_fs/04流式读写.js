/*
	同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
    流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
    rs.on("data",function(data){}) 和 rs.pipe(ws) 都能讲可写读中的数据写入到可写流中
 */

var fs = require("fs")

var path = "../txt/writeHello.txt"
var newpath = "../txt/writeHello1.txt"

//创建一个可写流,创建好以后会触发ws的open方法
var ws = fs.createWriteStream(newpath)
// 创建一个可读流,创建好以后会触发rs的open方法
var rs = fs.createReadStream(path)

rs.on("open",function(re){
    console.log("可读流打开了")
    console.log(re)
})
// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// 读取文件内容
// rs.on("data",function(data){
//     var str = data.toString()
//     ws.write(data)
//     console.log(data.toString())
// })
rs.once("close",function(){
    console.log("可读流关闭了")
    ws.end()
})
ws.on("open",function(){
    console.log("可写流打开了")
})
ws.once("close",function(){
    console.log("可写流关闭了")
})

//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws)



