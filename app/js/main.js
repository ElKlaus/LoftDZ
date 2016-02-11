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
		ev.preventDefault;
		$('#project-popup').bPopup({
			speed:650,
			transition: 'slideDown'
		});
	};

	var _addProject = function  (ev) {		
		console.log('Send to project');
		ev.preventDefault;

		//Объявляем переменные 
		var form = $(this),
			url = 'add_project.php',
			data = form.serialize();
		console.log(data);


		//Запрос на сервер 
		/*$.ajax({
			url: '/path/to/file',
			type: 'POST',
			dataType: 'json',
			data: data
		})
		.done(function(ans) {
			console.log("success");
			console.log("ans");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});*/
		
	}


	return {
		init: init
	};

})();

myModule.init();

