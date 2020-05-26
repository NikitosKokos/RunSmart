$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        // autoplay: true,
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
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


      function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on("click", function(e){
                e.preventDefault();
                $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
                $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
            });
          });
      };
      toggleSlide(".catalog-item__link");
      toggleSlide(".catalog-item__back");


      $('[data-modal]').on("click", function(){
        if($(this).attr('data-modal') === "consultation" || $(this).attr('data-modal') === "order"){
        $(".overlay").addClass("overlay_active"); 
        let thisClass = $(this).attr('data-modal');
        $(`#${thisClass}`).addClass('modal_active');

      
        } 
    });
        $('.modal__close').on("click", function(){
          $(".overlay").removeClass("overlay_active");
          $(`.modal`).removeClass('modal_active');
        });

        $("[data-modal=order]").each(function(i){
          $(this).on("click", function() {
            $(`#${$(this).attr('data-modal')} .modal__descr`).text($('.catalog-item__subtitle').eq(i).text())

          })
        });

  });


