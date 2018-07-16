$(document).foundation()
if (document.documentElement.clientWidth < 768) {
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }

    prevScrollpos = currentScrollpos;
}
}
else{
    $(window).scroll(function (e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.header-box').css('background-position', 'center ' + (scrolled * 0.35) + 'px');
    }
}

