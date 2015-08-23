

(function ($) {
  $(document).ready(function(){
    console.log("window height " +$(window).height());
    console.log("doc height "+ $(document).height());
    console.log("screen height " + screen.height);
	
if($(window).height() < 800){
	// hide .navbar first
	$(".navbar").hide();
	
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
}
else{
	$('.navbar').fadeIn();
}

$('.collapse a').click(function(){
	console.log("klikol na a ");
	//$('.navbar').fadeOut();
	//$('#menuBtn').removeClass("navbar-toggle");
	$('#myNvb').collapse('hide');
	// $('.navbar-fixed-top').autoHiddingNavbar()  
});

});
  }(jQuery));