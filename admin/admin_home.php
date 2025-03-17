
<?php

include "../read.php";

include "../login/login_check.php"; //LOGIN_CHECK

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["new_serial"])) {

        $new_serial = $_POST["new_serial"];

        $quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE `serial` = '$new_serial'";
        $resault=mysqli_query($con,$quary);

        if( $page = mysqli_fetch_assoc($resault) ) {
        }
        else{
            $quary = "INSERT INTO `project`(`password`, `phone_number`, `address`, `information`, `serial`) VALUES ('$new_serial','0','0','new','$new_serial')";
            $resault=mysqli_query($con,$quary);
        }


    }

    if (isset($_POST["delet_serial"])) {

        $delet_serial = $_POST["delet_serial"];


        $quary = "DELETE FROM `project` WHERE `serial` = '$delet_serial'";
        $resault=mysqli_query($con,$quary);

        echo $delet_serial;
    }


}


//-------------------------------------------------CLEAR $POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   header("location: /GSM_RAVIS/admin/admin_home.php");
}

date_default_timezone_set("Asia/Tehran");

$current_date = date("Y/m/d");
$current_time = date("H:i:s");

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


    </SCRIPT>

</head>

<body  >

<?php
include "header_admin.php";
?>

<?php
include "Sidebar_admin.php";
?>

<main  id="main" class="main">
    <div class="pagetitle">
        <h1>Admin</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Admin</a></li>
                <li class="breadcrumb-item">Home</li>
                <li class="breadcrumb-item active">Home</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">

                <div class="card">
                    <div class="card-body">
                        
                        <h5 class="card-title">جاوید شاه</h5>
                        <!-- Accordion without outline borders -->
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <?php
                                            echo $current_date."  ".$current_time
                                        ?>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">تاریخ و زمان فعلی(ایران/تهران)</div>
                                </div>
                            </div>
                        </div><!-- End Accordion without outline borders -->

                        <h5 class="card-title">Device</h5>

                        <!-- Default Tabs -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Devices</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Add</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Remove</button>
                            </li>
                        </ul>
                        <div class="tab-content pt-2" id="myTabContent">

                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <table class="table datatable">
                                    <thead>
                                    <tr>
                                        <th>Serial</th>
                                        <th>pass</th>
                                        <th data-type="date" data-format="YYYY/DD/MM">Date</th>
                                        <th data-type="time" >Time</th>
                                        <th data-type="time" >Status(15min)</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <?php


                                    $quary = "SELECT `password`, `phone_number`, `address`, `information`, `serial` FROM `project` WHERE  1";
                                    $resault=mysqli_query($con,$quary);

                                    while( $page = mysqli_fetch_assoc($resault) ) {

                                        $serial_select = $page['serial'];
                                        echo "<tr>";
                                        echo "<td>".$page['serial']."</td>";
                                        echo "<td>".$page['password']."</td>";

                                        $quary = "SELECT `id`, `serial`, `name`, `date`, `time` FROM `date_time` WHERE `serial` = '$serial_select'";
                                        $resault2=mysqli_query($con,$quary);

                                        $date=0;
                                        $time=0;
                                        $last_date=0;
                                        $last_time=0;

                                        $data_found=0;
                                        while( $page_date_time = mysqli_fetch_assoc($resault2) ) {

                                            if ($page_date_time['name'] == "last_gsm_connection") {
                                                $last_date = $page_date_time['date'];
                                                $last_time = $page_date_time['time'];
                                                $data_found = 1;
                                            }

                                        }

                                        if( $data_found ){

                                            echo "<td>".$last_date."</td>";
                                            echo "<td>".$last_time."</td>";


                                            if( $last_date == $current_date ){
                                                // تبدیل زمان‌ها به timestamp
                                                $STAMP_last_time = strtotime($last_time);
                                                $STAMP_current_time = strtotime($current_time);

                                                $differenceInSeconds = abs($STAMP_current_time - $STAMP_last_time);

                                                if ($differenceInSeconds <= 900) {
                                                    echo "<td>"."Active"."</td>";
                                                }
                                                else {
                                                    echo "<td>"."Disable"."</td>";
                                                }
                                            }
                                            else {
                                                $insert_new = 1;
                                                echo "1";
                                            }
                                        }
                                        else{
                                            echo "<td>"."----"."</td>";
                                            echo "<td>"."----"."</td>";
                                            echo "<td>"."----"."</td>";
                                        }



                                        echo "</tr> ";
                                    }
                                    ?>

                                    </tbody>
                                </table>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <!-- General Form Elements -->
                                <form method="post" action="" >

                                    <div class="row mb-3 m-2" >
                                        <ul class="list-group">

                                            <li class="list-group-item"><i class="bi bi-activity me-1 text-primary"></i>New Serial</li>

                                            <li class="list-group-item"> <!--  Gang Select !-->
                                                <div class="row ">
                                                    <label class="col-sm-4 col-form-label">Serial</label>
                                                    <div class="row mb-3">
                                                        <div class="col-sm-10">
                                                            <input step="1"   value="0" name="new_serial" type="number" class="form-control" id="" min="0" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>

                                    </div><!-- Read From device -->

                                    <div class="row mb-3" >
                                        <label id="kave" class="col-sm-6 col-form-label ">New </label>
                                        <div class="col-sm-6">
                                            <button  type="submit" class="btn btn-primary">SAVE</button>
                                        </div>

                                    </div>


                                </form><!-- End General Form Elements -->
                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <!-- General Form Elements -->
                                <form method="post" action="" >

                                    <div class="row mb-3 m-2" >
                                        <ul class="list-group">

                                            <li class="list-group-item"><i class="bi bi-activity me-1 text-primary"></i>Delet Serial</li>

                                            <li class="list-group-item"> <!--  Gang Select !-->
                                                <div class="row ">
                                                    <label class="col-sm-4 col-form-label">Serial</label>
                                                    <div class="row mb-3">
                                                        <div class="col-sm-10">
                                                            <input step="1"   value="0" name="delet_serial" type="number" class="form-control" id="" min="0" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>

                                    </div><!-- Read From device -->

                                    <div class="row mb-3" >
                                        <label id="kave" class="col-sm-6 col-form-label ">Delet </label>
                                        <div class="col-sm-6">
                                            <button  type="submit" class="btn btn-primary">SAVE</button>
                                        </div>

                                    </div>


                                </form><!-- End General Form Elements -->
                            </div>
                        </div><!-- End Default Tabs -->

                    </div>
                </div>

            </div>


        </div>
    </section>


</main><!-- End #main -->


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