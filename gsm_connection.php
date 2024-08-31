<?php

    include "read.php";
    include "function.php";

    if ( !empty($_GET["serial"] )){

        $serial = $_GET["serial"];

        $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {

            if ($page['change'] == "upload"  ) {

                echo "{";
                echo $page['type']."*".$page['name']."="."\"".$page['data']."\"";
                echo ",";
                echo "}";

                $id =  $page['id'];

                $quary = "UPDATE `data` SET `serial`='$serial',`change`='download' WHERE `id` = '$id'";
                mysqli_query($con,$quary);

            }
            if ($page['change'] == "download"  ) {

                echo "{";
                echo $page['type']."*".$page['name']."=";
                echo "\"@\"";
                echo ",";
                echo "}";

            }

        }

        if ( !empty($_GET["name1"]) && !empty($_GET["data1"]) ){
            $name1 = $_GET["name1"];
            $data1 = $_GET["data1"];

            if( update_data_gsm($con,$serial,$name1,$data1) == 1 )echo "OK";
        }


        date_default_timezone_set("Asia/Tehran");
        //echo "Today is " . date("Y/m/d") . "<br>";
        //echo "The time is " . date("h:i:sa");

        include "read.php";

        $date = date("Y/m/d");
        $time = date("h:i:sa");

        $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('','$serial','gsm_last_connect','$date','$time')";
        $resault=mysqli_query($con,$quary);

    }

?>
