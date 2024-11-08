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

let header = $('.top__header')[0];
let topSectionHeight = $('#top').height();
$(window).on('scroll', () => {
  if (window.scrollY > topSectionHeight) {
    $(header).addClass('fixed');
  } else {
    $(header).removeClass('fixed');
  }

  if (window.scrollY > $(header).height()) {
    $(header).addClass('scrolled');
    $('#top').css('paddingTop', $(header).height());
  } else {
    $(header).removeClass('scrolled');
    $('#top').css('paddingTop', 0);
  }

  if (window.scrollY > $(header).height() + 100) {
    $(header).addClass('transition');
  } else {
    $(header).removeClass('transition');
  }
});

$('.collapse__body').hide();
$('.collapse__head').on('click', function() {
  $(this).parent().toggleClass('active');
  $(this).next('.collapse__body').slideToggle();
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

var feedbackCarousel = new Swiper('.feedback__carousel', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.19,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.feedback .swiper-button-next',
    prevEl: '.feedback .swiper-button-prev',
  },
  breakpoints: {
    992: {
      centeredSlides: false,
      slidesPerView: 4.01,
      spaceBetween: -10,
    },
    768: {
      centeredSlides: false,
      slidesPerView: 3.01,
      spaceBetween: -10,
    },
    601: {
      centeredSlides: false,
      slidesPerView: 2.01,
      spaceBetween: -10,
    },
    451: {
      centeredSlides: true,
      slidesPerView: 1.14,
      spaceBetween: 20,
    },
  }
});

$(document).ready(function() {
  $('.form .form__input').bind('input', function() {
    $(this).removeClass('error');
  })

  $('#footerFormSubmit').click(function() {
    $("#footerFormError").addClass('hide');

    let fieldsList = $('.footer .form .form__input');
    let hasEmptyField = false;

    for (let i = 0; i < fieldsList.length; i++) {
      if (!$(fieldsList[i]).val()) {
        $(fieldsList[i]).addClass('error');
        hasEmptyField = true;
      }
    }

    if (hasEmptyField) {
      return;
    }

    $.ajax({
      url: "/send.php",
      type: "post",
      data: {
        "name":    $('#footerFormName').val(),
        "email":   $('#footerFormEmail').val(),
        "question":   $('#footerFormQuestion').val(),
      },
      beforeSend: function() {
        $("#footerFormLoader").addClass('show');
      },
      error: function() {
        $("#footerFormLoader").removeClass('show');
        $("#footerFormError").removeClass('hide');
      },
      success: function() {
        $("#footerFormError").addClass('hide');
        $("#footerFormLoader").removeClass('show');
        $("#footerFormContent").addClass('hide');
        $("#footerFormSuccess").removeClass('hide');

        setTimeout(() => {
          $("#footerFormContent").removeClass('hide');
          $("#footerFormSuccess").addClass('hide');
        }, 5000);
      }
    });
  });
});
