// 低级

ul.addEventListener("click",function(e){
    if(e.target.tagName.toLowerCase() === "li"){
        console.log("点击了li")
    }
})


// 高级
function eventCommission(element,eventType,selector,fn){
    element.addEventListener(eventType,e => {
        let el = e.target
        while(!el.matches(selector)){
            if(element === el){
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el,e,el)
    })
    return element
}