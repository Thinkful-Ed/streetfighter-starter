$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{'left': '1020'},
			500,
			function() {
				$('.hadouken').hide();
				$(".hadouken").css('left', '520px');
			}
		);
		//play hadouken sound
		//show hadouken slide
	})
	.mouseup(function() { 
		console.log('mouseup');
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();

	});
});