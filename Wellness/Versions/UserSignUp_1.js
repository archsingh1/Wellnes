var userSignup = angular.module('userSignup', []);

userSignup.controller('signupController', function($scope){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	
	//userForm
	$scope.userForm = {
		userfirstname : "" ,
		userlastName : "",
		userEmail:"",
		userPW:"",
		userConfPW:""
	};
			
	//Form Submission
	$scope.disabled = true; // Submission is disabled if the form is invalid or unfilled
	$scope.formUserSubmit = function(){
		alert("Form Submitted \n Email: " + $scope.userForm.email +
			'\nPassword: ' + $scope.userForm.password);
	}
	
});//End signupController

userSignup.directive('cancelDir', function(){
	return{
		restrict:"A",
		replace:true,
		controller:function($scope){
			//reset the values of the form on cancel
			$scope.cancellAll=function(){
				$scope.userForm.userfirstname = "" ;
				$scope.userForm.userlastName = "" ;
				$scope.userForm.userEmail = "" ;
				$scope.userForm.userPW = "" ;
				$scope.userForm.userConfPW = "" ;
				$scope.formuserForm.$setPristine(); //removes the glyphicons on cancel
			}
		}//End Controller function
		
	}//End return

}); //End cancelDir

