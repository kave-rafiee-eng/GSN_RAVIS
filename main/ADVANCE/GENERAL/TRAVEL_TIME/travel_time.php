
<?php


include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK
include "../../../../function.php"; //my_function

include "../../../../main/GSM/change_status.php"; //change_status

$change="unknown";


//-------------------------------------------------TRAVEL TIME
$travel_time=0;
$type = "advance_settin";
$add = "travel_time";
$name = "general*".$add;

list($id,$travel_time,$change) = read_data($con,$serial,"$type","$name","0");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if( !empty($_POST[$add] )  ){
        $travel_time = $_POST[$add];
        update_data($con,$serial,"$type","$name",$travel_time);
    }

    if( !empty($_POST['read_register'] )  ){
        read_register($con,$serial,"$type","$name");
    }

    header("location: /GSM_RAVIS/main/ADVANCE/GENERAL/TRAVEL_TIME/travel_time.php");
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Ravis</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="../../../../assets/img/favicon.png" rel="icon">
    <link href="../../../../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../../../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../../../../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../../../../assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="../../../../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="../../../../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../../../../assets/vendor/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="../../../../assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
    * Template Name: NiceAdmin
    * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
    * Updated: Apr 20 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
    <SCRIPT>

        function myFunction() {

            var x = document.getElementById("number_of_stop").value;

            document.getElementById("alert_text").innerHTML = x.toString(10)+" Sec";

            var x = document.getElementById("alert");

            if (x.style.display === "none") {
                x.style.display = "block";
            }

        }

        // Refresh the page after a delay of 3 seconds
        setTimeout(function(){
            location.reload();
        }, 15000); // 3000 milliseconds = 3 seconds



    </SCRIPT>

</head>

<body  >




<?php
include "../../../../header.php";
?>

<?php
include "../../../../Sidebar.php";
?>

<main  id="main" class="main">

    <div class="pagetitle">
        <h1>Iot Parameter</h1>

        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item active">Travel Time</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Travel Time</h5>

                        <div class="row mb-3 m-2" >
                            <label  class="col-sm-6 col-form-label">Read Register</label>
                            <div class="col-sm-6">
                                <form method="post" action="">
                                    <button value="read_register" name="read_register" type="submit" class="btn btn-warning">Read</button>
                                </form>

                            </div>
                        </div>

                        <!-- General Form Elements -->
                        <form method="post" action="" >

                            <label class="col-sm-6 col-form-label">Travel Time</label>

                            <div class="row mb-3">

                                <div class="col-sm-10">
                                    <input oninput="myFunction()"  value="<?php echo $travel_time;?>" name="travel_time" type="number" class="form-control" id="number_of_stop" min="0" max="200">
                                </div>
                            </div>

                            <div class="row mb-3" >
                                <label id="kave" class="col-sm-3 col-form-label">SAVE</label>
                                <div class="col-sm-3">
                                    <button <?php if($change == "download")echo "disabled"?>  type="submit" class="btn btn-primary">SAVE</button>
                                </div>
                                <label  style="color: red" class="col-sm-6 col-form-label">
                                    <?php if($change == "download")echo "wait to download complit"?>
                                </label>
                            </div>

                        </form><!-- End General Form Elements -->

                        <div style="display: none;" id="alert" class="alert alert-primary bg-primary text-light border-0 alert-dismissible fade show" role="alert">
                            <div id="alert_text">A simple primary alert with solid color—check it out! </div>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

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
                                        Number Of Stop
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">تعداد طبقات</div>
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
                                show_change_status($change);
                                ?>

                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            </div>
                        </div><!-- End Default Tabs -->

                    </div>
                </div>

            </div>
        </div>
    </section>

</main><!-- End #main -->


<?php
include "../../../../Footer.php";
?>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


<!-- Vendor JS Files -->
<script src="../../../../assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="../../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../../../../assets/vendor/chart.js/chart.umd.js"></script>
<script src="../../../../assets/vendor/echarts/echarts.min.js"></script>
<script src="../../../../assets/vendor/quill/quill.js"></script>
<script src="../../../../assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="../../../../assets/vendor/tinymce/tinymce.min.js"></script>
<script src="../../../../assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="../../../../assets/js/main.js"></script>



</body>

</html>