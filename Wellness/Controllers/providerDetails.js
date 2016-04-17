var providerDetails = angular.module('providerDetails', []);

providerDetails.controller('detailsController', function($scope){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	$scope.hideForm=true;
	$scope.hideEduForm=true;
	$scope.hideCertForm=true;
	$scope.hideDetailForm =true;
	$scope.hideExpForm =true;
	
	//About
	$scope.about={
		email:"",
		password:""
	};
	//Certification
	$scope.cert={
		certName: "",
		certAuth: "",
		certLic: "",
		certUrl:"",
		certMonth:"",
		certYear:""
	};
	//Details
	$scope.detail= "";
	$scope.detail.summary = "";
	
	//Work Experience
	$scope.exp={
		companyName : "",
		title: "",
		location:"",
		durStartmnth:"",
		durStartyr:"",
		durEndmnth:'',
		durEndyr:''	
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
	
	$scope.certSubmit = function(){
		alert("Form Submitted \n Certification: " + $scope.cert.certName +
			'\n Institution: ' + $scope.cert.certAuth);
	}
	
	$scope.detailSubmit = function(){
		alert("Form Submitted \n Details: " + $scope.detail.summary);
	}
	
	$scope.expSubmit = function(){
		alert("Form Submitted \n Details: " + $scope.exp.companyName);
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
			
			$scope.certCancel = function(){
			//reset the values of the education form on cancel
				$scope.cert.certName = "";
				$scope.cert.certAuth = "";
				$scope.cert.certLic = "";
				$scope.cert.certUrl = "";
				$scope.cert.certMonth = "";
				$scope.cert.certYear = "";
			}
			
			//reset the values of the detail form on cancel
			$scope.detailCancel = function(){
				$scope.detail.summary = "";
			}
			
			//reset the values of the work experience form on cancel
			$scope.expCancel = function(){
				$scope.exp.companyName = "";
				$scope.exp.title = "";
				$scope.exp.location = "";
				$scope.exp.durStartmnth = "";
				$scope.exp.durStartyr = "";
				$scope.exp.durEndmnth = '';
				$scope.exp.durEndyr = ''	;
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
				//Check providerDetails_11.js in the Version's folder for dynamically adding 
				//form fields to this section
				console.log('Working');
			  }); //End addCollege
			  
		}//End link function
		
	}//End return

}); //End cancelDir











