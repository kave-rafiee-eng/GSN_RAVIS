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


<!-- دکمه‌ای برای باز کردن مودال -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#numberInputModal">
    دریافت مقدار عددی
</button>

<!-- `Modal` برای دریافت مقدار عددی -->
<div class="modal fade" id="numberInputModal" tabindex="-1" aria-labelledby="numberInputModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="numberInputModalLabel">لطفاً مقدار عددی وارد کنید</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="userInputNumber" class="form-label">عدد خود را وارد کنید:</label>
                <input type="number" class="form-control" id="userInputNumber" placeholder="مثلاً 50" min="0" max="100">
                <div id="error-message" class="text-danger mt-2" style="display: none;">لطفاً یک عدد معتبر بین 0 تا 100 وارد کنید!</div>

                <!-- Progress Bar -->
                <div class="progress mt-3">
                    <div id="progressBar" class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">لغو</button>
                <button type="button" class="btn btn-success" id="submitNumber">تأیید</button>
            </div>
        </div>
    </div>
</div>



<p>امروز تاریخ:
    <?php echo date("Y-m-d"); ?>
    است.</p>

<?php
$username = "کاربر مهمان";
echo "<p>نام کاربری: $username</p>";
?>



