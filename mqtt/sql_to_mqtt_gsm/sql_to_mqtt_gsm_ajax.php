<?php

//http://localhost:82/GSM_RAVIS/mqtt/sql_to_mqtt_gsm/sql_to_mqtt_gsm_ajax.php

include "../../read.php"; // $con

$quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` ,`arreay_select`, `byte_count` FROM `data` WHERE 1";
$resault=mysqli_query($con,$quary);
while( $page = mysqli_fetch_assoc($resault) ) {

    if ($page['change'] == "upload" &&  $page['type'] == "advance_settin" ) {

        $myObj = new stdClass();

        $myObj->serial = $page["serial"] ;
        $myObj->ar1 = $page["arreay_select"] ;
        $myObj->ad1 = $page["byte_count"] ;
        $myObj->da1 = $page["data"] ;
        $myObj->st1 = "1" ;

        $myJSON = json_encode($myObj);
        echo $myJSON;

        $id =  $page['id'];
        $quary = "UPDATE `data` SET `change`='download' WHERE `id` = '$id'";
        mysqli_query($con,$quary);

        break;
    }
    if ($page['change'] == "download" &&  $page['type'] == "advance_settin"  ) {

        $myObj = new stdClass();

        $myObj->serial = $page["serial"] ;
        $myObj->ar1 = $page["arreay_select"] ;
        $myObj->ad1 = $page["byte_count"] ;
        $myObj->da1 = $page["data"] ;
        $myObj->st1 = "0" ;

        $myJSON = json_encode($myObj);
        echo $myJSON;

        break;

    }
}

//echo "----";


?>