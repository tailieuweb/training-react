<?php
require_once '../Module/module.php';
$task = new module();
$input = json_decode(file_get_contents('php://input'), true);
$name = $input['name'];
$getTask = $task->searchByName($name);
echo json_encode($getTask);