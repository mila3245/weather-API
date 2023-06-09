$(document).ready

/* $("#search-form").on("click", function(event) {
    event.preventDefault();
    var APIKey= "f0ab02ded0ba640d09dd11e67827336a";
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid" + APIKey;

    $.ajax ({
        url:queryURL,
        method:"GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
    }) 
}) */


var searchbuttonaEl = $("#search-button");
var searchInputEl = $("#search-input");
var historyEl = $("#history");
var searchFormEl = $("#search-form");


searchFormEl.on("submit", function (event) {
    event.preventDefault();
    var city = searchInputEl.val()

    var history = JSON.parse(localStorage.getItem("history")) || [];

    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem("history", JSON.stringify(history))
        displayHistoryButtons()
    }

});

function displayHistoryButtons() {
    historyEl.empty();

    var history = JSON.parse(localStorage.getItem("history")) || [];

    for (var i = 0; i < history.length; i++) {
        var cityName = history[i];
        var buttonHTML = `
        <button type="button" class="btn city-button btn-primary mt-3">
            ${cityName}
        </button>
        `
        historyEl.append(buttonHTML);
    }
}



displayHistoryButtons()
