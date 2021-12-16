var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['WEB DEV PORTFOLIO', 'HTML / CSS / SASS', 'Добро Пожаловать!'],
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