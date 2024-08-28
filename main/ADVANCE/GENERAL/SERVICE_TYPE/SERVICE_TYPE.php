
<?php

    if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
    else $serial=0;
    if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];
    else $password =0;

    if( $serial == 100 && $password == 1234 ){ echo "user"; }
    else{
        header("location: ../../../../login/login.php");
        die();
    }

    include "../../../../read.php";

    $data_found=0;

    $type = "advance_settin";
    $name = "general_service_type";

    $quary = "SELECT `id`, `serial`, `type`, `name`, `data`, `change` FROM `data` WHERE `serial` = '$serial'";
    $resault=mysqli_query($con,$quary);
    while( $page = mysqli_fetch_assoc($resault) ) {

        if ($page['type'] == $type && $page['name'] == $name ) {

            $change = $page['change'];
            $id = $page['id'];
            $service_type = $page['data'];
            echo "data_found".$id;

            $data_found=1;
            break;

        }
        else echo '.';
    }

   // if ( !empty($_GET["service_type"] )){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if( $_POST['service_type'] != $service_type ){

            $service_type = $_POST['service_type'];

            $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$service_type',`change`='1' WHERE `id` = '$id'";
            $resault=mysqli_query($con,$quary);
            $change = 1;

            echo $service_type;

            if( $data_found == 0 ){

                $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`,`change`) VALUES ('','$serial','advance_settin','general_service_type','$service_type','1')";
                $resault=mysqli_query($con,$quary);
                $change = 1;
                echo "new_data";

            }

        }


    }
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../../../tree_css.css">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <SCRIPT>
        function myFunction(){

            const toastLiveExample = document.getElementById('liveToast')

            var x = document.getElementById("select").value;


            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()

            if( x == 1 ){
                document.getElementById("my_alert").innerHTML = "اولویت بر اساس انتخاب طبقه از بالا به پایین";
            }
            else if(x==2){
                document.getElementById("my_alert").innerHTML = "بدون اولویت سرویس دهی به نزدیک ترین طبقه";
            }
            else if( x== 3 ){
                document.getElementById("my_alert").innerHTML = "دستی";
            }
        }

        // Refresh the page after a delay of 3 seconds
        setTimeout(function(){
            location.reload();
        }, 60000); // 3000 milliseconds = 3 seconds

    </SCRIPT>


</head>

<body style="background-color: #F0F0F0;">



<div class="row" style="font-family:Arial; "  >

    <?php
    include "../../../navbar.php";
    ?>

    <!-- left -->
    <div class="col-sm-3 "  >
        <?php
        include "../../../tree.php";
        ?>
    </div>

    <div class="col-sm-1 "  >

    </div>

    <!-- center -->
    <div class="col-sm-4  "  >

        <div class="col-sm-1 " style="height: 5%"  >

        </div>

        <div  id="liveToast" class="toast" style="  width: 100%  ">

            <div class="toast-header">
                <strong class="me-auto">---</strong>
                <div id="my_alert" style="font-size: large; font-family:Arial; ">
                    ---
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                توضیخات
            </div>
        </div>

        <?php

            if( $change == 1 ){

                echo"<div class=\"spinner-grow text-primary\"   role=\"status\">";
                    echo"<label style=\"color: black\"> update</label>";
                    echo "<span class=\"visually-hidden\">Loading...</span>";
                echo"</div> ";

            }


        ?>


        <!-- setting -->
        <p>service type</p>
        <div class="row " >

            <blockquote class="blockquote">
                <p>نحوه سرویس دهی به طبقات</p>
            </blockquote>

        </div>

        <div class="row" >
            <form  action="" method="post" >
                <select  onchange="myFunction()" id="service_type" name="service_type" class="form-select" aria-label="Default select example">
                    <option value="COLLICTIVE_DW">COLLICTIVE DW</option>
                    <option value="FULL_COLLECTIVE">FULL COLLECTIVE</option>
                    <option value="PUSH_BUTTON">PUSH BUTTON</option>>

                    <option value="<?php echo $service_type; ?>" selected="selected" hidden="hidden">
                        <?php
                            echo "set : ".$service_type;
                        ?>
                    </option>

                </select>
                <input type="submit" value="Save"/>
            </form>

        </div>



    </div>

    <div class="col-sm-1 "  >

    </div>

    <!-- right -->
    <div class="col-sm-3 " style=" background-color: #504e51" >

        <div class="row" style="height: 2%" >
        </div>



        <div class="accordion accordion-flush" id="accordionFlushExample">

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        COLLICTIVE DW
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">اولویت بر اساس انتخاب طبقه از بالا به پایین</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        FULL COLLECTIVE
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">بدون اولویت سرویس دهی به نزدیک ترین طبقه</div>
                </div>
            </div>

        </div>

        <div class="row" style="height: 10%">

        </div>

        <div class="card" style="width: 18rem;">
            <img src="../../../../login/PIC/login_backgrond.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    </div>

</div>


</body>


</html>

