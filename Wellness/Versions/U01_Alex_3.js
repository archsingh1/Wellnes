var U01_Alex = angular.module('U01_Alex', ['changeColorDir', 'userDir']);

U01_Alex.factory('u01Factory', function($http){
	var u01Factory={} ;
	
	u01Factory.getData = function(){
		return $http.get('dataFiles/Users/datau01_Alex.js');
	}
	
	return u01Factory;
});

U01_Alex.controller('u01Controller', function($scope, u01Factory){
	$scope.user; 
	$scope.userWall = true;
	$scope.userAppt = true;
	$scope.userMail = true;
	$scope.userReview = true;
	
	u01Factory.getData().success(function(data){
		$scope.user = data; 
		console.log($scope.user);
	}) ;//End u01Factory.getData()
	
	

});//End U01_Alex Controller



