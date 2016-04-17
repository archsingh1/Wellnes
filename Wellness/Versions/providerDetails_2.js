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
	
	//Form Submission
	$scope.disabled = true; // Submission is disabled if the form is invalid or unfilled
	$scope.aboutSubmit = function(){
		alert("Form Submitted \n Email: " + $scope.about.email +
			'\nPassword: ' + $scope.about.password);
	}
});//End detailsController

