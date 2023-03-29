<?php


include("connection.php");

$sql = "select * from income_test";
$result = mysqli_query($conn, $sql);


echo ' <tr class="thead-light Raleway">

	 <th>Relationship</th>
	 <th>Weekly Income</th>
	 <th>8 Weeks Income</th>
	 <th>Edit</th>
		 	
	 </tr>';

$j=1;

while ($data = mysqli_fetch_array($result)) {
    echo '
	
	 <tr>
	 	  <td><input type="text" id="situation'.$j.'" value="'. $data['situation'].'" class="form-control"></td>
	 	  <td><input type="text" id="weekly_income'.$j.'" value="'. $data['weekly_income'].'" class="form-control"></td>
	 	  <td><input type="text" id="eight_week_income'.$j.'" value="'. $data['eight_week_income'].'" class="form-control"></td>

	 	  <input type="hidden" id="income_id" value="'. $data['income_id'].'" class="form-control">
			<td><a href="#" id="'.$j.'" onclick="updateIncomeTest(this.id)">Update</a></td>

      </tr>';
	$j++;
    $i++;
}


