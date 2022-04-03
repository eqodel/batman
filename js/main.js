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


  var menuButton = $('.menu__button');
  menuButton.on('click', function () {
    $('.header-wrapper').toggleClass('header-wrapper--mobile');
    $('.header__menu').toggleClass('header__menu--mobile');
    $('.header__logo').toggleClass('header__logo--mobile');
    $('.header__social').toggleClass('header__social--mobile');
    $('.menu__close').toggleClass('menu__close--mobile');
  });

  var closeButton = $('.menu__close');
  closeButton.on('click', function () {
    $('.header-wrapper').toggleClass('header-wrapper--mobile');
    $('.header__menu').toggleClass('header__menu--mobile');
    $('.header__logo').toggleClass('header__logo--mobile');
    $('.header__social').toggleClass('header__social--mobile');
    $('.menu__close').toggleClass('menu__close--mobile');
  });
