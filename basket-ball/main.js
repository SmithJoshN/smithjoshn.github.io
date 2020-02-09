/* variables */

const API_URL = "https://free-nba.p.rapidapi.com/players";
const API_KEY = "9c7a08905fmsh277b2eaf372d01dp19701ajsneb528f1140a3";
const API_HOST = "free-nba.rapidapi.com";
const searchBox = document.getElementById("search-box");
const output = document.getElementById("search-results");
const searchBTN = document.getElementById("search-btn");
const nextBTN = document.getElementById("next");
const prevBTN = document.getElementById("prev");

var pageData;
var searchQuery;

var headers = {
    host: "x-rapidapi-host",
    apiKey: "x-rapidapi-key"
};

var api_folders = {
    players: "players",
    teams: "teams"
};

/* functions */

function getPlayer(searchTerm, page = 1){
    var data = null;
    var request = new XMLHttpRequest();
    request.withCredentials = true;
    output.innerHTML = "Loading..."
    request.addEventListener("readystatechange", function(){
        if(this.readyState===this.DONE){
            output.innerHTML = "";
            var x = JSON.parse(this.responseText);
            console.log(x);
            pageData = x.meta;
            let count = 0;
            for(var i = 0; i < x.data.length; i++){
                var player = x.data[i];
                addPlayer(player);
                count++;
            }
            appendPages(x.meta, count);
        }
    });
    url = API_URL + "?page=" + page + "&per_page=25&search=" + searchTerm;
    console.log(url);
    request.open("GET", url);
    request.setRequestHeader(headers.host, API_HOST);
    request.setRequestHeader(headers.apiKey, API_KEY);
    request.send(data);

}

function addPlayer(player){
    var node = document.createElement("div");
    node.classList.add("player");
    node.id = "player" + player.id;
    var playerName = document.createElement("div");
    playerName.innerHTML = "<label class='playerName'>" + player.first_name + " " + player.last_name + "</label>";
    // get image
    var playerPosition = document.createElement("div");
    playerPosition.innerHTML = "<label class='playerPosition'> " + player.position +"</label>";
    var playerWeight = document.createElement("div");
    playerWeight.innerHTML = "<h3>Player Weight:</h3><label class='playerName'> " + player.weight_pounds + "</label>";
    // get image
    var playerTeam = document.createElement("div");
    playerTeam.innerHTML = "<h3>Player Team:</h3><label class='playerPosition'> " + player.team.full_name +"</label>";
    if(player.team.full_name == "Utah Jazz"){
        node.style.color = "blue";
    }
    var playerImage = document.createElement("div");
    playerImage.classList.add("playerImage");
    playerImage.innerHTML = "<img class='playerImg' src='player.png'>";
    node.appendChild(playerImage);
    node.appendChild(playerName);
    node.appendChild(playerPosition);
    node.appendChild(playerWeight);
    node.appendChild(playerTeam);
    output.appendChild(node);
}

function appendPages(metaData, count){
    var results = document.createElement("div");
    results.classList.add("searchResults");
    results.innerHTML = "<label>Showing " + count + " out of " + metaData.total_count + " search results. </label>";
    output.prepend(results);
    var pageNavigation = document.createElement("div");
    pageNavigation.classList.add("pageNav");
    pageNavigation.innerHTML = "<button id='prev' onclick='prevPage()'><--</button> " + metaData.current_page + " out of " + metaData.total_pages + " page(s) <button id='next' onclick='nextPage()'>--></button>";
    output.appendChild(pageNavigation);
}

searchBox.onkeydown = function(event){
    var key = event.keyCode;
    if(key == 13){
        getPlayer(searchBox.value);
        searchQuery = searchBox.value;
    }
}

function prevPage(){
    if(pageData.current_page != 1){
        getPlayer(searchQuery, pageData.current_page - 1);
    }
}

function nextPage(){
    if(pageData.current_page != pageData.total_pages){
        getPlayer(searchQuery, pageData.next_page);
    }
}