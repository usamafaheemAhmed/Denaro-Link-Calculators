<?php
include("connection.php");

$balance_deeming_rates = $_POST['balance_deeming_rates'];
$first_deeming_rates= $_POST['first_deeming_rates'];



//echo $id;

$sql ="UPDATE deeming_rates SET first_deeming_rates='" .$first_deeming_rates . "', balance_deeming_rates='" .$balance_deeming_rates. " ' where deeming_rates_id='1' ";

mysqli_query($conn,$sql);



?>