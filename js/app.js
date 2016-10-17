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
		$(".ryu-throwing").show();
		$(".hadouken").show();
		//play hadouken sound
		//show hadouken slide
	})
	.mouseup(function() { 
		console.log('mouseup');
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();

	});
});