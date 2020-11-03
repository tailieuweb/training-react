<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$dataInput = $input["data"];
$tencongviec = $dataInput['tencongviec'];
$anhcongviec = $dataInput['anhcongviec'];
$dayS = $dataInput['dayS'];
$dayE = $dataInput['dayE'];
$trangthai = $dataInput['trangthai'];
$task->addTask($tencongviec,$anhcongviec,$dayS,$dayE,$trangthai);
$getTask = $task->getAllTask();
echo json_encode($getTask);