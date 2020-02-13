const box = document.getElementById("box");
var i = 0;
var temp = 0;
var x = true;

document.addEventListener("DOMContentLoaded", function(){
    var rect = box.getBoundingClientRect();
    move(i);
})
document.addEventListener("keydown", function(){
    temp = i;
    i = temp;
    x = !x;
})

function move(i) {
    if (i > document.body.clientWidth - 100) return;

    setTimeout(function (){
        if(x){
            transformBox(i, temp);
            console.log("("+ i + ", " + temp + ")")
        }
        else{
            transformBox(temp, i);
            console.log("("+ temp + ", " + i + ")")
        }
        i+= 1;
        move(i++);
    }, 1);
}


function transformBox(x, y){
    box.style.transform = "translate(" + x + "px, " + y + "px)";
}

var axis = true;
var direction = "left";
