<?php


include "read.php"; // $con

include "login/login_check.php"; //LOGIN_CHECK

include "function.php"; //my_function
/*
if( isset($_GET["status"] )  ){

    list($id,$data,$change) = post_register_manager($con,"number_of_stop",$serial,"advance_settin","general*",0,2);

    $last_status =  $_GET["status"];

    if( $change != $last_status )echo"refresh";
    else echo"normal";

    echo $last_status;
}*/


list($id,$data,$change) = post_register_manager($con,"number_of_stop",$serial,"advance_settin","general*",0,2);

echo $change;
?>