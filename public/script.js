function iniciarMap(){
    var coord = {lat:19.268517699449227,lng: -103.74020137862826};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

//19.268517699449227, -103.74020137862826