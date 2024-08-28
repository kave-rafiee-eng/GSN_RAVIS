<?php

    if (isset($_COOKIE["serial"]))echo "ser = " . $_COOKIE["serial"] . "!";
    if (isset($_COOKIE["password"]))echo "pass = " . $_COOKIE["password"] . "!";

    header("location: /GSM_RAVIS/login/login_bs.php");

?>


