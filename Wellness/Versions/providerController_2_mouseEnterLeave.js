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
		restrict:'A',
		link:function(scope, element, attrs){
			element.bind('mouseenter', function(){
				$(this).text('Not working').css('background-color','red');
			});
			element.bind('mouseleave', function(){
				$(this).text('Working').css('background-color','white');
			});
		}
	} //end return
	
	

}); //End provider directive





	

