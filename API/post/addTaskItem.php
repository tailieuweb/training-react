<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$idTask = $input['isTask'];
$valueItem = $input['valueItem'];
$task->addTaskItem($idTask,$valueItem);
$getTask = $task->getTaskListById($idTask);
echo json_encode($getTask);