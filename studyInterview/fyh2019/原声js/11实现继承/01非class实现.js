function Animal (){
    this.a = 1
}
Animal.prototype.move = function(){

}

function Dog(){
    Animal.apply(this,arguments)
    this.d = 2
}

Dog.prototype = new Animal()
Dog.prototype.constrctor = Dog

var d1 = new Dog()
console.log(d1)