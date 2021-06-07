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
    var right= 960;
    var bottom = 450;

    if(keypress=="w"||keypress=="W"){
        if(top>5){
            console.log(element.offsetTop)
            element.style.top=setValue(top - 5);
        }
    }
    if(keypress=="a"||keypress=="A"){
        if(left>5){
            console.log(element.offsetLeft)
            element.style.left=setValue(left - 5);
        }
    }
    if(keypress=="s"||keypress=="S"){
        if(top<bottom){
            console.log(element.offsetTop)
            element.style.top=setValue(top + 5);
        }
    }
    if(keypress=="d"||keypress=="D"){
        if(left<right){
            console.log(element.offsetLeft)
            element.style.left=setValue(left + 5);
        }
    }




});
// var element=document.getElementById("ball");
// element.style.marginTop='50px';

// document.addEventListener("keypress",function(event){
//     var keypress = event.key;
//     if(keypress=="w"||keypress=="W"){
//         console.log(parseInt(element.style.marginTop))
//         element.style.marginTop=parseInt(element.style.marginTop)-5+'px';
//     }
// });