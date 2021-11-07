$('body').on('click', '.counter__control.plus', (e) => {
    $(e.currentTarget)
        .parent()
        .find('input')
        .val(parseInt($(e.currentTarget).parent().find('input').val()) + 1);
});

$('body').on('click', '.counter__control.minus', (e) => {
    if ($(e.currentTarget).parent().find('input').val() > 1) {
        $(e.currentTarget)
            .parent()
            .find('input')
            .val(parseInt($(e.currentTarget).parent().find('input').val()) - 1);
    }
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
};

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
});

let someHeight = (selector, element) => {
    for (let i = 0; i < $(selector).length; i++) {
        let $step = $(selector).eq(i);
        let stepHeight = 0;

        for (let j = 0; j < $step.find(element).length; j++) {
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
