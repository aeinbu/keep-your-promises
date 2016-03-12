(function(){
'use strict';

    var module = angular.module("first");
    module.controller("first", function($scope){
       var controller = $scope.first = {};
       
       controller.message = "This is the first message"; 
    });
})();