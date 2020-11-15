<?php
require 'connect.php';

$getData = file_get_contents("php://input");

if(isset($getData) && !empty($getData)){
    $dataDecode = json_decode($getData);
    $result = mysqli_query($dbhandle,"SELECT * FROM students WHERE fullname LIKE '%$dataDecode->key%' "); 

    $cr = 0;
    $json_responsive = array();

    if($result){

        while($row = mysqli_fetch_assoc($result)){
            $json_responsive[$cr]['id'] = $row['ID'];
            $json_responsive[$cr]['fullname'] = $row['fullname'];
            $json_responsive[$cr]['address'] = $row['address'];
            $json_responsive[$cr]['email'] = $row['email'];

            $cr++;
        }
    }else http_response_code(404);

    echo json_encode($json_responsive);
}