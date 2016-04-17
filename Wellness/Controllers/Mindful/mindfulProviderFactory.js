var mindfulProviderFactory = angular.module('mindfulProviderFactory', []);

mindfulProviderFactory.factory('mfFactory', function($http){
	var mfFactory={} ;
	
	mfFactory.getData = function(){
		return $http.get('dataFiles/Mindful/mindfulProviders.js');
	}
	
	return mfFactory;
});

