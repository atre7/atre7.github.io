


(function($) {
  // 13:10:20
  var checkVisible = function() {
    if ($('.visibleTriger').visible() || $('.visibleTriger2').visible() || $('.visibleTriger3').visible()) {
      console.log("XXX je vidiet");
      $('.refprosharer').hide();
      return false;
    } else {
      console.log("XXX neni vidiet");
      return true;
    }
  }


  $(document).ready(function() {

    $('.refprosharer').hide();
    console.log("jQ start");


    $(function() {
      //This enabled Smooth-Scroll via Click
      $(".navbar a").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        console.log("hash " + hash);
        scrollTo(hash);
        //Uses Animate to Allow the Smooth Scrolling
        //  $('html, body').animate({
        //    scrollTop: $(hash).offset().top
        //  }, 800, function() {
        //    window.location.hash = hash;

        //  });
      });
      var pixels_per_second = 2000;
      function scrollTo(hash) {
        distance = Math.abs($(document.body).scrollTop() - $(hash).offset().top);
        console.log(distance);
        scroll_duration = (distance / pixels_per_second) * 1000;
        console.log("d " + scroll_duration);
        $(document.body).animate({
          'scrollTop': $(hash).offset().top
        }, scroll_duration);
      }


      $(".animBottom a").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        scrollTo(hash);
        //Uses Animate to Allow the Smooth Scrolling
        //  $('html, body').animate({
        //    scrollTop: $(hash).offset().top
        //  }, 800, function() {
        //    window.location.hash = hash;
        //  });
      });


      //End-SmoothScroll Script
      //Enable #.active move when clicked remove
      //  $(".nav a").on("click", function() {
      //    $(".nav").find(".active").removeClass("active");
      //      $(this).parent().addClass("active");
      //  });
      //End .active move script

    });
    //
    console.log("window height " + $(window).height());
    console.log("doc height " + $(document).height());
    console.log("screen height " + screen.height);

    // print on screen width height
    $('#pWidthWindow').text("windov width : " + $(window).width());
    $('#pHeightWindow').text("window height : " + $(window).height());
    $('#pWidthScreen').text("screen width : " + screen.width);
    $('#pHeightSreen').text("screen height : " + screen.height);
    // on resize
    $(window).resize(function() {
      $('#pWidthWindow').text("windov width : " + $(window).width());
      $('#pHeightWindow').text("window height : " + $(window).height());
      $('#pWidthScreen').text("screen width : " + screen.width);
      $('#pHeightSreen').text("screen height : " + screen.height);
    });

    // end print

    if ($(window).height() < 800) {
      // hide .navbar first
      //  $(".navbar").hide();

      // fade in .navbar
      $(function() {

        $(window).scroll(function() {
          // set distance user needs to scroll before we fadeIn navbar
          //  console.log("srollTop : " + $(this).scrollTop());
          if ($(this).scrollTop() < 100) {
          //  $('.navbar').fadeIn();
          } else {
            //  $('.navbar').fadeOut();
          }
        });
      });
    } else {
      $('.navbar').fadeIn();
    }

    // show navbar onscroll up
    // hide        onscroll down
    var prevPos = 0;
    var moveDown = 0;
    var moveUp = 0;

    $(function() {
      $(window).scroll(function() {
        //
        var actPos = $(this).scrollTop();
        if (actPos < 100) {
          $('.refprosharer').hide();
        }
        if (actPos > prevPos + 25) {
          moveDown = actPos;
          prevPos = actPos;
          console.log("moveDown " + actPos);
          $('.navbar').fadeOut('slow');
          $('.refprosharer').hide('slow');
          $('#myNvb').collapse('hide');
        }
        var actPos = $(this).scrollTop();
        if (actPos < prevPos - 50) {
          if (actPos < prevPos && actPos > 150 && checkVisible()) { // na vrchu ho to ukazovalo 0< (50-35)
            console.log("act " + actPos);
            console.log("prev " + prevPos);
            $('.refprosharer').show('slow');
          }
          moveUp = actPos;
          prevPos = actPos;
          console.log("moveUp " + actPos);
          $('.navbar').fadeIn('slow');

          $('#myNvb').collapse('hide');

        }
        checkVisible();

      });
    });

    $('.collapse a').click(function() {
      console.log("klikol na a ");
      //$('.navbar').fadeOut();
      //$('#menuBtn').removeClass("navbar-toggle");
      $('#myNvb').collapse('hide');
      // $('.navbar-fixed-top').autoHiddingNavbar()
    });





  });
}(jQuery));
