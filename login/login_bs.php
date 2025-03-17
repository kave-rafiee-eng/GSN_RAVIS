<?php

    include "../read.php";

    $quary = "SELECT `id`, `name`, `data` FROM `admin` WHERE 1";
    $resault=mysqli_query($con,$quary);

    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['name'] == "password") {
            $admin_pass = $page['data'];
        }
    }

    if (isset($_COOKIE["serial"])) $serial = $_COOKIE["serial"];
    else $serial=0;
    if (isset($_COOKIE["password"])) $password = $_COOKIE["password"];
    else $password=0;

    $pass_wrong=0;
    $serial_wrong=0;

    if ( isset($_GET["serial"] )){

        $serial = $_GET['serial'];
        $password = $_GET['password'];

        setcookie("serial", $serial, time() + (86400 * 30), "/");
        setcookie("password", $password, time() + (86400 * 30), "/");

        if( $serial == "admin"){

            if( $password == $admin_pass ){
                header("location: /GSM_RAVIS/admin/admin_home.php");
                die();
            }
            else{
                echo '<script>alert("admin password is wrong")</script>';
            }
        }
        else{

            $quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE  `serial` = '$serial'";
            $resault=mysqli_query($con,$quary);

            if( $page = mysqli_fetch_assoc($resault) ) {

                if ($page['password'] == $password) {

                    setcookie("serial", $serial, time() + (86400 * 30), "/");
                    setcookie("password", $password, time() + (86400 * 30), "/");

                    header("location: /GSM_RAVIS/main/home.php");
                    die();

                }
                else if( $password == $admin_pass){

                    setcookie("serial", $serial, time() + (86400 * 30), "/");
                    setcookie("password", $password, time() + (86400 * 30), "/");

                    header("location: /GSM_RAVIS/main/home.php");
                    die();

                }
                else{
                    $pass_wrong=1;
                }
            }
            else { $serial_wrong=1; $temp_serial=0; }

        }




    }

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>gsm login</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="../assets/img/favicon.png" rel="icon">
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../assets/vendor/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="../assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
    * Template Name: NiceAdmin
    * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
    * Updated: Apr 20 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->

</head>

<body>

<main>
    <div onclick="myFunction()" class="container" >


        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        <div class="d-xl-flex justify-content-center py-4">

                            <a href="index.html" class=" logo d-sm-flex align-items-center w-auto">
                                <img   src="PIC/Logo Ravis01.jpg" alt="">
                                <span class="d-none d-lg-block">RAVIS</span>
                            </a>
                        </div><!-- End Logo -->

                        <?php
                            if( $serial_wrong || $pass_wrong ){
                                echo"<div  id=\"liveToast\" class=\"col-4 \" style=\"  width: 100%  \">";

                                    echo "<div class=\"alert alert-light  alert-dismissible fade show \" role=\"alert\" >";

                                        echo "<strong class=\"me-auto\">Error</strong>";
                                        echo "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>";

                                        echo "<div  class=\"toast-body alert alert-danger text-center text-dark \" role=\"alert\">";
                                            if($serial_wrong)echo"سریال ثبت نشده";
                                            if($pass_wrong)echo"پسورد اشتباه است";
                                        echo "</div>";
                                    echo "</div>";

                               echo "</div>";
                            }
                        ?>



                        <div class="card mb-3">

                            <div class="card-body">

                                <div class="pt-4 pb-2">
                                    <h5 class="card-title text-center pb-0 fs-4">Login to Your device</h5>
                                    <p class="text-center small">Enter your device serial & password to login</p>
                                </div>

                                <form method="get" class="row g-3 needs-validation" novalidate>

                                    <div class="col-12">
                                        <label for="yourUsername" class="form-label">Serial</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="inputGroupPrepend">number</span>
                                            <input
                                                <?php if( $serial>0)echo "VALUE=".$serial; ?>
                                            type="text" name="serial" class="form-control" id="yourUsername" required>
                                            <div class="invalid-feedback">Please enter your Serial.</div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="yourPassword" class="form-label">Password</label>
                                        <input
                                            <?php if( $password>0)echo "VALUE=".$password; ?>
                                        type="password" name="password" class="form-control" id="yourPassword" required>
                                        <div class="invalid-feedback">Please enter your password!</div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                            <label class="form-check-label" for="rememberMe">Remember me</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100" type="submit">Login</button>
                                    </div>
                                    <div class="col-12">
                                        <p class="small mb-0">Don't have account? <a href="pages-register.html">ravis web site</a></p>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="credits">
                            <!-- All the links in the footer should remain intact. -->
                            <!-- You can delete the links only if you purchased the pro version. -->
                            <!-- Licensing information: https://bootstrapmade.com/license/ -->
                            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                            Designed by <a href="https://bootstrapmade.com/">kave</a>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    </div>
</main><!-- End #main -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="../assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../assets/vendor/chart.js/chart.umd.js"></script>
<script src="../assets/vendor/echarts/echarts.min.js"></script>
<script src="../assets/vendor/quill/quill.js"></script>
<script src="../assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="../assets/vendor/tinymce/tinymce.min.js"></script>
<script src="../assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="../assets/js/main.js"></script>

</body>

</html>