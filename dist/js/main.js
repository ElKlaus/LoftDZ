var myModule=function(){var t=function(){n()},n=function(){$("#add-new-item").on("click",e),$("#add-project").on("submit",i)},e=function(t){t.preventDefault();var n=$("#project-popup"),e=n.find(".popup-form");n.bPopup({speed:650,transition:"slideDown",onClose:function(){e.find(".server-mes").text("").hide()}})},i=function(t){console.log("Добавление проекта"),t.preventDefault();var n=$(this),e="add_project.php",i=o(n,e);i.done(function(t){var e=n.find(".success-mes"),i=n.find(".error-mes");"OK"===t.status?(i.hide(),e.text(t.text).show()):(e.hide(),i.text(t.text).show())})},o=function(t,n){if(!validation.validateForm(t))return!1;data=t.serialize();var e=$.ajax({url:n,type:"POST",dataType:"json",data:data}).fail(function(n){console.log("проблемы в PHP"),t.find(".error-mes").text("На сервере произошла ошибка").show()});return e};return{init:t}}();myModule.init();var validation=function(){var t=function(){n()},n=function(){$("form").on("keydown",".has-error ",e)},e=function(){$(this).removeClass("has-error")},i=function(t,n){n="right"===n?{my:"left center",at:"right center"}:{my:"left center",at:"right center",adjust:{method:"shift none"}},t.qtip({content:{text:function(){return $(this).attr("qtip-content")}},show:{event:"show"},hide:{event:"keydown hideTooltip"},position:n,style:{classes:"qtip-mystyle qtip-rounded",tip:{height:10,width:16}}}).trigger("show")},o=function(t){var n=t.find("input, textarea").not('input[type="file"], input[type="hidden"]'),e=!0;return $.each(n,function(t,n){var o=$(n),n=o.val(),r=o.attr("qtip-position");0===n.length&&(o.addClass("has-error"),i(o,r),e=!1)}),e};return{init:t,validateForm:o}}();validation.init();var contactMe=function(){var t=function(){n()},n=function(){$("#contact_me").on("submit",e)},e=function(t){console.log("Отправка формы"),t.preventDefault();var n=$(this),e="contact_me.php";i(n,e)},i=function(t,n){return console.log("ajax запрос, но с проверкой!"),validation.validateForm(t)?void 0:!1};return{init:t}}();contactMe.init();