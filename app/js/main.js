$(document).ready(function() {
  var $animationElements = $('.animate');
  var $window = $(window);

  function checkIfInView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function () {
      var $element = $(this);
      var elementHeight = $element.outerHeight();
      var elementTopPosition = $element.offset().top;
      var elementBottomPosition = (elementTopPosition + elementHeight);

      if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});

$(document).ready(function() {
  $('.anchor-link').on('click', function (e) {
    e.preventDefault();

    $('#mobileNavClose').click();

    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {});
  });
});

$('#mobileNavOpen').on('click', () => {
  $('#mobileNav').addClass('show');
  $('body').addClass('lock');
  setTimeout(() => {
    $('#mobileNav').addClass('animate');
  }, 50);
});

$('#mobileNavClose').on('click', () => {
  $('#mobileNav').removeClass('animate');
  setTimeout(() => {
    $('#mobileNav').removeClass('show');
    $('body').removeClass('lock');
  }, 230);
});

var swiperGallery1 = new Swiper('.gallery__carousel_1', {
  loop: true,
  allowTouchMove: false,
  centeredSlides: false,
  preventInteractionOnTransition: true,
  slidesPerView: 1,
  freeMode: true,
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  speed: 7000,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  }
});

var swiperGallery2 = new Swiper('.gallery__carousel_2', {
  loop: true,
  allowTouchMove: false,
  centeredSlides: false,
  preventInteractionOnTransition: true,
  slidesPerView: 1,
  freeMode: true,
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  speed: 7000,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  }
});
