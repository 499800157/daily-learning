var express = require("express")
var bodyParser = require("body-parser")

/* 
    body-parser是一个HTTP请求体解析中间件
    详解 : https://www.jianshu.com/p/ea0122ad1ac0

    - bodyParser变量是对中间件的引用。请求体解析后，解析值都会被放到req.body属性，内容为空时是一个{}空对象。
    
    // 创建 application/json 解析
    var jsonParser = bodyParser.json()

    // 创建 application/x-www-form-urlencoded 解析
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    // POST /login 获取 URL编码的请求体
    app.post('/login', urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        res.send('welcome, ' + req.body.username)
    })

    // POST /api/users 获取 JSON 编码的请求体
    app.post('/api/users', jsonParser, function (req, res) {
        if (!req.body) return res.sendStatus(400)
        // create user in req.body
    });
*/
var app = express()
app.listen(9093)

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("form")
})

app.use(bodyParser.urlencoded({extended:false}))

app.post("/",function(req,res){
    console.log(req.body)
})
