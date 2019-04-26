/* 
    Float转Integer
 */
// 将24.6转为24
var a = 24.6
a = Math.floor(a)
console.log(a) // 24


// 将-24.6转为-24
var b = -24.6
b = Math.ceil(b)
console.log(b) // -24



/* 
    使用 |(位或运算符)将浮点数截断为整数
    如果n是正数的，则 n | 0 有效地向下舍入。如果n是负数的，它则有效地向上取整。
    更准确地说，该操作结果是直接删除小数点后的内容
*/
var c = 24.6
c = c | 0
console.log(c) // 24

var d = -24.6
d = d | 0
console.log(d) // 24


var e = 24.6
e = ~~e
console.log(e) //24


var f = -24.6
f = ~~f
console.log(f) // -24

/* 
    使用场景 
    位或运算符可以用于从整数的末尾删除任意数量的数字
*/
console.log("使用场景,将1552除以10得到的整数")
var str = "1552"
str = Number(str.substring(0,str.length-1))
console.log(str) //155

console.log("1552"| 0) // 1552
console.log("1552"/10 | 0) // 155

