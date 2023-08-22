let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__item');
let closeNav = document.querySelector(".header__burger-close");

burger.addEventListener('click',
  function () {
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

closeNav.addEventListener('click',
  function () {
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})
