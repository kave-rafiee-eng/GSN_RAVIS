
function load_end(){


    startConnect();

    //buttonAction("service_type");

    createMultySelect(arrays.multy_SELECT)

}
window.addEventListener("load", load_end);



function button_TABLE_creat(  ) {
    buttonAction("mian_menu");
}

var activeArray
function buttonAction(name) {

    // نمایش دیتای دریافتی تابع
    //alert(arrays[name]);  // خروجی: ["A", "B", "C"]

    let btn = document.getElementById("div_BTN_save_read");
    if (btn) {
        btn.remove(); // حذف جدول
    }

    let table = document.getElementById("dynamicTable");
    if (table) {
        table.remove(); // حذف جدول
    }

    let select = document.getElementById("div_dynamicSelect");
    if (select) {
        select.remove(); // حذف سلکت
    }

    let input = document.getElementById("div_dynamicInput");
    if (input) {
        input.remove(); // حذف جدول
    }

    if( arrays[name] ){
        activeArray = structuredClone(arrays[name])
    }
    else{
        activeArray = structuredClone(arrays["mian_menu"])
    }

    if( activeArray[0].type == "table" ){
        createTable(activeArray);
    }
    else if ( activeArray[0].type == "select") {
        createSelect(activeArray);
    }
    else if ( activeArray[0].type == "input") {
        createInput(activeArray);
    }

    send_mqtt();

}


function send_check(){

    send_mqtt();

}
setInterval(send_check, 4000);

function save() {
    activeArray[0].status = "upload";
    send_mqtt();
}
function read() {
    activeArray[0].status = "download";
    send_mqtt();
}


function send_mqtt(){

    if ( activeArray[0].type == "input" || activeArray[0].type == "select" ) {

        if( activeArray[0].status != "update"  ){

            var obj_send = new Object();

            let serial = Number(document.getElementById("div_serial").textContent )

            obj_send.serial = serial;

            obj_send["ad1"] = activeArray[0].ad;
            obj_send["ar1"] = activeArray[0].ar;
            if( activeArray[0].status == "upload" ){
                obj_send["st1"] = 1;
                obj_send["da1"] = document.getElementById(activeArray[1]).value;
            }
            else{
                obj_send["st1"] = 0;
                obj_send["da1"] = 0;
            }

            let topic = "server/"+serial

            console.log(JSON.stringify(obj_send));
            publishMessage(topic,JSON.stringify(obj_send));

            activeArray[0].send = 1;

            activeArray[0].status = "download"
        }

        if(activeArray[0].status != "update"){
            showProgressModal('در حال اتصال ...', 'لطفاً منتظر بمانید.');
        }

    }

}

function ADVANCE_mqtt_massage_get(DATA){

    console.log("DATA GET");

    var DATA_Recive = JSON.parse(DATA) ;

    if ( activeArray[0].type == "input" || activeArray[0].type == "select") {

        //var json_activeArray = JSON.parse(activeArray[0])

        for (let j = 0; j < 10; j++) {

            if(activeArray[0].ar == DATA_Recive["ar"+j] && activeArray[0].ad == DATA_Recive["ad"+j] ){

                activeArray[0].data = DATA_Recive["da"+j]
                activeArray[0].status = "update"

                updateProgress(100);
                document.getElementById(activeArray[1]).value=activeArray[0].data;

                console.log(activeArray);

            }
        }
    }

    /*
    kave_chart.data.datasets[0].data[1]=get_count*50;
    kave_chart.update()

    show_status();*/

}





















