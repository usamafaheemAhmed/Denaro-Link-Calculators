<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];
$income_full_pension = $_POST['income_full_pension'];
$income_part_pension = $_POST['income_part_pension'];
$reduction_factor= $_POST['reduction_factor'];

$situation= $_POST['situation'];


$sql ="UPDATE income_test SET reduction_factor='" .$reduction_factor . "',income_part_pension='" .$income_part_pension . "',income_full_pension='" . $income_full_pension . "',situation='" .$situation . "' where income_id=$primaryKey ";

mysqli_query($conn,$sql);



?>