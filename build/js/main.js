Fancybox.bind('[data-fancybox]', {});

jQuery(document).ready(function ($) {
  // $('.tabs').lightTabs();

  $('[type=tel]').mask('+7 (999) 999-99-99');

  $('.section-faq__name').click(function () {
    $(this).parent().toggleClass('active');
  });

  // window.addEventListener('click', function (e) {
  //   if (!menu.contains(e.target) && !button.contains(e.target)) {
  //     // Ниже код, который нужно выполнить при срабатывании события.
  //     menu.classList.add('hide');
  //   }
  // });
  // $(document).mouseup(function (e) {
  //   const container = $('.nav-menu');
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //     $('.sub-menu-link').removeClass('open');
  //     if (!$('.hamburger').hasClass('is-active')) {
  //       $('body').removeClass('open-menu');
  //     }
  //   }
  // });

  // $('.hamburger').click(function () {
  //   $('.hamburger').toggleClass('is-active');
  //   $('body').toggleClass('open-menu');
  // });
  $('.search__icon').click(function (e) {
    $('.header').addClass('search-active');
  });
  $(document).mouseup(function (e) {
    const container = $('.search');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.header').removeClass('search-active');
    }
  });

  $('.section-slider__block').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1,
          // prevArrow:
          //   '<button type="button" class="slick-prev-main"><svg><use xlink:href="./img/sprite.svg#arrow-left"></use></svg></button>',
          // nextArrow:
          //   '<button type="button" class="slick-next-main"><svg><use xlink:href="./img/sprite.svg#arrow-right"></use></svg></button>',
        },
      },
    ],
  });
});
