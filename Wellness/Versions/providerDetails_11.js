var providerDetails = angular.module('providerDetails', []);

providerDetails.controller('detailsController', function($scope){
	$scope.clearAll={}; //Use this to reset the values of the form fields
	$scope.hideForm=true;
	$scope.hideEduForm=true;
	$scope.about={
		email:"",
		password:""
	};
	$scope.edu = {
		school:[],
		startDt:"",
		endDt:"",
		degree:"",
		fos:""
	};
		
	//Form Submission
	$scope.disabled = true; // Submission is disabled if the form is invalid or unfilled
	$scope.aboutSubmit = function(){
		alert("Form Submitted \n Email: " + $scope.about.email +
			'\nPassword: ' + $scope.about.password);
	}
	
	$scope.eduSubmit = function(){
		alert("Form Submitted");
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
				$scope.edu.school = [];
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
			 }); //end eduGlyph click function
			 
			 //Dynamically add college/university in the Education Section
			  $("#addCollege").unbind("click");
			 $("#addCollege").click(function(e){
				e.preventDefault();
				var newCollege ='<div ng-submit="eduSubmit()" cancel-dir>';
				newCollege += '<div class="form-group" style="width:500px;">';
				newCollege += '<label class="control-label" for="eduSchool">School</label>';
				newCollege += '<input ng-model="edu.school" required type="text" class="form-control" /></div>';
				console.log(scope.edu.school);
				
				//Dates Attended
				newCollege += '<div class="form-group row" ng-class="" style="width:500px; margin-left:5px;">' ;
				newCollege += '<label class="control-label" for="">Dates Attended</label>';
				newCollege += '<div>'; 
				//Start Date
				newCollege += '<select id="" name="edustartDt" ng-model="edu.startDt" class="form-control col-sm-2" style="width:80px;">';
				newCollege += '<option value="2015">2015</option>';
				newCollege += '<option value="2014">2014</option>';
				newCollege += '<option value="2013">2013</option>';
				newCollege += '<option value="2012">2012</option>';
				newCollege += '<option value="2011">2011</option>';
				newCollege += '<option value="2010">2010</option>';
				newCollege += '<option value="2008">2008</option>';
				newCollege += '<option value="2009">2009</option>';
				newCollege += '<option value="2007">2007</option>';
				newCollege += '<option value="2006">2006</option>';
				newCollege += '<option value="2005">2005</option>';
				newCollege += '</select>';
				
				//End Date
				newCollege += '<span class="col-sm-2" style="margin-right:-30px;">__</span>';
				newCollege += '<select id="" name="" ng-model="edu.endDt" class="form-control col-sm-1" style="width:80px;">';
				newCollege += '<option value="2017">2017</option>';
				newCollege += '<option value="2016">2016</option>';
				newCollege += '<option value="2015">2015</option>';
				newCollege += '<option value="2014">2014</option>';
				newCollege += '<option value="2013">2013</option>';
				newCollege += '<option value="2012">2012</option>';
				newCollege += '<option value="2011">2011</option>';
				newCollege += '<option value="2010">2010</option>';
				newCollege += '<option value="2009">2009</option>';
				newCollege += '<option value="2008">2008</option>';
				newCollege += '<option value="2007">2007</option>';
				newCollege += '</select></div></div>';
				
				//Degree
				newCollege += '<div class="form-group" style="width:500px;">';
				newCollege += '<label class="control-label" for="">Degree</label>';
				newCollege += '<select id="" name="" ng-model="edu.degree" class="form-control">';
				newCollege += '<option selected value="1">High School</option>';
				newCollege += "<option value='2'>Associate's Degree</option>";
				newCollege += "<option value='3'>Bachelor's Degree</option>";
				newCollege += "<option value='4'>Master's Degree</option>";
				newCollege += '<option value="5">Master of Business Administration (M.B.A)</option>';
				newCollege += '<option value="6">Doctor of Medicine (M.D.)</option>';
				newCollege += '<option value="7">Doctor of Philosophy (Ph.D.)</option>';
				newCollege += '</select></div> ';
				
				// Field of Study
				newCollege += '<div class="form-group" required ng-class="" style="width:500px;">';
				newCollege += '<label class="control-label">Field of Study</label>';
				newCollege += '<input id="" name="" ng-model="edu.fos" type="text" class="form-control"/></div>'; 
				
				//Add Buttons 
				newCollege += '<div style="margin-left:5px;">';
				newCollege += '<button class="btn btn-default" style="font-size:1.2em;" type="button" ng-click="eduCancel()">Cancel</button> &nbsp;&nbsp;';
				newCollege += '<button class="btn btn-primary" style="font-size:1.2em;" type="submit" ng-disabled="formEdu.$invalid || formEdu.$pristine">Save</button>';
				newCollege += '</div> <br /></div><hr /></div>';
				
				
				
				
				
				
				
				
				
				
				
				$("#college1").prepend(newCollege);
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			 }); //End addCollege
			 
			 
			 
			 
			 
			 
			 
		}//End link function
		
	}//End return

}); //End cancelDir











