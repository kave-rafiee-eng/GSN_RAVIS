
//-------------------------------

function load_end(){

    show_select_type();
    startConnect()
}

window.addEventListener("load", load_end);

//------------------------------------------------------------------

function refresh(){

   var obj_send = new Object();

    obj_send.serial = "100";

    for (let i = 0; i < data_table_mqtt.length; i++) {

        var obj = JSON.parse(data_table_mqtt[i][2])

        obj_send["ad"+i] = obj.ad;
        obj_send["ar"+i] = obj.ar;
        obj_send["st"+i] = 0;
    }


    if( data_table_mqtt.length)publishMessage("server",JSON.stringify(obj_send));
    document.getElementById("deb").innerHTML = JSON.stringify(obj_send)

}
setInterval(refresh, 2000);

//------------------------------------------------------------------


function esp_data(esp_data){

    table_esp_data.splice(0, 200);

    const obj_esp = JSON.parse(esp_data) ;

    for (let i = 0; i < data_table_mqtt.length; i++) {

        var obj_mqtt = JSON.parse(data_table_mqtt[i][2])

        for (let j = 0; j < 10; j++) {

            if(obj_mqtt.ad == obj_esp["ad"+j]){

                let type = data_table_mqtt[i][0];
                let name = data_table_mqtt[i][1];
                let value = obj_esp["da"+j];
                table_esp_data.push([type,name,value]);

            }
        }

    }

    show_table_esp();
}







