<?php
$servername = "premium279";
$username = "denaxvft_nat";
$password = "FahadxNatalino";
$db="denaxvft_lowincome_calculator";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>