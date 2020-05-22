$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/chevron-right-solid.svg"></button>',
        responsive:  [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false

                }              
            }
        ]
      });
  });