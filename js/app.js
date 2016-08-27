$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').show()
  		.animate(
    	{'left': '1020px'}, 500,
    function() {
      	$('.hadouken').hide();
      	$('.hadouken').css('left', '520px');
    }); 

	})
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
 	

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
//press "x" key to go into cool stance
$(document).keydown(function ( event ) {
      if (event.which == 88) {
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
        }
    })
//press any key to have ryu at the ready
$(document).keyup(function (event) {
	if (event.which != 88) {
		$('.ryu-ready').show();
	}
})






