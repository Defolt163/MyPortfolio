var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['Портфолио'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 0,
    loop: false,
  });

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__items__block'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.humburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('humburger_active');
      menu.classList.toggle('menu__items__block_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('humburger_active');
          menu.classList.toggle('menu__items__block_active');
      })
  })
})

/* slider */
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next, .swipe-hint-next",
    prevEl: ".swiper-button-prev, .swipe-hint-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/* bg */
$('.bg__snow').snowfall({flakeCount : 100, maxSpeed : 0.3, maxSize : 5, round: true});