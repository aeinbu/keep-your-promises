(function(){
    'use strict';

    var module = angular.module("third");
    module.controller("third.kommuner", function($scope, $state, thirdService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommuner = [];

        thirdService.getKommunerIFylke(vm.fylke)
            .then(function(data){
                vm.kommuner = data;
            });
        
    });
})();