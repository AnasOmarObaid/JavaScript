/*global alert, $, console*/
var mainColor = $(":root").css("--main-color");
// Change Color
$(".fixed-menu .change-color li").each(function () {
    "use strict";
    $(this).on("click", function () {
        $(":root").css({
            '--main-color': $(this).data("color")
        });
    });
});
var mainColor = $(":root").css("--main-color");

// Change The Navbar
$(window).scroll(function () {
    "use strict";
    if ($(window).scrollTop() > 760) {
        $(".navbar").css({
            backgroundColor: "rgb(60, 59, 59)",
            opacity: "0.9"
        });
    } else {
        $(".navbar").css({
            backgroundColor: "#525252"

        });
    }
});

$(document).ready(function () {
    "use strict";

    // Start Navbar 
    $(".navbar .links li a").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).addClass("active").parent().siblings().find('a').removeClass("active");
        });
    });

    // Smooth Scroll For Navbar
    $(".navbar .links li a").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("type")).offset().top + 3
        }, 1500);
    });

    // Start Navbar Momile
    $(".Mobile-navbar .list-mobile li a").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
        });
    });

    // Smooth Scroll For Navbar Mobile
    $(".Mobile-navbar .list-mobile li a").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("type")).offset().top + 3
        }, 1500);
    });

    // Start Hide And Show The Navbrae Of Mobile

    $(".Mobile-navbar .fa.fa-chevron-circle-down").on("click", function () {
        $(this, ".fa-chevron-circle-down").toggleClass('fa-chevron-circle-down fa-chevron-circle-up aria-hidden="true"');
        $(".Mobile-navbar").toggleClass("show");

        if ($(".Mobile-navbar").hasClass("show")) {
            $("body", "html").animate({
                paddingTop: "330px"
            }, 900);

            $(".Mobile-navbar .list-mobile").animate({
                height: "330px"
            }, 900);
            $(".Mobile-navbar .list-mobile li").css("visibility", "visible");
        } else {
            $("body", "html").animate({
                paddingTop: "0"
            }, 900);
            $(".Mobile-navbar .list-mobile").animate({
                height: "0"
            }, 900);
            $(".Mobile-navbar .list-mobile li").css("visibility", "hidden");
        }

    });


    // Start Color The Navbar Element When I Reacth This Element 
    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr("id");
                $('.navbar .links li a[data-type = "' + blockId + '"]').addClass("active").parent().parent().siblings().find('a').removeClass("active");
            }
        });
    });


    // Start To Scroll Element
    $(window).scroll(function (e) {
        var scrollToTop = $(".scroll-to-top");
        if ($(window).scrollTop() >= 1100) {
            if (scrollToTop.is(":hidden")) {
                scrollToTop.fadeIn(300);
            }
        } else {
            scrollToTop.fadeOut(300);
        }
    });
    $(".scroll-to-top").click(function (ev) {
        ev.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });



    // To Show The Imge
    var myHeader = $(".header");
    myHeader.height($(window).height());
    $(window).resize(function () { // When The Window Git Smoal
        myHeader.height($(window).height());


        $('.bxslider').each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        });


    });

    // Adjast The List Items
    $('.bxslider').each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });



    // Bx Slider 
    $('.bxslider').bxSlider();



    // Aouto Function Auto Slider
    (function autoSlider() {
        $(".testimonia .slider .active-slider").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(200, function () {
                    $(this).removeClass("active-slider").next().addClass("active-slider").fadeIn(200);
                    autoSlider(); // Call The Function
                });
            } else {
                $(this).delay(3000).fadeOut(200, function () {
                    $(this).removeClass("active-slider");
                    $(".slider div").eq(0).addClass("active-slider").fadeIn(200);
                    autoSlider();
                });
            }
        });
    }());

    // Give The Selected Class When I Click
    $("ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    // For The Shufal

    $(function () {
        $('#Container').mixItUp();
    });

    // For Nice Scroll
    $(function () {
        $("body").niceScroll({
            cursorcolor: mainColor, // The Color Of The Scroll
            cursorwidth: "11px",
            cursorborder: "2px solid mainColor",
            cursorborderradius: 0,
            zindex: "99999999"

        });

    });

    // To Fixed Menu
    $(".fixed-menu").niceScroll({
        cursorcolor: mainColor, // The Color Of The Scroll
        cursorwidth: "11px",
        cursorborder: "2px solid mainColor"
    });


    // To Nice Slider Links 
    $(".link").click(function () {
        $(".the-link-box").slideToggle(function () {
            $(".fa-chevron-circle-up, .fa-chevron-circle-down").toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
        });
    });

    // To Show Fixed Menu 
    $(".fa-align-justify").on("click", function () {
        $(this).parent().toggleClass("show");
        if ($(this).parent().hasClass("show")) {
            $(this).fadeOut();
            $(this).parent().animate({
                left: "0"
            }, 600);
        }
    });

    $(".block").click(function () {
        if ($(".fixed-menu").hasClass("show")) {
            $(".fixed-menu").removeClass("show");
            $(".fa-align-justify").fadeIn();
            $(".fixed-menu").animate({
                left: "-80%"
            }, 1000);
        }
    });
});
