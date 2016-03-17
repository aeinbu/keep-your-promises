(function(){
    'use strict';

    var module = angular.module("first");
    module.service("firstService", function($http){
        var service = this;
    
        service.getFylker = function(){
            return $http.get("/fylker")
                .then(function(response){
                    return response.data;
                });
        }

        service.getKommunerIFylke = function(fylke){
            return $http.get("/kommuner/i/" + fylke)
                .then(function(response){
                    return response.data;
                });
        }
   	
        service.getKommune = function(kommune){
            return $http.get("/befolkningsdata/for/" + kommune)
                .then(function(response){
                    return response.data;
                });
        }
        
		service.dataTidspunkt = "Q4-2015";
		
		service.beregnVekst = function(kommune){
			var kommune = service.kommune[kommune];
			return parseInt(kommune["Fødselsoverskot"], 10) + parseInt(kommune["Nettoinnflytting, inkl. inn- og utvandring"], 10);
		}
    });
})();