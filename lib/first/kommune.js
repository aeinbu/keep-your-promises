(function(){
    'use strict';

    var module = angular.module("first");
    module.controller("first.kommune", function($scope, $state, $http){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;
        vm.befolkningsData = {};

        $http.get("/befolkningsdata/for/" + vm.kommune)
            .then(function(response){
                vm.befolkningsData = response.data;
            });

    });
})();