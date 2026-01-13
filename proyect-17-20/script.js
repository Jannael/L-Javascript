var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
        scale: 1,
        perSlideOffset: 1000, 
        perSlideRotate: 100,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,

});