$(document).ready(function(){
$('.ryu').mouseenter(function(){
	$('.ryu-still').hide();
	$('.ryu-ready').show();
	})
.mouseleave(function(){
	$('.ryu-steady').hide();
	$('.ryu-still').show();
})
  .mousedown(function() {
  	// play hadouken sound
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').show();
  	// show hadouken and animate it to the right of the screen
    console.log('mousedown');
    
    
  })
  .mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
  });
});