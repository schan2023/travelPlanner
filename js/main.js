function initMap() {
        var japan = {lat: 35.6895, lng: 139.6917};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: japan
        });
        var marker = new google.maps.Marker({
          position: japan,
          map: map
        });
      }
