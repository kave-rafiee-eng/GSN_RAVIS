
//------------------------------------------------------------------

/*
// Get JSON data from the hidden div
var jsonData = document.getElementById("json_server").innerText;
// Parse JSON into a JavaScript object
var data = JSON.parse(jsonData);
// Store the serial value in a variable
var serial = data.serial;
// Log the serial number for debugging
console.log("Serial_json:", serial);*/

var serial = Number(document.getElementById("div_serial").textContent )
console.log("Serial_json:", serial);

var dbg_mass = document.getElementById("deb")

const time_out = 8;

var timer_time_out_mqtt = -1;
function repeater(){

    if( timer_time_out_mqtt > 0 || timer_time_out_mqtt < 0 ){ timer_time_out_mqtt-- }
    if( timer_time_out_mqtt <= -5 )timer_time_out_mqtt=0;

    show_status_gsm();
    dbg_mass.innerHTML = timer_time_out_mqtt


}
setInterval(repeater, 1000);

let timer_send=50;
function repeat(){

    if( timer_send > 0 )timer_send--;
    else {
        send_mqtt();
        timer_send=30;
    }

}
setInterval(repeat, 100);

/*
// ذخیره شناسه تایمر
let TIMER_first_send = setInterval(first_send, 500);

function first_send() {
    if (mqtt_connect == 1) {
        console.log("First send");
        send_mqtt();
        console.log("⏳ تایمر متوقف شد!");

        // خاموش کردن تایمر
        clearInterval(TIMER_first_send);
    }
}*/

function timer_check(){

    check_max_min();
}
setInterval(timer_check, 500);

function roundToStep(value, step, min) {
    return +(Math.round((value - min) / step) * step + min).toFixed(2);
}
function check_max_min(){
    for(let i=0; i<list_settnig.length; i++){
        if(document.getElementById(list_settnig[i][0]) ){
            const element = document.getElementById(list_settnig[i][0])
            if( element instanceof HTMLInputElement ){

                console.log("element Find")

                let value = parseFloat(element.value);

                if (value > parseFloat(element.max)) {
                    alert(`مقدار ورودی نباید بیشتر از ${element.max} باشد!`);
                    element.value = element.max;
                } else if (value < parseFloat(element.min)) {
                    alert(`مقدار ورودی نباید کمتر از ${element.min} باشد!`);
                    element.value = element.min;
                } else {
                    // اصلاح خودکار مقدار به نزدیک‌ترین step و محدود کردن اعشار
                    if( element.hasAttribute('step') ){
                        element.value = roundToStep(value, parseFloat(element.step), parseFloat(element.min));
                    }
                    else{
                        element.value = roundToStep(value, parseFloat(1), parseFloat(element.min));
                    }

                }
            }
        }

    }
}

function myFunction(){

}





let topic_publish = "server/"+serial
function load_end(){

    startConnect()

    dbg_mass.innerHTML = topic_publish

    for (let i = 0; i < list_settnig.length; i++) {
        list_settnig[i][2] = "download"
    }

    show_status()

}

window.addEventListener("load", load_end);

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function mqtt_massage_get( message ){


    if( JSON.parse(message) ) {

        const obj_esp = JSON.parse(message);

        if (obj_esp.serial == serial) {

            timer_time_out_mqtt = time_out;

            for (let i = 0; i < list_settnig.length; i++) {

                var obj_setting = JSON.parse(list_settnig[i][1])

                for (let j = 0; j < 40; j++) {

                    if (obj_setting.ar == obj_esp["ar" + j] && obj_setting.ad == obj_esp["ad" + j]) {

                        if (obj_esp["da" + j] >= 0) {

                            timer_send=50;

                            let factor = list_settnig[i][4];
                            let Addition = list_settnig[i][5];
                            let offset = list_settnig[i][6];

                            list_settnig[i][2] = "update";
                            list_settnig[i][3] = (obj_esp["da" + j] - offset) / factor - Addition;

                            document.getElementById(list_settnig[i][0]).value = list_settnig[i][3]
                        }

                    }
                }
            }

            show_status()

            dbg_mass.innerHTML = status
            kave_chart.data.datasets[0].data[1] = get_count * 50;
            kave_chart.update()

            ajax(message)

            send_mqtt()
        }
    }

}

function upload_download_setting(type) {
    for (let i = 0; i < list_settnig.length; i++) {
        list_settnig[i][2] = type
    }
    send_mqtt();
}

function send_mqtt(){

    var send=0;

    var obj_send = new Object();
    obj_send.serial = serial;

    let j=0;

    for (let i = 1; i < list_settnig.length+1 && j < 20 ; i++) {

        let data = document.getElementById(list_settnig[i-1][0])

        var obj = JSON.parse(list_settnig[i-1][1])

        if( list_settnig[i-1][2] == "download" || list_settnig[i-1][2] == "upload" ){

            let factor=list_settnig[i-1][4];
            let Addition=list_settnig[i-1][5];
            let offset = list_settnig[i-1][6];

            obj_send["ar"+j] = obj.ar;
            obj_send["ad"+j] = obj.ad;
            obj_send["da"+j] = Math.round(data.value * factor + Addition +  offset )

            if(list_settnig[i-1][2] == "upload")obj_send["st"+j] = 1;
            if(list_settnig[i-1][2] == "download")obj_send["st"+j] = 0;

            send=1;

            j++;
        }

    }

    if( send == 1 ){
        showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
        dbg_mass.innerHTML = JSON.stringify(obj_send)
        publishMessage(topic_publish,JSON.stringify(obj_send));
    }

    kave_chart.data.datasets[0].data[0]=massage_count*50;
    kave_chart.update()

    show_status();

}

function ajax( json_data){

    var xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("div_ajax_responce").innerHTML = this.responseText ;
        }
    };

    var str = "json="+json_data;
    xhttp.open("GET", "/GSM_RAVIS/main/ADVANCE/mqtt_connection/sql_save_ajax.php?"+str, true);
    xhttp.send();

}

function show_status(){

    let unknown = 0;
    let progress_passed=0;
    let progress=100;
    let step=0;

    status = "update"
    for (let i = 0; i < list_settnig.length; i++) {
        if( list_settnig[i][2] == "unknown" )unknown=1;
        if( list_settnig[i][2] == "update" )progress_passed++;
        step++;
    }

    progress =    Math.round(progress_passed/step *100) ;

    updateProgress(progress);

    status="upload & download";
    if( progress == 100 )status="update";
    if(unknown == 1)status = "unknown";

    let div_status = document.getElementById("status_mqtt")

    while (div_status.hasChildNodes()) {
        div_status.removeChild(div_status.firstChild);
    }

    const newButton = document.createElement('button');
    newButton.textContent = status;
    if(status == "upload & download")newButton.className = "btn btn-warning  ";
    if(status == "unknown")newButton.className = "btn btn-light  ";
    if(status == "update")newButton.className = "btn btn-success  ";
    newButton.disabled = true
    div_status.appendChild(newButton);

    var symbol = document.createElement('i')
    symbol.className = "bi bi-wifi";
    newButton.appendChild(symbol);

    var spane = document.createElement('span')
    spane.className = "spinner-grow spinner-grow-sm ";
    newButton.appendChild(spane);

    //--------


    const div_pr = document.createElement("div_pr");
    div_pr.className = "progress col-6 m-3";

    const div_progress = document.createElement("div");
    div_progress.textContent = progress+"%";
    div_progress.className = "progress-bar";
    div_progress.setAttribute("id", "progress-status");
    div_progress.role = "progressbar";
    div_progress.style.width = progress+"%";
    div_progress.ariaValueNow = progress+"%";
    div_progress.ariaValueMin = "0%";
    div_progress.ariaValueMax = "100%";

    div_pr.appendChild(div_progress);

    div_status.appendChild(div_pr);

    //echo"<div class='progress col-6 m-3'  >";
    //echo "<div class='progress-bar' id='progress-status' role='progressbar' style='width: 0%; '  aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'>0</div>'";
    //echo "</div>";

}

function show_status_gsm(){

    let div_status = document.getElementById("status_connection")

    while (div_status.hasChildNodes()) {
        div_status.removeChild(div_status.firstChild);
    }

    var text
    if(timer_time_out_mqtt>0)text = "connect ";
    if(timer_time_out_mqtt==0)text = "not connect ";
    if(timer_time_out_mqtt<0)text = "test ";

    const newButton = document.createElement('button');
    newButton.textContent = text;
    if(timer_time_out_mqtt>0)newButton.className = "btn btn-success  ";
    if(timer_time_out_mqtt==0)newButton.className = "btn btn-danger  ";
    if(timer_time_out_mqtt<0)newButton.className = "btn btn-light  ";

    newButton.disabled = true
    div_status.appendChild(newButton);

    var symbol = document.createElement('i')
    symbol.className = "bi bi-wifi";
    newButton.appendChild(symbol);

    var spane = document.createElement('span')
    spane.className = "spinner-grow spinner-grow-sm ";
    newButton.appendChild(spane);

}

const ctx = document.getElementById('myChart');

const kave_chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['send', 'recive'],
        datasets: [{
            label: 'byte',
            data: [0, 0],
            borderWidth: 2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero : true,
                forceOverride: true
            }
        }
    }
});



let alertModal; // متغیر به صورت گلوبال تعریف می‌شود
let mqtt_progress = 10;
function showProgressModal(title, message) {

    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const progressBar_Madal = document.getElementById('progressBar_Madal');
    const closeButton = document.getElementById('closeButton');

    if (!alertModal) {
        alertModal = new bootstrap.Modal(document.getElementById('alertModal'));

        // تنظیم عنوان و پیام به صورت پویا
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        progressBar_Madal.style.width = `${mqtt_progress}%`;
        progressBar_Madal.textContent = `${mqtt_progress}%`;
        closeButton.disabled = false;

    }

    // نمایش مودال
    alertModal.show();

    closeButton.removeEventListener('click', closeModalHandler); // جلوگیری از چندین بار افزودن
    closeButton.addEventListener('click', closeModalHandler);

}

function closeModalHandler() {
    if (alertModal) alertModal.hide();
}

// تابعی برای کنترل مقدار progress
function updateProgress(value) {
    const progressBar_Madal = document.getElementById('progressBar_Madal');
    const modalMessage = document.getElementById('modalMessage');

    progressBar_Madal.style.width = `${value}%`;
    progressBar_Madal.textContent = `${value}%`;

    if (value >= 100) {
        modalMessage.textContent = "عملیات با موفقیت انجام شد!";

        // بستن خودکار مودال پس از تکمیل
        setTimeout(() => {
            modalMessage.textContent = "لطفاً صبر کنید، عملیات در حال انجام است.";
            if (alertModal) alertModal.hide();
        }, 500);
        if (alertModal) alertModal.hide();
    }
}
