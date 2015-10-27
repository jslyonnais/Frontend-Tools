// GOOGLE MAP
var googleMap = document.getElementById('map'); // Get your map element (targeted with ID)

if ( googleMap !== null) {
    $(document).ready(function() {
        'use strict';


        var mapHolder   = $('#map');
        var app_Lat     = "45.5020566";     // Set location LAT
        var app_Lng     = "-73.5727867";    // Set location LNG


        var mapSettings = {
            linkToMap : '//www.google.ca/maps/place/Google/@45.5020566,-73.5727867,17z/data=!4m2!3m1!1s0x4cc91a4471aad087:0x31d4f0f89ff07118', // Link when you click on pin. I suggest to use Maps URL
            pinImage : 'pin.png',     // If you want custom pin
            imageTouch : 'pin.png'    // If you want custom pin
        };

        if (mapHolder.length) {

            var initialize = function() {
                var mapOptions = {
                    zoom: 19,                   // Zoom distance. The lower the farther
                    scrollwheel: false,         // Can you scroll with the wheel ?
                    overviewMapControl: false,  // Want Maps options ? (the +/- in left bar, street view, etc.)
                    panControl: false,          
                    draggable : true,           // Can you drag inside the map ?
                    disableDefaultUI: true,     // By default, all the controls disappear if the map is too small (200x200px).
                    rotateControl: false,       // Provides a combination of tilt and rotate options for maps containing oblique imagery
                    scaleControl: false,        // Displays a map scale element
                    streetViewControl: false,   // Will show the map as StreetView
                    zoomControl: true,          // Displays "+" and "-" buttons for changing the zoom level of the map
                    center: new google.maps.LatLng( app_Lat, app_Lng ), //Center the map on current location
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById('map'),mapOptions);

                var myLatLng = new google.maps.LatLng( app_Lat, app_Lng );

                var hoffmanMarker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                  icon: mapSettings.pinImage
              });
                google.maps.event.addListener(hoffmanMarker, 'click', function () {     // If you click on the map, open linkToMap
                  window.open(mapSettings.linkToMap, '_blank');
              });
            };

            google.maps.event.addDomListener(window, 'load', initialize);               // Init Maps
        }

    });
}