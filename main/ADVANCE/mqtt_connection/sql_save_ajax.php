<?php


include "../../../read.php"; // $con
include "../../../function.php"; //my_function

if ( isset($_GET["json"])  ) {

    $json_get = $_GET["json"];
    $json_input = json_decode($json_get);
    //$myJSON = json_encode($json_input);
    echo $json_get;

    $obj = json_decode($json_get);

    for( $count = 0; $count < 10; $count++ ) {

        if( isset($obj->serial) && isset($obj->{"ad".$count}) && isset($obj->{"ar".$count}) && isset($obj->{"da".$count})){

            update_data_gsm($con,$obj->serial,$obj->{"da".$count},$obj->{"ar".$count},$obj->{"ad".$count});
        }

    }
}


?>