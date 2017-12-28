$(function() {
	$('#designControls').on('slid.bs.carousel', function() {
		var currentSlideName = $('#design-id');
		var activeSlideNumber = $('div.active').data('number');
		currentSlideName.text(activeSlideNumber);
	});
})