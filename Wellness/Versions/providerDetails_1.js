var providerDetails = angular.module('providerDetails', []);

providerDetails.controller('detailsController', function($scope){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	$scope.hideForm=true;
	$scope.about={
		email:"",
		password:""
	};
	
	$scope.aboutSec = function(){
		$scope.hideForm = !($scope.hideForm) ;
	}
	
	$scope.cancellAll = function(){
		$scope.about = angular.copy($scope.clearAll);
	}//End cancellAll function
	
});//End detailsController

