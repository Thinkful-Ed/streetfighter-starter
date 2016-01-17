$(document).ready(function() {

	//Mouse over for ready position
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});
	$(".ryu").mouseleave(function() {
   		$(".ryu-ready").hide();
   		$(".ryu-still").show();
    });

    //On mouse click trow hadouken
	$(".ryu").mousedown(function() {
		$(".ryu-ready").hide();
    	$(".ryu-throwing").show();
    	$(".hadouken").show();
    	$(".hadouken").animate({left: "+=530px"}, 400);
	});
	$(".ryu").mouseup(function() {
    	$(".ryu-ready").show();
    	$(".ryu-throwing").hide();
    	$(".hadouken").hide();
    	$(".hadouken").animate({left: "-=530px"}, 0);
    });

	//When X is pressed go to cool pose
	$(".ryu").keydown(function() {
			$(".ryu-still").hide();
			$(".ryu-cool").show();
	});



});