(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.kommune", function($scope, $state, secondService){
        var vm = $scope.vm = {};
        vm.fylke = $state.params.fylke;
        vm.kommune = $state.params.kommune;

        vm.befolkningsData = secondService.kommune[vm.kommune];

        if(!vm.befolkningsData){
            secondService.getKommune(vm.kommune)
                .then(function(data) {
                    vm.befolkningsData = data;
                })
        }
		
		vm.click = function() {
			secondService.dataTidspunkt
				.then(data => { vm.dataTidspunkt = data });

			secondService.beregnVekst(vm.kommune)
				.then(data => { vm.nettoVekst = data });
		}
    });
})();