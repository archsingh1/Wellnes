$(document).ready(function(){

	//Change the color of the header nav bar elements on hover
	$(".liNav").hover(function(){$(this).addClass("changeColor");}, 
					  function(){$(this).removeClass("changeColor");
	});//End hover function
		
	$("img.lazy").lazyload(); //Invoke lazy loading
	
	//Add the Footer
	$("#footer").load("Footer.html");//end load function
	
	//Add a sticky navbar on scroll down to the providers' page
	
	// fade in .navbar
	$(function () {
		// hide .navbar first
		$(".stickyNavbar").hide();
	
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('.stickyNavbar').fadeIn().addClass(" navbar-fixed-top");
			} else {
				$('.stickyNavbar').fadeOut();
			}
		});
	});
	//End: Add a sticky navbar on scroll down to the providers' page
	
}); //End Ready Function



    
		

