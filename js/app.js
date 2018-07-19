$(document).foundation()
if (document.documentElement.clientWidth > 768) {
    $(window).scroll(function (e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.header-box').css('background-position', 'center ' + (scrolled * 0.35) + 'px');
    }
}
