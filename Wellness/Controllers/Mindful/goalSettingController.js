var goalSettingApp = angular.module('goalSettingApp', ['mindfulProviderFactory', 'lazyLoadApp', 'hideImgDir',  'changeColorDir']);

goalSettingApp.controller('goalSettingController', function($scope, mfFactory){
	mfFactory.getData().success(function(data){
		$scope.providers = [] ;
		for(var i=0;i<data.length;i++){
			if(data[i].goalSetting == 'Y'){		
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
	}) ;//End mfFactory.getData()

});//End goalSettingController



