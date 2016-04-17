var wellApp = angular.module('wellApp', []);

wellApp.directive('wellDir', function(){
	return{
		restrict:'E',
		require:'lazy',
		template:'<div id="{{activity.id}}" class="col-sm-4 divStyle">' +
				  '<a href="#/{{activity.pageLink}}" class="noDec"><img data-original="{{activity.image}}" class="lazy imgLazy" ng-src="GroupImages/Misc/loading.gif"/>'+
				  '<h4 class="h4Style">{{activity.title}}</h4><hr />'+
				  '<p class="paraStyle"><font color="#000000">{{activity.desc}}</font></p>'+
				 '</a>' +
				 '<div style="position:relative; height:50px; width:368px; margin-left:-15px; margin-bottom:10px; margin-top:-132px;">'+
				 '<span style="color:#000000; font-size:1.3em; ">{{activity.provName}}</span>'
				 +'<a href="#/"><img class="provImgStyle" ng-src="{{activity.provImg}}" /></a></div>'
				 + '</div>',
		replace:true
	} //end return
	
	

}); //End wellDir directive





	

