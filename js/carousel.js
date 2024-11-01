const reviewsCatousel = new Swiper(".reviewsCatousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 32,
  autoHeight: true,

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
