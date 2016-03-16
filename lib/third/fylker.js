(function(){
    'use strict';

    var module = angular.module("third");
    module.controller("third.fylker", function($scope, thirdService){
        var vm = $scope.vm = {};
        vm.fylker = [];
        
        thirdService.getFylker("/fylker")
            .then(function(data){
                vm.fylker = data;
            });
    });
})();