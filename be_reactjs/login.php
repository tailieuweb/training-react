<?php 

require 'connect.php';

$getData = file_get_contents("php://input");

if(isset($getData) && !empty($getData)){
    $dataDecode = json_decode($getData);
    $table = $dataDecode->table;
   
    switch($table){
        case 'users':
            $username = $dataDecode->username;
            $password = $dataDecode->password;
        
            $result = mysqli_query($dbhandle,"select * from `users` where `username` = '".$username."' ");
            $cr = 0;
            $json_responsive = array();
            if($result){
                while($row = mysqli_fetch_assoc($result)){
                   if(password_verify($password, $row['password'])){
                        $json_responsive[$cr]['id'] = $row['id'];
                        $json_responsive[$cr]['username'] = $row['username'];
                        $json_responsive[$cr]['password'] = $row['password'];
                
                        $cr++;
                   }
                }
            }else http_response_code(404);
            
            echo json_encode($json_responsive);
        break;
    }
}