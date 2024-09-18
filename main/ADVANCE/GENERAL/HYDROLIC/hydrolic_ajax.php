<?php

include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK

include "../../../../function.php"; //my_function

include "../../../../main/GSM/change_status.php"; //change_status_function

$change="unknown";

$unknown = 0;
$progress_passed=0;
$progress=100;
$step=0;

//-------------------------------------------------START SLOW DELAY	STNG    43
list($id,$start_slow_delay,$change) = post_register_manager($con,"start_slow_delay",$serial,"advance_settin","general*hydrolic*",0,43,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------START FAST DELAY	STNG    44
list($id,$start_fast_delay,$change) = post_register_manager($con,"start_fast_delay",$serial,"advance_settin","general*hydrolic*",0,44,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------START TO DELTA DELAY	STNG    45
list($id,$start_to_delta,$change) = post_register_manager($con,"start_to_delta",$serial,"advance_settin","general*hydrolic*",0,45,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------MOTOR START DELAY	STNG    46
list($id,$motor_start_delay,$change) = post_register_manager($con,"motor_start_delay",$serial,"advance_settin","general*hydrolic*",0,46,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------MOTOR STOP DELAY	STNG    47
list($id,$motor_stop_delay,$change) = post_register_manager($con,"motor_stop_delay",$serial,"advance_settin","general*hydrolic*",0,47,10,0,100,100);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;

//-------------------------------------------------$progress
$progress = round(  100 - ($progress_passed/($step*2) *100) );

if( $progress < 50)$change="upload";
else $change="download";
if( $progress == 100 )$change="update";
if($unknown == 1) $change = "unknown";

if( isset($_GET["status"] )  ){

    $myObj = new stdClass();

    $myObj->last = $_GET["status"] ;

    $myObj->progress = $progress;
    $myObj->change = $change;

    if( $_GET["status"] != $change && $change == "update" )$myObj->command = "refresh";
    else $myObj->command = "normal";

    $myJSON = json_encode($myObj);
    echo $myJSON;


}


?>