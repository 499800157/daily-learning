// 理解ｃｄ,冷却时间
//cd中不能执行该功能函数

// 技能内容
function fn(){}

// 刚开始是没有冷却的
var cd = false

// 定义用户的操作
button.onClick = function(){
    if(cd){
        // 技能冷却中
    }else{
        fn()
        cd = true
        var timeId = setTimeout(() =>{
            cd = false
        },3000)
    }
}


