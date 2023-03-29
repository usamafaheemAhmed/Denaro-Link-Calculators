<?php 



require_once './vendor/autoload.php';
include './mailchimp-api/src/MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$MailChimp = new MailChimp('e2a7be1d3fe61889605b31d6ff36a795-us20');

// $result = $MailChimp->get('lists');
// echo "<pre>";
// print_r($result);
// echo "</pre>";
// die; 

$email =$_POST["email"];
$name =$_POST["name"];
$lastName =$_POST["lastName"];
$CalName =$_POST["CalName"];
// echo $email;
// echo $name;
// echo $CalName;

$list_id = 'b541216479';

$result = $MailChimp->post("lists/$list_id/members", [
				'email_address' => $email,
                'merge_fields' => ['FIRSTNAME'=>$name,'LASTNAME'=>$lastName, 'CALCULATOR'=>$CalName],
				'status'        => 'subscribed',
			]);

            if ($MailChimp->success()) {
                
                echo "<pre>";
                print_r($result);
                echo "</pre>";	
            } else {
                if($MailChimp->getLastError() == "/already"){
                    echo "Jump";
                }
                echo $MailChimp->getLastError();
            }

            die;


?>