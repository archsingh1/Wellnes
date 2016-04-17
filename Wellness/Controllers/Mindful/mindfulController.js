var mindfulApp = angular.module('mindfulApp', ['wellApp', 'lazyLoadApp']);

mindfulApp.factory('mindfulFactory', function($http){
	var mindfulData={} ;
	
	mindfulData.getData = function(){
		return $http.get('dataFiles/Mindful/mindful.js');
	}
	
	return mindfulData;
});
	

mindfulApp.controller('mindfulController', function($scope, mindfulFactory){
	mindfulFactory.getData().success(function(data){
		$scope.mindful = data ;
		console.log(data);
		$scope.mindful.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End mindfulFactory.getData()

	

});//End mindfulController






	

