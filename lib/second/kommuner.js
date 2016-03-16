(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.kommuner", function($scope, $state, secondService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        
        vm.kommuner = secondService.kommuner[vm.fylke];
        
        if(!vm.kommuner){
            secondService.getKommunerIFylke(vm.fylke)
                .then(function(data){
                    vm.kommuner = data;
                });
        }

        // $http.get("/kommuner/i/" + vm.fylke)
        //     .then(function(response){
        //         vm.kommuner = response.data;
        //     });
    });
})();