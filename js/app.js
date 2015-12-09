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

	// $(".Ryu").click(function(){
	// 	$(".Ryu-ready").hide();
	// 	$(".Ryu-throwing").show();
	// });
	$(".Ryu").on('click', function(){
		$(".Ryu-ready").hide();
		$(".Ryu-throwing").show();
	});

	$(".Ryu").off("click", function(){
		$(".Ryu-throwing").hide();
		$(".Ryu-ready").show();
	})

})