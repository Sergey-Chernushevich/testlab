window.addEventListener("DOMContentLoaded", () => {
  const reviewsCarousel = new Swiper(".reviewsCatousel", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoHeight: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".handler-next",
      prevEl: ".handler-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        autoHeight: false,
      },
      1500: {
        slidesPerView: 3,
        autoHeight: false,
      },
    },
  });

  window.addEventListener("resize", () => {
    reviewsCarousel.update();
  });
});
