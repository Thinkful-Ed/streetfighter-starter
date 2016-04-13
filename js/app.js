$(document).ready(function(){

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.7;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

   $('.ryu').mouseenter(function(){
       $('.ryu-still').hide();
       $('.ryu-ready').show();
   });

   $('.ryu').mouseleave(function(){
       $('.ryu-still').show();
       $('.ryu-ready').hide();
   });

   $('.ryu').mousedown(function(){
       playHadouken();
       $('.ryu-ready').hide();
       $('.ryu-throwing').show();
       $('.hadouken').finish().css({"opacity" : "1"})
                      .animate({"margin-left" : "1000px"},1200,"linear",function(){
                        $(this).css({"opacity" : "0" , "margin-left" : "0px"});
                      });
    });


   $('.ryu').mouseup(function(){
       $('.ryu-ready').show();
       $('.ryu-throwing').hide();
       $('.hadouken').css({"opacity" : "0"});
   });

   $(document).keydown(function(e){
    if(e.keyCode == 88) {
    $('.ryu-action').hide();
    $('.ryu-cool').show();
    }
  }).keyup(function(e){
    if(e.keyCode == 88)
      {
        $('.ryu-cool').hide();

        if($('.ryu').is(':hover') === true)
            {$('.ryu-ready').show();}
        else {$('.ryu-still').show();};
      }
  });



});