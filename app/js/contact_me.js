;var contactMe = (function () {

	var init = function () {
		_setUpListners();
	//То что должно произойти сразу
	};
	// Прослушка событий
	var _setUpListners = function  () {
		$('#contact_me').on('submit', _submitForm);
	};

	var _submitForm = function (ev) {
		console.log('Отправка формы');
		ev.preventDefault();
		var form = $(this),
			url = 'contact_me.php',
			devObj = _ajaxForm(form, url);
			// Что-то будем делать с ответом сервера defObj
	};

	var _ajaxForm = function (form, url) {
		console.log('ajax запрос, но с проверкой!');
		if (!validation.validateForm(form)) return false;
		// если false то код ниже не произойдет никогда
	}

	return {
		init: init
	};

})();

contactMe.init();