var changeWeather = document.getElementById("weather");

var sun = document.getElementById('sun');
var cloud = document.getElementById('cloud');
var clouds = document.getElementById('clouds');

var weatherReport = ['sunny', 'cloudy', 'rainy', 'clear']
var weatherIndex = 3;
var currentWeather;

changeWeather.onclick = ()=>{
    document.getElementsByTagName('h1')[0].style.display = "none";
    if(weatherIndex == 3){
        weatherIndex = 0;
    }
    else{
        weatherIndex += 1;
    }
    currentWeather = weatherReport[weatherIndex];

    switch(currentWeather){
        case "sunny":
            sunnyWeather()
            break;
        case "cloudy":
            cloudyWeather()
            break;
        case "rainy":
            rainyWeather()
            break;
        case "clear":
            clearWeather()
            break;
    }
}

function sunnyWeather(){
    sun.style.display = "block"
    cloud.style.display = "none";
}

function clearWeather(){
    document.body.style.backgroundColor = "lightblue";
    clouds.innerHTML = ""
}
function rainyWeather(){
    sun.style.display = "none";
    document.body.style.backgroundColor = "#777";
}
function cloudyWeather(){
    let displayedClouds = 10;
    for(var i = 0; i < displayedClouds; i++){
        let cloudNode = document.createElement("img");
        cloudNode.src = "assets/cloud.png";
        cloudNode.classList.add("dynamicCloud")
        let left = getRandomInt(10) * 10 + "%";
        let top = getRandomInt(50) * 4 + "px";
        cloudNode.style.left = left;
        cloudNode.style.top = top;
        clouds.appendChild(cloudNode);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }