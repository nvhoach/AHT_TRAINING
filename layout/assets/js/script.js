"use strict";
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 17,
        nav: false,
        autoplay: true,
        dotsClass: 'btn-area',
        dotClass: 'btn-switch-new',
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });
});

const mobileNav = document.querySelector('.mobile-nav');
const mainMenu = document.querySelector('.main-menu');
const screen = window.matchMedia("(max-width: 500px)");
if (screen.matches) {
    mainMenu.classList.add("close-main-menu");
}

mobileNav.addEventListener('click', function (e) {
    e.preventDefault();
    mainMenu.classList.toggle("close-main-menu");
});
