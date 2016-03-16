(function(){
    'use strict';

    var module = angular.module("third", ["ui.router"]);
    module.config(function($stateProvider){
        
        $stateProvider
            .state({
                name: "third",
                url: "/third",
                templateUrl: "lib/third/third.html"
            })
            .state({
                name: "third.fylker",
                url: "/fylker",
                templateUrl: "lib/third/fylker.html"
            })
            .state({
                name: "third.fylker.kommuner",
                url: "/:fylke/kommuner",
                templateUrl: "lib/third/kommuner.html"
            })
            .state({
                name: "third.fylker.kommuner.kommune",
                url: "/:kommune",
                templateUrl: "lib/third/kommune.html"
            });
        
    });
})();