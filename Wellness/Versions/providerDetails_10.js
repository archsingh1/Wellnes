var providerDetails = angular.module('providerDetails', []);

providerDetails.controller('detailsController', function($scope){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	$scope.hideForm=true;
	$scope.hideEduForm=true;
	$scope.about={
		email:"",
		password:""
	};
	
	//Form Submission
	$scope.disabled = true; // Submission is disabled if the form is invalid or unfilled
	$scope.aboutSubmit = function(){
		alert("Form Submitted \n Email: " + $scope.about.email +
			'\nPassword: ' + $scope.about.password);
	}
	
	$scope.eduSubmit = function(){
		alert("Form Submitted \n School: " + $scope.edu.school +
			'\n Field of Study: ' + $scope.edu.fos);
	}
	
	
});//End detailsController

providerDetails.directive('cancelDir', function(){
	return{
		restrict:"A",
		replace:true,
		controller:function($scope){
			//reset the values of the form on cancel
			$scope.cancellAll=function(){
				$scope.about.email = "" ;
				$scope.about.password = "" ;
				$scope.formAbout.$setPristine(); //removes the glyphicons on cancel
			}
			
			$scope.eduCancel = function(){
			//reset the values of the education form on cancel
				$scope.edu.school = "";
				$scope.edu.startDt = "";
				$scope.edu.endDt = "";
				$scope.edu.degree = "";
				$scope.edu.fos = "";
			}
		}//End Controller function
		
	}//End return

}); //End cancelDir

providerDetails.directive('glyphDir', function(){
	return{
		restrict:"A",
		replace:true,
		controller:function($scope){
			$scope.aboutSec = function(){
				$scope.hideForm = !($scope.hideForm) ; //hide or show the forms
			}
			
			$scope.eduSec = function(){
				$scope.hideEduForm = !($scope.hideEduForm) ; 
			}
			
		}, //End Controller function
		link:function(scope, element, attrs){
			//For the About Section
			$("#aboutGlyph").click(function(e){ 
				e.preventDefault();
			//change the plus or minus glyphicons on the forms
				if(scope.hideForm == false){
					$(this).find("span").removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
				else if(scope.hideForm == true){
					$(this).find("span").removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
			 }); //end aboutGlyph click function
			 
			 //For the Education Section
			 $("#eduGlyph").click(function(e){ 
				e.preventDefault();
			//change the plus or minus glyphicons on the forms
				if(scope.hideEduForm == false){
					$(this).find("span").removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
				else if(scope.hideEduForm == true){
					$(this).find("span").removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				//console.log(this);
			 }); //end eduGlyph click function
			 
			 //Dynamically add college/university in the Education Section
			 $("#addCollege").unbind("click");
			 $("#addCollege").click(function(e){
				e.preventDefault();
				var newCollege = '<div class="form-group" style="width:500px;">';
				newCollege += '<label class="control-label" for="eduSchool">School</label>';
				newCollege += '<input id="eduSchool" name="eduSchool" ng-model="edu.school" required type="text" class="form-control" /></div>';
				
				$("#college1").append(newCollege);
				
				console.log(newCollege);
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			 }); //End addCollege
			 
			 
			 
			 
			 
			 
			 
		}//End link function
		
	}//End return

}); //End cancelDir











