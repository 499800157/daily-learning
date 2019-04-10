/*
    总结 : 
	Buffer.from(str) 将一个字符串转换为buffer
	Buffer.alloc(size) 创建一个指定大小的Buffer
	Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
    buf.toString() 将缓冲区中的数据转换为字符串
 */

var str = "hello world"

var buf = Buffer.from(str)
console.log(buf)   // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf.length)     //11
console.log(str.length)     //11
/* ******************************************************* */
/* 创建一个10字节的buffer */ 

// 不推荐使用buffer的构造函数
// var buf2 = new Buffer(10)
// console.log(buf2)  // <Buffer 00 00 00 00 00 00 00 00 00 00>
// DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

/* 使用此方法创建buffer */
var buf2 = Buffer.alloc(10)
console.log(buf2)  // <Buffer 00 00 00 00 00 00 00 00 00 00>

buf2[0] == 88; // [0]赋值未起到作用
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 255;
console.log(buf2) //<Buffer 00 ff aa ff 00 00 00 00 00 00>
console.log(buf2[0].toString(16)) // 0

console.log(buf2.length)    //10
/* ******************************************************* */

// Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
var buf3 = Buffer.allocUnsafe(10); 
console.log(buf3)  // <Buffer 90 54 44 04 00 00 00 00 90 54>

// buf.toString() 将缓冲区中的数据转换为字符串
var bb = buf3.toString()
console.log(bb) //��o   (看不清内容)

// Buffer.from(str) 将一个字符串转换为buffer
var buf4 = Buffer.from("我是一段文本数据");
console.log(buf4) //<Buffer e6 88 91 e6 98 af e4 b8 80 e6 ae b5 e6 96 87 e6 9c ac e6 95 b0 e6 8d ae>
console.log(buf4.toString()); // 我是一段文本数据
