var fitnessApp = angular.module('fitnessApp', ['wellApp', 'lazyLoadApp']);

fitnessApp.factory('fitnessFactory', function($http){
	var fitnessData={} ;
	
	fitnessData.getData = function(){
		return $http.get('dataFiles/Fitness/fitness.js');
	}
	
	return fitnessData;
});
	

fitnessApp.controller('fitnessController', function($scope, fitnessFactory){
	fitnessFactory.getData().success(function(data){
		$scope.fitness = data ;
		console.log(data);
		$scope.fitness.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End fitnessFactory.getData()

	

});//End fitnessController






	

