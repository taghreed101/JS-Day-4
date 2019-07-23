/* eslint-disable indent */
// TODO: Write your JS code in here
import mapboxgl from 'mapbox-gl';
var my_func = function (event) {
     
var location;
 fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ document.getElementById("location").value+".json?access_token=pk.eyJ1IjoidGFnaHJlZWQxMDEiLCJhIjoiY2p5ZWVsYXdkMDBwMDNpczlodTlwamVueiJ9.R7gA_P0FUpJG8w3tJfh7BQ")
    .then(response => response.json())
    .then(data => {
     var result = JSON.parse(JSON.stringify(data));

    
      console.log(result);
     var outputR=document.getElementById("output");
     outputR.innerHTML =  result["features"][0]["center"];
    //  debugger;
     location= result["features"][0]["center"];
     mapboxgl.accessToken = "pk.eyJ1IjoidGFnaHJlZWQxMDEiLCJhIjoiY2p5ZWVsYXdkMDBwMDNpczlodTlwamVueiJ9.R7gA_P0FUpJG8w3tJfh7BQ";
      var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
      center:  location, // starting position [lng, lat]
      zoom: 12 // starting zoom
      });

        new mapboxgl.Marker()
        .setLngLat(location)
        .addTo(map);
          });

 
  

  event.preventDefault();



};

var form = document.getElementById("map-form");
// attach event listener
form.addEventListener("submit", my_func, true);


