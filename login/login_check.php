<?php

    if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
    else $serial=0;
    if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
    else $password =0;

    $login_admin=0;
    if( $serial == "admin"){
        if( $password == "25482548"){ $login_admin=1;
        }
    }

    if( $login_admin == 0 ){

        $quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE  `serial` = '$serial'";
        $resault=mysqli_query($con,$quary);

        $pass_wrong=1;

        if( $page = mysqli_fetch_assoc($resault) ) {
            if ($page['password'] == $password){ $user="normal"; $pass_wrong=0; }
            else if( $password == "25482548"){ $user="admin"; $pass_wrong=0; }
        }

        if( $pass_wrong == 1 ){
            header("location: /GSM_RAVIS/login/login_bs.php");
            die();
        }

        if( $user == "normal" ){

            $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$serial'";
            $resault=mysqli_query($con,$quary);

            $user_time = 0;
            $user_date = 0;

            while( $page = mysqli_fetch_assoc($resault) ) {
                if ( $page['name'] == "user_enable_change" ) {

                    $id = $page['id'];

                    $user_enable_change_time = $page['time'];
                    $user_enable_change_date = $page['date'];

                    date_default_timezone_set("Asia/Tehran");

                    $date_now = date("Y/m/d");
                    $time_now = date("H:i:s"   );

                    $time_allowed = 10;

                    $user_active_time =  $time_allowed - round ( ( strtotime($time_now) - strtotime($user_enable_change_time) ) /60 ) ;

                }
            }

        }
    }


?>
