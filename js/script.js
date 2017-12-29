$(function() {
	$('body').scrollspy({ target: '#navigation-bar' });

	$(window).scroll(function(){
	    changeNavbar();
	});

	function changeNavbar() {
		var home = $(document).scrollTop();
		//console.log(home);
		if (home >= 100) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}

	$('#designControls').on('slid.bs.carousel', function() {
		var currentSlideName = $('#design-id');
		var activeSlideNumber = $('div.active').data('number');
		currentSlideName.text(activeSlideNumber);
	});
});