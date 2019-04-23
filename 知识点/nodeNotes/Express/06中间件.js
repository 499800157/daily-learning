var express = require("express")

var app = express()
app.listen(9093)

/* 
    中间件
    Node.js 本身并无“中间件”（middleware）的概念。在 Express/Koa 等 Web 框架中看到的这一概念。
    等价于“插件”（plugin）——用于扩展功能的可拆装模块。
    next() 函数则是用于调用下一个中间件的。因为在 Express 框架中，中间件是层叠的，
    上层中间件处理完当前任务后必须按照约定把处理机会转交给下层中间件。调用 next() 函数就是为了达到这一目的。
    
    - 中间件功能是顺序执行的，因此中间件包含的顺序很重要。
    *************
    Express的中间件，用来实现各种功能，比如cookie解析、日志记录、文件压缩等。
    对于同一个网络请求，可能同时有多个匹配的中间件，一般顺序执行。而 next() 则是把执行控制权，从上一个中间件，转移到下一个中间件的函数。
*/

app.get("/:username/:id",function(req,res,next){
    var username = req.params.username;

    // flag为数据库查询的用户结果,如果用户不存在则next
    var flag = false;
    if(flag){
        console.log("1")
        res.send("用户信息")
    }else{
        console.log("2")
        next()
    }
})

// 当上一个执行next时就会执行此步
/* 
    将此步骤放在上边,则不会有影响,可以通过访问admin/login处理,访问/:username/:id处理上边的内容,
    放在这里,则会产生影响,即使访问admin/login,这里也不会处理,只有当调用next才会处理.
*/
app.get("/admin/login",function(req,res){
    console.log(2)
    res.send("管理员登录")
})

