
<?php

include "../read.php"; // $con

if ( isset($_GET["json"])  ) {

    $jsonobj = $_GET["json"];
    $obj = json_decode($jsonobj);

    if( isset($obj->serial) && isset($obj->en_user) ){

        date_default_timezone_set("Asia/Tehran");

        $date = date("Y/m/d");
        $time = date("H:i:s");

        $id_found=0;

        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$obj->serial'";
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
            $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$obj->serial','user_enable_change','$date','$time')";
            $resault=mysqli_query($con,$quary);
        }

        echo "OK";

    }
}
?>


