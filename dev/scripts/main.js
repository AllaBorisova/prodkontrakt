// Fancybox.bind('[data-fancybox]', {});

jQuery(document).ready(function ($) {
  $('.tabs').lightTabs();

  $('[type=tel]').mask('+7 (999) 999-99-99');

  $('.section-faq__name').click(function () {
    $(this).parent().toggleClass('active');
  });

  $('.variants-item').click(function () {
    $(this).parent().find('.variants-item').removeClass('active');
    $(this).addClass('active');
  });
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });
  $('.filter__name').click(function () {
    $(this).parent().toggleClass('open');
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
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
    prevArrow:
      "<button type='button' class='slick-prev'><svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><g stroke='#F48C37'><circle cx='12' cy='12' r='10' transform='rotate(90 12 12)'/><path d='M13.5 15l-3-3 3-3' stroke-linecap='round' stroke-linejoin='round'/></g></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next'><svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><g stroke='#F48C37'><circle cx='12' cy='12' r='10' transform='rotate(-90 12 12)'/><path d='M10.5 9l3 3-3 3' stroke-linecap='round' stroke-linejoin='round'/></g></svg></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.section__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: false,
    prevArrow:
      "<button type='button' class='slick-prev'><svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><g stroke='#F48C37'><circle cx='12' cy='12' r='10' transform='rotate(90 12 12)'/><path d='M13.5 15l-3-3 3-3' stroke-linecap='round' stroke-linejoin='round'/></g></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next'><svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'><g stroke='#F48C37'><circle cx='12' cy='12' r='10' transform='rotate(-90 12 12)'/><path d='M10.5 9l3 3-3 3' stroke-linecap='round' stroke-linejoin='round'/></g></svg></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          // centerMode: true,
          variableWidth: true,
          // slidesToShow: 3,
        },
      },
    ],
  });
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});
