/* 
    fs.stat() 
        不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.stat() 检查文件是否存在。 
        而是应该直接打开、读取或写入文件，如果文件不可用则处理引发的错误。
        要检查文件是否存在但随后并不对其进行操作，则建议使用 fs.access()。
    fs.mkdir
        fs.mkdir(path[, options], callback)
            recursive <boolean> 默认值: false。 递归
            mode <integer> Windows上不支持。默认值: 0o777。
    fs.readdir
        fs.readdir(path[, options], callback)
            encoding <string> 默认值: 'utf8'。
            withFileTypes <boolean> 默认值: false。 如果options.withFileTypes设置为true，则files数组将包含fs.Dirent对象。
    // 其他操作
        • 列出文件
        – fs.readdir(path[, options], callback)
        – fs.readdirSync(path[, options])
        • 截断文件
        – fs.truncate(path, len, callback)
        – fs.truncateSync(path, len)
        • 建立目录
        – fs.mkdir(path[, mode], callback)
        – fs.mkdirSync(path[, mode])其他操作
        • 删除目录
        – fs.rmdir(path, callback)
        – fs.rmdirSync(path)
        • 重命名文件和目录
        – fs.rename(oldPath, newPath, callback)
        – fs.renameSync(oldPath, newPath)
        • 监视文件更改写入
        – fs.watchFile(filename[, options], listener)
*/

var fs = require("fs")



//  stat检测状态
fs.stat("../txt/hello.txt",function(err,data){
    if(!err){
        // console.log(data)
        // Stats {
        //     dev: 2054,
        //     mode: 33188,
        //     uid: 1000,
        //     blksize: 4096,
        //     size: 11,
        //     blocks: 8,
        //     birthtimeMs: 1554865205228.169,
        //     mtime: 2019-04-10T03:00:05.228Z,
        //     birthtime: 2019-04-10T03:00:05.228Z }

        // 检测这个路径是不是一个文件夹
        console.log(data.isDirectory())
    }else{
        console.log(err)
    }
})

// mkdir
fs.mkdir("./album/bbb",{recursive:true},function(err){
    if(!err){
        console.log("创建成功了")
    }else{
        console.log(err)
    }
});

// readdir
// 将文件是目录的放入一个数组中
var wenjianjia = []
fs.readdir("./album",function(err,files){
    if(!err){
        console.log(files)
        for(var i in files){
            (function(){
                var filename = files[i]
                fs.stat("./album/" + filename,function(err,data){
                    if(!err){
                        data.isDirectory() ? wenjianjia.push(filename) : ""
                    }else{
                        console.log(err)
                    }
                    // console.log(wenjianjia)
                })
            })()
        }   
    }else{
        console.log(err)
    }
})

// 改进 , 将之前的异步读取强行转化为同步读取
var wenjianjia2 = []

fs.readdir("./album",function(err,files){
    if(err){
        console.log(err)
        return
    }
    (function iterator(i){
        if(i === files.length){
            console.log("wenjianjia2 :"+wenjianjia2)
            return 
        }
        fs.stat("./album/" + files[i],function(err,data){
            if(!err){
                data.isDirectory() ? wenjianjia2.push(files[i]) : ""
                iterator(++i)
            }else{
                console.log(err)
            }
        })
    })(0)
})



