/* 
*  作用：传入一个参数,返回的参数调用这个函数
*  使用：传入拓展名，JSON文件路径，回调函数
*/
function getFileContent(extname,path,callback){
    fs.readFile(path,"utf-8",function(err,data){
        if(err){
            throw Error("路径文件 : "+path+"找不到")
            return
        }
        var jsonData = JSON.parse(data)
        var dataType = jsonData[extname] || "text/plain"
        console.log(dataType)
        callback(dataType)
    })
}

exports.getFileContent = getFileContent