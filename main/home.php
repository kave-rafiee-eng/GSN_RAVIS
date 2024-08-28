
<?php

    if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
    else $serial=0;
    if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
    else $password =0;

    include "../read.php";

    $quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE  `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);

    $pass_wrong=1;

    if( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['password'] == $password)$pass_wrong=0;
    }

    if( $pass_wrong == 1 ){
        header("location: /GSM_RAVIS/login/login_bs.php");
        die();
    }
    //---------LOGIN_CHECK

    $change=0;

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);

    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['change'] == 1 ) {

            $change=1;
        }
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>ravis</title>
    <meta content="" name="description">
    <meta content="" name="keywords">



    <!-- Favicons -->
    <link href="/GSM_RAVIS/assets/img/favicon.png" rel="icon">
    <link href="/GSM_RAVIS/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="/GSM_RAVIS/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="/GSM_RAVIS/assets/vendor/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="/GSM_RAVIS/assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
    * Template Name: NiceAdmin
    * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
    * Updated: Apr 20 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
    <SCRIPT>

        function myFunction() {

            var select = document.getElementById("select").value;

            if( select == "COLLICTIVE_DW" ){
                document.getElementById("alert_text").innerHTML = "اولویت بر اساس انتخاب طبقه از بالا به پایین";
            }
            else if(select=="FULL_COLLECTIVE"){
                document.getElementById("alert_text").innerHTML = "بدون اولویت سرویس دهی به نزدیک ترین طبقه";
            }
            else if( select== "PUSH_BUTTON" ){
                document.getElementById("alert_text").innerHTML = "دستی";
            }

            //document.getElementById("alert").innerHTML = document.getElementById("select").value;
            var x = document.getElementById("alert");

            if (x.style.display === "none") {
                x.style.display = "block";
            }

        }

        // Refresh the page after a delay of 3 seconds
       /* setTimeout(function(){
            location.reload();
        }, 15000); // 3000 milliseconds = 3 seconds*/

    </SCRIPT>

</head>

<body  >

    <?php
        include "../header.php";
    ?>

    <?php
        include "../Sidebar.php";
    ?>

<main  id="main" class="main">

    <div class="pagetitle">
        <h1>Welcome</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">gsm Ravis</a></li>
                <li class="breadcrumb-item">v1</li>
                <li class="breadcrumb-item active">Home</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->


    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card">
                    <div class="card-body">

                        <h5 class="card-title">Last Connection</h5>

                        <!-- last connect -->
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th data-type="date" data-format="YYYY/DD/MM">Date</th>
                                    <th data-type="time" >Time</th>
                                </tr>
                            </thead>
                            <tbody>

                            <tbody>
                                <?php

                                    include "../read.php";

                                    $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$serial'";
                                    $resault=mysqli_query($con,$quary);

                                    $data_found=0;
                                    while( $page = mysqli_fetch_assoc($resault) ) {

                                        $last_date = $page['date'];
                                        $last_time = $page['time'];
                                        $data_found=1;
                                    }

                                    if($data_found){
                                        echo "<tr class=\"table-dark\" >";
                                        echo "<td>".$serial."</td>";
                                        echo "<td>".$last_date."</td>";
                                        echo "<td>".$last_time."</td>";
                                        echo "</tr> ";
                                    }


                                ?>

                            </tbody>
                        </table>
                        <!-- END last connect -->

                        <h5 class="card-title">Table Connection</h5>

                        <table class="table datatable">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th data-type="date" data-format="YYYY/DD/MM">Date</th>
                                    <th data-type="time" >Time</th>
                                </tr>
                            </thead>
                            <tbody>

                            <?php

                            include "../read.php";

                            $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$serial'";
                            $resault=mysqli_query($con,$quary);

                            while( $page = mysqli_fetch_assoc($resault) ) {

                                echo "<tr>";
                                echo "<td>".$serial."</td>";
                                echo "<td>".$page['date']."</td>";
                                echo "<td>".$page['time']."</td>";
                                echo "</tr> ";
                            }
                            ?>

                            </tbody>
                        </table>
                        <!-- END Table Connection -->
                    </div>
                </div>
            </div>

            <div class="col-lg-5">

                <div class="card">
                    <div class="card-body">

                        <h5 class="card-title">HELP</h5>

                        <!-- Accordion without outline borders -->
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        SETTING
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">جهت دسترسی به تنظیمات برد از منوی کشویی استفاده کنید</div>
                                </div>
                            </div>

                        </div><!-- End Accordion without outline borders -->

                        <h5 class="card-title">Device</h5>

                        <!-- Default Tabs -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">updating</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">serial</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">reserve</button>
                            </li>
                        </ul>
                        <div class="tab-content pt-2" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <?php
                                if( $change == 1 ){

                                    echo "<button class=\"btn btn-warning\" type=\"button\" disabled>";
                                    echo "<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\"></span>";
                                    echo "updating...";
                                    echo "<i class=\"bi bi-wifi\"></i>";
                                    echo "</button>";

                                }
                                else{
                                    echo "<button class=\"btn btn-success\" type=\"button\" disabled>";
                                    echo "update";
                                    echo "<i class=\"bi bi-wifi\"></i>";
                                    echo "</button> " ;

                                }
                                ?>


                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                Device Serial<?php  echo $serial;?>
                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            </div>
                        </div><!-- End Default Tabs -->

                    </div>
                </div>

            </div>


        </div>
    </section>

    <section class="section">
        <div class="row">

            <div class="col-lg-7">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">product</h5>

                        <!-- Slides with indicators -->
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/GSM_RAVIS/assets/img/iot2.webp" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="/GSM_RAVIS/assets/img/iot1.webp" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="/GSM_RAVIS/assets/img/iot3.jpg" class="d-block w-100" alt="...">
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span style="color: black" class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>

                        </div><!-- End Slides with indicators -->

                    </div>
                </div>

            </div>


        </div>
    </section>

</main><!-- End #main -->

    <?php
        $ad = "/";
    ?>

<?php
    include "../Footer.php";
?>

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