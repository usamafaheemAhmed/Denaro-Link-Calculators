<?php
include("connection.php");

$dividing_factor = $_POST['dividing_factor'];
$reduction_rate= $_POST['reduction_rate'];



//echo $id;

$sql ="UPDATE reduced_by SET reduction_rate='" .$reduction_rate . "', dividing_factor='" .$dividing_factor. " ' where id='1' ";

mysqli_query($conn,$sql);



?>