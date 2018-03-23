var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
$("a.go-option").bind(clickHandler, function(e) {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 130
  }, 800);
});
