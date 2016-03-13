(function(){
'use strict';

    var module = angular.module("second");
    module.controller("second", function($scope){
       var controller = $scope.second = {};
       
       controller.message = "This is the second message"; 
    });
})();