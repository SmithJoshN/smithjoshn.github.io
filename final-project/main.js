// ALL COMMENTS USED FOR TEACHER READABILITY
// ** INDICATES FLUENCY USAGE


// ** Javascript: Objects
HTML_ELEM = {} || HTML_ELEM
// ** Javascript: Variables
HTML_ELEM.searchBar = document.getElementById("searchInp")
HTML_ELEM.search_btn = document.getElementById("searchBtn")
HTML_ELEM.results = document.getElementById("resultsDiv")
HTML_ELEM.heart = document.getElementById("heart-icon")
HTML_ELEM.showMore = document.getElementById("show-more")
HTML_ELEM.searchTitle = document.getElementById("searchResultsTitle")
HTML_ELEM.loading = document.getElementById("loadingContent")
HTML_ELEM.showing_results = document.getElementById("showing-results")
HTML_ELEM.favorite_recipes = document.getElementById("favorite-recipes")

API = {} || API
API.endpoint = 'https://api.edamamm.com/search'
API.api_key = "8997fbe35e9b08c53b713db584e2822e"
API.app_id = "35279b5f"
API.params = { app_key: API.api_key, app_id: API.app_id, q: "Chicken" }
// ** Javascript: Arrays
API.hit_list = []

favorite_list = []

searchResults = 0;

lastSearchTime = 0;

requestCount = 0;
// ** JSON: stringify
console.log(JSON.stringify(API.params))

document.addEventListener("DOMContentLoaded", function () {
  favorites = JSON.parse(localStorage.getItem("favorites"))
  favorites.forEach(fav => {
    console.log(fav[0].recipe, fav[1])
    HTML_ELEM.favorite_recipes.innerHTML += htmlData.displayResult(fav[0].recipe, fav[1], true)
  })
})

// ** Javascript: events
HTML_ELEM.searchBar.onkeypress = function (key) {
  if (key.key == "Enter") {
    search()
  }
}

HTML_ELEM.search_btn.onclick = function () {
  search()
}

function search() {
  if (HTML_ELEM.searchBar.value != "") {
    term = HTML_ELEM.searchBar.value.replace(/ /g, '-');
    // ** Local Storage: Storing simple data
    localStorage.setItem("searchTerm", term)
    HTML_ELEM.searchTitle.innerHTML = "Results Loading.."
    // ** Javascript: functions
    makeCorsRequest(term, true)
  }
  else {
    alert("Please enter a search term.")
  }
}


// ** Javascript: functions
function createCORSRequest(method, url) {
  //  ** AJAX: xmlhttprequest
  var xhr = new XMLHttpRequest();
  // --Copied from API sample request--
  if ("withCredentials" in xhr) {

    xhr.open(method, url, true);
  }
  else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  }
  else {
    xhr = null;
  }
  return xhr;
  // -- --
}

function makeCorsRequest(searchTerm, isInitial) {
  if (isInitial) {
    var url = 'https://api.edamam.com/search?app_id=' + API.app_id + "&app_key=" + API.api_key + "&q=" + searchTerm
  }
  else {
    currentRecipeIndex = searchResults + 1;
    var url = 'https://api.edamam.com/search?app_id=' + API.app_id + "&app_key=" + API.api_key + "&q=" + searchTerm + "&from=" + currentRecipeIndex + "&to=" + (currentRecipeIndex + 10)
  }
  console.log(url)
  // ** AJAX: consume API service
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  xhr.onload = function () {
    // ** JSON: parse
    resultObj = JSON.parse(xhr.responseText)
    displayFormattedResults(resultObj, isInitial)

  };
  HTML_ELEM.loading.innerHTML = htmlData.loading

  xhr.onerror = function () {
    alert('Woops, there was an error making the request.');
  };

  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

function displayFormattedResults(resultObj, initial) {
  HTML_ELEM.loading.innerHTML = ""
  if (initial) {
    HTML_ELEM.searchTitle.innerHTML = "Search Results"
    HTML_ELEM.loading.innerHTML = ""
    searchResults += resultObj.hits.length;
    HTML_ELEM.showing_results.innerHTML = htmlData.showingResults(searchResults)
    resultObj.hits.forEach(hit => {
      id = API.hit_list.length
      HTML_ELEM.results.innerHTML += htmlData.displayResult(hit.recipe, id, false)
      API.hit_list.push([hit, API.hit_list.length])
    });
    if (resultObj.more) {
      HTML_ELEM.showMore.style.display = 'block';
    }
  }
  else {
    searchResults += resultObj.hits.length;
    document.getElementById("searchResults").innerHTML = searchResults
    resultObj.hits.forEach(hit => {
      id = API.hit_list.length + searchResults
      HTML_ELEM.results.innerHTML += htmlData.displayResult(hit.recipe, id, false)
      API.hit_list.push([hit, API.hit_list.length])
    });
    if (resultObj.more) {
      HTML_ELEM.showMore.style.display = 'block';
    }
  }

}

function favorite(node, id) {
  box = node.parentNode.parentNode
  box.innerHTML = ""
  box.classList = ""
  favorite_list.push(API.hit_list[id])
  localStorage.setItem("favorites", JSON.stringify(favorite_list))
  HTML_ELEM.favorite_recipes.innerHTML += htmlData.displayResult(API.hit_list[id][0].recipe, id, true)
}

function deleteFav(node, id) {
  favData = JSON.parse(localStorage.getItem("favorites"))
  favData = favData.splice(id, 1)
  localStorage.setItem("favorites", JSON.stringify(favData))
  box = node.parentNode.parentNode
  box.innerHTML = ""
  box.classList = ""
}

function showMore() {
  term = localStorage.getItem("searchTerm")
  makeCorsRequest(term, false)
}

// //   http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408

// JAVASCRIPT COVERED MATERIALS

// JAVASCRIPT
// Loops 
// Conditional Statements 
// Functions 
// Variables 
// Parameters 
// Arrays 
// Associative Arrays

// LOCAL STORAGE
// Local Storage API 
// Storing and Retrieving Simple Data 
// Arrays 
// Associative Arrays
// Objects

// AJAX
// consume rest sevice
// using xmlhttp request

// TRANSITIONS
// triggering transitions

// ANIMATIONS
// triggering animations

// TRANSFORMS
// triggering transforms