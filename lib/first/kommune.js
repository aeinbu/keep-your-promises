(function(){
    'use strict';

    var module = angular.module("first");
    module.controller("first.kommune", function($scope, $state, $http){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;


    });
})();