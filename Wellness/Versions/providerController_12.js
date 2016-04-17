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
		var countDetox = 0;
		for(var j=0;j<data.length;j++){
			if(data[j].DetoxDiet == 'Y'){
				countDetox++ ;
			}
		}
		
		for(var i=0;i<countDetox;i++){
			if(data[i].DetoxDiet == 'Y'){		
				$scope.providers[i] = data[i] ; 
			}//end if
		}//end for
	
		console.log($scope.providers);
	
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
		
app.directive('changeColor', function(){
	return{
		restrict:'A',
		replace:true,
		link:function(scope, element, attrs){
			var i ;
			for(i=0; i<5; i++){
				if(scope.rating ==1){
					$('#dot01').addClass('changeCircleColor');
					console.log('change color');
				}
				if(scope.rating ==2){
					$('#dot01, #dot02').addClass('changeCircleColor');
					console.log('change color');
				}
				if(scope.rating ==3){
					$('#dot01, #dot02, #dot03').addClass('changeCircleColor');
					console.log('change color');
				}
				if(scope.rating ==4){
					$('#dot01, #dot02, #dot03, #dot04').addClass('changeCircleColor');
					console.log('change color');
				}
				if(scope.rating ==5){
					$('#dot01, #dot02, #dot03, #dot04, #dot05').addClass('changeCircleColor');
					console.log('change color');
				}
			}//End for
		}//end link function
		
	}

});//End changeColor Directive
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}); //End provider directive





	

