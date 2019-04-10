
/* 
        url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
            parseQueryString <boolean> 默认为 false, 如果设为 true，则返回的 URL 对象的 query 属性会是一个使用 querystring 模块的 parse() 生成的对象。 如果设为 false，则 query 会是一个未解析未解码的字符串。 

*/

var url = require("url")
var http = require("http")

// console.log(url)
/* { Url: [Function: Url],
        parse: [Function: urlParse],
        resolve: [Function: urlResolve],
        resolveObject: [Function: urlResolveObject],
        format: [Function: urlFormat],
        URL: [Function: URL],
        URLSearchParams: [Function: URLSearchParams],
        domainToASCII: [Function: domainToASCII],
        domainToUnicode: [Function: domainToUnicode],
        pathToFileURL: [Function: pathToFileURL],
        fileURLToPath: [Function: fileURLToPath] 
    }
   */
var  server = http.createServer(function(req,res){
    
    if(req.url == "/favicon.ico"){
        return
    }
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
    res.write("<h1>url的参数</h1>")
    res.write("<h2>url的值为: "+req.url+"</h2>")
    var parse = url.parse(req.url,true)
    console.log(parse)
    // 路径
    var pathname = parse.pathname
    console.log(req.url)
    console.log(pathname)
    
    res.end()
})

server.listen(9093)
