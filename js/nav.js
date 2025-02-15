$(window).on('scroll',function() {
    if($(window).scrollTop() == $('.hero').offset().top) {
        $('.hero-bg').addClass('hero-du');
    }
    else{
        $('.hero-bg').removeClass('hero-du');
    }
    // 


});