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
    $('.menu .line1').toggleClass('line1-transform');
    $('.menu .line2').toggleClass('line2-transform');
    $('.menu .line3').toggleClass('line3-transform');
  })

});

