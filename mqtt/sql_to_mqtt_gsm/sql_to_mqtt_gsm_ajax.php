<?php

//http://localhost:82/GSM_RAVIS/mqtt/sql_to_mqtt_gsm/sql_to_mqtt_gsm_ajax.php

include "../../read.php"; // $con
include "../../function.php"; //my_function

$count = 1;
$num_data_send=4;

if ( isset($_GET["json"])  ) {

    $json_get = $_GET["json"];
    $json_input = json_decode($json_get);
    //$myJSON = json_encode($json_input);
    //echo $myJSON;

    $obj = json_decode($json_get);

    for( $count = 0; $count < 10; $count++ ) {

        if( isset($obj->serial) && isset($obj->{"ad".$count}) && isset($obj->{"ar".$count}) && isset($obj->{"da".$count})){

            update_data_gsm($con,$obj->serial,$obj->{"da".$count},$obj->{"ar".$count},$obj->{"ad".$count});
        }

    }

    $count = 1;

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` ,`arreay_select`, `byte_count` FROM `data` WHERE `serial` = '$json_input->serial'";
    $resault=mysqli_query($con,$quary);

    $myObj = new stdClass();

    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['change'] == "upload" &&  $page['type'] == "advance_settin" ) {

            $myObj->serial = $page["serial"] ;
            $myObj->{"ar".$count} = $page["arreay_select"] ;
            $myObj->{"ad".$count} = $page["byte_count"] ;
            $myObj->{"da".$count} = $page["data"] ;
            $myObj->{"st".$count} = "1" ;

            $id =  $page['id'];
            $quary = "UPDATE `data` SET `change`='download' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

            $count++;
            if( $count > $num_data_send )break;

        }
        if ($page['change'] == "download" &&  $page['type'] == "advance_settin"  ) {


            $myObj->serial = $page["serial"] ;
            $myObj->{"ar".$count} = $page["arreay_select"] ;
            $myObj->{"ad".$count} = $page["byte_count"] ;
            $myObj->{"da".$count} = $page["data"] ;
            $myObj->{"st".$count} = "0" ;

            $count++;
            if( $count > $num_data_send )break;

        }
    }

    $myJSON = json_encode($myObj);
    echo $myJSON;

    //-------------------------------------
    if( isset($json_input->serial) && isset($json_input->en_user)  ){

        date_default_timezone_set("Asia/Tehran");

        $date = date("Y/m/d");
        $time = date("H:i:s");

        $id_found=0;

        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$json_input->serial'";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {

            if ($page['name'] == "user_enable_change") {
                $id_found=1;
                $id = $page['id'];

                $quary = "UPDATE `date_time` SET `date`='$date',`time`='$time' WHERE `id` = '$id'";
                mysqli_query($con,$quary);

            }
        }

        if( $id_found == 0 ){
            $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$json_input->serial','user_enable_change','$date','$time')";
            $resault=mysqli_query($con,$quary);
        }

    }

    date_default_timezone_set("Asia/Tehran");
    $date = date("Y/m/d");
    $time = date("H:i:s");

    $id_found=0;

    $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$json_input->serial'";
    $resault=mysqli_query($con,$quary);
    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['name'] == "gsm_last_connect") {
            $id_found=1;
            $id = $page['id'];

            $quary = "UPDATE `date_time` SET `date`='$date',`time`='$time' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

        }
    }

    if( $id_found == 0 ){
        $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$json_input->serial','gsm_last_connect','$date','$time')";
        $resault=mysqli_query($con,$quary);
    }

}

?>