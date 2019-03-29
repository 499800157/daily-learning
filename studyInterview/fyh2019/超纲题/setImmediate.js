// 1.
setTimeout(function(){
    console.log("fn")
},0)
setImmediate(function(){
    console.log("fn2")
})
// 加上以下代码 nextTick则顺序就固定了 3 1 2 ;这里还没搞懂
// process.nextTick(function(){
//     console.log("fn3")
// })
// 执行顺序不确定，因为eventloop和js执行顺序不能确定，都是异步的
// 按理来说应该是eventloop先执行,setImmediate先执行

// 2.
// setTimeout(function(){
//     setTimeout(function(){
//         console.log("fn")
//         process.nextTick(function(){
//             console.log("fn3")
//         })
//     },0)
//     setImmediate(function(){
//         console.log("fn2")
//     })
//     process.nextTick(function(){
//         console.log("fn4")
//     })
// },1000)

// 4  2  1 3
// 这样顺序就是确定的了,待eventloop启动后执行js, setImmediate 先于 setTimeOut
