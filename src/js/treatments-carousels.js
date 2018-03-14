var injectablesCarousel = $('.injectables-carousel');
var aparatologyCarousel = $('.aparatology-carousel');
var othersCarousel = $('.others-carousel');

injectablesCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  center: false,
  items: 2,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:3,
      autoWidth: true
    }
  }
});

injectablesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='injectables-controls'></div>");
});

aparatologyCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  center: false,
  items: 2,
  startPosition: 5,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items: 3,
      autoWidth: true,
    },
    1000:{
      items:3,
      autoWidth: true
    }
  }
});

aparatologyCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='aparatology-controls'></div>");
});

othersCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  center: false,
  items: 2,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:3,
      autoWidth: true
    }
  }
});

othersCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='others-controls'></div>");
});