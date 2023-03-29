<?php
include("connection.php");

$sql = "select * from deemed_income_thresholds";
$result = mysqli_query($conn, $sql);


echo ' <tr class="thead-light Raleway">

	 <th>Relationship</th>
	 <th>First</th>
	 <th>Rate</th>
	 <th>Over </th>
	 <th>Rate </th>
	 <th>Edit</th>
	 </tr>';

   $j=1;

while ($data = mysqli_fetch_array($result)) {
    echo '
	
	 <tr>
	  <td>
	  <input type="text" id="situation'.$j.'" value="' . $data['situation'] . '" class="form-control">
	  </td>
	  
        <td> 
        <input type="text" id="first_deemed'.$j.'" value="' . $data['first_deemed'] . '" class="form-control">
        </td>
        <td><input type="text" id="first_rate'.$j.'" value="' . $data['first_rate'] . '" class="form-control"></td>
        <td> <input type="text" id="over_deemed'.$j.'" value="' . $data['over_deemed'] . '" class="form-control"></td>
        <td><input type="text" id="over_rate'.$j.'" value="' . $data['over_rate'] . '" class="form-control"></td>
     <input type="hidden" id="deemed_income_threshold_id" value="' . $data['deemed_income_threshold_id'] . '" class="form-control">
 
   <td><a href="#" id="'.$j.'" onclick="updateDeemedIncome(this.id)">Update</a></td>
   

      </tr>';
    $j++;
    $i++;
}

?>
