
<?php

if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
else $serial=0;
if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
else $password =0;

include "../../../../../read.php";

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

function read_data($con,$serial,$type,$name,$data_init)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $data = $page['data'];
            return $data;
        }
    }
    if( $data_found == 0 ){
        $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','$type','$name','$data_init','1')";
        mysqli_query($con,$quary);
        return $data_init;
    }
}

function update_data($con,$serial,$type,$name,$data)
{
    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    $data_found=0;
    while( $page = mysqli_fetch_assoc($resault) ) {
        if ($page['type'] == $type && $page['name'] == $name ) {
            $id = $page['id'];
            $last_data = $page['data'];
        }
    }
    if( $last_data != $data ) {
        $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$data',`change`='1' WHERE `id` = '$id'";
        mysqli_query($con,$quary);
    }
}

//-------------------------------------------------NUM OF DOOR
$add = "num_of_door";
$num_of_door= read_data($con,$serial,"advance_settin","general*door*second_door*$add",1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if( !empty($_POST[$add] )  ){
        $num_of_door = $_POST[$add];
        update_data($con,$serial,"advance_settin","general*door*second_door*$add",$num_of_door);
        $change = 1;
    }
}
//-------------------------------------------------NUM OF FLOOR
$num_floor= read_data($con,$serial,"advance_settin","general*number_of_stop",1);

for($i=1; $i<=$num_floor; $i++){

    if( $num_of_door > 0 )read_data($con,$serial,"advance_settin","general*door*door_select*d1f$i","y");
    if( $num_of_door > 1 )read_data($con,$serial,"advance_settin","general*door*door_select*d2f$i","n");
    if( $num_of_door > 2 )read_data($con,$serial,"advance_settin","general*door*door_select*d3f$i","n");
}
//-------------------------------------------------save

for( $i_d=1; $i_d<=$num_of_door; $i_d++ ){

    for($i_f=1; $i_f<=$num_floor; $i_f++){

        $add = "d$i_d"."f$i_f";
        echo $add;
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if( !empty($_POST[$add] )  ){
                $data = $_POST[$add];
                update_data($con,$serial,"advance_settin","general*door*door_select*$add",$data);
                $change = 1;
            }
            else{
                update_data($con,$serial,"advance_settin","general*door*door_select*$add","n");
                $change = 1;
            }
        }
    }

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

    <!-- =======================================================
    * Template Name: NiceAdmin
    * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
    * Updated: Apr 20 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== -->
    <SCRIPT>

        function myFunction(elem) {

            //var x = document.getElementById("open_delay").value;
            var x = elem.value;

            document.getElementById("alert_text").innerHTML = x.toString(10)+" Sec";
            var x = document.getElementById("alert");

            if (x.style.display === "none") {
                x.style.display = "block";
            }

        }

        // Refresh the page after a delay of 3 seconds
        /*setTimeout(function(){
            location.reload();
        }, 15000); // 3000 milliseconds = 3 seconds*/



    </SCRIPT>

</head>

<body  >




<?php
    include "../../../../../header.php";
?>

<?php
    include "../../../../../Sidebar.php";
?>

<main  id="main" class="main">

    <div class="pagetitle">
        <h1>Iot Parameter</h1>

        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/GSM_RAVIS/main/home.php">Home</a></li>
                <li class="breadcrumb-item">General</li>
                <li class="breadcrumb-item active">Door Times</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-7">

                <div class="card"  >
                    <div class="card-body ">
                        <h5 class="card-title">Num Of Door</h5>

                        <!-- General Form Elements -->
                        <form method="post" action="" >

                            <div class="row mb-5">
                                <label class="col-sm-4 col-form-label">Num of Door</label>
                                <div class="col-sm-3">
                                    <input oninput="myFunction(this)"  value="<?php echo $num_of_door;?>" name="num_of_door" type="number" class="form-control" id="num_of_door" min="0" max="3">
                                </div>
                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-primary">SAVE</button>
                                </div>

                            </div>
                        </form ><!-- End General Form Elements -->

                        <form method="post" action="" >

                            <table  class="table datatable text-center  ">
                                <thead>
                                <tr>
                                    <th>FLOOR</th>
                                    <th>D1</th>
                                    <th>D2</th>
                                    <th>D3</th>
                                </tr>
                                </thead>
                                <tbody>

                                <?php

                                for($i_floor=1;$i_floor<=$num_floor;$i_floor++ ){

                                    echo "<tr >";

                                    echo "<th class=\"table-active\" scope=\"row\">"."$i_floor"."</th>";

                                    if( $num_of_door > 0 ){
                                        echo "<td style='background-color: whitesmoke'>";
                                        echo "<div  class=\"form-check form-switch  d-flex justify-content-center \">";
                                        echo "<input value='y' name='d1f$i_floor' class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" ";
                                        if( read_data($con,$serial,"advance_settin","general*door*door_select*d1f$i_floor",1) == "y" ){
                                            echo "checked>";
                                        }
                                        else echo ">";
                                        echo "</div>";
                                        echo "</td>";
                                    }

                                    if( $num_of_door > 1 ){

                                        echo "<td style='background-color: antiquewhite'>";
                                        echo "<div  class=\"form-check form-switch  d-flex justify-content-center \">";
                                        echo "<input value='y' name='d2f$i_floor' class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" ";
                                        if( read_data($con,$serial,"advance_settin","general*door*door_select*d2f$i_floor",1) == "y" ){
                                            echo "checked>";
                                        }
                                        echo "</div>";
                                        echo "</td>";

                                    }

                                    if( $num_of_door > 2 ){

                                        echo "<td style='background-color: powderblue'>";
                                        echo "<div  class=\"form-check form-switch  d-flex justify-content-center \">";
                                        echo "<input value='y' name='d3f$i_floor' class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\" ";
                                        if( read_data($con,$serial,"advance_settin","general*door*door_select*d3f$i_floor",1) == "y" ){
                                            echo "checked>";
                                        }
                                        echo "</div>";
                                        echo "</td>";

                                    }


                                    echo "</tr>";

                                }
                                ?>

                                </tbody>
                            </table>

                            <div class="col-sm-4">
                                <button type="submit" class="btn btn-primary">SAVE</button>
                            </div>

                        </form ><!-- End General Form Elements -->


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
include "../../../../../Footer.php";
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