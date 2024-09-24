
var select_name = document.getElementById("select_name");
var select_type = document.getElementById("select_type");

//----------------------- SELECT TYPE

function show_select_type(){

    for (let i=0; i<list_type.length; i++) {
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(list_type[i]);
        z.appendChild(t);
        document.getElementById("select_type").appendChild(z);
    }
}

//----------------------- SELECT NAME
function shiw_list_name(){

    // clear select name
    while (select_name.hasChildNodes()) {
        select_name.removeChild(select_name.firstChild);
    }

    if( select_type.options[select_type.selectedIndex].text ==  list_type[1] )list_name = list_voltage;
    else if( select_type.options[select_type.selectedIndex].text ==  list_type[2] )list_name = list_current;
    else list_name=0;

    for (let i=0; i<list_name.length; i++) {
        var z = document.createElement("option");
        z.setAttribute("value", list_name[i][1]);
        var t = document.createTextNode(list_name[i][0]);
        z.appendChild(t);
        document.getElementById("select_name").appendChild(z);
    }

}
