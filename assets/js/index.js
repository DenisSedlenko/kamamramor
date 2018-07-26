$(document).on('ready', function() {
  $('.bck-vd-img').css('height', $('.bottom-header').outerHeight());
  var slide = null;
  var slideTotal = 0;
  var slideCurrent = 0;

  function slideInitial() {
    $('.material-single').addClass('proactivede');
    setTimeout(function() {
      slideRight({ slide:$('.material-single'), current: -1, total: $('.material-single').length-1 });
    }, 500);
    $('.o-work-single').addClass('proactivede');
    setTimeout(function() {
      slideRight({ slide: $('.o-work-single'), current: -1, total: $('.o-work-single').length-1 });
    }, 500);
  }

  function slideRight(obj) {
    if (obj.current < obj.total) {
      obj.current++;
    } else {
      obj.current = 0;
    }

    if (obj.current > 0) {
      var preactiveSlide = obj.slide.eq(obj.current - 1);
    } else {
      var preactiveSlide = obj.slide.eq(obj.total);
    }
    var activeSlide = obj.slide.eq(obj.current);
    if (obj.current < obj.total) {
      var proactiveSlide = obj.slide.eq(obj.current + 1);
    } else {
      var proactiveSlide = obj.slide.eq(0);

    }

    obj.slide.each(function() {
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

  function slideLeft(obj) {
    if (obj.current > 0) {
      obj.current--;
    } else {
      obj.current = obj.total;
    }

    if (obj.current < obj.total) {
      var proactiveSlide = obj.slide.eq(obj.current + 1);
    } else {
      var proactiveSlide = obj.slide.eq(0);
    }
    var activeSlide = obj.slide.eq(obj.current);
    if (obj.current > 0) {
      var preactiveSlide = obj.slide.eq(obj.current - 1);
    } else {
      var preactiveSlide = obj.slide.eq(obj.total);
    }
    obj.slide.each(function() {
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

  var objMaterial = {
    slide: $('.material-single'),
    current: 0,
    total: $('.material-single').length - 1
  }

  var objWork = {
    slide: $('.o-work-single'),
    current: 0,
    total: $('.o-work-single').length - 1
  }

  $('.materials-container .materials-content .slider-left').on('click', function() {
    slideLeft(objMaterial);
  });
  $('.materials-container .materials-content .slider-right').on('click', function() {
    slideRight(objMaterial);
  });

  $('.o-works-container .o-works-content .slider-left').on('click', function() {
    slideLeft(objWork);
  });
  $('.o-works-container .o-works-content .slider-right').on('click', function() {
    slideRight(objWork);
  });

  slideInitial();
});