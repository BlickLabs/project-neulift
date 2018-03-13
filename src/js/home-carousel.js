var treatmentsCarousel = $('.treatments-carousel');

treatmentsCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
  }
});

treatmentsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-controls'></div>");
});