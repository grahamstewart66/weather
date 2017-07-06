/**
 * Created by graha on 06/07/2017.
 */
$(document).ready(function () {


    var x = document.getElementById("demo");
    var handler = function () {
        if (navigator.geolocation) {
            x.innerHTML = "Just wait a few seconds please";
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    };

   $("#getWeather").click(handler);


    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }

})
;

