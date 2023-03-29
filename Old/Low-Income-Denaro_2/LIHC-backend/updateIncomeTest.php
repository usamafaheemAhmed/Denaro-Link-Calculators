<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];

$weekly_income = $_POST['weekly_income'];
$eight_week_income = $_POST['eight_week_income'];
$situation= $_POST['situation'];


$sql ="UPDATE income_test SET weekly_income='" .$weekly_income . "',eight_week_income='" .$eight_week_income . "',situation='" .$situation . "' where income_id=$primaryKey ";

mysqli_query($conn,$sql);



?>