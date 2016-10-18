$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{'left': '1020'},
			500,
			function() {
				$('.hadouken').hide();
				$(".hadouken").css('left', '520px');
			}
		);
	})
	.mouseup(function() { 
		$(".ryu-throwing").hide();
		$(".ryu-cool").hide();
		$(".ryu-ready").toggle();
	});
	$(document).keydown(function(event) {
		if (event.which == 88) {
			playCoolMusic();
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		}
	});
});



function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCoolMusic () {
	$('#cool-music')[0].volume = 0.5;
	$('#cool-music')[0].load();
	$('#cool-music')[0].play();
}

function playRyuTheme () {
	$('#ryu-theme')[0].volume = 0.5;
	$('#ryu-theme')[0].load();
	$('#ryu-theme')[0].play();
}
