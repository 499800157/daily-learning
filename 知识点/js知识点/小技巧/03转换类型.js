/* 
    1. 转boolean类型,通过双非符号(!!),参看02中非的应用
    2. 转字符串,可以通过 +连接运算符将一个number类型的变量转换成string类型。
*/
var val = 1 + ""
console.log(typeof val) //string


/* 
    3.转Number
    int = + "15"
    int2 = ~~"15"

*/
var int = "15"
int = + int
console.log(typeof int) //number

// 一个波浪号 ~，被称为“按位不运算符”，等价于 - n - 1。所以 ~15 = -16.
const int2 = ~"15"
console.log(int2) // -16
// 使用两个 ~~可以有效的否定运算。  -(- n - 1)-1 = n+1-1 = n
const int3 = ~~"15"
console.log(int3) // 15
console.log(typeof int3) // number

// 还有取整的功能
console.log(~~15.6) // -15

