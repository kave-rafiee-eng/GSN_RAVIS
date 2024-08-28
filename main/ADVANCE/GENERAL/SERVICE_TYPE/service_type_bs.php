
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


    $data_found=0;

    $type = "advance_settin";
    $name = "general_service_type";

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);

    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['type'] == $type && $page['name'] == $name ) {

            $change = $page['change'];
            $id = $page['id'];
            $service_type = $page['data'];
            echo "data_found".$id;

            $data_found=1;
            break;

        }
        else echo '.';
    }

    if( $data_found == 0 ){

        $service_type = "COLLICTIVE_DW";
        $change = 1;
        $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','advance_settin','general_service_type','COLLICTIVE_DW','1')";
        $resault=mysqli_query($con,$quary);

    }

    // if ( !empty($_GET["service_type"] )){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if( $_POST['service_type'] != $service_type ){

            $service_type = $_POST['service_type'];

            $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$service_type',`change`='1' WHERE `id` = '$id'";
            $resault=mysqli_query($con,$quary);
            $change = 1;

            echo $service_type;

            if( $data_found == 0 ){

                $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','advance_settin','general_service_type','$service_type','1')";
                $resault=mysqli_query($con,$quary);
                $change = 1;
                echo "new_data";

            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Forms / Elements - NiceAdmin Bootstrap Template</title>
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
        <h1>Form Elements</h1>

        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item active">Service Type</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body">
                        <h5 class="card-title">Service Type</h5>

                        <!-- General Form Elements -->
                        <form method="post" action="" >

                            <fieldset class="row mb-3">
                                <legend class="col-form-label col-sm-2 pt-0">value</legend>
                                <div class="col-sm-10">
                                    <!--
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                        <label class="form-check-label" for="gridRadios2">
                                            PUSH BUTTON
                                        </label>
                                    </div> -->

                                     <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                                if( $service_type == "COLLICTIVE_DW")echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            COLLICTIVE DW
                                        </label>
                                    </div>


                                    <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                            if( $service_type == "FULL_COLLECTIVE")echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            FULL COLLECTIVE
                                        </label>
                                    </div>


                                    <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                            if( $service_type == "PUSH_BUTTON")echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            PUSH BUTTON
                                        </label>
                                    </div>


                                </div>
                            </fieldset>


                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Select</label>
                                <div class="col-sm-10">
                                    <select  onclick="myFunction()" id="select" name="service_type" class="form-select" aria-label="Default select example">
                                        <option value="COLLICTIVE_DW">COLLICTIVE DW</option>
                                        <option value="FULL_COLLECTIVE">FULL COLLECTIVE</option>
                                        <option value="PUSH_BUTTON">PUSH BUTTON</option>>

                                        <option value="<?php echo $service_type; ?>" selected="selected" hidden="hidden">
                                            <?php
                                            //echo "set : ".$service_type;
                                                echo "select mode";
                                            ?>
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3" >
                                <label id="kave" class="col-sm-2 col-form-label">SAVE</label>
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
                                        COLLICTIVE DW
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">اولویت بر اساس انتخاب طبقه از بالا به پایین</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        FULL COLLECTIVE
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">بدون اولویت سرویس دهی به نزدیک ترین طبقه</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        PUSH BUTTON
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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