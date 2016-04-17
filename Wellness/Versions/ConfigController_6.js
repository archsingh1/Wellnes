var configApp = angular.module('configApp', ['ngRoute', 'nutritionApp', 'providerApp','providerp01App', 
					'fitnessApp', 'mixedInterval30App']);

configApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller:'',
				templateUrl:'Home.html'
			})
		.when('/Home', 
			{
				controller:'',
				templateUrl:'Home.html'
			})	
		.when('/Fitness', 
			{
				controller:'fitnessController',
				templateUrl:'FitnessPages/Fitness.html'
			})
		.when('/Nutrition',
			{
				controller:'nutritionController',
				templateUrl:'NutritionPages/Nutrition.html'
			})
		.when('/Mindful', 
			{
				controller:'',
				templateUrl:''
			})	
		.when('/DetoxDiet',
			{
				controller:'providerController',
				templateUrl:'DetoxDiet.html'
			})	
		.when('/p01', 
			{
				controller:'providerp01Controller',
				templateUrl:'ProviderPage_p01.html'
			})
		.when('/MixedInterval30',
			{
				controller:'MI30Controller',
				templateUrl:'FitnessPages/MixedInterval30.html'
			}
		
		)	
		
		.otherwise({redirectTo: '/'});
		
}); //End routeProvider

configApp.controller('signupController', function($scope){
	
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
		alert("Form Submitted \n Email: " + $scope.userForm.userEmail +
			'\n Password: ' + $scope.userForm.userPW + '\n Confirm Password: ' + $scope.userForm.userConfPW+'\n First Name: '+$scope.userForm.userfirstname +'\n Last Name: '+ $scope.userForm.userlastName);
	}
	
});//End signupController

configApp.controller('loginController', function($scope){
	
	//Log in Form
	$scope.loginInfo = {
		loginEmail:"",
		loginPW:""
	};
			
	//Form Submission
	$scope.loginSubmit = function(){
		alert("Log in form Submitted \n Email: " + $scope.loginInfo.loginEmail +
			'\n Password: ' + $scope.loginInfo.loginPW);
	}
	
});//End loginController







