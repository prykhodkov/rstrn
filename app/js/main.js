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

    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {});
  });
});

$('#mobileNavOpen').on('click', () => {
  $('#mobileNav').addClass('show');
  setTimeout(() => {
    $('#mobileNav').addClass('animate');
  }, 50);
});

$('#mobileNavClose').on('click', () => {
  $('#mobileNav').removeClass('animate');
  setTimeout(() => {
    $('#mobileNav').removeClass('show');
  }, 230);
});