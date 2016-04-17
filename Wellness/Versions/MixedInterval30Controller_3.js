var mixedInterval30App = angular.module('mixedInterval30App', ['fitnessProviderFactory']);

mixedInterval30App.controller('MI30Controller', function($scope, fpFactory){
	fpFactory.getData().success(function(data){
		$scope.providers = [] ;
		for(var i=0;i<data.length;i++){
			if(data[i].MixedInterval30 == 'Y'){		
				$scope.providers.push(data[i]) ; 
			}//end if
		}//end for
		
		$scope.providers.sort(function(a, b){
			 var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
			 if (nameA < nameB) //sort string ascending
			  return -1 
			 if (nameA > nameB)
			  return 1
			 return 0 //default return value (no sorting)
		});//End sort
	}) ;//End fpFactory.getData()

});//End MI30Controller

mixedInterval30App.directive('mi30Dir', function(){
	return{
			restrict:'A',
			link: function(scope, element, attrs){
				$(element).hover(
							function(){
								$(element).find("img").hide();
								$(element).find("p").css('display', 'block');
								
							},
						function(){
							$(element).find("img").show();
							$(element).find("p").css('display', 'none');
						}
				);//End Hover
			}
		
		}//end return
	
}); //End mi30Dir directive

mixedInterval30App.directive('changecolor',function(){
	return{
		restrict:'A',
		replace:true,
		scope:{
			rating:'@'
		},
		link:function(scope, element, attrs){
				scope.ratingNum = Number(scope.rating); //console.log(scope.ratingNum);
				
				if(scope.ratingNum ==1){
					$(element).find('#dot01').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==2){
					$(element).find('#dot01, #dot02').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==3){ 
					$(element).find('#dot01, #dot02, #dot03').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==4){
					$(element).find('#dot01, #dot02, #dot03, #dot04').addClass('changeCircleColor');
				}
				else if(scope.ratingNum ==5){
					$(element).find('#dot01, #dot02, #dot03, #dot04, #dot05').addClass('changeCircleColor');
				}
			
		}	//End link function
		
	}//End return

});//End changeColor Directive