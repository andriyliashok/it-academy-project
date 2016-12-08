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
    if ($(window).width() < 734){
      $headerMenu.css({
        'display' : 'none'
      })
    } else {
      $headerMenu.css({
        'display' : 'flex'
      })
    }
  });

// hide-menu

  var $sliderPosts = $('.picture');
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

  $('.content-sort-links .page-list').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('page-list-shop');
    $('.content-sort-links .album-list').addClass('album-list-shop-1');
    $('.content-sort-links .album-list').removeClass('album-list-shop');
    $('.container .shop-products .featured-product').addClass('featured-product-shop');
    $('.container .shop-products .product-actions').addClass('product-actions-shop');
    $('.container .shop-products .product-name').addClass('product-name-shop');
    $('.container .shop-products .product-category').addClass('product-category-shop');
    $('.container .shop-products .product-price').addClass('product-price-shop');
  });
  $('.content-sort-links .album-list').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('album-list-shop');
    $('.content-sort-links .page-list').removeClass('page-list-shop');
    $('.container .shop-products .featured-product').removeClass('featured-product-shop');
    $('.container .shop-products .product-actions').removeClass('product-actions-shop');
    $('.container .shop-products .product-name').removeClass('product-name-shop');
    $('.container .shop-products .product-category').removeClass('product-category-shop');
    $('.container .shop-products .product-price').removeClass('product-price-shop');
  });

 // $('select').uniform();

  $('select').chosen({disable_search_threshold: 10});

  $('.product-preview .thumbs').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    arrows: false
  });

  $('.thumbs a').on('click', function (e) {
    e.preventDefault();
    var linkAttr = $(this).attr('href');

    $('.product-image img').attr('src', linkAttr)
  });

  $('.tabs a').on('click', function (e) {
    e.preventDefault();
    var tabId = $(this).attr('href');
    $('.tabs a').removeClass('active');
    $(this).addClass('active');
    $(tabId).fadeIn().siblings().hide();
  });
  $( "#spinner" ).spinner({
    max: 100,
    min: 1
  });

  $( ".spinner input" ).spinner('value', 1);
  $('.spinner .ui-icon-triangle-1-n').text('+');
  $('.spinner .ui-icon-triangle-1-s').text('-');
});

