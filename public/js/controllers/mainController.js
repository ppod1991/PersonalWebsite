'use strict';

angular.module('personalApp.controllers.main', [])
    .controller('mainController', ['$scope','$location',
        function($scope,$location) {
            console.log("Main controller");

            $scope.open = function(path,mainVideoID) {
                console.log("Trying to open" + path);
                var mainVid = document.getElementById(mainVideoID);
                var mostRecentTime = mainVid.currentTime;
                $location.path(path).search('t',encodeURIComponent(mostRecentTime+""));
            };
}]);