(function(){
'use strict';

    var app = angular.module("keep-your-promises", ["ui.router", "first", "second"]);
    app.config(function($urlRouterProvider){
       
       $urlRouterProvider.otherwise("/");
        
    });
})();