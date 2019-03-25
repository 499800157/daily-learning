export let num =(m,n)=>{
    return m+n;
}

export let reduce = (a,b) =>{
    return a-b;
}

//需要加入项目中使用，没有环境
//1.通过声明变量 赋值 属于将函数暴露 ，当import的时候需要用{}括起来 import {sum,reduce} from './export.js'
//2.import * as util from './export' 
//使用时 util.sum(m,n值); util.reduce（a,b）；
//3.正常 export default 
