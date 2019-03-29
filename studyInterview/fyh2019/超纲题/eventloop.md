## 操作系统
1. 按下键盘，系统如何知道？
按键触发电流，每个键对应一个数字（有个表一一对应），操作系统通过电流就能知道你按下了哪个键，将信息传递到浏览器上（input框）  

浏览器接受到操作系统给他的一个事件,用户不停的触发事件，浏览器就会不停地接受操作系统的事件，然后将信息输入到input框里。  

操作系统接收外部传来的信息，然后可以通知给其他软件(浏览器)。

但是操作系统不是很智能的很快就能获得外部的信息，他会不停的询问外部是否有信息传来，比如5ms查看一次，不停的查看，这就叫做 **轮询**

## eventloop(nodejs中的概念)
1. 理解轮询
 js在执行任务时，执行了10行代码，然后需要发送ajax请求，然后又执行了20行代码，当发送ajax请求后，不会去等ajax的返回，而是去执行后面的代码，但是请求需要有人去等待信息的返回，是发送ajax请求的时候，浏览器或操作系统(c++)会得到这个请求，他（c++）就知道应该去等待信息的返回，同样是5ms轮询一次是否返回信息。

2. 事件循环
是一个比喻，指的是不同阶段的变化。  
六个阶段  
- timers 这个阶段执行 setTimeout 和 setInterval 的回调函数。  
~~- I/O  callbacks~~  
~~- idle, prepare 阶段（译注：看起来是两个阶段，不过这不重要）：event loop 内部使用的阶段~~
- poll 阶段：获取新的 I/O 事件。在某些场景下 Node.js 会阻塞在这个阶段。（可以停留一段时间）轮询阶段
- check 阶段：执行 setImmediate() 的回调函数。  
~~- close callbacks 阶段：执行关闭事件的回调函数，如 socket.on('close', fn) 里的 fn。~~

3. 执行顺序
```
是先执行js还是先开启eventloop   
setTimeOut(fn,1000)

nodejs是这样写的
开启eventloop()
执行js~~~

虽然先开启eventloop,但是他们都是异步执行的，哪个快不能确定

大部分时间是停留在poll阶段
```


### 自己理解

1. eventloop是node里的概念
2. eventloop事件循环总共是有6个阶段,与前端相关的事件循环 阶段 : timers , poll , check ; 顺序: timers -> poll -> check -> timers -> poll 单项循环
3. eventloop事件循环开启 先于执行js代码,但都是异步执行,结果顺序存在不确定性.
4. 当eventloop开启完成最终先于js代码执行,则eventloop存在于poll阶段,当ventloop开启完成最终晚于js代码执行,则进入timers阶段(这就是执行setTimeOut和setImmediate执行时顺序不确定的原因)
4. setImmediate是在check阶段触发
5. process.nextTick()不是event loop 的一部分,不管event loop 处于哪个阶段,process.nextTick()队列都是在当前阶段后就被执行
