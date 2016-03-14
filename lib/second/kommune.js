(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.kommune", function($scope, $state, $http){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;


    });
})();