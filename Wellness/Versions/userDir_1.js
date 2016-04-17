var userDir = angular.module('userDir', []);

userDir.directive('userNav', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope){
				$scope.userWall = true;
				$scope.userAppt = true;
				$scope.userMail = true;
				$scope.userReview = true;
				
				$scope.showWall=function(event){
					event.preventDefault();
					$scope.userWall = true;
					$scope.userAppt = true;
					$scope.userMail = true;
					$scope.userReview = true;
				} //End showWall
				
				$scope.showAppt = function(event){
					$scope.userWall = false;
					$scope.userAppt = true;
					$scope.userMail = true;
					$scope.userReview = true;
				}	//End showAppt
				
				$scope.showMail=function(event){
					event.preventDefault();
					$scope.userWall = false;
					$scope.userAppt = true;
					$scope.userMail = false;
					$scope.userReview = true;
				} //End showMail
				
				$scope.showReview=function(event){
					event.preventDefault();
					$scope.userWall = false;
					$scope.userAppt = true;
					$scope.userMail = true;
					$scope.userReview = false;
				} //End showReview
				
				
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive

