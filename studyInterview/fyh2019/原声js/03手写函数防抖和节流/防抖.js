// 带着一起做 理解外面小哥接单
// 定义每接到单，等五分钟，如果没有单就去送，如果接到单，再等五分钟

// 去送外面的动作
function fn(){}

// 送外面的想法
var timerId = null
button.onClick = function(){
    // 5s中之内再次点击，则取消之前的想法，并重新启动想法
    if(timerId){
        window.clearTimeout(timerId)
    }
    timerId = setTimeout(() =>{
        // 五秒内未有订单，我就去送单，重置送外卖的想法（就是没有单了，没有送外卖的想法了）
        fn()
        timerId = null
    },5000)
}
