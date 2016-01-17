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
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').show();
    	$('.hadouken').animate({ left: "-=10px "}, 1000)
    })
    .mouseup(function() {
    	$('.ryu-ready').show();
    	$('.ryu-throwing').hide();
    	$('.hadouken').hide();
    })
});