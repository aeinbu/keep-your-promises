(function(){
'use strict';

    var module = angular.module("second", ["ui.router"]);
    module.config(function($stateProvider){
        
        $stateProvider
            .state({
                name: "second",
                url: "/second",
                templateUrl: "lib/second/second.html"
            });
        
    });
})();