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

    //Slider
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

    //Empty Link Portfolio
    $('.portfolio-link-last').click(function(e){
      e.preventDefault();
    });

    //BounceInUp animation Service Section
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
    });

})(jQuery); // End of use strict


$(document).ready(function(){
  //Portfolio
  $('.portfolio-link1').click(function(){
    var a = $(this);
    $.ajax({
      url: '/dist/img/portfolio/projects.json',
      method: 'GET',
      dataType: 'json',
    }).then(function(response) {
      var identification = a.data('id');
      $.each(response,function(key){
        var modal = $('#portfolioModal');
        if(identification === response[key]['id']){
          modal.find('h2').text(response[key]['title']);
          modal.find('.item-intro').text(response[key]['subtitle']);
          modal.find('.img-responsive').attr('src', response[key]['image']);
          modal.find('.description-project').text(response[key]['body']);
        }
      });
    });
  });
  //Photography
  $('.portfolio-link2').click(function(){
    var a = $(this);
    $.ajax({
      url: '/dist/img/photography/fotos.json',
      method: 'GET',
      dataType: 'json',
    }).then(function(response) {
      var identification = a.data('id');
      $.each(response,function(key){
        var modal = $('#portfolioModal');
        if(identification === response[key]['id']){
          modal.find('h2').text(response[key]['title']);
          modal.find('.item-intro').text(response[key]['subtitle']);
          modal.find('.img-responsive').attr('src', response[key]['image']);
          modal.find('.description-project').text(response[key]['body']);
        }
      });
    });
  });

});
