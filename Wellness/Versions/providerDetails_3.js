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
			
	//Form Submission
	$scope.disabled = true; // Submission is disabled if the form is invalid or unfilled
	$scope.aboutSubmit = function(){
		alert("Form Submitted \n Email: " + $scope.about.email +
			'\nPassword: ' + $scope.about.password);
	}
});//End detailsController

providerDetails.directive('cancelDir', function(){
	return{
		restrict:"A",
		replace:true,
		controller:function($scope){
			//reset the values of the form on cancel
			$scope.cancellAll=function(){
				$scope.about.email = "" ;
				$scope.about.password = "" ;
				$scope.formAbout.$setPristine(); //removes the glyphicons on cancel
			}
		}//End Controller function
		
	}//End return

}); //End cancelDir