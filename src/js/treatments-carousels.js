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
  onInitialized: counterInjectables,
  onTranslated: counterInjectables,
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

function counterInjectables (event) {
  var element = event.target;
  var items = event.item.count;
  var item = event.item.index + 1;
  $('#injectables-counter-init').html("0" + item)
  $('#injectables-counter-total').html("0" + items)
}

aparatologyCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  center: false,
  items: 2,
  startPosition: 5,
  onInitialized: counterAparatology,
  onTranslated: counterAparatology,
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

function counterAparatology (event) {
  var element = event.target;
  var items = event.item.count;
  var item = event.item.index + 1;
  $('#aparatology-counter-init').html("0" + item)
  $('#aparatology-counter-total').html("0" + items)
}

othersCarousel.owlCarousel ({
  loop: false,
  nav: true,
  navText: ['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />', '<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],
  dots: true,
  margin: 20,
  center: false,
  items: 2,
  onInitialized: counterOthers,
  onTranslated: counterOthers,
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

function counterOthers (event) {
  var element = event.target;
  var items = event.item.count;
  var item = event.item.index + 1;
  $('#others-counter-init').html("0" + item)
  $('#others-counter-total').html(items)
}
