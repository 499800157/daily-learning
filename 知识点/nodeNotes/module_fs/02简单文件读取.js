/* 
    简单文件读取内容

    读取
        fs.readFile(path[, options], callback)   
        fs.readFileSync(path[, options])
        ```
            读取统一属性
            如果options是字符串，则它指定字符编码：
            encoding默认值null
            flag <string>参阅支持的文件系统标志。默认值: 'r'。 r 只读 w 可写  a 追加
        ```
    写入
        fs.writeFile(file, data[, options], callback)  
            callback只有一个err参数 
        fs.writeFileSync(file, data[, options])
        ```
            写入统一属性
            写入没有返回值
            encoding默认值'utf8'
            mode <integer> 默认值: 0o666。 文件的权限
            flag <string>参阅支持的文件系统标志。默认值: 'w'。
        ```
*/

var fs = require("fs")

// 1. 异步读取
fs.readFile("../txt/hello.txt",{encoding : "UTF8"},function(err,data){
    if(err){
        throw Error(err)
    }
    // 如果没有指定 encoding，则返回原始的buffer。
    console.log("异步读取内容 : "+data)  // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
    // 通过添加option,使得data的结果为字符串
})

// 2. 异步写入

fs.writeFile("../txt/writeHello.txt","hello",function(err){
    if(!err){
        console.log("异步简单文件写入成功")
    }
})


// 3. 同步读取
var con = fs.readFileSync("../txt/hello.txt","utf8")
// 返回值为文件内容
console.log("同步读取内容 : "+con)

// 4. 同步写入
// 文件不存在会创建,文件夹不存在会报错
fs.writeFileSync("../txt/writeHello1.txt","hello Sync")
console.log("同步写入 没有返回值")




