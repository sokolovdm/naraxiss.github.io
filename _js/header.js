 var blackHeader = $('.header--black');

 $(window).on('scroll', function() {
     if ($(this).scrollTop() >= $('.footer').offset().top - blackHeader.height()) {
         blackHeader.removeClass('header--black');
     } else {
         blackHeader.addClass('header--black');
     }

 })