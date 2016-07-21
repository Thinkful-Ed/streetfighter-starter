
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
    	$('.mouse').hide();
    	$('.xkey').hide();
    	$('.ryu-ready').show();
  	})
 	// User no longer mouseing over Ryu
  	.mouseleave(function() 
	{
		console.log('mouseleave');
  		$('.mouse').hide();
  		$('.xkey').hide();
  		$('.ryu-still').show();
	})

	// User input (mouse down/up) causes Ryu to throw hadouken.

	// User holding mouse down over Ryu
	.mousedown(function() 
	{
    console.log('mousedown');
  	 playHadouken();
  	  $('.mouse').hide();
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
  	 	$('.mouse').hide();
		$('.ryu-still').show();
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
	    	$('.mouse').hide();
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
	// I want to delay the running of userInstructions()
	// so basically logoAnimation() will run
	// then there will be a pause an userInstructions() will run.

	logoAnimation();
	console.log('delay');
	$().delay(5000);
	userInstructions();
};

// ########################################
/* ---------- Logo Animation ---------- */
// ########################################

function logoAnimation ()
{
	console.log('sf-logo_fadeIn');
	$('.street-fighter').fadeIn(2500, function()
	{
		console.log('sf-logo_fadeOut');
		$('.street-fighter').fadeOut(1000, function()
		{
			console.log('text_fadeIn');
			$('.text').fadeIn(2500, function()
			{
				console.log('text_fadeOut');
				$('.text').fadeOut(1000, function()
				{
					console.log('disney_fadeIn');
					$('.disney').fadeIn(2500, function()
					{
						console.log('disney_fadeOut');
						$('.disney').fadeOut(1000, function()
						{
							console.log('text2_fadeIn');
							$('.text2').fadeIn(2500, function()
							{
								console.log('text2_fadeOut');
								$('.text2').fadeOut(1000, function()
								{
									console.log('jQ-logo_fadeIn');
									$('.jquery').fadeIn(2500, function()
									{
										console.log('jQ-logo_fadeOut');
										$('.jquery').fadeOut(1000, function()
										{
					
										});
									})
								})
							})
						})
					})
				})
			})
		})
	})	
};

// ###################################################
/* ---------- User Instruction Animation ---------- */
// ###################################################

function userInstructions ()
{
	console.log('instruct');
	$(document).ready(function()
	{
		console.log('fadeIn_one');
		$('.one').delay(17000).fadeIn(2000, function()
		{
			console.log('fadeIn_two');
			$('.two').fadeIn(4000, function()
			{
				console.log('fadeIn_three');
				$('.three').fadeIn(4000);
				console.log('fadeOut_one');
				$('.one').fadeOut(3000, function()
				{
					console.log('fadeOut_two');
					$('.two').fadeOut(3000, function()
					{
						console.log('fadeOut_three');
						$('.three').fadeOut(3000);
					})
				})
			})

		
		})
	})
}






