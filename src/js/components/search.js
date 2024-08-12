let openSearch = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__form');
let closeBtn = document.querySelector('.header__search-close');

openSearch.addEventListener('click', () => {
  searchForm.classList.add('header__form--active');
  this.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  searchForm.classList.remove('header__form--active');
  openSearch.classList.remove('active')
});
