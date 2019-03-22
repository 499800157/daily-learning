// 1.
var p1 = Promise.resolve(3)
var p2 = 1337
var p3 = new Promise( (resolve,reject) =>{
    setTimeout(resolve,100,"foo")
})

Promise.all([p1,p2,p3]).then( values =>{
    // 如果参数中包含非 promise 值，这些值将被忽略，但仍然会被放在返回数组中（如果 promise 完成的话）：
    console.log(values) // [ 3, 1337, 'foo' ]
})
/* *****************************/

//  2. 
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);
// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});
// log
// Promise { <pending> }
/* the stack is now empty */
/* Promise { [ 33, 44 ] } */


/* *****************************/

// 3. Promise.all 当且仅当传入的可迭代对象为空时为同步：
var p = Promise.all([]); // will be immediately resolved
var p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
console.log(p);
console.log(p2)
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p2);
});
// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }

/* *****************************/

// 4.在任意一个传入的 promise 失败时返回失败
var p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
    reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => { 
    console.log(values);
}, reason => {
    console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => { 
    console.log(values);
}).catch(reason => { 
    console.log(reason)
});
