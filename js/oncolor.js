$(window).on('scroll',function(){
    if(($(window).scrollTop() >= $('#about').offset().top) && ($(window).scrollTop() < $('#ourdelivery').offset().top-10)) {
        $('#nv-about').addClass('nv-change');
        $('.img-box').css('background','url(imge/home-about-bg.jpg)');
        $('.abc').html('about us');
        $('.img-box').addClass('img-box-123');
    }
    else{
        $('.img-box').removeClass('img-box-123');
    }
    if(($(window).scrollTop() >= $('#ourdelivery').offset().top-10) && ($(window).scrollTop() < $('#services').offset().top-10)) {
        $('#nv-services').addClass('nv-change');
        $('.img-box').css('background','url(imge/home-delivery-bg.jpg)');
        $('.abc').html('Our Delivery Process');
        $('.img-box').addClass('img-box-1234');
    }
    else{
        $('.img-box').removeClass('img-box-1234');
    }
    if(($(window).scrollTop() >= $('#services').offset().top-10) && ($(window).scrollTop() < $('#portfolio-id').offset().top-10)) {
        $('#nv-services').addClass('nv-change');
        $('.img-box').css('background','url(imge/home-services-bg.jpg)');
        $('.abc').html('Our services');
        $('.img-box').addClass('img-box-12345');
    }
    else{
        $('.img-box').removeClass('img-box-12345');
    }
    if(($(window).scrollTop() >= $('#portfolio-id').offset().top-10) && ($(window).scrollTop() < $('#skills').offset().top-35)) {
        $('#nv-portfolio').addClass('nv-change');
        $('.img-box').css('background','url(imge/home-packages-bg.jpg)');
        $('.abc').html('Our Packages');
        $('.img-box').addClass('img-box-123456');
    }
    else{
        $('.img-box').removeClass('img-box-123456');
    }
    if(($(window).scrollTop() >= $('#skills').offset().top-35) && ($(window).scrollTop() < $('#clients').offset().top-55)) {
        $('#nv-skills').addClass('nv-change');
        $('.img-box').css('background','url(imge/skills-bg.jpg)');
        $('.abc').html('AREAS OF EXPERTISE');
        $('.img-box').addClass('img-box-1234567');
    }
    else{
        $('.img-box').removeClass('img-box-1234567');
    }
    if(($(window).scrollTop() >= $('#clients').offset().top-55)) {
        $('#nv-clients').addClass('nv-change');
        $('.img-box').css('background','url(imge/awars-bg.jpg)');
        $('.abc').html("Awards & Recognition's");
        $('.img-box').addClass('img-box-12345678');
    }
    else{
        $('.img-box').removeClass('img-box-12345678');
    }
});