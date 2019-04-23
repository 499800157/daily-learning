var express = require("express")

var app = express()

app.listen(9093)

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("haha",{news:[
        "1","2"
    ]})
})

app.get("/check",function(req,res){
    res.send({
        users:"ok"
    })
})