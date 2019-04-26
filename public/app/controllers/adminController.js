App.controller('AdminController', [
    '$scope', '$http', '$cookies', '$location', '$window',
    function ($scope, $http, $cookies, $location, $window) {
        $scope.init = function() {
            if ($cookies.get('username')) {
                $window.location.href = $location.absUrl().split($location.url())[0] + '/adminpage';
            }
        };
        $scope.login = function(cred) {
            if (cred && cred.username && cred.password) {
                $http({
                    url: '/app/api/admin/login',
                    method: "POST",
                    data: cred
                })
                .then(function(response) {
                    if (response.data.username) {
                        $cookies.put('username', response.data.username);
                        $window.location.href = $location.absUrl().split($location.url())[0] + '/adminpage';
                    }
                    else {
                        alert('error');
                    }
                }, 
                function(response) { // optional
                    alert(response);
                });
            }
            else {
                alert('Please fill username and password');
            }
        };
    }
  ]);