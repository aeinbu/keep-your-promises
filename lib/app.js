(function(){
'use strict';

    var app = angular.module("keep-your-promises", ["ui.router", "first", "second", "third"]);
    app.config(function($urlRouterProvider, $stateProvider){
        
        $stateProvider
            .state({
               name: "empty",
               url: "/empty",
               templateUrl: "lib/empty/empty.html" 
            });

        $urlRouterProvider.otherwise("/empty");

    });
})();