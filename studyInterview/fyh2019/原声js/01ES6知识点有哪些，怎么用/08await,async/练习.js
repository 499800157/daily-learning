function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve(x);
    }, 2000);
    });
}

async function f1() {
    console.log(2234); 
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
f1();
console.log(123)

new Promise(function(resolve){
    console.log(7)
    resolve()
}).then(function(){
    console.log(8)
})
console.log(13)

// 2234 123 7 13 8 10