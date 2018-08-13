$(window).load(transferInputModule);
$(window).resize(transferInputModule); 
$(window).on('load resize', transferInputModule);
$(document).on('ready', function() {
  $('.bck-vd-img').css('height', $('.bottom-header').outerHeight());

  var mi = 0;
  $(function() {
    $('.material-single-image').lazy({
      visibleOnly: true,
      effect: "show",
      effectTime: 1,
      threshold: 0,
      afterLoad: function(element) {
          mi === 13 ? $('.material-single').css('background-image', 'none') : mi++;
      }
    });
  });

  var groups = Array.prototype.slice.call(document.querySelectorAll('.quote-btn-dots'));

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = groups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var group = _step2.value;
      new BtnGroup(group)
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  function slideInitial() {
    $('.material-single').addClass('proactivede');
    setTimeout(function() {
      slideRight({ slide:$('.material-single'), current: -1, total: $('.material-single').length-1 });
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

  $('.materials-container .materials-content .slider-left').on('click', function() {
    slideLeft(objMaterial);
  });
  $('.materials-container .materials-content .slider-right').on('click', function() {
    slideRight(objMaterial);
  });

  slideInitial();
});

function transferInputModule(){
  $(window).width() <= '480' ?
    $('.left-inputs:nth-child(2)').append($('.form-group-file')) :
    $('.left-inputs:nth-child(1)').append($('.form-group-file'));
}