(function ($) {
    $(document).ready(function () {

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
        /*--sliders offers--*/
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

    });
})(jQuery);