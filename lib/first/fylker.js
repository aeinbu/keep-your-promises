(function(){
    'use strict';

    var module = angular.module("first");
    module.controller("first.fylker", function($scope, $http, firstService){
        var vm = $scope.vm = {};
        vm.fylker = [];
        
        // $http.get("/fylker")
        //     .then(function(response){
        //         vm.fylker = response.data;
        //     });

        firstService.getFylker()
            .then(function(data){
                vm.fylker = data;
            });
            
    });
})();