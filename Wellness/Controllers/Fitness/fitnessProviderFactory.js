var fitnessProviderFactory = angular.module('fitnessProviderFactory', []);

fitnessProviderFactory.factory('fpFactory', function($http){
	var fpFactory={} ;
	
	fpFactory.getData = function(){
		return $http.get('dataFiles/Fitness/fitnessProviders.js');
	}
	
	return fpFactory;
});

