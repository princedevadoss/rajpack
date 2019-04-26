App.controller('CustomerController', [
    '$scope', '$http', '$cookies',
    function ($scope, $http, $cookies) {
      $scope.loading = true;
        $http ({
          method: 'GET',
          url: '/app/api/aboutus'
        }).then (function(res) {
          console.log(res.data);
          $cookies.put('content', JSON.stringify(res.data[0]));
          $scope.rajpack = res.data[0];
        },
        function (error) {
          console.log(error);
        }).finally(function() {
          $scope.loading = false;
        });
    }
  ]);