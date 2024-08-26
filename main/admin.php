
<?php

/*  setcookie("serial", $serial, time() + (86400 * 30), "/");
  setcookie("password", $password, time() + (86400 * 30), "/");

  header("location: ../index.php");
  die();*/

    if (isset($_COOKIE["serial"]))$serial= $_COOKIE["serial"];
    if (isset($_COOKIE["password"]))$password = $_COOKIE["password"];

    if( $serial == 100 && $password == 1234 ){ echo "user"; }
    else{
        header("location: ../login/login.php");
        die();
    }

    if ( !empty($_GET["service_type"] )){

        $service_type = $_GET['service_type'];
        $type = "advance_settin";
        $name = "general_service_type";

        include "../read.php";

        echo $service_type;

        $serial=100;

        $data_found=0;

        $quary = "SELECT `id`, `serial`, `type`, `name`, `data` FROM `data` WHERE `serial` = '$serial'";
        $resault=mysqli_query($con,$quary);
        while( $page = mysqli_fetch_assoc($resault) ) {

            if ($page['type'] == $type && $page['name'] == $name ) {

                $id = $page['id'];

                $quary = "UPDATE `data` SET `serial`='$serial',`type`='$type',`name`='$name',`data`='$service_type' WHERE `id` = '$id'";
                $resault=mysqli_query($con,$quary);

                echo "data_found".$id;

                $data_found=1;
                break;

            }
            else echo '.';
        }

        if( $data_found == 0 ){

            $quary = "INSERT INTO `data`(`id`, `serial`, `type`, `name`, `data`) VALUES ('','$serial','advance_settin','general_service_type','$service_type')";
            $resault=mysqli_query($con,$quary);

            echo "new_data";

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
    <link rel="stylesheet" href="tree_css.css">

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


    </SCRIPT>


</head>

<body>

        <div class=""   >
            <?php
            include "navbar.php";
            ?>
        </div>

        <div class="row" style="font-family:Arial; "  >

            <div class="col-sm-3 "  >
                <?php
                include "tree.php";
                ?>
            </div>

            <div class="col-sm-1 "  >

            </div>

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

                <p>service type</p>
                <div class="row " >

                    <blockquote class="blockquote">
                        <p>نحوه سرویس دهی به طبقات</p>
                    </blockquote>

                </div>

                <div class="row" >
                    <form  action="" >
                        <select  onchange="myFunction()" id="service_type" name="service_type" class="form-select" aria-label="Default select example">
                            <option value="COLLICTIVE_DW">COLLICTIVE DW</option>
                            <option value="FULL_COLLECTIVE">FULL COLLECTIVE</option>
                            <option value="PUSH_BUTTON">PUSH BUTTON</option>>

                            <option value="" selected="selected" hidden="hidden">
                                <?php
                                    echo "set :".$service_type;
                                ?>
                            </option>

                        </select>
                        <input type="submit" value="Submit the form"/>
                    </form>

                </div>



            </div>

            <div class="col-sm-1 "  >

            </div>

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
                    <img src="../login/PIC/login_backgrond.jpg" class="card-img-top" alt="...">
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

