$(document).ready(function(){
	$('.instructions').fadeIn(1000);
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate({
    		'left':'1020px'
    	},500,function(){
    		$(this).hide();
            $(this).css('left', '520px');
    	});
    })
    .mouseup(function(){
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
    });

    $(document).keydown(function(e) {
        if (e.keyCode==88) {
        	playHadoukenCool ();
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
        }
    })
    .on('keyup', function(e){
    	if (e.keyCode == 88){
    		$('#hadouken-cool')[0].pause();
    		$('#hadouken-sound')[0].load();
    		$('.ryu-cool').hide();
            $('.ryu-still').show();
    	} 
    });

});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function playHadoukenCool () {
	$('#hadouken-cool')[0].play();
}


