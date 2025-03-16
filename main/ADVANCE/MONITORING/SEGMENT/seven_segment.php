
<?php

include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK

include "../../../../function.php"; //my_function

//-------------------------------------------------NUMBER OF STOP STNG    2
list($id,$number_of_stop,$change) = post_register_manager($con,"number_of_stop",$serial,"advance_settin","general*",0,2);


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

    <!-- Template Main CSS File -->
    <link href="style1.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script type="text/javascript" src="excanvas.js"></script>
    <![endif]-->

    <script type="text/javascript" src="segment-display.js"></script>
    <script type="text/javascript">

        var display = new SegmentDisplay("display");
        //display.displayId       = displayId;
        display.backgroundColor = 'rgb(0,0,0)';
        display.pattern         = '##';
        display.value           = '12';
        display.digitHeight     = 20;
        display.digitWidth      = 10;
        display.digitDistance   = 2.5;
        display.displayAngle    = 12;
        display.segmentWidth    = 2.5;
        display.segmentDistance = 0.2;
        display.segmentCount    = SegmentDisplay.SevenSegment;
        display.cornerType      = SegmentDisplay.RoundedCorner;
        display.colorOn         = 'rgb(230,60,60)';
        display.colorOff        = 'rgb(239,239,237)';

        function animate() {
            window.setTimeout('animate()', 100);
        }

        setTimeout(function(){
            location.reload();
        }, 120000);


    </script>

</head>

<body onload="myFunction()" >


<?php
include "../../../../header.php";
?>

<?php
include "../../../../Sidebar.php";
?>

<main  id="main" class="main">

    <div class="pagetitle">

        <h1>branch</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">Monitoring</li>
                <li class="breadcrumb-item active">display</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">

            <div class="col-lg-7">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Display</h5>

                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>Segment</li>
                                <li class="list-group-item">

                                    <canvas id="myCanvas" style=" height: 40px; width: 80px; margin-left: 50%; margin-bottom: 10% ">
                                        Sorry, your browser does not support canvas.
                                    </canvas>

                                    <canvas id="display" width="260" height="140">
                                        Your browser is unfortunately not supported.
                                    </canvas>

                                </li>

                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>dir</li>
                                <li class="list-group-item">

                                    <div class="row" >
                                        <div class="col-lg-4 text-center"  >
                                            <label id="labe_door1">close</label>
                                            <div class="elevator-container" id="door1">
                                                <div class="door left-door"></div>
                                                <div class="door right-door"></div>
                                            </div>
                                        </div>

                                        <div  class="col-lg-4 text-center" >
                                            <label id="labe_door2">close</label>
                                            <div class="elevator-container" id="door2">
                                                <div class="door left-door"></div>
                                                <div class="door right-door"></div>
                                            </div>
                                        </div>

                                        <div  class="col-lg-4 text-center" >
                                            <label id="labe_door3">close</label>
                                            <div class="elevator-container" id="door3">
                                                <div class="door left-door"></div>
                                                <div class="door right-door"></div>
                                            </div>
                                        </div>

                                    </div>

                                </li>
                            </ul>


                    </div>


                </div>

            </div>




            <div class="col-lg-5">
                <div class="row">
                    <div class="card">
                        <div class="card-body">

                            <h5 class="card-title">HELP</h5>

                            <!-- Accordion without outline borders -->
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            segment
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">نمایشگر</div>
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

                                    <div  id="status_mqtt">
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <canvas width="100%" id="myChart_com"></canvas>
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
                                        <?php echo $serial;?>
                                    </div>

                                    <div id="json_server" style="display: block">
                                        <?php
                                        $myObj = new stdClass();
                                        $myObj->number_of_stop = $number_of_stop ;
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

        </div>
    </section>



</main><!-- End #main -->


<?php
include "../../../../Footer.php";
?>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>

<?php
$version = '3.0.5'; // فقط این نسخه را تغییر دهید
?>


<script  src="SEG_list_data.js?v=<?php echo $version; ?>"></script>"></script>
<script  src="SEG_mqtt_fun.js?v=<?php echo $version; ?>"></script>"></script>
<script  src="seven_segment.js?v=<?php echo $version; ?>"></script>"></script>

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