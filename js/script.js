var menuShow = document.querySelector('.menu-button');
var writeUsShow = document.querySelector('.callback-button');
var secondMenuShow = document.querySelector('.second-menu-show');
var menu = document.querySelector('.menu-navigation');
var secondMenu = document.querySelector('.second-level-menu');
var writeUs = document.querySelector('.modal-write-us');
var modalClose = document.querySelector('.modal-close');
var resultFormClose = document.querySelector('.result-form-close');
var agree = document.getElementById('agree');
var agreeForm = document.querySelector('.modal-result');
var okButton = document.querySelector('.ok-button');


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
    if (agreeForm.classList.contains('modal-show')) {
      agreeForm.classList.remove('modal-show');
    }
  }
});

modalClose.addEventListener('click', function(evt) {
  if (writeUs.classList.contains('modal-show')) {
    writeUs.classList.remove('modal-show');
  }
});

resultFormClose.addEventListener('click', function(evt) {
  if (agreeForm.classList.contains('modal-show')) {
    agreeForm.classList.remove('modal-show');
  }
});

okButton.addEventListener('click', function(evt) {
  if (agreeForm.classList.contains('modal-show')) {
    agreeForm.classList.remove('modal-show');
  }
});

secondMenuShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (secondMenu.classList.contains('second-level-menu-show')) {
    secondMenu.classList.remove('second-level-menu-show');}
  else { secondMenu.classList.add('second-level-menu-show');}
});

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

$(document).ready(function() {
    $("#send-form").click(
		function(){
          if (agree.checked) {
			sendAjaxForm('result_form', 'ajax_form', 'send.php');
			return false;
		}
        }
);
});

function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
        url:     "http://surkoffmotors.ru/send.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: jQuery("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно

        	writeUs.classList.remove('modal-show');
          agreeForm.classList.add('modal-show');
    	},
    	error: function(response) { // Данные не отправлены
    		writeUs.classList.remove('modal-show');
          agreeForm.classList.add('modal-show');
    	}
 	});
};
