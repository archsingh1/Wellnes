var nutritionApp = angular.module('nutritionApp', []);


nutritionApp.controller('nutritionController', function($scope, $http){
	$scope.nutrition = [];
	$http.get('dataFiles/nutrition.js').success(function(data) {
		$scope.nutrition = data;
		$scope.nutrition.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	});

});





	

