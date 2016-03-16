(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.fylker", function($scope, secondService){
        var vm = $scope.vm = {};
        
        vm.fylker = secondService.fylker;
        
        if(!vm.fylker)
        {
            secondService.getFylker("/fylker")
                .then(function(data){
                    vm.fylker = data;
                });
        }
    });
})();