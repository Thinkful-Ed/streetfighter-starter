$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' }, 500, function() {
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.ryu-still').hide();
        })
    $(document).keydown(function(event) {
    if (event.which == 88) {
        playHard();

            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }
    });
    $(document).keyup(function(event) {
       
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();


    });
    

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playHard() {
    $('#cool')[0].volume = 0.5;
    $('#cool')[0].load();
    $('#cool')[0].play();
}

