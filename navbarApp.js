

(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	//$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			console.log("srollTop : "+$(this).scrollTop());
			if ($(this).scrollTop() < 100) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});

});
  }(jQuery));