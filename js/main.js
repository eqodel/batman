const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper_button__next'
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },

      481: {
        slidesPerView: 2
      }
    }
  });
