$(document).ready(function($) {
	new WOW().init();
	var headerLi = $('.header__content li'),
		headerLiLength = headerLi.length,
		headerSpeed = 2 / headerLiLength;

	headerLi.each(function(index, el) {
		var count = headerSpeed*(index+1);
		$(this).attr('data-wow-duration',count+'s')
	});


	$(".input_phone input").mask("+7 (999) 999 - 99 - 99");

	$('.reviews .container').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
		responsive: [{
			breakpoint: 1070,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}]
	})



	/* Portfolio */


	var portfolioItem = $('.portfolio__item'),
		portfolioItemLength = portfolioItem.length,
		portfolioButton = $('.portfolio__button');


	portfolioItem.each(function(index, el) {
		var index = index + 1;
		if(index > 10){
			$(this).hide();
		}
	});

	if (portfolioItemLength <= 10) {
		portfolioButton.hide();
	}


	portfolioButton.click(function() {
		portfolioItem.fadeIn();
		$(this).fadeOut();
	});



	var panel = $('.panel'),
		panelClass = 'panel_scroll';

	$(window).on('scroll load',function() {
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if (scrollTop >= 1 && $(window).width() > 1070) {
			panel.addClass(panelClass)
		} else {
			panel.removeClass(panelClass)
		}
	});



	$(".nav a, .header__button").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top - 116}, 1000);
	});

});