if ($(window).width() >= 1240) {
    $(function() {
        $.scrollify({
            section: ".scroll",
            standardScrollElements: ".header",
            scrollspeed: 5000,
            easing: "easeOutExpo",
            setHeights: false,
            before: function() {
                $('.header').addClass('hidden');
            },
            after: function() {
                $('.header').removeClass('hidden');
            }
        });
    });
}