(function(){
'use strict';

    var module = angular.module("first", ["ui.router"]);
    module.config(function($stateProvider){
        
        $stateProvider
            .state({
                name: "first",
                url: "/first",
                templateUrl: "lib/first/first.html"
            });
        
    });
})();