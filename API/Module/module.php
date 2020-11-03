<?php
   include '../Conection/Db.php';
   class module extends Db{
         public function getAllTask(){
            $sql = parent::$connection->prepare("SELECT * FROM task");
            return parent::select($sql);
   }
         public function addTask($nameTask,$image,$dayS,$dayE,$state){
            $sql = parent::$connection->prepare("INSERT INTO `task` (`name_task`, `image`, `dayS`, `dayE`, `state`) VALUES (?, ?, ?, ?, ?)");
            $sql->bind_param('ssssi',$nameTask,$image,$dayS,$dayE,$state);
            return $sql->execute();
   }
         public function deleteTask($id_task){
            $sql = parent::$connection->prepare("DELETE FROM `task` WHERE `task`.`id_task` = ?");
            $sql->bind_param('i', $id_task);
            return $sql->execute();
   }
   // sắp xếp theo tên
         public function sortUp(){
            $sql = parent::$connection->prepare("SELECT * FROM `task` ORDER BY `task`.`name_task` ASC");
            return parent::select($sql);
   }
         public function sortDown(){
            $sql = parent::$connection->prepare( "SELECT * FROM `task` ORDER BY `task`.`name_task` DESC" );
            return parent::select($sql);
   }
   // tìm kiếm theo tên và loại (đã hoàn thành hay chưa hoàn thành
         public function searchByName($name){
            $search = "%{$name}%";
            $sql = parent::$connection->prepare('SELECT * FROM `task` WHERE `name_task` LIKE ? ORDER BY `dayS` ASC  ');
            $sql->bind_param('s', $search);
            return parent::select($sql);
   }
   // tìm kiếm theo loại
         public function searchByType($state){
            $sql = parent::$connection->prepare('SELECT * FROM `task` WHERE `state` = ? ORDER BY `dayS` ASC  ');
            $sql->bind_param('i', $state);
            return parent::select($sql);
   }
   // lấy nhiệm vụ theo id
   public function getTaskById($idTask){
      $sql = parent::$connection->prepare("SELECT * FROM `task` WHERE `id_task` = ?  ");
      $sql->bind_param('i', $idTask);
      return parent::select($sql);
}
   // item task
            public function getTaskListById($isTask){
            $sql = parent::$connection->prepare("SELECT * FROM `task_detail` WHERE `id_task` = ? ");
            $sql->bind_param('i', $isTask);
            return parent::select($sql);
   }

               public function addTaskItem($idTask,$valueItem){
               $sql = parent::$connection->prepare("INSERT INTO `task_detail` (`id_task`, `step_taskDetail`) VALUES (?,?)");
               $sql->bind_param('is',$idTask,$valueItem);
               return $sql->execute();
   }
               public function deleteTaskItem($idTaskItem){
                  $sql = parent::$connection->prepare("DELETE FROM `task_detail` WHERE `task_detail`.`id_taskDetail` = ?");
                  $sql->bind_param('i', $idTaskItem);
                  return $sql->execute();
            }
            public function updateTaskById($taskId,$nameTask,$img,$dayS,$dayE,$state){
               $sql = parent::$connection->prepare("UPDATE `task` SET `name_task` = '$nameTask', `image` = '$img', `dayS` = '$dayS', `dayE` = '$dayE', `state` = $state WHERE `task`.`id_task` = $taskId");
               return $sql->execute();
         }
// task items
            public function getListItemsTask($id_task){
               $sql = parent::$connection->prepare("SELECT * FROM `task` INNER JOIN listitemtask ON task.id_task = listitemtask.id_task WHERE task.id_task = ?  ");
            $sql->bind_param('i', $id_task);
            return parent::select($sql);
}

            public function addTaskItems($taskValue,$id_task){
               $sql = parent::$connection->prepare("INSERT INTO `listitemtask` (`item`, `id_task`) VALUES (?,?);");
               $sql->bind_param('si', $taskValue,$id_task);
               return $sql->execute();
}

            
            public function deleteTaskItems($id_taskItem){
               $sql = parent::$connection->prepare("DELETE FROM `listitemtask` WHERE `listitemtask`.`id_listItemTask` = ?");
               $sql->bind_param('i', $id_taskItem);
               return $sql->execute();
}
}