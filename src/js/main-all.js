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

        /*--slider header---*/
        $(".slider").slick({
            infinite: true,
            autoplay: true,
            speed: 3000,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        })
        /*----slider offers----*/


        /*----tabs offers-----*/
        $('.tab-header a').on('click', function (e) {
            e.preventDefault();
        });
        $('.js-tab-trigger').click(function () {

            var id = $(this).attr('data-tab'),
                content = $('.js-tab-content[data-tab="' + id + '"]');

            $('.js-tab-trigger.active').removeClass('active');
            $(this).addClass('active');

            $('.js-tab-content.active').removeClass('active');
            content.addClass('active');

            if($('.js-tab-content').hasClass('active')) {

                setTimeout(function () {

                    $(".sliders-box").slick('setPosition');
                    $(window).resize();

                }, 0);

            }

        });

            $("#offers").slick({
                dots: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<div class="nav-arrow arrow-prev">',
                nextArrow: '<div class="nav-arrow arrow-next">',
                responsive: [
                    {
                        breakpoint: 1650,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1150,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            })
            $("#offers2").slick({
                dots: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<div class="nav-arrow arrow-prev">',
                nextArrow: '<div class="nav-arrow arrow-next">',
                responsive: [
                    {
                        breakpoint: 1650,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1150,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            })


        /*---scroll---------*/
        $(".advantages-text").niceScroll({
            cursorborder: "",
            background: "#f5f4f4",
            cursorcolor: "#fbd341",
            cursorwidth: "1px",
            cursorminheight: 5,
            cursorborderradius: "20px",
            autohidemode: false
        });

        /*----formstyler for select----*/
        $('select').styler();
        /*-------validation------------*/
        $('#form').validate({
            rules:{
                name:{
                    required: true,
                    minlength: 3,
                    maxlength: 10,
                },
                email:{
                    required: true,
                    email: true,
                },
                tel:{
                    required: true,

                },
            },
            messages:{
                name:{
                    required: "Введите свое имя",
                    minlength: "Имя должно быть минимум 3 символа",
                    maxlength: "Максимальное число символов - 16",
                },
                email:{
                    required: "Введите свой email",
                    email: 'Пример ввода: job@gmail.com'


                },
                tel:{
                    required: "Введите свой номер телефона",
                },

            }

        });
        /*-------maskedinput-------*/
        $('input[type=tel]').inputmask({"mask": "(099) 999-99-99"});

    });
})(jQuery);