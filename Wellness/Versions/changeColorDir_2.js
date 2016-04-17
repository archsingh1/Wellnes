var changeColorDir = angular.module('changeColorDir', []);

changeColorDir.directive('changeColor', function($timeout){
	return{
		restrict:'A',
		replace:true,
		scope:{
			rating:'@'
		},
		link:function(scope, element, attrs){
				var delayDir = function(){
					scope.ratingNum = Number(scope.rating); console.log("RatingNum: " + scope.ratingNum);
					
					if(scope.ratingNum ==1){
						$(element).find('#dot01').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
					}
					else if(scope.ratingNum ==2){
						$(element).find('#dot01, #dot02').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
					}
					else if(scope.ratingNum ==3){ 
						$(element).find('#dot01, #dot02, #dot03').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
					}
					else if(scope.ratingNum ==4){
						$(element).find('#dot01, #dot02, #dot03, #dot04').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
					}
					else if(scope.ratingNum ==5){
						$(element).find('#dot01, #dot02, #dot03, #dot04, #dot05').removeClass('glyphicon-star-empty').addClass('glyphicon-star'); 
						console.log("Rating is 5");
					}
				}//End delayDir
				$timeout(delayDir, 500); //This is to prevent the directive from loading before the data
		}	//End link function
		
	}//End return

});//End changeColor Directive