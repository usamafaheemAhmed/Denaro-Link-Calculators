<?php

$servername = "premium279";
$username = "denaxvft_nat";
$password = "FahadxNatalino";
$db="denaxvft_pension_calculator";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// $conn = new mysqli("localhost","root","","pension_calculator");
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
else
{

    class Assets
    {
        public $homeOwnerFull;
        public $homeOwnerPart;
        public $nonHomeOwnerFull;
        public $nonHomeOwnerPart;
    }
    class d
    {
        public $fd;
        public $fr;
        public $od;
        public $or;
    }
    class AP
    {
        public $fort;
        public $phar;
        public $pen;
        public $clean;
    }
    $r = array();
    $query = "SELECT * FROM `assets_test`";  
    $result = mysqli_query($conn, $query);  
    $assets_test = array();
    while ($row = mysqli_fetch_array($result)) {
        $a = new Assets();
        $a->homeOwnerFull = $row["home_owner_full_pension"];
        $a->homeOwnerPart = $row["home_owner_part_pension"];
        $a->nonHomeOwnerFull = $row["non_home_owner_full_pension"];
        $a->nonHomeOwnerPart = $row["non_home_owner_part_pension"];
        $assets_test["a".$row["assets_id"]] = $a;
    }
    
    $r["a"] = $assets_test;
    
    $query = "SELECT * FROM `deemed_income_thresholds`";  
    $result = mysqli_query($conn, $query);  
    $fd = array();
    while ($row = mysqli_fetch_array($result)) {
        $d = new d();
        $d->fd = $row["first_deemed"];
        $d->fr = $row["first_rate"];
        $d->od = $row["over_deemed"];
        $d->or = $row["over_rate"];
        $fd["a".$row["deemed_income_threshold_id"]] = $d;
    }
    $r["d"] = $fd;

    $query = "SELECT * FROM `reduced_by`";  
    $result = mysqli_query($conn, $query);  
    $fd = array();
    while ($row = mysqli_fetch_array($result)) {
        $fd["factor"] = $row["dividing_factor"];
        $fd["rate"] = $row["reduction_rate"];
    }
    $r["reduced_by"] = $fd;

    $query = "SELECT * FROM `actual_payment`";  
    $result = mysqli_query($conn, $query);  
    $fd = array();
    while ($row = mysqli_fetch_array($result)) {
        $AP = new AP();
        $AP->fort = $row["per_fortnight"];
        $AP->phar = $row["pharmaceutical_benefit"];
        $AP->pen = $row["pension_payment"];
        $AP->clean = $row["clean_energy_supplement"];
        $fd["a".$row["actual_payment_id"]] = $AP;        
    }
    $r["actual_payment"] = $fd;
    
    class IT
    {
        public $ifp;
        public $ipp;
        public $rf;
    }
    
    $query = "SELECT * FROM `income_test`";  
    $result = mysqli_query($conn, $query);  
    $fd = array();
    while ($row = mysqli_fetch_array($result)) {
        $AP = new IT();
        $AP->ifp = $row["income_full_pension"];
        $AP->ipp = $row["income_part_pension"];
        $AP->rf = $row["reduction_factor"];
        $fd["a".$row["income_id"]] = $AP;        
    }
    $r["income_test"] = $fd;

    
//Full texts//name


    $query = "SELECT * FROM `work_bonus`";  
    $result = mysqli_query($conn, $query);  
    $fd = array();
    while ($row = mysqli_fetch_array($result)) {
        $fd["fn"] = $row["work_bonus_fortnight"];
        $fd["hfn"] = $row["work_bonus_half_fortnight"];
    }
    $r["work_bonus"] = $fd;





    echo json_encode($r);
}

?>