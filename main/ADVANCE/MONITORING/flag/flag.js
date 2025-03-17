
var select_type = document.getElementById("select_type");

function load_end(){

    show_select_type();

    startConnect();

    show_table_flag();

    show_status();


}
window.addEventListener("load", load_end);


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

    show_table_flag();
}

var status="unknown";
let bit=1;


//------------------------------------------------------------------
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

function show_table_flag(){

    change_array();

    var table_flag = document.getElementById("table_flag");

    table_flag.replaceChildren();

     var copiedArray = JSON.parse(JSON.stringify(list_data));

    let selectElement = document.getElementById("select_type");
    let selectedValue = selectElement.value; // مقدار انتخاب‌شده را دریافت می‌کند

    for (let j = 0; j < copiedArray.length; j++) {

        if( copiedArray[j][0] == list_uniq_type[selectedValue] ){

            var tr = document.createElement("TR");
            var td = document.createElement("TD");

            const h1 = document.createElement("h2");
            h1.style.fontFamily = "Garamond";
            const textNode = document.createTextNode(copiedArray[j][1]);
            h1.appendChild(textNode);

            tr.setAttribute("id", "tr_flag"+j);
            table_flag.appendChild(tr);
            td.appendChild(h1);
            tr.appendChild(td);

            const newButton = document.createElement('button');

            td = document.createElement("TD");

            newButton.textContent = copiedArray[j][1]+"        "
            newButton.style.width = "100%"
            newButton.className = "btn btn-primary btn-lg"

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



function send(){

    var obj_send = new Object();

    let serial = Number(document.getElementById("div_serial").textContent )

    obj_send.serial = serial;

    let selectElement = document.getElementById("select_type");
    let selectedValue = selectElement.value; // مقدار انتخاب‌شده را دریافت می‌کند

   // console.log("ssss");

    let all_osend=1;
    for (let i = 0; i < uniqueArAdPairs.length; i++) {
        if (uniqueArAdPairs[i][1] == 0) {
            all_osend=0;
        }
    }

    if( all_osend == 1 ){
        for (let i = 0; i < uniqueArAdPairs.length; i++) {
            uniqueArAdPairs[i][1]=0;
        }
    }

    let index=1;
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

    let topic = "server/"+serial

    // console.log(JSON.stringify(obj_send));

     publishMessage(topic,JSON.stringify(obj_send));

    kave_chart.data.datasets[0].data[0]=massage_count*50;
    kave_chart.update()

}

var timer_send=30;

function red(){

    if( timer_send > 0 )timer_send--;
    else {
        send();
        timer_send=30;
    }

}
setInterval(red, 100);


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



let color_pr=0;
function FLAG_mqtt_massage_get(DATA){


    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

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

    show_table_flag();

    //send();

    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()


    show_status();
    /*let step=0;
    let progress_passed=0;

    let all_osend=1;
    for (let i = 0; i < uniqueArAdPairs.length; i++) {
        step++;
        if ( uniqueArAdPairs[i][1] == 1 ) {
            progress_passed++;
        }
    }


    let progress =    (progress_passed/step *100) ;

    if( progress_passed == step )color_pr = 1 - color_pr

    var div_pr_main = document.getElementById("div_pr");
    div_pr_main.replaceChildren();

    const div_pr = document.createElement("div_pra");
    div_pr.className = "progress col-2 m-3 ";
    const div_progress = document.createElement("div");
    div_progress.textContent = progress+"%";
    div_progress.className = "progress-bar ";

    if( color_pr == 0 )div_progress.style.backgroundColor = "red";
    else div_progress.style.backgroundColor = "blue";

    div_progress.setAttribute("id", "progress-status");
    div_progress.role = "progressbar";
    div_progress.style.width = progress+"%";
    div_progress.ariaValueNow = progress+"%";
    div_progress.ariaValueMin = "0%";
    div_progress.ariaValueMax = "100%";

    div_pr.appendChild(div_progress);

    div_pr_main.appendChild(div_pr);
*/
}



function show_status(){

    status = "update"

    let step=0;
    let progress_passed=0;

    /*let all_osend=1;
    for (let i = 0; i < uniqueArAdPairs.length; i++) {
        step++;
        if ( uniqueArAdPairs[i][1] == 1 ) {
            progress_passed++;
        }
    }*/

    for (let i = 0; i < inputOnlyList.length; i++) {

        step++;

        if ( list_data[i][3] == "update" ) {
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

