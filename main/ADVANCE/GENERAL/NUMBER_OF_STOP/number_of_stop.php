
<?php

if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
else $serial=0;
if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
else $password =0;

include "../../../../read.php";

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




$type = "advance_settin";
$name = "general*number_of_stop";

$quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
$resault=mysqli_query($con,$quary);

$data_found=0;
while( $page = mysqli_fetch_assoc($resault) ) {

    if ($page['type'] == $type && $page['name'] == $name ) {

        $change = $page['change'];
        $id = $page['id'];
        $number_of_stop = $page['data'];
        $data_found=1;
    }
}

if( $data_found == 0 ){

    $number_of_stop = 5;
    $change = 1;
    $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','$type','$name','$number_of_stop','1')";
    $resault=mysqli_query($con,$quary);

}
else{

    // if ( !empty($_GET["service_type"] )){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if( !empty($_POST['number_of_stop'] )  ){

            if( $_POST['number_of_stop'] != $number_of_stop ){

                $number_of_stop = $_POST['number_of_stop'];

                $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$number_of_stop',`change`='1' WHERE `id` = '$id'";
                $resault=mysqli_query($con,$quary);
                $change = 1;

            }

        }
    }

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

            document.getElementById("alert_text").innerHTML = x.toString(10)+"stop";

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
                <li class="breadcrumb-item active">Number Of Stop</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Number Of Stop</h5>

                        <!-- General Form Elements -->
                        <form method="post" action="" >

                            <label class="col-sm-6 col-form-label">Number Of Stop</label>

                            <div class="row mb-3">

                                <div class="col-sm-10">
                                    <input oninput="myFunction()"  value="<?php echo $number_of_stop;?>" name="number_of_stop" type="number" class="form-control" id="number_of_stop" min="1" max="60">
                                </div>
                            </div>

                            <div class="row mb-3" >
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">SAVE</button>
                                </div>
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