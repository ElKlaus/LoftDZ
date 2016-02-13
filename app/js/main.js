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
		$('#project-popup').bPopup({
			speed:650,
			transition: 'slideDown'
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
			console.log('5656544ans');
			console.log(ans);
			if(ans.status === 'OK'){
				form.find('.success-mes').text(ans.text);
			}else{
				form.find('.error-mes').text(ans.text);
			}
		})
		.fail(function() {
			console.log("error");
		})
	}


	return {
		init: init
	};

})();

myModule.init();

