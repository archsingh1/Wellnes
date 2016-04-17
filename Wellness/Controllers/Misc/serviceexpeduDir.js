var serviceexpeduDir = angular.module('serviceexpeduDir', []);

serviceexpeduDir.directive('serviceexpedu', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope){
				$scope.serviceProv = true;
				$scope.expProv = true;
				$scope.eduProv = true;
				
				$scope.showservice=function(event){
					event.preventDefault();
					$scope.eduProv= true;
					$scope.expProv = true;
					$scope.serviceProv = true;
				} //End showservice
				
				$scope.showEdu = function(event){
					event.preventDefault();
					$scope.eduProv= false;
					$scope.expProv = true;
					$scope.serviceProv = false;
				}	//End showEdu
				
				$scope.showExp=function(event){
					event.preventDefault();
					$scope.eduProv= true;
					$scope.expProv = false;
					$scope.serviceProv = false;
				} //End showExp
				
				
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive

