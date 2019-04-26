/* 
    1.过滤值(数组去重)
    当包涵 object， function， array时，则不适用。
*/
var arr = [1,2,3,5,9,4,6,2,7,6,8]
arr = [{a:1},{a:1},{a:2},{a:3}]
var newArr = [ ...new Set(arr)]
console.log(newArr)

/* 
    2.快速求幂
    从 ES7开始，我们可以使用幂运算符 ** 作为求幂的简写，相对之前的 Math.pow(2, 3) 更加快捷。
*/

console.log(Math.pow(2,3)) //8
console.log(2**3) // 8
console.log(2<< (3-1) ) // 8





