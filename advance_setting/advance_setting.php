
<?php

include "../read.php"; // $con

include "../login/login_check.php"; //LOGIN_CHECK

include "../function.php"; //my_function

$change="unknown";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Ravis</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


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


    <link rel="stylesheet" href="styles.css">

    <SCRIPT>

        setTimeout(function(){
            location.reload();
        }, 400000);

    </SCRIPT>
</head>

<body onload="" >

<?php
include "../header.php";
?>

<?php
include "../Sidebar.php";
?>

<main  id="main" class="main">

    <!-- Modal -->
    <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="modalTitle">در حال پردازش...</h5>
                </div>
                <div class="modal-body">
                    <p id="modalMessage">لطفاً صبر کنید، عملیات در حال انجام است.</p>

                    <!-- Progress Bar -->
                    <div class="progress" style="height: 25px;">
                        <div id="progressBar_Madal" class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                             role="progressbar" style="width: 0%;">0%</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="closeButton" disabled>بستن</button>
                </div>
            </div>
        </div>
    </div>

    <div class="pagetitle">

        <h1>branch</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">Advance</li>
                <li class="breadcrumb-item active">Advance</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Test</h5>

                        <div class="row mb-3 m-2" >
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-geo-alt me-1 text-primary"></i>

                                    <nav aria-label="breadcrumb">
                                        <ol id="addrress" class="breadcrumb bg-light p-3 rounded-3"></ol>
                                    </nav>

                                    <!-- دکمه HOME -->
                                    <button class="btn btn-outline-dark  btn-home me-4" onclick="button_TABLE_creat()">
                                        <i class="fas fa-home"></i> Home
                                    </button>

                                    <!-- دکمه بازگشت -->
                                    <button class="btn btn-outline-danger btn-back me-4" onclick="button_BACK()">
                                        <i class="fas fa-arrow-left"></i> Back
                                    </button>

                                </li>
                                <li class="list-group-item">

                                    <div id="tableContainer"></div>

                                </li>
                            </ul>
                        </div><!-- Read From device -->

                        <!-- General Form Elements -->
                        <!-- <form method="post" action="" > -->

                        <div class="row mb-3 m-2 d-flex justify-content-center " >
                            <ul class="list-group d-flex justify-content-center ">

                                <li class="list-group-item"><i class="bi bi-activity me-1 text-primary"></i><div class="bg-success-subtle text-center rounded " id="register_name"></div></li>

                                <li class="list-group-item"> <!--  Gang Select !-->
                                    <div class="row d-flex justify-content-center">

                                        <div class="col-sm-12 my-3 ">

                                            <div id="multySlectContainer"></div>

                                            <div id="selectContainer"></div>

                                            <div class="d-flex justify-content-center " id="inputContainer"></div>
                                        </div>

                                        <div class="col-sm-12 d-flex justify-content-center">
                                            <div id="btn_save_read"></div>
                                        </div>


                                    </div>


                                </li>



                            </ul>

                        </div><!-- Read From device -->

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
                                        Advance Setting
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">تنظیمات</div>
                                </div>
                            </div>

                        </div><!-- End Accordion without outline borders -->

                        <h5 class="card-title">Device</h5>

                        <!-- Default Tabs -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">Status</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">send&recive</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">debug</button>
                            </li>
                        </ul>
                        <div class="tab-content pt-2" id="myTabContent">

                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <?php
                                //if($page_mqtt_enable == 0 )show_change_status_progress(0,0);
                                ?>
                                <div  id="status_mqtt">
                                </div>

                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <canvas width="100%" id="myChart"></canvas>
                                <div  id="status_connection">

                                </div>
                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <ul class="list-group">
                                    <li class="list-group-item"><i class="bi bi-code me-1 text-primary"></i>Connection Status</li>
                                    <li class="list-group-item">
                                        <div id="div_connection_status">
                                            div_connection_status
                                        </div>
                                        <button type="button" value="0" onclick="send()">send</button>
                                    </li>
                                </ul>

                                <ul class="list-group">
                                    <li class="list-group-item"><i class="bi bi-collection me-1 text-success"></i>on Message Arrived</li>
                                    <li class="list-group-item">
                                        <div id="div_message_arrived">
                                            div_message_arrived
                                        </div>
                                    </li>
                                </ul>

                                <ul class="list-group">
                                    <li class="list-group-item"><i class="bi bi-collection me-1 text-success"></i>Message Publish</li>
                                    <li class="list-group-item">
                                        <div id="div_message_publish">
                                            div_message_publish
                                        </div>
                                    </li>
                                </ul>

                                <div id="div_serial" style="display: none">
                                    <?php echo $serial;
                                    ?>
                                </div>

                                <div id="json_server" style="display: block">
                                    <?php
                                    $myObj = new stdClass();
                                    $myObj->serial = $serial ;
                                    $myJSON = json_encode($myObj);
                                    echo $myJSON;
                                    ?>
                                </div>

                                <ul class="list-group">
                                    <li class="list-group-item"><i class="bi bi-activity me-1 text-danger"></i>debug</li>
                                    <li class="list-group-item">
                                        <div id="deb">
                                            deb
                                        </div>
                                    </li>
                                </ul>

                                <ul class="list-group">
                                    <li class="list-group-item"><i class="bi bi-activity me-1 text-danger"></i>ajax</li>
                                    <li class="list-group-item">
                                        <div id="div_ajax_responce">
                                            div_ajax_responce
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div><!-- status -->

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

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>

<script src="advance_mqtt_fun.js"></script> <!-- اضافه کردن فایل JavaScript -->
<script src="list_data_advance.js"></script> <!-- اضافه کردن فایل JavaScript -->
<script src="advance_list_HW_main.js"></script> <!-- اضافه کردن فایل JavaScript -->
<script src="fun_create.js"></script> <!-- اضافه کردن فایل JavaScript -->
<script src="advance_setting.js"></script> <!-- اضافه کردن فایل JavaScript -->

<!-- Vendor JS Files -->
<script src="/GSM_RAVIS/assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/chart.js/chart.umd.js"></script>
<script src="/GSM_RAVIS/assets/vendor/echarts/echarts.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/quill/quill.js"></script>
<script src="/GSM_RAVIS/assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="/GSM_RAVIS/assets/vendor/tinymce/tinymce.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="/GSM_RAVIS/assets/js/main.js"></script>



</body>

</html>







