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
                    $scope.tempState['machineryImages'] = [];
                    $scope.tempState['deleteMachinery'] = [];
                },
                function (error) {
                    console.log(error);
                });
            }
            else {
                $window.location.href = $location.absUrl().split($location.url())[0] + '/admin';
            }
        };

        $scope.deleteMachine = function(index) {
            $scope.tempState.deleteMachinery.push({id: $scope.tempState.machinery[index].id, status: 'delete'});
            $scope.tempState.machinery.splice(index, 1);

        };

        $scope.addMachinery = function($event){
            let higherId = 0;
            $scope.tempState.machinery.forEach((machine) => {
                higherId = (Number.parseInt(machine.id) > higherId) ? Number.parseInt(machine.id) : higherId;
            });
            higherId += 1;
            $scope.tempState.machinery.push({
                id: higherId,
                name: $scope.machinery.name,
                desc: $scope.machinery.description
            });
            $scope.tempState.machineryImages.push({
                id: higherId,
                image: $scope.tempMachineImage,
                status: 'new'
            });
            $scope.tempMachineImage = '';
            $scope.machinery.name = '';
            $scope.machinery.description = '';
        };

        $scope.addMachineImage = function(file) {
            $scope.getBase64(file.files[0])
            .then((result) => {
                $scope.tempMachineImage = result.split(',')[1];
                file.parentElement.children[3].src = result;
            });
        };

        $scope.getBase64 = function(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        };

        $scope.changeMachineImage = function(file, machinery) {
            $scope.getBase64(file.files[0])
            .then((result) => {
                let newEntry = true;
                file.parentElement.children[3].src = result;
                $scope.tempState.machineryImages.forEach(element => {
                    if(element.id === machinery.id) {
                        element.image = result.split(',')[1];
                        newEntry = false;
                    }
                });
                if (newEntry) {
                    $scope.tempState.machineryImages.push({
                        id: machinery.id,
                        image: result.split(',')[1]
                    });
                }
                console.log($scope.tempState);
            });
        };

        $scope.saveChanges = function(){
            $scope.loading = true;
            $http({
                url: '/app/api/aboutus',
                method: "PUT",
                data: $scope.tempState
            })
            .then(function(response) {
                $window.addEventListener("beforeunload", function(event) {
                    event.returnValue = "Content got saved";
                });
                $window.location.href = $location.absUrl().split($location.url())[0] + '/adminpage';
            }, 
            function(response) { // optional
                alert(response);
            })
            .finally(function() {
                $scope.loading = false;
            });
        };

        $scope.discardChanges = function(){
            $scope.tempState = angular.copy($scope.rajpack);
            $scope.tempState.machineryImages = [];
            $scope.tempState.deleteMachinery = [];
            $scope.$evalAsync();
        };
    }
]);