(function(){
    'use strict';

    var module = angular.module("third");
    module.controller("third.kommune", function($scope, $state, thirdService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;

        thirdService.getKommune(vm.kommune)
            .then(function(data) {
                vm.befolkningsData = data;
            })

		vm.click = function() {
			thirdService.dataTidspunkt
				.then(data => { vm.dataTidspunkt = data });

			thirdService.beregnVekst(vm.kommune)
				.then(data => { vm.nettoVekst = data });
		}
    });
})();