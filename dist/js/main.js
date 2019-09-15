(function ($) {
    $(document).ready(function () {

        /*----formstyler for select----*/
        $('select').styler();

        /*-------maskedinput-------*/
        $('input[type=tel]').inputmask({"mask": "(099) 999-99-99"});

    });
})(jQuery);