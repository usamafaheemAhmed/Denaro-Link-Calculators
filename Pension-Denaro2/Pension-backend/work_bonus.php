<?php
include("connection.php");

$sql="select * from work_bonus";
$result = mysqli_query($conn,$sql);


echo ' <tr class="thead-light Raleway">

	 <th>Name</th>
	 <th>Bonus Fortnight</th>
	 <th>Bonus half Fortnight </th>
	 
	 <th>Edit</th>
	 </tr>';


while($data=mysqli_fetch_array($result))
{



    echo '
	
	 <tr>
	
	  <td> <input type="text" id="name" value="'. $data['name'].'" class="form-control"></td>
        <td><input type="text" id="work_bonus_fortnight" value="'. $data['work_bonus_fortnight'].'" class="form-control"></td>
        <td><input type="text" id="work_bonus_half_fortnight" value="'. $data['work_bonus_half_fortnight'].'" class="form-control"></td>
        <td><a href="#" onclick="updateBonus()">Update</a></td>

      </tr>';

}

?>
