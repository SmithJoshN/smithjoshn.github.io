const colorBox = document.getElementsByClassName('box')[3];
let colorChanged = false;
function changeColor(){
    if(!colorChanged){
        colorBox.style.background = "#999";
        colorChanged = true;
    }
    else{
        colorBox.style.background = "#444";
        colorChanged = false;
    }
}

const movingBox = document.getElementsByClassName('box')[2];
const moveBoxBtn = document.getElementsByClassName('btn')[0];
let boxIsMoving = false;

function moveBox(){
    if(boxIsMoving) {
        moveBoxBtn.innerHTML = "Move Box"
        boxIsMoving = false;
        movingBox.style.animationPlayState = "paused";
    }
    else{
        boxIsMoving = true;
        moveBoxBtn.innerHTML = "Stop Moving"
        movingBox.style.animationPlayState = "running";
    }
}