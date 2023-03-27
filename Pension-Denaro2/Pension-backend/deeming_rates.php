<?php
include("connection.php");

$sql="select * from deeming_rates";
$result = mysqli_query($conn,$sql);


echo ' <tr class="thead-light Raleway">
	

	

	 <th>First Deeming Rates</th>
	 <th>Balanced Deeming Rates</th>

	 <th>Edit</th>
	 </tr>';


while($data=mysqli_fetch_array($result))
{
    echo '
	
	 <tr>
	 <td><input type="text" id="first_deeming_rates" value="'. $data['first_deeming_rates'].'" class="form-control"></td>

       <td><input type="text" id="balance_deeming_rates" value="'. $data['balance_deeming_rates'].'" class="form-control"></td>

          <td><a href="#" onclick="updateDeemingRate()">Update</a></td>


      </tr>';
}

?>

