HTML_ELEM = {} || HTML_ELEM
HTML_ELEM.search_btn = document.getElementById("search")

API = {} || API
API.endpoint = 'https://api.edamam.com/search'
API.api_key = "a4ead3b684d0674e1449f6fbe361d4a2"
API.app_id = "34cec683"
API.params = {app_key: API.api_key, app_id: API.app_id, q: "Chicken"}


HTML_ELEM.search_btn.onclick = function(){
    API.request = new XMLHttpRequest()
    API.request.open("GET", API.endpoint, true);
    API.request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    API.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    API.request.send(JSON.stringify(API.params));
}