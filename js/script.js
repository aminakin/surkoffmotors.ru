var menuShow = document.querySelector('.menu-button');
var writeUsShow = document.querySelector('.callback-button');
var secondMenuShow = document.querySelector('.second-menu-show');
var menu = document.querySelector('.menu-navigation');
var secondMenu = document.querySelector('.second-level-menu');
var writeUs = document.querySelector('.modal-write-us');
var modalClose = document.querySelector('.modal-close');

menuShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('menu-navigation-show')) {
    menu.classList.remove('menu-navigation-show');
  secondMenu.classList.remove('second-level-menu-show');}
  else {menu.classList.add('menu-navigation-show');}
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (menu.classList.contains('menu-navigation-show')) {
      menu.classList.remove('menu-navigation-show');
      secondMenu.classList.remove('second-level-menu-show');
    }
    if (writeUs.classList.contains('modal-show')) {
      writeUs.classList.remove('modal-show');
    }
  }
});

modalClose.addEventListener('click', function(evt) {
  if (writeUs.classList.contains('modal-show')) {
    writeUs.classList.remove('modal-show');
  }
});

secondMenuShow.addEventListener('mouseover', function(evt) {
  evt.preventDefault();
  secondMenu.classList.add('second-level-menu-show');
});

//writeUsShow.addEventListener('click', function(evt) {
//  evt.preventDefault();
//  writeUs.classList.add('modal-show');
//});

$('#button').click(function(e) {
    var $message = $('#popup');

    if ($message.css('display') != 'block') {
        writeUs.classList.add('modal-show');

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('#popup').length == 0) {
                writeUs.classList.remove('modal-show');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }

    e.preventDefault();
});
