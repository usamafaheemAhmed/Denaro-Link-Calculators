<?php 



require_once './vendor/autoload.php';
include './mailchimp-api/src/MailChimp.php';

use \DrewM\MailChimp\MailChimp;

$MailChimp = new MailChimp('9c5207b6c4fc146666056e6e1b5017b2-us20');

// $resultData = $MailChimp->get('lists');
// echo "<pre>";
// print_r($resultData);
// echo "</pre>";
// die; 

$email =$_POST["email"];
$name =$_POST["name"];
$lastName =$_POST["lastName"];
$CalName =$_POST["CalName"];

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