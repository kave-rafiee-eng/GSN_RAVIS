
<?php

$version = '8.0.9'; // فقط این نسخه را تغییر دهید
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

    <!--[if lt IE 9]>
    <script type="text/javascript" src="excanvas.js"></script>
    <![endif]-->

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@1.2.1/dist/chartjs-plugin-zoom.min.js"></script>
    <style>
        #charts-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        canvas {

            height: 300px !important;
            max-width: 100%;
            border: 1px solid #ddd;
            background: #fafafa;
        }
        button {
            margin: 10px;
        }
    </style>

</head>

<body onload="myFunction()" >


    <div class="pagetitle">

        <h1>branch</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">Monitoring</li>
                <li class="breadcrumb-item active">USB</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->

    <section class="section">

        <div class="row">

            <div class="col-3">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Connection</h5>
                        <button id="connect">connect</button>
                        <button id="disconnect">disconnect</button>
                    </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Error</h5>
                        <pre id="Error" style="
                            max-height: 100px;
                            overflow-y: auto;
                            overflow-x: auto;
                            background-color: #f8f9fa;
                            padding: 10px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        "></pre>
                    </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">MassageRx</h5>
                        <pre id="MassageRx" style="
                            max-height: 100px;
                            overflow-y: auto;
                            overflow-x: auto;
                            background-color: #f8f9fa;
                            padding: 10px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        "></pre>

                    </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">MassageTx</h5>
                        <pre id="MassageTx" style="
                            max-height: 100px;
                            overflow-y: auto;
                            overflow-x: auto;
                            background-color: #f8f9fa;
                            padding: 10px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        "></pre>
                    </div>
                </div>
            </div>


        </div>

        <div class="row">

            <div class="col-5">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Display</h5>

                        <ul class="list-group">

                            <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>dir</li>
                            <li class="list-group-item">
                            </li>

                            <table class="table table-bordered mt-3">
                                <thead class="table-light">
                                <tr>
                                    <th>From</th>
                                    <th>Floor</th>
                                    <th>Door1</th>
                                    <th>Door2</th>
                                    <th>Door3</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>
                                            <select class="form-select" id="from">
                                                <option value=0 >Main</option>
                                                <option value=1 >Cabin</option>
                                                <option value=2 >Main</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input id="floor" type="number" class="form-control" value=2 >
                                        </td>
                                        <td>
                                            <select class="form-select" id="door1">
                                                <option value=0 >---</option>
                                                <option value=1 >En</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-select" id="door2">
                                                <option value=0 >---</option>
                                                <option value=1 >En</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select class="form-select" id="door3">
                                                <option value=0 >---</option>
                                                <option value=1 >En</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                            <div class="d-flex gap-2">
                                                <button onclick="send_uni()" class="btn btn-primary btn-sm">uni</button>
                                                <button onclick="send_vip()"  class="btn btn-success btn-sm">vip</button>
                                                <button onclick="send_up()"  class="btn btn-danger btn-sm">up</button>
                                                <button onclick="send_down()"  class="btn btn-danger btn-sm">down</button>
                                            </div>

                                    </tr>

                                </tbody>
                            </table>

                            <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>dir</li>
                            <li class="list-group-item">
                            </li>

                            <table  class="table table-bordered"   >
                                <thead>
                                <tr>
                                    <th  style="background-color: #97BC62" scope="col">N</th>
                                    <th  style="background-color: #97BC62"scope="col">Ad</th>
                                    <th  style="background-color: #97BC62"scope="col">From</th>
                                    <th  style="background-color: #97BC62"scope="col">Floor</th>
                                    <th  style="background-color: #97BC62"scope="col">D1</th>
                                    <th  style="background-color: #97BC62"scope="col">D2</th>
                                    <th  style="background-color: #97BC62"scope="col">D3</th>
                                    <th  style="background-color: #97BC62"scope="col">Dir</th>
                                    <th  style="background-color: #97BC62"scope="col">Timer</th>
                                </tr>
                                </thead>
                                <tbody id="CallsTable" >

                                </tbody>
                            </table>

                        </ul>
                    </div>
                </div>

            </div>

            <div class="col-5">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Display</h5>

                        <ul class="list-group">

                            <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>dir</li>
                            <li class="list-group-item">

                                <button id="btnLeft">Left</button>
                                <button id="btnRight">btnRight</button>
                                <button id="btnClear">Clear</button>
                                <canvas id="chart1"></canvas>
                                <canvas id="chart2"></canvas>
                                <canvas id="chart3"></canvas>

                            </li>


                        </ul>
                    </div>
                </div>

            </div>

            <div class="col-2">
                <div class="card"  >
                    <div class="card-body ">
                        <h5 id="name1" class="card-title">Display</h5>
                        <input id="value1" type="number" class="form-control" value=0 disabled >

                        <h5 id="name2" class="card-title">Display</h5>
                        <input id="value2" type="number" class="form-control" value=0 disabled >

                        <h5 id="name3" class="card-title">Display</h5>
                        <input id="value3" type="number" class="form-control" value=0 disabled >

                    </div>
                </div>
            </div>

        </div>

    </section>


<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.2/mqttws31.min.js" type="text/javascript"></script>

<script  src="USB_Connection.js?v=<?php echo $version; ?>"></script>"></script>
<script  src="chart.js?v=<?php echo $version; ?>"></script>"></script>

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


<script>


</script>

</body>

</html>



