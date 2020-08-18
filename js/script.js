$(document).ready(function() {
	$('.block__title' ).click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(1000);
		}
		$(this).toggleClass('active').next().slideToggle(1000);
	});
});

$(document).ready(function() {
	$('.block__title2' ).click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title2').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(1000);
		}
		$(this).toggleClass('active').next().slideToggle(1000);
	});
});


$(document).ready(function() {
	$('.slider').slick({
	arrows:true,
	adaptiveHeight:true,
	slidesToShow:2,
	initialSlide:0,
	centerMode:false,
	responsive:[
		{breakpoint: 1150,
		settings:{
			slidesToShow:1,
		}
		}
	]
	});
	
});