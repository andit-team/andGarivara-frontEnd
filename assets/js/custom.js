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

    // Add active class to the current button (highlight it)
    // var header = document.getElementById("new-sticky-menu");
    // var btns = header.getElementsByClassName("js-scroll-trigger");
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }

    // // Add smooth scrolling to all links
    // $("a").on('click', function(event) {
    //
    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //         // Prevent default anchor click behavior
    //         event.preventDefault();
    //
    //         // Store hash
    //         var hash = this.hash;
    //
    //         // Using jQuery's animate() method to add smooth page scroll
    //         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function(){
    //
    //             // Add hash (#) to URL when done scrolling (default click behavior)
    //             window.location.hash = hash;
    //         });
    //     } // End if
    // });



    let scroll_link = $('.sticky-menu-header ul li a.js-scroll-trigger');

    //smooth scrolling -----------------------
    scroll_link.click(function(e){
        e.preventDefault();
        let url = $('body').find($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop : url
        },700);
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        return false;

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
    $('#time-dropdown3').dropdown();
    // Select Time Picker JS End

    // Range Slider JS Start

    $('#slider').slider({
        slide: function (e, value) {
            document.getElementById('value').innerText = value;
        }
    });
    $('#slider2').slider({
        slide: function (e, value) {
            document.getElementById('value2').innerText = value;
        }
    });

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