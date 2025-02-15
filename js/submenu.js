$(document).ready(function(){
    $('.nv-btn').click(function(){
        $('.nv-1').toggleClass('nv-1-sub');
        $('.nv-2').toggleClass('nv-2-sub');
        $('.nv-3').toggle();
        $('.text-span').toggleClass('text-span-sub');
        $('.main-nv-content').toggleClass('nv-sub');
        $('.main-nv-content-sub').toggleClass('nv-sub-1');
    });

/* sub-menu */
/* home submenu */ 
$('#home-l').click(function(){
    $('.menu-nv-div').removeClass('subclass');
    $('.home-menu-nv-sub').addClass('subclass');
});
$('#home-sub-li').click(function(){
    $('.home-menu-nv-sub').removeClass('subclass');
    $('.menu-nv-div').addClass('subclass');
});

/* portfolio submenu */ 
$('#portfoli-l').click(function(){
    $('.menu-nv-div').removeClass('subclass');
    $('.portfolio-menu-nv-sub').addClass('subclass');
});
$('#portfolio-sub-li').click(function(){
    $('.portfolio-menu-nv-sub').removeClass('subclass');
    $('.menu-nv-div').addClass('subclass');
});

/* blog submenu */
$('#blog-l').click(function(){
    $('.menu-nv-div').removeClass('subclass');
    $('.blog-menu-nv-sub').addClass('subclass');
});
$('#blog-sub-li').click(function(){
    $('.blog-menu-nv-sub').removeClass('subclass');
    $('.menu-nv-div').addClass('subclass');
});
});