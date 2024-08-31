
<?php

include "../../read.php";

include "../../login/login_check.php"; //---------LOGIN_CHECK
include "../../function.php"; //my_function


$add = "close_delay";
//list($id,$data,$change) = read_data($con,$serial,"advance_settin","general*door_time*$add",0);

$id_show=0;
    if( !empty($_GET['show'] )  ){
        $id_show = $_GET['show'];
    }

if( !empty($_GET['delet'] )  ){
    $id_delet = $_GET['delet'];

    $quary = "UPDATE `data` SET `change`='unknown' WHERE `id` = '$id_delet'";
    $resault=mysqli_query($con,$quary);

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

    <SCRIPT>
         Refresh the page after a delay of 3 seconds
         setTimeout(function(){
             location.reload();
         }, 10000); // 3000 milliseconds = 3 seconds*/

    </SCRIPT>

</head>

<body  >

<?php
include "../../header.php";
?>

<?php
include "../../Sidebar.php";
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
                        <table class="table  ">
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

                        <?php

                            $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
                            $resault=mysqli_query($con,$quary);

                            $i_list = 0;

                            while( $page = mysqli_fetch_assoc($resault) ) {

                                if ($page['change'] == "upload" || $page['change'] == "download") {
                                    $i_list++;
                                }
                            }

                        ?>
                        <h5 class="card-title">Table Connection (<?php echo $i_list; ?>)</h5>

                        <table class="table datatable align-center text-center">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th data-type="date" data-format="YYYY/DD/MM">type</th>
                                    <th data-type="time" >Progress</th>
                                </tr>
                            </thead>
                            <tbody>



                            <?php

                            $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
                            $resault=mysqli_query($con,$quary);

                            while( $page = mysqli_fetch_assoc($resault) ) {

                                if( $page['change'] == "upload" || $page['change'] == "download"  ){

                                    echo "<tr >";

                                    $id = $page['id'];
                                    echo "<td class='' style=' background-color: whitesmoke'>";

                                    echo "<form method='get' action='' >";

                                    echo "<button name='show' type='submit' value='$id' class='btn btn btn-outline-primary p-sm-1 m-sm-2'>$id</button>";
                                    echo "<button name='delet'  type='submit' value='$id' class='btn btn btn-outline-danger p-sm-1 m-sm-2'>$id</button>";

                                    echo "</form>";

                                    echo "</td>";

                                    if( $page['change'] == "upload" ){$progress=30; echo "<td style='background-color: #c5e16b'>" .$page['change']."</td>"; }
                                    if( $page['change'] == "download" ){ $progress=60; echo "<td style='background-color: #e1a06b'>" .$page['change']."</td>"; }

                                    echo "<td  style='background-color: whitesmoke; '>";
                                    echo"<div class='progress'>";
                                    echo "<div class='progress-bar' role='progressbar' style='width: $progress%; '  aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'>$progress%</div>'";
                                    echo "</div>";
                                    echo "</td>";

                                    echo "</tr style='background-color: rosybrown' > ";
                                }

                            }
                            ?>

                            </tbody>
                        </table>
                        <!-- END Table Connection -->


                        <!-- last connect -->
                        <table class="table  ">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th data-type="date" data-format="YYYY/DD/MM">Type</th>
                                <th data-type="time" >Name</th>
                                <th data-type="time" >Data</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tbody>
                            <?php

                                if( $id_show > 0 ){
                                    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `id` = '$id_show'";
                                    $resault=mysqli_query($con,$quary);

                                    if( $page = mysqli_fetch_assoc($resault) ) {
                                        $type = $page['type'];
                                        $name = $page['name'];
                                        $data = $page['data'];

                                        echo "<tr class=\"table-light\" >";
                                        echo "<td>".$id_show."</td>";
                                        echo "<td>".$type."</td>";
                                        echo "<td>".$name."</td>";
                                        echo "<td>".$data."</td>";
                                        echo "</tr> ";
                                    }
                                }

                            ?>

                            </tbody>
                        </table>

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




        </div>
    </section>

</main><!-- End #main -->

<?php
$ad = "/";
?>

<?php
include "../../Footer.php";
?>

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




</body>

</html>