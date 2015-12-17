$(document).ready(function(){
	$(".Ryu").mouseover(function(){
		$(".Ryu-still").css("display", "none");
		$(".Ryu-ready").css("display", "block");

	}).mouseout(function(d){
		// $(".Ryu-still").css("display", "block");
		// $(".Ryu-ready").css("display", "none");
		$(".Ryu-still").show();
		$(".Ryu-ready").hide();
	})


	// $(".Ryu").on("mousedown", function(){
	// 	console.log("mousedown");
	// 	$(".Ryu-ready").hide();
	// 	$(".Ryu-throwing").show();
	// }).off("mousedown", function(){
	// 	console.log("mouseup");
	// 	$(".Ryu-throwing").hide();
	// 	$(".Ryu-ready").show();
	// })

	$(".Ryu").mousedown(function(){
		console.log("mousedown");
		$(".Ryu-ready").hide();
		$(".Ryu-throwing").show();
		// $(".hadouken").show();

		//animate hadouken
		$(".hadouken").finish().show().animate({
			"margin-left": "64em"
			// "margin-left": "+= 5"
		}, 300, function(){
			//animation complete
			$(this).hide()
			$(this).css("margin-left", "32em");
		});

		//play sound
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}).mouseup(function(){
		console.log("mouseup");
		$(".Ryu-throwing").hide();
		$(".Ryu-ready").show();
	})

	$(document).keydown(function(key){
		if(key.which == 88){
			$(".Ryu-ready").hide();
			$(".Ryu-throwing").hide();
			$(".Ryu-still").hide();
			$(".Ryu-cool").show();
		}
	}).keyup(function(key){
		$(".Ryu-ready").show();
		$(".Ryu-cool").hide();
	})


})