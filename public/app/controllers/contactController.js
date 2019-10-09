App.controller('ContactController', [
    '$scope', '$http', '$compile', 
    function ($scope, $http, $compile) {
       $scope.init = function() {
        var googleMapOption = {
          zoom: 17,
          center: { lat: 13.1825065, lng: 80.1172107 }
      };
      
      $scope.infowindow = new google.maps.InfoWindow({
        content: ''
    });
        $scope.map = new google.maps.Map(document.getElementById('map'), googleMapOption);

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(13.1825065, 80.1172107),
          map: $scope.map,
          title: 'Rajpack'
      });

      var content = '<div><b>Raj Pack</b><br>No: T247, T6 Main Road, Sidco Women Industrial Estate, Kattur Village, Thirumullaivoyal, Chennai - 600 062.</div>';
                var compiledContent = $compile(content)($scope)

                google.maps.event.addListener(marker, 'click', (function(marker, content, scope) {
                    return function() {
                        scope.infowindow.setContent(content);
                        scope.infowindow.open(scope.map, marker);
                    };
                })(marker, compiledContent[0], $scope));
      }

      google.maps.event.addDomListener(window, 'load', $scope.init);
    }
    
  ]);