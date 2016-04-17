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
		$scope.providers = [] ;
		for(var i=0;i<data.length;i++){
			if(data[i].DetoxDiet == 'Y'){		
				$scope.providers.push(data[i]) ; 
			}//end if
		}//end for
		
		$scope.providers.sort(function(a, b){
			 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
			 if (nameA < nameB) //sort string ascending
			  return -1 
			 if (nameA > nameB)
			  return 1
			 return 0 //default return value (no sorting)
		});//End sort
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

providerApp.directive('changeColor', function(){
	return{
		restrict:'A',
		replace:true,
		scope:{
			rating:'@'
		},
		link:function(scope, element, attrs){
				scope.ratingNum = Number(scope.rating); //console.log(scope.ratingNum);
				
				if(scope.ratingNum ==1){
					$(element).find('#dot01').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==2){
					$(element).find('#dot01, #dot02').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==3){ 
					$(element).find('#dot01, #dot02, #dot03').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==4){
					$(element).find('#dot01, #dot02, #dot03, #dot04').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==5){
					$(element).find('#dot01, #dot02, #dot03, #dot04, #dot05').addClass('changeCircleColor');
				}
			
		}	//End link function
		
	}//End return

});//End changeColor Directive