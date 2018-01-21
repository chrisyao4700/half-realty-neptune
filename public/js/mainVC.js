function didHitGetStarted() {
    $('body').removeClass('offcanvas');
    $('.js-gtco-nav-toggle').removeClass('active');
    $('html, body').animate({
        scrollTop: $('#gtco-started').offset().top
    }, 1000);
}