<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$idTask = $input['idTask'];
$task->deleteTask($idTask);
$getTask = $task->getAllTask();
echo json_encode($getTask);