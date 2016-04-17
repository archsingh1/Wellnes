var aboutexpeduDir = angular.module('aboutexpeduDir', []);

aboutexpeduDir.directive('aboutexpedu', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope){
				$scope.aboutProv = true;
				$scope.expProv = true;
				$scope.eduProv = true;
				
				$scope.showAbout=function(event){
					event.preventDefault();
					$scope.eduProv= true;
					$scope.expProv = true;
					$scope.aboutProv = true;
				} //End showAbout
				
				$scope.showEdu = function(event){
					event.preventDefault();
					$scope.eduProv= false;
					$scope.expProv = true;
					$scope.aboutProv = false;
				}	//End showEdu
				
				$scope.showExp=function(event){
					event.preventDefault();
					$scope.eduProv= true;
					$scope.expProv = false;
					$scope.aboutProv = false;
				} //End showExp
				
				
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive

