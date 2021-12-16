var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['Обо мне'],
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


/* анкета */
  var typed = new Typed('.name', {
    // Waits 1000ms after typing "First"
    strings: ['Романов Михаил'],
    typeSpeed: 20,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 0,
    loop: false,
  });
  var typed = new Typed('.data__item-1', {
    // Waits 1000ms after typing "First"
    strings: ['Дата рождения: 19.01.2002'],
    typeSpeed: 3,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 0,
    loop: false,
  });
  var typed = new Typed('.data__item-2', {
    // Waits 1000ms after typing "First"
    strings: ['Желаемая должность: HTML Верстальщик'],
    typeSpeed: 3,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 0,
    loop: false,
  });
  var typed = new Typed('.data__item-3', {
    // Waits 1000ms after typing "First"
    strings: ['Образование: Среднее специальное. <br> КОЛЛЕДЖ СВЯЗИ «Поволжский государственный университет телекоммуникаций и информатики» <span>2019-2022</span>'],
    typeSpeed: 3,
    backSpeed: 50,
    backDelay: 1300,
    startDelay: 0,
    loop: false,
  });
  var typed = new Typed('.profile__descr', {
    // Waits 1000ms after typing "First"
    strings: ['Верстка сайтов на HTML по макету PSD / Figma. <br> Проходил курс Udemy "WEB-Разработчик 2021"<br> • В своих работах я использую технологии БЭМ, FlexBox, Git, Bootstrap, Sass, частично Js и JQuery. <br> • Фронтенд верстка <br> • Частичная SEO оптимизация <br> • Функциональность форм <br> • Адаптация страницы под различные типы устройств <br> • Валидация <br> Верстка выполняется в VSC <br> ✔ Работа продолжается до полного утверждения! <br> ✔ Если вам нужна работа срочно, можете быть уверены, я сделаю все возможное чтобы закончить работу ровно в срок!'],
    typeSpeed: 1,
    backSpeed: 50,
    backDelay: 2300,
    startDelay: 1800,
    loop: false,
  });