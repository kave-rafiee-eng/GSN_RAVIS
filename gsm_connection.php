<?php

include "read.php";
include "function.php";

//echo isset($_GET["SW_ENABLE"]);

if ( isset($_GET["connection_test"])  ){
   echo "{\"connection_test\":\"connect\",}";
   die();
}

if ( isset($_GET["serial"] )){

    $uplaod_i=1;
    $download_i=1;

    $str = "{";

    $serial = $_GET["serial"];

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` ,`arreay_select`, `byte_count` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['change'] == "upload" &&  $page['type'] == "advance_settin" ) {

            $type = $page['type'];
            $name = $page['name'];
            $data = $page['data'];
            $arreay_select  = $page['arreay_select'];
            $byte_count   = $page['byte_count'];

            $str .= "\"ar$uplaod_i\":"; // arreay
            $str .= "$arreay_select";
            $str .= ",";

            $str .= "\"ad$uplaod_i\":"; // byte_count
            $str .= "$byte_count";
            $str .= ",";

            $str .= "\"da$uplaod_i\":"; // data
            $str .= "$data";
            $str .= ",";

            $str .= "\"st$uplaod_i\":"; // data
            $str .= "1";
            $str .= ",";

            $id =  $page['id'];
            $quary = "UPDATE `data` SET `serial`='$serial',`change`='download' WHERE `id` = '$id'";
            mysqli_query($con,$quary);

            $uplaod_i++;

            break;
        }
        if ($page['change'] == "download" &&  $page['type'] == "advance_settin"  ) {

            $type = $page['type'];
            $name = $page['name'];
            $data = $page['data'];
            $arreay_select  = $page['arreay_select'];
            $byte_count   = $page['byte_count'];

            $str .= "\"ar$uplaod_i\":"; // arreay
            $str .= "$arreay_select";
            $str .= ",";

            $str .= "\"ad$uplaod_i\":"; // byte_count
            $str .= "$byte_count";
            $str .= ",";

            $str .= "\"da$uplaod_i\":"; // data
            $str .= "$data";
            $str .= ",";

            $str .= "\"st$uplaod_i\":"; // data
            $str .= "0";
            $str .= ",";

            $uplaod_i++;

            break;

        }
    }

    $str .= "}";
    echo $str;

    if ( isset($_GET["ar1"]) && isset($_GET["ad1"]) && isset($_GET["da1"])  ){
        echo "sd";
        $arreay_select = $_GET["ar1"];
        $byte_count = $_GET["ad1"];
        $data = $_GET["da1"];

        if( update_data_gsm($con,$serial,$data,$arreay_select,$byte_count) == 1 )echo "OK";
   }



    if ( isset($_GET["SW_ENABLE"])  ){

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
