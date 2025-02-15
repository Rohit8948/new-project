$(window).on('scroll',function(){
    if($(window).scrollTop() >= $('#about').offset().top-20 ) {
        $('#img-box-id').addClass('dummy-img-box');
        $('.img-box').addClass('img-after-scroll');
    }
    else{
        $('#img-box-id').removeClass('dummy-img-box');
        $('.img-box').removeClass('img-after-scroll');
    }
});