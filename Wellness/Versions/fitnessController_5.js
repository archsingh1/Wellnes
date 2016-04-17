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

//This directive is from: http://eshlox.net/2014/04/06/angularjs-single-page-application-and-lazy-loading-images/
fitnessApp.directive('lazy', function($timeout) {
    return {
      restrict: 'C',
      link: function (scope, elm) {
        $timeout(function() {
          $(elm).lazyload({
            effect: 'fadeIn',
            effectspeed: 500,
            'skip_invisible': false
          });//End lazyLoad
        }, 0); //End $timeout
		console.log('Lazy is called');
      }//End link
    };
  }); //End Lazy directive

fitnessApp.directive('fitness', function(){
	return{
		restrict:'E',
		require:'lazy',
		template:'<div id="{{activity.id}}" class="col-sm-4 divStyle">' +
				  '<a href="#/{{activity.pageLink}}" class="noDec"><img data-original="{{activity.image}}" class="lazy imgLazy" ng-src="GroupImages/Misc/loading.gif"/>'+
				  '<h4 class="h4Style">{{activity.title}}</h4><hr />'+
				  '<p class="paraStyle"><font color="#000000">{{activity.desc}}</font></p>'+
				 '</a></div>',
		replace:true
	} //end return
	
	

}); //End fitness directive





	

