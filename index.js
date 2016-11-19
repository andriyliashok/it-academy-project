$(function () {
  var $headerLi = $('.menu nav li').has('ul');


  $headerLi.find('a').on('click', function (e) {
    e.preventDefault();

     $(this).siblings('ul').stop().fadeToggle();
      $(this).closest('li').toggleClass('open');
  });

  var $headerHideMenu = $('.hide-menu a');


  $headerHideMenu.on('click', function (e) {
    e.preventDefault();

    $headerHideMenu.siblings('nav').hide();
  })

});

