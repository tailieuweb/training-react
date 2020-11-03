<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$isTaskItem = $input['isTaskItem'];
$idTask = $input['idTask'];
$task->deleteTaskItem($isTaskItem);
$getTask = $task->getTaskListById($idTask);
echo json_encode($getTask);