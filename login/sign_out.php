<?php

    setcookie("serial", 0, time() + (86400 * 30), "/");
    setcookie("password", 0, time() + (86400 * 30), "/");

    header("location: /GSM_RAVIS/login/login_bs.php");
    die();

?>