<?php

if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
else $serial=0;
if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
else $password =0;


$quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE  `serial` = '$serial'";
$resault=mysqli_query($con,$quary);

$pass_wrong=1;

if( $page = mysqli_fetch_assoc($resault) ) {
    if ($page['password'] == $password)$pass_wrong=0;
}

if( $pass_wrong == 1 ){
    header("location: /GSM_RAVIS/login/login_bs.php");
    die();
}

?>
