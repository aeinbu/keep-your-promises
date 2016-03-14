(function(){
'use strict';

    var module = angular.module("first", ["ui.router"]);
    module.config(function($stateProvider){
        
        $stateProvider
            .state({
                name: "first",
                url: "/first",
                templateUrl: "lib/first/first.html"
            })
            .state({
                name: "first.fylker",
                url: "/fylker",
                templateUrl: "lib/first/fylker.html"
            })
            .state({
                name: "first.fylker.kommuner",
                url: "/:fylke/kommuner",
                templateUrl: "lib/first/kommuner.html"
            })
            .state({
                name: "first.fylker.kommuner.kommune",
                url: "/:kommune",
                templateUrl: "lib/first/kommune.html"
            });
        
    });
})();