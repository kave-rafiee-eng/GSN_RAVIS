
//-------------------------------

function load_end(){

    show_select_type();
    startConnect()
}

window.addEventListener("load", load_end);

//------------------------------------------------------------------

var timer_send = 10;
function refresh(){

    if( timer_send >= 0 ){ timer_send-- }
    else{
        timer_send=30;
        send();
    }

    document.getElementById("deb").innerHTML = timer_send

}
setInterval(refresh, 100);


function send(){

    let serial = Number(document.getElementById("div_serial").textContent )

    var obj_send = new Object();

    obj_send.serial = serial;

    let all_one=1;
    for (let i = 0; i < data_table_mqtt.length; i++) {
        if( data_table_mqtt[i][3] == 1 ){
            all_one=0;
        }
    }

    if( all_one == 1 ){
        for (let i = 0; i < data_table_mqtt.length; i++) {
            data_table_mqtt[i][3] = 1 ;
        }
    }

    let index=1;
    for (let i = 0; i < data_table_mqtt.length; i++) {

        if( data_table_mqtt[i][3] == 1 ){
            var obj = JSON.parse(data_table_mqtt[i][2])

            obj_send["ad"+index] = obj.ad;
            obj_send["ar"+index] = obj.ar;
            obj_send["st"+index] = 0;
            obj_send["da"+index] = 0;

            index++;
        }

        if( index > 3 )break;

    }


    let topic = "server/"+serial

    //document.getElementById("deb").innerHTML = topic

    if( data_table_mqtt.length)publishMessage(topic,JSON.stringify(obj_send));
    //document.getElementById("deb").innerHTML = JSON.stringify(obj_send)

    kave_chart.data.datasets[0].data[0]=massage_count*50;
    kave_chart.update()

}



//------------------------------------------------------------------

var color_pr=0;

function esp_data(esp_data){



    const obj_esp = JSON.parse(esp_data) ;

    for (let i = 0; i < data_table_mqtt.length; i++) {

        var obj_mqtt = JSON.parse(data_table_mqtt[i][2])

        for (let j = 0; j < 10; j++) {

            //if( esp_data.search("ad"+j) >= 0 ){

                if(obj_mqtt.ar == obj_esp["ar"+j] && obj_mqtt.ad == obj_esp["ad"+j] ){

                    let type = data_table_mqtt[i][0];
                    let name = data_table_mqtt[i][1];
                    let value = obj_esp["da"+j];
                    if( data_table_mqtt[i][3] == 1 ){
                        table_esp_data.push([type,name,value]);
                        data_table_mqtt[i][3]=2;
                    }

                    timer_send = 5;

                }
            //}

        }

    }

    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    let step= data_table_mqtt.length;
    let progress_passed=0;

    let all_one=1;
    for (let i = 0; i < data_table_mqtt.length; i++) {
        if( data_table_mqtt[i][3] == 1 ){
            all_one=0;
        }
        else progress_passed++;
    }

    if( all_one == 1 ){
        show_table_esp();
        table_esp_data.splice(0, 200);
        color_pr = 1 - color_pr;

        for (let i = 0; i < data_table_mqtt.length; i++) {
            data_table_mqtt[i][3] = 1 ;
        }
    }

    let progress =    (progress_passed/step *100) ;

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



function refresh_chart(){


}
setInterval(refresh_chart, 1000);
