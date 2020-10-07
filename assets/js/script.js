fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=dd156ef16f803cbff8d4d2bd948e5f9e")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })


