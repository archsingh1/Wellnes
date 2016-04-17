var lazyLoadApp = angular.module('lazyLoadApp', []);

//This directive is from: http://eshlox.net/2014/04/06/angularjs-single-page-application-and-lazy-loading-images/
lazyLoadApp.directive('lazy', function($timeout) {
    return {
      restrict: 'C',
      link: function (scope, elm) {
        $timeout(function() {
          $(elm).lazyload({
            effect: 'fadeIn',
            effectspeed: 500,
            'skip_invisible': false
          });//End lazyLoad
        }, 0); //End $timeout
		console.log('Lazy is called');
      }//End link
    };
  }); //End Lazy directive






	

