var data_table_mqtt = [[],];

data_table_mqtt.splice(0, 1);
function function_delet(elem){
    data_table_mqtt.splice(elem.value, 1);
    show_table_data();
}

function add_to_table_data(){

    let select_name = document.getElementById("select_name");
    let select_type = document.getElementById("select_type");

    let type = select_type.options[select_type.selectedIndex].text;
    let name = select_name.options[select_name.selectedIndex].text;
    let value =select_name.options[select_name.selectedIndex].value;
    let status=1;

    let found=0;
    for (let i = 0; i < data_table_mqtt.length; i++) {
        if( data_table_mqtt[i][0] == type && data_table_mqtt[i][1] == name ){
            found=1;
        }
    }

    if( found == 0 ){
        data_table_mqtt.push([type,name,value,status]);
        show_table_data();
    }

}

//-------------------

//x.deleteRow(0);
//delete data_table[2]
function show_table_data(){

    // document.getElementById("deb").innerHTML = data_table_mqtt

    var table_mqtt = document.getElementById("table_mqtt");

    table_mqtt.replaceChildren();

    for (let j = 0; j < data_table_mqtt.length; j++) {

        var y = document.createElement("TR");
        y.setAttribute("id", "tr_mqtt"+j);
        table_mqtt.appendChild(y);

        var z = document.createElement("TD");
        var t = document.createTextNode(j);
        z.appendChild(t);
        document.getElementById("tr_mqtt"+j).appendChild(z);

        for (let i = 0; i < data_table_mqtt[j].length; i++) {
            var z = document.createElement("TD");
            var t = document.createTextNode(data_table_mqtt[j][i]);
            z.appendChild(t);
            document.getElementById("tr_mqtt"+j).appendChild(z);
        }

        const newButton = document.createElement('button');
        newButton.textContent = "del="+j;
        newButton.setAttribute("id", "btn"+j);
        newButton.className = "btn btn-danger";
        newButton.value = j;
        newButton.addEventListener("click", function() {
            function_delet(this);
        });
        document.getElementById("tr_mqtt"+j).appendChild(newButton);
    }
}