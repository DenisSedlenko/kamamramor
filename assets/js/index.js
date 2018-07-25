$(document).on('ready', function() {
  $('.bck-vd-img').css('height', $('.bottom-header').outerHeight());
  var slide = null;
  var slideTotal = 0;
  var slideCurrent = 0;

  function slideInitial() {
    $('.material-single').addClass('proactivede');
    setTimeout(function() {
      slideRight($('.material-single'), -1, $('.material-single').length-1);
    }, 500);
    $('.o-work-single').addClass('proactivede');
    setTimeout(function() {
      slideRight($('.o-work-single'), -1, $('.o-work-single').length-1);
    }, 500);
  }

  function slideRight(sl, cur, total) {
    if (cur < total) {
      cur++;
    } else {
      cur = 0;
    }

    if (cur > 0) {
      var preactiveSlide = sl.eq(cur - 1);
    } else {
      var preactiveSlide = sl.eq(total);
    }
    var activeSlide = sl.eq(cur);
    if (cur < total) {
      var proactiveSlide = sl.eq(cur + 1);
    } else {
      var proactiveSlide = sl.eq(0);

    }

    sl.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  var leftMaterials = $('.materials-container .materials-content .slider-left');
  var rightMaterials = $('.materials-container .materials-content .slider-right');

  var leftWork = $('.o-works-container .o-works-content .slider-left');
  var rightWork = $('.o-works-container .o-works-content .slider-right');

  if (leftMaterials || rightMaterials) {
    slide = $('.material-single');
    slideTotal = slide.length - 1;
    slideCurrent = -1;
    leftMaterials.on('click', function() {
      slideLeft();
    });
    rightMaterials.on('click', function() {
      slideRight(slide, slideCurrent, slideTotal);
    });
  }

  if (leftWork || rightWork) {
    slide = $('.material-single');
    slideTotal = slide.length - 1;
    slideCurrent = -1;
    leftWork.on('click', function() {
      slideLeft();
    });
    rightWork.on('click', function() {
      slideRight(slide, slideCurrent, slideTotal);
    });
  }


  slideInitial();
});