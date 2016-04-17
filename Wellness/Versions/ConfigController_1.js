var configApp = angular.module('configApp', ['ngRoute', 'nutritionApp', 'providerApp','providerp01App']);

configApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller:'nutritionController',
				templateUrl:'Nutrition.html'
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
		
		.otherwise({redirectTo: '/'});
		
});

