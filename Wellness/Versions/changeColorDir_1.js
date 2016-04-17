var changeColorDir = angular.module('changeColorDir', []);

changeColorDir.directive('changeColor', function(){
	return{
		restrict:'A',
		replace:true,
		scope:{
			rating:'@'
		},
		link:function(scope, element, attrs){
				scope.ratingNum = Number(scope.rating); console.log("RatingNum: " + scope.ratingNum);
				
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
					console.log("Rating is 5");
				}
			
		}	//End link function
		
	}//End return

});//End changeColor Directive