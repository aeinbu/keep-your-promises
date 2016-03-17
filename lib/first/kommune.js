(function(){
    'use strict';

    var module = angular.module("first");
    module.controller("first.kommune", function($scope, $state, $http, firstService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;
        vm.befolkningsData = {};

        firstService.getKommune(vm.kommune)
            .then(function(data) {
                vm.befolkningsData = data;
            })

        // $http.get("/befolkningsdata/for/" + vm.kommune)
        //     .then(function(response){
        //         vm.befolkningsData = response.data;
        //     });


		vm.beregnVekst = function() {
			vm.nettoVekst = vm["Fødselsoverskot"] + vm["Nettoinnflytting, inkl. inn- og utvandring"];
		}

    });
})();