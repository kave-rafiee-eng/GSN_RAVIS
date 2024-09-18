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

//-------------------------------------------------MUSIC VOLUME	STNG    23
list($id,$music_volue,$change) = post_register_manager($con,"music_volue",$serial,"advance_settin","general*sound*",0,23,0.2);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------TALK VOLUME	STNG    24
list($id,$talk_volue,$change) = post_register_manager($con,"talk_volue",$serial,"advance_settin","general*sound*",0,24,0.2);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------WELCOME FLOOR	STNG    25
list($id,$welcome_floor,$change) = post_register_manager($con,"welcome_floor",$serial,"advance_settin","general*sound*",0,25);
if( $change == "upload")$progress_passed+=2;
if( $change == "download")$progress_passed+=1;
if( $change == "unknown")$unknown=1;
$step++;
//-------------------------------------------------GANG SELECT	STNG    26
list($id,$gang_select,$change) = post_register_manager($con,"gang_select",$serial,"advance_settin","general*sound*",0,26);
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