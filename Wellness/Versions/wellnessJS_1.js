$(document).ready(function(){

	//Change the color of the header nav bar elements on hover
	$(".liNav").hover(function(){$(this).addClass("changeColor");}, 
					  function(){$(this).removeClass("changeColor");
	});//End hover function
		
	$("img.lazy").lazyload(); //Invoke lazy loading
	
});


