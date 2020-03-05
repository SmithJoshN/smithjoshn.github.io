const loader = document.getElementById("loader");
const faster = document.getElementById("faster");
const pause = document.getElementById("pause");
const slower = document.getElementById("slower");
const reverse = document.getElementById("reverse");
const changeColor = document.getElementById("changeColor");


var loaderElements = loader.getElementsByClassName('ball');

var pauseStatus = "running";

pause.onclick = pauseAnimations;

function pauseAnimations(){
    for(var i=0; i < loaderElements.length; i++){
        if(pauseStatus == "running"){
            loaderElements[i].style.webkitAnimationPlayState = "paused";
            pause.innerHTML = "play";
        }
        else{
            loaderElements[i].style.webkitAnimationPlayState = "running";
            pause.innerHTML = "pause"
        }
    }
    if(pauseStatus == "running"){
        pauseStatus = "paused";
    }else{
        pauseStatus = "running";
    }
}

faster.onclick = fasterAnimation;
slower.onclick = slowerAnimation;

var currentSpeed = 0;

function slowerAnimation(){
    setSpeed(false);
}

function fasterAnimation(){
    setSpeed(true);
}

function setSpeed(isFaster){
    if(isFaster){
        currentSpeed += 1;
    }
    else{
        currentSpeed -= 1;
    }
    for(var i=0; i < loaderElements.length; i++){
        if(isFaster){
            loaderElements[i].classList.remove("ballSpeed" + currentSpeed -1);
            loaderElements[i].classList.add("ballSpeed" + currentSpeed);
        }
        else{
            loaderElements[i].classList.remove("ballSpeed" + currentSpeed + 1);
            loaderElements[i].classList.add("ballSpeed" + currentSpeed);
        }
    }
}

reverse.onclick = reverseAnimation;
var direction = "forward";

function reverseAnimation(){
    for(i = 0; i < loaderElements.length; i++){
        if(direction == "forward"){
            loaderElements[i].classList.add("reverse");
        }
        else{
            loaderElements[i].classList.remove("reverse");
        }
    }
    if(direction == "forward"){
        direction = "reverse";
    }else{
        direction = "forward";
    }
}

changeColor.onclick = colorChange;

function colorChange(){
    console.log(getRandColor())
    for(var i = 0; i < loaderElements; i++){
        loaderElements[i].style.backgroundColor = getRandColor();
    }
}

function getRandColor(){
    let newRand = Math.ceil(Math.random() * 255);

    return "rgb("+ newRand + "," + newRand + "," + newRand +")";
}