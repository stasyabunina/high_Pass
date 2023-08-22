let openSearch = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__form');
let closeBtn = document.querySelector('.header__search-close');

openSearch.addEventListener('click', function () {
  searchForm.classList.add('header__form--active');
  this.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  searchForm.classList.remove('header__form--active');
  openSearch.classList.remove('active')
});
