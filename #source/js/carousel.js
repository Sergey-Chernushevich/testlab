const swiperConfig = {
  loop: true,
  spaceBetween: 32,
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
};

const createSwiper = (slidesPerView, autoHeight) => {
  return new Swiper(".reviewsCatousel", {
    ...swiperConfig,
    slidesPerView,
    autoHeight,
  });
};

let reviewsCarousel = createSwiper(1, true);

const reinitializeSwiper = () => {
  reviewsCarousel.destroy(true, true);
  reviewsCarousel = createSwiper(1, true);
};

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(reinitializeSwiper, 100);
});
