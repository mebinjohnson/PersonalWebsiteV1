$(document).foundation()
if (document.documentElement.clientWidth < 768) {
    // var prev = 0;
    // var $window = $(window);
    // var nav = $('.navbar');

    // $window.on('scroll', function () {
    //     var scrollTop = $window.scrollTop();
    //     nav.toggleClass('hidden', scrollTop > prev);
    //     prev = scrollTop;
    // });
}
else {
    $(window).scroll(function (e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.header-box').css('background-position', 'center ' + (scrolled * 0.35) + 'px');
    }
}

