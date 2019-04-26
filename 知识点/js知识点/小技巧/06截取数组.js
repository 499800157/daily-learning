/* 
    一 从数组的末尾删除值.获得数组前几位
*/

// 截取前四个,删除后边所有
// 1. 改变原数组
var arr = [0,1,2,3,4,5,6,7,8,9]
arr.length = 4
console.log(arr)

// 2.不改变原数组,而且速度更快
var arr1  = [0,1,2,3,4,5,6,7,8,9]
var arrRe = arr1.slice(0,4)
console.log(arrRe)
console.log(arr1)

// 3.
var arr2 = [0,1,2,3,4,5,6,7,8,9]
arr2.splice(4) //从第四位删除后面所有
console.log(arr2)


/* 
    二 获取数组后几位
*/

var arr3 =  [0,1,2,3,4,5,6,7,8,9]
var arrRe1 = arr3.slice(-1)
var arrRe2 = arr3.slice(-3)
console.log(arrRe1) //[9]
console.log(arrRe2) //[7,8,9]
console.log(arr3) //不被改变

var arr4 =  [0,1,2,3,4,5,6,7,8,9]
arr4.splice(0,arr4.length - 3)
console.log(arr4) //[7,8,9] //发生改变
