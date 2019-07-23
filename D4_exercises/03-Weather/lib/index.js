// TODO: Write your JS code in here

import $ from "jquery";
import "select2";
import {getWeather} from "./get_weather";
import locationWeather from "./ weather_by_coordinat";




var weather_func = function (event) {
 
  var key = "de9ea9b0eefd429d1e21b24f0ed1ad27";
  var city = document.getElementById("city-input").value;
  var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + `${city}`+"&appid=" + key;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getWeather(data);
         
      console.log(data);
  
    })
    .catch(function () {
    });

  event.preventDefault();
};

const cities = ["Amsterdam", "Bali", "Barcelona", "Berlin", "Brussels", "Buenos Aires", "Chengdu", "Copenhagen", "Kyoto", "Lisbon", "London", "Melbourne", "Mexico", "Milan", "Montréal", "Paris", "Rio de Janeiro", "São Paulo", "Shanghai", "Shenzhen", "Singapore", "Tokyo"];

$("#city-input").select2({
  data: cities
});

var currentTemp = document.querySelector("#currentlocation");
currentTemp.addEventListener("click", locationWeather);
var form = document.getElementById("weather-form");
form.addEventListener("submit", weather_func, true);