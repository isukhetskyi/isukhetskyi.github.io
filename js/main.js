$(document).ready(function() {
    $(".mdl-textfield__input").blur(function() {

        if (!this.value) {
            $(this).prop('required', true);
            $(this).parent().addClass('is-invalid');
        }
    });

    $(".mdl-button[type='submit']").click(function(event) {
        var formInput = $(this).siblings(".mdl-textfield").children(".mdl-textfield__input");
        var isValid = true;
        for (var i = 0; i < formInput.length; i++) {
            if (!formInput[i].value) {

                $(formInput[i]).prop('required', true);
                $(formInput[i]).parent().addClass('is-invalid');
                isValid = false;
            }
        }
        if (isValid) {
            emailjs.send("gmail", "cv_email", {
                from_name: $("#name").val() + " - " + $("#email").val(),
                message_html: $('#message').val()
            });

            setTimeout(function() {
                $("#div1").fadeOut(1000);
            }, 2000);
            setTimeout(function() {
                $(location).attr('href', 'index.html');
            }, 3000);
        }

    });


    var selector = 'a.smooth';

    $(selector).on('click', function() {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });



});

$(function() {
    $('a.smooth').click(function() {
        console.log("SMOOTH BEGIN");
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "https://isukhetskyi.github.io" || href == "" ? 'html' : href);
        var position = target.get(0).offsetTop - 130;
        $(".mdl-layout__content").animate({ scrollTop: position }, speed, "swing");
        console.log("SMOOTH END");
    });
});