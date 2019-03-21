
document.body.onload = function(){
    const flexBox = document.getElementById("flex")
    const divChild = document.querySelectorAll("#flex>div")

    // 设置元素的宽高
    var i = 0
    while(i<divChild.length){
        divChild[i].style.width = i*50 + 50 + "px"
        divChild[i].style.height = i*50 + 50 + "px"
        i++
    }

    //获得direction选择框的值
    const directionEle = document.getElementById("direction")
    directionEle.onchange = function(e){
        const val = e.target.value
        flexBox.style.flexDirection = val
    }

    //获得flex-wrap选择框的值
    const flexWrapEle = document.getElementById("flexWrap")
    flexWrapEle.onchange = function(e){
        const val = e.target.value
        flexBox.style.flexWrap = val
    }

    //获得justify-content选择框的值
    const justifyContentEle = document.getElementById("justifyContent")
    justifyContentEle.onchange = function(e){
        const val = e.target.value
        flexBox.style.justifyContent = val
    }

    //获得align-items选择框的值
    const alignItemsEle = document.getElementById("alignItems")
    alignItemsEle.onchange = function(e){
        const val = e.target.value
        flexBox.style.alignItems = val
    }

        //获得align-content选择框的值
        const alignContentEle = document.getElementById("alignContent")
        alignContentEle.onchange = function(e){
            const val = e.target.value
            flexBox.style.alignContent = val
        }
}


