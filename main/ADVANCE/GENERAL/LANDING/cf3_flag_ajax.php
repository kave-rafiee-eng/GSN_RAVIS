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

//-------------------------------------------------NUMBER OF STOP STNG    2
list($id,$number_of_stop,$change) = post_register_manager($con,"number_of_stop",$serial,"advance_settin","general*",0,2);

//-------------------------------------------------jump 1/n floor  9/10
for($i=1; $i<=$number_of_stop; $i++){
    list($id,$data,$change) = post_register_manager($con,"jump1*f$i",$serial,"advance_settin","general*landing*based_on*",1,$i*100+9);
    if( $change == "upload")$progress_passed+=2;
    if( $change == "download")$progress_passed+=1;
    if( $change == "unknown")$unknown=1;
    $step++;
    list($id,$data,$change) = post_register_manager($con,"jumpn*f$i",$serial,"advance_settin","general*landing*based_on*",1,$i*100+10,1,0,3,0);
    if( $change == "upload")$progress_passed+=2;
    if( $change == "download")$progress_passed+=1;
    if( $change == "unknown")$unknown=1;
    $step++;
}

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


/*


*/
