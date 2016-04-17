var providerApp = angular.module('providerApp', ['changeColorDir']);

providerApp.factory('p01Factory', function($http){
	var p01Factory={} ;
	
	p01Factory.getData = function(){
		return $http.get('dataFiles/providers.js');
	}
	
	return p01Factory;
});

providerApp.controller('providerController', function($scope, p01Factory){
	p01Factory.getData().success(function(data){
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
	}) ;//End p01Factory.getData()

});//End providerController

providerApp.directive('providerDir', function(){
	return{
			restrict:'A',
			link: function(scope, element, attrs){
				$(element).hover(
							function(){
								$(element).find("img").hide();
								$(element).find("p").css('display', 'block');
								
							},
						function(){
							$(element).find("img").show();
							$(element).find("p").css('display', 'none');
						}
				);//End Hover
			}
		
		}//end return
	
}); //End provider directive

