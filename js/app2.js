$(document).ready(function() {
   $('.ryu').mouseenter(function() {
       hideRyu();
       $('.ryu-ready').show();
   })
   .mouseleave(function() {
       hideRyu();
       $('.ryu-still').show();
   })
   .mousedown(function() {
       playHadouken();
       hideRyu();
       $('.ryu-throwing').show();
       $('.hadouken').finish().show()
           .animate(
           {'left': '1020px'},
           500,
           function() {
               $(this).hide();
               $(this).css('left', '520px');
           }
       );
   })
   .mouseup(function() {
       hideRyu();
       $('.ryu-ready').show();
   });
});  

$(document).keydown(function(keyPress) { 
if (keyPress.keyCode === 88) {
   hideRyu();
   $('.ryu-cool').show();
   $('.main').addClass("ryu-pose");
   console.log("key pressed")
   } 
});
$(document).keyup(function() { 
   hideRyu();
   $(".ryu-ready").show(); 
   $(".main").removeClass('ryu-pose');
   console.log('key up')
});

function playHadouken() {
   $('#hadouken-sound')[0].volume = 0.5;
   $('#hadouken-sound')[0].load();
   $('#hadouken-sound')[0].play();
}
function hideRyu() {
   $('.ryu-ready').hide();
   $('.ryu-throwing').hide();
   $('.ryu-still').hide();
   $('.ryu-cool').hide();
}