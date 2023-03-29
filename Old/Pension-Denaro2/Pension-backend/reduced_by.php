<?php
include("connection.php");

$sql="select * from reduced_by";
$result = mysqli_query($conn,$sql);


echo ' <tr class="thead-light Raleway">
	

	

	 <th>Dividing Factor</th>
	 <th>Reduction Rate</th>

	 <th>Edit</th>
	 </tr>';


while($data=mysqli_fetch_array($result))
{
    echo '
	
	 <tr>
	
	  <td><input type="text" id="dividing_factor" value="'. $data['dividing_factor'].'" class="form-control"></td>
	  <td><input type="text" id="reduction_rate" value="'. $data['reduction_rate'].'" class="form-control"></td>
    
         <td><a href="#" onclick="updateReduction()">Update</a></td>

      </tr>';

    $i++;
}

?>
