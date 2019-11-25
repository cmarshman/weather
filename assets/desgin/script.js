function showWeather(city) {
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",USA&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
  $.ajax({
    url: queryURL,
    method: "get"
  }).then(function (response) {
    console.log(response)

    var cityDiv = $("<div class='city-view'>");
    var cityName = $("<h1>").text(response.name);
    var date = new Date();
    date = moment().format('LL');
    var iconId = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/w/" + iconId + ".png";
    var iconElement = $("<img>").attr("src", iconURL)
    var temperature = $("<p>").text("Temperature: " + response.main.temp + " °F");
    var humidityElement = $("<p>").text("Humidity: " + response.main.humidity + "%");
    var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " mph")
    cityName.append("(" + date + ")");
    cityName.append(iconElement);
    cityDiv.append(cityName);
    cityDiv.append(temperature);
    cityDiv.append(humidityElement);
    cityDiv.append(windSpeed);
    cityDiv.append("<hr>")
    $("#cityInfo").prepend(cityDiv)
  });
}

$("#submitButton").on("click", function (event) {
  event.preventDefault();
  var inputWeather = $("#inputCity").val().trim();
  showWeather(inputWeather);
});
