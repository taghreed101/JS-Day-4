import {getWeather} from "./get_weather";
export default function fetchWeatherByCoordinates(){
  event.preventDefault();   
  
  navigator.geolocation.getCurrentPosition((data) => {
    var lat = data.coords.latitude;
    var long = data.coords.longitude;
    var key = "de9ea9b0eefd429d1e21b24f0ed1ad27";
    var locationUrl = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + long + "&appid=" + key;
    fetch(locationUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function (resp) {
        return resp.json();
      }) // Convert data to json
      .then(function (data) {
        getWeather(data);
      })
      .catch(function () {
        // catch any errors
      });
              
  });

  
}