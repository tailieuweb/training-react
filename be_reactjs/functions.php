<?php 

require "config.php";

$getData = file_get_contents("php://input");

if(isset($getData) && !empty($getData)){
    $dataDecode = json_decode($getData);

    $option = $dataDecode->option;
    $username = $dataDecode->username;
    $password = $dataDecode->password;

    if(!empty($username) && !empty($password)){
        switch($option){

            case 'insert':
    
                $hash = password_hash($password, PASSWORD_BCRYPT);
    
               $query = 'INSERT INTO users (username, password) VALUES (:username, :password);';
    
               $stmt = $dbh->prepare($query);
    
               if($stmt->execute(array(':username'=>$username,':password'=>$hash))){
                   echo 'insert succesfuly';
               }else {
                   echo 'error';
               }
            break;
    
            case 'select':
                $cr = 0;
                $json_responsive = array();
                $stmt = $dbh->prepare('SELECT * FROM users where username = :username');
                 // call the stored procedure
                $stmt->execute(array(':username'=>$username));
                // fetch all rows into an array.
                $rows = $stmt->fetchAll();
                foreach ($rows as $rs)
                {
                    if(password_verify($password, $rs['password'])){
                        $json_responsive[$cr]['id'] = $rs['id'];
                        $json_responsive[$cr]['username'] = $rs['username'];
                        $json_responsive[$cr]['password'] = $rs['password'];
                        $cr++;
                        
                    }echo json_encode($json_responsive);
                }
    
            break;
              
        }
    }
}