
<?php

include "../../../read.php"; // $con

include "../../../login/login_check.php"; //LOGIN_CHECK

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

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

    <script nomodule src="https://unpkg.com/browser-es-module-loader/dist/babel-browser-build.js"></script>
    <script nomodule src="https://unpkg.com/browser-es-module-loader"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>



</head>

<body id="main"  >


<?php
include "../../../header.php";
?>

<?php
include "../../../Sidebar.php";
?>

<main  id="main" class="main">


    <div class="pagetitle">

        <h1>branch</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Monitoring</a></li>
                <li class="breadcrumb-item active">numerical</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->
    <div id="deb">
        deb
    </div>
    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">CHart</h5>

                        <table  class="table table-bordered"   >
                            <thead>
                            <tr>
                                <th scope="col">-</th>
                                <th scope="col">name</th>
                                <th scope="col">string</th>
                                <th scope="col">number</th>
                                <th scope="col">status</th>
                            </tr>
                            </thead>
                            <tbody id="table_esp" >

                            </tbody>
                        </table>

                        <div class="col-5">
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>



                    <ul class="list-group">
                        <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>Connection Status</li>
                        <li class="list-group-item">
                            <div id="div_connection_status">
                                div_connection_status
                            </div>
                            <button type="button" value="0" onclick="send()">send</button>
                        </li>
                    </ul>

                    <ul class="list-group">
                        <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>on Message Arrived</li>
                        <li class="list-group-item">
                            <div id="div_message_arrived">
                                div_message_arrived
                            </div>
                        </li>
                    </ul>

                    <ul class="list-group">
                        <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>Message Publish</li>
                        <li class="list-group-item">
                            <div id="div_message_publish">
                                div_message_publish
                            </div>
                        </li>
                    </ul>



            </div>

            <div class="col-lg-5">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Adding to List</h5>

                        <div class="row mb-3 m-2" >
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>type</li>
                                <li class="list-group-item">
                                    <select  onchange="shiw_list_name()" onload="" id="select_type"  class="form-select" aria-label="Default select example">
                                    </select>
                                </li>

                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>name</li>
                                <li class="list-group-item">
                                    <select   id="select_name" name="service_type" class="form-select" aria-label="Default select example">
                                        <option value="" selected="selected" hidden="hidden">
                                        </option>
                                    </select>
                                </li

                                <li class="list-group-item">
                                    <button id="btn_save" onclick="add_to_table_data()" type="submit" class="btn btn-primary">SAVE</button>
                                </li

                            </ul>
                        </div><!-- Read From device -->

                        <table  class="table table-bordered"   >
                            <thead>
                            <tr>
                                <th scope="col">-</th>
                                <th scope="col">type</th>
                                <th scope="col">name</th>
                            </tr>
                            </thead>
                            <tbody id="table_mqtt" >
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    </section>

</main><!-- End #main -->


<?php
include "../../../Footer.php";
?>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


<!-- Vendor JS Files -->
<script  src="./table_esp.js?v1"></script>
<script  src="./mqtt_connection.js?v1"></script>
<script  src="./table_mqtt.js?v1"></script>
<script  src="./list.js?v1"></script>
<script  src="./select.js?v1"></script>
<script  src="./monitorng.js?v1"></script>

<script src="/GSM_RAVIS/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/quill/quill.js"></script>
<script src="/GSM_RAVIS/assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="/GSM_RAVIS/assets/vendor/tinymce/tinymce.min.js"></script>
<script src="/GSM_RAVIS/assets/vendor/php-email-form/validate.js"></script>

<!-- Template Main JS File -->
<script src="/GSM_RAVIS/assets/js/main.js"></script>

</body>

</html>