;var validation = (function () {

	var init = function () {
		_setUpListners();
		//То что должно произойти сразу
	};
	// Прослушка событий
	var _setUpListners = function  () {	
			$('form').on('keydown', '.has-error ', _removeError);
		};

	var _removeError = function () {
		$(this).removeClass('has-error');
	}
	// Создает тултипы
	var _createQtip = function (elemet, position) {

		// Позиция тутипа
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			position = {
				my: 'left center',
				at: 'right center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		// инициализация тултипа
		elemet.qtip({
			content: {
				text: function () {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 16					
				}
			}
		}).trigger('show');
	}

	// Универсальная функция
	var validateForm = function (form) {
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;

		// Пройдемся по всем элементам формы	
		$.each(elements, function(index, val) {
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');
			if(val.length === 0){
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}
		});

		return valid;
	}

	return {
		init: init,
		validateForm: validateForm
	};

})();

validation.init();