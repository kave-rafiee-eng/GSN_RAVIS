
var status="unknown";

var list_settnig = [[],];
list_settnig.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 39;
list_settnig.push(["time_out" , JSON.stringify(obj),"unknown",0 ]);

obj.ar = 0; obj.ad = 8;
list_settnig.push(["enable" , JSON.stringify(obj),"unknown",0 ]);

//------------------------------------------------------------------

var serial = Number(document.getElementById("div_serial").textContent )
var dbg_mass = document.getElementById("deb")

let topic_publish = "server/"+serial
function load_end(){

    startConnect()

    show_status()

    dbg_mass.innerHTML = topic_publish
}

window.addEventListener("load", load_end);

function mqtt_massage_get( message ){

    const obj_esp = JSON.parse(message) ;

    for (let i = 0; i < list_settnig.length; i++) {

        var obj_setting = JSON.parse(list_settnig[i][1])

        for (let j = 0; j < 10; j++) {

            if(obj_setting.ar == obj_esp["ar"+j] && obj_setting.ad == obj_esp["ad"+j]  ){

                if( obj_esp["da"+j] >= 0 ){
                    list_settnig[i][2] = "update";
                    list_settnig[i][3] = obj_esp["da"+j];

                    document.getElementById(list_settnig[i][0]).value = obj_esp["da"+j]
                }

            }
        }
    }

    show_status()

    dbg_mass.innerHTML = status
    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    ajax(message)

}

function upload_download_setting(type) {
    for (let i = 0; i < list_settnig.length; i++) {
        list_settnig[i][2] = type
    }
    send_mqtt();
}

function send_mqtt(){

    var obj_send = new Object();
    obj_send.serial = serial;
    for (let i = 1; i < list_settnig.length+1; i++) {

        let data = document.getElementById(list_settnig[i-1][0])

        var obj = JSON.parse(list_settnig[i-1][1])

        if(list_settnig[i-1][2] == "upload")obj_send["st"+i] = 1;
        if(list_settnig[i-1][2] == "download")obj_send["st"+i] = 0;

        if( list_settnig[i-1][2] == "download" || list_settnig[i-1][2] == "upload" ){
            obj_send["ad"+i] = obj.ad;
            obj_send["ar"+i] = obj.ar;
            obj_send["da"+i] = data.value;
        }

    }

    dbg_mass.innerHTML = JSON.stringify(obj_send)

    publishMessage(topic_publish,JSON.stringify(obj_send));

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
    xhttp.open("GET", "sql_save_ajax.php?"+str, true);
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

    progress =    (progress_passed/step *100) ;

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


