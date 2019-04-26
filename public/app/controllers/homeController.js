App.controller('HomeController', [
  '$scope', '$http', '$cookies',
  function ($scope, $http, $cookies) {
    if ($cookies.get('content')) {
      $scope.rajpack = JSON.parse($cookies.get('content'));
    }
    else {
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
      });
    }
  }
]);