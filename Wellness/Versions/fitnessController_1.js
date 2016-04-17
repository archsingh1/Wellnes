var fitnessApp = angular.module('fitnessApp', []);

fitnessApp.factory('fitnessFactory', function($http){
	var fitnessData={} ;
	
	fitnessData.getData = function(){
		return $http.get('dataFiles/Fitness/fitness.js');
	}
	
	return fitnessData;
});
	

fitnessApp.controller('fitnessController', function($scope, fitnessFactory){
	fitnessFactory.getData().success(function(data){
		$scope.fitness = data ;
		console.log(data);
		$scope.fitness.sort(function(a, b){
		 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
		 if (nameA < nameB) //sort string ascending
		  return -1 
		 if (nameA > nameB)
		  return 1
		 return 0 //default return value (no sorting)
		});
	}) ;//End fitnessFactory.getData()

	

});//End fitnessController

fitnessApp.directive('fitness', function(){
	return{
		restrict:'E',
		template:'<div id="{{activity.id}}" class="col-sm-3 divStyle">' +
				  '<a href="#/{{activity.pageLink}}" class="noDec"><h4 class="h4Style">{{activity.title}}</h4>'+
				  '<img class="lazy imgLazy" ng-src="{{activity.image}}"/>'+
				  '<p class="paraStyle"><font color="#000000">{{activity.desc}}</font><span class="glyphicon  glyphicon-chevron-right"style="font-size:10px;"></span></p>'+
				 '</a></div>',
		replace:true
	} //end return
	
	

}); //End fitness directive





	

