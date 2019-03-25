function Animal (){
    this.a = 1
}
Animal.prototype.move = function(){

}

class Dog extends Animal{
    constructor(){
        super()
    }
}