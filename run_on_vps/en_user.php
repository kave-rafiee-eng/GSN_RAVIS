
<?php

//http://localhost:82/GSM_RAVIS/run_on_vps/en_user.php?

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>RUN ON VPS</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>


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
    ======================================================== -->
    <SCRIPT>

        var on_load=0;

        //document.getElementById("messages").innerHTML = "test";
        location.reload();
        }
        setInterval(refresh_page, 60000);

        function refresh(){
            //document.getElementById("messages").innerHTML = "test";
        }
        setInterval(refresh, 500);

    </SCRIPT>
</head>

<body onload="startConnect()" >


<main   id="main" class="main">

    <div style="display: none;" d="txtHint">MQTT Test</div>

    <div class="pagetitle">

        <h1>MQTT</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">VPS</a></li>
                <li class="breadcrumb-item">MQTT</li>
                <li class="breadcrumb-item active">MQTT to SQL GSM</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->


    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">view</h5>

                        <div class="row mb-3 m-2" >
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>Connection Status</li>
                                <li class="list-group-item">
                                    <div id="div_connection_status">
                                        div_connection_status
                                    </div>
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
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>div message publish</li>
                                <li class="list-group-item">
                                    <div id="div_message_publish">
                                        div_message_publish
                                    </div>
                                </li>
                            </ul>

                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>ajax responce</li>
                                <li class="list-group-item">
                                    <div id="div_ajax_responce">
                                        div_ajax_responce
                                    </div>
                                </li>
                            </ul>
                        </div><!-- Read From device -->

                    </div>
                </div>

            </div>

        </div>
    </section>

</main><!-- End #main -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


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

<script src="en_user.js" type="text/javascript"></script>

</body>

</html>