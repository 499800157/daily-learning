setTimeout(() => {
    setImmediate(() => {
        console.log("setImmediate1")
        setTimeout(() => {    // 1
            console.log("setTimeOut1")
        },0)
    })
    
    setTimeout(() =>{  // 2
        console.log("setTimeOut2")
        setImmediate(() => {
            console.log("setImmediate2")
        })
    },0)

},1000)

// 结果有问题
// timers  poll check  
// js代码单线程开始执行 
// -> 外层setTimeOut(fn,500) -> 确认event loop 已经开启  -> 执行代码 -> setImmediate ->将其放入check阶段,内部代码异步执行还未开始 -> setTimeout2放入timers阶段
// ->在poll阶段轮询,发现check阶段有任务,执行setImmediate,打印setImmediate1,将setTimeout1放入timers阶段 ->进入timers阶段,执行setTimeout2,打印setTimeout2,将setImmediate2放入check阶段
// -> 发现还有setTimeOut1,执行setTimeOut1,打印setTimeOut1 -> 进入poll阶段 ,发现check阶段有任务-> 进入check阶段,执行setImmediate2,打印setImmediate2

// 首先是在poll阶段,  setImmediate1函数放入check,setTimeOut1放入timers阶段,将setTimeOut2放入timers阶段,


// setImmediate1  setTimeout2   setTimeOut1  setImmediate2