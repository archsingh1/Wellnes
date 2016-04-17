var userProfile = angular.module('userProfile', []);

userProfile.factory('userProfileFactory', function($http){
	var userProfileFactory={} ;
	
	userProfileFactory.getData = function(){
		return $http.get('http://rest.learncode.academy/api/arch/user_Form');
	}
	
	return userProfileFactory;
});

userProfile.controller('userProfileController', function($scope, $http, $window, userProfileFactory){
	$scope.userForm = {};
	$scope.editUserForm = {} ;
	
	userProfileFactory.getData().success(function(data){
		//	$scope.userForm = data[0]; 
		$scope.userForm.userFirstName = data[0].userFirstName ; 	
		$scope.userForm.userLastName = data[0].userLastName ;	
		$scope.userForm.userPWD = data[0].userPWD;	
		$scope.userForm.userPic = data[0].userPic;	
		$scope.userForm.userName = data[0].userName;	
		$scope.userForm.userGender = data[0].userGender;	
		$scope.userForm.userLoc = data[0].userLoc;
		$scope.editUserForm = data[0];
		
		console.log($scope.editUserForm);
		//console.log($scope.userForm[0].email);
		console.log($scope.userForm);
	}) ;//End userProfileFactory.getData()
		
	$scope.submitUserForm = function(){
		//console.log('submitted' );
		$scope.userForm = angular.copy($scope.editUserForm);
		$http.post('http://rest.learncode.academy/api/arch/user_Form', $scope.userForm);
		
	}; //End submitUserForm();
	
	$scope.cancelUserForm = function(){
		console.log("canceled");
		$window.location.reload();
	}; //End cancelUserForm();
	
	console.log($scope);
});//End userProfile Controller



