<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];
$home_owner_full_pension = $_POST['home_owner_full_pension'];
$home_owner_part_pension = $_POST['home_owner_part_pension'];
$non_home_owner_full_pension1= $_POST['non_home_owner_full_pension1'];
$non_home_owner_part_pension= $_POST['non_home_owner_part_pension'];
$situation= $_POST['situation'];


$sql ="UPDATE assets_test SET non_home_owner_full_pension='" .$non_home_owner_full_pension1 . "',home_owner_part_pension='" .$home_owner_part_pension . "',home_owner_full_pension='" . $home_owner_full_pension . "',situation='" .$situation . "', non_home_owner_part_pension='" .$non_home_owner_part_pension. " ' where assets_id=$primaryKey ";

mysqli_query($conn,$sql);



?>