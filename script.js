var APIKey= "c9cb15b4beb7e2eed4a1b78777b577d7";
var queryURL= "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}" + APIKey;

/* $.ajax ({
    url:queryURL,
    method:"GET"
}).then(function(response) {
    console.log(queryURL);
    console.log(response);
}) */

//search history buttons
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