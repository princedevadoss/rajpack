App.controller("AdminPageController",[
    '$scope', '$http', '$cookies', '$location', '$window',
    function($scope, $http, $cookies, $location, $window){
        $scope.init = function() {
            if ($cookies.get('username')) {
                $http({
                    method: 'GET',
                    url: '/app/api/aboutus'
                }).then( function(res) {
                    console.log(res.data);
                    $scope.rajpack = res.data[0];
                    $scope.tempState = angular.copy($scope.rajpack);
                },
                function (error) {
                    console.log(error);
                });
            }
            else {
                $window.location.href = $location.absUrl().split($location.url())[0] + '/admin';
            }
        };

        $scope.addMachine = function($event){
            console.log($event);
        };

        $scope.saveChanges = function(){
            $http({
                url: '/app/api/aboutus',
                method: "PUT",
                data: $scope.tempState
            })
            .then(function(response) {
                $scope.rajpack = angular.copy($scope.tempState);
            }, 
            function(response) { // optional
                alert(response);
            });
        };

        $scope.discardChanges = function(){
            $scope.tempState = angular.copy($scope.rajpack);
            $scope.$evalAsync();
        };
    }
]);