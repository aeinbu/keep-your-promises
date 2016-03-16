(function(){
    'use strict';

    var module = angular.module("first");
    module.controller("first.kommuner", function($scope, $state, $http, firstService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommuner = [];
        
        firstService.getKommunerIFylke(vm.fylke)
            .then(function(data) {
                vm.kommuner = data;
            })

        // $http.get("/kommuner/i/" + vm.fylke)
        //     .then(function(response){
        //         vm.kommuner = response.data;
        //     });
        
    });
})();