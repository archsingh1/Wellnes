var userProfile = angular.module('userProfile', []);

userProfile.factory('userProfileFactory', function($http){
	var userProfileFactory={} ;
	
	userProfileFactory.getData = function(){
		return $http.get('http://rest.learncode.academy/api/arch/user_Form');
	}
	
	return userProfileFactory;
});

userProfile.controller('userProfileController', function($scope, $http, $window, userProfileFactory){
	$scope.userForm = {};
	$scope.editUserForm = {} ;
	
	userProfileFactory.getData().success(function(data){
		//	$scope.userForm = data[0]; 
		$scope.userForm.userFirstName = data[0].userFirstName ; 	
		$scope.userForm.userLastName = data[0].userLastName ;	
		$scope.userForm.userPwd = data[0].userPwd;	
		$scope.userForm.userConfPwd = data[0].userConfPwd;
		$scope.userForm.userPic = data[0].userPic;	
		$scope.userForm.userName = data[0].userName;	
		$scope.userForm.userGender = data[0].userGender;	
		$scope.userForm.userLoc = data[0].userLoc;
		$scope.editUserForm = data[0];
		
		console.log($scope.editUserForm);
		//console.log($scope.userForm[0].email);
		console.log($scope.userForm);
	}) ;//End userProfileFactory.getData()
		
	$scope.submitUserForm = function(){
		$scope.userForm = angular.copy($scope.editUserForm);
		
		if($scope.userProfileForm.$invalid){
			console.log("Please re-enter data");
			return;
		}
		else{
			$http.post('http://rest.learncode.academy/api/arch/user_Form', $scope.userForm);
			console.log('submitted' );
		}
	}; //End submitUserForm();
	
	$scope.cancelUserForm = function(){
		console.log("canceled");
		$window.location.reload();
	}; //End cancelUserForm();
	
	console.log($scope);
});//End userProfile Controller

/* The code for the directive has been taken from: http://blog.brunoscopelliti.com/angularjs-directive-to-check-that-passwords-match/*/
userProfile.directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }]);



