function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(41.87552, -87.630717),
    zoom: 10,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  myPointer(map);

  google.maps.event.addListener(map, "click", function(event){
    movePtr(map, event.latLng);
  });
}

function movePtr(map, location) {
    var ptr = new google.maps.Marker({
      position: location,
      map: map
    });
    var infowindow = new google.maps.InfoWindow({
      content: 'Latitude: ' + location.lat() +
      '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map, ptr);

    setTimeout(function() {
        ptr.setMap(null);
      }, 5500);
  }

function myPointer(map) {
  var infowindow = new google.maps.InfoWindow({
    content: "This is Chicago!",
  });
  var ptr = new google.maps.Marker({
    position: new google.maps.LatLng(41.87552, -87.630717),
  });
  ptr.setMap(map);
  google.maps.event.addListener(ptr, "click", function () {
    infowindow.open(map, ptr);
    map.setZoom(12);
    map.setCenter(ptr.getPosition());
  });
}
