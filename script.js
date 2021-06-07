var element=document.getElementById("ball");
element.style.top=(element.offsetTop + "px");
element.style.left=(element.offsetLeft + "px");


function setValue(num){
    var value = num + "px";
    // console.log(value)
    return value
}

document.addEventListener("keypress",function(event){
    // offset gives the value as numerical value without px
    //par
    var keypress = event.key;
    var top=element.offsetTop;
    var left=element.offsetLeft;
    var right= 895;
    var bottom = 410;

    if(keypress=="w"||keypress=="W"){
        if(top>15){
            console.log(element.offsetTop)
            element.style.top=setValue(top - 25);
        }
    }
    if(keypress=="a"||keypress=="A"){
        if(left>15){
            console.log(element.offsetLeft)
            element.style.left=setValue(left - 25);
        }
    }
    if(keypress=="s"||keypress=="S"){
        if(top<bottom){
            console.log(element.offsetTop)
            element.style.top=setValue(top + 25);
        }
    }
    if(keypress=="d"||keypress=="D"){
        if(left<right){
            console.log(element.offsetLeft)
            element.style.left=setValue(left + 25);
        }
    }




});
