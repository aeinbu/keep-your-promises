(function(){
    'use strict';

    var module = angular.module("third");
    module.service("thirdService", function($http, $q){
        var service = this;
        var httpGet = _.memoize($http.get);

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

		service.dataTidspunkt = $q.resolve("Q4-2015");
		
		service.beregnVekst = _.memoize(function(kommune) {
			return $q(function(resolve, reject){
				service.getKommune(kommune)
					.then(data => {
						var ret = parseInt(data["Fødselsoverskot"], 10) + parseInt(data["Nettoinnflytting, inkl. inn- og utvandring"], 10);
						resolve(ret);
						return ret;					
					});
			});
		});
    });
})();