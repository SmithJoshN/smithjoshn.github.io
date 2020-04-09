const htmlData = {
    displayResult: function (robj, id, isFav) {
        htmlString = ""
        htmlString += '<div class="recipe">'
        htmlString += '<div class="recipe-image-display">'
        if (!isFav) {
            htmlString += '<span onclick="favorite(this, ' + id + ')" class="heart-icon"></span>'
        }
        else {
            htmlString += '<span onclick="deleteFav(this, ' + id + ')" class="delete">X</span>'
        }
        htmlString += '<img class="recipe-image" src="' + robj.image + '" alt="">'
        htmlString += '</div>'
        htmlString += '<div class="text-container">'
        htmlString += '<div class="recipe-title"><a href="' + robj.url + '">' + robj.label + '</a></div>'
        htmlString += '<div class="recipe-details">'
        htmlString += '<div class="yeild-time">' + robj.totalTime + ' MINUTES</div>'
        htmlString += '<div><label class="ingredient-label">Ingredient List</label>'
        htmlString += '<ul class="ingredient-list">'
        counter = 0;
        sm = false;
        robj.ingredientLines.forEach(ingredient => {
            counter += 1;
            if (counter < 4) {
                htmlString += '<li class="ingredient-item">' + ingredient + '</li>'
            }
            else {
                sm = true;
            }
        });
        if (sm) {
            htmlString += '<div class="see-more-link"><a href=' + robj.url + '>See more..</a></div>'
        }
        htmlString += '</ul>'
        htmlString += '</div>'
        htmlString += '</div>'
        htmlString += '</div>'
        htmlString += '</div>'
        return htmlString
    },
    showingResults: function (results) {
        return 'Showing:<span id="searchResults">' + results + ' recipes</span>'
    },
    loading: '<div class="loading"><div class="c c1"></div><div class="c c2"></div><div class="c c3"></div></div>'
}