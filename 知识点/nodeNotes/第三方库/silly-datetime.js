/* 
    时间格式化
    安装　
        cnpm install --save silly-datetime
*/

var sd = require("silly-datetime")

// 格式固定 YYYY-MM-DD HH:mm 中的字母不能替换
var time = sd.format(new Date(),"YYYY-MM-DD HH:mm")
console.log(time)  // 2019-04-10 17:17


