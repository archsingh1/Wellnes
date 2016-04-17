var providerp01App = angular.module('providerp01App', []);

providerp01App.factory('providerFactory', function($http){
	var providerFactory={} ;
	
	providerFactory.getData = function(){
		return $http.get('dataFiles/provider_p01.js');
	}
	
	return providerFactory;
});

providerp01App.factory('apptTimesFactory', function($http){
	var apptTimesFactory={} ;
	
	apptTimesFactory.getData = function(){
		return $http.get('dataFiles/apptTimes.js');
	}
	
	return apptTimesFactory;
});

providerp01App.controller('providerp01Controller', function($scope, providerFactory, apptTimesFactory){
	$scope.provider; 
	$scope.apptTime ;
	
	providerFactory.getData().success(function(data){
		$scope.provider = data ; 
	}) ;//End providerFactory.getData()
		
	apptTimesFactory.getData().success(function(timeData){
		$scope.apptTime = timeData ; 
		
		console.log($scope.apptTime);
	}) ;//End apptTimesFactory.getData()
	
	//get current date
	$scope.date = new Date();
	$scope.gsDayNames = new Array( 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');
	$scope.date1 = new Date();	
	$scope.dayName1 = $scope.gsDayNames[$scope.date1.getDay()];
	console.log($scope.dayName1);
	$scope.date2 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName2 = $scope.gsDayNames[(new Date($scope.date2)).getDay()];
	
	$scope.date3 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName3 = $scope.gsDayNames[(new Date($scope.date3)).getDay()];
	
	$scope.date4 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName4 = $scope.gsDayNames[(new Date($scope.date4)).getDay()];
	
	$scope.date5 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName5 = $scope.gsDayNames[(new Date($scope.date5)).getDay()];
	
	$scope.date6 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName6 = $scope.gsDayNames[(new Date($scope.date6)).getDay()];
	
	$scope.date7 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName7 = $scope.gsDayNames[(new Date($scope.date7)).getDay()];
	
});//End providerp01Controller

providerp01App.directive('providerpageDir', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope){
				$scope.expProv = true;
				$scope.credProv = true;
				$scope.detailsProv = true;
				
				$scope.showCred = function(event){
					event.preventDefault();
					$scope.credProv= true;
					$scope.expProv = true;
					$scope.detailsProv = true;
				}	//End showImg
				
				$scope.showExp=function(event){
					event.preventDefault();
					$scope.credProv= false;
					$scope.expProv = false;
					$scope.detailsProv = true;
				}
				
				$scope.showDetails=function(event){
					event.preventDefault();
					$scope.credProv= false;
					$scope.expProv = true;
					$scope.detailsProv = false;
				}
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive



providerp01App.directive('mapGeoLocation', function($window){
	return{
		restrict:'A',
		scope:{
			height:'@',
			width:'@'
		},
		template:'<p><span id="status">looking up the location.....</span></p>'+
					'<br /><div id="map"></div>',
		link:function(scope, element, attrs){
			status = angular.element(document.getElementById('status'));
			mapContainer = angular.element(document.getElementById('map'));
			mapContainer.attr('style', 'height:' + scope.height + 'px; width:' + scope.width + 'px');
			$window.navigator.geolocation.getCurrentPosition(mapLocation, geoError);
		
		}//End link function
					
	
	}//End return


});//End mapGeoLocation Directive















