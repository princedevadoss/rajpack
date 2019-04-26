App.controller('MachineryController', [
    '$scope', '$http', '$cookies', '$q', '$window',
    function ($scope, $http, $cookies, $q, $window) {
        $scope.loading = true;
        let promises = [
        $http ({
          method: 'GET',
          url: '/app/api/aboutus'
        }),
        $http ({
          method: 'GET',
          url: '/app/api/aboutus/images'
        })];
        $q.all(promises).then (function(res) {
          console.log(res[0].data);
          $cookies.put('content', JSON.stringify(res[0].data[0]));
          $scope.machinery = {};
          $scope.machinery.content = res[0].data[0].machinery;
          $scope.machinery.image = res[1].data; 
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function() {
          $scope.loading = false;
        });
        $scope.getImage = function(data) {
          return 'data:image/jpg;base64,' + data;
        }
      }
    
  ]);