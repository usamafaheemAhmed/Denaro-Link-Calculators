<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];
$first_deemed = $_POST['first_deemed'];
$first_rate = $_POST['first_rate'];
$over_deemed= $_POST['over_deemed'];
$over_rate= $_POST['over_rate'];
$situation= $_POST['situation'];


$sql ="UPDATE deemed_income_thresholds SET over_deemed='" .$over_deemed . "',first_rate='" .$first_rate . "',first_deemed='" . $first_deemed . "',situation='" .$situation . "', over_rate='" .$over_rate. " ' where deemed_income_threshold_id=$primaryKey ";

mysqli_query($conn,$sql);



?>