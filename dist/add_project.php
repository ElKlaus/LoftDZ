<?php
	
	$name = $_POST['projectName'];
	$data = array();

	
	$data['mes'] = 'OK';

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя!';
	}else {
		$data['status'] = 'OK';
		$data['text'] = 'Красавчик жи есть!';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;


?>