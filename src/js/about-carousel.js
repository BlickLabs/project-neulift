var aboutCarousel = $('.about-carousel');

aboutCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  autoWidth: true,
  margin: 10,
  responsive:{
    0:{
      items:1,
      margin: 10,
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
  }
});

aboutCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='about-controls'></div>");
});