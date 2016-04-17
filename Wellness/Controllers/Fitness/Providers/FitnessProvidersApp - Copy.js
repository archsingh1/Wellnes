var fpApp = angular.module('fpApp', ['changeColorDir', 'serviceexpeduDir', 'ngMap']);

fpApp.factory('f15Factory', function($http){
	var f15Factory={} ;
	
	f15Factory.getData = function(){
		return $http.get('dataFiles/Fitness/Providers/data_FitnessProviders.js');
	}
	
	return f15Factory;
});

fpApp.controller('fitnessProviderController', function($scope, $sce, f15Factory, $routeParams){
			
	$scope.provider ; 
	$scope.providers ; 
	
	f15Factory.getData().success(function(data){
		$scope.providers = data.providers ; 
	
		for(var i=0; i<$scope.providers.length; i++){
			if($scope.providers[i].id == $routeParams.id){
				$scope.provider = $scope.providers[i];
			}
		}
	});
	

	

});//End cathController



