<?php

include "../../read.php"; // $con

include "../../function.php"; //my_function

if (isset($_GET["json"])) {

    $jsonobj = $_GET["json"];
    $obj = json_decode($jsonobj);

    for ($count = 0; $count < 10; $count++) {

        if (isset($obj->serial) && isset($obj->{"ad" . $count}) && isset($obj->{"ar" . $count}) && isset($obj->{"da" . $count})) {

            if (update_data_gsm($con, $obj->serial, $obj->{"da" . $count}, $obj->{"ar" . $count}, $obj->{"ad" . $count}) == 1) echo "OK";
        }

    }

    echo $jsonobj;

}

echo "----";

//http://localhost:82/GSM_RAVIS/mqtt/mqtt_to_sql_gsm/mqtt_to_sql_gsm_ajax.php?json={"serial":"100","ar1":"0","ad1":"2","da1":"0"}


?>


