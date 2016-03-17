(function(){
    'use strict';

    var module = angular.module("second");
    module.service("secondService", function($http, $q){
        var service = this;
        
        service.getFylker = function(){
            return $http.get("/fylker")
                .then(function(response){
                    return service.fylker = response.data;
                });
        }

        service.kommuner = {};
        service.getKommunerIFylke = function(fylke){
            return $http.get("/kommuner/i/" + fylke)
                .then(function(response){
                    return service.kommuner[fylke] = response.data;
                });
        }

        service.kommune = {};
        service.getKommune = function(kommune){
            return $http.get("/befolkningsdata/for/" + kommune)
                .then(function(response){
                    return service.kommune[kommune] = response.data;
                });
        }
        
		service.dataTidspunkt = $q.resolve("Q4-2015");
		
		service.beregnVekst = function(kommune) {
			return $q(function(resolve, reject){
				var kommune = service.kommune[kommune];
				var ret = parseInt(kommune["Fødselsoverskot"], 10) + parseInt(kommune["Nettoinnflytting, inkl. inn- og utvandring"], 10);
				resolve(ret);
			});
		};
    });
})();