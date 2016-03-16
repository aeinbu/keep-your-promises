(function(){
    'use strict';

    var module = angular.module("third");
    module.service("thirdService", function($http){
        var service = this;
    
        service.getFylker = function(){
            return httpGet("/fylker")
                .then(function(response){
                    return response.data;
                });
        }

        service.getKommunerIFylke = function(fylke){
            return httpGet("/kommuner/i/" + fylke)
                .then(function(response){
                    return response.data;
                });
        }
   	
        service.getKommune = function(kommune){
            return httpGet("/befolkningsdata/for/" + kommune)
                .then(function(response){
                    return response.data;
                });
        }

        var httpGet = _.memoize($http.get);

    });
})();