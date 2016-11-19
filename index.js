$(function () {
  var $headerLi = $('.menu nav li').has('ul');


  $headerLi.find('a:first').on('click', function (e) {
    e.preventDefault();

    $(this).siblings('ul').stop().slideToggle();
    $('.menu nav li').has('ul').toggleClass('open');
  });

  var $headerHideMenu = $('.hide-menu a');

  $headerHideMenu.on('click', function (e) {
    e.preventDefault();

    $('.menu nav').stop().slideToggle();
  })

});

