(function ($) {
    $(document).ready(function () {
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
    });
})(jQuery);