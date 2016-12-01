$(function () {

  var $headerLi = $('.menu nav li').has('ul');
  $headerLi.find('a:first').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('ul').stop().slideToggle();
    $('.menu nav li').has('ul').toggleClass('open');
  });

  var $headerHideMenu = $('.hide-menu a');
  var $headerMenu = $('.menu nav > ul');
  $headerHideMenu.on('click', function (e) {
    e.preventDefault();

    $headerMenu.stop().slideToggle();
    $('.hide-menu .line1').toggleClass('line1-transform');
    $('.hide-menu .line2').toggleClass('line2-transform');
    $('.hide-menu .line3').toggleClass('line3-transform');
  });
// hide-menu
  $(window).on('resize', function () {
    if ($(window).width() >= 750){
      $headerMenu.css({
        'display' : 'flex'
      })
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() <= 750){
      $headerMenu.css({
        'display' : 'none'
      })
    }
  });
// hide-menu

  var $sliderPosts = $('.picture');
  $sliderPosts.on('beforeChange', function (slick, curentSlide) {

  });
  $sliderPosts.on('afterChange', function (slick, curentSlide) {

  });

  $sliderPosts.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.new-post .pointer-left a').on('click', function (e) {
    e.preventDefault();
    $('.slide').slick('slickPrev');
  });

  $('.new-post .pointer-right a').on('click', function (e) {
    e.preventDefault();
    $('.slide').slick('slickNext');
  });

  $('.slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.shop-products').slick({
    arrows: false,
    dots: true
  });
  $('.content-sort-links button').on('click', function (e) {
    e.preventDefault();
    $('.shop-products').slick('slickNext');
  });

});

