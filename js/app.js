$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playhadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate (
			{'left': '1020px'},
			500,
			function() {
				$(this).stop();
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	function playhadouken () {
		$('#hadouken-sound') [0].volume=0.5;
		$('#hadouken-sound') [0].load();
		$('#hadouken-sound') [0].play ();
	}
});