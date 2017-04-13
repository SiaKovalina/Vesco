$(function () {
    new WOW().init();

});

/*Magnific popup */
$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*Owl-Caruosel*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
            },
        // breakpoint from 480 up
        480 : {
            items: 2
            },
        // breakpoint from 768 up
        768 : {
            items: 3
            }
        }
    });
});

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });
});

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
            },
        // breakpoint from 480 up
        480 : {
            items: 3
            },
        // breakpoint from 768 up
        768 : {
            items: 5
            },
        // breakpoint from 992 up
        992 : {
            items: 6
            }
        }
    });
});

/*NAVIGATION*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

/*Smooth scrolling*/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // get/return id #about, #work, #team and etc
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*Close mobile menu on click*/
$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});


