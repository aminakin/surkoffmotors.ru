var menuShow = document.querySelector('.menu-button');
var secondMenuShow = document.querySelector('.second-menu-show')
var menu = document.querySelector('.menu-navigation');
var secondMenu = document.querySelector('.second-level-menu')

menuShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('menu-navigation-show')) {
    menu.classList.remove('menu-navigation-show');}
  else {  menu.classList.add('menu-navigation-show');}
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (menu.classList.contains('menu-navigation-show')) {
      menu.classList.remove('menu-navigation-show');
    }
  }
});

secondMenuShow.addEventListener('mouseover', function(evt) {
  evt.preventDefault();
  secondMenu.classList.add('second-level-menu-show');
});
//
//menu.addEventListener('mouseout', function(evt) {
//  evt.preventDefault();
//  secondMenu.classList.remove('second-level-menu-show');
//});
