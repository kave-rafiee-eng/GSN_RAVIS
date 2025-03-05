
<?php

include "../read.php"; // $con

if ( isset($_GET["json"])  ) {

    $jsonobj = $_GET["json"];
    $obj = json_decode($jsonobj);

    if( isset($obj->serial)  ){

        date_default_timezone_set("Asia/Tehran");

        $date = date("Y/m/d");
        $time = date("H:i:s");

        $id_found=0;

        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$obj->serial'";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {
            if ($page['name'] == "last_gsm_connection") {
                $id_found=1;
                $id = $page['id'];

                $quary = "UPDATE `date_time` SET `date`='$date',`time`='$time' WHERE `id` = '$id'";
                mysqli_query($con,$quary);

            }
        }

        if( $id_found == 0 ){
            $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$obj->serial','last_gsm_connection','$date','$time')";
            $resault=mysqli_query($con,$quary);
        }


        echo "OK";

    }
}
?>


