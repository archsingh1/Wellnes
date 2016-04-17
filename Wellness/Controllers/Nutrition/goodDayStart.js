var goodDayStartApp = angular.module('goodDayStartApp', ['nutritionProviderFactory', 'lazyLoadApp', 'hideImgDir',  'changeColorDir']);

goodDayStartApp.controller('goodDayStartController', function($scope, npFactory){
	npFactory.getData().success(function(data){
		$scope.providers = [] ;
		for(var i=0;i<data.length;i++){
			if(data[i].goodDayStart == 'Y'){		
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
	}) ;//End npFactory.getData()

});//End goodDayStartController



