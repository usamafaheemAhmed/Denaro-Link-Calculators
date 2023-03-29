<?php
include("connection.php");

$sql = "select * from assets_test";
$result = mysqli_query($conn, $sql);
 $i = 0;

echo ' <tr class="thead-light Raleway">

	 <th>Relationship</th>
	 <th>Full Pension/Allowance Homeowner</th>
	 <th>Part Pension Homeowner</th>
	 <th>Full Pension/Allowance Non-Homeowner</th>
	 <th>Part Pension Non-Homeowner</th>
	 <th>Edit</th>
	 </tr>';



while ($data = mysqli_fetch_array($result)) {
$i++;
    echo '
	
	 <tr>
	
       
          <td><input type="text" id="situation' . $i . '" value="' . $data['situation'] . '" class="form-control"></td>
	 	  <td><input type="text" id="home_owner_full_pension' . $i . '" value="' . $data['home_owner_full_pension'] . '" class="form-control"></td>
	 	  <td><input type="text" id="home_owner_part_pension' . $i . '" value="' . $data['home_owner_part_pension'] . '" class="form-control"></td>
	 	  <td><input type="text" id="non_home_owner_full_pension' . $i . '" value="' . $data['non_home_owner_full_pension'] . '" class="form-control"></td>
	 	  <td><input type="text" id="non_home_owner_part_pension' . $i . '" value="' . $data['non_home_owner_part_pension'] . '" class="form-control"></td>
	 	
             <input type="hidden"  id="assets_id" value="' . $data['assets_id'] . '">
	      <td><a href="#" id="' . $i . '" onclick="updateAssetTest(this.id)">Update</a></td>

      </tr>';

}

?>
