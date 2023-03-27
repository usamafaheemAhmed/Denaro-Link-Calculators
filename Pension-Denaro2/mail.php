<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require './vendor/autoload.php';
// if (isset($_POST['fileDataURI'])) {
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        $pdfdoc = $_POST['pdfFile'];
        $name = $_POST['nameClient'];
        $email = $_POST['emailClient'];

        // $b64file = trim(str_replace('data:application/pdf;base64,', '', $pdfdoc));
        // $b64file = str_replace(' ', '+', $b64file);
        // $decoded_pdf = base64_decode($b64file);

        $pdfdoc = str_replace('data:application/pdf;filename=generated.pdf;base64,', '', $pdfdoc);
        
        // echo($pdfdoc);

        $pdfdoc = str_replace(' ', '+', $pdfdoc);
        $pdfdoc = base64_decode($pdfdoc);

        // print_r($pdfData);
        
        
        file_put_contents('./Pension-Denaro.pdf', $pdfdoc);
  
        // die;
        $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
        $mail->isSMTP(); // Send using SMTP
        // $mail->Host = 'smtp.office365.com'; // Set the SMTP server to send through
        $mail->Host = 'smtp.office365.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'denarolink@denarowealth.com.au'; // SMTP username
        $mail->Password = 'Centrelink2022'; // SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port = 587; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->isHTML(true);
        $mail->setFrom('denarolink@denarowealth.com.au', "Admin Denarolink");
        $mail->addAddress($email, $name); // Add a recipient
        // $mail->addBCC('usamafaheem80#mail.com');
        $mail->addBCC('denarolink@denarowealth.com.au');
        $mail->Subject = 'Summary From Age Pension Calculator';
        $mail->Body = '
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>
          
            <style type="text/css">
              @media only screen and (min-width: 520px) {
          .u-row {
            width: 500px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
        
          .u-row .u-col-100 {
            width: 500px !important;
          }
        
        }
        
        @media (max-width: 520px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
        
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
        
        p {
          margin: 0;
        }
        
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
        
        * {
          line-height: inherit;
        }
        
        a[x-apple-data-detectors="true"] {
          color: inherit !important;
          text-decoration: none !important;
        }
        
        table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
            </style>
          
          
        
        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
            
        
        <div class="u-row-container" style="padding: 0px;background-color: transparent">
          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
              
        <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
          <div style="height: 100%;width: 100% !important;">
          <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
          
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">Hi '. $name .'.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">Thanks for completing the Denaro Link eligibility calculator. Please find attached a copy of your results</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">We\'d love you to get in touch to discuss your results.<span style="color: #000000; line-height: 19.6px;"> <span style="line-height: 19.6px; color: #2dc26b;"><a rel="noopener" href="https://denarowealth.com.au/book-chat" target="_blank" style="color: #2dc26b;"><span style="text-decoration: underline; line-height: 19.6px;">Click here to organize a free, no-obligation 20-minute chat.</span></a></span></span></p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">Eligibility rules for The Age Pension and concession cards can be complex, and you may be eligible for more than you realize. We want to help you get every dollar and discount you are entitled to.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 140%;">Nat.</p>
        <p style="line-height: 140%;">Denaro Link.</p>
        <p style="line-height: 140%;"></p>
        <p style="line-height: 140%;"><strong>P.S.</strong> Over the next month, we will send you some real-life success stories of clients we have helped navigate the complex Centrelink system to get their fair share of entitlements.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 300px 1px 1px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 0px;padding-left: 0px;" align="left">
              
              <img align="left" border="0" src="cid:logo" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 199px;" width="199"/>
              
            </td>
          </tr>
        </table>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; font-size: 9px; line-height: 140%; text-align: justify; word-wrap: break-word;">
            <p style="line-height: 140%;">You received this email because you have downloaded a resource from our website.This email contains information that is general in nature and does not take into account the objectives. financial situation or needs of any particular person. It does no: represent legal. tax. or personal advice and should not be relied on as such. You should obtain financial advice relevant to your circumstances before making any decisions.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; font-size: 9px; line-height: 140%; text-align: justify; word-wrap: break-word;">
            <p style="line-height: 140%;">Denaro Wealth Pty Ltd. ABN 23 625 686 464. Corporate Authorised Representative (NO. 1263750) of Lifespan Financial Planning Pty Ltd ABN 23 065 921 735. Australian Financial Services Licensee and Australian Credit Licence No. 229892.</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; font-size: 9px; line-height: 140%; text-align: justify; word-wrap: break-word;">
            <p style="line-height: 140%;">Ground Floor. Corporate One. 84 Hotham Street, Preston VIC 3072</p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
          <div style="font-family: "Raleway",sans-serif; font-size: 13px; line-height: 140%; text-align: justify; word-wrap: break-word;">
            <p style="line-height: 140%;"><span style="color: #2dc26b; line-height: 18.2px;"><a rel="noopener" href="https://denarowealth.com.au/book-chat" target="_blank" style="color: #2dc26b;">unsubscribe.</a></span></p>
          </div>
        
              </td>
            </tr>
          </tbody>
        </table>
        
          <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
          </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
          </div>
        </div>
        
        
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
        </body>
        
        </html>
        ';
        // $mail->addStringAttachment($decoded_pdf, "Age-Pension-Summary.pdf");
        $mail->AddEmbeddedImage('./Pension-Denaro.pdf',"pdf");

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
// }
