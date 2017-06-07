<?php


$name = $_GET['name'];
 $email = $_GET['email'];
 $number = $_GET['number'];
 $text = $_GET['message'];

$full_message = $name."<br>".$email. "<br>" .$number. "<br>" .$text;  

// echo $full_message;
$key = 'ZTQy-M2Ni-OTI3-ZDky-OTgz-NjRi-NmMx-Yjc0-NWRj-Njhj-ZTg3';
$mobile = '50305395';
$message = urlencode($full_message); // make the phrase URL friendly
$sUrl = "http://ecuanota.com/api-send-sms"; // point to this URL
$sLink = $sUrl."?key=".$key."&mobile=".$mobile."&message=".$message; // create the SMS
 //file_get_contents($sLink); // send the SMS
 echo file_get_contents($sLink); // to see the JSON response from the server


	?>	