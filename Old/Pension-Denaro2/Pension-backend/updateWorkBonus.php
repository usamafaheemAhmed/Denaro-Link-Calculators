<?php
include("connection.php");

$work_bonus_fortnight = $_POST['work_bonus_fortnight'];
$work_bonus_half_fortnight= $_POST['work_bonus_half_fortnight'];
$name= $_POST['name'];



//echo $id;

$sql ="UPDATE work_bonus SET name= '" .$name. " ', work_bonus_half_fortnight=' " .$work_bonus_half_fortnight . " ', work_bonus_fortnight='" .$work_bonus_fortnight. " ' where work_bonus_id='1' ";

mysqli_query($conn,$sql);



?>