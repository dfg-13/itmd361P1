function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(41.87552, -87.630717),
      zoom: 10,
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }