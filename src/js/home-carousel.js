var treatmentsCarousel = $('.treatments-carousel');

treatmentsCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  onInitialized: counter,
  onTranslated: counter,
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

function counter (event) {
  var element = event.target;         // DOM element, in this example .owl-carousel
  var items = event.item.count;     // Number of items
  var item = event.item.index + 1;     // Position of the current item
  $('#home-counter-init').html("0" + item)
  $('#home-counter-total').html("0" + items)
}