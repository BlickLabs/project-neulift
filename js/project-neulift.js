function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-neulift/index.html"!==window.location.pathname&&"/project-neulift/"!==window.location.pathname||(e>30?siteNavbar.classList.add("navbar-scroll"):siteNavbar.classList.remove("navbar-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}var aboutCarousel=$(".about-carousel");aboutCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,autoWidth:!0,margin:10,responsive:{0:{items:1,margin:10},600:{items:1},1e3:{items:1}}}),aboutCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-controls'></div>")}),function(){$.validator.setDefaults({invalidHandler:function(e,o){var s=$(this);s.find(".form-message").removeClass(s.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),s=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),n=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),i=function(e){var o=e?t:n;s.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(o)};s.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){i(1===parseInt(o)),e.reset()}).fail(function(){i(!1)}).always(function(){s.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$("a.go-option").click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-130},800)});var treatmentsCarousel=$(".treatments-carousel");treatmentsCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),treatmentsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar");window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});var injectablesCarousel=$(".injectables-carousel"),aparatologyCarousel=$(".aparatology-carousel"),othersCarousel=$(".others-carousel");injectablesCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,responsive:{0:{items:1},600:{items:1},1e3:{items:3,autoWidth:!0}}}),injectablesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='injectables-controls'></div>")}),aparatologyCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,startPosition:5,responsive:{0:{items:1},600:{items:3,autoWidth:!0},1e3:{items:3,autoWidth:!0}}}),aparatologyCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='aparatology-controls'></div>")}),othersCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,responsive:{0:{items:1},600:{items:1},1e3:{items:3,autoWidth:!0}}}),othersCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='others-controls'></div>")});