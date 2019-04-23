var express = require("express")

var app = express()
app.listen(9093)

app.set("view engine","jade")

app.get("/",function(req,res){
    console.log(req.ip) // ::1
    res.render("xixi")
})