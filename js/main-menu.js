$(document).ready(function(){
    /*-- scroll top js --*/
    $('.top').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },1000);
    });
    /*  design preloader rotatetext change */


    /* how it is going */
    $('.how-div').click(function(){
        $('.how-hide-content').slideUp(500);
        $('.how-icon').removeClass('how-icon-class');
        $(this).find('.how-hide-content').slideToggle(500);
        $(this).find('.how-icon').toggleClass('how-icon-class');
    });


    /*about hero button */
    $('.hero-scroll').click(function(){
        $('html,body').animate({
            scrollTop : $('.scroll-down-section').offset().top
        },500);
    });

    /* about hero btn hover */
    $('.hero-scroll').hover(function(){
        $('.scroll-span').removeClass('scroll-span-1');
    },
    function(){
        $('.scroll-span').addClass('scroll-span-1');
    })
});