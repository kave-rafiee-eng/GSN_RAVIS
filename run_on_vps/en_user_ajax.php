
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

        $id_found = 0;
        // -----
        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$obj->serial' ";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {
            if ($page['name'] == "last_en_user") {
                $id_found=1;
                $last_en_user_time = $page['time'];
                $last_en_user_date = $page['date'];
            }
        }
        

        $insert_new=0;

        if( $id_found == 1 ){

            echo $last_en_user_time .'+'.$last_en_user_date . '/';

            if( $last_en_user_date == $date ){
                // تبدیل زمان‌ها به timestamp
                $STAMP_last_en_user_time = strtotime($last_en_user_time);
                $STAMP_time = strtotime($time);

                $differenceInSeconds = abs($STAMP_time - $STAMP_last_en_user_time);

                if ($differenceInSeconds <= 300) {

                }
                else {$insert_new=1;
                    echo "0";
                }
            }
            else {
                $insert_new = 1;
                echo "1";
            }

        }
        else{
            $insert_new=1;
            echo "2";
        }

        if( $insert_new == 1 ){

            echo "*******";
            $quary = "INSERT INTO `date_time`(`id`, `serial`, `name`, `date`, `time`) VALUES ('0','$obj->serial','last_en_user','$date','$time')";
            $resault=mysqli_query($con,$quary);
        }



        echo "OK";

    }
}
?>


