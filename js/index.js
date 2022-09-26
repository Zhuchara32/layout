new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});
