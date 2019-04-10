/* 
        异步

        fs.open(path, flags[, mode], callback)
            flags打开文件的方式
            [mode] 是文件的权限（可行参数，默认值是0666）
            callback 回调函数,两个参数err,fd
        fs.read(fd,buffer,offset,length[,position],callback(err,bytesWritten,buffer)
            position (integer) 指定 在写入文件内容的起始位置。0即是从第一个字符开始,2即是前两位不要,只要后边的内容
            offset 决定要写入buffer的部分 ,0即是从开始写,5即是从第五位开始写,之前为0.
            length 读取长度 不能大于剩余字节长度,如果偏移10,则length+10需要小于等于buffer的长度
        fs.write(fd, string[, position[, encoding]], callback)
            若原文件内容很多,填入的string只会覆盖所在位置的内容.
            position 是第几位开始填写内容,当open是追加时,不看此属性,
        fs.close(fd,callback)
*/

// 打开文件 写入内容 关闭文件
var fs = require("fs")

// 1. 异步执行
fs.open("../txt/writeHello.txt","a+",function(err,fd){
    if(!err){
        var buffer = Buffer.alloc(255)
        // fd 相当于文件操作符
        console.log(fd) // 20
        fs.read(fd,buffer,0,255,0,function(err,bytesRead,buffer){
            console.log(err) // null 
            // bytesRead 读取的字符数
            console.log(bytesRead)  // 5
            console.log(buffer) // <Buffer 68 65 6c 6c 6f 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 205 more bytes>
            // 读取的内容
            console.log(buffer.toString()) // hello
        }) 
        // write是读写追加 取决于open的flag参数
        fs.write(fd,"你是我的小呀小苹果",function(err){
            if(!err){
                console.log("异步写入成功")
            }
            fs.close(fd,function (err) {
                if(!err){
                    console.log("文件关闭")
                }
            })
        })
    }
})

// 2. 同步执行
var fd = fs.openSync("../txt/writeHello1.txt","w")
console.log(fd) //返回值为数字
fs.writeSync(fd,"再写一些内容",0)
fs.closeSync(fd)



/* 
当flag选项采用字符串时，可用以下标志：
常用*
*          'a'- 打开文件用于追加。如果文件不存在，则创建该文件。
            'ax'-与'a'相似，但如果路径已存在则失败。
*           'a+'- 打开文件用于读取和追加。如果文件不存在，则创建该文件。
            'ax+'-与'a+'相似，但如果路径已存在则失败。
            'as'- 以同步模式打开文件用于追加。如果文件不存在，则创建该文件。
            'as+'- 以同步模式打开文件用于读取和追加。如果文件不存在，则创建该文件。
            'r'- 打开文件用于读取。如果文件不存在，则出现异常。
*          'r+'- 打开文件用于读取和写入。如果文件不存在，则出现异常。
            'rs+'- 以同步模式打开文件用于读取和写入。指示操作系统绕过本地的文件系统缓存。
            这对于在NFS 挂载上打开文件时非常有用，因为它允许跳过可能过时的本地缓存。它对I/O 性能有非常实际的影响，因此除非需要，否则不建议使用此标志。
            这不会将fs.open()或fsPromises.open()转换为同步的阻塞调用。如果需要同步的操作，则应使用fs.openSync()之类的。
            'w'- 打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
            'wx'-与'w'相似，但如果路径已存在则失败。
            'w+'- 打开文件用于读取和写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
            'wx+'-与'w+'相似，但如果路径已存在则失败。
*/

