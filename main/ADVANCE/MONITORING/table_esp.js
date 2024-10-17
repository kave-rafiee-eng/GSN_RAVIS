var table_esp_data = [[],];
table_esp_data.splice(0, 1);
function show_table_esp(){

    // document.getElementById("deb").innerHTML = data_table_mqtt

    /*let type = "s"
    let name = "a"
    let value = 10
    table_esp_data.push([type,name,value]);*/


    //document.getElementById("deb").innerHTML = "**/"+table_esp_data;

   var table_esp = document.getElementById("table_esp");

    table_esp.replaceChildren();

    for (let j = 0; j < data_table_mqtt.length; j++) {

        var y = document.createElement("TR");
        y.setAttribute("id", "tr_esp"+j);
        table_esp.appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode(j);
        z.appendChild(t);
        document.getElementById("tr_esp"+j).appendChild(z);

        let index=0;
        for (let k = 0; k < data_table_mqtt.length; k++) {
            if( data_table_mqtt[j][0] == table_esp_data[k][0] && data_table_mqtt[j][1] == table_esp_data[k][1] ){
                index=k;
            }
        }

        for (let i = 0; i < table_esp_data[index].length; i++) {
            var z = document.createElement("TD");
            var t = document.createTextNode(table_esp_data[index][i]);
            t.s
            z.appendChild(t);
            document.getElementById("tr_esp"+j).appendChild(z);
        }

    }

}