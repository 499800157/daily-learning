/* 
    JSON.stringify(value[, replacer [, space]]) 返回一个表示给定值的JSON字符串。
    value 将要序列化成 一个JSON 字符串的值。
    replacer 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；
    space 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。
*/

var a = JSON.stringify({alpha : "a",beta : "b"},null,"\t")
console.log(a)
console.log(typeof a)
