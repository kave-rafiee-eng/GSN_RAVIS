var json_server = JSON.parse(document.getElementById("json_server").innerHTML)
var number_of_stop = json_server.number_of_stop;

var dir = 0;
var dir_UP = 0;
var dir_DN = 0;

var segment = 1;
var segment_l = "0";
var segment_r = "0";

var door = [0,0,0]

function load_end() {

    startConnect();

    show_status();

    console.log("start");

    show_select_type();

    change_array();

    show_table_flag();

}

window.addEventListener("load", load_end);

// -------------------------------------------------------------------- Timer Send MQTT

let timer_send = 30;

function red() {

    if (timer_send > 0) timer_send--;
    else {
        send();
        timer_send = 30;
    }

}

setInterval(red, 100);

// -------------------------------------------------------------------- Send MQTT

function send() {

    var obj_send = new Object();

    let serial = Number(document.getElementById("div_serial").textContent)

    obj_send.serial = serial;

    console.log("Send Data");

    let all_osend = 1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if (SEG_list_data[i][4] == 0) {
            all_osend = 0;
        }
    }

    for (let i = 0; i < uniqueArAdPairs.length; i++) {
        if (uniqueArAdPairs[i][1] == 0) {
            all_osend=0;
        }
    }

    if (all_osend == 1) {
        for (let i = 0; i < SEG_list_data.length; i++) {
            SEG_list_data[i][4] = 0;
        }
        for (let i = 0; i < uniqueArAdPairs.length; i++) {
            uniqueArAdPairs[i][1]=0;
        }
    }

    let index = 1;

    if( send_one_time ){
        var JOSN_send1 = JSON.parse(send_one_time);
        obj_send["ad" + index] = JOSN_send1.ad;
        obj_send["ar" + index] = JOSN_send1.ar;
        obj_send["st" + index] = 1;
        obj_send["da" + index] = JOSN_send1.bit;
        index=10;
        send_one_time=0;
        send_one_time.length =0;
    }
    for (let i = 0; i < SEG_list_data.length; i++) {

        if (SEG_list_data[i][4] == 0) {

            var obj = JSON.parse(SEG_list_data[i][2])

            obj_send["ad" + index] = obj.ad;
            obj_send["ar" + index] = obj.ar;
            obj_send["st" + index] = 0;
            obj_send["da" + index] = 0;

            index++;

            SEG_list_data[i][4] = 1;

            console.log("****");

        }

        if (index > 2) break;

    }

    for (let i = 0; i < uniqueArAdPairs.length; i++) {

        if( uniqueArAdPairs[i][1] == 0 ){

            var obj = JSON.parse(uniqueArAdPairs[i][0])

            obj_send["ad"+index] = obj.ad;
            obj_send["ar"+index] = obj.ar;
            obj_send["st"+index] = 0;
            obj_send["da"+index] = 0;

            index++;

            uniqueArAdPairs[i][1]=1;

        }

        if( index > 3 )break;

    }

    let topic = "server/" + serial

    publishMessage(topic, JSON.stringify(obj_send));

    kave_chart.data.datasets[0].data[0] = massage_count * 50;
    kave_chart.update()

}


// -------------------------------------------------------------------- Recive MQTT

let color_pr = 0;
var C_out=0;
function SEG_mqtt_massage_get(DATA) {

    SegmentDisplay.colorOn = 'rgb(62,233,15)';


    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA);

    for (let i = 0; i < SEG_list_data.length; i++) {

        var DATA_List = JSON.parse(SEG_list_data[i][2])

        for (let j = 0; j < 10; j++) {

            if (DATA_List.ar == DATA_Recive["ar" + j] && DATA_List.ad == DATA_Recive["ad" + j]) {

                SEG_list_data[i][3] = "update";
                SEG_list_data[i][5] = DATA_Recive["da" + j];
                console.log(DATA_List);

                timer_send = 5;

            }

        }

    }

    for (let i = 0; i < list_data.length; i++) {

        var DATA_List = JSON.parse(list_data[i][2])

        for (let j = 0; j < 10; j++) {

            if(DATA_List.ar == DATA_Recive["ar"+j] && DATA_List.ad == DATA_Recive["ad"+j] ){

                if( DATA_Recive["da"+j] & (1 << DATA_List.bit ) )list_data[i][4] =  1 - DATA_List.not;
                else list_data[i][4] = DATA_List.not - 0;
                list_data[i][3] = "update";
                console.log(DATA_List);
                timer_send = 5;
            }

        }

    }

    for (let i = 0; i < SEG_list_data.length; i++) {

        if (SEG_list_data[i][1] == "seg_l") {
            // segment_r = decodeSevenSegment(Number(SEG_list_data[i][5])&127) ;
            segment_r = SEG_list_data[i][5] & 127;
            if (Number(SEG_list_data[i][5]) & 128) dir_UP = 1;
            else dir_UP = 0;
        }
        if (SEG_list_data[i][1] == "seg_r") {
            //segment_l = decodeSevenSegment(Number(SEG_list_data[i][5])&127) ;
            segment_l = SEG_list_data[i][5] & 127;
            if (Number(SEG_list_data[i][5]) & 128) dir_DN = 1
            else dir_DN = 0
        }
        if (SEG_list_data[i][1] == "Carcodec Output") {

            C_out = SEG_list_data[i][5] ;

            if( Number(C_out) & 1)door[0]=1;
            else door[0]=0;
            if( Number(C_out) & 2)door[1]=1;
            else door[1]=0;
            if( Number(C_out) & 4)door[2]=1;
            else door[2]=0;

        }

    }

    let all_osend = 1;

    for (let i = 0; i < uniqueArAdPairs.length; i++) {
        if (uniqueArAdPairs[i][1] == 0) {
            all_osend=0;
        }
    }

    if (all_osend == 1) {
        show_table_flag();
    }


    SEG_UPDATE();

    show_status();

    //send();

    kave_chart.data.datasets[0].data[1] = get_count * 50;
    kave_chart.update()


    // show_status();
}


// -------------------------------------------------------------------- 7SEG UPDATEER

function SEG_UPDATE() {

    let all_one = 1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if (SEG_list_data[i][4] == 0) all_one = 0;
    }

    if (all_one) {

        display.setValue_2digit(segment_l, segment_r)


        // دسترسی به درب‌ها و لیبل‌ها به صورت خودکار
        const doors = [1, 2, 3].map(num => document.getElementById(`door${num}`));
        const labels = [1, 2, 3].map(num => document.getElementById(`labe_door${num}`));

        // بروزرسانی وضعیت درب‌ها
        doors.forEach((doorElement, index) => {
            if (door[index]) {
                doorElement.classList.remove('unknown');
                doorElement.classList.remove('open');
                labels[index].innerText = "Close";
            } else {
                doorElement.classList.remove('unknown');
                doorElement.classList.add('open');
                labels[index].innerText = "Open";
            }
        });

    }



}

// -------------------------------------------------------------------- STATUS

function show_status() {

    status = "update"

    let step = 0;
    let progress_passed = 0;

    for (let i = 0; i < SEG_list_data.length; i++) {
        step++;
        if (SEG_list_data[i][4] == 1) {
            progress_passed++;
        }
    }

    if (progress_passed == step) color_pr = 1 - color_pr

    progress = Math.round(progress_passed / step * 100);

    status = "upload & download";
    if (progress == 100) status = "update";
    if (progress == 0) status = "unknown";

    let div_status = document.getElementById("status_mqtt")

    while (div_status.hasChildNodes()) {
        div_status.removeChild(div_status.firstChild);
    }

    const newButton = document.createElement('button');
    newButton.textContent = status;
    if (status == "upload & download") newButton.className = "btn btn-warning  ";
    if (status == "unknown") newButton.className = "btn btn-light  ";
    if (status == "update") newButton.className = "btn btn-success  ";
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
    div_progress.textContent = progress + "%";
    div_progress.className = "progress-bar";

    if (color_pr == 0) div_progress.style.backgroundColor = "red";
    else div_progress.style.backgroundColor = "blue";

    div_progress.setAttribute("id", "progress-status");
    div_progress.role = "progressbar";
    div_progress.style.width = progress + "%";
    div_progress.ariaValueNow = progress + "%";
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

function refresh() {

    let all_one = 1;
    for (let i = 0; i < SEG_list_data.length; i++) {
        if (SEG_list_data[i][4] == 0) all_one = 0;
    }

    if (all_one) {
        SEG_UPDATE();

    }

    ch = 1 - ch;
    if (ch == 0 && all_one) {

        if (dir_UP || dir_DN) {
            drawTriangle(dir);
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

    } else {
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

    if (dir_UP == 1) {
        context.beginPath();
        context.moveTo(+10, canvas.height);
        context.lineTo(canvas.height, 10);
        context.lineTo(canvas.height * 2 - 10, canvas.height);
        context.closePath();
    } else if (dir_DN == 1) {
        context.beginPath();
        context.moveTo(10, 10);
        context.lineTo(canvas.height, canvas.height);
        context.lineTo(canvas.height * 2 - 10, 10);
        context.closePath();
    } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
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


/*
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
        "1110011": "P",   // اضافه شد
        "1010000": "R"
    };

    // جستجو در جدول و بازگرداندن مقدار معادل
    return segmentMap[bits] || "Invalid Input";
}
*/


// جدول مقادیر معادل برای سون سگمنت
const segmentMap = {
    0x00: " ",
    0x3F: "0",
    0x06: "1",
    0x5B: "2",
    0x4F: "3",
    0x66: "4",
    0x6D: "5",
    0x7D: "6",
    0x07: "7",
    0x7F: "8",
    0x6F: "9",
    0x3D: "G",
    0x73: "P",
    0x7C: "B",
    0x50: "r",
    0x01: "a",
    0x02: "b",
    0x04: "c",
    0x08: "d",
    0x10: "e",
    0x20: "f",
    0x40: "g",
    0x80: "h",
    0x49: "Day Counter Mark",
    0x54: "n (CF3 & 1CF Error)",
    0x1B: "Start Mode Mark",
    0x79: "E (Error)",
    0x71: "F (Fire & FTO)",
    0x76: "H (Emergency)",
    0x39: "C (Calibration)"
};

// تابع تبدیل باینری به مقدار معادل در جدول
function decodeSevenSegment(number) {
    // اطمینان از اینکه عدد ورودی در محدوده مجاز قرار دارد
    if (number < 0 || number > 0x7F) {
        return " ";
    }

    // بررسی جدول و بازگرداندن کاراکتر معادل
    return segmentMap[number] || "Invalid Input";
}



//----------------------------
var list_uniq_type = [...new Set(list_data.map(item => item[0]))];

function show_select_type(){

    for (let i=0; i<list_uniq_type.length; i++) {
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(list_uniq_type[i]);
        z.appendChild(t);
        document.getElementById("select_type").appendChild(z);
    }
}

function list_type_change() {
    let selectElement = document.getElementById("select_type");
    let selectedValue = selectElement.value; // مقدار انتخاب‌شده را دریافت می‌کند

    console.log("مقدار انتخاب‌شده:", selectedValue);

    change_array();

    show_table_flag();
}

var status="unknown";
let bit=1;

let uniqueArAdPairs

let inputOnlyList

function change_array(){

    let selectElement = document.getElementById("select_type");
    let selectedValue = selectElement.value; // مقدار انتخاب‌شده را دریافت می‌کند

    inputOnlyList = list_data
        .filter(item => item[0] === list_uniq_type[selectedValue] ) // انتخاب فقط داده‌های "input"
        .map(item => [...item]);


    uniqueArAdPairs = [
        ...new Map(
            inputOnlyList.map(item => {
                let obj = JSON.parse(item[2]);
                return [`${obj.ar}-${obj.ad}`,item[2]]; // ترکیب ar و ad به عنوان کلید

            })
        ).values()
    ];

    uniqueArAdPairs = uniqueArAdPairs.map(item => [item, 0]);

    console.log("aaaa");
}

var send_one_time;
function show_table_flag(){

   // change_array();

    var table_flag = document.getElementById("table_flag");

    table_flag.replaceChildren();

    var copiedArray = JSON.parse(JSON.stringify(list_data));

    let selectElement = document.getElementById("select_type");
    let selectedValue = selectElement.value; // مقدار انتخاب‌شده را دریافت می‌کند

    for (let j = 0; j < copiedArray.length; j++) {

        if( copiedArray[j][0] == list_uniq_type[selectedValue] ){

            var tr = document.createElement("TR");

            tr.setAttribute("id", "tr_flag"+j);
            table_flag.appendChild(tr);

            const newButton = document.createElement('button');

            td = document.createElement("TD");

            newButton.textContent = copiedArray[j][1]+"        "
            newButton.style.width = "100%"
            newButton.className = "btn btn-primary btn-sm"

            // افزودن رویداد کلیک به دکمه
            newButton.addEventListener('click', function() {

                list_data[j][3] = "click";
                copiedArray[j][3] = "click";

                handleButtonClick(list_data[j][3]);

                send_one_time = list_data[j][2]

            });

            if( copiedArray[j][3] == "update" ){

                if( copiedArray[j][4] == 1 ){

                    newButton.style.background = "#dd5151"
                    newButton.style.color = "#ffffff"
                    newButton.style.border = "1px solid #dd5151"
                    newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
                    newButton.style.boxShadow = " 0 0 20px #dd5151"

                    var symbol = document.createElement('i')
                    symbol.className = "bi bi-1-circle-fill";
                    symbol.style.color = "#ffffff"
                    newButton.appendChild(symbol);

                }
                else{

                    newButton.style.background = "#0068ff"
                    newButton.style.color = "#ffffff"
                    newButton.style.border = "1px solid #ffffff"
                    newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
                    newButton.style.boxShadow = " 0 0 20px #ffffff"

                    var symbol = document.createElement('i')
                    symbol.className = "bi bi-0-circle-fill";
                    symbol.style.color = "#ffffff"
                    newButton.appendChild(symbol);
                }
            }
            else if(copiedArray[j][3] == "click") {
                newButton.style.background = "#f6d037"
                newButton.style.color = "#da6060"
                newButton.style.border = "1px solid #dcdbdb"
                newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
            }
            else{
                newButton.style.background = "#dcdbdb"
                newButton.style.color = "#000000"
                newButton.style.border = "1px solid #dcdbdb"
                newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
            }

            td.appendChild(newButton);
            tr.appendChild(td);

        }

    }

}

function handleButtonClick(buttonName) {

    buttonName = "click"
   // alert(list_data)
    show_table_flag();
}