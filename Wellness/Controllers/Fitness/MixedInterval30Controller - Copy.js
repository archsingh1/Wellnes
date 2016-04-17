var mixedInterval30App = angular.module('mixedInterval30App', ['fitnessProviderFactory', 'lazyLoadApp', 'hideImgDir',  'changeColorDir']);

mixedInterval30App.controller('MI30Controller', function($scope, fpFactory, $routeParams, $http){

	$scope.providers = [];
	$scope.providersAll ;
	$scope.imageData ; //Image related to the fitness activity
	$scope.titleData ; //Title related to the fitness activity
	$scope.longDescData ; //Long description related to the fitness activity
	
	//Bring the image related to the fitness activity
	$scope.$on('$routeChangeSuccess', function(){
		$http.get('dataFiles/Fitness/fitness.js').success(function(data){
			console.log('Incoming data: ' + data);
			for(var i=0; i<data.length; i++){
				if(data[i].pageLink == $routeParams.pageLink){
					$scope.imageData = data[i].image;
					$scope.titleData = data[i].title;
					$scope.longDescData = data[i].longDesc;
				}//End if
			}//End for
		});//End success
	
	});//End $on
	
	
	fpFactory.getData().success(function(data){
		$scope.providersAll = data.providers ;
		
		console.log('Providers: ' + data.providers);
		/*console.log('Length: ' + $scope.providers.length);
		console.log('$routeParams: ' + $routeParams.pageLink);*/
		
		for(var i=0; i<$scope.providersAll.length; i++){
			if($scope.providersAll[i].pageLink == $routeParams.pageLink){
				console.log($scope.providersAll[i].title) ;
				$scope.providers.push($scope.providersAll[i]);
			}
		}
		
		console.log('providers in scope: ' + $scope.providers.length) ;
	
	});








});//End MI30Controller



