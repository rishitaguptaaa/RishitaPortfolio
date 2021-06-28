$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 190) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
});

$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
});

$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

var typed = new Typed(".typing", {
    strings: ["Learner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

});