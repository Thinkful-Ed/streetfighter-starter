$(document).ready(function () {
    $('.ryu').mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({'left': '1020px'},
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '520px');
                });
            // show hadouken and animate to right of screen
        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            // ryu goes back to his ready position
        })
        .keydown(function (e) {
           //we changed == to === to download....and it works now! and we also added .ryu-ready to hide
            if (e.keyCode === 88) {
                $('.ryu-still').hide();
                $('.ryu-cool').show();
                $('.ryu-ready').hide();
            };
        })
        .keyup(function (e) {
            if (e.keyCode === 88) {
                $('.ryu-still').show();
                $('.ryu-cool').hide();
            }
        });
    
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
};

/*function intro() {
    $('.instructions').fadeIn(800);
}
*/
$(document).ready(function(){ 
function intro() {
        $('.instructions').fadeIn(800);
    }
});









