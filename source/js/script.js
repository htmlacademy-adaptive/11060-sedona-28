var header = document.querySelector('.main-header');
var button = document.querySelector('.main-header__toggle');
var menu = document.querySelector('.site-list');

header.classList.remove('no-js');

button.addEventListener('click', function() {
  menu.classList.toggle('site-list--is-opened');
  button.classList.toggle('main-header__toggle--is-opened');
});
