(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second", function($scope){
       var controller = $scope.first = {};
    });
})();