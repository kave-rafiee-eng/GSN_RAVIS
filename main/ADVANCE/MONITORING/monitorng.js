
//-------------------------------

function load_end(){

    show_select_type();
    startConnect()
}

window.addEventListener("load", load_end);

//------------------------------------------------------------------

var timer_send = 30;
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

    var obj_send = new Object();

    obj_send.serial = "100";

    for (let i = 1; i < data_table_mqtt.length+1; i++) {

        var obj = JSON.parse(data_table_mqtt[i-1][2])

        obj_send["ad"+i] = obj.ad;
        obj_send["ar"+i] = obj.ar;
        obj_send["st"+i] = 0;
        obj_send["da"+i] = 0;
    }


    if( data_table_mqtt.length)publishMessage("server",JSON.stringify(obj_send));
    //document.getElementById("deb").innerHTML = JSON.stringify(obj_send)

    kave_chart.data.datasets[0].data[0]=massage_count*50;
    kave_chart.update()

}



//------------------------------------------------------------------


function esp_data(esp_data){

    timer_send = 0;

    table_esp_data.splice(0, 200);

    const obj_esp = JSON.parse(esp_data) ;

    for (let i = 0; i < data_table_mqtt.length; i++) {

        var obj_mqtt = JSON.parse(data_table_mqtt[i][2])

        for (let j = 0; j < 10; j++) {

            //if( esp_data.search("ad"+j) >= 0 ){

                if(obj_mqtt.ar == obj_esp["ar"+j] && obj_mqtt.ad == obj_esp["ad"+j] ){

                    let type = data_table_mqtt[i][0];
                    let name = data_table_mqtt[i][1];
                    let value = obj_esp["da"+j];
                    table_esp_data.push([type,name,value]);

                }
            //}

        }

    }

    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    show_table_esp();
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
