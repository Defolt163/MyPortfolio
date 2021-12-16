$(document).ready(function(){
    $('.caorusel__inner').slick({
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><div class="d28"></div><div class="d29"></div></button>',
        prevArrow: '<button type="button" class="slick-prev"><div class="d30"></div><div class="d31"></div></button>',
        arrows: true,
        responsive: [
            {
              breakpoint: 620,
              settings: {
                arrows: false,
                /* dots: false, */
              }
            },
            {
              breakpoint: 1440,
              settings: {
                cssEase: 'linear',
                fade: true,
              }
            }
        ]
    });
    //smooth scroll
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1000){
        $('.page__up').fadeIn();
      } else{
        $('.page__up').fadeOut();
      }
    });

    $("a[href^='#']").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
      });
  //modal
    $('[data-modal=discounter]').on('click', function(){
      $('.overlay, #discounter').fadeIn();
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #discounter, #thank').fadeOut();
    });

  //mailer
    $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find('input').val('');
        $('.overlay, #discounter').fadeOut();

        $('form').trigger('reset');
      });
      return false;
    });
})

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.toolbar'),
  menuItem = document.querySelectorAll('.toolbar_item'),
  crossbox = document.querySelector('.head__square'),
  hamburger = document.querySelector('.humburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('humburger_active');
      crossbox.classList.toggle('head__square_active');
      menu.classList.toggle('toolbar_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('humburger_active');
          menu.classList.toggle('toolbar_active');
          crossbox.classList.toggle('head__square_active');
      })
  })
})

