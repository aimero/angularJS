"use strict";

angular.module('psMenu').directive('psMenu', function(){
  return {
    scope: {

    },
    transclude: true,
    templateUrl: 'ext-module/psMenu/psMenuTemplate.html',
    controller: 'psMenuController',
    link: function(scope, el, attr){

    }
  };
});
