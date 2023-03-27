<?php
include("connection.php");

$primaryKey = $_POST['primaryKey'];
$pharmaceutical_benefit = $_POST['pharmaceutical_benefit'];
$clean_energy_supplement = $_POST['clean_energy_supplement'];
$pension_payment= $_POST['pension_payment1'];
$per_fortnight= $_POST['per_fortnight'];
$situation= $_POST['situation'];



//echo $id;

$sql ="UPDATE actual_payment SET pension_payment='" .$pension_payment . "',clean_energy_supplement='" .$clean_energy_supplement . "',pharmaceutical_benefit='" . $pharmaceutical_benefit . "',situation='" .$situation . "', per_fortnight='" .$per_fortnight. " ' where actual_payment_id=$primaryKey ";

mysqli_query($conn,$sql);



?>