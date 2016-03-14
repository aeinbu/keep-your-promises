(function(){
    'use strict';

    var module = angular.module("second", ["ui.router"]);
    module.config(function($stateProvider){
        
        $stateProvider
            .state({
                name: "second",
                url: "/second",
                templateUrl: "lib/second/second.html"
            })
            .state({
                name: "second.fylker",
                url: "/fylker",
                templateUrl: "lib/second/fylker.html"
            })
            .state({
                name: "second.fylker.kommuner",
                url: "/:fylke/kommuner",
                templateUrl: "lib/second/kommuner.html"
            })
            .state({
                name: "second.fylker.kommuner.kommune",
                url: "/:kommune",
                templateUrl: "lib/second/kommune.html"
            });
        
    });
})();