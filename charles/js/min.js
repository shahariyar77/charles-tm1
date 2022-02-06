$(document).ready(function(){
     // -------------------- Navigation Scroll
     $(window).on('scroll', function (){   
        var sticky = $('.secound-header, .offcanvas-manu'),
        scroll = $(window).scrollTop();
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

      });
    // featurea slider
    $(".feature-carousel").owlCarousel({
        items:3,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed:1200,
        loop:true,
        autoplayTimeout:4000,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
    
            }
        }

    });
    // testmonial slider
    $(".testmoanil-carousel").owlCarousel({
        items:1,
        nav:false,
        dots:true,
        autoplay:true,
        loop:true,
        autoplayTimeout:4000,
        smartSpeed:1200,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        },
        

    });
    // counter plugin
    var timer = $('.timer');
    if(timer.length) {
        timer.appear(function () {
          timer.countTo();
      })
    }
    // partner slider
    $(".partner-slider").owlCarousel({
        items:5,
        nav:false,
        dots:true,
        autoplay:true,
        loop:true,
        autoplayTimeout:4000,
        smartSpeed:1200,
        margin:0,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        },

    });
    // offcanvas manu
    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close").on("click", function(){
        $(".offcanvas-manu").removeClass(".active");  
      });







    
  });