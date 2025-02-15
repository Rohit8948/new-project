/* swiper service */

var swiper = new Swiper('.swiper-service',{
    slidesPerView:'4',
    spaceBetween:10,
    effect : 'slide',
    loop:true,
    autoplay : {
        delay : 3000,
        disableOnInteraction :false,
    },
    breakpoints : {
        250 : {
            slidesPerView:'1',
            spaceBetween:10,                    
        },
        699 : {
            slidesPerView:'1',
            spaceBetween:10,                    
        },
        768 : {
            slidesPerView:'2',
            spaceBetween:10,                    
        },
        1024 : {
            slidesPerView:'3',
            spaceBetween:10,   
        },
        1199 : {
            slidesPerView:'4',
            spaceBetween:10,                    
        },
    }
});



/* swiper-hero */
var swiper = new Swiper('.swiper-container-hero',{
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    effect : 'fade',
    autoplay : {
        delay : 7000,
        disableOnInteraction : false,
    },
});


/* client desk */
var swiper = new Swiper('.client-desk', {
    slidesPerView : 3,
    centeredSlides: false,
    spaceBetween : 30,
    autoplay : {
        delay : 2500,
        disableOnInteraction : false,
    },
    pagination : {
        el : '.swiper-pagination-client',
    },
    navigation : {
        nextEl:'.client-next',
        prevEl : '.client-prev' ,
    },
});

/* client mob */
var swiper = new Swiper('.client-mob', {
    slidesPerView : 1,
    centeredSlides: false,
    spaceBetween : 30,
    autoplay : {
        delay : 2500,
        disableOnInteraction : false,
    },
    pagination : {
    el : '.swiper-pagination-client',
},
navigation : {
    nextEl:'.client-next',
    prevEl : '.client-prev' ,
},
});


/* swiper port */
var sliderSelector = '.swiper-port',
options = {
  init: false,
  loop: true,
  autoplay:true,
  speed:800,
  slidesPerView: 2, // or 'auto'
  // spaceBetween: 10,
  centeredSlides : true,
  effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows : true, // Enables slides shadows
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    768 :  {
        slidesPerView: 2,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    250: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },
  // Events
  on: {
    imagesReady: function(){
      this.el.classList.remove('loading');
    }
  }
};
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();


/* swiper-package */
var swiper = new Swiper ('.swiper-home-package',{
    slidesPerView : 3,
    centeredSlides: false,
    spaceBetween : 30,
    loop:true,
    autoplay : {
        delay : 2500,
        disableOnInteraction : false,
    }, 
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 2,
      },
      768 :  {
          slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
        effect : 'coverflow',
      },
      250: {
        slidesPerView: 1,
      }
    },
});