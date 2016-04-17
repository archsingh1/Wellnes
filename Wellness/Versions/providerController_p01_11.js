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
		
		//console.log($scope.apptTime);
	}) ;//End apptTimesFactory.getData()
	
	//get current date
	$scope.date = new Date();
	$scope.gsDayNames = new Array( 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');
	$scope.daydateInfos = [];
	$scope.daydateInfo1={};
	$scope.daydateInfo2={};
	$scope.daydateInfo3={};
	$scope.daydateInfo4={};
	$scope.daydateInfo5={};
	$scope.daydateInfo6={};
	$scope.daydateInfo7={};
	$scope.date1 = new Date();
	
	$scope.dayName1 = $scope.gsDayNames[$scope.date1.getDay()];
	console.log($scope.dayName1);
	$scope.daydateInfo1.day=$scope.dayName1;
	$scope.daydateInfo1.date=$scope.date1;
	$scope.daydateInfos.push($scope.daydateInfo1);
	
	$scope.date2 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName2 = $scope.gsDayNames[(new Date($scope.date2)).getDay()];
	$scope.daydateInfo2.day=$scope.dayName2;
	$scope.daydateInfo2.date=$scope.date2;
	$scope.daydateInfos.push($scope.daydateInfo2);
	
	$scope.date3 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName3 = $scope.gsDayNames[(new Date($scope.date3)).getDay()];
	$scope.daydateInfo3.day=$scope.dayName3;
	$scope.daydateInfo3.date=$scope.date3;
	$scope.daydateInfos.push($scope.daydateInfo3);
	
	$scope.date4 = $scope.date.setDate($scope.date.getDate()+1);	
	$scope.dayName4 = $scope.gsDayNames[(new Date($scope.date4)).getDay()];
	$scope.daydateInfo4.day=$scope.dayName4;
	$scope.daydateInfo4.date=$scope.date4;
	$scope.daydateInfos.push($scope.daydateInfo4);
	
	$scope.date5 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName5 = $scope.gsDayNames[(new Date($scope.date5)).getDay()];
	$scope.daydateInfo5.day=$scope.dayName5;
	$scope.daydateInfo5.date=$scope.date5;
	$scope.daydateInfos.push($scope.daydateInfo5);

	$scope.date6 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName6 = $scope.gsDayNames[(new Date($scope.date6)).getDay()];
	$scope.daydateInfo6.day=$scope.dayName6;
	$scope.daydateInfo6.date=$scope.date6;
	$scope.daydateInfos.push($scope.daydateInfo6);

	$scope.date7 = $scope.date.setDate($scope.date.getDate()+1);
	$scope.dayName7 = $scope.gsDayNames[(new Date($scope.date7)).getDay()];
	$scope.daydateInfo7.day=$scope.dayName7;
	$scope.daydateInfo7.date=$scope.date7;
	$scope.daydateInfos.push($scope.daydateInfo7);	
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

providerp01App.directive('tableAttr', function(){
	return{
		restrict:'E',
		template:'<table><th class="{{dayInfo.day}}" ng-repeat="dayInfo in daydateInfos track by $index">{{dayInfo.day}} {{dayInfo.date|date:"MM/dd"}}</th>'	+
		'<tr ng-repeat="time in apptTime track by $index"><td class="{{dayInfo.day}}"><a href="#" >{{time}}</a></td></tr>'+
		'</table>',
		replace:true,
		
		
	
	}//End return


}); //End tableAttr Directive















