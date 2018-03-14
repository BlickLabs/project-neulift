$("a.go-option").click(function() {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 130
  }, 800);
});
