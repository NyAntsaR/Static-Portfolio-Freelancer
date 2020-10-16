$(document).ready(function() {
    $("#navigation li a").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition -  20}, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $('.chart').easyPieChart({
        size: 160,
        barColor: "#a17c4f",
        scaleLength: 0,
        lineWidth: 15,
        trackColor: "#373737",
        lineCap: "circle",
        animate: 2000,
      });
})