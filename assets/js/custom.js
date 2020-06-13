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

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // mobile Menu area
  $('nav.mobile_menu').meanmenu({
    meanScreenWidth: '991'
  });
  $('nav.mean-nav li > a:first-child').on('click', function () {
    $('a.meanmenu-reveal').click();
  });

  // mobile Menu area

  // MAIN MENU SCRIPT END

  // Tooltip JS
    $('[data-toggle="tooltip"]').tooltip();

    // Datepicker JS Start
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
    // Datepicker JS End

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