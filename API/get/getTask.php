<?php
require_once '../Module/module.php';
$task = new module();
$getTask = $task->getAllTask();
echo json_encode($getTask);