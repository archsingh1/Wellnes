var configApp = angular.module('configApp', ['ngRoute', 'nutritionApp', 'mindfulApp', 'providerApp',	'providerp01App', 'fitnessApp', 'FitnessActivityApp', 'goodDayStartApp', 	'goalSettingApp', 'fpApp', 'userProfile', 'providerProfile']);

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
		.when('/Fitness/:pageLink',
			{
				controller:'FitActController',
				templateUrl:'FitnessPages/FitnessActivity.html'
			}
		
		)	
		.when('/goodDayStart',
			{
				controller:'goodDayStartController',
				templateUrl:'NutritionPages/goodDayStart.html'
			}
		
		)	
		.when('/Mindful',
			{
				controller:'mindfulController',
				templateUrl:'MindfulPages/Mindful.html'
			}
		
		)	
		.when('/goalSetting',
			{
				controller:'goalSettingController',
				templateUrl:'MindfulPages/goalSetting.html'
			}
		
		)	
		
		.when('/Fitness/:pageLink/:id',
			{
				controller:'fitnessProviderController',
				templateUrl:'FitnessPages/Providers/FitnessProvidersPage.html'
			}
		
		)	
		/*.when('/userLogin',
			{
				controller:'u01Controller',
				templateUrl:'UserPages/User/Alex/U01_Alex_Wall.html'
			}
		
		)	*/
		.when('/AlexWall',
			{
				controller:'u01Controller',
				templateUrl:'UserPages/User/Alex/U01_Alex_Wall.html'
			}
		
		)
		.when('/AlexAppt',
			{
				controller:'u01Controller',
				templateUrl:'UserPages/User/Alex/U01_Alex_Appts.html'
			}
		
		)	
		.when('/AlexMsg',
			{
				controller:'u01Controller',
				templateUrl:'UserPages/User/Alex/U01_Alex_Msg.html'
			}
		
		)	
		.when('/AlexProfile',
			{
				controller:'userProfileController',
				templateUrl:'UserPages/User/Alex/U01_Alex_Profile.html'
			}
		
		)	
		.when('/AlexReviews',
			{
				controller:'u01Controller',
				templateUrl:'UserPages/User/Alex/U01_Alex_Reviews.html'
			}
		
		)	
		.when('/ProviderDetails',
			{
				controller:'detailsController',
				templateUrl:'ProviderPages/ProviderDetails.html'
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







