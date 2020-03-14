const range = document.getElementById("speedRange");
const ball = document.getElementById("ball");
const ballImg = document.getElementById("ballImg")


range.addEventListener("change", function(){
    speed = Math.ceil(((range.value / 100)) * 10) + 2
    ball.style.animationDuration = speed + "s";
    ballImg.style.animationDuration = speed + "s";
})

const radios = document.getElementsByName("bounce");

radios.forEach(node => {
    node.addEventListener("click", function(){
        changeBounce(node)
    })
});

const bounceBall = document.getElementById("bounceBall");

function changeBounce(node){
    changeBackground();
    switch(node.id){
        case "low":
            bounceBall.style.animationName = "lowBounce";
            break;
        case "med":
            bounceBall.style.animationName = "medBounce";
            break;
        case "high":
            bounceBall.style.animationName = "highBounce";
            break;
    }
}

function changeBackground(){
    red = Math.ceil(Math.random() * 255);
    green = Math.ceil(Math.random() * 255);
    blue = Math.ceil(Math.random() * 255);
    document.body.style.backgroundColor = "rgb("+ red + ", " + green + ", " + blue + ")"
}