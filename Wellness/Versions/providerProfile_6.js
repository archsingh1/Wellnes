var providerProfile = angular.module('providerProfile', []);

providerProfile.factory('providerProfileFactory', function($http){
	var providerProfileFactory = {};
	
	providerProfileFactory.getData = function(){
		return $http.get('http://rest.learncode.academy/api/arch/provider_Forms');
	}
	
	return providerProfileFactory ;
}); //End providerProfileFactory

providerProfile.controller('detailsController', function($scope, $http, $window, providerProfileFactory){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	$scope.hideForm=true;
	$scope.hideEduForm=true;
	$scope.hideCertForm=true;
	$scope.hideDetailForm =true;
	$scope.hideExpForm =true;
	
	//About Section
	$scope.about = {};
	$scope.aboutSubmitted = false; //This variable is used to prevent multiple form submission. The code is from: http://stackoverflow.com/questions/926816/how-to-prevent-form-from-submitting-multiple-times-from-client-side
	
	/*providerProfileFactory.getData().success(function(data){ 
		$scope.about.firstName = data[0].firstName ; 	
		$scope.about.lastName = data[0].lastName ;	
		$scope.about.emailPD = data[0].emailPD ;
		$scope.about.pwdPD = data[0].pwdPD;	
		$scope.about.confpwdPD = data[0].confpwdPD;
		$scope.about.photoPD = data[0].photoPD;	
		$scope.about.streetPD = data[0].streetPD;	
		$scope.about.aptPD = data[0].aptPD;	
		$scope.about.cityPD = data[0].cityPD;
		$scope.about.zipPD = data[0].zipPD;
		
		console.log($scope.about);
	}) ; */
	
	//End providerProfileFactory.getData()
	
	$scope.aboutSubmit = function(){
		if(!$scope.aboutSubmitted){
			$scope.aboutSubmitted = true;
			if($scope.formAbout.$valid){
				$http.post('http://rest.learncode.academy/api/arch/provider_Forms', $scope.about);
				console.log('Provider form submitted '  + $scope.about);
			}//end inner if
			else{
				console.log('Please re-enter data');
				return false;
			}//end else
		}//End outer if
		
		return false;
	}; //End aboutSubmit
		
	$scope.cancelFormAbout = function(){
		return false;
		console.log('canceled');
		$window.location.reload();
	};	

});//End detailsController


providerProfile.directive('glyphDir', function(){
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
			
			$scope.certSec = function(){
				$scope.hideCertForm = !($scope.hideCertForm) ; 
			}
			
			$scope.detailSec = function(){
				$scope.hideDetailForm = !($scope.hideDetailForm) ; 
			}
			
			$scope.expSec = function(){
				$scope.hideExpForm = !($scope.hideExpForm) ; 
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
				$("#profileMain").css('height', 'auto');
				
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
				$("#profileMain").css('height', 'auto');
				
			 }); //end eduGlyph click function
			 
			 //For Certification Section
			  $("#certGlyph").click(function(e){ 
				e.preventDefault();
			//change the plus or minus glyphicons on the Certification form
				if(scope.hideCertForm == false){
					$(this).find("span").removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
				else if(scope.hideCertForm == true){
					$(this).find("span").removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				$("#profileMain").css('height', 'auto');
				
			 }); //end certGlyph click function
			 
			 //For Details Section
			 $("#detailGlyph").click(function(e){ 
				e.preventDefault();
			//change the plus or minus glyphicons on the Certification form
				if(scope.hideDetailForm == false){
					$(this).find("span").removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
				else if(scope.hideDetailForm == true){
					$(this).find("span").removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				$("#profileMain").css('height', 'auto');
				
			 }); //end detailGlyph click function
			 			 
			 //For Work Experience Section
			  $("#expGlyph").click(function(e){ 
				e.preventDefault();
			//change the plus or minus glyphicons on the Work Experience form
				if(scope.hideExpForm == false){
					$(this).find("span").removeClass('glyphicon-plus').addClass('glyphicon-minus');
				}
				else if(scope.hideExpForm == true){
					$(this).find("span").removeClass('glyphicon-minus').addClass('glyphicon-plus');
				}
				$("#profileMain").css('height', 'auto');
				
			 }); //end expGlyph click function
						 
			 //Dynamically add college/university in the Education Section
			  $("#addCollege").unbind('click'); //prevent multiple additions on click
			  $("#addCollege").click(function(e){
				e.preventDefault();
				//Check providerProfile_11.js in the Version's folder for dynamically adding 
				//form fields to this section
				console.log('Working');
			  }); //End addCollege
			  
		}//End link function
		
	}//End return

}); //End cancelDir


providerProfile.directive('certDir', function(){
	return{
		restrict:"A",
		replace:true,
		link: function(scope, element, attrs){
			$("#addCert").unbind("click");
			$("#addCert").click(function(e){
				e.preventDefault();
				var newCert ='<div ng-submit="eduSubmit()">';
				newCert += '<div class="form-group" style="width:500px;">';
				newCert += '<label class="control-label" for="eduSchool">certification CHECKING</label>';
				newCert += '<input ng-model="edu.school" required type="text" class="form-control" /></div>';
				//console.log(scope.edu.school);
				$("#formCert").prepend(newCert);
						
			}); //End addCert
		
		}
	}

});//End certDir








