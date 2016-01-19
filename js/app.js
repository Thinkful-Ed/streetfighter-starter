$(document).ready(function() {
	//Variable declaration
	var ryu = $("#ryu"),
		ryuStill = $("#ryu-still"),
		ryuReady = $("#ryu-ready"),
		ryuThrowing = $("#ryu-throwing"),
		ryuHadouken = $("#hadouken"),
		ryuCool = $("#ryu-cool"),
		hadoukenSound = $("#hadouken-sound")[0],
		coolSound = $("#cool-sound")[0];


	//Mouse over for ready position
	ryu.mouseenter(function() {
		ryuStill.hide();
		ryuReady.show();
	});
	ryu.mouseleave(function() {
   		ryuReady.hide();
   		ryuStill.show();
    });

    //On mouse click trow hadouken
	ryu.mousedown(function() {
		ryuReady.hide();
    	ryuThrowing.show();
    	ryuHadouken.show().animate({left: "+=530px"}, 400).fadeOut("fast");
    	hadoukenSound.play();
	});
	ryu.mouseup(function() {
    	ryuReady.show();
    	ryuThrowing.hide();
    	ryuHadouken.hide().animate({left: "-=530px"}, 0);
    });


	//When X is pressed go to cool pose
	$(document).keydown(function(e) {
		if(e.which == 88) {
			ryuStill.hide();
			ryuReady.hide();
			ryuHadouken.hide();
			ryuCool.show();
			coolSound.play();
		}
	});
	$(document).keyup(function(e) {
		if(e.which == 88) {
			ryuStill.show();
			ryuReady.hide();
			ryuHadouken.hide();
			ryuCool.hide();
			coolSound.pause();
		}
	});


});