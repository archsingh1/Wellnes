var userProfile = angular.module('userProfile', []);

userProfile.factory('userProfileFactory', function($http){
	var userProfileFactory={} ;
	
	userProfileFactory.getData = function(){
		return $http.get('http://rest.learncode.academy/api/arch/userForm');
	}
	
	return userProfileFactory;
});

userProfile.controller('userProfileController', function($scope, $http, userProfileFactory){
	$scope.userForm = {};
	
	userProfileFactory.getData().success(function(data){
	//	$scope.userForm = data[0]; 
		
		
	$scope.userForm.userFirstName = data[0].userFirstName ; 	
	$scope.userForm.userLastName = data[0].userLastName ;	
	$scope.userForm.userPWD = data[0].userPWD;	
	$scope.userForm.userPic = data[0].userPic;	
	$scope.userForm.userName = data[0].userName;	
	$scope.userForm.userGender = data[0].userGender;	
	$scope.userForm.userLoc = data[0].userLoc;
		
		
		
		//console.log($scope.userForm[0].email);
		console.log($scope.userForm);
	}) ;//End userProfileFactory.getData()
		
	
	$scope.editUserForm = angular.copy($scope.userForm);
	
	$scope.submitUserForm = function(){
		console.log('submitted' );
		$scope.userForm = angular.copy($scope.editUserForm);
		$http.post('http://rest.learncode.academy/api/arch/userForm', $scope.userForm);
		
	}; //End submitUserForm();
	
	$scope.cancelUserForm = function(){
		console.log("canceled");
	
	}; //End cancelUserForm();
	
	console.log($scope);
});//End userProfile Controller



