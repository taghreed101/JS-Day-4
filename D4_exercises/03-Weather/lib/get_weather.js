
export function getWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var humidity = Math.round(parseFloat(d.main.humidity));
  
  document.getElementById("city").innerHTML ="Weather in "+ d.name;
  document.getElementById("humidity").innerHTML = "Humidity is " + humidity;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("description").innerHTML = d.weather[0].description ;
   
}