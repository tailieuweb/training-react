<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$data = $input["dataEdit"];
$dataEdit = $data['dataEdit'];
$taskId = $data['id'];
$nameTask = $dataEdit['tencongviec'];
$img = $dataEdit['anhcongviec'];
$dayS = $dataEdit['dayS'];
$dayE = $dataEdit['dayE'];
$state = $dataEdit['trangthai'];
$task->updateTaskById($taskId,$nameTask,$img,$dayS,$dayE,$state);