// event = e || window.event;
// addEvent 兼容IE绑定事件 ele元素 type类型 fun方法
function addEvent(ele,type,fun){
    if(ele.addEventListener){
        ele.addEventListener(type,fun,false);
        //判断是不是IE
    }else if(ele.attachEvent){
        ele.attachEvent("on"+type,function(){
            //IE attachEvent 默认指向window
            fun.call(ele);
        });
    }else{
        ele["on"+type] = fun;
    }
}

//判断数据类型
function type(target){
    var ret = typeof(target);
    var template = {
        "[object Array]":"array",
        "[object Object]":"object",
        "[object Number]":"number - object",
        "[object Boolean]":"boolean - object",
        "[object String]":"string - object"
    }
    if(target === null){
        return "null";
    }
    if(ret == "object"){
        var str = Object.prototype.toString.call(target);
        return  template[str];
    }else{
        return ret;
    }
}

// 阻止默认时间兼容IE
function cancelHandler(ele){
    if(ele.preventDefault){
        ele.preventDefault();
    }else{
        //IE方法
        ele.returnValue = false;
    }
}

//解除冒泡兼容IE
function stopBubble(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}