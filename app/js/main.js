;var myModule = (function () {

	var init = function () {
		_setUpListners();
		//То что должно произойти сразу
	};

	var _setUpListners = function  () {
		$('#add-new-item').on('click', _showModal); //Открыть модальное окно
		$('#add-project').on('submit', _addProject); //Добавление пректа
		};
		
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

	var _addProject = function  (ev) {		
		console.log('Send to project');
		ev.preventDefault();

		//Объявляем переменные 
		var form = $(this),
			url = 'add_project.php',
			data = form.serialize();

		console.log(data);


		//Запрос на сервер /**/
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			console.log(ans);
			if(ans.status === 'OK'){
				console.log(ans.text);				
				form.find('.success-mes').text(ans.text).show();
			}else{
				console.log(ans.text);	
				form.find('.error-mes').text(ans.text).show();
			}
		})
		.fail(function() {
			console.log("error");
		})
	};

	var _ajaxForm = function () {
		//
	}


	return {
		init: init
	};

})();

myModule.init();

