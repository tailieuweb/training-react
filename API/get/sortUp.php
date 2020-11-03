<?php
require_once '../Module/module.php';
$task = new module();
$getTask = $task->sortUp();
echo json_encode($getTask);