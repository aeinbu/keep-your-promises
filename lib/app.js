(function(){
'use strict';

    var app = angular.module("keep-your-promises", ["ui.router", "first"]);
    app.config(function($urlRouterProvider){
       
       $urlRouterProvider.otherwise("/");
        
    });
})();