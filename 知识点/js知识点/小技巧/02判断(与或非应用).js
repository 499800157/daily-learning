/* 
    短路求值（Short-Circuit Evaluation）
*/

/* 
    逻辑与运算符（&&）将会返回第一个 false的值。
    当所有的操作数都是 true时，将返回最后一个表达式的结果。
 */
console.log(0 && null)  // 0
console.log(1 && 2 && 3) // 3

/* 
    逻辑或运算符（||）将返回第一个 true的值。
    当所有的操作数都是 false时，将返回最后一个表达式的结果。
 */
console.log(true || 1) //true
console.log(0 || false || null) //null

/* 
    应用场景
*/

//  if else
// flag 是用来记录传来的数据
var flag = {a:1}
function getdata(){
    // if(flag){
    //     return flag
    // }else{
    //     return "Fetching Data"
    // }
    // 可以优化
    return (flag || "Fetching Data")
}
console.log(getdata())

/* 
    逻辑非可以用于判断变量类型
*/

function getBooleanType(str){
    return !!str ? true : false
}
console.log("逻辑非")
console.log(getBooleanType(0))
console.log(getBooleanType(""))
console.log(getBooleanType(null))
console.log(getBooleanType(1))










