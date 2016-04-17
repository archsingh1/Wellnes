var providerProfile = angular.module('providerProfile', []);

providerProfile.factory('providerProfileFactory', function($http){
	var providerProfileFactory = {};
	
	providerProfileFactory.getData = function(){
		return $http.get('http://rest.learncode.academy/api/arch/provider_Forms');
	}
	
	return providerProfileFactory ;
}); //End providerProfileFactory

providerProfile.controller('detailsController', function($scope, $http, $window, providerProfileFactory){
	$scope.clearAll = {}; //Use this to reset the values of the form fields
	$scope.hideForm = true;
	$scope.hideEduForm = true;
	$scope.hideCertForm = true;
	$scope.hideCertBtn = true; //hide the add a certification button
	$scope.hideDetailForm = true;
	$scope.hideExpForm = true;
	
	$scope.certCount = 1 ; //Counter for adding certifications
	
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

	
	//Certification Section
	$scope.cert = {} ;
	$scope.certSubmitted = false ; //Prevent multiple form submission
	$scope.certSubmit = function(){
		$http.post('http://rest.learncode.academy/api/arch/Cert_Forms', $scope.cert);
	
		/*
		if(!$scope.certSubmitted){
			$scope.certSubmitted = true;
			if($scope.formCert.$valid){
				$http.post('http://rest.learncode.academy/api/arch/Cert_Forms', $scope.cert);
				console.log('Provider form submitted '  + $scope.cert);
			}//end inner if
			else{
				console.log('Please re-enter data');
				return false;
			}//end else
		}//End outer if
		
		
		return false;	*/
	}; //End certSubmit
	
	$scope.certCancel = function(){
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
				$scope.hideCertBtn  = !($scope.hideCertBtn);
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
 
		}//End link function
		
	}//End return

}); //End glyphDir

//Directive for adding more Certifications
providerProfile.directive('certDir', function(){
	return{
		restrict:"A",
		replace:true,
		link: function(scope, element, attrs){
			$("#addCert").unbind("click");
			$("#addCert").click(function(e){
				scope.certCount = scope.certCount + 1 ; console.log('Certificate Count: ' +scope.certCount);
				e.preventDefault();
				var newCert = '<form name="formCert" id="formCert'+scope.certCount+'" novalidate class="well" style="width:820px; height:auto;"'; 
				newCert += 'ng-hide="hideCertForm" ng-submit="certSubmit()" role="form">';
				//Certification Name
				newCert += '<div class="form-group" style="width:500px;">';
				newCert += '<label class="control-label" for="certName">Certification Name</label>';
				newCert += '<input name="certName" ng-model="cert.certName" required type="text" class="form-control"/>';
				newCert += '</div>';
				//Certification Authority				
				newCert += 	'<div class="form-group" style="width:500px;">';
				newCert += 	'<label class="control-label" for="certAuth">Certification Authority</label>';
				newCert += 	'<input id="certAuth" name="certAuth" ng-model="cert.certAuth" required type="text" class="form-control"/>';
				newCert +=  '</div>';
				//License Number				
				newCert +=  '<div class="form-group" style="width:500px;">';
				newCert +=  '<label class="control-label" for="certLic">License Number</label>';
				newCert +=  '<input id="certLic" name="certLic" ng-model="cert.certLic" type="text" class="form-control"/>';
				newCert +=  '</div>';
				//Certification URL 
				newCert += 	'<div class="form-group" style="width:500px;">';
				newCert += 	'<label class="control-label" for="certUrl">Certification URL</label>';
				newCert += 	'<input id="certUrl" name="certUrl" ng-model="cert.certUrl" type="url" class="form-control"/>';
				newCert +=  '</div>';
				//Dates Attended				
				newCert +=  '<div class="form-group row" ng-class="" style="width:500px; margin-left:5px;">';
				newCert +=  '<label class="control-label" for="">Dates</label>';
				newCert +=  '</div>' ;
				newCert +=  '<select id="certMonth" name="certMonth" ng-model="cert.certMonth" class="form-control col-sm-3" style="width:100px; margin-right:15px;">';
				newCert +=  '<option value="jan">January</option>';
				newCert +=  '<option value="feb">February</option>';
				newCert +=  '<option value="mar">March</option>';
				newCert +=  '<option value="apr">April</option>';
				newCert +=  '<option value="may">May</option>';
				newCert +=  '<option value="jun">June</option>';
				newCert +=  '<option value="jul">July</option>';
				newCert +=  '<option value="aug">August</option>';
				newCert +=  '<option value="sept">September</option>';
				newCert +=  '<option value="oct">October</option>';
				newCert +=  '<option value="nov">November</option>';
				newCert +=  '<option value="dec">December</option>';
				newCert +=  '</select>';
				//Year
				newCert +=  '<select id="certYear" name="certYear" ng-model="cert.certYear" class="form-control col-sm-1" style="width:80px;">';
				newCert +=  '<option value="2015">2015</option>';
				newCert +=  '<option value="2014">2014</option>';
				newCert +=  '<option value="2013">2013</option>';
				newCert +=  '<option value="2012">2012</option>';
				newCert +=  '<option value="2011">2011</option>';
				newCert +=  '<option value="2010">2010</option>';
				newCert +=  '<option value="2009">2009</option>';
				newCert +=  '<option value="2008">2008</option>';
				newCert +=  '<option value="2007">2007</option>';
				newCert +=  '<option value="2006">2006</option>';
				newCert +=  '<option value="2005">2005</option>';
				newCert +=  '</select>';
				newCert +=  '<span class="col-sm-4" style="font-size:1.3em;">-- Present</span> <br />';
				newCert +=  '<div class="checkbox" style="margin-left:5px; margin-top:30px;">';
				newCert +=  '<label>';
				newCert +=  '<input type="checkbox" name="certChkbox">This certificate does not expire';
				newCert +=  '</label>';
				newCert +=  '</div>';
				
				
				newCert +=  '<div margin-left:5px;>';
				newCert +=  '<button class="btn btn-default" style="font-size:1.2em;" type="button" ng-click="certCancel()">Cancel</button> &nbsp;&nbsp;';
				newCert +=  '<button class="btn btn-primary" style="font-size:1.2em;" type="submit">Save</button>';
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				newCert +=  '</div><br />';
				newCert += '</form>';
								
				
				$("#addCertDiv").append(newCert);
			}); //End addCert
		
		}
	}

});//End certDir



















































