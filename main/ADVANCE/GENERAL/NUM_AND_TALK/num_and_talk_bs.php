
<?php

include "../../../../read.php"; // $con

include "../../../../login/login_check.php"; //LOGIN_CHECK

include "../../../../function.php"; //my_function

include "../../../../main/GSM/change_status.php"; //change_status_function

$change="unknown";


//-------------------------------------------------NUMBER OF STOP STNG    2
list($id,$number_of_stop,$change) = post_register_manager($con,"number_of_stop",$serial,"advance_settin","general*",0,2);

//------------------------------------------------- SL - FLOOR 5
for($i=1; $i<=$number_of_stop; $i++){
    list($id,$data,$change) = post_register_manager($con,"sl-f$i",$serial,"advance_settin","general*num_and_talk*",1,$i*100+5);
}
//------------------------------------------------- SL - FLOOR 6
for($i=1; $i<=$number_of_stop; $i++){
    list($id,$data,$change) = post_register_manager($con,"sr-f$i",$serial,"advance_settin","general*num_and_talk*",1,$i*100+6);
}
//------------------------------------------------- SR - FLOOR 7
for($i=1; $i<=$number_of_stop; $i++){
    list($id,$data,$change) = post_register_manager($con,"talk-f$i",$serial,"advance_settin","general*num_and_talk*",1,$i*100+7);
}

//-------------------------------------------------CLEAR $POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("location: /GSM_RAVIS/main/ADVANCE/GENERAL/NUM_AND_TALK/num_and_talk_bs.php");
}


$List_SegmentChoices = array(
    /// Right Segment
        '?',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'G',
		'P',
		'B',
		'r',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'-'
);

$List_TalkChoices = array(
    "???",
	"L1 ","L2 ","L3 ","L4 ","L5 ","L6 ","L7 ","L8 ","L9 ","L10",
	"L11","L12","L13","L14","L15","L16","L17","L18","L19","L20",
	"L21","L22","L23","L24",
	"Grn",
	"Labi",
	"Roof",
	"Pool",
	"Par ",
	"Par1",
	"Par2",
	"B  ",
	"B1 ",
	"B2 ",
	"L25","L26","L27","L28","L29","L30",
	"L31","L32","L33","L34","L35","L36","L37","L38","L39","L40",
	"L41","L42","L43","L44","L45","L46","L47","L48","L49","L50",
	"Tr1",
	"Tr2",
	"Tr3",
	"Tr4",
	"Tr5",
	"Tr6",
	"Tr7",
	"Tr8",
	"Tr9",
	"Tr10",
	"Tr11",
	"Tr12",
	"Tr13",
	"Tr14",
	"Tr15",
	"Tr16",
	"Tr17",
	"Tr18",
	"Tr19",
	"Tr20",
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

            xhttp.open("GET", "num_and_talk_ajax.php?"+str, true);
            xhttp.send();

            let text = '{"progress":"10","command":"refressh"}';

        }
        setInterval(refresh, 500);

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
        <h1>Form Elements</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item active">num and talk</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Num And Talk</h5>

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


                                    <li class="list-group-item"><!--  Open Delay !-->
                                        <div class="row ">
                                            <label class="col-sm-4 col-form-label">Num And Talk</label>
                                            <table  class="table datatable text-center  ">
                                                <thead>
                                                <tr>
                                                    <th>FLOOR</th>
                                                    <th>SL</th>
                                                    <th>SR</th>
                                                    <th>TALK</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <?php

                                                for($i_floor=1;$i_floor<=$number_of_stop;$i_floor++ ){

                                                    echo "<tr >";

                                                    echo "<th class=\"table-active\" scope=\"row\">"."$i_floor"."</th>";


                                                        echo "<td style='background-color: whitesmoke'>";
                                                        echo "<select  id=\"select\" name='sl-f$i_floor' class=\"form-select\" >";
                                                        list($id,$data,$ch) = only_read_data($con,$serial,"advance_settin","general*num_and_talk*sl-f$i_floor");
                                                        echo "<option selected='selected' value=\"$data\">$List_SegmentChoices[$data]</option>";
                                                        for($i=0; $i<sizeof($List_SegmentChoices); $i++ ){
                                                            if($List_SegmentChoices[$i] != $List_SegmentChoices[$data] )echo "<option value=\"$i\">$List_SegmentChoices[$i]</option>";
                                                        }
                                                        echo "</select>" ;
                                                        echo "</td>";

                                                        echo "<td style='background-color: antiquewhite'>";
                                                        echo "<select  id=\"select\" name='sr-f$i_floor' class=\"form-select\" >";
                                                        list($id,$data,$ch) = only_read_data($con,$serial,"advance_settin","general*num_and_talk*sr-f$i_floor");
                                                        echo "<option selected='selected' value=\"$data\">$List_SegmentChoices[$data]</option>";
                                                        for($i=0; $i<sizeof($List_SegmentChoices); $i++ ){
                                                            if($List_SegmentChoices[$i] != $List_SegmentChoices[$data] )echo "<option value=\"$i\">$List_SegmentChoices[$i]</option>";
                                                        }
                                                        echo "</select>" ;
                                                        echo "</td>";

                                                        echo "<td style='background-color: powderblue'>";
                                                        echo "<select  id=\"select\" name='talk-f$i_floor' class=\"form-select\" >";
                                                        list($id,$data,$ch) = only_read_data($con,$serial,"advance_settin","general*num_and_talk*talk-f$i_floor");
                                                        echo "<option selected='selected' value=\"$data\">$List_TalkChoices[$data]</option>";
                                                        for($i=0; $i<sizeof($List_TalkChoices); $i++ ){
                                                            if($List_TalkChoices[$i] != $List_TalkChoices[$data] )echo "<option value=\"$i\">$List_TalkChoices[$i]</option>";
                                                        }
                                                        echo "</select>" ;
                                                        echo "</td>";
                                                    /*

                                                    if( $number_of_door > 2 ){
                                                        echo "<td style='background-color: powderblue'>";
                                                        echo "<select  id=\"select\" name='door_select*d3f$i_floor' class=\"form-select\" >";
                                                        list($id,$data,$ch) = only_read_data($con,$serial,"advance_settin","general*door*door_select*d3f$i_floor");
                                                        if( $data == 0 )echo "<option selected='selected' value=\"$data\">N</option>";
                                                        if( $data == 1 )echo "<option selected='selected' value=\"$data\">Y</option>";
                                                        if( $data == 2 )echo "<option selected='selected' value=\"$data\">S</option>";
                                                        if( $data != 0 )echo "<option value=\"0\">N</option>";
                                                        if( $data != 1 )echo "<option value=\"1\">Y</option>";
                                                        if( $data != 2 )echo "<option value=\"2\">S</option>";
                                                        echo "</select>" ;
                                                        echo "</td>";
                                                    }
                                                    */

                                                    echo "</tr>";
                                                }
                                                ?>

                                                </tbody>
                                            </table>
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
                                <h2 class="accordion-header" id="flush-h1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c1" aria-expanded="false" aria-controls="flush-c1">
                                        SL
                                    </button>
                                </h2>
                                <div id="flush-c1" class="accordion-collapse collapse" aria-labelledby="flush-h1" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">نمایشگر خروجی سمت چب"</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-h2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c2" aria-expanded="false" aria-controls="flush-c2">
                                        SR
                                    </button>
                                </h2>
                                <div id="flush-c2" class="accordion-collapse collapse" aria-labelledby="flush-h2" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">نمایشگر خروجی سمت راست"</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-h3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c3" aria-expanded="false" aria-controls="flush-c3">
                                        TALK
                                    </button>
                                </h2>
                                <div id="flush-c3" class="accordion-collapse collapse" aria-labelledby="flush-h3" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">نمایشگر خروجی سمت راست"</div>
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