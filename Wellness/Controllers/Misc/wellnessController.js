var wellApp = angular.module('wellApp', []);

wellApp.directive('wellDir', function(){
	return{
		restrict:'E',
		require:'lazy',
		template:'<div id="{{activity.id}}" class="col-sm-4 divStyle">' +
				  '<a href="#/Fitness/{{activity.pageLink}}" class="noDec"><img data-original="{{activity.image}}" class="lazy imgLazy" ng-src="GroupImages/Misc/loading.gif"/>'+
				  '<h4 class="h4Style">{{activity.title}}</h4><hr />'+
				  '<p class="paraStyle"><font color="#000000">{{activity.desc}}</font></p>'+
				 '</a>' +
				 '<div class="provDiv">'+
				 '<a href="#/"><span class="provNameStyle">{{activity.provName}}</span>'
				 +'<img class="provImgStyle" ng-src="{{activity.provImg}}" /></a></div>'
				 + '</div>',
		replace:true
	} //end return
	
	

}); //End wellDir directive





	

