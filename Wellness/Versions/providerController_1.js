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

providerApp.directive('provider', function(){
	return{
		restrict:'E',
		template:'<div id="{{provider.id}}" class="col-sm-3 divStyle">' +
				  '<h4 class="h4Style">{{provider.title}}</h4>'+
				  '<img class="lazy imgLazy" ng-src="{{provider.image}}"/>'+
				  '<p class="paraStyle"><font color="#000000">{{provider.desc}}</font><span class="glyphicon  glyphicon-chevron-right"style="font-size:10px;"></span></p>'+
				 '</div>',
		replace:true
	} //end return
	
	

}); //End provider directive





	

