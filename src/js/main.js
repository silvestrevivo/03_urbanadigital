(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


$(document).ready(function(){
  $('.bxslider1').bxSlider({
    adaptiveHeight: true,
    nextText: '>',
    prevText: '<',
    pagerCustom: '#bx-pager'
  });
  $('.bxslider2').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 300,
    slideMargin: 10,
    ticker: true,
    speed: 12000
  });
  $('.portfolio-link-last').click(function(e){
    e.preventDefault();
  });
});


$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      //$(this).removeClass('hide');
      $(this).addClass("slide");
    }
  });
});
