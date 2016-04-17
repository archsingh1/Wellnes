var nutritionApp = angular.module('nutritionApp', ['wellApp', 'lazyLoadApp']);

nutritionApp.factory('nutritionFactory', function($http){
	var nutritionData={} ;
	
	nutritionData.getData = function(){
		return $http.get('dataFiles/Nutrition/nutrition.js');
	}
	
	return nutritionData;
});
	
nutritionApp.controller('nutritionController', function($scope, nutritionFactory){
	nutritionFactory.getData().success(function(data){
		$scope.nutrition = data ;
		console.log(data);
		$scope.nutrition.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End nutritionFactory.getData()

	

});//End nutritionController






	

