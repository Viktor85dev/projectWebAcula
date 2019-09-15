(function ($) {
    $(document).ready(function () {

        $(window).resize(pageView);
        function pageView() {
            if ($(window).outerWidth() >= 768) {
                $('.menu').addClass('menuFlex');
                $('.menu').removeAttr('style');
                $('.menu').removeClass('menuBlock');
                $('.menu-btn').removeClass('menu-btn_active');
            }
        }
        /*----burger-------*/
        $('.menuBurger').on('click', function () {
            $('.menu').slideToggle(200, function () {
                if ($(this).css('display') == 'none') {
                    $(this).removeAttr('style');
                }
            });
        });
        $('.menu li a').on('click', function (e) {
            e.preventDefault();
        });
        $('.menu-btn').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('menu-btn_active');
        });

    });
})(jQuery);