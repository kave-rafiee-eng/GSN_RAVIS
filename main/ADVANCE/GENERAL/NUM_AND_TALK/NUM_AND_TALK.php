
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

    <link rel="stylesheet" href="NUM_AND_TALK.css">

    <SCRIPT>
        function myFunction(){

            const toastLiveExample = document.getElementById('liveToast')

            /*var x = document.getElementById("select").value;

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
            }*/

            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
            document.getElementById("my_alert").innerHTML = "دستی";
        }


    </SCRIPT>


</head>

<body>

<div class=""   >
    <?php
    include "../../../navbar.php";
    ?>
</div>

<div class="row" style="font-family:Arial; "  >

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

        <!-- java scrip -->
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


        <!-- setting -->
        <p>NUM AND TALK</p>
        <div class="row " >

            <blockquote class="blockquote">
                <p>نمایش شاخص طبقات و سخنگو</p>
            </blockquote>

        </div>


            <table class="fixed_header" >

                <thead>
                <tr>
                    <th scope="col">FLOOR</th>
                    <th scope="col">SL</th>
                    <th scope="col">SR</th>
                    <th scope="col">TALK</th>
                </tr>
                </thead>

                <tbody  >

                    <?php
                        $i=0;
                        for($i=0;$i<10;$i++ ){
                            echo "<tr >";
                            $floor = $i-1;
                            echo "<th scope=\"row\">"."$floor"."</th>";

                            echo "<td>";
                            echo "<select onchange=\"myFunction()\" id=\"select\" name=\"choise\" class=\"form-select\" >";
                            print_TALK_VALUE();
                            echo "</select>" ;
                            echo "</td>";
                            echo "<td>";
                            echo "<select onchange=\"myFunction()\" id=\"select\" name=\"choise\" class=\"form-select\" >";
                            print_TALK_VALUE();
                            echo "</select>" ;
                            echo "</td>";
                            echo "<td>";
                            echo "<select onchange=\"myFunction()\" id=\"select\" name=\"choise\" class=\"form-select\" >";
                            print_TALK_VALUE();
                            echo "</select>" ;
                            echo "</td>";
                            echo "</tr>";

                        }
                    ?>
                </tbody>
            </table>


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

<?php

    function print_TALK_VALUE()
    {
        echo "<option value=\"G\">G</option>";
        echo "<option value=\"P\">P</option>";
        echo "<option value=\"P1\">P1</option>";
    }

?>
