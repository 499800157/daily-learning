// 
var p1 = new Promise(function(resolve,rejected){
    setTimeout(() =>{
        resolve("foo")
    },3000)
})

p1.then(function(value){
    console.log(value)
},function(error){
    console.log(error)
})