<?php

    include "read.php";

    if ( !empty($_GET["serial"] )){

        $serial = $_GET["serial"];

        $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {

            if ($page['change'] == 1  ) {

                echo "{";
                echo $page['type'].".".$page['name']."="."\"".$page['data']."\"";
                echo ",";
                echo "}";

                $id =  $page['id'];

                $quary = "UPDATE `data` SET `serial`='$serial',`change`='0' WHERE `id` = '$id'";
                mysqli_query($con,$quary);

            }
            else echo '.';
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
