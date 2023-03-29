<?php
include("connection.php");

$sql = "select * from deemed_income_thresholds";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_array($result);
$data2 = array(
    'first_deemed' => $first_deemed,
    'first_rate' => $first_rate,
    'over_deemed' => $over_deemed,
    'over_rate' => $over_rate,
    'situation' => $situation,
    'primaryKey' => $primaryKey,
);
while ($row = mysqli_fetch_array($result)) {
    $first_deemed = $row['first_deemed'];
    $first_rate = $row['first_rate'];
    $over_deemed = $row['over_deemed'];
    $over_rate = $row['over_rate'];
    $situation = $row['situation'];
    $primaryKey = $row['deemed_income_threshold_id'];
}
//put all the data in an array

$data3 = array(
    'first_deemed' => $first_deemed,
    'first_rate' => $first_rate,
    'over_deemed' => $over_deemed,
    'over_rate' => $over_rate,
    'situation' => $situation,
    'primaryKey' => $primaryKey,
);
//encode the array to json
echo json_encode($data2);


?>
