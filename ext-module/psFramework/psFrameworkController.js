"use strict";

angular.module("psFramework").controller("psFrameworkController",
[
  '$scope', '$rootScope', /*'$window', '$timeout', function($scope, $rootScope, $window, $timeout*/){

        /*$scope.isMenuButtonVisible = true;
        $scope.isMenuVisible = true;
        $scope.isMenuVertical = true;

        $scope.$on('ps-menu-item-selected-event', function(event, data){
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        });

        $scope.$on('ps-menu-orientation-changed-event', function(event, data){
            $scope.isMenVertical = data.isMenVertical;
        });

        $($window).on('resize.psFramework', function(){
          $scope.$apply(function(){
            checkWidth();
            broadcastMenuState();
          });
        });

        var checkWidth = function(){
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width >= 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.$on("$destroy", function(){
          $($window).off('resize.psFramework');
        });

        $scope.menuButtonClicked = function(){
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            // $scope.$apply();
        };

        var broadcastMenuState = function(){
            $rootScope.$broadcast('ps-menu-show',
              {
                show: $scope.isMenuVisible
              });
        };

        $timeout(function(){
          checkWidth();
        }, 0);
        */
  }
]);
