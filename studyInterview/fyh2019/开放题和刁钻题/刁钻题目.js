// 1.
console.log([10,20,8].map(parseInt))          // [10,NaN,NaN]

// 理解为以下代码，第二个参数是进制
console.log(parseInt(1,0))
console.log(parseInt(2,1))
console.log(parseInt(3,2))

console.log(parseInt(3,10)) //后面的数字为进制

console.log("***********************************")

// 2.
var a = {name : "a"} //定义地址值 124
a.x = a = {}  // a=>124   {} => 126
console.log(a.x)  // undefined
// 第二句从右到左执行 124的a 现在指向126 ； 124的a.x 指向126
// 而现在的a是126的


console.log("***********************************")

// 3.
// (a ==1 && a== 2 && a==3)
//  可能为 true 吗？

// 利用 == 会调用 valueOf() 的特性
var a = {
    value : 1,
    valueOf(){
        return this.value++
    }
}

console.log(a ==1 && a== 2 && a==3)

// 利用 a 会读取 window.a 的特性
var value = 1
Object.defineProperty(window, 'b', {
    get(){
        console.log(value)
        return value++;
    }
})
// console.log(b ==1 && b== 2 && b==3 ) // true
// 或者 
console.log(b ===1 && b=== 2 && b===3) // true