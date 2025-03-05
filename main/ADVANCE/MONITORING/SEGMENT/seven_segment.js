var json_server = JSON.parse(document.getElementById("json_server").innerHTML)
var number_of_stop = json_server.number_of_stop;

var dir=0;
var dir_UP=0;
var dir_DN = 0;

var segment=1;
var segment_l="0";
var segment_r="0";

function load_end(){

    startConnect();

    show_status();

    console.log("start");

}
window.addEventListener("load", load_end);

// -------------------------------------------------------------------- Timer Send MQTT

let timer_send=50;
function red(){

    if( timer_send > 0 )timer_send--;
    else {
        send();
        timer_send=50;
    }

}
setInterval(red, 100);

// -------------------------------------------------------------------- Send MQTT

function send(){

    var obj_send = new Object();

    let serial = Number(document.getElementById("div_serial").textContent )

    obj_send.serial = serial;

     console.log("Send Data");

    let all_osend=1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if (SEG_list_data[i][4] == 0) {
            all_osend=0;
        }
    }

    if( all_osend == 1 ){
        for (let i = 0; i < SEG_list_data.length; i++) {
            SEG_list_data[i][4]=0;
        }
    }

    let index=1;
    for (let i = 0; i < SEG_list_data.length; i++) {

        if( SEG_list_data[i][4] == 0 ){

            var obj = JSON.parse(SEG_list_data[i][2])

            obj_send["ad"+index] = obj.ad;
            obj_send["ar"+index] = obj.ar;
            obj_send["st"+index] = 0;
            obj_send["da"+index] = 0;

            index++;

            SEG_list_data[i][4] =1;
            SEG_list_data[i][3] = "update";

            console.log("****");

        }

        if( index > 3 )break;

    }

    let topic = "server/"+serial

    publishMessage(topic,JSON.stringify(obj_send));

    kave_chart.data.datasets[0].data[0]=massage_count*50;
    kave_chart.update()

}


// -------------------------------------------------------------------- Recive MQTT

let color_pr=0;
function SEG_mqtt_massage_get(DATA){

    SegmentDisplay.colorOn = 'rgb(62,233,15)';


    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

    for (let i = 0; i < SEG_list_data.length; i++) {

        var DATA_List = JSON.parse(SEG_list_data[i][2])

        for (let j = 0; j < 10; j++) {

            if(DATA_List.ar == DATA_Recive["ar"+j] && DATA_List.ad == DATA_Recive["ad"+j] ){

                SEG_list_data[i][3] = "update";
                SEG_list_data[i][5] = DATA_Recive["da"+j];
                console.log(DATA_List);

                timer_send = 5;

            }

        }

    }

    for (let i = 0; i < SEG_list_data.length; i++) {

        if( SEG_list_data[i][1] == "seg_l"  ){
            segment_l = decodeSevenSegment(Number(SEG_list_data[i][5])) ;
            if( Number(SEG_list_data[i][5]) & 127 )dir_UP=1;
            else dir_UP=0;
        }
        if( SEG_list_data[i][1] == "seg_r"  ){
            segment_r = decodeSevenSegment(Number(SEG_list_data[i][5])) ;
            if( Number(SEG_list_data[i][5]) & 127 )dir_DN=1
            else dir_DN=0
        }

    }

    SEG_UPDATE();

    show_status();

    //send();

    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()


   // show_status();
}



// -------------------------------------------------------------------- 7SEG UPDATEER

function SEG_UPDATE(){

    let all_one=1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if ( SEG_list_data[i][4] == 0 ) all_one=0;
    }

    if( all_one ){
        display.setValue(segment_l+segment_r);
    }

}

// -------------------------------------------------------------------- STATUS

function show_status(){

    status = "update"

    let step=0;
    let progress_passed=0;

    for (let i = 0; i < SEG_list_data.length; i++) {
        step++;
        if ( SEG_list_data[i][4] == 1 ) {
            progress_passed++;
        }
    }

    if( progress_passed == step )color_pr = 1 - color_pr

    progress =    Math.round(progress_passed/step *100) ;

    status="upload & download";
    if( progress == 100 )status="update";
    if(progress == 0)status = "unknown";

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

    if( color_pr == 0 )div_progress.style.backgroundColor = "red";
    else div_progress.style.backgroundColor = "blue";

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


// --------------------------------------------------------------------  blanking Triangle
var ch = 0;
function refresh(){

    let all_one=1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if ( SEG_list_data[i][4] == 0 ) all_one=0;
    }

    if( all_one ){
        SEG_UPDATE();
    }

    ch = 1 - ch;
    if( ch == 0 && all_one ){
        drawTriangle(dir);
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

}
setInterval(refresh, 500);

// -------------------------------------------------------------------- drawTriangle
let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

function drawTriangle(dir) {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let height = 100 * Math.cos(Math.PI / 6);

    if(dir_UP == 1 ){
        context.beginPath();
        context.moveTo(+10, canvas.height);
        context.lineTo(canvas.height, 10);
        context.lineTo(canvas.height*2-10, canvas.height);
        context.closePath();
    }
    else if (dir_DN == 1 ){
        context.beginPath();
        context.moveTo(10, 10);
        context.lineTo(canvas.height , canvas.height);
        context.lineTo(canvas.height*2-10 , 10);
        context.closePath();
    }


    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#504e51';
    context.stroke();

    // the fill color
    context.fillStyle = "#504e51";
    context.fill();
}

// -------------------------------------------------------------------- CHART SEND AND RECIVE

const ctx = document.getElementById('myChart_com');

const kave_chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['send', 'recive'],
        datasets: [{
            label: 'byte',
            data: [0, 0],
            borderWidth: 2,
            backgroundColor: [
                'rgba(17,175,228,0.2)',
                'rgba(246,128,9,0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




function decodeSevenSegment(number) {
    // تبدیل عدد به باینری ۷ بیتی
    let bits = number.toString(2).padStart(7, '0');

    // جدول نگاشت باینری به اعداد و حروف
    const segmentMap = {
        "0000000": "0",
        "0111111": "0",
        "0000110": "1",
        "1011011": "2",
        "1001111": "3",
        "1100110": "4",
        "1101101": "5",
        "1111101": "6",
        "0000111": "7",
        "1111111": "8",
        "1101111": "9",
        "1110111": "A",
        "1111100": "B",
        "0111001": "C",
        "1011110": "D",
        "1111001": "E",
        "1110001": "F",
        "1111101": "G",  // اضافه شد
        "1110110": "H",  // اضافه شد
        "1110011": "P"   // اضافه شد
    };

    // جستجو در جدول و بازگرداندن مقدار معادل
    return segmentMap[bits] || "Invalid Input";
}
