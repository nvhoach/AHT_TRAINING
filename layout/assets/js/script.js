$(document).ready(function () {
    "use strict";
    $('.mobile-nav').on('click', function (e) {
        e.preventDefault();
        $('.main-menu').toggle();
    });

    // $('.news-items').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: true,
    // });


});