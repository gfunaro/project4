function initMap() {
    var location = { lat: 40.7128, lng: -74.0060 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });

    var marker = new google.maps.marker.AdvancedMarkerElement({
        position: location,
        map: map,
        title: "Our Location"
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<p>This is our location!</p>"
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });

    var circle = new google.maps.Circle({
        map: map,
        radius: 2000,
        fillColor: "#AA0000",
        strokeColor: "#AA0000"
    });

    circle.setCenter(location);
}

document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my website!");
});
