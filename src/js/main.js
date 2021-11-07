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
