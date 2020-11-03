<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$stateType = $input['stateType'];
$getTask = $task->searchByType($stateType);
echo json_encode($getTask);