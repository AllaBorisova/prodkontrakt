// Fancybox.bind('[data-fancybox]', {});

jQuery(document).ready(function ($) {
  //tabs
  $('.tabs').lightTabs();

  //phone mask
  $('[type=tel]').mask('+7 (999) 999-99-99');

  //faq toggle
  $('.section-faq__name').click(function () {
    // $(this).parent().toggleClass('active');
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(this).parent().find('.section-faq__text').slideUp(300);
    } else {
      $(this).parent().addClass('active');
      $(this).parent().find('.section-faq__text').slideDown(300);
    }
  });

  //variants of weight
  $('.variants-item').click(function () {
    $(this).parent().find('.variants-item').removeClass('active');
    $(this).addClass('active');
  });

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  //filter toggle
  $('.filter__name').click(function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
      $(this).parent().find('.filter__info').slideUp(300);
    } else {
      $(this).parent().addClass('open');
      $(this).parent().find('.filter__info').slideDown(300);
    }
  });

  //popup
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
    },
  });

  // calc
  function calc() {
    const weight = $('select[name="weight"]').val();
    const normal = $('select[name="normal"]').val();
    const result = ((weight / normal) * 100).toFixed();
    $('.calc__result').text(`${result} г/сутки`);
  }
  $('.button-calc').click(function () {
    let error = false;
    $('select[name="weight"]').parent().removeClass('error');
    $('select[name="normal"]').parent().removeClass('error');

    const weight = $('select[name="weight"]').val();
    const normal = $('select[name="normal"]').val();
    console.log(weight, normal);
    if (weight === '') {
      error = true;
      $('select[name="weight"]').parent().addClass('error');
    }
    if (normal === '') {
      error = true;
      $('select[name="normal"]').parent().addClass('error');
    }
    if (error === false) {
      calc();
    }
  });
  $('select[name="weight"], select[name="normal"]').on('change', function () {
    if ($(this).val() !== '') {
      $(this).parent().removeClass('error');
    }
  });

  //search results
  $('.header .search__input').on('keyup', function () {
    $('.header .search').addClass('show-results');
    // $('.search__results').toggle();
  });

  $('.search__icon').click(function (e) {
    $('.header').addClass('search-active');
    $('.header .search__input').focus();
  });
  $(document).mouseup(function (e) {
    const container = $('.search');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.header').removeClass('search-active');
      container.removeClass('show-results');
    }
  });

  $('.section-slider__block').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    prevArrow:
      "<button type='button' class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='10' transform='rotate(90 12 12)' stroke='#F48C37'/><path d='M13.5 15L10.5 12L13.5 9' stroke='#F48C37' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    nextArrow:
      "<button type='button' class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='10' transform='rotate(-90 12 12)' stroke='#F48C37'/><path d='M10.5 9L13.5 12L10.5 15' stroke='#F48C37' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
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
      "<button type='button' class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='10' transform='rotate(90 12 12)' stroke='#F48C37'/><path d='M13.5 15L10.5 12L13.5 9' stroke='#F48C37' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    nextArrow:
      "<button type='button' class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='10' transform='rotate(-90 12 12)' stroke='#F48C37'/><path d='M10.5 9L13.5 12L10.5 15' stroke='#F48C37' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
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
