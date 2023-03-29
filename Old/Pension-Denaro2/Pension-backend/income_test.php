<?php


include("connection.php");

$sql = "select * from income_test";
$result = mysqli_query($conn, $sql);
$i = 0;

echo ' <tr class="thead-light Raleway">

	 <th>Relationship</th>
	 <th>Full Pension</th>
	 <th>Part Pension</th>
	 <th>Reduction Factor </th>
	 <th>Edit</th>
		 	
	 </tr>';

$j=1;
while ($data = mysqli_fetch_array($result)) {
    
    echo '
	
	 <tr>
	 	  <td><input type="text" id="situation' . $j . '" value="'. $data['situation'].'" class="form-control"></td>
	 	  <td><input type="text" id="income_full_pension' . $j . '" value="'. $data['income_full_pension'].'" class="form-control"></td>
	 	  <td><input type="text" id="income_part_pension' . $j . '" value="'. $data['income_part_pension'].'" class="form-control"></td>
	 	  <td><input type="text" id="reduction_factor' . $j . '" value="'. $data['reduction_factor'].'" class="form-control"></td>
	 	  <input type="hidden" id="income_id" value="'. $data['income_id'].'" class="form-control">
<td><a href="#" id="' . $j . '" onclick="updateIncomeTest(this.id)">Update</a></td>

      </tr>';
	  $j++;
	  
    $i++;
}


