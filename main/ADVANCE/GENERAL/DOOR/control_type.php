
<?php

include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK

include "../../../../function.php"; //my_function

include "../../../../main/GSM/change_status.php"; //change_status_function

$change="unknown";

//-------------------------------------------------DOOR_CONTROL_TYPE4
list($id,$control_type,$change) = post_register_manager($con,"control_type",$serial,"advance_settin","general*door*",0,4);

//-------------------------------------------------AUTO REFRESH
list($id_r,$auto_refresh,$change_r) = read_data($con,$serial,"server","auto_refresh_page","1",0,0);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if( isset($_POST["auto_refresh"] )  ){
        if( isset($_POST["auto_refresh_radio"] )  ){
            update_data($con,$serial,"server","auto_refresh_page",1,0,0);
        }
        else update_data($con,$serial,"server","auto_refresh_page",0,0,0);
    }
}

//-------------------------------------------------CLEAR $POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("location: /GSM_RAVIS/main/ADVANCE/GENERAL/DOOR/control_type.php");
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

        function myFunction() {

            var x = document.getElementById("number_of_stop").value;
            document.getElementById("alert_text").innerHTML = x.toString(10)+" Sec";

            //document.getElementById("alert_text").innerHTML = document.getElementById("auto_refresh_value").value;

            var x = document.getElementById("alert");
            if (x.style.display === "none") {
                x.style.display = "block";
            }
        }

        function refresh_radio(){
            let form = document.getElementById("form_refresh");
            setTimeout(setAlert, 500);
        }
        function setAlert() {
            let form = document.getElementById("form_refresh");
            form.submit();
        }

        function refresh(){

            let change = document.getElementById("change_status").textContent;

            if( change.search("download") > 0 || change.search("upload") > 0  ){
                var time = 40000;
                if( document.getElementById("auto_refresh_value").value == "a1")time=3000;
                setTimeout(function(){
                    location.reload();
                }, time); // 3000 milliseconds = 3 seconds
            }

        }
        setInterval(refresh, 500);

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

    <div class="row d-flex  ">
        <h5> <span class="badge bg-dark">
            <form onchange="refresh_radio()" action="" method="post" id="form_refresh">
                 <div   class="form-check form-switch  ">
                     <label class=" col-form-label ">Auto Refresh Page</label>
                     <input   value="1" name="auto_refresh_radio" class="form-check-input" type="checkbox" id=""
                     <?php  if($auto_refresh == "1" )echo "checked";?>
                     >
                 </div>

                <input  style="display:none" value="<?php echo 'a'.$auto_refresh; ?>" name="auto_refresh" class="form-check-input" type="text" id="auto_refresh_value">
            </form>

        </span></h5
    </div><!-- refresh_radio -->

    <div class="pagetitle">
        <h1>branch</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item">Door</li>
                <li class="breadcrumb-item active">Control Type</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">

                        <h5 class="card-title">Control Type</h5>

                        <div class="row mb-3 m-2" >
                            <ul class="list-group">
                                <li class="list-group-item"><i class="bi bi-collection me-1 text-primary"></i>Read From device</li>
                                <li class="list-group-item">
                                    <form method="post" action="">
                                        <button value="read_register" name="read_register" type="submit" class="btn btn-warning">Read Register</button>
                                    </form>
                                </li>
                            </ul>
                        </div><!-- Read From device -->


                        <!-- General Form Elements -->
                        <form method="post" action="" >

                            <fieldset class="row mb-3">
                                <legend class="col-form-label col-sm-2 pt-0">value</legend>
                                <div class="col-sm-10">

                                    <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                            if( $control_type == 0)echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            Loaded
                                        </label>
                                    </div>


                                    <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                            if( $control_type == 1)echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            68
                                        </label>
                                    </div>


                                    <div class="form-check disabled">
                                        <input  class="form-check-input" type="radio" name="gridRadios" id="gridRadios" value=" 1 " disabled
                                            <?php
                                            if( $control_type == 2)echo "checked";
                                            ?>
                                        >
                                        <label class="form-check-label" for="gridRadios3">
                                            69
                                        </label>
                                    </div>


                                </div>
                            </fieldset>


                            <div class="row mb-3">
                                <label class="col-sm-2 col-form-label">Select</label>
                                <div class="col-sm-10">
                                    <select  onclick="myFunction()" id="control_type" name="control_type" class="form-select" aria-label="Default select example">
                                        <option value="0">Loaded</option>
                                        <option value="1">68</option>
                                        <option value="2">69</option>>

                                        <option value="<?php echo $control_type; ?>" selected="selected" hidden="hidden">
                                            <?php
                                            //echo "set : ".$service_type;
                                            echo "select mode";
                                            ?>
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3" >
                                <label id="kave" class="col-sm-3 col-form-label">SAVE Register</label>
                                <div class="col-sm-3">
                                    <button <?php if($change == "download" || $change == "upload"  )echo "disabled";
                                    if( $user == "admin" ){}
                                    else{ if($user_active_time <= 0 )echo "disabled"; }
                                    ?>  type="submit" class="btn btn-primary">SAVE</button>
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
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">reserve</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">reserve</button>
                            </li>
                        </ul>
                        <div class="tab-content pt-2" id="myTabContent">

                            <div  id="change_status"  >
                                <?php
                                echo $change;
                                ?>
                            </div>
                            <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="home-tab">
                                <?php
                                show_change_status($change);
                                ?>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            </div>
                        </div><!-- Device -->

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