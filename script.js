$(document).ready(function() {
    // Header
    let menu = $('#menu-btn');
    let navbar = $('.navbar');
    let header = $('.header');

    menu.click(function() {
        menu.toggleClass('fa-times');
        navbar.toggleClass('active');
        header.toggleClass('active');
    });

    $(document).click(function(e) {
        if (!menu.is(e.target) && !navbar.is(e.target)) {
            menu.removeClass('fa-times');
            navbar.removeClass('active');
            header.removeClass('active');
        }
    });

    // Scroll to Top
    let scrollToTop = $('#scroll-to-top');
    scrollToTop.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            scrollToTop.fadeIn();
            header.addClass('shrunk'); // Add the 'shrunk' class when scrolling
        } else {
            scrollToTop.fadeOut();
            header.removeClass('shrunk'); // Remove the 'shrunk' class when not scrolling
        }
    });

    scrollToTop.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Swiper Instances (assuming you have Swiper sliders)
    var homeSwiper = new Swiper(".home-slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
    });

    var featureSwiper = new Swiper(".feature-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
    });

    var trainersSwiper = new Swiper(".trainers-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
    });

    var blogsSwiper = new Swiper(".blogs-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
    });
});