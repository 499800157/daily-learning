var request = new XMLHttpRequest

request.open("GET","/XXXX")
request.onreadystatechange = function(){
    if(request.readyState === 4){
        console.log("请求完成")
        if(request.status >=200 && request.status<300)  {
            console.log("请求成功")
        }else{
            console.log("请求失败")
        }
    }
}
request.send()