var nutritionProviderFactory = angular.module('nutritionProviderFactory', []);

nutritionProviderFactory.factory('npFactory', function($http){
	var npFactory={} ;
	
	npFactory.getData = function(){
		return $http.get('dataFiles/nutrition/nutritionProviders.js');
	}
	
	return npFactory;
});

