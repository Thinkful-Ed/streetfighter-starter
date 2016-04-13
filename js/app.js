$(document).ready(function(){

   $('.ryu').mouseenter(function(){
       $('.ryu-still').hide();
       $('.ryu-ready').show();
   });

   $('.ryu').mouseleave(function(){
       $('.ryu-still').show();
       $('.ryu-ready').hide();
   });

   $('.ryu').mousedown(function(){
       $('.ryu-ready').hide();
       $('.ryu-throwing').show();
       $('.hadouken').css({"opacity" : "1"})
           .animate({"z-index" : "9"},
               step: function(now,fx) {
                   $(this).css('-webkit-transform','translate(100px,0px)')},
                   duration: 'slow'},'linear');
               });
   });

   $('.ryu').mouseup(function(){
       $('.ryu-ready').show();
       $('.ryu-throwing').hide();
       $('.hadouken').css({"opacity" : "0"});
   });

});`