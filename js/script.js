$(document).ready(function () {
    $('.last-music__link').click(function (e) {
        e.preventDefault();
        if($('.b-layer').hasClass('activePlayer')){
            $('.b-layer').removeClass('activePlayer');
            $('.aside').css('margin-bottom','0px');
        }else{
            $('.b-layer').addClass('activePlayer');
            $('.aside').css('margin-bottom','61px');
        }
    })
    
    $('.album-music__item').click(function (e) {
        // $('.vinyl-data').removeClass('rotate');
        e.preventDefault();
        if($('.vinyl-data').hasClass('rotate')){
            $('.vinyl-data').removeClass('rotate');
            // $('.b-layer').removeClass('activePlayer');
            // $('.aside').css('margin-bottom','0px');
        }else{
            $('.vinyl-data').addClass('rotate');
            // $('.b-layer').addClass('activePlayer');
            // $('.aside').css('margin-bottom','61px');
        }
    })
});