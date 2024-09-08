<?php

include "read.php";
include "function.php";

if ( !empty($_GET["serial"] )){

    $uplaod_i=1;
    $download_i=1;

    $str = "{";

    $serial = $_GET["serial"];

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['change'] == "upload"  ) {

            $type = $page['type'];
            $name = $page['name'];
            $data = $page['data'];

            $str .= "\"name_w$uplaod_i\":";
            $str .= "\"";
            // $str .= "$type";
            // $str .= "*";
            $str .= "$name";
            $str .= "\"";

            $str .= ",";

            $str .= "\"data_w$uplaod_i\":";
            $str .= "\"";
            $str .= "$data";
            $str .= "\"";

            $str .= ",";


            $id =  $page['id'];

            $quary = "UPDATE `data` SET `serial`='$serial',`change`='download' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

            $uplaod_i++;

        }
        if ($page['change'] == "download"  ) {

            $type = $page['type'];
            $name = $page['name'];
            $data = $page['data'];

            $str .= "\"name_r$download_i\":";
            $str .= "\"";
            // $str .= "$type";
            // $str .= "*";
            $str .= "$name";
            $str .= "\"";

            $str .= ",";

            $str .= "\"data_r$download_i\":";
            $str .= "\"";
            $str .= "@";
            $str .= "\"";

            $str .= ",";

            $download_i++;

        }
    }

    $str .= "}";
    echo $str;

    if ( !empty($_GET["name1"]) && !empty($_GET["data1"]) ){
        $name1 = $_GET["name1"];
        $data1 = $_GET["data1"];

        if( update_data_gsm($con,$serial,$name1,$data1) == 1 )echo "OK";
    }

    if ( !empty($_GET["SW_ENABLE"])  ){

        date_default_timezone_set("Asia/Tehran");

        $date = date("Y/m/d");
        $time = date("H:i:s");

        $id_found=0;

        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$serial'";
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
            $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$serial','user_enable_change','$date','$time')";
            $resault=mysqli_query($con,$quary);
        }

        echo "OK";
    }


    date_default_timezone_set("Asia/Tehran");
    //echo "Today is " . date("Y/m/d") . "<br>";
    //echo "The time is " . date("h:i:sa");

    include "read.php";

    $date = date("Y/m/d");
    $time = date("H:i:s");


    $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('','$serial','gsm_last_connect','$date','$time')";
    $resault=mysqli_query($con,$quary);

}

?>
