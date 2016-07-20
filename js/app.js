
/*****************************************
*	jQuery is a lot like robotic programming.
*	Create subroutines (aka. functions) to be called by the main program.
*	Just like with robotic programming nesting smaller programs(functions) makes for easier troubleshooting.
*	In my case the main program(function) is:
*		$(document).ready(function()
*		{
*	
*		});
******************************************/


// ########################################
/*
*	Table of Contents
*	1)	Parent Function
*	2)	Child Functions
*		a)	ryuAction
*		b)	ryuThrow
*		c)	ryuCoolPose
*	3)	Sibling Functions
*		a)	playHadouken
*	4)	Introduction Function
*	5)	Logo Animation
*	6)	User Instruction Animation
*/
// ########################################
/* ---------- Parent Function ---------- */
// ########################################

// All animation/sound for Ryu & hadouken.
$(document).ready(function()
{
	startIntro();
	ryuAction();
});

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) ryuAction ---------- */
function ryuAction ()
{
	ryuThrow();
	ryuCoolPose();
};

/* ---------- b) ryuThrow ---------- */

// User input (mouse enter/leave) causes Ryu to go from Still to Ready.
function ryuThrow ()
{
	// User mouseing over Ryu
 	$('.ryu').mouseenter(function() 
 	{
 		console.log('mouseenter');
    	$('.ryu-still').hide();
    	$('.ryu-ready').show();
  	})
 	// User no longer mouseing over Ryu
  	.mouseleave(function() 
	{
		console.log('mouseleave');
  		$('.ryu-ready').hide();
  		$('.ryu-still').show();
	})

	// User input (mouse down/up) causes Ryu to throw hadouken.

	// User holding mouse down over Ryu
	.mousedown(function() 
	{
    console.log('mousedown');
  	 playHadouken();
  	  $('.ryu-ready').hide();
		  $('.ryu-throwing').show();
		  $('.hadouken').finish().show()
		    .animate(
  		    {'left': '1020px'},
  		    500,
  		    function() 
  	   	  {
    			 $('.hadouken').hide();
    			 $('.hadouken').css('left', '520px');
  		    });
	})
	// User no longer holding mouse down over Ryu
	.mouseup(function() 
	{
    console.log('mouseup');
  	 $('.ryu-throwing').hide();
		 $('.ryu-ready').show();
	})
};

/* ---------- c) ryuCoolPose ---------- */

// User input ('X' key down/up) causes Ryu to strike cool pose.
function ryuCoolPose ()
{
	$(document).keydown(function(e)
	{
  		console.log('keydown');
  		if (e.keyCode==88) 
		{
		    $('.mouse').hide();
		    $('.xkey').show();
	  	}
	})
	.keyup(function(e)
	{
		console.log('keyup');
	 	if (e.keyCode==88) 
	  	{
	    	$('.xkey').hide();
	    	$('.ryu-still').show();
	  	}
	})
};

// ########################################
/* ---------- Sibling Functions ---------- */
// ########################################

/* ---------- a) playHadouken ---------- */

// Sound for hadouken
function playHadouken () 
{
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

// ##############################################
/* ---------- Introduction Function ---------- */
// ##############################################

function startIntro ()
{
	// logoAnimation();
	userInstructions();
};

// ########################################
/* ---------- Logo Animation ---------- */
// ########################################

// function logoAnimation ()
// {
// 	$('street-fighter').fadeIn(2500, function()
// 	{
// 		$('street-fighter').fadeOut(1000, function()
// 		{
// 			$('jquery').fadeIn(2500, function()
// 			{
// 				$('jquery').fadeOut(1000, function()
// 				{

// 				});
// 			})
// 		})
// 	})
	
// };

// ###################################################
/* ---------- User Instruction Animation ---------- */
// ###################################################

function userInstructions ()
{
	console.log('instruct');
	$(document).ready(function()
	{
		$('one').fadeIn(2500, function()
		{
			$('one').css('color', 'white');
			$('one').fadeOut(1000, function()
			{
				$('one').css('color', 'black');
				$('two').fadeIn(2500, function()
				{
					$('two').css('color', 'white');
					$('two').fadeOut(1000, function()
					{
						$('two').css('color', 'black');
						$('three').fadeIn(2500, function()
						{
							$('three').css('color', 'white');
							$('three').fadeOut(1000, function()
							{
								$('three').css('color', 'black');
							})
						})
					})
				})
			})
		})
	})
		
};

	







