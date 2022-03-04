<?php

$principal  = '•••••••••';
$secret     = '•••••••••';
$uri        = "https://tap-api-v2.proofpoint.com";
$command    = "/v2/people/vap";
$parameters = "?window=90";


$ch = curl_init("$uri$command$parameters");

$headers = array(
'Content-Type: application/json',
'Authorization: Basic '. base64_encode("$principal:$secret")
);

//Set the headers that we want our cURL client to use.
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Set the RETURNTRANSFER as true so that output will come as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

//Execute the cURL request.
$response = curl_exec($ch);

//Check if any errors occured.
if(curl_errno($ch)){
// throw the an Exception.
throw new Exception(curl_error($ch));
}

curl_close($ch);

echo $response;

?>
