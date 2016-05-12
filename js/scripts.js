(function ($) {
    $(document).ready(function () {
        var hiddenInputs = $('*[data-hidden="true"]');
        hiddenInputs.attr('aria-hidden','true');
        hiddenInputs
            .focus(function () {
                $(this).attr('aria-hidden', 'false');
            })
            .blur(function () {
                $(this).attr('aria-hidden', 'true');
            });

    });
})(jQuery);