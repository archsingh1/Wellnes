var f15App = angular.module('f15App', ['changeColorDir', 'serviceexpeduDir', 'ngMap']);

f15App.factory('f15Factory', function($http){
	var f15Factory={} ;
	
	f15Factory.getData = function(){
		return $http.get('dataFiles/Fitness/Providers/dataf15_Catherine.js');
	}
	
	return f15Factory;
});

f15App.controller('f15Controller', function($scope, $sce, f15Factory){
	$scope.provider; 
	
	f15Factory.getData().success(function(data){
		$scope.provider = data ; 
		console.log($scope.provider);
	}) ;//End f15Factory.getData()
	
	

});//End cathController



