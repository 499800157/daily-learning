var express = require("express")

var app = express()

app.listen(9093)

app.get("/",function(req,res){
    // 访问 http://localhost:9093/?a=1&b=2
    console.log(req.query) // { a: '1', b: '2' }
    res.send()
})


