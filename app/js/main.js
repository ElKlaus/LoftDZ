;var myModule = (function () {


	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
		//То что должно произойти сразу
	};

	// Прослушивает события
	var _setUpListners = function  () {
		$('#add-new-item').on('click', _showModal); //Открыть модальное окно
		$('#add-project').on('submit', _addProject); //Добавление пректа
		};
	
	// Работает с модальным окном	
	var _showModal = function (ev) {
		ev.preventDefault();
		var divPopup = $('#project-popup'),
			form = divPopup.find('.popup-form');

		divPopup.bPopup({
			speed:650,
			transition: 'slideDown',
			onClose: function  () {
				form.find('.server-mes').text('').hide();
			}
		});
	};

	// Добавляет проект
	var _addProject = function  (ev) {		
		console.log('Добавление проекта');
		ev.preventDefault();

		//Объявляем переменные 
		var form = $(this),
			url = 'add_project.php',
			myServerGiveMeAnswer = _ajaxForm(form, url);


		//Запрос на сервер /**/
		
		myServerGiveMeAnswer.done(function(ans) {
			var successBox = form.find('.success-mes'),
				errorBox = form.find('.error-mes')
			if(ans.status === 'OK'){
				errorBox.hide();
				successBox.text(ans.text).show();
			}else{
				successBox.hide();
				errorBox.text(ans.text).show();
			}
		})
	};


	// Универсальная функция
	// Лля ее работы используются 
	// @form - форма
	// @url - адрес php файла, к которому мы обращаемся
	// 1. собирает данные из формы
	// 2. проверяет форму
	// 3. делает запрос на сервер и возвращает ответ с сервера
	var _ajaxForm = function (form, url) {

		if (!validation.validateForm(form)) return false;

		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		}).fail( function (ans) {
			console.log('проблемы в PHP');
			form.find('.error-mes').text('На сервере произошла ошибка').show();
		});

		return result;
	};

	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

myModule.init();

