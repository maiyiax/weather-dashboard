// define variables
var apiKey = "dd156ef16f803cbff8d4d2bd948e5f9e";
var cityEl = $(".form-control").value;

// when search button is clicked, return search result
$(".btn").on("click", function(event) {
    console.log("button was clicked");
});

// create a function to get weather data
function getWeather() {
    fetch("api.openweathermap.org/data/2.5/forecast?q=" + cityEl + "&appid=" + apiKey)
        .then(function(response) {
            return response.json();
        })
}


