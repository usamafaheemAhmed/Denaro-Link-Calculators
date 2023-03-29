<?php

// connecting database start
$servername = "premium279";
$username = "denaxvft_nat";
$password = "FahadxNatalino";
$db="denaxvft_commonwealth_calculator";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


  // data Fields of deeming_rates table
class Assets
{
    public $deeming_rates_id;
    public $first_deeming_rates;
    public $balance_deeming_rates;
}

  // data Fields of deemed_income_threshold table
class d
{
    public $deemed_income_threshold_id ;
    public $situation;
    public $first_deemed;
    public $first_rate;
    public $over_deemed;
    public $over_rate;
}

// selecting all form table income_test
$sql = "SELECT * FROM `income_test`";
$result =  mysqli_query($conn, $sql);
  //  data fields of income_test table
$data = array("income_id" => "", "situation" => "","annual_income" => "");
$data1 = array("income_id" => "", "situation" => "","annual_income" => "");

// storing data in array

while($row = mysqli_fetch_array($result)) {
         if ($row["income_id"] == 1) {
          $data["income_id"] = $row["income_id"];
          $data["situation"] = $row["situation"];
          $data["annual_income"] = $row["annual_income"];
         }
         if($row["income_id"] == 2){
          $data1["income_id"] = $row["income_id"];
          $data1["situation"] = $row["situation"];
          $data1["annual_income"] = $row["annual_income"];
         }
  
          
      }



    // $allData  = array($data, $data1);
    $allData = array();
    // combining data and data1 in one array
    $allData["income_test"]= array("df1"=>$data, "df2"=> $data1);


  
    // selecting all form table deeming_rates
    $sql = "SELECT * FROM `deeming_rates`";
    $result =  mysqli_query($conn, $sql);

    // storing data in array using class Assets fields for deeming_rates table
    while ($row = mysqli_fetch_array($result)) {
      // echo "<br>deeming_rates_id =".$row["deeming_rates_id"]."first_deeming_rates=".$row["first_deeming_rates"]."balance_deeming_rates=".$row["balance_deeming_rates"]."<br>";
      
      $a = new Assets();
      $a->deeming_rates_id = $row["deeming_rates_id"];
      $a->first_deeming_rates = $row["first_deeming_rates"];
      $a->balance_deeming_rates = $row["balance_deeming_rates"];
        // storing data in main array by one iteration deeming_rates table
      $allData["deeming_rates"]["df".$row["deeming_rates_id"]] = $a;
    }


// selecting all form table deemed_income_thresholds
    $sql = "SELECT * FROM `deemed_income_thresholds`";
    $result =  mysqli_query($conn, $sql);
    // storing data in array using class d fields for deemed_income_thresholds table
    while ($row = mysqli_fetch_array($result)) {
      // echo "<br>deeming_rates_id =".$row["deeming_rates_id"]."first_deeming_rates=".$row["first_deeming_rates"]."balance_deeming_rates=".$row["balance_deeming_rates"]."<br>";
      
      $a = new d();
      $a->deemed_income_threshold_id = $row["deemed_income_threshold_id"];
      $a->situation = $row["situation"];
      $a->first_deemed = $row["first_deemed"];
      $a->first_rate = $row["first_rate"];
      $a->over_deemed = $row["over_deemed"];
      $a->over_rate = $row["over_rate"];
        // storing data in main array by one iteration deemed_income_thresholds table
      $allData["deemed_income_thresholds"]["df".$row["deemed_income_threshold_id"]] = $a;
    }




    // $data = array("name" => "John", "age" => 25);


    // encripting data in json format to send to on JS file
    echo json_encode($allData);

?>