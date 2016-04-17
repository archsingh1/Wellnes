var providerp01App = angular.module('providerp01App', []);

providerp01App.factory('providerFactory', function($http){
	var providerFactory={} ;
	
	providerFactory.getData = function(){
		return $http.get('dataFiles/provider_p01.js');
	}
	
	return providerFactory;
});

providerp01App.controller('providerp01Controller', function($scope, providerFactory){
	$scope.provider; 
	providerFactory.getData().success(function(data){
		$scope.provider = data ; 
		
		
		
	}) ;//End providerFactory.getData()
});//End providerp01Controller

providerp01App.directive('providerpageDir', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope, $window){
				$scope.expProv = true;
				$scope.apptProv = true;
				$scope.showExp=function(event){
					event.preventDefault();
					$scope.apptProv= true;
					$scope.expProv = true;
				}
				
				$scope.showAppt = function(event){
					event.preventDefault();
					$scope.apptProv= false;
					$scope.expProv = false;
				}	//End showImg
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive

















