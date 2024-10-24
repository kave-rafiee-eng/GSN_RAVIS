
var select_type = document.getElementById("select_type");

function load_end(){

    show_select_type();
    //startConnect()

    show_table_flag()
}
window.addEventListener("load", load_end);

function show_select_type(){

    for (let i=0; i<list_type.length; i++) {
        var z = document.createElement("option");
        z.setAttribute("value", i);
        var t = document.createTextNode(list_type[i]);
        z.appendChild(t);
        document.getElementById("select_type").appendChild(z);
    }
}

var status="unknown";
let bit=1;

var list_input = [[],];
list_input.splice(0, 1);

var obj = new Object();

obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_input.push(["CA1" , JSON.stringify(obj),"unknown",1  ]);

obj.ar = 0; obj.ad = 39;  obj.bit=1;
list_input.push(["CAN" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_input.push(["1CF" , JSON.stringify(obj),"unknown",1  ]);

obj.ar = 0; obj.ad = 39;  obj.bit=1;
list_input.push(["CF3" , JSON.stringify(obj),"unknown",0  ]);

obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_input.push(["68" , JSON.stringify(obj),"unknown",1  ]);


obj.ar = 0; obj.ad = 39;  obj.bit=0;
list_input.push(["IN 1" , JSON.stringify(obj),"unknown",1  ]);

//------------------------------------------------------------------

function show_table_flag(){

    var table_flag = document.getElementById("table_flag");

    table_flag.replaceChildren();

    for (let j = 0; j < list_input.length; j++) {

        var tr = document.createElement("TR");
        var td = document.createElement("TD");

        const h1 = document.createElement("h2");
        h1.style.fontFamily = "Garamond";
        const textNode = document.createTextNode(list_input[j][0]);
        h1.appendChild(textNode);



        tr.setAttribute("id", "tr_flag"+j);
        table_flag.appendChild(tr);
        td.appendChild(h1);
        tr.appendChild(td);

        const newButton = document.createElement('button');
       /* newButton.textContent = "delete";
        newButton.setAttribute("id", "btn"+j);
        newButton.className = "btn btn-danger";
        newButton.value = j;
*/

        td = document.createElement("TD");

        newButton.textContent = list_input[j][0]+"        "
        newButton.style.width = "100%"
        newButton.className = "btn btn-primary btn-lg"
        if( list_input[j][3] == 0 ){

            newButton.style.background = "#f3ca20"
            newButton.style.color = "#ffffff"
            newButton.style.border = "1px solid #f3ca20"
            newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
            newButton.style.boxShadow = " 0 0 20px #f3ca20"

            var symbol = document.createElement('i')
            symbol.className = "bi bi-1-circle-fill";
            symbol.style.color = "#ffffff"
            newButton.appendChild(symbol);

        }
        else{

            newButton.style.background = "#408ec6"
            newButton.style.color = "#ffffff"
            newButton.style.border = "1px solid #babfc1"
            newButton.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
            //newButton.style.boxShadow = "0 0 2px #babfc1, 0 0 5px #babfc1, 0 0 10px #babfc1, 0 0 20px #babfc1"

            var symbol = document.createElement('i')
            symbol.className = "bi bi-0-circle-fill";
            symbol.style.color = "#ffffff"
            newButton.appendChild(symbol);
        }


        td.appendChild(newButton);
        tr.appendChild(td);


        /* var td = document.createElement("TD");
         var t = document.createTextNode(table_esp_data[index][i]);
         if(i==2)z.style.backgroundColor = "#89ABE3"
         z.appendChild(t);
         document.getElementById("tr_esp"+j).appendChild(z);*/

    }


    // btn.style.background = "#babfc1"







        /*const btn = document.getElementById("btn_test")
        btn.textContent = "in 68    "
        btn.style.background = "#e2e7ea"
        btn.style.color = "#000000"
        btn.style.border = "1px solid #babfc1"
        btn.style.textShadowColor = "text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff"
        btn.style.boxShadow = "0 0 2px #babfc1, 0 0 5px #babfc1, 0 0 10px #babfc1, 0 0 20px #babfc1"

        var symbol = document.createElement('i')
        symbol.className = "bi bi-0-circle-fill";
        symbol.style.color = "#f30b61"
        btn.appendChild(symbol);*/



}




