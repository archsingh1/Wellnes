var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.factory('nutritionFactory', function($http){
	var nutriData={} ;
	
	nutriData.getData = function(){
		return $http.get('dataFiles/nutrition.js');
	}
	
	return nutriData;
});
	

nutritionApp.controller('nutritionController', function($scope, nutritionFactory){
	nutritionFactory.getData().success(function(data){
		$scope.nutrition = data ;
		
		$scope.nutrition.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
}) ;
	
		

});




	

