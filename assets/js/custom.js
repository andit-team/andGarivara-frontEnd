(function ($) {
  "use strict"; // Start of use strict

// Preloader Start
//   $(window).load(function () {
//     $('.loader').fadeOut();
//     $('#preloader')
//         .delay(350)
//         .fadeOut('slow');
//     $('body')
//         .delay(350)
//   });
// Preloader End

/// MAIN MENU SCRIPT START

  // mobile Menu area
  $('nav.mobile_menu').meanmenu({
    meanScreenWidth: '991'
  });
  $('nav.mean-nav li > a:first-child').on('click', function () {
    $('a.meanmenu-reveal').click();
  });

  // mobile Menu area

  // MAIN MENU SCRIPT END

    // Sticky Menu Header JS Start

    // Collapse Navbar
    // var navbarCollapse = function() {
    //     if ($("#mainNav").offset().top > 100) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         $("#mainNav").removeClass("navbar-shrink");
    //     }
    // };
    // Collapse now if page is not at top
    // navbarCollapse();

    // Collapse the navbar when page is scrolled
    // $(window).scroll(navbarCollapse);

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.sticky-menu-header').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#new-sticky-menu',
        offset: 54
    });
    // Sticky Menu Header JS End

    //Accordion Box
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.acc-btn', function() {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }

  // Tooltip JS
    $('[data-toggle="tooltip"]').tooltip();

    // Datepicker JS Start
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepicker2').datepicker({
        uiLibrary: 'bootstrap4'
    });
    // Datepicker JS End

    // Select Time Picker JS Start
    $('#time-dropdown').dropdown();
    $('#time-dropdown2').dropdown();
    // Select Time Picker JS End

    // Range Slider JS Start
    var slider = document.getElementById("myRange");
    var output = document.getElementById("range-value");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    };
    // Range Slider JS End

  //----- Initialize WOW JS ------
  new WOW().init();

// Veno Box
  $('.venobox').venobox();

  // Scroll To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
  // Scroll To Top

  //  Disable copy

  // $('body').bind('cut copy paste', function (e) {
  //   e.preventDefault();
  // });
  //
  // $("body").on("contextmenu",function(e){
  //   return false;
  // });


})(jQuery); // End of use strict