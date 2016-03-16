(function(){
    'use strict';

    var module = angular.module("third");
    module.controller("third.fylker", function($scope, $http){
        var vm = $scope.vm = {};
        vm.fylker = [];
        
        // $http.get("/fylker")
        //     .then(function(response){
        //         vm.fylker = response.data;
        //     });
    });
})();