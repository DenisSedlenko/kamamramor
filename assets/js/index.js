$(window).load(transferInputModule);
$(window).resize(transferInputModule); 
$(document).on('ready', setSizeBackgroundImageFirstSection);

function transferInputModule(){
  $(window).width() <= '480' ?
    $('.left-inputs:nth-child(2)').append($('.form-group-file')) :
    $('.left-inputs:nth-child(1)').append($('.form-group-file'));
}

function setSizeBackgroundImageFirstSection(){
  $('.bck-vd-img').css('height', $('.bottom-header').outerHeight());
}

var navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 2,
      autoplay: {
        delay: 6000,        
        disableOnInteraction: false,
      },
      spaceBetween: 5,
      slidesPerView: 7,
      centeredSlides : true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChangeTransitionStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            if (swiper.slides[i].className.indexOf('swiper-slide-active') > -1) {
              re = /url\(\"([a-z\/-]+.[a-z]+)\"\)/gi;
              var res = re.exec(swiper.slides[i].style.backgroundImage);
              $('#background-monument').attr("xlink:href", res[1]);
              $(`.${swiper.slides[i].id}__label`).toggle();
            }
          }
        }
      }
    };

var navSlider = new Swiper('.nav-slider', navSliderOptions);
navSlider.controller.control = navSlider;

var review = new Swiper('.quote-column', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.quote-button-next',
    prevEl: '.quote-button-prev',
  },
});
review.controller.control = review;