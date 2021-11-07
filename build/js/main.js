"use strict";

$('body').on('click', '.counter__control.plus', function (e) {
  $(e.currentTarget).parent().find('input').val(parseInt($(e.currentTarget).parent().find('input').val()) + 1);
});
$('body').on('click', '.counter__control.minus', function (e) {
  if ($(e.currentTarget).parent().find('input').val() > 1) {
    $(e.currentTarget).parent().find('input').val(parseInt($(e.currentTarget).parent().find('input').val()) - 1);
  }
}); // show modal

$('body').on('click', '[data-modal]:not(.modal)', function (e) {
  if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
  $('.modal.active').removeClass('active');
  $(".modal[data-modal=\"".concat($(e.currentTarget).attr('data-modal'), "\"]")).addClass('active');
}); // close modal events

var closeModal = function closeModal() {
  $('.backdrop').removeClass('active');
  $('.modal').removeClass('active');
  $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);
$('body').on('click', '.backdrop', function (e) {
  if ($(e.target)[0].className === 'backdrop active') closeModal();
}); // close modal on press ESC

$(document).keyup(function (e) {
  if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});
$('body').on('submit', 'form', function (e) {
  e.preventDefault();
});

var someHeight = function someHeight(selector, element) {
  for (var i = 0; i < $(selector).length; i++) {
    var $step = $(selector).eq(i);
    var stepHeight = 0;

    for (var j = 0; j < $step.find(element).length; j++) {
      if ($step.find(element).eq(j).height() > stepHeight) {
        stepHeight = $step.find(element).eq(j).height();
      }
    }

    $step.find(element).height(stepHeight);
  }
};

if ($(window).width() > 767) {
  someHeight('.catalog__list', '.catalog__title');
}