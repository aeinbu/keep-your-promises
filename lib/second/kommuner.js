(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.kommuner", function($scope, $state, $http){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommuner = [];
        

        $http.get("/kommuner/i/" + vm.fylke)
            .then(function(response){
                vm.kommuner = response.data;
            });
    });
})();