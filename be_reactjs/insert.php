<?php 

require 'connect.php';

$getData = file_get_contents("php://input");


if(isset($getData) && !empty($getData)){
    $dataDecode = json_decode($getData);
    $table = $dataDecode->table;

    switch($table){
        case 'students':
            $full_name = $dataDecode->full_name;
            $address = $dataDecode->address;
            $email = $dataDecode->email;
        
            $sql = "INSERT INTO students (`fullname`, `address`, `email`) VALUES ('{$full_name}','{$address}','{$email}')";
            if(mysqli_query($dbhandle, $sql)){
                echo "Records inserted successfully.";
            } else{
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
            }
        break;
    }
}