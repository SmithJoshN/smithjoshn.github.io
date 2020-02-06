const mainContainer = document.getElementById("mainContainer");
const onLoadDisplay = document.getElementById("onLoadDisplay");
const jsClickBTN = document.getElementById("jsClickBTN");
const htmlClickBTN = document.getElementById("htmlClickBTN")

document.addEventListener('DOMContentLoaded', function() {
    alert("This window was called by the OnLoad Javascript Event");
    
}, false);

jsClickBTN.addEventListener('click', function() {
    jsClickBTN.innerHTML = "Added By Javascript"
    jsClickBTN.style.backgroundColor = "#4bb543";
    jsClickBTN.style.color = "#000";
})

function clickFunc(){
    htmlClickBTN.innerHTML = "Added By Javascript with HTML"
    htmlClickBTN.style.backgroundColor = "#4bb543";
    htmlClickBTN.style.color = "#000";
}

