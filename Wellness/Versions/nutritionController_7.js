var nutritionApp = angular.module('nutritionApp', []);

nutritionApp.factory('nutritionFactory', function($http){
	var nutriData={} ;
	
	nutriData.getData = function(){
		return $http.get('dataFiles/nutrition.js');
	}
	
	return nutriData;
});
	

nutritionApp.controller('nutritionController', function($scope, nutritionFactory){
	nutritionFactory.getData().success(function(data){
		$scope.nutrition = data ;
		
		$scope.nutrition.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End NutritionFactory.getData()

	

});//End nutritionController

nutritionApp.directive('provider', function(){
	return{
		restrict:'E',
		template:'<div id="{{activity.id}}" class="col-sm-3 divStyle">' +
				  '<h4 class="h4Style">{{activity.title}}</h4>'+
				  '<img class="lazy imgLazy" ng-src="{{activity.image}}"/>'+
				  '<p class="paraStyle"><font color="#000000">{{activity.desc}}</font><span class="glyphicon  glyphicon-chevron-right"style="font-size:10px;"></span></p>'+
				 '</div>',
		replace:true
	} //end return
	
	

}); //End provider directive





	

