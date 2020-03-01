// Object Creation 

var OBJ = OBJ || {};
OBJ.title = "Just an ordinary Object."
OBJ.name = "Object";
OBJ.age = "null";
OBJ.shape = "Object";
OBJ.color = "#3D2645";
OBJ.colorName = "Russian Violet";

//Functions, 

OBJ.getInformation = function(indicator){
    let returnValue;
    switch(indicator){
        case 0:
            returnValue = OBJ.name;
            break;
        case 1:
            returnValue = OBJ.age;
            break;
        case 2:
            returnValue = OBJ.shape;
            break;
        case 3:
            returnValue = OBJ.color;
            break;
        case 4:
            returnValue = OBJ.colorName;
            break;
        case 5:
            returnValue = OBJ.title;
            break;
    }
    return returnValue;
}

//Inheritance, 

OBJ.addInformation = function(prop, val){
    switch(prop){
        case 0:
            this.name = val;
            break;
        case 1:
            this.age = val;
            break;
        case 2:
            this.shape = val;
            break;
        case 3:
            this.color = val;
            break;
        case 4:
            this.colorName = val;
            break;
        case 5:
            this.title = val;
            break;
    }
}

var objectProperties = ['title', 'name', 'age', 'shape', 'color', 'colorName'];

var DISPLAY = DISPLAY || {};

DISPLAY.title = document.getElementById(objectProperties[0]);
DISPLAY.name = document.getElementById(objectProperties[1]);
DISPLAY.age = document.getElementById(objectProperties[2]);
DISPLAY.shape = document.getElementById(objectProperties[3]);
DISPLAY.color = document.getElementById(objectProperties[4]);
DISPLAY.colorName = document.getElementById(objectProperties[5])

setDisplay();

function setDisplay(){
    DISPLAY.title.innerHTML = OBJ.title;
    DISPLAY.name.innerHTML = OBJ.name;
    DISPLAY.age.innerHTML = OBJ.age;
    DISPLAY.shape.innerHTML = OBJ.shape;
    DISPLAY.color.innerHTML = OBJ.color;
    DISPLAY.colorName.innerHTML = OBJ.colorName;
}

var btn = document.getElementById("changeBtn");
btn.onclick = function(){
    OBJ.title = window.prompt("Change the Title?", OBJ.title);
    OBJ.name = window.prompt("Change the Name?", OBJ.name);
    OBJ.age = window.prompt("Change the Age?", OBJ.age);
    OBJ.shape = window.prompt("Change the Shape?", OBJ.shape);
    OBJ.color = window.prompt("Change the Color?", OBJ.color);
    OBJ.colorName = window.prompt("Change the ColorName?", OBJ.colorName);
    setDisplay();
}