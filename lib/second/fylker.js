(function(){
    'use strict';

    var module = angular.module("second");
    module.controller("second.fylker", function($scope, $http){
        var vm = $scope.vm = {};
        vm.fylker = [];
        
        // $http.get("/fylker")
        //     .then(function(response){
        //         vm.fylker = response.data;
        //     });
    });
})();