<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];

$annual_income = $_POST['annual_income'];

$situation= $_POST['situation'];


$sql ="UPDATE income_test SET annual_income='" .$annual_income . "',situation='" .$situation . "' where income_id=$primaryKey ";

mysqli_query($conn,$sql);



?>