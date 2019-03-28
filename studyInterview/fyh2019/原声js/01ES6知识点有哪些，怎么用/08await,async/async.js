/* 
    ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
    async 函数是什么？一句话，它就是 Generator 函数的语法糖
*/

/* 
    await
    await 关键字只能在async function中使用
    await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
*/

/* 
result 打印先于 new promise的then
1.  resolveAfter2Seconds 函数为单纯的函数时， calling  , 1234 , 1 , 7 , 13 , 2234 , 8 , 
result 打印在最后
2. resolveAfter2Seconds 函数返回Promise时，result执行顺序在最后
*/

async function asyncCall(){
    console.log("calling")
    // await console.log(123)
    var result = await resolveAfter2Seconds();
    console.log(result);
}
function resolveAfter2Seconds() {
    console.log(1234)
    // return 2234
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

asyncCall()

console.log(1)
setTimeout(function(){
    console.log(2)
    new Promise(function(resolve){
        console.log(4)
        resolve()
    }).then(function(){
        console.log(5)
    })
})
new Promise(function(resolve){
    console.log(7)
    resolve()
}).then(function(){
    console.log(8)
})
console.log(13)
setTimeout(function(){
    console.log(9)
    new Promise(function(resolve){
        console.log(11)
        resolve()
    }).then(function(){
        console.log(12)
    })
})