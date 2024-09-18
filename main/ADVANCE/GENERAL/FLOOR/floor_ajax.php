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

//-------------------------------------------------PARK FLOOR	STNG    28
list($id,$park_floor,$change) = post_register_manager($con,"park_floor",$serial,"advance_settin","general*floor*",0,28);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------TIME TO PARK	STNG    29
list($id,$time_to_park,$change) = post_register_manager($con,"time_to_park",$serial,"advance_settin","general*floor*",0,29);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------FIRE PARK	STNG    30
list($id,$fire_park,$change) = post_register_manager($con,"fire_park",$serial,"advance_settin","general*floor*",0,30);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------WAITING FLOOR	STNG    31
list($id,$waiting_floor,$change) = post_register_manager($con,"waiting_floor",$serial,"advance_settin","general*floor*",0,31);
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