"use strict";

angular.module('psMenu').controller('psMenuController',
  [
    '$scope', '$rootScope', function($scope, $rootScope){
      this.setActiveElement = function(el) {
        $scope.activeElement = el;
      };

      this.setRoute = function(route){
        $rootScope.broadcast('ps-menu-item-selected-event',
      {route: route});
    };
    

        /*$scope.showMenu = true;
        $scope.isVertical = true;

        this.setActiveElement = function(el) {
          $scope.activeElement = el;
        };

        this.isVertical = function(){
          return $scope.isVertical;
        };

        this.getActiveElement = function(){
          return $scope.activeElement;
        };

        this.setRoute = function(route){
            $rootScope.$broadcast('ps-menu-item-selected-event',
             { route: route });
        };

        $scope.$on('ps-menu-show', function(event, data){
          $scope.showMenu = data.show;
        });

        $scope.toggleMenuOrientation = function(){
            $scope.isVertical = !$scope.isVertical;
            $rootScope.$broadcast('ps-menu-orientation-changed-event',
            { isMenVertical: $scope.isVertical });
        };*/
    }
]);
