function counterAbout(t){var e=(t.target,t.item.count),o=t.item.index+1;$("#about-counter-init").html("0"+o),$("#about-counter-total").html("0"+e)}function counter(t){var e=(t.target,t.item.count),o=t.item.index+1;$("#home-counter-init").html("0"+o),$("#home-counter-total").html("0"+e)}function doSomething(t){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-neulift/index.html"!==window.location.pathname&&"/project-neulift/"!==window.location.pathname||(t>30?siteNavbar.classList.add("navbar-scroll"):siteNavbar.classList.remove("navbar-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function counterInjectables(t){var e=(t.target,t.item.count),o=t.item.index+1;$("#injectables-counter-init").html("0"+o),$("#injectables-counter-total").html("0"+e)}function counterAparatology(t){var e=(t.target,t.item.count),o=t.item.index+1;$("#aparatology-counter-init").html("0"+o),$("#aparatology-counter-total").html("0"+e)}function counterOthers(t){var e=(t.target,t.item.count),o=t.item.index+1;$("#others-counter-init").html("0"+o),$("#others-counter-total").html(e)}var aboutCarousel=$(".about-carousel");aboutCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,autoWidth:!0,margin:10,onInitialized:counterAbout,onTranslated:counterAbout,responsive:{0:{items:1,margin:10},600:{items:1},1e3:{items:1}}}),aboutCarousel.each(function(t){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-controls'></div>")}),function(){$.validator.setDefaults({invalidHandler:function(t,e){var o=$(this);o.find(".form-message").removeClass(o.hasClass("success")?"success":"error").html("")},submitHandler:function(t){var e=$(t).serialize(),o=$(t).find("select, input, textarea, button").not("[disabled]"),n=$(t).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),i=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(t){var e=t?a:i;o.removeAttr("disabled"),n.removeClass(t?"error":"success"),n.addClass(t?"success":"error"),n.html(e)};o.attr("disabled","disabled"),n.html(""),$(t).find(".button-wrapper .loader").length||$(t).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(t).attr("action"),method:"POST",data:e}).done(function(e){r(1===parseInt(e)),t.reset()}).fail(function(){r(!1)}).always(function(){o.removeAttr("disabled"),$(t).find(".button-wrapper").removeClass("disabled")})}})}(),$('form[name="neulift-contact"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(t){var e=$('form[name="neulift-contact"]').serialize();console.log(e),$.ajax({url:"http://integrations.blick.mx/neulift/contact/",method:"POST",data:e}).done(function(t){1===parseInt(t)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="neulift-contact"]')[0].reset())})},invalidHandler:function(t,e){var o=e.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")}}),$("a.go-option").click(function(){var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top-130},800)});var treatmentsCarousel=$(".treatments-carousel");treatmentsCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,onInitialized:counter,onTranslated:counter,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),treatmentsCarousel.each(function(t){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar");window.addEventListener("scroll",function(t){last_known_scroll_position=t.view?t.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(t){t.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(t){t.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(t){t.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(t){t.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(t){t.preventDefault(),hideMenu()});var injectablesCarousel=$(".injectables-carousel"),aparatologyCarousel=$(".aparatology-carousel"),othersCarousel=$(".others-carousel");injectablesCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,onInitialized:counterInjectables,onTranslated:counterInjectables,responsive:{0:{items:1},600:{items:1},1e3:{items:3,autoWidth:!0}}}),injectablesCarousel.each(function(t){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='injectables-controls'></div>")}),aparatologyCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,startPosition:5,onInitialized:counterAparatology,onTranslated:counterAparatology,responsive:{0:{items:1},600:{items:3,autoWidth:!0},1e3:{items:3,autoWidth:!0}}}),aparatologyCarousel.each(function(t){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='aparatology-controls'></div>")}),othersCarousel.owlCarousel({loop:!1,nav:!0,navText:['<img class="navigation-arrows" src="img/icons/icon-left-rhombus.png" />','<img class="navigation-arrows" src="img/icons/icon-right-rhombus.png" />'],dots:!0,margin:20,center:!1,items:2,onInitialized:counterOthers,onTranslated:counterOthers,responsive:{0:{items:1},600:{items:1},1e3:{items:3,autoWidth:!0}}}),othersCarousel.each(function(t){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='others-controls'></div>")});