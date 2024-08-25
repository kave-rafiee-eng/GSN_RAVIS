
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
                        <select onchange="myFunction()" id="select" name="choise" class="form-select" aria-label="Default select example">
                            <option value="COLLICTIVE DW">COLLICTIVE DW</option>
                            <option value="FULL COLLECTIVE">FULL COLLECTIVE</option>
                            <option value="3">PUSH BUTTON</option>
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

