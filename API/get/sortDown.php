<?php
require_once '../Module/module.php';
$task = new module();
$getTask = $task->sortDown();
echo json_encode($getTask);