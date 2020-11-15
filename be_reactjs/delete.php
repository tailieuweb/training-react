<?php 

require 'connect.php';

    $id = $_GET['id'];


    $sql = "DELETE FROM `students` WHERE `ID` = '{$id}' LIMIT 1";
    if(mysqli_query($dbhandle, $sql)){
        echo "Records inserted successfully.";
    } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
    }
