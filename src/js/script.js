var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['WEB DEV PORTFOLIO', 'HTML / CSS / SASS', 'Js / JQuery / Gulp', 'WEB DEV PORTFOLIO'],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 1000,
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

/* snow */
$('.bg__snow').snowfall({flakeCount : 100, maxSpeed : 0.3, maxSize : 5, round: true});