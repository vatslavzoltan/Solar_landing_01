document.addEventListener("DOMContentLoaded", function() {

	$('.hamburger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
	});
	
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$('.page_nav').removeClass('active');
		$('.hamburger').removeClass('active');
	
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-100
		}, 500, 'linear');
	});

});
