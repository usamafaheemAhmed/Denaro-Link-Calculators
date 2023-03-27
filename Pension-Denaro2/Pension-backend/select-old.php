<?php
include("connection.php");

$sql = "select * from actual_payment";
$result = mysqli_query($conn, $sql);


echo ' <tr class="thead-light Raleway">

	 <th>Relationship</th>
	 <th>Per Fortnight</th>
	 <th>Pharmaceutical Benefit</th>
	 <th>Pension Payment</th>
	 <th>Clean Energy Supplement</th>
	 <th>Edit</th>
	 </tr>';

$i = 0;

while ($data = mysqli_fetch_array($result)) {
    $i++;
    echo '
	
	 <tr>
	  <td><input type="text" id="situation' . $i . '" value="' . $data['situation'] . '" class="form-control"></td>
	 	  <td><input type="text" id="per_fortnight' . $i . '" value="' . $data['per_fortnight'] . '" class="form-control"></td>
	 	  <td><input type="text" id="pharmaceutical_benefit' . $i . '" value="' . $data['pharmaceutical_benefit'] . '" class="form-control"></td>
	 	  <td><input type="text" id="pension_payment' . $i . '" value="' . $data['pension_payment'] . '" class="form-control"></td>
	 	  <td><input type="text" id="clean_energy_supplement' . $i . '" value="' . $data['clean_energy_supplement'] . '" class="form-control"></td>
	 	  <input type="hidden"  id="actual_payment_id" value="' . $data['actual_payment_id'] . '">
	      <td><a href="#" id="' . $i . '" onclick="updateActualPayment(this.id)">Update</a></td>

      </tr>';

}

?>
