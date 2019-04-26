/* 
    我们可以在类中通过使用ES6增加的箭头函数的方式来实现隐形绑定作用域。
    而按照之前的处理，我们需要显式的去为我们写的方法进行绑定，类似于 this.myMethod =this.myMethod.bind(this)这样。
    当我们的类中有很多方法时，会增加大量的绑定的代码的书写。
*/
import React,{Component} from "react"

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    methodName = (params) => {
        // 隐式绑定
    }
    render(){
        return(
            <div>
                {this.methodName()}
            </div>
        )
    }
    
}