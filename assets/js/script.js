$(document).ready(function () {

    $(".menu-toggle").on("click", function () {
        $(".nav-menu").toggleClass("active");

        $(this).find("i").toggleClass("fa-bars fa-xmark");
    });

    $(".nav-menu a").on("click", function () {

        $(".nav-menu").removeClass("active");

        $(".menu-toggle i")
            .removeClass("fa-xmark")
            .addClass("fa-bars");
    });

    $('a[href^="#"]').on("click", function (e) {

        var target = $(this.hash);

        if (target.length) {

            e.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 70
                },
                700
            );
        }

    });

    function revealElements() {

        $(".section").each(function () {

            var elementTop = $(this).offset().top;

            var windowBottom =
                $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop + 100) {

                $(this)
                    .find(".section-heading, .about-text, .about-stats, .skill-card, .timeline-item, .project-card, .contact-wrapper")
                    .addClass("active");

            }

        });

    }

    $(window).on("scroll", revealElements);

    revealElements();

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var subject = $("#subject").val().trim();
        var message = $("#message").val().trim();

        if (!name || !email || !subject || !message) {
            $("#formMessage")
            .text("Please complete all fields.")
            .css("color", "#fca5a5")
            .fadeIn();
            return;
        }

        var templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send('service_y9eaw5n', 'template_l75ma76', templateParams)
            .then(function() {
            $("#formMessage")
                .text("Message sent successfully!")
                .css("color", "#86efac")
                .fadeIn();
            $("#contactForm")[0].reset(); // I-clear ang form
            }, function(error) {
            $("#formMessage")
                .text("Failed to send message. Please try again.")
                .css("color", "#fca5a5")
                .fadeIn();
            });
        });

    $("#year").text(new Date().getFullYear());

    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 30) {

            $(".navbar").css(
                "box-shadow",
                "0 10px 30px rgba(0,0,0,0.2)"
            );

        } else {

            $(".navbar").css(
                "box-shadow",
                "none"
            );

        }

    });

});
