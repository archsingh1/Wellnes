var providerApp = angular.module('providerApp', []);

providerApp.factory('providerFactory', function($http){
	var providerFactory={} ;
	
	providerFactory.getData = function(){
		return $http.get('dataFiles/providers.js');
	}
	
	return providerFactory;
});

providerApp.controller('providerController', function($scope, providerFactory){
	providerFactory.getData().success(function(data){
		$scope.providers = data ;
	
		$scope.providers.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End providerFactory.getData()

});//End providerController

providerApp.directive('providerDir', function(){
	return{
			controller:function($scope, $window){
				$scope.showImg = true;
					$scope.hideImg = function(event){
						event.preventDefault();
						$scope.showImg= false;
				}	//End showImg
				
				$scope.showText = function(event){
					event.preventDefault();
					$scope.showImg=true;
				}//End showText
				
				$scope.pageLink = function(provider){
					$window.open(provider.page, "_self");
				}
				
			}//End Controller function
		
		}//end return
		
	
		
		
	}); //End provider directive





	

