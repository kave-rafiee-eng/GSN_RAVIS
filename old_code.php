<?php


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

?>

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

/* if( change.search("download") > 0 || change.search("upload") > 0  ){
var time = 80000;
if( document.getElementById("auto_refresh_value").value == "a1")time=3000;
setTimeout(function(){
location.reload();
}, time); // 3000 milliseconds = 3 seconds
}*/


/* function refresh_radio(){
let form = document.getElementById("form_refresh");
setTimeout(setAlert, 500);
}
function setAlert() {
let form = document.getElementById("form_refresh");
form.submit();
}*/

/*function myFunction() {

var x = document.getElementById("number_of_stop").value;
document.getElementById("alert_text").innerHTML = x.toString(10)+" Sec";

//document.getElementById("alert_text").innerHTML = document.getElementById("auto_refresh_value").value;

var x = document.getElementById("alert");
if (x.style.display === "none") {
x.style.display = "block";
}
}*/
