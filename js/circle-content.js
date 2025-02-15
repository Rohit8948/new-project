$(document).ready(function(){
    $circlecd = $('.icon-div:first');
    var $circlecd1 = $('.content-div:first');
    $circlecd1.fadeIn();
    function circlemoveslide() {
        if($circlecd1.next().length != 0 && $circlecd.next().length != 0) {
            $('.content-div').hide();
            $circlecd1 = $circlecd1.next();
            $circlecd1.fadeIn(1000);
            $circlecd = $circlecd.next();
            $('.icon-div').removeClass('icon-div-animate');
            $circlecd.addClass('icon-div-animate');
        }
        else{
            $circlecd1.hide();
            $circlecd1 = $('.content-div:first');
            $circlecd1.fadeIn(1000);
            $circlecd.removeClass('icon-div-animate');
            $circlecd = $('.icon-div:first');
            $circlecd.addClass('icon-div-animate');
        }
    };
    setInterval(function(){
        circlemoveslide();
    },3000);
});