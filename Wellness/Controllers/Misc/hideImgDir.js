var hideImgDir = angular.module('hideImgDir', []);

hideImgDir.directive('hideImg', function(){
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
	
}); //End hideImg directive