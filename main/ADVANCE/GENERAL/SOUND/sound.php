
<?php

include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK

include "../../../../function.php"; //my_function

include "../../../../main/GSM/change_status.php"; //change_status_function

$change="unknown";

//-------------------------------------------------MUSIC VOLUME	STNG    23
list($id,$music_volue,$change) = post_register_manager($con,"music_volue",$serial,"advance_settin","general*sound*",0,23,0.2);

//-------------------------------------------------TALK VOLUME	STNG    24
list($id,$talk_volue,$change) = post_register_manager($con,"talk_volue",$serial,"advance_settin","general*sound*",0,24,0.2);

//-------------------------------------------------WELCOME FLOOR	STNG    25
list($id,$welcome_floor,$change) = post_register_manager($con,"welcome_floor",$serial,"advance_settin","general*sound*",0,25);

//-------------------------------------------------GANG SELECT	STNG    26
list($id,$gang_select,$change) = post_register_manager($con,"gang_select",$serial,"advance_settin","general*sound*",0,26);


//-------------------------------------------------CLEAR $POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("location: /GSM_RAVIS/main/ADVANCE/GENERAL/SOUND/sound.php");
}


$List_gang_select = array(
    'OFF',
    '1',
    '2',
    '3',
);

$List_wlecomr_floor = array(
    '0',
    '1',
    '2',
    'OFF',
);
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
    <SCRIPT>

        var on_load=0;

        function refresh(){

            var change = document.getElementById("change_status_name");
            var progress_status = document.getElementById("progress-status");

            var show_uploading = document.getElementById("show-uploading");
            var show_download = document.getElementById("show-download");
            var show_update = document.getElementById("show-update");
            var show_unknown = document.getElementById("show-unknown");

            var xhttp;

            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                    //document.getElementById("txtHint").innerHTML = this.responseText +"@"+on_load ;

                    const obj = JSON.parse(this.responseText)  ;

                    if( on_load == 0 ){ on_load++;
                        change.innerHTML = obj.change;
                    }
                    else{
                        progress_status.style.width = obj.progress+"%";
                        progress_status.innerHTML = obj.progress;

                        if( obj.command.search("refresh") >= 0){
                            location.reload();
                        }
                        if( obj.command.search("normal") >= 0){
                            change.innerHTML = obj.change;
                        }
                    }
                }
            };

            var str = "status=update";

            if( change.textContent.search("download") >= 0 ){
                var str = "status=download";
                show_download.style.display="block";
            }
            else show_download.style.display="none";

            if( change.textContent.search("upload") >= 0 ){
                var str = "status=upload";
                show_uploading.style.display="block";
            }
            else show_uploading.style.display="none";

            if( change.textContent.search("update") >= 0 ){
                var str = "status=update";
                show_update.style.display="block";
            }
            else show_update.style.display="none";

            if( change.textContent.search("unknown") >= 0 ){
                var str = "status=unknown";
                show_unknown.style.display="block";
            }
            else show_unknown.style.display="none";

            xhttp.open("GET", "sound_ajax.php?"+str, true);
            xhttp.send();

            let text = '{"progress":"10","command":"refressh"}';

        }
        setInterval(refresh, 500);

        setTimeout(function(){
            location.reload();
        }, 60000);

    </SCRIPT>
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
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item active">Sound</li>
            </ol>

        </nav>

    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Sound</h5>

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

                            <div class="row mb-3 m-2" >
                                <ul class="list-group">

                                    <li class="list-group-item"><i class="bi bi-activity me-1 text-primary"></i>Write To device</li>

                                    <li class="list-group-item"><!--  Music Volume !-->
                                        <div class="row ">
                                            <label class="col-sm-4 col-form-label">Music Volume</label>
                                            <div class="col-sm-6">
                                                <input  step="5" value="<?php echo $music_volue;?>" name="music_volue" type="number" class="form-control"  min="0" max="100">
                                            </div>
                                            <label class="col-sm-2 col-form-label text-danger ">%</label>
                                        </div>
                                    </li>

                                    <li class="list-group-item"> <!--  Talk Volume !-->
                                        <div class="row ">
                                            <label class="col-sm-4 col-form-label">Talk Volume </label>
                                            <div class="col-sm-6">
                                                <input  step="5" value="<?php echo $talk_volue;?>" name="talk_volue" type="number" class="form-control"  min="0" max="100">
                                            </div>
                                            <label class="col-sm-2 col-form-label text-danger ">%</label>
                                        </div>
                                    </li>

                                    <li class="list-group-item"> <!--  Welcome Floor !-->
                                        <div class="row ">
                                            <label class="col-sm-4 col-form-label">Welcome Floor</label>
                                            <div class="col-sm-6 ">
                                                <select  id="select" name='welcome_floor' class="form-select ">
                                                    <?php
                                                    echo "<option selected='selected' value='$welcome_floor'>$List_gang_select[$welcome_floor]</option>";
                                                    for($i=0; $i<sizeof($List_gang_select); $i++ ) {
                                                        if ($List_gang_select[$i] != $List_gang_select[$welcome_floor]) echo "<option value=\"$i\">$List_gang_select[$i]</option>";
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="list-group-item"> <!--  Gang Select !-->
                                        <div class="row ">
                                            <label class="col-sm-4 col-form-label">Gang Select</label>
                                            <div class="col-sm-6 ">
                                                <select  id="select" name='gang_select' class="form-select ">
                                                    <?php
                                                    //list($id,$data,$ch) = only_read_data($con,$serial,"advance_settin","general*sound*gang_select");
                                                    echo "<option selected='selected' value='$gang_select'>$List_gang_select[$gang_select]</option>";
                                                    for($i=0; $i<sizeof($List_gang_select); $i++ ) {
                                                        if ($List_gang_select[$i] != $List_gang_select[$gang_select]) echo "<option value=\"$i\">$List_gang_select[$i]</option>";
                                                    }
                                                    ?>
                                                </select>
                                            </div>

                                        </div>


                                    </li>

                                </ul>

                            </div><!-- Read From device -->

                            <div class="row mb-3" >
                                <label id="kave" class="col-sm-6 col-form-label ">SAVE Register</label>
                                <div class="col-sm-6">
                                    <button <?php if($change == "download" || $change == "upload"  )//echo "disabled";
                                    if( $user == "admin" ){}
                                    else{ if($user_active_time <= 0 )echo "disabled"; }
                                    ?>  type="submit" class="btn btn-primary">SAVE</button>
                                </div>
                                <label  style="color: red" class="col-sm-6 col-form-label">
                                    <?php if($change == "download")echo "wait to download complit"?>
                                </label>
                            </div>



                        </form><!-- End General Form Elements -->


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
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Status</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">reserve</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">reserve</button>
                            </li>
                        </ul>
                        <div class="tab-content pt-2" id="myTabContent">

                            <div  id="change_status_name">

                            </div>
                            <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="home-tab">
                                <?php
                                show_change_status_progress(0,0);
                                ?>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            </div>

                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            </div>

                        </div><!-- status -->
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