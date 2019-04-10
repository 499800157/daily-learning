/* 
    <%= EJS %>
    高效的 JavaScript 模板引擎。
    "E" 代表 "effective"，即【高效】。EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。
    EJS 没有如何组织内容的教条；也没有再造一套迭代和控制流语法；有的只是普通的 JavaScript 代码而已。

    安装
    cnpm install --save ejs
*/
var ejs = require("ejs")

console.log(ejs)

// <%= a%>  <%= 不能分开  %>不能分开
// var string = "好高兴啊,今天我买了iphone<%= a %>s"

// var data = {
//     a : 6
// }
//数据绑定
// var html = ejs.render(string,data)

fs.readFile("../view/index.ejs",function(err,data){
    var template = data.toString()
    var dictionary = {
        a : 6,
        news : [
            {title : "张杰我爱你",count : 10},
            {title: "哈哈哈哈",count : 20},
            {title: "逗你玩的",count: 30}
        ]
    }
    var html = ejs.render(template , dictionary)
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    res.end(html)
})
console.log(html)

