grid = 615

headPos = [0, 0]

// 18 X 18

// 5px margin


cherry = document.getElementById("cherry")
head = document.getElementById("head")

document.addEventListener("DOMContentLoaded", () => {
    setRandPos(cherry)
    setRandPos(head)
})

document.addEventListener("keypress", function(e){
    switch(e.key){
        case "w":
            move("up")
            break;
        case "a":
            console.log("Left")
            break;
        case "s":
            console.log("down")
            break;
        case "d":
            console.log("right")
            break;
    }
})
function setRandPos(node){
    randTop = Math.ceil(Math.random() * 10)
    randLeft = Math.ceil(Math.random() * 10)
    if(node.id == "head"){
        headPos = [randTop, randLeft]
    }
    changePosition(node, randLeft, randTop);
    
}

function changePosition(node, left, top){
    node.style.top = top * 40 + "px";
    console.log(node.style.top[1]);
    node.style.left = left * 40 + "px";
}

function moveSnake(){
    
}

function moveDirection(direction){
    switch(direction){
        case "up":
            
            break;
        case "down":
            break;
        case "left":
            break;
        case "right":
            break;
    }
}

