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

//-------------------------------------------------DOOR_OPEN_DELAY	STNG    15
list($id,$open_delay,$change) = post_register_manager($con,"open_delay",$serial,"advance_settin","general*door*",0,15,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DOOR_CLOSE_DELAY STNG    16
list($id,$close_delay,$change) = post_register_manager($con,"close_delay",$serial,"advance_settin","general*door*",0,16,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DOOR_END_TIME    STNG    17
list($id,$end_door_time,$change) = post_register_manager($con,"end_door_time",$serial,"advance_settin","general*door*",0,17);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DOOR_CLOSE_TIMEOUT	STNG	18
list($id,$close_time_out,$change) = post_register_manager($con,"close_time_out",$serial,"advance_settin","general*door*",0,18);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DOOR_PARK_TIME		STNG		19
list($id,$door_park,$change) = post_register_manager($con,"door_park",$serial,"advance_settin","general*door*",0,19);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DEBOUNCER69						20
list($id,$debouncer_69,$change) = post_register_manager($con,"debouncer_69",$serial,"advance_settin","general*door*",0,20,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DEBOUNCER68						21
list($id,$debouncer_68,$change) = post_register_manager($con,"debouncer_68",$serial,"advance_settin","general*door*",0,21,10);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------DOOR_OPEN_TIME				27
list($id,$open_time,$change) = post_register_manager($con,"open_time",$serial,"advance_settin","general*door*",0,27);
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